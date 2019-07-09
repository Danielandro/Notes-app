(function(exports) {
  // define note & noteList mocks
  var NoteMock = function (text) {
    this.text = text;
  };

  var noteListMock = {
    list: [],
    createNote: function (text) {
      var noteMock = new NoteMock(text);
      this.list.push(noteMock);
    },
    allNotes: function () {
      return this.list;
    }
  }; 

  function testConvertListToHTML() {
    
    // add two notes to note list
    noteListMock.createNote("Favourite food: pesto");
    noteListMock.createNote("Favourite drink: whisky");

    // create note list view
    var noteListView = new NoteListView(noteListMock);
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: whisky</div></li></ul>"
    
    // check if function converts list to string
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  function testListModelHasNoNotes() {
    
  }

  testConvertListToHTML();
}) (this);
