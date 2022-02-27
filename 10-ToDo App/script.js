// UI variables

const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')

// const items = ['item1', 'item2', 'item3']; // eger veri tabinindan bilgi almak istersek onu buraya ekleyerek veri tabaninda ki bilgileri kullan
let items;
//load items
loadItems();


//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem)

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems)
}

// load function
function loadItems() {

    items = getItemsFromLS();
    items.forEach(function (item){
        createItem(item);
    });
}

//get items from local stroga
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    } else {
        items=JSON.parse(localStorage.getItem('items'));
    } 
    return items;
}

//set item to local storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

//delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
        items.splice(index,1);
    }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

// createItem Function
function createItem(text) {
    //create li
    const li = document.createElement('li')
    li.className = 'list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(text))

    //create a
    const a = document.createElement('a')
    a.classList = 'delete-item float-end'
    a.setAttribute('href', '#')
    a.innerHTML = '<i class="fas fa-times"></i>'

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li)
}

//add new item
function addNewItem(e) {
    e.preventDefault()

    if (input.value === '') {
        alert('add new item')
        return false;
    }

    //create item
    createItem(input.value);

    //save to local storage
    setItemToLS(input.value);

    //clear input
    input.value = "";
}

//delete an item
function deleteItem(e) {
    e.preventDefault();

    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            //delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent)
        }
    }
}

//delete all items
function deleteAllItems(e) {
    e.preventDefault();
    // if (confirm('are you sure ?')) {
    //     taskList.innerHTML = ""
    // }

    if (confirm('are you sure ?')) {
        while (taskList.firstChild) {
            taskList.firstChild.remove();
        };
        localStorage.clear();

    }

 

}