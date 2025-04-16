let myLeads = [];
const importBtn = document.getElementById("input-btn");
const importint = document.getElementById("input-el");
const listLeads = document.getElementById("list-leads");
let deleteBtn = document.getElementById("delete-btn");
let saveTabBtn = document.getElementById("savetab-btn");    


function rendering() {
    listLeads.innerHTML = ""; // Clear the list before rendering
    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li");
        listLeads.append(li);
        let a = document.createElement("a");
        a.href= myLeads[i];
        a.textContent = myLeads[i];
        a.target = "_blank"; // Open link in a new tab
        li.append(a);
    }
}

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        rendering();
    });
});

deleteBtn.addEventListener("click", function() {
    localStorage.clear(); // Clear local storage
    myLeads = []; // Clear the array
    listLeads.innerHTML = ""; // Clear the displayed list
})

importBtn.addEventListener("click", function() {
    myLeads.push(importint.value);
    importint.value = ""; // Clear the input field after saving
    rendering();
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Save to local storage
})

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    rendering()
}

function rendering() {
    listLeads.innerHTML = ""; // Clear the list before rendering
    for (let i = 0; i < myLeads.length; i++) {
        let li = document.createElement("li");
        listLeads.append(li);
        let a = document.createElement("a");
        a.href= myLeads[i];
        a.textContent = myLeads[i];
        a.target = "_blank"; // Open link in a new tab
        li.append(a);
    }
}


