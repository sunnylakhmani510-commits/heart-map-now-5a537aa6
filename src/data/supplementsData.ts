export interface Supplement {
  name: string;
  slug: string;
  description: string;
  detailedDescription: string;
  dosage: string;
  detailedDosage: string;
  benefits: string[];
  precautions: string[];
  evidence: string;
  sources: Array<{ name: string; url: string }>;
  additionalLinks: Array<{ name: string; url: string }>;
}

export const supplements: Supplement[] = [
  {
    name: "Omega-3 Fatty Acids",
    slug: "omega-3-fatty-acids",
    description: "EPA and DHA from fish oil help reduce triglycerides, lower blood pressure, and decrease inflammation.",
    detailedDescription: "Omega-3 fatty acids, particularly EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), are essential fats that your body cannot produce on its own. These marine-derived omega-3s have been extensively studied for their cardiovascular benefits. They work by reducing inflammation throughout the body, lowering triglyceride levels, slightly reducing blood pressure, and decreasing blood clotting tendency. Regular consumption has been associated with reduced risk of heart attacks, strokes, and sudden cardiac death.",
    dosage: "1,000-3,000mg daily",
    detailedDosage: "For general heart health: 1,000mg combined EPA/DHA daily. For elevated triglycerides: 2,000-4,000mg daily under medical supervision. Best taken with meals to enhance absorption and reduce fishy aftertaste. Look for products with EPA:DHA ratio of approximately 2:1 or 3:2.",
    benefits: [
      "Reduces triglyceride levels by 15-30%",
      "Lowers blood pressure by 2-3 mmHg",
      "Decreases inflammation markers",
      "May reduce risk of sudden cardiac death",
      "Improves endothelial function",
      "Reduces blood clot formation"
    ],
    precautions: [
      "May increase bleeding risk, especially with blood thinners",
      "Can cause fishy burps or aftertaste",
      "Choose products tested for mercury and contaminants",
      "Consult doctor if on anticoagulant medications",
      "Store in refrigerator to prevent oxidation"
    ],
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/fish-and-omega-3-fatty-acids" },
      { name: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/" }
    ],
    additionalLinks: [
      { name: "Mayo Clinic - Fish Oil Benefits", url: "https://www.mayoclinic.org/drugs-supplements-fish-oil/art-20364810" },
      { name: "WebMD - Omega-3 Guide", url: "https://www.webmd.com/healthy-aging/omega-3-fatty-acids-fact-sheet" },
      { name: "Cleveland Clinic - Omega-3 Benefits", url: "https://my.clevelandclinic.org/health/articles/17290-omega-3-fatty-acids" }
    ]
  },
  {
    name: "Coenzyme Q10 (CoQ10)",
    slug: "coq10",
    description: "Powerful antioxidant that supports heart muscle function and may help with heart failure and statin side effects.",
    detailedDescription: "CoQ10 is a naturally occurring compound found in every cell of your body, with the highest concentrations in organs requiring the most energy, like the heart. It plays a crucial role in energy production within mitochondria and acts as a powerful antioxidant. CoQ10 levels naturally decline with age and are further reduced by statin medications, making supplementation particularly important for older adults and those on cholesterol-lowering drugs.",
    dosage: "100-200mg daily",
    detailedDosage: "For general heart health: 100-200mg daily. For heart failure or statin side effects: 200-300mg daily in divided doses. Take with fatty meals for better absorption. Ubiquinol form may be better absorbed than ubiquinone, especially in older adults. Effects may take 4-12 weeks to become apparent.",
    benefits: [
      "Improves symptoms in heart failure patients",
      "Reduces oxidative stress on heart tissue",
      "May help reduce statin-related muscle pain",
      "Supports cellular energy production",
      "May lower blood pressure by 10-17 mmHg",
      "Improves exercise capacity in heart disease"
    ],
    precautions: [
      "May interact with blood thinners like warfarin",
      "Can cause mild digestive upset",
      "Choose ubiquinol form for better absorption",
      "Expensive supplement - verify quality",
      "Effects take several weeks to manifest"
    ],
    evidence: "Strong",
    sources: [
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-coenzyme-q10/art-20362602" },
      { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/articles/17750-coenzyme-q10-coq10" }
    ],
    additionalLinks: [
      { name: "NIH - CoQ10 Overview", url: "https://ods.od.nih.gov/factsheets/CoQ10-HealthProfessional/" },
      { name: "WebMD - CoQ10 Benefits", url: "https://www.webmd.com/vitamins/ai/ingredientmono-938/coenzyme-q10" },
      { name: "Mount Sinai - CoQ10 Information", url: "https://www.mountsinai.org/health-library/supplement/coenzyme-q10" }
    ]
  },
  {
    name: "Magnesium",
    slug: "magnesium",
    description: "Essential mineral for heart rhythm, blood pressure regulation, and reducing risk of cardiovascular disease.",
    detailedDescription: "Magnesium is involved in over 300 biochemical reactions in the body, with critical roles in heart health including regulating heart rhythm, maintaining normal blood pressure, and supporting the structural development of bone. It helps relax blood vessels, regulates electrolyte balance, and is essential for proper muscle and nerve function. Many Americans don't get enough magnesium from their diet, making supplementation particularly beneficial.",
    dosage: "300-400mg daily",
    detailedDosage: "Men: 400-420mg daily. Women: 310-320mg daily. Take with food to minimize digestive upset. Divide doses if taking more than 300mg. Magnesium glycinate, citrate, or threonate forms are better absorbed than oxide. Take at least 2 hours apart from calcium supplements.",
    benefits: [
      "Reduces blood pressure by 3-4 mmHg",
      "Helps prevent heart arrhythmias",
      "Reduces risk of type 2 diabetes",
      "Improves insulin sensitivity",
      "Reduces inflammation",
      "May reduce migraine frequency"
    ],
    precautions: [
      "Can cause diarrhea at high doses",
      "May interact with certain antibiotics",
      "People with kidney disease should consult doctor",
      "Oxide form may cause more digestive issues",
      "Can interfere with some medications"
    ],
    evidence: "Strong",
    sources: [
      { name: "NIH Magnesium Fact Sheet", url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/" },
      { name: "Harvard Health", url: "https://www.health.harvard.edu/staying-healthy/getting-your-magnesium" }
    ],
    additionalLinks: [
      { name: "Cleveland Clinic - Magnesium Benefits", url: "https://health.clevelandclinic.org/magnesium-benefits" },
      { name: "WebMD - Magnesium Guide", url: "https://www.webmd.com/vitamins-and-supplements/supplement-guide-magnesium" },
      { name: "American Heart Association - Magnesium", url: "https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/managing-blood-pressure-with-a-heart-healthy-diet" }
    ]
  },
  {
    name: "Vitamin D",
    slug: "vitamin-d",
    description: "Deficiency linked to increased cardiovascular disease risk. Supports heart health and immune function.",
    detailedDescription: "Vitamin D is a fat-soluble vitamin that functions more like a hormone in the body. Low vitamin D levels have been associated with increased risk of heart attack, stroke, and high blood pressure. It helps regulate calcium metabolism, supports immune function, and may have anti-inflammatory effects on blood vessels. Many people, especially those in northern climates or with limited sun exposure, are deficient in vitamin D.",
    dosage: "1,000-2,000 IU daily",
    detailedDosage: "For maintenance: 1,000-2,000 IU daily. For deficiency: 5,000 IU daily until levels normalize, then reduce to maintenance dose. Take with fatty meals for optimal absorption. Get blood levels tested to determine your optimal dose - aim for 30-50 ng/mL. Higher doses may be needed in winter months or for those with darker skin.",
    benefits: [
      "May reduce cardiovascular disease risk",
      "Supports healthy blood pressure",
      "Improves immune system function",
      "Supports bone health and calcium absorption",
      "May reduce inflammation",
      "Improves mood and reduces depression risk"
    ],
    precautions: [
      "Can accumulate to toxic levels - don't exceed 4,000 IU daily without medical supervision",
      "May interact with certain medications",
      "Get blood levels tested before high-dose supplementation",
      "Take with fat-containing meals",
      "Can cause hypercalcemia at very high doses"
    ],
    evidence: "Moderate",
    sources: [
      { name: "NIH Vitamin D", url: "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/" },
      { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/vitamin-d-and-your-health" }
    ],
    additionalLinks: [
      { name: "Harvard Health - Vitamin D", url: "https://www.health.harvard.edu/staying-healthy/taking-too-much-vitamin-d-can-cloud-its-benefits-and-create-health-risks" },
      { name: "Mayo Clinic - Vitamin D", url: "https://www.mayoclinic.org/drugs-supplements-vitamin-d/art-20363792" },
      { name: "Cleveland Clinic - Vitamin D Benefits", url: "https://my.clevelandclinic.org/health/articles/15050-vitamin-d--vitamin-d-deficiency" }
    ]
  },
  {
    name: "L-Carnitine",
    slug: "l-carnitine",
    description: "Amino acid that helps transport fatty acids for energy production in heart cells. May improve exercise capacity.",
    detailedDescription: "L-Carnitine is an amino acid derivative that plays a crucial role in energy metabolism by transporting long-chain fatty acids into mitochondria for energy production. The heart relies heavily on fatty acid oxidation for energy, making adequate carnitine levels important for optimal cardiac function. Supplementation may be particularly beneficial for those with heart failure, angina, or during recovery from heart attack.",
    dosage: "500-2,000mg daily",
    detailedDosage: "For general heart health: 500-1,000mg daily. For heart failure or angina: 1,500-3,000mg daily in divided doses. Take 30 minutes before meals or exercise. L-carnitine tartrate or acetyl-L-carnitine forms are well absorbed. Effects are typically noticed after 2-4 weeks of consistent use.",
    benefits: [
      "Improves exercise capacity in heart failure",
      "May reduce angina symptoms",
      "Supports recovery after heart attack",
      "Improves energy production in heart muscle",
      "May improve insulin sensitivity",
      "Reduces fatigue"
    ],
    precautions: [
      "May cause fishy body odor at high doses",
      "Can cause nausea or digestive upset",
      "May interact with thyroid medications",
      "Avoid if prone to seizures",
      "Long-term high doses may increase TMAO levels"
    ],
    evidence: "Moderate",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/carnitine-l-carnitine" },
      { name: "NIH L-Carnitine", url: "https://ods.od.nih.gov/factsheets/Carnitine-HealthProfessional/" }
    ],
    additionalLinks: [
      { name: "WebMD - L-Carnitine", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1026/l-carnitine" },
      { name: "Examine.com - L-Carnitine", url: "https://examine.com/supplements/l-carnitine/" },
      { name: "Mayo Clinic - L-Carnitine", url: "https://www.mayoclinic.org/drugs-supplements-l-carnitine/art-20364583" }
    ]
  },
  {
    name: "Garlic Extract",
    slug: "garlic-extract",
    description: "May help lower blood pressure and cholesterol. Contains compounds that support cardiovascular health.",
    detailedDescription: "Aged garlic extract contains sulfur compounds, particularly allicin and its derivatives, that have been shown to have cardiovascular benefits. Garlic works through multiple mechanisms including improving endothelial function, reducing platelet aggregation, lowering blood pressure, and reducing cholesterol levels. Aged garlic extract (AGE) is preferred over fresh garlic for supplementation as it provides consistent levels of active compounds without the strong odor.",
    dosage: "600-1,200mg daily",
    detailedDosage: "For cardiovascular health: 600-1,200mg aged garlic extract daily, or 2-4 grams fresh garlic. Take with meals to minimize digestive upset. Look for products standardized to allicin content. Kyolic Aged Garlic Extract is a well-researched brand. Effects on blood pressure and cholesterol typically appear after 8-12 weeks.",
    benefits: [
      "Reduces blood pressure by 5-10 mmHg",
      "Lowers total cholesterol by 10-15%",
      "Reduces LDL cholesterol",
      "Improves endothelial function",
      "Has mild blood-thinning effects",
      "Reduces arterial plaque buildup"
    ],
    precautions: [
      "May increase bleeding risk with anticoagulants",
      "Can cause heartburn or digestive upset",
      "May cause body odor with some forms",
      "Stop 1-2 weeks before surgery",
      "May interact with HIV medications"
    ],
    evidence: "Moderate",
    sources: [
      { name: "NIH Garlic", url: "https://www.nccih.nih.gov/health/garlic" },
      { name: "WebMD Garlic", url: "https://www.webmd.com/vitamins/ai/ingredientmono-300/garlic" }
    ],
    additionalLinks: [
      { name: "Mount Sinai - Garlic", url: "https://www.mountsinai.org/health-library/herb/garlic" },
      { name: "Cleveland Clinic - Garlic Benefits", url: "https://health.clevelandclinic.org/garlic-benefits" },
      { name: "Examine.com - Garlic", url: "https://examine.com/supplements/garlic/" }
    ]
  },
  {
    name: "Hawthorn",
    slug: "hawthorn",
    description: "Traditional herb for heart health. May improve blood flow and help with mild heart failure symptoms.",
    detailedDescription: "Hawthorn (Crataegus species) has been used for centuries in traditional medicine for heart conditions. It contains flavonoids and oligomeric procyanidins that have cardiotonic effects. Hawthorn improves blood flow to the heart muscle, strengthens the heart's pumping action, and has antioxidant properties. It's particularly studied for mild to moderate heart failure and may help with symptoms like shortness of breath and fatigue.",
    dosage: "160-900mg daily",
    detailedDosage: "For heart failure support: 300-900mg standardized extract daily, divided into 2-3 doses. For general cardiovascular support: 160-300mg daily. Look for extracts standardized to 1.8% vitexin or 18% oligomeric procyanidins. Take consistently for at least 6-8 weeks to assess effects. Works best when combined with conventional heart medications.",
    benefits: [
      "Improves symptoms of mild heart failure",
      "Increases exercise tolerance",
      "Improves blood flow to heart",
      "Has antioxidant properties",
      "May lower blood pressure slightly",
      "Reduces heart palpitations"
    ],
    precautions: [
      "May interact with heart medications",
      "Can cause dizziness or nausea",
      "Don't use during pregnancy",
      "Inform doctor before taking with other heart medications",
      "Effects take several weeks to appear"
    ],
    evidence: "Moderate",
    sources: [
      { name: "NIH Hawthorn", url: "https://www.nccih.nih.gov/health/hawthorn" },
      { name: "University of Michigan Health", url: "https://www.uofmhealth.org/health-library/hn-2127002" }
    ],
    additionalLinks: [
      { name: "Mount Sinai - Hawthorn", url: "https://www.mountsinai.org/health-library/herb/hawthorn" },
      { name: "WebMD - Hawthorn", url: "https://www.webmd.com/vitamins/ai/ingredientmono-527/hawthorn" },
      { name: "Examine.com - Hawthorn", url: "https://examine.com/supplements/hawthorn/" }
    ]
  },
  {
    name: "B-Complex Vitamins",
    slug: "b-complex",
    description: "B6, B9 (folate), and B12 help regulate homocysteine levels, which is important for heart health.",
    detailedDescription: "B vitamins, particularly B6 (pyridoxine), B9 (folate), and B12 (cobalamin), play crucial roles in cardiovascular health by helping metabolize homocysteine, an amino acid that at elevated levels is associated with increased cardiovascular risk. These vitamins work together to convert homocysteine into other beneficial substances. B vitamin deficiencies are common, especially in older adults, vegetarians, and those on certain medications.",
    dosage: "As directed (varies by B vitamin)",
    detailedDosage: "B6: 1.3-2mg daily. B9 (Folate): 400-800mcg daily (choose methylfolate form). B12: 2.4-1,000mcg daily (higher for older adults or those with absorption issues). Take as a B-complex that contains all B vitamins for synergistic effects. Water-soluble, so can be taken with or without food. Sublingual B12 may be better absorbed in some people.",
    benefits: [
      "Reduces homocysteine levels",
      "May reduce stroke risk",
      "Supports energy metabolism",
      "Improves nerve function",
      "Reduces risk of birth defects",
      "May improve mood and cognitive function"
    ],
    precautions: [
      "Very high doses of B6 can cause nerve damage",
      "B12 injections may be needed for severe deficiency",
      "Folate can mask B12 deficiency",
      "Choose methylated forms for better absorption",
      "May interact with certain medications"
    ],
    evidence: "Moderate",
    sources: [
      { name: "NIH B Vitamins", url: "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/" },
      { name: "Harvard T.H. Chan", url: "https://www.hsph.harvard.edu/nutritionsource/vitamins/vitamin-b/" }
    ],
    additionalLinks: [
      { name: "Cleveland Clinic - B Vitamins", url: "https://my.clevelandclinic.org/health/articles/23309-b-vitamins" },
      { name: "Mayo Clinic - B Vitamins", url: "https://www.mayoclinic.org/drugs-supplements-vitamin-b12/art-20363663" },
      { name: "WebMD - B Complex", url: "https://www.webmd.com/diet/vitamin-b-complex" }
    ]
  },
  {
    name: "Red Yeast Rice",
    slug: "red-yeast-rice",
    description: "Contains naturally occurring statins. May help lower cholesterol but consult doctor if on statin medications.",
    detailedDescription: "Red yeast rice is produced by fermenting rice with the yeast Monascus purpureus. It naturally contains monacolin K, which is chemically identical to the prescription drug lovastatin. This gives it cholesterol-lowering properties similar to statin medications. However, the amount of monacolin K can vary significantly between products, making dosing inconsistent. It should only be used under medical supervision, especially if you have liver disease or take other medications.",
    dosage: "1,200-2,400mg daily",
    detailedDosage: "For cholesterol reduction: 1,200-2,400mg daily (containing approximately 5-10mg monacolin K), typically split into two doses with meals. Look for products that specify monacolin K content. Some products have had monacolin K removed due to FDA regulations, making them ineffective. Should be combined with CoQ10 supplementation (100-200mg) to offset potential CoQ10 depletion.",
    benefits: [
      "Reduces LDL cholesterol by 15-25%",
      "Lowers total cholesterol",
      "May reduce triglycerides",
      "Generally well-tolerated",
      "Natural alternative to statins",
      "May improve endothelial function"
    ],
    precautions: [
      "Contains natural statin - same risks as prescription statins",
      "Can cause muscle pain or liver problems",
      "Don't combine with prescription statins",
      "Requires liver function monitoring",
      "Product quality and potency varies widely",
      "Avoid during pregnancy and breastfeeding"
    ],
    evidence: "Moderate",
    sources: [
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-red-yeast-rice/art-20363074" },
      { name: "NIH Red Yeast Rice", url: "https://www.nccih.nih.gov/health/red-yeast-rice" }
    ],
    additionalLinks: [
      { name: "WebMD - Red Yeast Rice", url: "https://www.webmd.com/vitamins/ai/ingredientmono-925/red-yeast-rice" },
      { name: "Cleveland Clinic - Red Yeast Rice", url: "https://health.clevelandclinic.org/red-yeast-rice" },
      { name: "Consumer Reports - Red Yeast Rice", url: "https://www.consumerreports.org/vitamins-supplements/red-yeast-rice-a-risky-cholesterol-supplement/" }
    ]
  },
  {
    name: "Fiber Supplements",
    slug: "fiber-supplements",
    description: "Psyllium and other soluble fibers help lower LDL cholesterol and support heart health.",
    detailedDescription: "Soluble fiber, particularly psyllium husk, binds to cholesterol in the digestive system and helps remove it from the body. This mechanism can significantly reduce LDL cholesterol levels. Fiber also helps control blood sugar, promotes feelings of fullness, supports digestive health, and feeds beneficial gut bacteria. Most Americans consume far less fiber than recommended, making supplementation a practical way to increase intake.",
    dosage: "5-10g daily",
    detailedDosage: "For cholesterol reduction: 5-10g soluble fiber daily (such as psyllium husk), divided into 2-3 doses. Start with lower dose and increase gradually to minimize gas and bloating. Take with at least 8 ounces of water, 30-60 minutes before or 2-4 hours after medications to avoid interfering with absorption. Best taken before meals. Increase water intake throughout the day.",
    benefits: [
      "Lowers LDL cholesterol by 5-10%",
      "Improves blood sugar control",
      "Promotes healthy weight management",
      "Supports digestive health",
      "Feeds beneficial gut bacteria",
      "Reduces heart disease risk"
    ],
    precautions: [
      "Start slowly to avoid gas and bloating",
      "Drink plenty of water to prevent constipation",
      "May interfere with medication absorption",
      "Can cause choking if not taken with enough water",
      "May cause allergic reactions in some people"
    ],
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/fiber" },
      { name: "Harvard Health", url: "https://www.health.harvard.edu/nutrition/should-i-be-taking-a-fiber-supplement" }
    ],
    additionalLinks: [
      { name: "Mayo Clinic - Fiber", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/fiber/art-20043983" },
      { name: "Cleveland Clinic - Fiber Benefits", url: "https://health.clevelandclinic.org/benefits-of-fiber" },
      { name: "WebMD - Psyllium", url: "https://www.webmd.com/vitamins/ai/ingredientmono-866/psyllium" }
    ]
  },
  {
    name: "Niacin (Vitamin B3)",
    slug: "niacin",
    description: "Can help raise HDL (good) cholesterol and lower triglycerides. High doses require medical supervision.",
    detailedDescription: "Niacin (vitamin B3) is one of the most effective supplements for raising HDL cholesterol levels. It also lowers triglycerides and can modestly reduce LDL cholesterol. At high doses (prescription level), niacin has significant lipid-modifying effects, but also causes flushing and other side effects. Lower supplemental doses provide cardiovascular benefits with fewer side effects. Extended-release forms help reduce flushing but may have different risk profiles.",
    dosage: "14-16mg daily (RDA)",
    detailedDosage: "RDA: 14-16mg daily. For cholesterol effects: 500-2,000mg daily under medical supervision. Start with 100mg 2-3 times daily and gradually increase over weeks. Take with food to reduce stomach upset. Taking 325mg aspirin 30 minutes before can reduce flushing. Extended-release forms reduce flushing but may affect liver more. Regular liver function tests needed at high doses.",
    benefits: [
      "Raises HDL cholesterol by 15-35%",
      "Lowers triglycerides by 20-50%",
      "Reduces LDL cholesterol by 5-25%",
      "Lowers Lp(a) levels",
      "May reduce cardiovascular events",
      "Improves overall lipid profile"
    ],
    precautions: [
      "Causes flushing in most people at high doses",
      "Can raise blood sugar",
      "May cause liver problems at high doses",
      "Can worsen gout",
      "Requires medical monitoring at prescription doses",
      "May interact with diabetes and blood pressure medications"
    ],
    evidence: "Moderate",
    sources: [
      { name: "NIH Niacin", url: "https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/" },
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984" }
    ],
    additionalLinks: [
      { name: "Cleveland Clinic - Niacin", url: "https://my.clevelandclinic.org/health/articles/23263-niacin" },
      { name: "WebMD - Niacin", url: "https://www.webmd.com/vitamins/ai/ingredientmono-924/niacin-and-niacinamide-vitamin-b3" },
      { name: "Harvard Health - Niacin", url: "https://www.health.harvard.edu/heart-health/niacin-for-cholesterol-not-for-everyone" }
    ]
  },
  {
    name: "Potassium",
    slug: "potassium",
    description: "Essential for heart rhythm and blood pressure control. Helps counteract sodium's effects.",
    detailedDescription: "Potassium is an essential mineral and electrolyte that plays a critical role in heart health. It helps regulate heart rhythm, maintains healthy blood pressure by countering sodium's effects, and is necessary for proper muscle and nerve function. Higher potassium intake is associated with reduced stroke risk. Most Americans don't consume enough potassium, primarily found in fruits, vegetables, and legumes.",
    dosage: "2,600-3,400mg daily",
    detailedDosage: "Women: 2,600mg daily. Men: 3,400mg daily. Supplements typically contain only 99mg per dose due to safety regulations - higher doses can cause GI irritation. Best obtained through diet (bananas, sweet potatoes, spinach, beans). If supplementing, divide doses throughout the day with meals. Extended-release forms are gentler on stomach.",
    benefits: [
      "Lowers blood pressure by 3-5 mmHg",
      "Reduces stroke risk by up to 24%",
      "Protects against irregular heartbeats",
      "Reduces kidney stone risk",
      "Preserves bone mineral density",
      "May reduce risk of heart disease"
    ],
    precautions: [
      "People with kidney disease should not supplement",
      "High doses can cause dangerous heart rhythms",
      "May interact with blood pressure medications",
      "Can cause GI upset at high doses",
      "ACE inhibitors and ARBs can increase potassium levels",
      "Regular monitoring needed if on certain medications"
    ],
    evidence: "Strong",
    sources: [
      { name: "NIH Potassium", url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/" },
      { name: "American Heart Association", url: "https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/how-potassium-can-help-control-high-blood-pressure" }
    ],
    additionalLinks: [
      { name: "Harvard Health - Potassium", url: "https://www.health.harvard.edu/heart-health/potassium-lowers-blood-pressure" },
      { name: "Mayo Clinic - Potassium", url: "https://www.mayoclinic.org/drugs-supplements-potassium/art-20363527" },
      { name: "Cleveland Clinic - Potassium", url: "https://my.clevelandclinic.org/health/articles/22887-potassium" }
    ]
  },
  {
    name: "Berberine",
    slug: "berberine",
    description: "Plant compound that may help lower cholesterol, blood sugar, and support overall cardiovascular health.",
    detailedDescription: "Berberine is a bioactive compound extracted from several plants including goldenseal and barberry. It has been used in traditional Chinese medicine for centuries and has gained attention for its effects on metabolic health. Berberine activates AMPK (an enzyme that regulates metabolism), improves insulin sensitivity, reduces cholesterol production in the liver, and has anti-inflammatory effects. Some studies suggest it may be as effective as certain diabetes medications.",
    dosage: "900-1,500mg daily",
    detailedDosage: "Standard dose: 500mg taken 2-3 times daily before meals (total 1,000-1,500mg daily). Take before or with meals to reduce GI side effects and enhance absorption. Start with one dose daily for the first week, then increase. Look for products that include compounds to enhance absorption. Effects on blood sugar and cholesterol typically seen after 8-12 weeks.",
    benefits: [
      "Lowers LDL cholesterol by 20-28mg/dL",
      "Reduces blood sugar levels",
      "Improves insulin sensitivity",
      "Aids in weight loss",
      "Has anti-inflammatory effects",
      "May improve gut health"
    ],
    precautions: [
      "Can cause digestive upset (diarrhea, constipation)",
      "May lower blood sugar too much with diabetes medications",
      "Can interact with many medications",
      "Not recommended during pregnancy or breastfeeding",
      "May affect gut bacteria balance",
      "Start with low dose to assess tolerance"
    ],
    evidence: "Emerging",
    sources: [
      { name: "Cleveland Clinic", url: "https://health.clevelandclinic.org/berberine-supplement" },
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/berberine" }
    ],
    additionalLinks: [
      { name: "Examine.com - Berberine", url: "https://examine.com/supplements/berberine/" },
      { name: "WebMD - Berberine", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1126/berberine" },
      { name: "Healthline - Berberine Benefits", url: "https://www.healthline.com/nutrition/berberine-powerful-supplement" }
    ]
  },
  {
    name: "Alpha-Lipoic Acid",
    slug: "alpha-lipoic-acid",
    description: "Powerful antioxidant that may help protect blood vessels and improve endothelial function.",
    detailedDescription: "Alpha-lipoic acid (ALA) is a potent antioxidant that works both in water and fatty tissues, making it uniquely versatile. It helps regenerate other antioxidants like vitamin C and E, supports mitochondrial function, and has been shown to improve endothelial function. ALA also improves insulin sensitivity and may help with diabetic neuropathy. Its ability to cross the blood-brain barrier makes it particularly valuable for overall health.",
    dosage: "300-600mg daily",
    detailedDosage: "For cardiovascular support: 300-600mg daily on an empty stomach (30 minutes before meals). For diabetes support: 600-1,200mg daily in divided doses. R-lipoic acid is the natural form and may be better absorbed. Take in morning or early afternoon as it may affect sleep if taken late. Effects typically noticed after 4-8 weeks.",
    benefits: [
      "Powerful antioxidant protection",
      "Improves endothelial function",
      "Enhances insulin sensitivity",
      "May reduce inflammation",
      "Helps regenerate other antioxidants",
      "Supports nerve health"
    ],
    precautions: [
      "Can lower blood sugar - monitor if diabetic",
      "May cause mild digestive upset",
      "Possible interaction with thyroid medications",
      "Take away from food for best absorption",
      "May cause a metallic taste",
      "Generally well-tolerated"
    ],
    evidence: "Emerging",
    sources: [
      { name: "NIH Alpha-Lipoic Acid", url: "https://ods.od.nih.gov/factsheets/AlphaLipoicAcid-HealthProfessional/" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-767/alpha-lipoic-acid" }
    ],
    additionalLinks: [
      { name: "Mount Sinai - Alpha Lipoic Acid", url: "https://www.mountsinai.org/health-library/supplement/alpha-lipoic-acid" },
      { name: "Examine.com - ALA", url: "https://examine.com/supplements/alpha-lipoic-acid/" },
      { name: "Mayo Clinic - Alpha-Lipoic Acid", url: "https://www.mayoclinic.org/drugs-supplements-alpha-lipoic-acid/art-20364539" }
    ]
  },
  {
    name: "Turmeric/Curcumin",
    slug: "turmeric-curcumin",
    description: "Anti-inflammatory properties may support heart health by reducing inflammation and oxidative stress.",
    detailedDescription: "Curcumin is the active compound in turmeric that gives it powerful anti-inflammatory and antioxidant properties. Chronic inflammation is a key factor in cardiovascular disease, and curcumin has been shown to reduce inflammatory markers. It also improves endothelial function, may help prevent LDL oxidation, and has been studied for its potential to reduce risk factors for heart disease. However, curcumin has poor bioavailability, so enhanced formulations are important.",
    dosage: "500-2,000mg daily",
    detailedDosage: "For cardiovascular health: 500-1,000mg curcumin daily with 5-10mg piperine (black pepper extract) to enhance absorption. Alternatively, use enhanced formulations like Meriva (phospholipid complex) or BCM-95. Take with fatty meals for better absorption. Divide doses throughout the day. Effects on inflammation markers typically seen after 4-8 weeks.",
    benefits: [
      "Reduces inflammatory markers",
      "Improves endothelial function",
      "Powerful antioxidant effects",
      "May lower cholesterol",
      "Reduces oxidative stress",
      "May improve arterial stiffness"
    ],
    precautions: [
      "Can cause digestive upset in some people",
      "May increase bleeding risk at high doses",
      "Poor absorption without enhancement",
      "May interact with blood thinners",
      "Can worsen gallbladder problems",
      "High doses may cause nausea"
    ],
    evidence: "Emerging",
    sources: [
      { name: "NIH Turmeric", url: "https://www.nccih.nih.gov/health/turmeric" },
      { name: "Johns Hopkins Medicine", url: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/turmeric-spice" }
    ],
    additionalLinks: [
      { name: "Mount Sinai - Turmeric", url: "https://www.mountsinai.org/health-library/herb/turmeric" },
      { name: "Examine.com - Curcumin", url: "https://examine.com/supplements/curcumin/" },
      { name: "Cleveland Clinic - Turmeric Benefits", url: "https://health.clevelandclinic.org/turmeric-health-benefits" }
    ]
  },
  {
    name: "Resveratrol",
    slug: "resveratrol",
    description: "Antioxidant found in red wine and grapes. May have cardioprotective effects.",
    detailedDescription: "Resveratrol is a polyphenol found in grape skins, red wine, and certain berries. It gained attention from the 'French Paradox' - the observation that French people have relatively low rates of heart disease despite a diet high in saturated fat, potentially due to red wine consumption. Resveratrol activates sirtuins (longevity genes), has antioxidant and anti-inflammatory effects, and may improve endothelial function. However, bioavailability is a challenge.",
    dosage: "150-500mg daily",
    detailedDosage: "For cardiovascular support: 250-500mg daily. Trans-resveratrol is the active form - look for products specifying this. Take with fatty meals to enhance absorption. Some studies have used doses up to 1,000mg, but 250-500mg is more typical. Effects are subtle and may take several months to manifest. Consider products with enhanced bioavailability formulations.",
    benefits: [
      "Antioxidant and anti-inflammatory effects",
      "May improve endothelial function",
      "Activates longevity genes (sirtuins)",
      "May lower blood pressure slightly",
      "Reduces LDL oxidation",
      "May improve insulin sensitivity"
    ],
    precautions: [
      "Limited human studies at supplement doses",
      "May interact with blood thinners",
      "Can cause digestive issues at high doses",
      "Bioavailability is limited",
      "Effects in humans less clear than animal studies",
      "Quality varies between products"
    ],
    evidence: "Emerging",
    sources: [
      { name: "Harvard Health", url: "https://www.health.harvard.edu/staying-healthy/resveratrol-the-hype-continues" },
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/expert-answers/red-wine/faq-20058281" }
    ],
    additionalLinks: [
      { name: "Mount Sinai - Resveratrol", url: "https://www.mountsinai.org/health-library/supplement/resveratrol" },
      { name: "WebMD - Resveratrol", url: "https://www.webmd.com/heart-disease/resveratrol-supplements" },
      { name: "Examine.com - Resveratrol", url: "https://examine.com/supplements/resveratrol/" }
    ]
  },
  {
    name: "Plant Sterols/Stanols",
    slug: "plant-sterols-stanols",
    description: "Naturally occurring compounds that help block cholesterol absorption in the intestines.",
    detailedDescription: "Plant sterols and stanols are naturally occurring substances found in plants that have a structure similar to cholesterol. When consumed, they compete with dietary and biliary cholesterol for absorption in the intestines, effectively blocking cholesterol absorption and lowering blood LDL cholesterol levels. They are considered one of the most effective dietary approaches for cholesterol management and are added to some margarines, orange juice, and other fortified foods.",
    dosage: "2g daily",
    detailedDosage: "For cholesterol reduction: 2g daily (2,000mg), typically divided into two doses with meals containing fat. Available in fortified foods (margarine, yogurt, orange juice) or supplements. Take with largest meals of the day. Effects plateau above 2-3g, so higher doses don't provide additional benefit. LDL reduction typically seen within 2-3 weeks and maximizes at 3-4 weeks.",
    benefits: [
      "Reduces LDL cholesterol by 6-15%",
      "Blocks cholesterol absorption by 30-50%",
      "Well-tolerated with few side effects",
      "FDA-approved health claim for heart disease risk reduction",
      "Works additively with statins",
      "Safe for long-term use"
    ],
    precautions: [
      "May reduce absorption of fat-soluble vitamins (A, D, E, K)",
      "Take vitamin supplements at different times",
      "Not recommended for people with sitosterolemia",
      "Benefits are modest but consistent",
      "Need to take regularly to maintain effect",
      "Fortified foods may contain added calories"
    ],
    evidence: "Strong",
    sources: [
      { name: "American Heart Association", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/plant-sterols-and-stanols" },
      { name: "NIH Plant Sterols", url: "https://ods.od.nih.gov/factsheets/Phytosterols-HealthProfessional/" }
    ],
    additionalLinks: [
      { name: "Mayo Clinic - Plant Sterols", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/in-depth/cholesterol/art-20045192" },
      { name: "Cleveland Clinic - Plant Sterols", url: "https://health.clevelandclinic.org/plant-sterols-and-stanols" },
      { name: "Harvard Health - Sterols", url: "https://www.health.harvard.edu/heart-health/11-foods-that-lower-cholesterol" }
    ]
  },
  {
    name: "Taurine",
    slug: "taurine",
    description: "Amino acid that supports heart function, may help lower blood pressure and reduce heart failure risk.",
    detailedDescription: "Taurine is a conditionally essential amino acid found in high concentrations in the heart, brain, and muscles. It has multiple cardiovascular benefits including regulating calcium levels in cells, supporting the contractility of heart muscle, stabilizing cell membranes, and having antioxidant effects. Taurine levels decline with age, and supplementation has been studied for heart failure, hypertension, and general cardiovascular protection.",
    dosage: "500-2,000mg daily",
    detailedDosage: "For cardiovascular support: 500-2,000mg daily in divided doses. For heart failure: 3,000-6,000mg daily under medical supervision. Take between meals or before exercise. Start with lower dose and increase gradually. Taurine is water-soluble and safe at high doses. Effects on blood pressure may be noticed within 2-4 weeks.",
    benefits: [
      "May lower blood pressure by 7-9 mmHg",
      "Supports heart muscle contraction",
      "Has antioxidant properties",
      "May improve exercise performance",
      "Reduces heart failure symptoms",
      "Helps regulate electrolyte balance"
    ],
    precautions: [
      "Very safe with few side effects",
      "May cause mild digestive upset",
      "Can interact with blood pressure medications",
      "Limited data on very long-term use",
      "Energy drinks contain taurine but also caffeine",
      "Generally recognized as safe"
    ],
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/taurine" },
      { name: "Cleveland Clinic", url: "https://health.clevelandclinic.org/taurine-benefits" }
    ],
    additionalLinks: [
      { name: "Examine.com - Taurine", url: "https://examine.com/supplements/taurine/" },
      { name: "WebMD - Taurine", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1024/taurine" },
      { name: "Healthline - Taurine", url: "https://www.healthline.com/nutrition/what-is-taurine" }
    ]
  },
  {
    name: "Grape Seed Extract",
    slug: "grape-seed-extract",
    description: "Rich in antioxidants that may help improve circulation and lower blood pressure.",
    detailedDescription: "Grape seed extract is rich in oligomeric proanthocyanidin complexes (OPCs), powerful antioxidants that are more potent than vitamins C and E. These compounds protect blood vessels from damage, improve endothelial function, and may help reduce blood pressure. Grape seed extract also has anti-inflammatory properties and may improve circulation. The OPCs are similar to those found in wine and are part of the explanation for wine's cardiovascular benefits.",
    dosage: "100-300mg daily",
    detailedDosage: "For cardiovascular health: 150-300mg daily standardized to 95% OPCs. Take with or without food. Some studies have used up to 600mg for specific conditions. Look for products standardized to at least 40-80% proanthocyanidins or 95% OPCs. Effects on blood pressure typically seen after 4-8 weeks of consistent use.",
    benefits: [
      "Reduces blood pressure by 6-8 mmHg",
      "Improves circulation",
      "Powerful antioxidant effects",
      "Reduces oxidative stress",
      "May improve edema and swelling",
      "Supports blood vessel health"
    ],
    precautions: [
      "May increase bleeding risk",
      "Can interact with blood thinners",
      "May cause nausea or digestive upset",
      "Possible allergic reactions",
      "Stop 2 weeks before surgery",
      "Can interact with some medications"
    ],
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/grape-seed-extract" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1009/grape" }
    ],
    additionalLinks: [
      { name: "Examine.com - Grape Seed Extract", url: "https://examine.com/supplements/grape-seed-extract/" },
      { name: "Mayo Clinic - Grape Seed Extract", url: "https://www.mayoclinic.org/drugs-supplements-grape-seed-extract/art-20364864" },
      { name: "Healthline - Grape Seed Extract", url: "https://www.healthline.com/nutrition/grape-seed-extract-benefits" }
    ]
  },
  {
    name: "Nattokinase",
    slug: "nattokinase",
    description: "Enzyme from fermented soybeans that may help with blood circulation and cardiovascular health.",
    detailedDescription: "Nattokinase is a powerful enzyme extracted from natto, a traditional Japanese food made from fermented soybeans. It has fibrinolytic activity, meaning it can help break down fibrin, a protein involved in blood clotting. This may improve circulation and reduce risk of blood clots. Nattokinase has been studied for its potential to improve cardiovascular health, though more research is needed. It's popular in Japan and increasingly used in the West.",
    dosage: "100-200mg daily",
    detailedDosage: "For cardiovascular support: 2,000-4,000 FU (fibrinolytic units) daily, typically equivalent to 100-200mg. Take on empty stomach for best results, typically at bedtime. Measured in FU or NSU (nattokinase units) - make sure product specifies activity level. Start with lower dose. Effects on blood flow markers may be seen within 4-8 weeks.",
    benefits: [
      "May improve blood circulation",
      "Helps break down fibrin (blood clots)",
      "May lower blood pressure slightly",
      "Could reduce risk of thrombosis",
      "Natural enzyme with cardiovascular benefits",
      "May improve arterial flexibility"
    ],
    precautions: [
      "Strong blood-thinning effects",
      "Do not combine with anticoagulants",
      "Stop 2 weeks before surgery",
      "May increase bleeding risk",
      "Not recommended during pregnancy",
      "Can interact with blood pressure medications"
    ],
    evidence: "Emerging",
    sources: [
      { name: "Mount Sinai", url: "https://www.mountsinai.org/health-library/supplement/nattokinase" },
      { name: "WebMD", url: "https://www.webmd.com/vitamins/ai/ingredientmono-1084/nattokinase" }
    ],
    additionalLinks: [
      { name: "Examine.com - Nattokinase", url: "https://examine.com/supplements/nattokinase/" },
      { name: "Healthline - Nattokinase", url: "https://www.healthline.com/health/nattokinase" },
      { name: "Very Well Health - Nattokinase", url: "https://www.verywellhealth.com/nattokinase-what-should-i-know-about-it-89564" }
    ]
  }
];
