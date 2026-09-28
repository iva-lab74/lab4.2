// Task 1: Array Manipulation Basics~~~~~~

//Create an empty array called shoppingList.

let shoppingList = [];
//Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.

function addItem(item) {
    shoppingList.push(item)

}

//Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem(item) {
    shoppingList.pop

}
//Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList() {
    for (let item of shoppingList) {
        console.log(shoppingList)
    }
}

//Modify the addItem function to only add the item if it is not already in the shoppingList array.

//Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive)
function filterItems(item) {
    for (let i = 0; i < shoppingList.List; i++) {
        if (shoppingList[i] === "") {
            alert(item)
            console.log("item is present")
        } else {
            console.log("Item is not present.");
        };
    }

}

addItem();
filterItems();
removeLastItems();
displayList();

//Task 3

//Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
//Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
addItemButton.addEventListener("click", function () {
    let itemText = itemInput.value;

    if (itemText === "") {
        alert("Please enter a task!");
        return;
    }

    shoppingList.push(itemText);

    let li = document.createElement("li");
    li.textContent = itemText;
    taskList.appendChild(li);

    itemInput.value = "";

});
//Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.
removeItemButton.addEventListener("click", function () {
    if (shoppingList.length === 0) {
        alert("Nothing to remove");
        return;
    }

    shoppingList.pop();
    taskList.lastElementChild.remove();
});