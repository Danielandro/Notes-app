(function(exports) {
  function testConvertListHTML() {
    var noteList = new NoteList();

    noteList.createNote("Favourite food: pesto")
    noteList.createNote("Favourite drink: whisky")

    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.convertListHTML() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: whisky</div></li></ul>");
  }

  testConvertListHTML();

}) (this);