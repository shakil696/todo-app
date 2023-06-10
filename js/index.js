let addBtn = document.getElementById('add_btn');
let updateBtn = document.getElementById('edit_btn');
let inputBox = document.getElementById('input');
let list = document.getElementById('items');
let items = [];


inputBox.onkeyup = () => {
    if(inputBox.value != ''){
        inputBox.style.borderColor = '#2262CC';
    } else{
        inputBox.style.borderColor = 'red';
    }
};
addBtn.addEventListener('click', function(){
    if(inputBox.value != ''){
        items.push(inputBox.value)
        showItems();
        inputBox.value = '';
    } else{
        inputBox.style.borderColor = 'red';
    }
})

function showItems(){
    list.innerHTML = '';
    items.forEach((item, index) => {
        list.innerHTML += ` <li id="item">
        <span id="output_data">${item}</span>
            <div class="icons">
                <button id="edit_btn" onclick="updateItem(${index})">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button id="delete_btn" onclick="deleteItem(${index})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>`;
    })
}
function deleteItem(index){
    let confirm = window.confirm("Are you sure you want to delete this task?")
    if(confirm){
        items.splice(index,1);
        showItems();
    }
}
function updateItem(index){
    addBtn.classList.remove('active')
    updateBtn.classList.add('active')
    let newValue = items[index];
    inputBox.value = newValue;
    updateBtn.onclick = () => {
        items.splice(index, 1, inputBox.value)
        updateBtn.classList.remove('active');
        addBtn.classList.add('active');
        inputBox.value = '';
        showItems();
        notifyText();
    }
}

function notifyText(){
    let text = document.getElementById('notify_text');
    text.classList.add('active')
    setTimeout(function(){text.classList.remove('active')}, 3000);
}