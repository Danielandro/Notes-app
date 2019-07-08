(function(exports) {
  function testConvertListToHTML() {
    // create note list
    var noteList = new NoteList();

    // add two notes to note list
    noteList.createNote("Favourite food: pesto");
    noteList.createNote("Favourite drink: whisky");

    // create note list view
    var noteListView = new NoteListView(noteList);
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: whisky</div></li></ul>"
    
    // check if function converts list to string
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  testConvertListToHTML();

}) (this);
