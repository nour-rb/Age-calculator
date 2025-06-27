// Select elements
const button = document.getElementById("btn");
const dateInput = document.getElementById("date");
const output = document.getElementById("age-result");

// Get today's date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

// Button hover effects
button.addEventListener("mouseenter", () => {
    button.style.background = "rgb(80, 79, 65)";
});

button.addEventListener("mouseleave", () => {
    button.style.background = "white";
});

// Button click: calculate age
button.addEventListener("click", () => {
    if (!dateInput.value) {
        alert("Please enter your birthday.");
        return;
    }

    const birthday = new Date(dateInput.value);
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth() + 1;
    const birthDay = birthday.getDate();

    let age = currentYear - birthYear;

    // Subtract 1 if birthday hasn't happened yet this year
    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--;
    }

    output.textContent = `You are ${age} years old.`;
});
