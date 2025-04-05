import { images } from './images.js';

export const asianRecipes = [
    {
        name: "Sushi",
        country: "Japan",
        image: images.sushi,
        video: "https://www.youtube.com/embed/Fjdyw8Cvxbs?si=kWJZIDZySZQj8HJS",
        info: {
            prepTime: "35 minutos",
            cookTime: "25 minutos",
            totalTime: "2 horas",
            servings: "4 personas, 32 piezas (16 nigiris, 8 makis y 8 hosomakis)",
            category: "Plato principal",
            cuisine: "Japonesa",
            calories: "523 kcal por ración"
        },
        ingredients: [
            "2 cups sushi rice",
            "2 cups water",
            "1/4 cup rice vinegar",
            "Nori sheets",
            "Your choice of fillings (fish, vegetables)"
        ],
        instructions: [
            "1. Cook sushi rice and mix with rice vinegar",
            "2. Place nori sheet on bamboo mat",
            "3. Spread rice evenly on nori",
            "4. Add fillings in the center",
            "5. Roll tightly using the bamboo mat",
            "6. Cut into 6-8 pieces"
        ]
    },
    {
        name: "Pad Thai",
        country: "Thailand",
        image: images.padthai,
        video: "https://www.youtube.com/embed/xWDwcDTQxs8?si=ilIeJfgwEPLncZPT",
        info: {
            prepTime: "20 minutos",
            cookTime: "15 minutos",
            totalTime: "35 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Tailandesa",
            calories: "450 kcal por ración"
        },
        ingredients: [
            "400g fideos de arroz",
            "200g langostinos",
            "2 huevos",
            "100g brotes de soja",
            "50g cacahuetes triturados",
            "Salsa de pescado",
            "Tamarindo"
        ],
        instructions: [
            "1. Remojar los fideos en agua caliente",
            "2. Saltear los langostinos",
            "3. Añadir los huevos y remover",
            "4. Incorporar fideos y salsas",
            "5. Agregar brotes y cacahuetes",
            "6. Servir con lima y cilantro"
        ]
    },
    {
        name: "Kung Pao Chicken",
        country: "China",
        image: images.kungpao,
        video: "https://www.youtube.com/embed/50VmOv5frIc?si=yJNVlX-KC5aMjQgR",
        info: {
            prepTime: "25 minutos",
            cookTime: "15 minutos",
            totalTime: "40 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "China",
            calories: "425 kcal por ración"
        },
        ingredients: [
            "500g pollo en dados",
            "100g cacahuetes",
            "4 chiles secos",
            "Jengibre fresco",
            "3 dientes de ajo",
            "Salsa de soja",
            "Vinagre de arroz"
        ],
        instructions: [
            "1. Marinar el pollo con soja",
            "2. Calentar el wok",
            "3. Saltear chiles y aromáticos",
            "4. Añadir el pollo",
            "5. Incorporar salsas",
            "6. Terminar con cacahuetes"
        ]
    },
    {
        name: "Bibimbap",
        country: "Korea",
        image: images.bibimbap,
        video: "https://www.youtube.com/embed/9kEm2B9_HBI?si=FfyiHvTCGYeQc8Xl",
        info: {
            prepTime: "30 minutos",
            cookTime: "20 minutos",
            totalTime: "50 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Coreana",
            calories: "480 kcal por ración"
        },
        ingredients: [
            "300g arroz",
            "200g ternera picada",
            "100g brotes de soja",
            "100g espinacas",
            "2 zanahorias",
            "4 huevos",
            "Pasta de chile gochujang"
        ],
        instructions: [
            "1. Cocinar el arroz",
            "2. Preparar verduras por separado",
            "3. Saltear la carne marinada",
            "4. Freír los huevos",
            "5. Montar los boles con arroz",
            "6. Servir con gochujang"
        ]
    },
    {
        name: "Pho",
        country: "Vietnam",
        image: images.pho,
        video: "https://www.youtube.com/embed/lpu9y9L5g4Q?si=GmLQRB2H5bCix9X2",
        info: {
            prepTime: "30 minutos",
            cookTime: "6 horas",
            totalTime: "6 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Vietnamita",
            calories: "420 kcal por ración"
        },
        ingredients: [
            "2kg huesos de ternera",
            "300g fideos de arroz",
            "200g brotes de soja",
            "Jengibre y canela",
            "Cilantro y albahaca",
            "Salsa hoisin",
            "Salsa sriracha"
        ],
        instructions: [
            "1. Preparar el caldo base",
            "2. Cocer los fideos",
            "3. Preparar las guarniciones",
            "4. Montar los boles",
            "5. Añadir el caldo caliente",
            "6. Servir con hierbas frescas"
        ]
    }
];

