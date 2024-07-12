function checkPassFail() {
    const passMark = 40; // Pass mark threshold
    const subjects = [
        parseInt(document.getElementById("java").value),
        parseInt(document.getElementById("cloud").value),
        parseInt(document.getElementById("software").value),
        parseInt(document.getElementById("database").value),
        parseInt(document.getElementById("datastructure").value)
    ];

    const result = document.getElementById("result");
    const invalidInput = subjects.some(mark => isNaN(mark));

    if (invalidInput) {
        result.textContent = "Please enter valid numbers for all subjects.";
    } else if (subjects.some(mark => mark < passMark)) {
        result.textContent = "Fail";
    } else {
        result.textContent = "Pass";
    }}