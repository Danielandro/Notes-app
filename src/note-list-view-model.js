function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }
  NoteListView.prototype.convertListHTML = function() {
    
    var htmlString = "<ul>";

    this.noteList.forEach(function(note) {
      var noteInHtml = `<li><div>${note.text}</div></li>`
      htmlString += noteInHtml;
    });

    htmlString += "</ul>"

    return htmlString;
  }
}