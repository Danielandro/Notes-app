(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  // convert list of notes into html string
  NoteListView.prototype.convertListToHTML = function() {  
    // loop over array of notes. Create array of html strings 
    var notesToHtml = this.noteList.allNotes().map(function(note) {
      return `<li><div>${note.text}</div></li>`;  
    });

    // return html string, interpolate notes
    return (`<ul>${notesToHtml.join('')}</ul>`);   
  };

  exports.NoteListView = NoteListView;
}) (this);
