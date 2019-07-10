// (function(exports) {
//   function NoteListView(noteList) {
//     var _noteList = noteList;

//     function convertListToHTML() {
//       var notesToHtml;
//       // loop over array of notes. Create array of html strings 
//       if (_noteList.allNotes().length === 0) {
//         return "<ul><li>No notes found</li></ul>";
//       } else {
//         var notesToHtml = _noteList.allNotes().map(function (note) {
//           return `<li><div>${note.text}</div></li>`;
//         });
//         // return html string, interpolate notes
//         return (`<ul>${notesToHtml.join('')}</ul>`);
//       };
//     }  
    
//     return {
//       convertListToHTML: convertListToHTML
//     }
//   };

//   exports.NoteListView = NoteListView;
// }) (this);
