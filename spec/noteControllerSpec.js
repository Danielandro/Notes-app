// (function(exports) {

//   var NoteDouble = function (text) {
//     this.text = text;
//   };
  
//   var noteListDouble = new NoteList();

//   // noteListDouble.createNote = function() {
//   //   return NoteDouble("Favourite food: pesto");
//   // }
//   noteListDouble.list = ["Favourite food: pesto"];

//   var noteListViewDouble = function() {};

//   function testNoteControllerCanBeInstantiated() {
//     var noteController = new NoteController(noteListDouble);
//     assert.isTrue(noteController);
//   };

//   function testgetHTMLToPage() {
//     var noteController = new NoteController(noteListDouble, noteListViewDouble);

//     noteListView.convertToHTML = function() {
//       return "<ul><li><div>Favourite food: pesto</div></li></ul>";
//     }

//     var element = document.createElement("h1");
//     noteController.getHTMLToPage(element);
    
//     assert.isTrue(element.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>");

//   };

//   testNoteControllerCanBeInstantiated();
//   testgetHTMLToPage();
// }) ()