// Select color input
const colorInput = document.querySelector("#colorPicker");

// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const canvas = document.querySelector('#pixelCanvas');

// Color selector:
function clickedBox(event) {
    const color = colorInput.value;
    event.target.style.backgroundColor = color;
}
// Grid mount function 
function makeGrid() {
    canvas.innerHTML = '';
    const fragment = document.createDocumentFragment();
    // For-loop to make a table with given height and width
    for (let x = 0; x < height.value; x++) {
        const tr = document.createElement('tr');

        for (let y = 0; y < width.value; y++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }

        tr.addEventListener('click', clickedBox);
        fragment.appendChild(tr);
    }
    canvas.appendChild(fragment);
};
// An event listener that comes into action when submit button is clicked 
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    // When user give input data, makeGrid() function is called
    makeGrid();
});