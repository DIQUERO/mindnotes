var note = document.querySelector(".note");

note.onclick = function() {
    console.log(this.id);
}

articles = document.getElementsByTagName('article');
for (var i = 0; i < articles.length; i++) {
    articles[i].addEventListener('click',redirect);
}
function redirect(){
    alert(this.id);
}