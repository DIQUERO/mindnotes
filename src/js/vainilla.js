var notes = document.getElementsByClassName('note');
var buttonDelete = document.getElementsByClassName('btn-delete');


//Add listener to button delete
for (var i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener('click', deleteNote);
}

function deleteNote(e) {
  e.stopPropagation();
  this.parentNode.parentNode.parentNode.remove();
}