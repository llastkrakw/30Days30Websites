var gridElement = document.querySelectorAll('.grid-element');
var gridContainer = document.querySelector('#grid-container');

console.log(gridElement);
console.log(gridContainer);


for (var i = 0; i < gridElement.length; i++) {

    gridElement[i].addEventListener('mouseenter', (e) => {


        if (e.target.classList.contains('grid-red')) {
            gridContainer.classList.remove(...gridContainer.classList);
            gridContainer.classList.add('grid-container-2');
        }

        if (e.target.classList.contains('grid-blue')) {
            gridContainer.classList.remove(...gridContainer.classList);
            gridContainer.classList.add('grid-container');
        }

        if (e.target.classList.contains('grid-dark')) {
            gridContainer.classList.remove(...gridContainer.classList);
            gridContainer.classList.add('grid-container-3');
        }
        console.log(gridContainer.classList);
    }, false);

}