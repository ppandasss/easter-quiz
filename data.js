
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
        text: "You realize you have unfinished assignments, and you're unsure if you should go.\n\n\"Worried about that? Nah\u2014worry about your back! You've got to get moving. I know you've been tired lately. All work and no rest isn't good for you. Treat this as a break!\n\nTell me\u2014what do you do when it all feels like too much?\"",
        image: "images/question-placeholder.png",
        answers: null
    },
    {
        text: "\"That sounds nice! This egg hunt's a little different, but I promise it'll be fun!\n\nI want you on my team because...you've got something special that'll help me win!\nAre you in? If we win, I'll share the wish with you.\"",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Alright, I'm in!", types: [] },
        ]
    },
    {
        // D
        text: "You and Aster arrive in a magical forest. Bunnies are running in all directions.\n\n\"The hunt has already started\u2014we're late! Follow me!\"",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Wait! Shouldn't we plan our moves first?", types: ["J"] },
            { text: "Run run run! There must be eggs somewhere!", types: ["P"] },
        ]
    },
    {
        // A
        text: "While collecting eggs in the first area, Aster says\n\n\"We actually missed the team-forming earlier... we could've had more bunnies join us.\"",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Nah, just us is good. Small group = less chaos!", types: ["I"] },
            { text: "A big team sounds better. More people = more fun!", types: ["E"] },
        ]
    },
    {
        // H
        text: "In the next area, you find a hen's nest full of Easter eggs. Aster tells you to stand by while they distract the hen.\n\nYou nod and think...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "We've got a plan! We're definitely getting those eggs.", types: ["J"] },
            { text: "Hmm... what if the hen runs off? Maybe we need a backup plan.", types: ["P"] },
        ]
    },
    {
        // C
        text: "The plan works! After successfully gathering the eggs, you continue and reach a fork in the road.\n\nYou think...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "The short route might not have as many eggs, but it's faster to explore all.", types: ["T"] },
            { text: "Something about the long path feels right... I trust my gut\u2014let's go that way.", types: ["F"] },
        ]
    },
    {
        // I
        text: "\"Beep beep\u2014It's halftime! Please gather at the center area.\" The announcement rings lal over the forest.\n\nAster says, \"I'm gonna chat with the other bunnies. Come join me if you want!\"\n\nYou decide to recharge by...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Sitting alone and enjoying the peaceful view.", types: ["I"] },
            { text: "Joining Aster\u2014I want to meet the other bunnies!", types: ["E"] },
        ]
    },
    {
        // E
        text: "After a while, a bunny hops over and starts telling you all about their journey to the hunt every year, going on in colorful detail.\n\nYou decide to...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Share how strange you ended up here too!", types: ["E"] },
            { text: "Listen quietly and enjoy their energy.", types: ["I"] },
        ]
    },
    {
        // F
        text: "\"Beep beep\u2014Second half starts now!\" The announcement rings again.\n\nYou reunite with Aster, feeling more prepared as you learned from...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Observing other bunnies' clever moves and tricks.", types: ["S"] },
            { text: "Studying the environment and adapting your own strategy.", types: ["N"] },
        ]
    },
    {
        // L
        text: "You spot an egg sitting out in an open area\u2014it looks a little too easy.\n\nYou pause before going in, thinking it might be a trap.",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Better have some tools ready\u2014or at least a plan. Always be prepared!", types: ["J"] },
            { text: "We don't have any clue yet. Let's just figure something out if anything happens.", types: ["P"] },
        ]
    },
    {
        text: "Before you can decide, Aster rushes in and grabs the egg.\n\n\"We got another one-whoa\u2014!\" Aster nearly falls into a hidden pit. You quickly pull him back up, and the hunt continues.",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Let's find more eggs!", types: [] },
        ]
    },
    {
        // G
        text: "Time is almost up, and your basket is nearly overflowing with eggs.\n\nYou spot one more nearby and reach for it\u2014but a baby bunny arrives just a second after you.\n\nTheir basket only has one lonely egg.",
        image: "images/question-placeholder.png",
        answers: [
            { text: "Sorry, kid. Rules are rules.", types: ["T"] },
            { text: "Aw, only one? Then this one's yours!", types: ["F"] },
        ]
    },
    {
        text: "tbc",
        image: "images/question-placeholder.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
    {
        // K
        text: "You wake up at your desk. The unfinished assignments are still there.\n\nYou reflect on everything that happened...",
        image: "images/question-placeholder.png",
        answers: [
            { text: "I don’t know what that was, but what a wild adventure! I'm telling someone about this.", types: ["F"] },
            { text: "It was just a strange dream. I must've been overthinking about the Easter event.", types: ["T"] },
        ]
    },
    {
        // Short Answer Insert
        text: "\"Remember\u2014no one's more special to you than you, so be kind to yourself.\"\n\n\"Take some rest, {relaxMethod}, just like you love to do.\"\n\n\"Heal up, so you can come back even stronger.\"",
        image: "images/question-placeholder.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
];
