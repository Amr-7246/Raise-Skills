type TwinPair = [string, string];

type CountryNames = {
    id: number;
    origin: string;
    allNames: string[];
    female: string[];
    male: string[];
    popularity: string[];
    uniqueName: string[];
    twinsMale: TwinPair[];
    twinsFemale: TwinPair[];
    twinsFemaleAndMale: TwinPair[];
};

type NamesData = {
    [country: string]: CountryNames;
};

const names : NamesData  = {
    // *  ##################################################### Canada
Canada: {
    id: 4,
    origin: "Canada",
    allNames: [
        "jack", "noah", "liam", "mason", "ethan", "oliver", "lucas", "logan", "aiden", "james", "owen", "jackson", "michael", "alexander", "william", "jacob", "benjamin", "ryan", "lucas", "dylan", "elijah", "harrison", "sean", "isaac", "thomas", "daniel", "evan", "andrew", "matthew", "caleb", "nathan", "luke", "zachary", "brayden", "matthew", "grayson", "leo", "colton", "harrison", "samuel", "charlie", "joshua", "adam", "hunter", "caleb", "charles", "isaiah", "maxwell", "victor", "sebastian", "gabriel", "cooper", "jake", "carter", "anthony", "matthew", "benjamin", "joseph","emily", "olivia", "ava", "isla", "mia", "sophia", "charlotte", "amelia", "grace", "chloe", "ella", "harper", "maddison", "zoe", "ruby", "victoria", "madeline", "lily", "emma", "lucy", "ella", "hailey","aubrey", "scarlett", "kaitlyn", "leah", "ariel", "eva", "riley", "madeline", "daisy", "zoey", "eva", "sophie", "poppy", "rose", "piper", "isabel", "elizabeth", "hannah", "sydney", "mia", "amelia", "ariana", "zoe", "violet", "harriet", "grace", "bella", "madison", "rebecca", "katherine", "gianna", "madison", "brooklyn", "natalie", "victoria", "gabriella", "ellie", "violet", "maya"
    ],
    female: [
        "olivia", "ava", "isla", "mia", "sophia", "charlotte", "amelia", "grace", "chloe", "ella", "harper", "maddison", "zoe", "ruby", "victoria", "madeline", "lily", "emma", "lucy", "ella", "hailey", "aubrey", "scarlett", "kaitlyn", "leah", "ariel", "eva", "riley", "madeline", "daisy", "zoey", "eva", "sophie", "poppy", "rose", "piper", "isabel", "elizabeth", "hannah", "sydney", "mia", "amelia", "ariana", "zoe", "violet", "harriet", "grace", "bella", "madison", "rebecca", "katherine", "gianna", "madison", "brooklyn", "natalie", "victoria", "gabriella", "ellie", "violet", "maya", "jessica", "chloe", "arabella", "mary", "fiona", "eva", "mckenzie", "addison", "penelope", "lila", "clara", "liana", "lucia", "aurora", "mia", "alina", "sophia", "emily", "quinn", "madeline", "gracie", "charlotte", "isabella", "lucy", "grace", "madison", "piper"
    ],
    male: [
        "jack", "noah", "liam", "mason", "ethan", "oliver", "lucas", "logan", "aiden", "james", "owen", "jackson", "michael", "alexander", "william", "jacob", "benjamin", "ryan", "lucas", "dylan", "elijah", "harrison", "sean", "isaac", "thomas", "daniel", "evan", "andrew", "matthew", "caleb", "nathan", "luke", "zachary", "brayden", "matthew", "grayson", "leo", "colton", "harrison", "samuel", "charlie", "joshua", "adam", "hunter", "caleb", "charles", "isaiah", "maxwell", "victor", "sebastian", "gabriel", "cooper", "jake", "carter", "anthony", "matthew", "benjamin", "joseph", "jason", "nolan", "toby", "simon", "evan", "jordan", "sean", "gabriel", "blake", "logan", "jaden", "elias", "lucas", "luke", "david", "leonard", "aaron", "ashton", "camden", "tyler", "clayton", "tristan", "max", "jackson", "cohen", "micah", "jake", "isaiah", "kaden", "nathaniel"
    ],
    popularity: [
        "jack", "noah", "liam", "mason", "ethan", "oliver", "lucas", "logan", "aiden", "james", "owen", "jackson", "michael", "alexander", "william", "jacob", "benjamin", "ryan", "lucas", "dylan", "elijah", "harrison", "sean", "isaac", "thomas", "daniel", "evan", "andrew", "matthew", "caleb", "nathan", "luke", "zachary", "brayden", "grayson", "leo", "colton", "harrison", "samuel", "charlie", "joshua", "adam", "hunter", "caleb", "charles", "isaiah", "maxwell", "victor", "sebastian", "gabriel", "cooper", "jake", "carter", "anthony", "benjamin", "emily", "olivia", "ava", "isla", "mia", "sophia", "charlotte", "amelia", "grace", "chloe", "ella", "harper", "maddison", "zoe", "ruby", "victoria", "madeline", "lily", "emma", "lucy", "ella", "hailey", "aubrey", "scarlett", "kaitlyn", "leah", "ariel", "eva", "riley", "madeline", "daisy", "zoey", "eva", "sophie", "poppy", "rose", "piper", "isabel", "elizabeth", "hannah", "sydney", "mia", "amelia", "ariana", "zoe", "violet", "harriet", "grace", "bella", "madison", "rebecca", "katherine", "gianna", "madison", "brooklyn", "natalie", "victoria", "gabriella", "ellie", "violet", "maya"
    ],
    uniqueName: [
        "canadian", "redmond", "darwin", "clark", "wood", "bennett", "irwin", "wade", "powell", "hutchinson", "scott", "miller", "grayson", "blake", "hanson", "griffin", "brennan", "warren", "kennedy", "robinson", "weston", "collins", "fletcher", "mccallum", "miller", "howard", "hines", "reid", "o'connor", "brown", "miller", "carson", "rockwell", "logan", "mccarthy", "abbott", "stewart", "douglas", "mccarthy", "harrison", "chavez", "duncan", "forbes", "barton", "barrett", "gibson", "maher", "hickey", "macdonald", "haines", "thompson", "laurie", "stone", "carson", "mckenzie"
    ],
    twinsMale: [
        ["jack", "noah"], ["liam", "mason"], ["ethan", "lucas"], ["logan", "aiden"], ["james", "owen"], ["jackson", "michael"], ["alexander", "william"], ["jacob", "benjamin"], ["ryan", "lucas"], ["dylan", "elijah"], ["harrison", "sean"], ["isaac", "thomas"], ["daniel", "evan"], ["andrew", "matthew"], ["caleb", "nathan"], ["luke", "zachary"], ["brayden", "matthew"], ["grayson", "leo"], ["colton", "harrison"], ["samuel", "charlie"], ["joshua", "adam"], ["hunter", "caleb"], ["charles", "isaiah"], ["maxwell", "victor"], ["sebastian", "gabriel"], ["cooper", "jake"], ["carter", "anthony"], ["matthew", "benjamin"]
    ],
    twinsFemale: [
        ["olivia", "ava"], ["isla", "mia"], ["sophia", "charlotte"], ["amelia", "grace"], ["chloe", "ella"], ["harper", "maddison"], ["zoe", "ruby"], ["victoria", "madeline"], ["lily", "emma"], ["lucy", "ella"], ["hailey", "aubrey"], ["scarlett", "kaitlyn"], ["leah", "ariel"], ["eva", "riley"], ["madeline", "daisy"], ["zoey", "eva"], ["sophie", "poppy"], ["rose", "piper"], ["isabel", "elizabeth"], ["hannah", "sydney"], ["mia", "amelia"], ["ariana", "zoe"], ["violet", "harriet"], ["grace", "bella"], ["madison", "rebecca"], ["katherine", "gianna"], ["madison", "brooklyn"], ["natalie", "victoria"], ["gabriella", "ellie"], ["violet", "maya"]
    ],
    twinsFemaleAndMale: [
        ["emma", "ethan"], ["olivia", "oscar"], ["ava", "adam"], ["mia", "michael"], ["isabella", "isaiah"], 
        ["sophia", "samuel"], ["charlotte", "chase"], ["lily", "leo"], ["grace", "gabriel"], ["ella", "eli"], 
        ["amanda", "andrew"], ["ariana", "alexander"], ["mia", "max"], ["lucy", "luke"], ["zara", "zane"], 
        ["ruby", "ryan"], ["lily", "logan"], ["scarlett", "sean"], ["layla", "louis"], ["willow", "wyatt"],
        ["zoey", "zachary"], ["hannah", "harry"], ["julia", "james"], ["mary", "michael"], ["daisy", "dylan"]
    ]
    
},
    // * ####################################################  France  ########################################
    France: {
        id: 2,
        origin: "France",
        allNames: [
                    "lucas", "martin", "emma", "noah", "chloe", "louis", "lea", "hugo", "camille", "julien", "lea", "paul", "ines", "arthur", "elise", "thomas", "audrey", "charles", "carla", "alicia", "henri", "juliette", "marie", "quentin", "clara", "sebastien", "david", "anais", "benjamin", "lila", "victor", "alison", "nicolas", "lucie", "etienne", "celine", "philippe", "iris", "guillaume", "alexandre", "sophie", "mathilde", "damien", "elodie", "vincent", "amelie", "martine", "yves", "rachel", "michael"
        ],
        female: [
                    "emma", "chloe", "lea", "ines", "elise", "carla", "audrey", "marie", "clara", "alicia", "juliette", "anais", "lila", "lucie", "alison", "iris", "celine", "sophie", "mathilde", "elodie", "amelie", "martine", "rachel", "michele", "sylvie", "lilou", "noemie", "pauline", "victoire", "romane", "aline", "caroline"
        ],
        male: [
                    "lucas", "martin", "noah", "hugo", "louis", "paul", "arthur", "thomas", "charles", "henri", "julien", "quentin", "sebastien", "david", "benjamin", "victor", "nicolas", "lucas", "etienne", "philippe", "guillaume", "alexandre", "vincent", "michael", "maxime", "julien", "xavier", "remy", "simon", "pierre", "francois"
        ],
        popularity: [
                    "lucas", "martin", "noah", "hugo", "louis", "lea", "thomas", "clara", "charles", "quand", "paul", "benjamin", "alison", "arthur", "ines", "julien", "elise", "audrey", "alicia", "victor", "nicolas", "amelie", "carla", "mathilde", "celine", "iris", "michael", "sebastien", "guillaume", "rachel", "yves", "romane", "vincent", "sophie"
        ],
        uniqueName: [
                    "beau", "lachance", "charbonneau", "devereux", "blanche", "perrin", "gagnon", "trudeau", "doucet", "lavoisier", "morin", "dube", "delacroix", "fortin", "ducote", "saintjean", "larose", "lemieux", "picard", "deroche", "guillet", "villeval", "lafleur", "lenoir", "laverdure", "montpetit", "bellamy", "bouchard"
        ],
        twinsMale: [
                    ["lucas", "martin"], ["hugo", "arthur"], ["noah", "louis"], 
                    ["julien", "quentin"], ["charles", "paul"], ["henri", "guillaume"], 
                    ["victor", "benjamin"], ["lucas", "nicolas"], ["sebastien", "etienne"], 
                    ["alexandre", "vincent"]
        ],
        twinsFemale: [
                    ["emma", "chloe"], ["lea", "ines"], ["carla", "audrey"], 
                    ["juliette", "clara"], ["alicia", "lila"], ["anaïs", "lucie"], 
                    ["sophie", "mathilde"], ["rachel", "amelie"], ["martine", "sylvie"]
        ],
        twinsFemaleAndMale: [
            ["chloe", "charles"], ["lea", "lucas"], ["manon", "marc"], ["camille", "clement"], ["zoe", "zac"], 
            ["eloise", "ethan"], ["amelie", "antoine"], ["pauline", "pierre"], ["charlotte", "claude"], ["lola", "lucien"], 
            ["nina", "nicolas"], ["lucie", "lionel"], ["clara", "christian"], ["jade", "julien"], ["alice", "alex"], 
            ["florence", "francois"], ["marie", "matthieu"], ["fanny", "fabien"], ["juliette", "jean"], ["louise", "louis"]
        ]
        
    },
    
    // * ############################################################# USA
    USA: {
        id: 3,
        origin: "USA",
        allNames: [
                    "michael", "emma", "ethan", "sophia", "james", "olivia", "liam", "isabella", "william", "ava", "noah", "mia", "alex", "lucas", "charlotte", "aiden", "harper", "jacob", "amelia", "jackson", "mason", "ella", "logan", "grace", "jack", "madison", "liam", "matthew", "emily", "ryan", "scarlett", "zachary", "hannah", "daniel", "ella", "elijah", "victoria", "david", "scarlett", "grayson"
        ],
        female: [
                    "emma", "sophia", "olivia", "isabella", "ava", "mia", "charlotte", "harper", "amelia", "ella", "madison", "emily", "scarlett", "hannah", "victoria", "madeline", "grace", "lily", "lucy", "zoey", "chloe", "julia", "claire", "kate", "annabelle", "isla", "sofia", "riley", "natalie", "lucy", "layla"
        ],
        male: [
                    "michael", "ethan", "james", "liam", "noah", "alex", 
                    "william", "aiden", "jacob", "jackson", "mason", 
                    "logan", "jack", "ryan", "liam", "zachary", "elijah", 
                    "david", "grayson", "matthew", "zachary", "jacob", 
                    "elias", "leo", "carter", "henry", "george"
        ],
        popularity: [
                    "michael", "emma", "ethan", "sophia", "james", "olivia", "liam", "isabella", "william", "ava", "noah", "mia", "charlotte", "aiden", "harper", "jacob", "amelia", "jackson", "mason", "ella", "logan", "grace", "jack", "madison", "liam", "matthew", "emily", "ryan", "scarlett", "zachary", "hannah", "daniel"
        ],
        uniqueName: [
                    "brayden", "jaden", "leonard", "samson", "sloan", 
                    "elias", "melvin", "finley", "daxton", "griffin", 
                    "rowan", "jaxon", "carson", "tate", "zane"
        ],
        twinsMale: [
                    ["ethan", "michael"], ["liam", "jacob"], ["noah", "alex"], 
                    ["william", "mason"], ["aiden", "matthew"], ["ryan", "jack"], 
                    ["zachary", "elijah"], ["matthew", "daniel"]
        ],
        twinsFemale: [
                    ["emma", "sophia"], ["olivia", "isabella"], ["ava", "mia"], 
                    ["charlotte", "amelia"], ["ella", "madison"], ["scarlett", "hannah"]
        ],
        twinsFemaleAndMale: [
            ["emily", "ethan"], ["madison", "michael"], ["olivia", "owen"], ["grace", "gabe"], ["sophia", "sam"], 
            ["isabella", "isaac"], ["mia", "mason"], ["ava", "aiden"], ["zoey", "zane"], ["chloe", "caleb"], 
            ["emily", "elijah"], ["bella", "brandon"], ["olivia", "omar"], ["charlotte", "chase"], ["lucy", "logan"],
            ["ella", "evan"], ["scarlett", "simon"], ["hannah", "hayden"], ["ruby", "ryan"], ["zoe", "zachary"],
            ["lily", "leo"], ["julia", "jack"], ["daisy", "daniel"], ["lucy", "lance"], ["sofia", "sean"]
        ]
        
    },
// * ################################################## United Kingdom
UK: {
    id: 3,
    origin: "United Kingdom",
    allNames: [
        "oliver", "george", "noah", "jack", "charlie", "harry", "thomas", "jacob", "alfie", "freddie", "leo", "oscar", "charles", "arthur", "henry", "archie", "james", "evan", "daniel", "david","harry", "lily", "olivia", "ava", "isla", "mia", "emily", "grace", "sophia", "ella", "florence", "lucy", "chloe", "amelia", "ella", "evie", "rose", "willow", "hannah", "ruby","lilly", "sophie", "daisy", "harriet", "matilda", "mia", "ella", "eva", "zoe", "lucy","evelyn", "lucy", "lily", "zoe", "hannah"
    ],
    female: [
        "lily", "olivia", "ava", "isla", "mia", "emily", "grace", "sophia", "ella", "florence", "lucy", "chloe", "amelia", "ella", "evie", "rose", "willow", "hannah", "ruby", "lilly", "sophie", "daisy", "harriet", "matilda", "mia", "ella", "eva", "zoe", "lucy", "evelyn", "lucy", "lily", "zoe", "hannah", "poppy", "alice", "sophia", "charlotte", "georgia", "ella", "isabel", "rose", "chloe", "megan", "harriet"
    ],
    male: [
        "oliver", "george", "noah", "jack", "charlie", "harry", "thomas", "jacob", "alfie", "freddie", "leo", "oscar", "charles", "arthur", "henry", "archie", "james", "evan", "daniel", "david", "harry", "joseph", "alexander", "william", "jackson", "lewis", "ellis", "max", "oscar", "elijah", "samuel", "jake", "toby", "finley", "benjamin", "jack", "william", "michael", "david", "thomas"
    ],
    popularity: [
        "oliver", "george", "noah", "jack", "charlie", "harry", "thomas", "jacob", "alfie", "leo", "oscar", "archie", "charles", "arthur", "henry", "evan", "james", "daniel", "david", "harry", "lily", "mia", "sophia", "emily", "grace", "florence", "lucy", "chloe", "amelia", "evie", "rose", "willow", "zoe", "ruby", "hannah", "mollie", "ella", "daisy", "harriet", "sophie", "sophie", "joseph", "daisy", "ella", "poppy", "alice"
    ],
    uniqueName: [
        "thatcher", "windsor", "chester", "morgan", "penrose", "stewart", "hawkins", "portman", "mason", "barlow", "hudson", "gardiner", "baxter", "ashford", "gibson", "somerset", "hyde", "redwood", "drake", "warwick", "stanley", "walters", "barnes", "howard", "wright", "robinson", "hughes","mackenzie", "nelson", "greenwood", "reid", "williams", "adams", "knox"
    ],
    twinsMale: [
        ["noah", "leo"], ["oliver", "george"], ["jacob", "alfie"], ["thomas", "archie"], ["charlie", "harry"], ["james", "evan"], ["daniel", "david"], ["samuel", "william"], ["benjamin", "jack"], ["michael", "william"], ["jackson", "finley"], ["jacob", "oscar"], ["samuel", "elijah"], ["toby", "oscar"], ["max", "leo"], ["lewis", "jake"], ["benjamin", "jack"]
    ],
    twinsFemale: [
        ["isla", "mia"], ["lily", "ava"], ["olivia", "grace"], ["ella", "ruby"], ["amanda", "emma"], ["grace", "sophia"], ["ella", "harriet"], ["ella", "ruby"], ["zoe", "lucy"], ["sophie", "florence"], ["daisy", "lily"], ["zoe", "hannah"], ["maggie", "evie"], ["lilly", "violet"], ["rose", "poppy"], ["matilda", "lucy"], ["harriet", "zoe"]
    ],
    twinsFemaleAndMale: [
        ["ella", "edward"], ["olivia", "oscar"], ["grace", "gabriel"], ["sophie", "samuel"], ["lucy", "leonard"], 
        ["chloe", "charles"], ["zoe", "zachary"], ["poppy", "patrick"], ["ruby", "reuben"], ["freya", "finn"], 
        ["hannah", "harry"], ["mia", "max"], ["amelia", "archie"], ["lily", "leon"], ["sienna", "sam"], 
        ["charlotte", "chris"], ["lucia", "liam"], ["isla", "isaac"], ["daisy", "daniel"], ["zoey", "zeke"],
        ["rose", "riley"], ["violet", "vincent"], ["grace", "gregory"], ["holly", "henry"], ["alice", "alexander"]
    ]
    
},
// * ################################################################### Egypt
Egypt: {
    id: 1,
    origin: "Egypt",
    allNames: [
                "mona", "ahmed", "saad", "omar", "fatma", "yasser", "sarah", "ali", "layla", "ramy",  "zeinab", "mohamed", "amina", "tamer", "nada", "youssef", "karim", "sameh", "mohamed", "hany", "dalia", "hamza", "salma", "khaled", "nour", "marwa", "eslam", "sherif", "ragab",  "zaynab", "gamal", "nesma", "taha", "reem", "huda", "mohammed", "ayman", "hassan", "mohab", "mahmoud", "farida", "shereen", "hoda", "george", "omran", "mohsen", "samy", "doaa", "zeina", "tamer", "salah", "salem", "tawfiq", "fayza", "mustafa", "nashwa"],
    female: [
                "mona", "hanan", "fatma", "layla", "amina", "nada", "salma", "marwa", "nesma", "reem",  "huda", "dalia", "zahra", "sara", "nour", "zaynab", "fayza", "maha", "samar", "mona", "islam", "zena", "hannah", "rana", "doaa", "haya", "yasmin", "sawsan", "nashwa",  "dina", "zeina", "menna", "merna", "lina", "zahra", "mariam", "kamilia"],
    male: [
                "ahmed", "saad", "omar", "ali", "ramy", "youssef", "karim", "sameh", "hany", "khaled", "eslam",  "ragab", "gamal", "taha", "ayman", "hassan", "mohab", "mahmoud", "samy", "george", "omran", "mohsen", "mohammed", "salah", "salem", "tawfiq", "farouk", "mohamed", "ahmed", "hany",  "moustafa", "mohamed", "saeed", "karim", "ibrahim", "ahmed", "mostafa"],
    popularity: [
        "mohamed", "karim", "youssef", "ahmed", "ali", "hassan", "hussein", "mahmoud", "mustafa",  "omar", "khaled", "abdullah", "ibrahim", "tariq", "jamal", "nabil", "faris", "saeed",  "rami", "zayd", "malik", "yasin", "nasser", "adham", "kareem", "salah", "nader", "amir",  "bilal", "hazem", "osama", "wael", "hamza", "tamer", "sami", "rashid", "fadi", "majid",  "moussa", "noor", "raed", "sultan", "waleed", "zaid", "hisham", "ismail", "jaber", "khalid",  "mounir", "nizar", "qasim", "rafiq", "sabri", "taha", "wassim", "younis", "zaki", "ashraf",  "badr", "danyal", "emad", "faisal", "ghassan", "hadi", "idris", "jibril", "kamal", "luay",  "mamdouh", "nabeel", "othman", "qusay", "riad", "saleh", "tawfiq", "usama", "yazeed", "zuhair",  "ayman", "bashar", "dahir", "essam", "fahad", "gaber", "hammam", "imad", "jawad", "khalil",  "lotfi", "mazen", "nadim", "osman", "pasha", "qudsi", "raheem", "sabah", "taher", "ubaid",  "yacoub", "zafar", "amjad", "basim", "dawood", "fouad", "hareth", "issam", "jamil", "kamil",  "leith", "murad", "najib", "omar", "qadir", "rakan", "samir", "tareq", "wajdi", "yamen", "zayyan"
    ],
    uniqueName: [
        "qabeil", "fayad", "thamer", "zuhair", "nasim", "aysar", "bassel", "dalil", "fahd", "ghali",  "hazim", "idham", "jaafar", "kanaan", "laith", "mazin", "najm", "othman", "qusay", "raad",  "sahir", "tamim", "uthman", "waheed", "yazan", "zafir", "aethan", "baraa", "diyar", "fahd",  "ghayth", "haleem", "ibtesam", "joud", "khaldoon", "luth", "muizz", "naseem", "qays", "raheeq",  "saqr", "taym", "umair", "waseem", "yasaar", "zubair", "aamir", "basheer", "dawoud", "fahd",  "ghassan", "hakeem", "ihab", "jaseem", "kifah", "labeeb", "muatasim", "nabeel", "qutuz",  "raheem", "safwan", "tawheed", "umran", "wajih", "yasir", "zaahir", "abtahee", "baz", "dahir",  "faizel", "ghaith", "hazem", "ihsan", "jaleel", "khuzama", "lamees", "munjid", "nazih",  "qadri", "raafiq", "saifan", "taiseer", "umair", "waleed", "yaqoob", "zaydoun", "aamir",  "basim", "dhiya", "fahd", "ghazi", "hazem", "ihtisham", "jassim", "khaled", "lujain", "munthir",  "nazir", "qusam", "rakan", "sajid", "talaat", "usamah", "wajeeh", "yassine", "zafir"
    ],
    twinsMale: [
        ["saad", "saed"], ["hasn", "hosny"], ["omar", "ahmed"], ["yasser", "youssef"],  ["tamer", "salah"], ["mohamed", "mohab"], ["ali", "amir"], ["hassan", "hussein"],  ["khaled", "khalid"], ["tariq", "tarik"], ["nabil", "nader"], ["faris", "fadi"],  ["saeed", "samer"], ["rami", "raed"], ["zayd", "zaid"], ["malik", "majid"],  ["yasin", "younis"], ["adham", "ashraf"], ["kareem", "kamil"], ["salah", "saleh"],  ["amir", "amin"], ["bilal", "bashar"], ["hazem", "hadi"], ["osama", "othman"],  ["wael", "wassim"], ["hamza", "hammam"], ["sami", "sabri"], ["rashid", "rakan"],  ["fadi", "fahad"], ["majid", "mazen"], ["moussa", "muatasim"], ["noor", "najib"],  ["sultan", "sabah"], ["waleed", "waheed"], ["hisham", "hakeem"], ["ismail", "ihab"],  ["jaber", "jassim"], ["mounir", "munjid"], ["nizar", "nazir"], ["qasim", "qays"],  ["rafiq", "raafiq"], ["taha", "tawfiq"], ["younis", "yazeed"], ["zaki", "zaahir"],  ["badr", "bashar"], ["danyal", "dalil"], ["emad", "essam"], ["faisal", "fahd"],  ["ghassan", "ghazi"], ["idris", "ihsan"], ["jibril", "jaleel"], ["kamal", "kifah"],  ["luay", "labeeb"], ["mamdouh", "muizz"], ["nabeel", "nazih"], ["qusay", "qutuz"],  ["riad", "raheeq"], ["saleh", "safwan"], ["tawfiq", "talaat"], ["usama", "umair"],  ["yazeed", "yasir"], ["zuhair", "zaahir"], ["aamir", "amin"], ["bashar", "basheer"],  ["dahir", "dhiya"], ["essam", "emad"], ["fahd", "fahd"], ["gaber", "ghaith"],  ["hammam", "haleem"], ["imad", "ihtisham"], ["jawad", "jaseem"], ["khalil", "khuzama"],  ["lotfi", "lujain"], ["mazen", "munthir"], ["nadim", "nazm"], ["osman", "othman"],  ["pasha", "qadri"], ["qudsi", "qusam"], ["raheem", "raad"], ["sabah", "sajid"],  ["taher", "taym"], ["ubaid", "usamah"], ["yacoub", "yaqoob"], ["zafar", "zaydoun"],  ["amjad", "aamir"], ["basim", "baraa"], ["dawood", "diyar"], ["fouad", "faizel"],  ["hareth", "hazim"], ["issam", "ibtesam"], ["jamil", "joud"], ["kamil", "khaldoon"],  ["leith", "lamees"], ["murad", "munjid"], ["najib", "nazih"], ["omar", "osman"],  ["qadir", "qays"], ["rakan", "raafiq"], ["samir", "sahir"], ["tareq", "tamim"],  ["wajdi", "wajeeh"], ["yamen", "yasir"], ["zayyan", "zafir"]
    ],
    twinsFemale: [
        ["samera", "samar"], ["saaeda", "sadya"], ["layla", "lina"], ["marwa", "maha"],  ["zeina", "zeinab"], ["hannah", "rana"], ["amal", "amina"], ["farah", "fatin"],  ["dalia", "dina"], ["sara", "sahar"], ["nadia", "nada"], ["laila", "leila"],  ["hala", "hania"], ["yara", "yasmin"], ["roula", "rahma"], ["noura", "nourhan"],  ["salma", "salsabil"], ["ghada", "ghenwa"], ["iman", "ibtesam"], ["joud", "jana"],  ["kawthar", "karma"], ["lamia", "lubna"], ["maysa", "mariam"], ["noha", "nermeen"],  ["othman", "omnya"], ["pakinah", "parysia"], ["qamar", "qadira"], ["rabab", "raeeda"],  ["sama", "sawsan"], ["tala", "tahani"], ["umama", "umayma"], ["wafa", "wijdan"],  ["xenia", "xana"], ["yasmeen", "yumna"], ["zahra", "zaina"], ["afnan", "amani"],  ["bushra", "basma"], ["dana", "dareen"], ["eman", "esraa"], ["fadwa", "fajr"],  ["hajar", "haneen"], ["ilham", "ibtihal"], ["jumana", "jouri"], ["khadija", "kawtar"],  ["lina", "lujain"], ["maha", "mervat"], ["nadin", "nashwa"], ["olya", "othaila"],  ["penda", "pamela"], ["qadira", "qistina"], ["rasha", "rahma"], ["sahar", "salsabeel"],  ["tasnim", "tamara"], ["umama", "umaymah"], ["vania", "violet"], ["widad", "warda"],  ["xara", "xavia"], ["yasmin", "yara"], ["zaina", "zahra"], ["amira", "asmaa"],  ["basma", "bayan"], ["dima", "dareen"], ["faten", "fidda"], ["ghalia", "ghayda"],  ["huda", "hoor"], ["ibtisam", "ilham"], ["jasmin", "joumana"], ["kholoud", "kareema"],  ["lama", "lujain"], ["mariam", "maysaa"], ["nawal", "nermin"], ["olya", "omar"],  ["pamela", "pakinah"], ["qistina", "qudsia"], ["raghad", "rahma"], ["sahar", "sama"],  ["tahani", "tasneem"], ["urwa", "umamah"], ["violet", "vania"], ["wafaa", "wijdan"],  ["xana", "xena"], ["yousra", "yasmina"], ["zahra", "zaynab"]
    ],
    twinsFemaleAndMale: [
        ["samera", "samer"], ["saaeda", "saaed"], ["layla", "luke"], ["marwa", "mark"], ["zeina", "zain"], ["hannah", "hassan"], ["fatima", "fahim"], ["amira", "amir"], ["lina", "leen"], ["nour", "noor"], ["jana", "jan"], ["yasmin", "yassin"], ["dalia", "danyal"], ["sara", "sari"], ["hala", "hamza"], ["rahma", "raheem"], ["salma", "salem"], ["ghada", "ghassan"], ["iman", "imad"], ["joud", "joudi"], ["kawthar", "khalid"], ["lamia", "laith"], ["maysa", "moussa"], ["noha", "nabil"], ["pakinah", "pasha"], ["qamar", "qusay"], ["rabab", "raad"], ["sama", "sami"], ["tala", "tamer"], ["umama", "umar"], ["wafa", "waleed"], ["xenia", "xander"], ["yasmeen", "younis"], ["zahra", "zayd"], ["afnan", "aamir"], ["bushra", "bashar"], ["dana", "danyal"], ["eman", "emad"], ["fadwa", "fadi"], ["hajar", "hazem"], ["ilham", "ibrahim"], ["jumana", "jamal"], ["khadija", "khaled"], ["lina", "luay"], ["maha", "mahmoud"], ["nadin", "nader"], ["olya", "othman"], ["penda", "pasha"], ["qadira", "qasim"], ["rasha", "rashid"], ["sahar", "saeed"], ["tasnim", "tariq"], ["umama", "usama"], ["vania", "vlad"], ["widad", "wael"], ["xara", "xavier"], ["yasmin", "youssef"], ["zaina", "zaki"], ["amira", "ali"], ["basma", "basim"], ["dima", "dahir"], ["faten", "fahd"], ["ghalia", "ghazi"], ["huda", "hadi"], ["ibtisam", "ibrahim"], ["jasmin", "jamil"], ["kholoud", "khalil"], ["lama", "laith"], ["mariam", "mohamed"], ["nawal", "nasser"], ["olya", "osama"], ["pamela", "pasha"], ["qistina", "qusay"], ["raghad", "rakan"], ["sahar", "salah"], ["tahani", "tawfiq"], ["urwa", "usama"], ["violet", "victor"], ["wafaa", "wassim"], ["xana", "xander"], ["yousra", "yacoub"], ["zahra", "zayd"]
    ]
},


}
export default names