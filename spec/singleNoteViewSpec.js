(function() {
  // setup
  var NoteDouble = function (text) {
    this.text = text;
  };

  var note = new NoteDouble("Favourite drink: Whisky")

  function testSingleNoteViewCanBeInstantiated() {
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView);
  };  

  function testNoteInHtmlCovertsNote() {
    var singleNoteView = new SingleNoteView(note);
    var convertedNote = singleNoteView.noteInHtml();

    assert.isTrue(convertedNote === "<div>Favourite drink: Whisky</div>");
  }
  testSingleNoteViewCanBeInstantiated();
  testNoteInHtmlCovertsNote();
}) ()