const hoverImage = document.getElementById('cat-image');
const tickrate = 250 //Control in millis how fast the transition goes

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let outputs = [':3c','boo!!!','hi']

document.getElementById('change-text-button').addEventListener('click', function() {

    let output = outputs[getRandomInt(outputs.length)]
    
    document.getElementById('main-text').textContent = output;
});

//The "transition" works by modifying the filepath field of the hoverImage "object?"
hoverImage.addEventListener('mouseover', function() {
    hoverImage.style.opacity = 0; //Start fading out
    setTimeout(() => {
        hoverImage.src = 'fishcat.png';
        hoverImage.style.opacity = 1; //Start fading in
    }, tickrate);
});

hoverImage.addEventListener('mouseout', function() {
    hoverImage.style.opacity = 0; //Start fading out
    setTimeout(() => {
        hoverImage.src = 'pfp.png';
        hoverImage.style.opacity = 1; //Start fading in
    }, tickrate); 
});