function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "IT Associate",
    "Designer",
    "Developer",
    "Student"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    // If there's no .typewriter-text on the page (like about.html),
    // just return early so it doesn't error out
    if (!textElements) return;

    if (characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(!textElements) return;
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start the effect on page load
window.onload = typeWriter;


// Start the effect on page load
window.onload = typeWriter;
