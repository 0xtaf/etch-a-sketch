window.container = document.querySelector('.container');
const buttonClear = document.querySelector('button.clear');
const buttonNew = document.querySelector('button.new');
const coloredRGB = document.createElement('input');
const blackRGB = document.createElement('input');
const body = document.querySelector('body');
const textForColoredRadio = document.createElement('h4');
const textForBlackRadio = document.createElement('h4');

textForBlackRadio.textContent = "Black & White:";
textForColoredRadio.textContent ="Colored:";
body.insertBefore(textForBlackRadio, body.childNodes[5]);
body.insertBefore(textForColoredRadio, body.childNodes[5]);
textForColoredRadio.className = "textClassFirst";
textForBlackRadio.className = "textClassSecond";


body.insertBefore(coloredRGB, body.childNodes[5]);
coloredRGB.type ="radio";
coloredRGB.className ="coloredRGB";
body.insertBefore(blackRGB, body.childNodes[5]);
blackRGB.type ="radio";
blackRGB.className = "blackRGB";
blackRGB.checked = true;
coloredRGB.addEventListener('change', changeRGB);
blackRGB.addEventListener('change',changeBlackRGB);



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

//default buton ayarla black için
function paint(e) {
    if (coloredRGB.checked != true){
        let colorPercentage = 0;
        colorPercentage = (colorPercentage - ((colorPercentage*10)/100));
        console.log(colorPercentage);
        e.target.style.backgroundColor = `rgb(${colorPercentage}%,${colorPercentage}%,${colorPercentage}%)`;
    } else {
        let x = Math.floor(Math.random() * 250);
        let y = Math.floor(Math.random() * 200);
        let z = Math.floor(Math.random() * 230);
        e.target.style.backgroundColor = `rgb(${x}%,${y}%,${z}%)`;
    }
    
    // colorPercentage = (colorPercentage - ((colorPercentage*10)/100));
    // console.log(colorPercentage);
    // e.target.style.backgroundColor = `rgb(${colorPercentage}%,${colorPercentage}%,${colorPercentage}%)`;
}

function clearGrid(){
    let grids = document.querySelectorAll('.gridClass');    
    for (let k=0; k<grids.length;k++) {
        grids[k].style.backgroundColor = '#ffffff';
    }

    
}
function newGrid(){
    
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

function changeRGB(){
    if (coloredRGB.checked == true){
        if (blackRGB.checked = true){
            blackRGB.checked = false;
        }
    }
}
function changeBlackRGB(){
    if (blackRGB.checked == true){
        if (coloredRGB.checked = true){
            coloredRGB.checked = false;
        }
    }
}