var textValue = "";
var editValueText = "";
var itemList = [];
var newArrayList = [];
var removeItemList = [];

function myOnChange(val) {
    textValue = val;
}

function onChangeEdit(val) {
    editValueText = val;
}

var inputFiled = document.getElementById("textInput");
inputFiled.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add-btn").click();
  }
});

function renderListItem(list, id = null){
    var text = "";
    for (i = 0; i < list.length; i++) {
        var itemCount = i + 1;
        if(id === i){
            text += `<div class="list-item"><span>${itemCount}</span><input type="checkbox" class="check" onclick="selectItem(${i})"></input> <input type="text" placeholder="Type anything..." id="edit-input" value="${newArrayList[i]}" onchange="onChangeEdit(this.value)"/> <div class="item-buttons"><button type="button" class="edit-btn" onclick="handleUpdate(${i})">update</button> <button type="button" class="delete-icon red-btn" onclick="deleteItem(${i})">X</button></div></div>` + "<br>";
        }else{
            text += `<div class="list-item"><span>${itemCount}</span><input type="checkbox" class="check" onclick="selectItem(${i})"></input> <span class="text-content">${newArrayList[i]}</span> <div class="item-buttons"> <button type="button" class="edit-btn" onclick="handleEdit(${i})">edit</button> <button type="button" class="red-btn" onclick="deleteItem(${i})">X</button></div></div>` + "<br>";
        }
    }
    document.getElementById("myText").innerHTML = text;
}

function renderMultipleDelete(){
    if(removeItemList.length){
        document.getElementById("multiple-delete").style.display = "inline-block";
    }else{
        document.getElementById("multiple-delete").style.display = "none";
    }
}


function selectItem (index) {
    if(removeItemList.includes(index)){
        removeItemList = removeItemList.filter(function (item) {
            return item != index
        })
    }else{
        removeItemList.push(index);
    }
    renderMultipleDelete();
}

function deleteItem (index) {
    if(index !== "" && index !== undefined && index !== -1){
        newArrayList.splice(index, 1);
        renderListItem(newArrayList);
    }    
}

function multipleDelete(){
    newArrayList = newArrayList.filter(function (ad, indexId) {
        return removeItemList.every(fd => fd !== indexId);
    })
    renderListItem(newArrayList)
    setTimeout(function(){
        removeItemList = [];
        document.getElementById("multiple-delete").style.display = "none";
    }, 100);
}

function handleEdit(index){
    editValueText = newArrayList[index]
    renderListItem(newArrayList, index)
    removeItemList = [];
    renderMultipleDelete();
}

function handleUpdate(index){
    newArrayList[index] = editValueText;
    renderListItem(newArrayList);
    removeItemList = [];
    renderMultipleDelete();
}

function handleAddButton() {
    document.getElementById('textInput').value = '';
    if(textValue !== ""){
        newArrayList.push(textValue);
        renderListItem(newArrayList);
    }else{
        return null;
    }
    removeItemList = [];
    renderMultipleDelete();
}

