document.getElementById("degree-button").click();

function getDegrees() {
    // This function runs when button is clicked and returns a table of degrees found in resume_data.json

    // Set selected button to be disable, enable all other buttons
    document.getElementById("degree-button").disabled = true;
    document.getElementById("work-button").disabled = false;
    document.getElementById("leadership-button").disabled = false;


    //Fetching the json data as a promise, checking response, and processing
    fetch("data/resume_data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => processData(data))

        .catch(err => {
            console.error("error msg: ", err);
        })


    //Processing the json data such that it creates rows in a table. 
    const processData = function (data) {

        console.log(data);

        let table = document.getElementById("resume_table");

        while (table.firstChild) {
            table.firstChild.remove()
        }

        let headerRow = table.createTHead().insertRow(0);
        headerRow.setAttribute("id", "header");

        headerRow.insertCell(0).innerHTML = "University"
        headerRow.insertCell(1).innerHTML = "Degree Program"
        headerRow.insertCell(2).innerHTML = "Type"
        headerRow.insertCell(3).innerHTML = "Year"

        let length = data.my_college_degrees.length;

        let tbody = table.createTBody();

        for (let i = 0; i < length; i++) {
            let row = tbody.insertRow(-1);
            row.insertCell(0).innerHTML = data.my_college_degrees[i].degree.School;
            row.insertCell(1).innerHTML = data.my_college_degrees[i].degree.Program;
            row.insertCell(2).innerHTML = data.my_college_degrees[i].degree.Type;
            row.insertCell(3).innerHTML = data.my_college_degrees[i].degree.Year;
        }
    }
}

function getWork() {
    // This function runs when button is clicked and returns a table of work experience in resume_data.json

    // Set selected button to be disable, enable all other buttons
    document.getElementById("degree-button").disabled = false;
    document.getElementById("work-button").disabled = true;
    document.getElementById("leadership-button").disabled = false;


    //Fetching the json data as a promise, checking response, and processing
    fetch("data/resume_data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => processData(data))

        .catch(err => {
            console.error("error msg: ", err);
        })


    //Processing the json data such that it creates rows in a table. 
    const processData = function (data) {

        console.log(data);

        let table = document.getElementById("resume_table");

        while (table.firstChild) {
            table.firstChild.remove()
        }
        
        let headerRow = table.createTHead().insertRow(0);
        headerRow.setAttribute("id", "header");

        headerRow.insertCell(0).innerHTML = "Title";
        headerRow.insertCell(1).innerHTML = "Years";
        headerRow.insertCell(2).innerHTML = "Location";
        headerRow.insertCell(3).innerHTML = "Company";

        let length = data.work_history.length;

        let tbody = table.createTBody();

        for (let i = 0; i < length; i++) {
            let row = tbody.insertRow(-1);
            row.insertCell(0).innerHTML = data.work_history[i].Job.Title;
            row.insertCell(1).innerHTML = data.work_history[i].Job.Years;
            row.insertCell(2).innerHTML = data.work_history[i].Job.Location;
            row.insertCell(3).innerHTML = data.work_history[i].Job.Company;
        }
    }
}

function getLeader() {
    // This function runs when button is clicked and returns a table of leadership exp found in resume_data.json

    // Set selected button to be disable, enable all other buttons
    document.getElementById("degree-button").disabled = false;
    document.getElementById("work-button").disabled = false;
    document.getElementById("leadership-button").disabled = true;


    //Fetching the json data as a promise, checking response, and processing
    fetch("data/resume_data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => processData(data))

        .catch(err => {
            console.error("error msg: ", err);
        })


    //Processing the json data such that it creates rows in a table. 
    const processData = function (data) {

        console.log(data);


        let table = document.getElementById("resume_table");

        while (table.firstChild) {
            table.firstChild.remove()
        }

        let headerRow = table.createTHead().insertRow(0);
        headerRow.setAttribute("id", "header");

        headerRow.insertCell(0).innerHTML = "Title";
        headerRow.insertCell(1).innerHTML = "Years";
        headerRow.insertCell(2).innerHTML = "Location";
        headerRow.insertCell(3).innerHTML = "Company";

        let length = data.leadership_experience.length;

        let tbody = table.createTBody();

        for (let i = 0; i < length; i++) {
            let row = tbody.insertRow(-1);
            row.insertCell(0).innerHTML = data.leadership_experience[i].experience.Title;
            row.insertCell(1).innerHTML = data.leadership_experience[i].experience.Years;
            row.insertCell(2).innerHTML = data.leadership_experience[i].experience.Location;
            row.insertCell(3).innerHTML = data.leadership_experience[i].experience.Company;
        }
    }
}

