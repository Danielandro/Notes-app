(function(exports) {
  // define NoteList constructor
  function NoteList() {
    this.list = [];
  };

  // get array of note
  NoteList.prototype.allNotes = function() {
    return this.list;
  };

  // create note, add to note list
  NoteList.prototype.createNote = function(text) {
    this.list.push(new Note(text));
  };

  exports.NoteList = NoteList;

}) (this);
