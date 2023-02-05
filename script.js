let add = document.getElementById(`add`);
let edit = document.getElementById(`edit`);
let container = document.getElementsByClassName(`container`);
let input = document.getElementById(`task`);

add.addEventListener(`click`, (e)=>{
    e.preventDefault(); //prevents page from refreshing

    let newRow = document.createElement(`div`);
    let newCol = document.createElement(`col`);

    container[0].appendChild(newRow);
    newRow.appendChild(newCol);

    newRow.setAttribute(`class`, `row`);
    newCol.setAttribute(`class`, `col-12`);

    /*
    let newTask = document.createElement(`p`);
    newTask.innerHTML = input.value;
    newTask.setAttribute(`style`, `text-align:center;`);
    */

    let newTask = document.createElement(`article`);
    newTask.innerHTML = input.value;

    let newForm = document.createElement(`form`);
    let delBtn = document.createElement(`button`);
    let editBtn = document.createElement(`button`);

    delBtn.setAttribute(`class`, `btn btn-danger`);
    delBtn.setAttribute(`id`, `delete`);
    delBtn.setAttribute(`type`, `button`);
    delBtn.innerHTML = `delete`;
    editBtn.setAttribute(`class`, `btn btn-warning`);
    editBtn.setAttribute(`id`, `edit`);
    editBtn.setAttribute(`style`, `margin-right:5px;`);
    editBtn.setAttribute(`type`, `button`);
    editBtn.innerHTML = `edit`;

    newForm.appendChild(editBtn);
    newForm.appendChild(delBtn);
    newTask.appendChild(newForm);

    newCol.appendChild(newTask);
    input.value = ``;

    delBtn.addEventListener(`click`, ()=>{
        console.log("clicked");
        newCol.removeChild(newTask);
        newTask.setAttribute(`style`, `text-align:center; text-decoration:line-through;`);
    });
});