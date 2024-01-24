const container = document.querySelector('.container');

for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add(`'grid${i + 1}'`);
    
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });

    container.appendChild(div);
}