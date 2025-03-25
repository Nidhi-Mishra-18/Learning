function fetchEmployees() {
    fetch("http://localhost:8080/api/employees")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById("employee-table-body");
            tableBody.innerHTML = "";
            data.forEach(employee => {
                let row = `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.employeeId}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.department}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching employees:", error));
}


function addEmployee() {
    // Fetch values from the form
    const employee = {
        employeeId: document.getElementById("employeeId").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: parseFloat(document.getElementById("salary").value) // Convert salary to number
    };

    console.log("Sending Employee Data:", employee); // Debugging log

    fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(data => {
        alert("Employee added successfully!");
        window.location.href = "/view-employees";
    })
    .catch(error => {
        console.error("Error adding employee:", error);
        alert("Failed to add employee. Check console for details.");
    });
}

