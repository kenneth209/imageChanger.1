const image = document.getElementById('image');
const changeButton = document.getElementById('changeButton');
let isSmiley = true;

changeButton.addEventListener('click', () => {
    if (isSmiley) {
        image.src = 'sad.jpg';
        document.body.style.backgroundColor = '#E78895'; // light red color
    } else {
        image.src = 'OIP.jpg';
        document.body.style.backgroundColor = '#AFC8AD';
    }
    isSmiley = !isSmiley;
});