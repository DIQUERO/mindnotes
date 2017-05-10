var buttonDelete = document.getElementsByClassName('btn-delete');
var notes = document.getElementsByClassName('note-block');
var close = document.getElementsByClassName('close');

//Add listener to button delete
for (var i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener('click', deleteNote);
}

for (var i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click',openNote);
}

for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click',closeNote);
}

function openNote(){
    this.classList.add('note-modal');
    this.style.display = 'block';
    this.childNodes[2].style.display = 'block';
}

function closeNote(e){
  e.stopPropagation();
  this.parentNode.parentNode.classList.remove('note-modal');
  this.style.display = 'none';
}

function deleteNote(e) {
  e.stopPropagation();
  this.parentNode.parentNode.parentNode.remove();
}
