(function(exports) {

  // define Note constructor
  function Note(thing) {
    this.text = thing;
  };

  // get text of note
  Note.prototype.getText = function() {
    return this.text
  }

  exports.Note = Note;
})(this);