export const spanishRecipes = [
    {
        name: "Paella",
        country: "Spain",
        image: images.paella,
        video: "https://www.youtube.com/embed/vWySIREExjo?si=imJJ7DcNYj1cusvH",
        info: {
            prepTime: "30 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora 15 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Española",
            calories: "580 kcal por ración"
        },
        ingredients: [
            "400g arroz bomba",
            "1 sobre azafrán",
            "500g pollo troceado",
            "250g judías verdes",
            "1 pimiento rojo",
            "Caldo de pescado",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Sofreír el pollo hasta dorarlo",
            "2. Añadir verduras y sofreír",
            "3. Incorporar el arroz y azafrán",
            "4. Añadir el caldo caliente",
            "5. Cocinar 18-20 minutos",
            "6. Dejar reposar 5-10 minutos"
        ]
    },
    {
        name: "Gazpacho",
        country: "Spain",
        image: images.gazpacho,
        video: "https://www.youtube.com/embed/2XlvI-aNcsU?si=cnYWZpeqkS_JBxNd",
        info: {
            prepTime: "15 minutos",
            cookTime: "0 minutos",
            totalTime: "2 horas (incluye refrigeración)",
            servings: "4 personas",
            category: "Entrante",
            cuisine: "Española",
            calories: "120 kcal por ración"
        },
        ingredients: [
            "1kg tomates maduros",
            "1 pepino",
            "1 pimiento verde",
            "2 dientes de ajo",
            "Pan duro",
            "Aceite de oliva",
            "Vinagre de Jerez"
        ],
        instructions: [
            "1. Lavar y trocear las verduras",
            "2. Remojar el pan en agua",
            "3. Triturar todo junto",
            "4. Añadir aceite y vinagre",
            "5. Colar si se desea",
            "6. Refrigerar antes de servir"
        ]
    },
    {
        name: "Croquetas",
        country: "Spain",
        image: images.croquetas,
        video: "https://www.youtube.com/embed/Bv3bPIJw8mc?si=Y5mRpeBH2p2FnzTW",
        info: {
            prepTime: "45 minutos",
            cookTime: "20 minutos",
            totalTime: "3 horas (incluye reposo)",
            servings: "6 personas",
            category: "Aperitivo",
            cuisine: "Española",
            calories: "320 kcal por ración"
        },
        ingredients: [
            "100g harina",
            "100g mantequilla",
            "1L leche",
            "Jamón serrano",
            "Nuez moscada",
            "Pan rallado",
            "Huevos para rebozar"
        ],
        instructions: [
            "1. Preparar la bechamel",
            "2. Añadir el jamón picado",
            "3. Dejar enfriar la masa",
            "4. Formar las croquetas",
            "5. Rebozar en huevo y pan",
            "6. Freír hasta dorar"
        ]
    },
    {
        name: "Fabada Asturiana",
        country: "Spain",
        image: images.fabada,
        video: "https://www.youtube.com/embed/NvhuoE8ENGQ?si=lZr3nvtUWuxyqNR-",
        info: {
            prepTime: "12 horas remojo",
            cookTime: "3 horas",
            totalTime: "15 horas",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Española",
            calories: "650 kcal por ración"
        },
        ingredients: [
            "500g fabes",
            "200g chorizo",
            "200g morcilla",
            "250g panceta",
            "1 cebolla",
            "2 dientes de ajo",
            "Azafrán"
        ],
        instructions: [
            "1. Remojar las fabes",
            "2. Cocer a fuego lento",
            "3. Añadir los embutidos",
            "4. Cocinar hasta que estén tiernas",
            "5. Ajustar el punto de sal",
            "6. Reposar antes de servir"
        ]
    },
    {
        name: "Pulpo a la Gallega",
        country: "Spain",
        image: images.pulpo,
        video: "https://www.youtube.com/embed/ZmwiwuJNtUM?si=omYOanj5XsfMgYsn",
        info: {
            prepTime: "15 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Española",
            calories: "280 kcal por ración"
        },
        ingredients: [
            "1.5kg pulpo",
            "1kg patatas",
            "Pimentón dulce",
            "Pimentón picante",
            "Aceite de oliva",
            "Sal gruesa",
            "Laurel"
        ],
        instructions: [
            "1. Ablandar el pulpo",
            "2. Cocer el pulpo",
            "3. Cocer las patatas",
            "4. Cortar el pulpo",
            "5. Emplatar con las patatas",
            "6. Aliñar y servir"
        ]
    }
];

