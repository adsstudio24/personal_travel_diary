function saveEntry() {
    const destination = document.getElementById("destination").value;
    const notes = document.getElementById("notes").value;

    if (!destination || !notes) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const entry = { destination, notes, date: new Date().toLocaleString() };
    let entries = JSON.parse(localStorage.getItem("travelEntries")) || [];
    entries.push(entry);
    localStorage.setItem("travelEntries", JSON.stringify(entries));

    displayEntries();
}

function displayEntries() {
    const entries = JSON.parse(localStorage.getItem("travelEntries")) || [];
    const list = document.getElementById("entries");
    list.innerHTML = "";
    
    entries.forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${entry.destination}</b> (${entry.date}): ${entry.notes}`;
        list.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayEntries);
