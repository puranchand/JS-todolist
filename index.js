var textVaule = "";
var itemList = [];
var newArrayList = []
var item = "";

function myOnChange(val) {
    textVaule = val;
}

function deleteItem (index) {
    if(index !== "" && index !== undefined && index !== -1){
        newArrayList.splice(index, 1);
        var text = "";
        
        for (i = 0; i < newArrayList.length; i++) {
            text += `<div onclick="deleteItem(${i})"> ${newArrayList[i]} </div> ` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }    
}

function handleAddButton() {
    document.getElementById('textInput').value = '';

    if(textVaule !== ""){
        itemList.push(textVaule);
        newArrayList = itemList;
       
        var text = "";
        for (i = 0; i < newArrayList.length; i++) {
            textVaule = "";
            text += `<div onclick="deleteItem(${i})"> ${newArrayList[i]} </div> ` + "<br>";
        }
        document.getElementById("myText").innerHTML = text;
    }else{
        return null
    }
}
