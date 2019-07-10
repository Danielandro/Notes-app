(function(exports) {
  // define NoteList constructor
  function NoteList() {
    this._notes = [];
  };

  // get array of note
  NoteList.prototype.notes = function() {
    return this._notes;
  };

  // create note, add to notes
  NoteList.prototype.addNote = function(text, note = Note) {
    this.notes().push(new note(text));
    return this._lastElement(this.notes());
  };

  // returns last element of array
  NoteList.prototype._lastElement = function(arr) {
    return arr[arr.length - 1];
  };

  exports.NoteList = NoteList;
}) (this);
