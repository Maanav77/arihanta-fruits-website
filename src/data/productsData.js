// src/data/productsData.js

export const productsData = [
  {
  slug: "tomato-paste",
  title: "Tomato Paste",
  cardImg:
    "/tomato-.png",
  detailImg:
    "/bg-hero.jpeg",
  overview:
    "Aseptic tomato paste is produced from carefully hand-picked, fresh, mature, and fully ripened tomatoes. After strict sorting to remove damaged or spoiled fruits, the tomatoes are naturally ripened without artificial methods to preserve authentic flavor and quality. The tomatoes are thoroughly washed, destoned, and processed to extract pulp, which is preheated at 85–90°C to inactivate microorganisms. The puree is then concentrated under vacuum in an evaporator to remove excess water. The paste passes through magnetic traps, strainers, and metal detectors to eliminate foreign particles, and is finally aseptically packed and stored in temperature-controlled warehouses to maintain quality and shelf life.",

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "28.19 – 28.70 °Brix" },
      { label: "pH", value: "3.88 – 4.26" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "1.84 – 2.30" },
      { label: "Consistency (cm/30 sec @ 20°C, 12° Brix)", value: "3.0 – 5.5" },
      { label: "Color (Hunter Lab a/b Ratio @ 12° Brix)", value: "1.90 – 1.95" },
      { label: "Brown Specs", value: "04 – 06" },
      { label: "Black Specs", value: "03 – 05" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 CFU/g" },
      { label: "Yeast & Mould", value: "<10 CFU/g" },
      { label: "E. coli", value: "Absent (in 1g)" },
      { label: "Coliform", value: "Absent (in 1g)" },
      { label: "Salmonella", value: "Absent (in 1g)" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Blood Red" },
      { label: "Taste", value: "Typical of Tomato Paste" },
      { label: "Flavor", value: "Typical of Tomato Paste" },
      { label: "Appearance", value: "Typical of Tomato Paste" }
    ]
  }
},

  {
    slug: "banana-puree",
  title: "Banana Purée",
  cardImg:
    "/banana.png",
  detailImg:
    "/banana.png",
  overview: `Banana Puree Concentrate is produced from fully ripened, premium-quality Cavendish bananas and is valued for its natural sweetness, creamy texture, and high nutritional content. Carefully selected ripe bananas undergo hygienic processing, including washing, peeling, crushing, and preheating for enzyme inactivation, to preserve their authentic flavor and color.

The puree is refined through filtration and centrifugal separation to remove specks, followed by low-temperature vacuum evaporation and PLC-controlled aseptic sterilization. It is aseptically packed in BID (220–230 kg) and BIB (20 kg) formats to ensure extended shelf life and product safety.

With its smooth consistency and true banana flavor, Banana Puree Concentrate is widely used in beverages, mixed fruit jams, baby foods, bakery products, dairy applications, and other processed food products.`,


    specifications: {
  "PHYSICAL & CHEMICAL": [
    { label: "Brix @ 20°C", value: "Minimum 30" },
    { label: "pH", value: "Max 4.50" },
    { label: "Acidity (as Citric Acid)", value: "0.45 – 1.00" },
    { label: "Consistency (Bostwick @ 20°C, 20 Brix)", value: "8.0 – 13.0 cm / 30 sec" },
    { label: "Black Specks / 10 gm", value: "Not more than 05" },
    { label: "Brown Specks / 10 gm", value: "Not more than 10" }
  ],
  MICROBIOLOGICAL: [
    { label: "Total Plate Count", value: "<10 cfu/ml" },
    { label: "Yeast & Mould", value: "<10 cfu/ml" },
    { label: "Coliform", value: "Absent" },
    { label: "E. coli", value: "Absent" }
  ],
  ORGANOLEPTIC: [
    { label: "Color", value: "Creamy White" },
    { label: "Flavor & Aroma", value: "Typical of ripe banana without any off-flavor" },
    { label: "Taste", value: "Characteristic of ripe banana fruit" },
    { label: "Appearance", value: "Free of any foreign matter" },
    { label: "Ingredients", value: "Banana 99.8–99.9% & Citric Acid 0.1–0.2%" }
  ],
    PACKING: [
      {
        label: "Packing Details",
        value:
        "Banana Concentrate is packed aseptically in pre-sterilized aseptic bags placed with polyliner in food grade epoxy painted (inside) open-top MS drum with a net weight of 220 kg"    
      }
    ]
  }
},
  
  {
  slug: "alphonso-mango-pulp",
  title: "Alphonso Mango Pulp",
  cardImg:
    "/alphonso.png",
  detailImg:
    "/alphonso.png",

  overview: `Alphonso Mango Pulp is derived from carefully selected, mature Alphonso mangoes (Mangifera indica), known for their rich aroma, vibrant color, and naturally sweet taste. The mangoes are naturally ripened in controlled chambers, hygienically processed, and converted into smooth, high-quality pulp using advanced technology.

The fruits are thoroughly washed, manually trimmed, and processed through destoners, centrifugal separators, and decanters to ensure a refined, speck-free puree. The pulp is sterilized and aseptically packed in MS drums to retain freshness, flavor, and nutritional value. As per customer requirements, canned Alphonso mango pulp is also supplied in clean, tin-lined OTS cans with protective lacquering.

Stored in temperature-controlled warehouses, our Alphonso Mango Pulp is ideal for a wide range of Food & Beverage applications, delivering consistent quality, safety, and extended shelf life.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 16" },
      { label: "pH", value: "3.50 – 4.0" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "0.45 – 0.90" },
      { label: "Consistency (Bostwick @ 20°C)", value: "8 – 13 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NIL" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 CFU/ml" },
      { label: "Yeast & Mould", value: "<10 CFU/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Orange-yellow" },
      { label: "Flavor & Aroma", value: "Typical of ripe Alphonso mango without any off-flavor" },
      { label: "Taste", value: "Characteristic of ripe Alphonso mango fruit" },
      { label: "Appearance", value: "Homogenous puree & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
        "Stored in temperature-controlled warehouses, our Alphonso Mango Pulp is ideal for a wide range of Food & Beverage applications, delivering consistent quality, safety, and extended shelf life."      }
    
      ]
  }
}

,

  {
  slug: "totapuri-mango-pulp",
  title: "Totapuri Mango Pulp",
  cardImg:
    "/totapuri.png",
  detailImg:
    "/totapuri.png",

  overview: `Totapuri Mango Pulp is derived from carefully selected, mature Totapuri mangoes (Mangifera indica), known for their distinctive tangy flavor, firm texture, and vibrant golden yellow color. The mangoes are naturally ripened in controlled chambers, hygienically processed, and converted into smooth, high-quality pulp using advanced processing technology.

The fruits are thoroughly washed, manually trimmed, and processed through destoners, centrifugal separators, and decanters to ensure a refined, speck-free puree. The pulp is sterilized and aseptically packed in MS drums to preserve freshness, flavor, and nutritional value.

Stored in temperature-controlled warehouses, our Totapuri Mango Pulp is ideal for a wide range of Food & Beverage applications, especially beverages, blending, and culinary formulations, delivering consistent quality, safety, and extended shelf life.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 14" },
      { label: "pH", value: "3.60 – 4.20" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "0.40 – 0.70" },
      { label: "Consistency (Bostwick @ 20°C)", value: "8 – 13 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NMT 5" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 cfu/ml" },
      { label: "Yeast & Mould", value: "<10 cfu/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Golden Yellow" },
      { label: "Taste", value: "Characteristic of ripe Totapuri mango fruit" },
      { label: "Flavor & Aroma", value: "Typical of naturally ripe Totapuri mango without any off-flavor" },
      { label: "Appearance", value: "Homogenous puree & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Totapuri Mango Puree is packed aseptically in pre-sterilized aseptic bags with polyliner, placed in food-grade epoxy painted (inside) open-top MS drums. Net weight: 215 kg per drum."
      }
    ]
  }
}
,

  {
  slug: "white-guava-pulp",
  title: "White Guava Pulp",
  cardImg:
    "/white-guava.png",
  detailImg:
    "/white-guava.png",


  overview: `Aseptic White Guava Pulp is extracted from carefully selected, mature white guavas known for their creamy white texture and distinctive, sweet aroma. The fruits are received at our facility and subjected to strict quality checks, followed by natural ripening in controlled chambers to ensure optimal sweetness and consistency.

The processing involves thorough washing and sanitization to remove surface impurities. The pulp is then extracted, decanted to remove specks, and passed through advanced filtration systems including magnetic traps. To ensure safety and longevity, the product is sterilized and aseptically packed in food-grade MS drums, delivering a pure, natural product free from pathogens and artificial preservatives.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 9" },
      { label: "pH", value: "3.60 – 4.20" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "0.35 – 0.70" },
      { label: "Consistency (Bostwick @ 20°C)", value: "5 – 12 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NMT 5" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 cfu/ml" },
      { label: "Yeast & Mould", value: "<10 cfu/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" },
      { label: "Salmonella", value: "Absent (25 ml)" },
      { label: "L. monocytogenes", value: "Absent (25 ml)" },
      { label: "Vibrio cholerae", value: "Absent (25 ml)" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Creamy White" },
      { label: "Flavor & Aroma", value: "Typical of ripe white guava without any off-flavor" },
      { label: "Taste", value: "Characteristic of ripe white guava fruit" },
      { label: "Appearance", value: "Homogenous puree & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Packed aseptically in pre-sterilized aseptic bags with polyliner, placed in food-grade epoxy painted (inside) open-top MS drums. Net weight: 210 kg per drum."
      }
    ]
  }
}
,

  {
  slug: "pink-guava-pulp",
  title: "Pink Guava Pulp",
  cardImg:
    "/pink-guava.png",
  detailImg:
    "/pink-guava.png",

  overview: `Aseptic Pink Guava Pulp is produced from premium-grade pink guava fruits, selected for their vibrant deep pink color and rich, musky sweetness. Upon arrival at the processing facility, the guavas are thoroughly inspected and ripened naturally to enhance the flavor profile before being conveyed for sorting.

The fruits undergo a rigorous washing process using fresh water and approved disinfectants to ensure complete hygiene. The extracted pulp is refined to remove seeds and grit, then passed through magnetic traps and metal detectors to eliminate foreign matter. Finally, the pulp is thermally sterilized and aseptically packed in MS drums with high-barrier poly-liners, preserving its natural color and freshness for diverse culinary applications.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 9" },
      { label: "pH", value: "3.60 – 4.20" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "0.35 – 0.70" },
      { label: "Consistency (Bostwick @ 20°C)", value: "5 – 12 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NMT 5" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 cfu/ml" },
      { label: "Yeast & Mould", value: "<10 cfu/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" },
      { label: "Salmonella", value: "Absent (25 ml)" },
      { label: "L. monocytogenes", value: "Absent (25 ml)" },
      { label: "Vibrio cholerae", value: "Absent (25 ml)" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Pink to Deep Pink" },
      { label: "Flavor & Aroma", value: "Typical of ripe pink guava without any off-flavor" },
      { label: "Taste", value: "Characteristic of ripe pink guava fruit" },
      { label: "Appearance", value: "Homogenous puree & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Packed aseptically in pre-sterilized aseptic bags with polyliner, placed in food-grade epoxy painted (inside) open-top MS drums. Net weight: 210 kg per drum."
      }
    ]
  }
}
,

  

  {
  slug: "red-chilli-paste",
  title: "Red Chilli Paste",
  cardImg:
    "/red-chilly.png",
  detailImg:
    "/red-chilly.png",

  overview: `Red Chilli Paste is made from premium-grade red chilies and is completely free from additives and adulterants. The chilies are processed using modern machinery under expert supervision to retain their natural heat, rich flavor, and bright red color.

This paste is extensively used in a variety of cuisines to enhance spiciness, color, and depth of flavor. Known for its purity and consistency, Red Chilli Paste is an ideal ingredient for sauces, gravies, seasoning blends, and processed food products.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 12" },
      { label: "pH", value: "Max 4.00" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "2.0 – 3.0" },
      { label: "Consistency (Bostwick @ 20°C)", value: "3 – 8 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NIL" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 CFU/ml" },
      { label: "Yeast & Mould", value: "<10 CFU/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Deep Red" },
      { label: "Flavor & Aroma", value: "Typical of red chilli without any off-flavor" },
      { label: "Taste", value: "Characteristic of red chilli" },
      { label: "Appearance", value: "Homogenous paste & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Red chilli paste is packed in 50 kg / 200 kg or as per customer requirement."
      }
    ]
  }
}
,

  {
  slug: "green-chilli-paste",
  title: "Green Chilli Paste",
  cardImg:
    "/green-chili.png",
  detailImg:
    "/green-chili.png",

  overview: `Green Chilli Paste is prepared from fresh, high-quality green chilies, known for their sharp pungency and natural aroma. The chilies are thoroughly washed, the stems are removed, and the fruits are carefully cut and processed into a smooth paste under hygienic conditions.

With its bold flavor and vibrant green color, Green Chilli Paste is widely used in the preparation of chili sauces, marinades, curries, and various food products. The processing method ensures consistent taste, freshness, and quality, making it suitable for both domestic and industrial food applications.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 9" },
      { label: "pH", value: "3.00 – 4.00" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "2.00 – 3.00" },
      { label: "Black Specks / 10 gm", value: "NIL" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 CFU/ml" },
      { label: "Yeast & Mould", value: "<10 CFU/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Bright Green" },
      { label: "Flavor & Aroma", value: "Typical of green chilli without any off-flavor" },
      { label: "Taste", value: "Characteristic of green chilli" },
      { label: "Appearance", value: "Homogenous paste & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Green chilli paste is packed in 50 kg / 200 kg or as per customer requirement."
      }
    ]
  }
},

