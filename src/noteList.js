(function(exports) {
  // define NoteList constructor
  function NoteList() {
    this._notes = [];
    this._counter = 0;
  };

  // get array of note
  NoteList.prototype.notes = function() {
    return this._notes;
  };

  // create note, add to notes
  NoteList.prototype.addNote = function(text, note = Note) {
    var noteToAdd = this._giveNoteID(new note(text));
    this.notes().push(noteToAdd);
    return this._lastElement(this.notes());
  };

  // returns last element of array
  NoteList.prototype._lastElement = function(arr) {
    return arr[arr.length - 1];
  };

  NoteList.prototype._giveNoteID = function(note) {
    note.id = this._counter;
    this._counter++;
    return note;
  }

  exports.NoteList = NoteList;
}) (this);
