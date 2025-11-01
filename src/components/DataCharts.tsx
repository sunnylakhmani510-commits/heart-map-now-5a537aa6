import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { parseStrokeCSV } from "@/utils/csvParser";
import csvData from "@/data/stroke-mortality-data.csv?url";

const ageDistributionData = [
  { name: "Under 45", value: 15, color: "hsl(var(--chart-1))" },
  { name: "45-54", value: 22, color: "hsl(var(--chart-2))" },
  { name: "55-64", value: 28, color: "hsl(var(--chart-3))" },
  { name: "65+", value: 35, color: "hsl(var(--chart-4))" },
];

const monthlyTrendData = [
  { month: "Jan", cases: 850 },
  { month: "Feb", cases: 820 },
  { month: "Mar", cases: 890 },
  { month: "Apr", cases: 870 },
  { month: "May", cases: 920 },
  { month: "Jun", cases: 950 },
  { month: "Jul", cases: 980 },
  { month: "Aug", cases: 970 },
  { month: "Sep", cases: 940 },
  { month: "Oct", cases: 960 },
  { month: "Nov", cases: 990 },
  { month: "Dec", cases: 1020 },
];

const DataCharts = () => {
  const [filterState, setFilterState] = useState<string>("all");
  const [filterSex, setFilterSex] = useState<string>("all");
  const [strokeData, setStrokeData] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await parseStrokeCSV(csvData);
      setStrokeData(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (strokeData.length === 0) return;

    let filtered = strokeData.filter(item => {
      const stateMatch = filterState === "all" || item.state === filterState;
      const sexMatch = filterSex === "all" || item.sex === filterSex;
      return stateMatch && sexMatch;
    });

    // Aggregate by state
    const stateMap = new Map<string, { totalValue: number; count: number }>();
    filtered.forEach(item => {
      if (!stateMap.has(item.state)) {
        stateMap.set(item.state, { totalValue: 0, count: 0 });
      }
      const entry = stateMap.get(item.state)!;
      entry.totalValue += item.dataValue || 0;
      entry.count += 1;
    });

    const aggregated = Array.from(stateMap.entries())
      .map(([state, data]) => ({
        state,
        avgRate: Math.round(data.totalValue / data.count),
        count: data.count,
      }))
      .sort((a, b) => b.avgRate - a.avgRate)
      .slice(0, 10);

    setChartData(aggregated);
  }, [strokeData, filterState, filterSex]);

  const states = ["all", ...Array.from(new Set(strokeData.map(d => d.state)))].sort();
  const sexOptions = ["all", ...Array.from(new Set(strokeData.map(d => d.sex)))];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Stroke Mortality Data Visualizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Interactive charts showing stroke mortality patterns across the United States
            </p>
          </div>

          <Card className="mb-8 bg-muted/30">
            <CardHeader>
              <CardTitle>Filter Data</CardTitle>
              <CardDescription>Customize the data view by state and sex</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">State</label>
                  <Select value={filterState} onValueChange={setFilterState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>
                          {state === "all" ? "All States" : state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sex</label>
                  <Select value={filterSex} onValueChange={setFilterSex}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                    <SelectContent>
                      {sexOptions.map(sex => (
                        <SelectItem key={sex} value={sex}>
                          {sex === "all" ? "All" : sex}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading data...</p>
            </div>
          ) : (
            <>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Top 10 States by Stroke Mortality Rate</CardTitle>
                  <CardDescription>Average mortality rate per 100,000 population</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="state" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="avgRate" fill="hsl(var(--primary))" name="Avg Rate per 100k" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Data Source:</strong> The visualizations above display real stroke mortality data 
                    from your uploaded CSV file. The data includes {strokeData.length.toLocaleString()} data points across multiple states, 
                    counties, and demographic categories. Use the filters above to explore specific patterns and trends.
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataCharts;
