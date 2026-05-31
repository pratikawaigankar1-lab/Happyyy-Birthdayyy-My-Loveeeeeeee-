// LOADER

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.getElementById("loader")
    .style.opacity="0";

    setTimeout(()=>{

      document.getElementById("loader")
      .style.display="none";

    },1000);

  },2500);

});

// PASSWORD

const unlockBtn =
document.getElementById("unlockBtn");

unlockBtn.addEventListener("click",()=>{

  const password =
  document.getElementById("passwordInput")
  .value;

  if(password === "12 January 2025"){

    document.getElementById(
      "password-screen"
    ).style.display="none";

    document.getElementById(
      "main-content"
    ).style.display="block";

  }else{

    document.getElementById(
      "wrongPassword"
    ).innerText =
    "Wrong answer 😭";

  }

});

// MUSIC

const startBtn =
document.getElementById("startBtn");

const music =
document.getElementById("bgMusic");

startBtn.addEventListener("click",()=>{

  // PLAY MUSIC
  music.play();

  // SCROLL TO MEMORY SECTION
  document.getElementById("memories")
  .scrollIntoView({
    behavior:"smooth"
  });

});

// FLOATING HEARTS

const heartsContainer =
document.querySelector(".hearts-container");

function createHeart(){

  const heart =
  document.createElement("div");

  heart.classList.add("heart");

  const emojis =
  ["💖","🎀","✨","💗"];

  heart.innerHTML =
  emojis[Math.floor(
    Math.random()*emojis.length
  )];

  heart.style.left =
  Math.random()*100 + "vw";

  heart.style.fontSize =
  Math.random()*20 + 15 + "px";

  heart.style.animationDuration =
  Math.random()*3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(()=>{

    heart.remove();

  },7000);

}

setInterval(createHeart,300);
// SPARKLE CURSOR

document.addEventListener(
  "mousemove",
  (e)=>{

    const sparkle =
    document.createElement("div");

    sparkle.classList.add("sparkle");

    const emojis =
    ["✨","💖","🎀"];

    sparkle.innerHTML =
    emojis[Math.floor(
      Math.random()*emojis.length
    )];

    sparkle.style.left =
    e.clientX + "px";

    sparkle.style.top =
    e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

      sparkle.remove();

    },1000);

});// TYPEWRITER EFFECT

// TYPEWRITER EFFECT

const message = `Happy Birthday to the prettiest girl ever in my life  ❤️

Today is not just another day for me.
It’s the day someone incredibly special came into this world,
and somehow made my life softer, happier, and more beautiful too.

Thank you for all the little things you do,
for your smile,
your energy,
your cute reactions,
teraaa cutee wala guusaaa,
and the way you make even ordinary moments feel memorable.

I genuinely hope this year brings you happiness,
peace,
success,
beautiful memories,
and everything your heart quietly wishes for(I know itsss meeeee).

No matter where life takes us,
I will always be grateful
for every laugh,
every memory,
and every moment connected to you.

So today,
I just want you to smile the most,
feel loved the most,
and enjoy every second of your special day.

Happy Birthday once again
to my most favorite person anddd biggesst gift given by god to meeee 🎀❤️`;

const textElement =
document.getElementById("typewriter-text");

let i = 0;

function typeWriter(){

  if(i < message.length){

    textElement.textContent +=
    message.charAt(i);

    i++;

    setTimeout(typeWriter,35);

  }

}

// START EMPTY
textElement.textContent = "";

// START EFFECT
  setTimeout(typeWriter,3000);
// FLOATING LOVE TEXTS

const floatingContainer =
document.querySelector(".floating-texts");

const loveMessages = [

  "Khushhiiiii ❤️",
  "Khusshhuuu 🎀",
  "My Lovveeee 💖",
  "Jaaannn ✨",
  "Princessss 👑",
  "Panda Forever 🐼",
  "Your Smile >>> 🌸",
  "I Love Your Laugh 😭",
  "Cutest Girl Alive 💕",
  "You Make Me Happy ❤️",
  "My Favorite Person 🎀",
  "Pretty Eyes ✨",
  "Soft Heart 💖",
  "Forever My Panda 🐼"

];

function createFloatingLove(){

  const text =
  document.createElement("div");

  text.classList.add("floating-love");

  text.innerHTML =
  loveMessages[Math.floor(
    Math.random()*loveMessages.length
  )];

  text.style.left =
  Math.random()*100 + "vw";

  text.style.fontSize =
  Math.random()*12 + 14 + "px";

  text.style.animationDuration =
  Math.random()*5 + 6 + "s";

  floatingContainer.appendChild(text);

  setTimeout(()=>{

    text.remove();

  },11000);

}

setInterval(createFloatingLove,1200);
// LOVE WHISPERS

const whisperContainer =
document.querySelector(".love-whispers");

const whispers = [

  "Khushhiii ❤️",
  "My favorite person 🎀",
  "Your smile heals me ✨",
  "Princess 🌸",
  "Panda forever 🐼",
  "You look cute today 💖",
  "My jaan ❤️",
  "I love your laugh 😭",
  "Soft heart ✨",
  "Still my favorite girl 🎀",
  "Pretty eyes 🌸",
  "My lovveeee 💕",
  "You make life softer ❤️",
  "Cutest girl alive ✨"

];

function createWhisper(){

  const whisper =
  document.createElement("div");

  whisper.classList.add("whisper");

  whisper.innerHTML =
  whispers[Math.floor(
    Math.random()*whispers.length
  )];

  whisper.style.left =
  Math.random()*80 + 10 + "vw";

  whisper.style.top =
  Math.random()*80 + 10 + "vh";

  whisper.style.fontSize =
  Math.random()*8 + 14 + "px";

  whisperContainer.appendChild(whisper);

  setTimeout(()=>{

    whisper.remove();

  },7000);

}

setInterval(createWhisper,3500);
// FINAL MESSAGE

const finalBtn =
document.getElementById("finalBtn");

const finalMessage =
document.getElementById("finalMessage");

finalBtn.addEventListener("click",()=>{

  finalMessage.style.display="block";

  finalBtn.style.display="none";

});