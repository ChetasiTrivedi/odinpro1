let containerDiv=document.querySelector('.container');

makeGrid();
function makeGrid(){
    for(let i=0;i<16;i++){
        let row=document.createElement('div');
        row.classList.add('row');
        containerDiv.appendChild(row);
        for(let k = 0; k < 16; k++) {
            let column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
       
    }
}
}
draw();

function draw() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
        }
    }
function changeColor(){
    this.style.backgroundColor="#3f33de";

   

}


