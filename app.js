const container = document.querySelector('.container');

for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add(`'grid${i + 1}'`);
    container.appendChild(div);
}