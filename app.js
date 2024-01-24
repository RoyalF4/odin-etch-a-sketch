const container = document.querySelector('.container');
const button = document.querySelector('button');
const containerSize = 1000;
let gridSize = 4;

button.addEventListener('click', () => {
    let newGridSize = prompt('Enter new grid size (max: 100):');
    if(newGridSize > 100) newGridSize = 100;
    container.textContent = '';
    createGrid(containerSize, newGridSize);
});

function createGrid(containerSize, gridSize) {

    // fit container with grid size
    container.style.width = containerSize / gridSize * gridSize;
    container.style.height = containerSize / gridSize * gridSize;

    // create grid
    for(let i = 0; i < Math.pow(gridSize, 2); i++) {
        const div = document.createElement('div');

        div.style.width = `${containerSize / gridSize}px`;
        div.style.height = `${containerSize / gridSize}px`;
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
        });

        container.appendChild(div);
    }
}

function getRandomColor() {
    return Math.floor(Math.random() * 256)
}

createGrid(containerSize, gridSize);

