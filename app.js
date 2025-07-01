const emoji=document.querySelector("#emoji");
const emojis = [
    "🤣",
    "❤",
    "💕",
    "🙌",
    "💖",
    "🎉",
    "🐱‍🐉",
    "🎂",
    "😒",
    "🐱‍🚀",
    "😜",
    "✨",
    "👀",
    "😃",
    "😜",
    "🐱‍🏍",
];
emoji.addEventListener('mouseover',()=>{
emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)]});
/*function: once you hover the emoji, the event is fired and random emojis are appeared on the screen*/