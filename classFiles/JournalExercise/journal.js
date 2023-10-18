// window.onload=function(){      
//       document.getElementById("journal-form").addEventListener("submit", function (event) {
            
//             event.preventDefault(); // Prevent the default form submission behavior

//             // Get input values
//             var title = document.getElementById("entry-title").value;
//             var text = document.getElementById("entry-text").value;
//             var imageUrl = document.getElementById("entry-image-url").value;

//             // Create a new entry element and display it
//             var entry = document.createElement("div");
//             entry.innerHTML = "<h2>" + title + "</h2><p>" + text + "</p>";

//             // If an image URL is provided, display the image
//             if (imageUrl) {
//                 entry.innerHTML += "<img src='" + imageUrl + "' alt='" + title + "'>";
//             }

//             // Append the entry to the journal-entries section
//             document.getElementById("journal-entries").appendChild(entry);

//             // Clear the form fields for the next entry
//             document.getElementById("entry-title").value = "";
//             document.getElementById("entry-text").value = "";
//             document.getElementById("entry-image-url").value = "";
//       });
// }


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

      journalEntries = "\n <h2><span>${dateString}:</span> ${title}</h2> <div class='entireJournal'><img src='${newEntryPhoto}'>${newEntryContent}</div>";

}




// String.prototype.isEmpty = function(){
//       return (this.length === 0 || !this.trim());
// };

// var guestMessages = {
//       msgs: [],

//       getMessages: function(msg){
//           this.msgs.push("User: " + value + "<br />");

//       },

//       printMessages: function(){
//           guestMessages.getMessages();
//           var showEntry = document.getElementById("first-entry").innerHTML = this.msgs;

//       }
// };

// var getEntry = function(){
//       value = document.getElementById("content").value;
//       return value;
// };


// var getURL = function() {
//       var imageUrl = document.getElementById("URL").value;
//       if (imageUrl) {
//             entry.innerHTML += "<img src='" + imageUrl + "' alt='" + title + "'>";
//       }
//       return imageUrl;
// }


// var clearDiv = function(){
//     document.getElementById("content").value = "";
// }


// var isEmpty = function(entry){
//       entry = getEntry();
//       // imgEntry = getURL();
//       var output = document.getElementById("content").value;
//       // var IMGoutput = document.getElementById("URL").value;
//       if ( output == '' ){
//                 alert("Enter a message");
//       }
//        else {
//         guestMessages.printMessages();
//       }
// }


// addAnotherJournal = function() {
//       var ul = document.getElementById("list");
//       var li = document.createElement("li");
//       var children = ul.children.length + 1
//       li.setAttribute("id", "element"+children)
//       li.appendChild(document.createTextNode("Element "+children));
//       ul.appendChild(li)
//   }
  

// updateEntry();

