type WordItem = {
    type: "movies" | "famous" | "history";
    name: string;
    hint: string;
  };
  
  type HangManItem = {
    [key: `theCorrectWord_${number}`]: WordItem;
  };

export const HangMan : HangManItem[] = [
    // * movies
    {
        theCorrectWord_1: {    
            type: "movies",
            name: "breakingbad",
            hint: "A series about a teacher who turns into a drug dealer."
        },
        theCorrectWord_2: {    
            type: "movies",
            name: "smile",
            hint: "A horror movie about a supernatural curse."
        },
        theCorrectWord_3: {    
            type: "movies",
            name: "lordoftherings",
            hint: "A fantasy adventure about an epic journey."
        },
        theCorrectWord_4: {    
            type: "movies",
            name: "lost",
            hint: "A mystery adventure series about plane crash survivors."
        },
        theCorrectWord_5: {    
            type: "movies",
            name: "peakyblinders",
            hint: "A crime series about a powerful gangster family."
        },
        theCorrectWord_6: {    
            type: "movies",
            name: "harrypotter",
            hint: "A young wizard's journey to defeat a dark lord."
        },
        theCorrectWord_7: {    
            type: "movies",
            name: "avatar",
            hint: "A sci-fi movie set on the planet Pandora."
        },
        theCorrectWord_8: {    
            type: "movies",
            name: "titanic",
            hint: "A romantic tragedy about a famous shipwreck."
        },
        theCorrectWord_9: {    
            type: "movies",
            name: "gameofthrones",
            hint: "A fantasy series about noble families fighting for a throne."
        },
        theCorrectWord_10: {    
            type: "movies",
            name: "strangerthings",
            hint: "A sci-fi horror series about kids fighting supernatural creatures."
        },
        theCorrectWord_11: {    
            type: "movies",
            name: "dark",
            hint: "A German sci-fi thriller about time travel and mysteries."
        },
        theCorrectWord_12: {    
            type: "movies",
            name: "thewitcher",
            hint: "A fantasy series about a monster hunter."
        },
        theCorrectWord_13: {    
            type: "movies",
            name: "thegodfather",
            hint: "A legendary crime movie about the mafia."
        },
        theCorrectWord_14: {    
            type: "movies",
            name: "thematrix",
            hint: "A sci-fi movie about a hacker discovering reality is a simulation."
        },
        theCorrectWord_15: {    
            type: "movies",
            name: "inception",
            hint: "A mind-bending movie about dreams within dreams."
        },
        theCorrectWord_16: {    
            type: "movies",
            name: "interstellar",
            hint: "A space exploration movie about finding a new home for humanity."
        },
        theCorrectWord_17: {    
            type: "movies",
            name: "sherlock",
            hint: "A mystery series about a genius detective."
        },
        theCorrectWord_18: {    
            type: "movies",
            name: "moneyheist",
            hint: "A Spanish crime series about a bank robbery."
        },
        theCorrectWord_19: {    
            type: "movies",
            name: "blackmirror",
            hint: "A sci-fi anthology series exploring the dark side of technology."
        },
        theCorrectWord_20: {    
            type: "movies",
            name: "narcos",
            hint: "A crime series about the rise and fall of drug cartels."
        },
        theCorrectWord_21: {    
            type: "movies",
            name: "bettercallsaul",
            hint: "A prequel series about a crooked lawyer in the Breaking Bad universe."
        },
        theCorrectWord_22: {    
            type: "movies",
            name: "squidgame",
            hint: "A survival drama about people competing in deadly games."
        },
        theCorrectWord_23: {    
            type: "movies",
            name: "joker",
            hint: "A psychological thriller about a failed comedian becoming a villain."
        },
        theCorrectWord_24: {    
            type: "movies",
            name: "fastandfurious",
            hint: "An action movie series about street racing and heists."
        },
        theCorrectWord_25: {    
            type: "movies",
            name: "friends",
            hint: "A classic sitcom about six friends in New York."
        },
        theCorrectWord_26: {    
            type: "movies",
            name: "thebigbangtheory",
            hint: "A comedy series about nerdy scientists and their lives."
        },
        theCorrectWord_27: {    
            type: "movies",
            name: "howimetyourmother",
            hint: "A comedy series about a man telling his kids how he met their mother."
        },
        theCorrectWord_28: {    
            type: "movies",
            name: "houseofcards",
            hint: "A political thriller series about power and corruption."
        },
        theCorrectWord_29: {    
            type: "movies",
            name: "westworld",
            hint: "A sci-fi series about a futuristic theme park with robots."
        },
        theCorrectWord_30: {    
            type: "movies",
            name: "scream",
            hint: "A horror movie series about a masked killer."
        }
    },
    // * famous
    {
        theCorrectWord_1: {    
            type: "famous",
            name: "ronaldo",
            hint: "A Portuguese football legend, known as 'CR7'."
        },
        theCorrectWord_2: {    
            type: "famous",
            name: "ali",
            hint: "A boxing champion famous for 'Float like a butterfly, sting like a bee'."
        },
        theCorrectWord_3: {    
            type: "famous",
            name: "einstein",
            hint: "A scientist famous for the theory of relativity."
        },
        theCorrectWord_4: {    
            type: "famous",
            name: "tesla",
            hint: "An inventor known for electricity and AC power."
        },
        theCorrectWord_5: {    
            type: "famous",
            name: "shakespeare",
            hint: "A playwright known for 'Romeo and Juliet'."
        },
        theCorrectWord_6: {    
            type: "famous",
            name: "newton",
            hint: "A scientist known for discovering gravity."
        }
    },
    // * History
    {
        theCorrectWord_1: {    
            type: "history",
            name: "napoleon",
            hint: "A French military leader who became an emperor."
        },
        theCorrectWord_2: {    
            type: "history",
            name: "cleopatra",
            hint: "An Egyptian queen known for her intelligence and beauty."
        },
        theCorrectWord_3: {    
            type: "history",
            name: "gandhi",
            hint: "A leader famous for peaceful protests in India."
        },
        theCorrectWord_4: {    
            type: "history",
            name: "lincoln",
            hint: "A US president known for ending slavery."
        },
        theCorrectWord_5: {    
            type: "history",
            name: "churchill",
            hint: "A British leader during World War II."
        }
    },
    // * science
    {
        theCorrectWord_1: {    
            type: "science",
            name: "gravity",
            hint: "A force that keeps us on the ground."
        },
        theCorrectWord_2: {    
            type: "science",
            name: "evolution",
            hint: "A theory explaining how species change over time."
        },
        theCorrectWord_3: {    
            type: "science",
            name: "photosynthesis",
            hint: "A process plants use to make food from sunlight."
        },
        theCorrectWord_4: {    
            type: "science",
            name: "atom",
            hint: "The smallest unit of matter."
        },
        theCorrectWord_5: {    
            type: "science",
            name: "blackhole",
            hint: "A space phenomenon that swallows everything around it."
        }
    },
    // * sports
    {
        theCorrectWord_1: {    
            type: "sports",
            name: "football",
            hint: "A sport played with a round ball and two goals."
        },
        theCorrectWord_2: {    
            type: "sports",
            name: "basketball",
            hint: "A sport where players score by throwing a ball into a hoop."
        },
        theCorrectWord_3: {    
            type: "sports",
            name: "tennis",
            hint: "A sport played with rackets and a small ball."
        },
        theCorrectWord_4: {    
            type: "sports",
            name: "olympics",
            hint: "A global sporting event held every four years."
        }
    },
    // * tech
    {
        theCorrectWord_1: {    
            type: "technology",
            name: "internet",
            hint: "A global network connecting computers worldwide."
        },
        theCorrectWord_2: {    
            type: "technology",
            name: "robotics",
            hint: "The science of designing and building robots."
        },
        theCorrectWord_3: {    
            type: "technology",
            name: "blockchain",
            hint: "A technology behind cryptocurrencies like Bitcoin."
        },
        theCorrectWord_4: {    
            type: "technology",
            name: "artificialintelligence",
            hint: "Machines designed to simulate human intelligence."
        }
    },
    // * geography
    {
        theCorrectWord_1: {    
            type: "geography",
            name: "amazon",
            hint: "The largest rainforest in the world."
        },
        theCorrectWord_2: {    
            type: "geography",
            name: "sahara",
            hint: "The largest desert in the world."
        },
        theCorrectWord_3: {    
            type: "geography",
            name: "everest",
            hint: "The highest mountain in the world."
        },
        theCorrectWord_4: {    
            type: "geography",
            name: "nile",
            hint: "The longest river in the world."
        }
    },
];
