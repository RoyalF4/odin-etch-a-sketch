const container = document.querySelector('.container');
const containerSize = 500;
let gridSize = 4;

function createGrid(containerSize, gridSize) {

    const container = document.querySelector('.container');

    // fit container with grid size
    container.style.width = Math.floor((containerSize / gridSize) * gridSize);
    container.style.height = Math.floor((containerSize / gridSize) * gridSize);

    // create grid
    for(let i = 0; i < Math.pow(gridSize, 2); i++) {
        const div = document.createElement('div');

        div.style.width = `${Math.floor(containerSize / gridSize)}px`;
        div.style.height = `${Math.floor(containerSize / gridSize)}px`;
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    }
}

createGrid(containerSize, gridSize);

