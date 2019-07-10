(function(exports) {

  // define Note constructor
  function Note(text) {
    this._text = text;
  };

  // get text of note
  Note.prototype.getText = function() {
    return this._text;
  }

  exports.Note = Note;
})(this);