export const italianRecipes = [
    {
        name: "Espagueti Carbonara",
        country: "Italy",
        image: images.carbonara,
        video: "https://www.youtube.com/embed/6Oy5ITdDQ3o",
        info: {
            prepTime: "15 minutos",
            cookTime: "20 minutos",
            totalTime: "35 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "650 kcal por ración"
        },
        ingredients: [
            "400g espaguetis",
            "200g guanciale o panceta",
            "4 yemas de huevo",
            "100g queso pecorino romano",
            "50g queso parmesano",
            "Pimienta negra recién molida"
        ],
        instructions: [
            "1. Cocer la pasta en agua con sal",
            "2. Dorar el guanciale cortado en tiras",
            "3. Mezclar yemas, quesos y pimienta",
            "4. Añadir pasta al guanciale",
            "5. Incorporar la mezcla de huevo fuera del fuego",
            "6. Servir inmediatamente con más queso y pimienta"
        ]
    },
    {
        name: "Pizza Margherita",
        country: "Italy",
        image: images.pizza,
        video: "https://www.youtube.com/embed/lDCxRKtRwXw?si=LNrEJaD2TxbOTafn",
        info: {
            prepTime: "2 horas",
            cookTime: "15 minutos",
            totalTime: "2 horas 15 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "266 kcal por porción"
        },
        ingredients: [
            "500g harina de fuerza",
            "300ml agua tibia",
            "7g levadura seca",
            "400g tomate triturado",
            "250g mozzarella fresca",
            "Albahaca fresca",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Preparar la masa y dejar reposar",
            "2. Extender en forma circular",
            "3. Cubrir con salsa de tomate",
            "4. Añadir mozzarella",
            "5. Hornear a 250°C",
            "6. Decorar con albahaca fresca"
        ]
    },
    {
        name: "Risotto ai Funghi",
        country: "Italy",
        image: images.risotto,
        video: "https://www.youtube.com/embed/VOBLOLQx0jE",
        info: {
            prepTime: "15 minutos",
            cookTime: "30 minutos",
            totalTime: "45 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "420 kcal por ración"
        },
        ingredients: [
            "320g arroz arborio",
            "400g setas variadas",
            "1 cebolla",
            "Vino blanco",
            "Caldo de verduras",
            "Parmesano rallado",
            "Mantequilla"
        ],
        instructions: [
            "1. Sofreír la cebolla",
            "2. Añadir el arroz y tostar",
            "3. Agregar vino blanco",
            "4. Ir añadiendo caldo poco a poco",
            "5. Incorporar las setas",
            "6. Mantecato final con queso y mantequilla"
        ]
    },
    {
        name: "Lasagna alla Bolognese",
        country: "Italy",
        image: images.lasagna,
        video: "https://www.youtube.com/watch?v=s_FLKOlGQ4c",
        info: {
            prepTime: "45 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 45 minutos",
            servings: "8 personas",
            category: "Plato principal",
            cuisine: "Italiana",
            calories: "585 kcal por ración"
        },
        ingredients: [
            "Láminas de lasaña",
            "500g carne picada",
            "Salsa bechamel",
            "Salsa de tomate",
            "Cebolla y zanahoria",
            "Queso parmesano",
            "Vino tinto"
        ],
        instructions: [
            "1. Preparar la salsa boloñesa",
            "2. Hacer la bechamel",
            "3. Montar capas de pasta",
            "4. Alternar salsas y queso",
            "5. Hornear 45 minutos",
            "6. Reposar antes de servir"
        ]
    },
    {
        name: "Tiramisú",
        country: "Italy",
        image: images.tiramisu,
        video: "https://www.youtube.com/watch?v=Z2ql_eRRAtQ",
        info: {
            prepTime: "30 minutos",
            cookTime: "0 minutos",
            totalTime: "4 horas (incluye refrigeración)",
            servings: "8 personas",
            category: "Postre",
            cuisine: "Italiana",
            calories: "350 kcal por ración"
        },
        ingredients: [
            "500g mascarpone",
            "Bizcochos savoiardi",
            "4 huevos",
            "Café espresso",
            "Cacao en polvo",
            "Azúcar",
            "Marsala (opcional)"
        ],
        instructions: [
            "1. Separar yemas y claras",
            "2. Montar claras a punto de nieve",
            "3. Mezclar yemas con mascarpone",
            "4. Mojar bizcochos en café",
            "5. Montar capas alternadas",
            "6. Refrigerar 4 horas mínimo"
        ]
    }
];

