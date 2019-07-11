(function(exports) {
  function SingleNoteView(note) {
    var note = note;
    var noteInHtml = function() {
      return "<div>" + note.text + "</div>"
    }
    return {
      noteInHtml: noteInHtml
    };
  }
  exports.SingleNoteView = SingleNoteView;
}) (this)
