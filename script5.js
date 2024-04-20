let registeredUsers = []; // Array to store registered users (simulation)

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate login by checking if username and password match any registered user
    const user = registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
        // Redirect to dashboard or display dashboard content
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function hideRegisterForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function register() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const regUsername = document.getElementById('regUsername').value.trim();
    const regPassword = document.getElementById('regPassword').value.trim();

    if (fullName === '' || email === '' || phoneNumber === '' || regUsername === '' || regPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check if the username is already registered
    if (isUsernameRegistered(regUsername)) {
        alert('Username is already registered. Please choose another username.');
        return;
    }

    // Add the user to the list of registered users
    registeredUsers.push({ fullName, email, phoneNumber, username: regUsername, password: regPassword });

    // Show registration success message
    alert('Registration successful! You can now log in.');

    // Reset form fields and hide the registration form
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';

    hideRegisterForm();
}

function isUsernameRegistered(username) {
    return registeredUsers.some(user => user.username === username);
}


// Sample user data
const userData = {
    name: "Karthika",
    studentID: "123456",
    program: "Electronics and communication",
    contact: "karthika@example.com"
};

// Function to update the profile section with user data
function updateProfileSection() {
    // Get the elements by their IDs
    const nameElement = document.getElementById('name');
    const studentIDElement = document.getElementById('studentID');
    const programElement = document.getElementById('course'); // Assuming 'course' is the correct ID
    const contactElement = document.getElementById('contact');

    // Update the text content of the elements with user data
    nameElement.textContent = userData.name;
    studentIDElement.textContent = userData.studentID;
    programElement.textContent = userData.program;
    contactElement.textContent = userData.contact;
}

// Call the updateProfileSection function to populate the profile section
updateProfileSection();



// Sample academic data
const academicData = {
    currentSemester: "8",
    courseSchedule: "Monday, Wednesday, Friday 9:00 AM - 11:00 AM",
    grade: "A",
    GPA: "8.2"
};

// Function to update the academic information section with data
function updateAcademicSection() {
    // Get the elements by their IDs
    const semesterElement = document.getElementById('semester');
    const courseScheduleElement = document.getElementById('Course'); // Assuming 'Course' is the correct ID
    const gradeElement = document.getElementById('Grade');
    const gpaElement = document.getElementById('GPA');

    // Update the text content of the elements with academic data
    semesterElement.textContent = academicData.currentSemester;
    courseScheduleElement.textContent = academicData.courseSchedule;
    gradeElement.textContent = academicData.grade;
    gpaElement.textContent = academicData.GPA;
}

// Call the updateAcademicSection function to populate the academic information section
updateAcademicSection();



// Sample financial data
const financialData = {
    tuitionFees: "INR 10,000",
    paymentDetails: "Payment due by May 15, 2024",
    outstandingPayment: "INR 2,500",
    scholarships: "Merit-based Scholarship"
};

// Function to update the financial section with data
function updateFinancialSection() {
    // Get the elements by their IDs
    const feesElement = document.getElementById('Fees');
    const paymentDetailsElement = document.getElementById('PaymentDetails');
    const outstandingDetailsElement = document.getElementById('OutstandingDetails');
    const scholarshipsElement = document.getElementById('Scholarships');

    // Update the text content of the elements with financial data
    feesElement.textContent = financialData.tuitionFees;
    paymentDetailsElement.textContent = financialData.paymentDetails;
    outstandingDetailsElement.textContent = financialData.outstandingPayment;
    scholarshipsElement.textContent = financialData.scholarships;
}

// Call the updateFinancialSection function to populate the financial section
updateFinancialSection();



// Sample data for Library and Resources section
const libraryData = [
    { title: 'Book Borrowing Status', description: 'You have borrowed 3 books.' },
    { title: 'Online Resources', description: 'Access e-books, journals, and databases.' },
    { title: 'Library Notifications', description: 'You have 1 overdue book.' }
];

// Function to populate the Library and Resources section with data
function populateLibrarySection() {
    // Get the library section element by ID
    const librarySection = document.getElementById('librarySection');

    // Loop through the libraryData array and create HTML elements for each item
    libraryData.forEach(item => {
        // Create a <p> element for the title
        const titleElement = document.createElement('h4');
        titleElement.textContent = item.title;

        // Create a <p> element for the description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        // Append the title and description elements to the library section
        librarySection.appendChild(titleElement);
        librarySection.appendChild(descriptionElement);
    });
}

// Call the populateLibrarySection function to populate the section with data
populateLibrarySection();



// Sample data for Events and Announcements section
const eventsData = [
    { name: 'Workshop on Web Development', date: '2024-05-20' },
    { name: 'Seminar on Data Science', date: '2024-06-05' },
    { name: 'Academic Deadline: Course Registration', date: '2024-07-01' }
];

// Function to populate the Events and Announcements section with data
function populateEventsSection() {
    // Get the events section element by ID
    const eventsSection = document.getElementById('eventsSection');

    // Loop through the eventsData array and create HTML elements for each event
    eventsData.forEach(event => {
        // Create a <p> element for the event name and date
        const eventElement = document.createElement('p');
        eventElement.textContent = `${event.name} - Date: ${event.date}`;

        // Append the event element to the events section
        eventsSection.appendChild(eventElement);
    });
}

// Call the populateEventsSection function to populate the section with data
populateEventsSection();



// Sample data for job/internship opportunities
const jobOpportunities = [
    { title: 'Software Engineer Intern', company: 'TechCorp' },
    { title: 'Marketing Coordinator', company: 'Digital Solutions Inc.' },
    { title: 'Data Analyst', company: 'Analytics Co.' }
];

// Function to populate the Job Opportunities list in Career Services section
function populateJobOpportunitiesList() {
    // Get the job opportunities list element by ID
    const jobOpportunitiesList = document.getElementById('jobOpportunitiesList');

    // Loop through the jobOpportunities array and create <li> elements for each job opportunity
    jobOpportunities.forEach(job => {
        // Create a new <li> element
        const listItem = document.createElement('p');

        // Set the inner HTML of the <li> element with job data
        listItem.innerHTML = `${job.title} - ${job.company}`;

        // Append the <li> element to the job opportunities list
        jobOpportunitiesList.appendChild(listItem);
    });
}

// Call the populateJobOpportunitiesList function to populate the job opportunities list
populateJobOpportunitiesList();

// Event listener for submitting feedback form
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the feedback message from the textarea
    const feedbackMessage = document.getElementById('feedback').value.trim();

    if (feedbackMessage === '') {
        alert('Please enter your feedback.');
        return;
    }

    // Here you can handle the submission of feedback, such as sending it to a server or displaying a confirmation message
    alert('Feedback submitted successfully:\n' + feedbackMessage);
});