export const frenchRecipes = [
    {
        name: "Coq au Vin",
        country: "France",
        image: images.coqauvin,
        video: "https://www.youtube.com/embed/2QuVUjCyWbU",
        info: {
            prepTime: "30 minutos",
            cookTime: "2 horas",
            totalTime: "2 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Francesa",
            calories: "450 kcal por ración"
        },
        ingredients: [
            "1 pollo entero troceado",
            "750ml vino tinto",
            "200g champiñones",
            "200g cebollitas",
            "150g panceta",
            "2 zanahorias",
            "Hierbas aromáticas"
        ],
        instructions: [
            "1. Marinar el pollo en vino la noche anterior",
            "2. Dorar la panceta y reservar",
            "3. Dorar el pollo escurrido",
            "4. Añadir verduras y cocinar",
            "5. Incorporar el vino y cocinar a fuego lento",
            "6. Servir con puré de patatas"
        ]
    },
    {
        name: "Ratatouille",
        country: "France",
        image: images.ratatouille,
        video: "https://www.youtube.com/embed/BQiQoAQdZCc",
        info: {
            prepTime: "30 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Francesa",
            calories: "158 kcal por ración"
        },
        ingredients: [
            "2 berenjenas",
            "4 calabacines",
            "2 pimientos",
            "6 tomates",
            "2 cebollas",
            "Hierbas provenzales",
            "Aceite de oliva"
        ],
        instructions: [
            "1. Cortar todas las verduras",
            "2. Saltear por separado",
            "3. Preparar salsa de tomate",
            "4. Combinar todo",
            "5. Cocinar a fuego lento",
            "6. Servir caliente o templado"
        ]
    },
    {
        name: "Crème Brûlée",
        country: "France",
        image: images.cremebrulee,
        video: "https://www.youtube.com/watch?v=jqDAwUhEosY",
        info: {
            prepTime: "20 minutos",
            cookTime: "35 minutos",
            totalTime: "55 minutos",
            servings: "6 personas",
            category: "Postre",
            cuisine: "Francesa",
            calories: "290 kcal por ración"
        },
        ingredients: [
            "500ml nata líquida",
            "1 vaina de vainilla",
            "5 yemas de huevo",
            "100g azúcar",
            "Azúcar para caramelizar",
            "Sal",
            "Agua"
        ],
        instructions: [
            "1. Infusionar la nata",
            "2. Mezclar yemas y azúcar",
            "3. Combinar con la nata",
            "4. Hornear al baño maría",
            "5. Enfriar completamente",
            "6. Caramelizar y servir"
        ]
    },
    {
        name: "Quiche Lorraine",
        country: "France",
        image: images.quiche,
        video: "https://www.youtube.com/watch?v=h6gD-UkrQSU",
        info: {
            prepTime: "25 minutos",
            cookTime: "40 minutos",
            totalTime: "1 hora 5 minutos",
            servings: "8 personas",
            category: "Entrante",
            cuisine: "Francesa",
            calories: "380 kcal por ración"
        },
        ingredients: [
            "Masa quebrada",
            "200g bacon",
            "4 huevos",
            "300ml nata líquida",
            "150g queso gruyère",
            "Nuez moscada",
            "Pimienta"
        ],
        instructions: [
            "1. Forrar molde con masa",
            "2. Dorar el bacon",
            "3. Batir huevos con nata",
            "4. Añadir queso y bacon",
            "5. Hornear 35-40 minutos",
            "6. Dejar templar antes de servir"
        ]
    },
    {
        name: "Soupe à l'Oignon",
        country: "France",
        image: images.onionsoup,
        video: "https://www.youtube.com/watch?v=Yre4UzPFZpw",
        info: {
            prepTime: "20 minutos",
            cookTime: "1 hora",
            totalTime: "1 hora 20 minutos",
            servings: "6 personas",
            category: "Entrante",
            cuisine: "Francesa",
            calories: "310 kcal por ración"
        },
        ingredients: [
            "1kg cebollas",
            "2L caldo de carne",
            "Pan tostado",
            "Queso gruyère",
            "Mantequilla",
            "Vino blanco",
            "Tomillo"
        ],
        instructions: [
            "1. Caramelizar las cebollas",
            "2. Añadir vino y reducir",
            "3. Agregar caldo y hierbas",
            "4. Cocinar a fuego lento",
            "5. Servir con pan y queso",
            "6. Gratinar"
        ]
    }
];

