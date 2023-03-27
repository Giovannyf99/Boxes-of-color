// let changeBox = document.getElementsByClassName("box");

// changeBox.addEventlistner('click', function onClick(){
//     let boxs = document.getElementsByClassName('box');
//     // document.body.section.style.backgroundColor = 'red' ;
//     boxs.style.backgroundColor= 'red';
// });


let boxes = document.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('click', function () {
    box.style.backgroundColor = box.style.backgroundColor
        === 'red' ? 'black' : 'red';
}))

let buttons = document.getElementById('yellow')

buttons(button => button.addEventListener('click',
    function () {
        document.button.style.backgroundColor = 'yellow'
    }))