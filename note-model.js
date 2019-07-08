(function(exports) {

  function Note(thing) {
    this.text = thing;
  };
  Note.prototype.getText = function() {
    return this.text
  }

  exports.Note = Note;
})(this);

