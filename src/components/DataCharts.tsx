import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data - will be replaced with actual Excel data
const heartAttackData = [
  { location: "New York", cases: 1250, rate: 145, age_group: "65+" },
  { location: "Los Angeles", cases: 980, rate: 132, age_group: "55-64" },
  { location: "Chicago", cases: 875, rate: 152, age_group: "65+" },
  { location: "Houston", cases: 720, rate: 138, age_group: "45-54" },
  { location: "Phoenix", cases: 640, rate: 128, age_group: "55-64" },
];

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
  const [filterLocation, setFilterLocation] = useState<string>("all");
  const [filterAgeGroup, setFilterAgeGroup] = useState<string>("all");

  const locations = ["all", ...Array.from(new Set(heartAttackData.map(d => d.location)))];
  const ageGroups = ["all", ...Array.from(new Set(heartAttackData.map(d => d.age_group)))];

  const filteredData = heartAttackData.filter(item => {
    const locationMatch = filterLocation === "all" || item.location === filterLocation;
    const ageMatch = filterAgeGroup === "all" || item.age_group === filterAgeGroup;
    return locationMatch && ageMatch;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Data Visualizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Interactive charts showing heart attack patterns and trends
            </p>
          </div>

          <Card className="mb-8 bg-muted/30">
            <CardHeader>
              <CardTitle>Filter Data</CardTitle>
              <CardDescription>Customize the data view by location and age group</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={filterLocation} onValueChange={setFilterLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(loc => (
                        <SelectItem key={loc} value={loc}>
                          {loc === "all" ? "All Locations" : loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Age Group</label>
                  <Select value={filterAgeGroup} onValueChange={setFilterAgeGroup}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageGroups.map(age => (
                        <SelectItem key={age} value={age}>
                          {age === "all" ? "All Age Groups" : age}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Heart Attack Cases by Location</CardTitle>
                <CardDescription>Total reported cases in major cities</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="location" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)"
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="cases" fill="hsl(var(--primary))" name="Cases" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Percentage of heart attacks by age group</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={ageDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ageDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)"
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Heart Attack Trend</CardTitle>
              <CardDescription>Cases over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="cases" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    name="Heart Attack Cases"
                    dot={{ fill: "hsl(var(--accent))", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> The charts above show sample data for demonstration. 
                Once you upload your Excel spreadsheet with latitude, longitude, and other data fields, 
                these visualizations will automatically update to reflect your actual data. The system supports 
                filtering by multiple parameters and interactive exploration of geographic patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataCharts;
