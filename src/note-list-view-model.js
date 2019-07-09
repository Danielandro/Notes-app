(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  // convert list of notes into html string
  NoteListView.prototype.convertListToHTML = function() {  
    var notesToHtml;
    // loop over array of notes. Create array of html strings 
    if (this.noteList.allNotes().length === 0) {
      return "<ul><li>No notes found</li></ul>";
    } else {
      var notesToHtml = this.noteList.allNotes().map(function (note) {
        return `<li><div>${note.text}</div></li>`;
      });
    }
    

    // return html string, interpolate notes
    return (`<ul>${notesToHtml.join('')}</ul>`);   
  };

  exports.NoteListView = NoteListView;
}) (this);
