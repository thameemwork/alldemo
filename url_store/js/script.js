import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://java-url-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const urlListInDB = ref(database, "url");

// Selecting elements
const idEl = document.querySelector("#id");
const titleEl = document.querySelector("#title");
const contantEl = document.querySelector("#contant");
const frmEl = document.querySelector("#frm");
const tblEl = document.querySelector("#tblbody");
const searchEl = document.querySelector("#search");
// Event listener for form submission
frmEl.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!titleEl.value.trim() || !contantEl.value.trim()) {
        alert("Please fill all fields");
        return;
    }
    
    const currentDateTime = new Date().toLocaleString();
    const newUrl = {
        title: titleEl.value.trim(),
        contant: contantEl.value.trim(),
        timestamp: currentDateTime 
    };

    if (idEl.value) {
        // Update existing record
        const updateRef = ref(database, `url/${idEl.value}`);
        set(updateRef, newUrl);
        idEl.value = "";  // Clear the hidden ID field after update
    } else {
        // Add new record
        push(urlListInDB, newUrl);
    }

    clearElements();
});


// Clear input fields after submission
function clearElements() {
    titleEl.value = "";
    contantEl.value = "";
}

// Read data from Firebase and display in table
onValue(urlListInDB, function (datasnap) {
    if (datasnap.exists()) {
        let urlArray = Object.entries(datasnap.val());
        console.log(urlArray);

        tblEl.innerHTML = ""; // Clear table before adding new data

        for (let i = 0; i < urlArray.length; i++) { 
            let currentUrl = urlArray[i]; 
            let currentUrlID = currentUrl[0]; 
            let currentUrlValue = currentUrl[1];

            // Replace newline characters with <br> for proper display
            let formattedContent = currentUrlValue.contant.replace(/\n/g, "<br>");

            tblEl.innerHTML += `
                <div>
                    <span>${i + 1}</span>
                    <span>${currentUrlValue.title}</span>
                    <span>${formattedContent}</span> <!-- Use formatted content -->
                    <span>${currentUrlValue.timestamp || "No Time Available"}</span>
                    <button class="btn-edit" data-id="${currentUrlID}">Edit</button>
                    <button class="btn-delete" data-id="${currentUrlID}">Delete</button>
                </div>
            `;
        }
    } else {
        tblEl.innerHTML = "<tr><td colspan='3'>No Record Found!</td></tr>";
    }
});




document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-edit")) { 
        const id = e.target.dataset.id;  // Get ID
        idEl.value = id;  // Store ID for updating

        // Get parent div containing record details
        const parentDiv = e.target.closest("div"); 
        const tdElements = parentDiv.querySelectorAll("span");

        // Convert <br> back to \n for textarea
        titleEl.value = tdElements[1].textContent;
        contantEl.value = tdElements[2].innerHTML.replace(/<br>/g, "\n"); // Convert <br> to \n

    } else if (e.target.classList.contains("btn-delete")) {
        if (confirm("Are you sure to delete?")) {
            const id = e.target.dataset.id;
            let data = ref(database, `url/${id}`); 
            remove(data);
        }
    }
});

// Global variable to store Firebase data
let urlArray = [];

// Read data from Firebase and store it in a global variable
onValue(urlListInDB, function (datasnap) {
    if (datasnap.exists()) {
        urlArray = Object.entries(datasnap.val());
        displayRecords(urlArray);
    } else {
        tblEl.innerHTML = "<tr><td colspan='4'>No Record Found!</td></tr>";
    }
});

// Search functionality (moved outside onValue)
searchEl.addEventListener("input", function () {
    let searchTerm = searchEl.value.toLowerCase();
    let filteredData = urlArray.filter(item => 
        item[1].title.toLowerCase().includes(searchTerm)
    );
    displayRecords(filteredData);
});

// Function to display records
function displayRecords(data) {
    tblEl.innerHTML = ""; // Clear table before adding new data

    if (data.length === 0) {
        tblEl.innerHTML = "<tr><td colspan='4'>No Record Found!</td></tr>";
        return;
    }

    for (let i = 0; i < data.length; i++) { 
        let currentUrl = data[i]; 
        let currentUrlID = currentUrl[0]; 
        let currentUrlValue = currentUrl[1];

        // Replace newline characters with <br> for proper display
        let formattedContent = currentUrlValue.contant.replace(/\n/g, "<br>");

        tblEl.innerHTML += `
            <div>
                <span>${i + 1}</span>
                <span>${currentUrlValue.title}</span>
                <span>${formattedContent}</span>
                <span>${currentUrlValue.timestamp || "No Time Available"}</span>
                <button class="btn-edit" data-id="${currentUrlID}">Edit</button>
                <button class="btn-delete" data-id="${currentUrlID}">Delete</button>
            </div>
        `;
    }
}



