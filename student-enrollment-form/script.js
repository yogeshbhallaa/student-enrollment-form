// Function to display error messages
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Function to handle form submission
function addStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const image = document.getElementById("image").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = [];
    document.querySelectorAll('.form-check-input:checked').forEach(checkbox => {
        skills.push(checkbox.value);
    });

    let valid = true;

    // Name validation
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        printError("nameErr", "Please enter a valid name.");
        valid = false;
    } else {
        printError("nameErr", "");
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        printError("emailErr", "Please enter a valid email.");
        valid = false;
    } else {
        printError("emailErr", "");
    }

    // Website validation
    const websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-._~:?#\[\]@!$&'()*+,;=]*)?$/;
    if (!websiteRegex.test(website)) {
        printError("websiteErr", "Please enter a valid website.");
        valid = false;
    } else {
        printError("websiteErr", "");
    }

    // Image URL validation
    const imageRegex = /^(https?:\/\/[^\s]+)$/;
    if (!imageRegex.test(image)) {
        printError("imageErr", "Please enter a valid image URL.");
        valid = false;
    } else {
        printError("imageErr", "");
    }

    if (!valid) {
        return false;
    }

    // Insert student into table
    const table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    let row = table.insertRow(0);
    row.innerHTML = `
        <td><strong>${name}</strong><br>${email}<br><a href="${website}" target="_blank">${website}</a><br>${gender}<br>${skills.join(", ")}</td>
        <td><img src="${image}" alt="Student Image" class="img-fluid"></td>
    `;

    // Reset form fields
    document.getElementById("studentForm").reset();
}
