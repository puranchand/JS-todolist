var textVaule = "";
var itemList = [];
var newArrayList = [];
var item = "";
var removeItemList = [];

function myOnChange(val) {
    textVaule = val;
}

function selectItem (index) {
    if(removeItemList.includes(index)){
        removeItemList.splice(index, 1);
    }else{
        removeItemList.push(index);
    }

    // if (selectedIndex > -1) {
    //     removeItemList.splice(selectedIndex, 1);
    // }else{
    //     removeItemList.push(index);
    // }

    console.log(removeItemList, "removeItemList")
}

function deleteItem (index) {
    if(index !== "" && index !== undefined && index !== -1){
        newArrayList.splice(index, 1);
        var text = "";
        
        for (i = 0; i < newArrayList.length; i++) {
            text += `<div><button class="check" onclick="selectItem(${i})">check</button>${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div>` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }    
}

function multipleDelete(){
    newArrayList = newArrayList.filter((ad, indexId) => removeItemList.every(fd => fd !== indexId));
    var text = "";
    for (i = 0; i < newArrayList.length; i++) {
        text += `<div><button class="check" onclick="selectItem(${i})">check</button>${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div>` + "<br>";
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
            text += `<div><button class="check" onclick="selectItem(${i})">check</button> ${newArrayList[i]} <span class="delete-icon" onclick="deleteItem(${i})">X</span></div> ` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }else{
        return null
    }
}

