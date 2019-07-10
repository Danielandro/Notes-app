(function(exports) {
  function NoteListView(noteList) {
    var _noteList = noteList;

    function convertListToHTML() {
      // loop over array of notes. Create array of html strings 
      if (_noNotes()) {
        return "<ul><li>No notes found</li></ul>";
      }
      else {              
        return "<ul>" + _listInHtml() + "</ul>";
      };
    }  

    // private functions
    function _noNotes() {
      return _noteList.notes().length === 0;
    }

    function _listInHtml() {
      return _noteList.notes().map(function (note) {
        return `<li><div>${note.text}</div></li>`;
      }).join('');
    }
    
    return {
      convertListToHTML: convertListToHTML
    }
  };

  exports.NoteListView = NoteListView;
}) (this);
