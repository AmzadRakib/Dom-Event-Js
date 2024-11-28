// option number 1 directly added in html 

// option number 2 add function in html

// important many times use it 
function makeGray() {
    document.body.style.backgroundColor = 'gray';

}

// option 3 
const buttonLime = document.getElementById('make-lime');
buttonLime.onclick = makeLime;
function makeLime() {
    document.body.style.backgroundColor = 'lime';
}

// another option 3 

const buttonPurple = document.getElementById('make-purple');
buttonPurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4 

const buttonGreen = document.getElementById('make-green');
buttonGreen.addEventListener('click', makeGreen);
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option 4 another 

const buttonPink = document.getElementById('make-pink');
buttonPink.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'pink'
});


// option 4 final 
// important many times use it 
document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
});