{
  slug: "red-papaya-concentrate",
  title: "Red Papaya Concentrate",
  cardImg:
    "/papaya.png",
  detailImg:
    "/papaya.png",

  overview: `Red Papaya Concentrate is produced from carefully selected, high-quality red papayas. On arrival at our facility, the fruits undergo strict quality inspection and are naturally ripened in controlled chambers to retain freshness and natural flavor.

The papayas are subjected to a two-stage washing process—initially washed with fresh water at 20–50 ppm, followed by chlorinated water treatment to ensure hygiene and safety. The fruits are then sliced and processed through destoner machinery to extract pulp. The pulp is gently preheated at 65–70°C and passed through decanters to remove specks and impurities.

The refined pulp is concentrated under a vacuum evaporation process to remove excess water while preserving taste and color. It is further passed through magnetic traps and metal detectors to eliminate foreign particles. The final Red Papaya Concentrate is aseptically packed in MS drums and stored in temperature-controlled warehouses, ensuring extended shelf life and consistent quality for domestic and international markets.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 25" },
      { label: "pH", value: "Max 4.40" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "0.60 – 1.20" },
      { label: "Consistency (Bostwick @ 20°C)", value: "3.0 – 10.0 cm / 30 sec" },
      { label: "Brix – Acid Ratio", value: "30 – 40" },
      { label: "Specific Gravity", value: "1.094" },
      { label: "Black Specks / 10 gm", value: "NIL" },
      { label: "Brown Specks / 10 gm", value: "NMT 10" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 cfu/ml" },
      { label: "Yeast & Mould", value: "<10 cfu/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Red to Deep Red" },
      { label: "Flavor & Aroma", value: "Typical of ripe red papaya without any off-flavor" },
      { label: "Taste", value: "Characteristic of ripe red papaya fruit" },
      { label: "Fermentation / Off Taste", value: "Free from fermentation or any other off taste" },
      { label: "Appearance", value: "Homogenous & free from foreign matter" }
    ],
    PACKING: [
      {
        label: "Packing Details",
        value:
          "Aseptically packed in pre-sterilized aseptic bags with poly liner, placed in food-grade epoxy painted (inside) open-top MS drums. Net weight: 225 kg per drum."
      }
    ]
  }
}

,

  {
  slug: "tamarind-paste",
  title: "Tamarind Paste",
  cardImg:
    "tamarind.png",
  detailImg:
    "https://images.unsplash.com/photo-1563823447333-66f8303d7350?auto=format&fit=crop&w=1200&q=70",
  
  // FIXED: Using backticks for natural spacing
  overview: `Tamarind Paste is produced from carefully selected, mature tamarind pods known for their distinct tangy flavor and natural dark brown color. The tamarind is hygienically processed to extract a smooth, concentrated paste that retains the fruit’s authentic taste and aroma.

Processed using modern technology under strict quality control, Tamarind Paste is free from artificial additives and preservatives.

It is widely used in a variety of culinary applications, including sauces, chutneys, marinades, curries, and ready-to-eat foods, adding a rich sour profile and depth of flavor.`,

  specifications: {
    "PHYSICAL & CHEMICAL": [
      { label: "Brix @ 20°C", value: "Minimum 50 – 55°" },
      { label: "pH", value: "2.00 – 3.00" },
      { label: "Acidity (% Anhydrous Citric Acid)", value: "8.0 – 12.0" },
      { label: "Consistency (Bostwick @ 20°C)", value: "2 – 3 cm / 30 sec" },
      { label: "Black Specks / 10 gm", value: "NIL" },
      { label: "Brown Specks / 10 gm", value: "NMT 10 per 10 gm" }
    ],
    MICROBIOLOGICAL: [
      { label: "Total Plate Count", value: "<10 CFU/ml" },
      { label: "Yeast & Mould", value: "<10 CFU/ml" },
      { label: "Coliform", value: "Absent" },
      { label: "E. coli", value: "Absent" }
    ],
    ORGANOLEPTIC: [
      { label: "Color", value: "Brown" },
      { label: "Flavor & Aroma", value: "Typical of ripe tamarind without off-flavor" },
      { label: "Taste", value: "Characteristic of ripe tamarind fruits" },
      { label: "Appearance", value: "Homogenous paste, thick & free from foreign matter" }
    ]
  }
}
];
