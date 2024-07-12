document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation for username and password
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('gradeContainer').style.display = 'block';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// JavaScript for grade calculation
function show_result() {
    let java = parseFloat(document.querySelector("#java").value);
    let cloud = parseFloat(document.querySelector("#cloud").value);
    let software = parseFloat(document.querySelector("#software").value);
    let database = parseFloat(document.querySelector("#database").value);
    let dstructure = parseFloat(document.querySelector("#dstructure").value);

    // Validate if the inputs are within the valid range (0-100)
    if (
        java < 0 || java > 100 || 
        cloud < 0 || cloud > 100 || 
        software < 0 || software > 100 || 
        database < 0 || database > 100 || 
        dstructure < 0 || dstructure > 100
    ) {
        alert("Please enter the marks within the given range (0-100)");
        return;
    }

    // Calculate total and percentage
    let total = java + cloud + software + database + dstructure;
    let percentage = (total * 100) / 500;

    // Check if any subject is below 40
    if (java < 40 || cloud < 40 || software < 40 || database < 40 || dstructure < 40) {
        alert("You are Fail!!!");
        document.querySelector(".gra").innerHTML = "Fail";
        document.querySelector(".result h2").innerHTML = "You are Fail!!";
        return;
    }
   

    // Determine grade based on percentage
    if (percentage >= 90) {
        document.querySelector(".gra").innerHTML = "A+";
    } else if (percentage >= 80) {
        document.querySelector(".gra").innerHTML = "A";
    } else if (percentage >= 70) {
        document.querySelector(".gra").innerHTML = "B+";
    } else if (percentage >= 60) {
        document.querySelector(".gra").innerHTML = "B";
    } else if (percentage >= 50) {
        document.querySelector(".gra").innerHTML = "C+";
    } else if (percentage >= 40) {
        document.querySelector(".gra").innerHTML = "C";
    } else {
        document.querySelector(".gra").innerHTML = "Fail";
    }

    // Display total and percentage
    document.querySelector(".to").innerHTML = total;
    document.querySelector(".per").innerHTML = percentage;

    // Final result
    if (percentage >= 40) {
        document.querySelector(".result h2").innerHTML = "You are Pass!!!";
    } else {
        document.querySelector(".result h2").innerHTML = "You are Fail!!";
    }
}