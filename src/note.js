(function(exports) {

  // define Note constructor
  function Note(text) {
    this.text = text;
  };

  // get text of note
  Note.prototype.getText = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);