export const englishRecipes = [
    {
        name: "Fish and Chips",
        country: "England",
        image: images.fishandchips,
        video: "https://www.youtube.com/watch?v=CSBvpy16wvg",
        info: {
            prepTime: "20 minutos",
            cookTime: "25 minutos",
            totalTime: "45 minutos",
            servings: "4 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "780 kcal por ración"
        },
        ingredients: [
            "800g filetes de bacalao",
            "1kg patatas para freír",
            "200g harina",
            "330ml cerveza rubia",
            "1 huevo",
            "Sal y pimienta",
            "Aceite para freír"
        ],
        instructions: [
            "1. Cortar las patatas en bastones gruesos",
            "2. Preparar la masa con harina, cerveza y huevo",
            "3. Freír las patatas hasta dorar",
            "4. Rebozar el pescado en la masa",
            "5. Freír el pescado hasta que esté dorado",
            "6. Servir con salsa tártara y puré de guisantes"
        ]
    },
    {
        name: "Shepherd's Pie",
        country: "England",
        image: images.shepherdspie,
        video: "https://www.youtube.com/watch?v=a3EYQARJkLk",
        info: {
            prepTime: "30 minutos",
            cookTime: "45 minutos",
            totalTime: "1 hora 15 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "450 kcal por ración"
        },
        ingredients: [
            "500g cordero picado",
            "1kg patatas",
            "2 zanahorias",
            "1 cebolla",
            "Guisantes",
            "Caldo de carne",
            "Mantequilla"
        ],
        instructions: [
            "1. Preparar puré de patata",
            "2. Cocinar la carne con verduras",
            "3. Añadir caldo y reducir",
            "4. Montar en bandeja",
            "5. Cubrir con puré",
            "6. Hornear hasta dorar"
        ]
    },
    {
        name: "English Breakfast",
        country: "England",
        image: images.englishbreakfast,
        video: "https://www.youtube.com/watch?v=N0qIuwdLQbA",
        info: {
            prepTime: "15 minutos",
            cookTime: "25 minutos",
            totalTime: "40 minutos",
            servings: "2 personas",
            category: "Desayuno",
            cuisine: "Inglesa",
            calories: "850 kcal por ración"
        },
        ingredients: [
            "Salchichas",
            "Bacon",
            "Huevos",
            "Champiñones",
            "Alubias en tomate",
            "Tomates",
            "Pan tostado"
        ],
        instructions: [
            "1. Cocinar salchichas y bacon",
            "2. Preparar champiñones",
            "3. Calentar alubias",
            "4. Freír huevos",
            "5. Asar tomates",
            "6. Servir todo caliente"
        ]
    },
    {
        name: "Apple Crumble",
        country: "England",
        image: images.applecrumble,
        video: "https://www.youtube.com/watch?v=GSbg1w_heTw",
        info: {
            prepTime: "20 minutos",
            cookTime: "40 minutos",
            totalTime: "1 hora",
            servings: "6 personas",
            category: "Postre",
            cuisine: "Inglesa",
            calories: "380 kcal por ración"
        },
        ingredients: [
            "6 manzanas",
            "200g harina",
            "150g mantequilla",
            "100g azúcar",
            "Canela",
            "Nuez moscada",
            "Limón"
        ],
        instructions: [
            "1. Pelar y cortar manzanas",
            "2. Preparar la cobertura",
            "3. Colocar manzanas en molde",
            "4. Cubrir con la mezcla",
            "5. Hornear hasta dorar",
            "6. Servir caliente"
        ]
    },
    {
        name: "Sunday Roast",
        country: "England",
        image: images.sundayroast,
        video: "https://www.youtube.com/watch?v=NUn2yAyKUhg",
        info: {
            prepTime: "30 minutos",
            cookTime: "2 horas",
            totalTime: "2 horas 30 minutos",
            servings: "6 personas",
            category: "Plato principal",
            cuisine: "Inglesa",
            calories: "720 kcal por ración"
        },
        ingredients: [
            "1.5kg rosbif",
            "Patatas asadas",
            "Yorkshire pudding",
            "Zanahorias",
            "Guisantes",
            "Salsa gravy",
            "Mostaza"
        ],
        instructions: [
            "1. Preparar la carne",
            "2. Asar a temperatura deseada",
            "3. Preparar guarniciones",
            "4. Hacer Yorkshire puddings",
            "5. Preparar salsa gravy",
            "6. Servir todo junto"
        ]
    }
];

