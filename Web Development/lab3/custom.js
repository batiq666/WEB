// $(document).ready(function(){

// })
var input = document.getElementById('inputField');
var toDoList = document.getElementById('toDOList');
var addButton = document.getElementById('addButton');


addButton.addEventListener("click", () => {
	if (input.value == "") {

		 alert("Add title to new task");

	} else {

		var item = toDoList.insertRow(0);
		item.classList.add('undone');

		var checkboxTD = item.insertCell(0);
		checkboxTD.classList.add('check');
		let checkInput = document.createElement("input");
		checkInput.setAttribute('type', 'checkbox');
		checkInput.addEventListener("change", markAsDone);
		checkInput.classList.add('checkbox');
		checkboxTD.appendChild(checkInput);

		var taskTD = item.insertCell(1);
		taskTD.classList.add('task');
		let taskName = document.createElement("p");
		taskName.innerHTML = input.value;
		taskTD.appendChild(taskName);

		var deleteTD = item.insertCell(2);
		deleteTD.classList.add('delete');
		let deleteButton = document.createElement("button");
		// deleteButton.id = "delete";
		deleteButton.innerHTML = 'Delete';
		deleteButton.addEventListener("click", deleteTask);
		deleteButton.classList.add('deleteButton');
		deleteTD.appendChild(deleteButton);

		input.value = ""
	}
})


var checkboxArray = document.querySelectorAll('.checkbox');
for (var i = 0; i < checkboxArray.length; i++) {
  	checkboxArray[i].addEventListener("change", markAsDone);
}
function markAsDone () {
  var isChecked = this.checked;
  console.log(this.parentElement.parentElement.rowIndex+1)
  if (isChecked) { 
    this.parentElement.parentElement.classList.remove('undone');
    this.parentElement.parentElement.classList.add('done');
  } else { 
  	this.parentElement.parentElement.classList.remove('done');
    this.parentElement.parentElement.classList.add('undone');
  }
}



var deleteArray = document.querySelectorAll('.deleteButton');
for (var i = 0; i < deleteArray.length; i++) {
  		deleteArray[i].addEventListener("click", deleteTask);
}
function deleteTask () {
	var i = this.parentElement.parentElement.rowIndex;
	toDoList.deleteRow(i);
}



var deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener("click", () => { toDoList.innerHTML = ""; });
