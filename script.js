const  container=document.querySelector("#container")
let num=16;
makeGrid(num);
function makeGrid(num){
    let rowCounter=1;
    let columnCounter=1;
    //num number of rows are created
    while(rowCounter<=num){
        let row=document.createElement("div")
        row.classList.add("row");
        const rowId="row" +rowCounter;
        row.setAttribute("id",rowId);
        //each row gets a num number of columns
        while(columnCounter<=num){
            const columnId="column" +columnCounter;
            let div=document.createElement("div")
            div.setAttribute("id",columnId);
            div.classList.add("column");
            columnCounter++;
            row.appendChild(div);
        }
        columnCounter=1;
        rowCounter++;
        container.appendChild(row);   
    }
    const rows=document.querySelectorAll(".row")
    const columns=document.querySelectorAll(".column")
    rows.forEach(row=>{
        const columns=row.querySelectorAll(".column")
        columns.forEach(column=>{
            column.addEventListener("mouseenter",()=>{
                column.style.backgroundColor=getRandomColor();
            },{once:true})
        }) 
})


}
//function that removes grid to leave space for making a new grid
function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
//event listener to accept the gride size from user
const button=document.querySelector("button")
button.addEventListener("click",()=>{
    let number =prompt("Insert the grid size you would like(1-100)") 
    num=number
    if(number>=1 && number<=100){
        //removing grid so as to make space for the new grid
        removeGrid();
        makeGrid(number);
    }
    else if(number<1 || number>100){
        alert("Please enter a valid number(1-100)")
    }
    else{
        alert("Please enter a number")
    }
})
//random  color each time the mouse moves between grids
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


