(function(exports) {

  function Note(thing) {
    this.text = thing;
  };
  Note.prototype.gettext = function() {
    return this.text
  }

  exports.Note = Note;
})(this);

