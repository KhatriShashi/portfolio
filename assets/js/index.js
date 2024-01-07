let menu = document.querySelector(".menu");
document.querySelector(".menu-icon").addEventListener('click', () => {
    menu.classList.toggle("menu-open");
})


window.addEventListener("scroll", (e) => {

    if (window.scrollY < 5) {
        document.querySelector(".navbar-section").style.background = "none";
    } else {
        document.querySelector(".navbar-section").style.background = "#faf6f0";
    }
})


let section = document.querySelectorAll('section')
let lists = document.querySelectorAll('.menu ul li a');
function activeLink() {
    lists.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
        menu.classList.remove("menu-open");
}
lists.forEach((item) =>
    item.addEventListener('click', activeLink));


// Function to create and animate progress circles for each skill
// Array of skills with their respective percentages
const skillsData =[
    { name: "HTML", percentage: 85},
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "ReactJS", percentage: 80},
    { name: "Bootstrap", percentage:80},
    { name: "Java", percentage:75},
    { name: "MySQL", percentage:80}
];
function createSkills() {
    const skillsContainer = document.getElementsByClassName("skills");

    skillsData.forEach((skill, index) => {
        const skillElement = document.createElement("div");
        skillElement.classList.add("skill");
        skillElement.innerHTML = `
            <div class="outer">
                <div class="inner">
                    <div class="skill-name">${skill.name}</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" style="stroke-dasharray: 472; stroke-dashoffset: 472; animation: anim${index} 2s linear forwards;"></circle>
            </svg>
        `;
        skillsContainer[0].appendChild(skillElement);

        // Start animation for each skill
        animateSkill(index, skill.percentage);
    });
}

// Function to dynamically generate keyframes for each skill
function generateKeyframes(index, targetValue) {
    const styleSheet = document.styleSheets[1];
    const data= 472- (472 * targetValue) / 100;
    const keyframes = `@keyframes anim${index} {
        100% {
            stroke-dashoffset: ${data};
        }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Function to animate each skill
function animateSkill(index, targetValue) {
    let counter = 0;
    // const numberElement = document.querySelector(`#skills .skill:nth-child(${index + 1}) .number`);

    generateKeyframes(index, targetValue);

    function animate() {
        if (counter < targetValue) {
            counter += 1;
            // numberElement.innerHTML = counter + "%";
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Call the createSkills function to initialize the skills
createSkills();


// Contact Form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbw3O-FG1AkMIMTfGUkHV6s6mdPFGY739zLySWLhrI8qGI26A2K-e9Fm7SAbb5KSYmY64Q/exec'
const form = document.forms['Contact_US']

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitButton = document.getElementById('contact_submit_button');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                submitButton.textContent = "Thank you! I'll be in touch shortly.";
                form.reset();
                submitButton.disabled = true;
            } else {
                submitButton.textContent = "Oops! Something went wrong. Please try again later.";
            }
        })
        .catch(error => console.error('Error!', error.message))
})