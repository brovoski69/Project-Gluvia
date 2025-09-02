document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("history-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const viewButtons = document.querySelectorAll(".view-history-btn");

    const dosageData = {
        "asharma.1966@gmail.com": `
            <table>
                <tr><th>Date</th><th>Meal</th><th>Dose</th></tr>
                <tr><td>Today</td><td>Breakfast</td><td>10 units</td></tr>
                <tr><td>Today</td><td>Lunch</td><td>8 units</td></tr>
                <tr><td>Yesterday</td><td>Dinner</td><td>12 units</td></tr>
            </table>
        `,
        "smehta.1997@gmail.com": `
            <table>
                <tr><th>Date</th><th>Meal</th><th>Dose</th></tr>
                <tr><td>Today</td><td>Breakfast</td><td>11 units</td></tr>
                <tr><td>Yesterday</td><td>Dinner</td><td>14 units</td></tr>
                <tr><td>Yesterday</td><td>Lunch</td><td>9 units</td></tr>
            </table>
        `
    };

    viewButtons.forEach(button => {
        button.addEventListener("click", function() {
            const row = this.closest("tr");
            
            // --- UPDATED: Extract all data, including from data-* attributes ---
            const name = row.cells[0].textContent;
            const contact = row.cells[1].textContent;
            const email = row.cells[2].textContent;
            const age = row.dataset.age; // Reads from data-age
            const weight = row.dataset.weight; // Reads from data-weight
            const height = row.dataset.height; // Reads from data-height

            // --- UPDATED: Populate all modal fields ---
            document.getElementById("modal-patient-name").textContent = name;
            document.getElementById("modal-patient-contact").textContent = contact;
            document.getElementById("modal-patient-email").textContent = email;
            document.getElementById("modal-patient-age").textContent = age;
            document.getElementById("modal-patient-weight").textContent = weight;
            document.getElementById("modal-patient-height").textContent = height;

            const historyContainer = document.getElementById("modal-dosage-history");
            historyContainer.innerHTML = dosageData[email] || "<p>No dosage history found.</p>";
            
            modal.style.display = "flex";
        });
    });

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});