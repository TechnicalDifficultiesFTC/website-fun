function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let outputs = ['MEOW MEOW MEOW','boo!!!','hi']

document.getElementById('change-text-button').addEventListener('click', function() {

    let output = outputs[getRandomInt(outputs.length)]
    
    document.getElementById('main-text').textContent = output;
});