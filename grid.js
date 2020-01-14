window.container = document.querySelector('.container');
const buttonClear = document.querySelector('button.clear');
const buttonNew = document.querySelector('button.new');

let gridWidth = 480;
let blockPadding = 14.5+"px";
buttonClear.addEventListener('click', clearGrid);
buttonNew.addEventListener('click', newGrid);

for (let i = 0; i < 256; i++){
    window.grid = document.createElement('div');
    grid.className = "gridClass";
    container.appendChild(grid);
    grid.style.padding = `${blockPadding}`;
    grid.addEventListener('mouseenter', paint);

}


function paint(e) {
    e.target.style.backgroundColor = "grey";
}

function clearGrid(){
    let grids = document.querySelectorAll('.gridClass');    
    for (let k=0; k<grids.length;k++) {
        grids[k].style.backgroundColor = '#ffffff';
    }
}
function newGrid(){
    const body = document.querySelector('body');
    body.removeChild(container);
    container = document.createElement('div');
    body.appendChild(container);
    container.className = "containerNew";
    window.gridNumInput = prompt("how many grids would you like to create in a row?");
    window.columnWidth = (gridWidth-gridNumInput) / gridNumInput;
    
    let lastBlockPadding = (columnWidth / 2)+"px";
    container.setAttribute('style', `grid-template-columns: repeat(${gridNumInput}, ${columnWidth}px);`);

    grids = document.querySelectorAll('.gridClass');    
    for (let k=0; k<grids.length;k++) {
        grids[k].style.backgroundColor = '#ffffff';
    }


    for (i = 0; i < gridNumInput*gridNumInput; i++) {
        window.grid = document.createElement('div');
        grid.className = "gridClass";
        grid.style.padding = `${lastBlockPadding}`;
        container.appendChild(grid);
        grid.addEventListener('mouseenter', paint);
    }
}