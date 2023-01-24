chrome.storage.sync.get("noteData", function(items) {
  // if (!items.noteData) {
  //   let notes = "";
  // }

  // console.log(items.noteData);
  console.log(items);
  document.getElementById("noteText").value = items.noteData;

});

// document.getElementById('save').onclick = function () {
//   var notes = document.getElementById("saveButton");

// }
