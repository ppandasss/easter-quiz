
const questions = [
    {
        text: "It's 3AM and you're still working. \n You look at the pile of soon-due assignments that is...",
        image: "images/Questions/01.png",
        answers: [
            { text: "Many", types: [] },
            { text: "So many", types: [] },
            { text: "Sososo many!", types: [] },
        ]
    },
    {
        // B
        text: "Suddenly\u2014a bunny hops out from your screen!\n\n\"Dark corner eyes... loaded assignments... and back pain! You're perfect, come with me!\"\n\n The bunny pulls you toward the screen.",
        image: "images/Questions/02.png",
        answers: [
            { text: "Did I fall asleep? Am I hallucinating from too much caffeine?", types: ["S"] },
            { text: "Yay! Magic is real! What am I gonna isekai into?", types: ["N"] },
        ]
    },
    {
        // J
        text: "\"Hi, my name's Aster. I'm taking you to join the Easter egg hunt. If you win, you'll get a wish from the goddess of Easter!\"\n\nWhat first comes to your mind is...",
        image: "images/Questions/03.png",
        answers: [
            { text: "An egg hunt? Is my body ready for that\u2014am I wearing any shoes?", types: ["S"] },
            { text: "Any wish? What should I ask for\u2014who is the goddess?", types: ["N"] },
        ]
    },
    {
        // Short Answer
        type: "shortAnswer",
        id: "relaxMethod",
        text: "You look at unfinished assignments, unsure if you should go.\n\n\"Worried about that? Nah\u2014worry about yourself!\nAll work and no rest isn't good for you. Treat this as a break!\n\nTell me\u2014what do you do to relax from work and study?\"",
        image: "images/Questions/04.png",
        answers: null
    },
    {
        text: "\"That sounds nice! This egg hunt is a little different, but I promise it'll be fun!\n\nAre you in? If we win, I'll share the wish with you.\"",
        image: "images/Questions/05.png",
        answers: [
            { text: "Alright, I'm in!", types: [] },
        ]
    },
    {
        // D
        text: "You and Aster arrive in a magical forest. Bunnies are running in all directions.\n\n\"The hunt has already started. We're late! Follow me!\"",
        image: "images/Questions/06.png",
        answers: [
            { text: "Wait! Shouldn't we plan our moves first?", types: ["J"] },
            { text: "Run run run! There must be eggs somewhere!", types: ["P"] },
        ]
    },
    {
        // A
        text: "While collecting eggs in the first area, Aster says\n\n\"We actually missed the team-forming earlier... we could've had more bunnies join us.\"",
        image: "images/Questions/07.png",
        answers: [
            { text: "Nah, just us is good. Small group = less chaos!", types: ["I"] },
            { text: "A big team sounds better. More people = more fun!", types: ["E"] },
        ]
    },
    {
        // H
        text: "In the next area, you find a hen's nest full of Easter eggs. Aster tells you to stand by while they distract the hen.\n\nYou think...",
        image: "images/Questions/08.png",
        answers: [
            { text: "We've got a plan! We're definitely getting those eggs.", types: ["J"] },
            { text: "Hmm... what if the hen runs off? Maybe we need a backup plan.", types: ["P"] },
        ]
    },
    {
        // C
        text: "After collecting the eggs, you continue and reach a fork in the road.\n\nYou think...",
        image: "images/Questions/09.png",
        answers: [
            { text: "The short route should be faster to explore all\u2014let's go that way.", types: ["T"] },
            { text: "Something about the long path feels better... I trust my gut\u2014let's go that way.", types: ["F"] },
        ]
    },
    {
        // I
        text: "\"Beep beep\u2014It's halftime! Please gather at the center area.\" The announcement rings all over the forest.\n\n\"I'm gonna chat with the other bunnies. Come join me if you want!\"\n\nYou decide to recharge by...",
        image: "images/Questions/10.png",
        answers: [
            { text: "Sitting alone and enjoy the peaceful view.", types: ["I"] },
            { text: "Joining Aster\u2014I want to meet other bunnies!", types: ["E"] },
        ]
    },
    {
        // E
        text: "After a while, a bunny hops over and starts telling you about their journey to the hunt every year in colorful detail.\n\nYou decide to...",
        image: "images/Questions/11.png",
        answers: [
            { text: "Share how strange you ended up here too!", types: ["E"] },
            { text: "Listen quietly and enjoy their energy.", types: ["I"] },
        ]
    },
    {
        // F
        text: "\"Beep beep\u2014Second half starts now!\" The announcement rings again.\n\nYou reunite with Aster, feeling more prepared as you've learned from...",
        image: "images/Questions/12.png",
        answers: [
            { text: "Observing other bunnies' clever moves and tricks.", types: ["S"] },
            { text: "Studying the environment and adapt your own strategy.", types: ["N"] },
        ]
    },
    {
        // L
        text: "You spot an egg sitting out in an open area. It looks a little too easy\u2014might be a trap?",
        image: "images/Questions/13.png",
        answers: [
            { text: "We should have some tools ready\u2014or at least a plan. Better be prepared!", types: ["J"] },
            { text: "We don't have any clue yet. I'll figure something out if anything happens.", types: ["P"] },
        ]
    },
    {
        text: "Before you can decide, Aster rushes in and grabs the egg.\n\n\"We got another one-whoa\u2014!\" Aster nearly falls into a hidden pit. You quickly pull him back up, and the hunt continues.",
        image: "images/Questions/14.png",
        answers: [
            { text: "Let's find more eggs!", types: [] },
        ]
    },
    {
        // G
        text: "Time is almost up, and your basket is overflowing with eggs.\n\nYou spot one more nearby\u2014but a baby bunny arrives just a second after you. Their basket only has one lonely egg.",
        image: "images/Questions/15.png",
        answers: [
            { text: "Sorry, kid. Rules are rules.", types: ["T"] },
            { text: "Aw, only one? Then this one's yours!", types: ["F"] },
        ]
    },
    {
        text: "\"Beep beep\u2014The time is up!\" The announcement rings.\n\nEveryone returns with their baskets. Yours has more eggs than most, maybe even enough to win.\n\nThe results come out shortly, and the winner is...",
        image: "images/Questions/16.png",
        answers: [
            { text: "Is...", types: [] },
        ]
    },
    {
        text: "Another human, just like you, wins the race solo without any teammates at all.\n\nThe goddess appears to grant their prize. You can't help but notice the crowd celebrating their victory.\n\n\'Even in my dream, I still don't succeed...\'",
        image: "images/Questions/17.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
    {
        text: "Suddenly, the goddess approaches you.\n\n\"Hi there, human. I see where you've come from...\n\nit has been tough, hasn't it? Going through all that.\"",
        image: "images/Questions/18.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
    {
        // Short Answer Insert
        text: "\"Remember\u2014no one's more special to you than you, so be kind to yourself.\"\n\n\"Take some rest, {relaxMethod}, just like you love to do.\"\n\n\"Heal up, so you can come back even stronger.\"",
        image: "images/Questions/19.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
    {
        text: "\"Here. I want you to have something.\"\n\n\"When you're feeling down, look inside. It'll remind you how special you are.\"",
        image: "images/Questions/20.png",
        answers: [
            { text: "Receive a mysterious Easter egg", types: [] },
        ]
    },
    {
        text: "Aster runs up. \"Hey, don't feel bad\u2014we did amazing!\"\n\nAnother bunny joins. \"Your time will come! Maybe next year, or the one after.\"\n\n\"A lot of possibilities are waiting for you!\"\n\nSoon, a whole group surrounds you, cheering you on.",
        image: "images/Questions/21.png",
        answers: [
            { text: "...", types: [] },
        ]
    },
    {
        text: "\"Remember this when you get back, alright?\n\nNot everything happens right away. But if you keep going, it'll be yours someday!\"",
        image: "images/Questions/22.png",
        answers: [
            { text: "Sure, I will!", types: [] },
            { text: "Not so sure... but I'll try.", types: [] },
        ]
    },
    {
        text: "\"And actually... I brought you here just so you could rest a bit. There's no wish prize to share, hehe.\"\n\n\"Oh no, time's running out! Goodbye, human! Take car\u2014\"",
        image: "images/Questions/23.png",
        answers: [
            { text: "You're pulled back through the magical portal once again", types: [] },
        ]
    },
    {
        // K
        text: "You wake up at your desk, unfinished assignments are still there.\n\nYou reflect on everything that just happened...",
        image: "images/Questions/24.png",
        answers: [
            { text: "What a wild adventure! I'm telling someone about this.", types: ["F"] },
            { text: "It was just a strange dream. Probably overthinking about the Easter event.", types: ["T"] },
        ]
    },
    {
        text: "You notice a glowing Easter egg on your desk.\n\n\"No way... it was real ?\"",
        image: "images/Questions/25.png",
        answers: [
            { text: "Open and see what's inside", types: [] },
        ]
    },
];
