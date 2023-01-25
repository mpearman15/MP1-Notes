chrome.storage.sync.get(["notes"]).then((result) => {
  document.getElementById("noteText").value = result.notes;
});

document.getElementById("saveButton").onclick = function () {
  var notes = document.getElementById("noteText").value;
  console.log("saving!")
  chrome.storage.sync.set({"notes": notes}, function () {});
}
