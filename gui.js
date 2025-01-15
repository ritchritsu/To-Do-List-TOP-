// gui.js

document.addEventListener("DOMContentLoaded", (event) => {
    addProjectGUI();
    updateProjectSelect();
});

function addProjectGUI() {
    let projectForm = document.getElementById("project-form").addEventListener("submit", (event) => { 
        event.preventDefault(); // prevent page reload on form submit

        const projectName = document.getElementById("project-name").value; // get text value of projectName

        if (projectName) { // if name is valid
            projectManagerInstance.addProject(projectName);
            updateProjectSelect(); // update the project select dropdown
            document.getElementById("project-name").value = ''; // reset the input field
        } else {
            alert("Please enter a project name");
        }
    });
}

function updateProjectSelect() {
    const projectSelect = document.getElementById("project-select"); // get project-select element
    
    // Clear existing options
    projectSelect.innerHTML = '';

    // Loop through all projects and add them to the dropdown
    projectManagerInstance.projects.forEach(project => { 
        const option = document.createElement("option"); // create a new option element
        option.value = project.projectName; // set the value of the option to the project name
        option.textContent = project.projectName; // set the text of the option to the project name
        projectSelect.appendChild(option); // append it to project-select
    });
}
