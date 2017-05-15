(function() {
  //Open and close notes actions
  var buttonDelete = document.getElementsByClassName('btn-delete');
  var notes = document.getElementsByClassName('note-block');
  var close = document.getElementsByClassName('close');
  //Color pickekr
  var blueButton = document.getElementsByClassName('blue');
  var greenButton = document.getElementsByClassName('green');
  var defaultButton = document.getElementsByClassName('default');
  var buttonColor = document.getElementsByClassName('btn-color');
  //Menu animation
  var aside = document.getElementById('nav-side');
  var rowNotes = document.getElementById('notes-side');
  var navToggle = document.getElementById('navbar-toggle');


  navToggle.addEventListener('click', navEvent);

  //Add listener to button delete
  for (var i = 0; i < buttonDelete.length; i++) {
    buttonDelete[i].addEventListener('click', deleteNote);
  }

  for (var i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', openNote);
  }

  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', closeNote);
  }

  for (var i = 0; i < blueButton.length; i++) {
    blueButton[i].addEventListener('click', changeColorBlue);
  }
  for (var i = 0; i < defaultButton.length; i++) {
    defaultButton[i].addEventListener('click', changeColorDefault);
  }

  for (var i = 0; i < blueButton.length; i++) {
    greenButton[i].addEventListener('click', changeColorGreen);
  }

  for (var i = 0; i < buttonColor.length; i++) {
    buttonColor[i].addEventListener('click', activePallete);
  }

  function openNote() {
    this.classList.add('note-modal');
    this.style.display = 'block';
    this.childNodes[1].childNodes[1].style.display = 'block';
  }

  function closeNote(e) {
    e.stopPropagation();
    this.parentNode.parentNode.classList.remove('note-modal');
    this.style.display = 'none';
  }

  function deleteNote(e) {
    e.stopPropagation();
    this.parentNode.parentNode.parentNode.parentNode.remove();
  }

  function activePallete(e) {
    e.stopPropagation();
    var pallete = this.parentNode.parentNode.childNodes[9];
    if (pallete.classList.contains('row--color-active')) {
      pallete.classList.remove('row--color-active');
    } else {
      pallete.classList.add('row--color-active');
    }
  }

  function changeColorDefault(e) {
    e.stopPropagation();
    var parent = this.parentNode.parentNode;
    parent.classList.remove('blue-note');
    parent.classList.remove('green-note');
  }

  function changeColorBlue(e) {
    var parent = this.parentNode.parentNode;
    e.stopPropagation();
    if (parent.classList.contains("green-note")) {
      parent.classList.remove('green-note');
      parent.classList.add('blue-note');
    } else {
      parent.classList.add('blue-note');
    }
  }

  function changeColorGreen(e) {
    var parent = this.parentNode.parentNode;
    e.stopPropagation();
    if (parent.classList.contains("blue-note")) {
      parent.classList.remove('blue-note');
      parent.classList.add('green-note');
    } else {
      parent.classList.add('green-note');
    }
  }



  function navEvent() {
    if (aside.classList.contains('aside__active')) {
      aside.classList.remove('aside__active');
      rowNotes.classList.remove('row-notes__active');
      navToggle.classList.remove('toggle-nav_open')
    } else {
      aside.classList.add('aside__active');
      rowNotes.classList.add('row-notes__active');
      navToggle.classList.add('toggle-nav_open');
    }
  }
})();