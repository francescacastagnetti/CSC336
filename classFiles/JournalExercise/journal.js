
var clearEntryForm = function(){
      document.getElementById("entryPhoto").value = "";
      document.getElementById("entryContent").value = "";
      document.getElementById("entryContent").value = "";

}

function clearJournalEntries(){
      document.getElementById("entries").innerHTML = "";
}

function addJournalEntry(){
      let date = new Date();
      let dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
      let title = document.getElementById("title").value;
      let newEntryPhoto = document.getElementById("entryPhoto").value;
      let newEntryContent = document.getElementById("entryContent").value;
      let journalEntries = document.getElementById("entries").innerHTML;

      if(newEntryContent == ''){
            alert("Error: cannot add an empty journal entry! \n\nPlease enter a message.");
            return;
      }

      journalEntries = `<div class="entry"><h2><span>${dateString}:</span> ${title}</h2> <div><img src="${newEntryPhoto}"><p class="pStyle">${newEntryContent}</p></div></div>` + journalEntries;
      document.getElementById("entries").innerHTML = journalEntries;

}




