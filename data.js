
const questions = [
    {
        text: "Now it's 3AM and you're still working at your computer. \n You look at the pile of soon-due assignments that is...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Many", types: [] },
            { text: "So many", types: [] },
            { text: "Sososo many!", types: [] },
        ]
    },
    {
        // B
        text: "You're getting sleepy, but suddenly\u2014a bunny hops out from your screen!\n\n\"Oh, hi! Dark corner eyes... unsubmitted assignments... and back pain! You're perfect, come with me!\" The bunny grabs your hand and pulls you toward the screen.",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Did I fall asleep? Am I hallucinating from too much caffeine?", types: ["S"] },
            { text: "Yay! Magic is real! What am I gonna isekai into?", types: ["N"] },
        ]
    },
    {
        // J
        text: "\"Hi, human. My name's Aster. I'm taking you to join the Easter egg hunt. The winner gets a wish from the goddess this year!\"\n\nWhat first comes to your mind is...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "An egg hunt? Is my body ready for that right now\u2014am I wearing any shoes?", types: ["S"] },
            { text: "Any wish? What should I ask for? I wonder who that goddess is.", types: ["N"] },
        ]
    },
    {
        // Short Answer
        type: "shortAnswer",
        id: "relaxMethod",
        text: "You realize you have unfinished assignments, and you're unsure if you should go.\n\n\"Worried about that? Nah\u2014worry about your back! You've got to get moving.\"\n\"I know you've been tired lately. All work and no rest isn't good for you. Treat this as a break!\n\n\"So tell me\u2014what do you do when everything feels like too much?\"",
        image: "images/question-placeholder.png",
        answers: null
    },
    {
        text: "You prefer to spend time:",
        answers: [
            { text: "Alone or with a few friends", types: ["I"] },
            { text: "In a big group or party", types: ["E"] },
        ]
    },
    {
        text: "When making decisions, you prioritize:",
        answers: [
            { text: "Logic and consistency", types: ["T"] },
            { text: "Feelings and values", types: ["F"] },
        ]
    },
    {
        text: "Your lifestyle is more:",
        answers: [
            { text: "Organized and planned", types: ["J"] },
            { text: "Flexible and spontaneous", types: ["P"] },
        ]
    },
    {
        text: "In conversations, you:",
        answers: [
            { text: "Listen more", types: ["I"] },
            { text: "Talk more", types: ["E"] },
        ]
    },
    {
        text: "When learning, you prefer:",
        answers: [
            { text: "Practical examples", types: ["S"] },
            { text: "Abstract theories", types: ["N"] },
        ]
    },
    {
        text: "You value:",
        answers: [
            { text: "Fairness", types: ["T"] },
            { text: "Compassion", types: ["F"] },
        ]
    },
    {
        text: "Plans make you feel:",
        answers: [
            { text: "Comfortable", types: ["J"] },
            { text: "Restricted", types: ["P"] },
        ]
    },
    {
        text: "You recharge by:",
        answers: [
            { text: "Spending time alone", types: ["I"] },
            { text: "Being around people", types: ["E"] },
        ]
    },
    {
        text: "You base conclusions on:",
        answers: [
            { text: "Objective truth", types: ["T"] },
            { text: "Personal impact", types: ["F"] },
        ]
    },
    {
        text: "You are more often:",
        answers: [
            { text: "Prepared", types: ["J"] },
            { text: "Go with the flow", types: ["P"] },
        ]
    },
    {
        // Short Answer Insert
        text: "\"Remember\u2014no one's more special to you than you, so be kind to yourself.\"\n\n\"Take some rest, {relaxMethod}, just like you love to do.\"\n\n\"Heal up so you can continue strong.\"",
        image: "images/question-placeholder.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
];
