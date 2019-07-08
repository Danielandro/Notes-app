(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.convertListToHTML = function() {    
    var notesToHtml = this.noteList.allNotes().map(function(note) {
      return `<li><div>${note.text}</div></li>`;  
    });
    return (`<ul>${notesToHtml.join('')}</ul>`);   
  };

  exports.NoteListView = NoteListView;
}) (this);
