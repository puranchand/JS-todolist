var textVaule = "";
var itemList = [];
var newArrayList = []
var item = "";



function myOnChange(val) {
    textVaule = val;
}

function handleAddButton() {
    itemList.push(textVaule);
    newArrayList = itemList;
    document.getElementById('textInput').value = '';
    var text = "";
    for (i = 0; i < newArrayList.length; i++) {
        text += newArrayList[i] + "<br>";
    }
    document.getElementById("myText").innerHTML = text;
}
