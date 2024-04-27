function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}

function findSound(event) {
    const keyValue = event.keyCode;
    console.log(keyValue);

    switch (keyValue) {
        case 65:
            playSound("./audio/num1.wav");
            break;
        case 83:
            playSound("./audio/num2.wav");
            break;
        case 68:
            playSound("./audio/num3.wav");
            break;
        case 70:
            playSound("./audio/num4.wav");
            break;
        case 71:
            playSound("./audio/num5.wav");
            break;
        case 72:
            playSound("./audio/num6.wav");
            break;
        case 74:
            playSound("./audio/num7.wav");
            break;
        case 75:
            playSound("./audio/num8.wav");
            break;
        case 76:
            playSound("./audio/num9.wav");
            break;
    }

}

document.addEventListener('keydown', findSound);

