(function(exports) {
  function testConvertListToHTML() {
    var noteList = new NoteList();

    noteList.createNote("Favourite food: pesto");
    noteList.createNote("Favourite drink: whisky");
    
    var noteListView = new NoteListView(noteList);
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: whisky</div></li></ul>"
    
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  testConvertListToHTML();

}) (this);
