const colorCode = document.querySelector('.color-code');
const generator = document.querySelector('.generate');
const preview = document.querySelector('.preview');
const clipboard = document.querySelector('.copy');

function randomColorGenerator() {
    let string = "0123456789abcdef";
    let hexCode = "#";

    for(let i = 0; i < 6; i++) {
        const randomChar = Math.floor(Math.random() * string.length);
        hexCode += string[randomChar];
    }

    return hexCode;
}

generator.addEventListener('click', newCode)

function newCode() {
    let hexCode = randomColorGenerator();
    // console.log(hexCode);
    colorCode.innerHTML = hexCode;
    colorCode.style.backgroundColor = hexCode;
    preview.style.backgroundColor = hexCode;
}

window.onload = newCode;

function copyHexCode(){
    navigator.clipboard.writeText(colorCode.innerHTML);
    clipboard.innerHTML = "Copied!";
    setTimeout(function() {
        clipboard.innerHTML = "Copy";
    }, 2000);
}

clipboard.addEventListener('click', copyHexCode);





