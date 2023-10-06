var ListOfActivities = [];
var input = document.getElementById("input");
var toDoList = document.getElementById("todolist");
var btn = document.getElementById("button");
btn.onclick = click;

function click ( ) {
    ListOfActivities.push(input.values);
    console.log(ListOfActivities)
    input.values="";
    showList();
}

function showList( ) {
    toDoList.innerHTML= " "
    ListOfActivities.forEach(function (n, i) {
        toDoList.innerHTML += 
        "<li>" +
        n +
        "<a onclick='edititem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick ='delete(" +
        i + 
        ")'>&times |</a></li>" 

    });
}
function deleteItem(i) {
    ListOfActivities.splice(i , 1);
    showList();
}
function edititem(i) {
    var newText = prompt ("please Enter your new Value");
    ListOfActivities.splice (i , 1, newText);
    showList();
}