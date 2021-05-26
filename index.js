var textVaule = "";
var itemList = [];
var newArrayList = [];
var item = "";
var removeItemList = [];

function myOnChange(val) {
    textVaule = val;
}

var inputFiled = document.getElementById("textInput");
inputFiled.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add-btn").click();
  }
});

function selectItem (index) {
    if(removeItemList.includes(index)){
        removeItemList = removeItemList.filter(function (item) {
            return item != index
        })
    }else{
        removeItemList.push(index);
    }
}

function deleteItem (index) {
    if(index !== "" && index !== undefined && index !== -1){
        newArrayList.splice(index, 1);
        var text = "";
        
        for (i = 0; i < newArrayList.length; i++) {
            text += `<div><input type="checkbox" class="check" onclick="selectItem(${i})"></input> ${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div>` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }    
}

function multipleDelete(){
    newArrayList = newArrayList.filter(function (ad, indexId) {
        return removeItemList.every(fd => fd !== indexId);
    })
    var text = "";
    for (i = 0; i < newArrayList.length; i++) {
        text += `<div><input type="checkbox" class="check" onclick="selectItem(${i})"></input> ${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div>` + "<br>";
    }

    document.getElementById("myText").innerHTML = text;
    setTimeout(function(){ 
        removeItemList = []
     }, 1000);
}

function handleAddButton() {
    document.getElementById('textInput').value = '';
    if(textVaule !== ""){
        newArrayList.push(textVaule)
        var text = "";
        for (i = 0; i < newArrayList.length; i++) {
            textVaule = "";
            text += `<div><input type="checkbox" class="check" onclick="selectItem(${i})"></input> ${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div> ` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }else{
        return null
    }
}

