// Personal Information
var firstName = "Khanyisa Sinnah Michelle";
var lastName = "Ndima";

var bioText = "Hi, I'm Khanyisa Sinnah Michelle Ndima, I was born and  bred in the tropicaltown called Tzaneen in Limpopo province, South Africa. I am a 27 year BSc(Computer Science and Statistics) graduate from University of Limpopo, with practical experience in Data Science. My objective is to apply my analytical skills and passion for data to drive insight and solutions that drive business growth and innovation.";

var email = "mkndima@gmail.com";
var phone = "+27719846085";

// Educational Background
var educational = [
    {
        degree: "Bachelor of Science (BSc)",
        Major: "Computer Science and Statistics" ,
        University: "University of Limpopo"
    },
    {
        Course: "Introduction to Web Development",
        Provider: "GirlCode"
    },
    {
        Course: "Digital Marketing: Crafting a Winning Strategy",
        Provider: "MANCOSA"
    },
    {
        Course: "Teaching English as a Foreign Language",
        Provider: "TEFL Professional Institute - Teacher Reccord"
    },
    {
        Course: "Data Scince Learnership",
        Provider: "Centre for Digital Transformation and Innovation Africa (CXI-AFRICA)"
    }
]   

// Projects

var projects = [
    {
        name: "New York City Taxi Trip Duration",
        description: "The New York City Taxi Duration Prediction project aims"+
                    "to predict the duration of taxi trips in the city. "+

                    "Leveraging historical taxi trip data, including drop-off location,"+
                    "timestamps, and other relavant features, machine learning models are"+
                    "developed to forecast the duration of future taxi rides accurately. "+

                    "by understanding and predicting taxi trip durations, this project"+
                    "contributes to improving transportation efficiency, optimizing route"+
                    "planning, and enhancing overall user experiencefoe taxi"+
                    "passengers and drivers in New York City.",
        technologies: "Python,SPSS,PANDAS",
        url: "https://github.com/khanyi26/NYC-Taxi-Trip-Duration-",
    },
    {
        name:"Sport Complex Booking System",
        description:"The Sport Complex Booking System project aims to develop a comprehensive"+
                    "database solution for managing bookings and reservations at a sport complex."+
                    "the system facilitates the efficient scheduling of various sports facilities,"+
                    "such as courts, fields, or gymnasiums, allowing users to reserve slots for"+
                    "their desired activities.",
        technologies:"MySQL",
        url:"https://github.com/khanyi26/Database-Projects",

    },
    {
        name:"Machine Learning Projects",
        description:"Machine Learning Projects contains both classification and regression tasks,"+
                    "for both classification and regression datasets the baseline models offer simplicity"+
                    "and ease of interpretation, the k-NN models provide a more flexible and data-driven"+
                    "approach for both classification and regression tasks.",
        technologies:"Python",
        url:"https://github.com/khanyi26/Machine-learning",
    }    
];


var otherInfo = {
    skills: "HTML,CSS,JavaScript,Python,R,Data Analysis/Science,SQL",

    objective: "I am proficient in programming languages such as Python, R,JavaScript,HTML"+
                "and SQL and I have pratical experience working with EDA."+
                "My goal is to apply my analytical skills and passion for"+
                "data to drive insights and solutions that drive business"+
                "growth and innovation",

    motive:  "I believe in impowering women who in tech world, and I strive for"+
            "encouraging young girls in rural area(undeveloped communities) to join the tech world."+
            "I am excited about the given opportunity of joining"+
            "the web development bootcamp with code tribe,"+
            " Im looking forward to gain more skills on web development concept"+
            "I believe in impowering women who in tech world, and I strive for"+
            "encouraging young girls in rural area(undeveloped communities) to join the tech world."+
            "I am excited about the given opportunity of joining"+
            "the web development bootcamp with code tribe,"+
            "I'm looking forward to gain more skills on web development concept"
};

    // Assign values to HTML elements from JavaScript variables
    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
    document.getElementById("bioText").textContent = bio;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
    
    // Populate the Education background 
    var educationList = document.getElementById("educationList");
            education.forEach(function(item) {
                var listItem = document.createElement("li");
                listItem.textContent = item.degree + " in " + item.major + " from " + item.institution + " (" + item.year + ")";
                educationList.appendChild(listItem);
            });

    // Populate the projects list
    var projectsList = document.getElementById("projects");
            projects.forEach(function(item) {
            var listItem = document.createElement("li");
            var link = document.createElement("a");
            link.textContent = item.name;
            link.href = item.url;
            listItem.appendChild(link);
            listItem.innerHTML += ": " + item.description + " (Technologies used: " + item.technologies.join(", ") + ")";
            console.log(listItem);
        
            projectsList.appendChild(listItem);
            });

        // Form
     // Client-side validation
     document.getElementById("contact-form").addEventListener("submit",function(event) {
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if(name === "" || surname === "" || email === ""|| message === "") {
            alert("Please fill out all fields.");
        }
     });
      
     