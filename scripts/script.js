// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const floatingChatSection = document.getElementById('floating-chat-section');
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatCloseButton = document.getElementById('chat-close-button');
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const resumeSection = document.getElementById('resume-section');

    // Structured resume data
    const resumeData = {
        name: "Jane Doe",
        title: "Software Engineer | Full-Stack Developer | Problem Solver",
        contact: [
            { type: "email", value: "jane.doe@example.com", url: "mailto:jane.doe@example.com" },
            { type: "phone", value: "+1 (123) 456-7890", url: "tel:+1234567890" },
            { type: "linkedin", value: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
            { type: "github", value: "GitHub", url: "https://github.com/janedoe" }
        ],
        summary: "Highly motivated and detail-oriented Software Engineer with 5 years of experience in developing robust and scalable web applications. Proficient in JavaScript, Python, React, Node.js, and database management. Proven ability to quickly learn new technologies and deliver high-quality solutions in fast-paced environments.",
        experience: [
            {
                title: "Senior Software Engineer",
                company: "Tech Solutions Inc.",
                dates: "March 2022 – Present",
                location: "San Francisco, CA",
                responsibilities: [
                    "Led the development of a new microservices-based architecture using Node.js and AWS Lambda, improving system scalability by 40%.",
                    "Designed and implemented a real-time data visualization dashboard with React and D3.js, increasing data accessibility for product teams.",
                    "Mentored junior engineers and conducted code reviews, ensuring adherence to best practices and high code quality.",
                    "Collaborated with cross-functional teams to define project requirements and deliver features on time."
                ]
            },
            {
                title: "Software Engineer",
                company: "Innovate Co.",
                dates: "June 2019 – February 2022",
                location: "New York, NY",
                responsibilities: [
                    "Developed and maintained RESTful APIs using Python (Django/Flask) for a high-traffic e-commerce platform.",
                    "Built responsive user interfaces with React and Redux, resulting in a 20% improvement in user engagement metrics.",
                    "Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.",
                    "Contributed to database schema design and optimization using PostgreSQL."
                ]
            }
        ],
        education: [
            {
                degree: "Master of Science in Computer Science",
                university: "Stanford University",
                year: "2019",
                details: ["Specialization in Artificial Intelligence and Machine Learning."]
            },
            {
                degree: "Bachelor of Science in Computer Engineering",
                university: "University of California, Berkeley",
                year: "2017",
                details: ["Graduated Summa Cum Laude."]
            }
        ],
        skills: {
            languages: "JavaScript, Python, Java, C++",
            frameworks: "React, Node.js, Express.js, Django, Flask, Redux, D3.js",
            databases: "PostgreSQL, MongoDB, MySQL, Firebase Firestore",
            cloud: "AWS (Lambda, EC2, S3), Google Cloud Platform",
            tools: "Git, Docker, Kubernetes, Agile, CI/CD"
        },
        projects: [
            {
                name: "Personal Portfolio Website",
                technologies: "React, Node.js, PostgreSQL",
                description: [
                    "Developed a responsive portfolio website to showcase projects and skills.",
                    "Implemented a custom backend for contact form submissions."
                ]
            },
            {
                name: "AI-Powered Recipe Generator",
                technologies: "Python, Flask, TensorFlow",
                description: [
                    "Built a web application that generates recipes based on available ingredients using a pre-trained ML model."
                ]
            }
        ]
    };

    // Function to render resume content dynamically
    function renderResume() {
        // Clear existing content
        resumeSection.innerHTML = '';

        // Name and Title
        const nameEl = document.createElement('h1');
        nameEl.textContent = resumeData.name;
        resumeSection.appendChild(nameEl);

        const titleEl = document.createElement('p');
        titleEl.classList.add('text-md');
        titleEl.textContent = resumeData.title;
        resumeSection.appendChild(titleEl);

        // Contact Info
        const contactP = document.createElement('p');
        contactP.classList.add('contact-links'); // Add a class for specific styling
        resumeData.contact.forEach((item, index) => {
            const a = document.createElement('a');
            a.href = item.url;
            a.target = "_blank"; // Open in new tab
            a.textContent = item.value;
            contactP.appendChild(a);
            if (index < resumeData.contact.length - 1) {
                const span = document.createElement('span');
                span.textContent = ' | ';
                contactP.appendChild(span);
            }
        });
        resumeSection.appendChild(contactP);

        // Summary
        const summaryH2 = document.createElement('h2');
        summaryH2.textContent = 'Summary';
        resumeSection.appendChild(summaryH2);

        const summaryP = document.createElement('p');
        summaryP.textContent = resumeData.summary;
        resumeSection.appendChild(summaryP);

        // Experience
        const experienceH2 = document.createElement('h2');
        experienceH2.textContent = 'Experience';
        resumeSection.appendChild(experienceH2);

        resumeData.experience.forEach(job => {
            const jobDiv = document.createElement('div');

            const jobTitleH3 = document.createElement('h3');
            jobTitleH3.textContent = `${job.title} at ${job.company}`;
            jobDiv.appendChild(jobTitleH3);

            const jobDatesP = document.createElement('p');
            jobDatesP.classList.add('text-sm');
            jobDatesP.textContent = `${job.dates} | ${job.location}`;
            jobDiv.appendChild(jobDatesP);

            const responsibilitiesUl = document.createElement('ul');
            job.responsibilities.forEach(resp => {
                const li = document.createElement('li');
                li.textContent = resp;
                responsibilitiesUl.appendChild(li);
            });
            jobDiv.appendChild(responsibilitiesUl);
            resumeSection.appendChild(jobDiv);
        });

        // Education
        const educationH2 = document.createElement('h2');
        educationH2.textContent = 'Education';
        resumeSection.appendChild(educationH2);

        resumeData.education.forEach(edu => {
            const eduDiv = document.createElement('div');

            const degreeH3 = document.createElement('h3');
            degreeH3.textContent = edu.degree;
            eduDiv.appendChild(degreeH3);

            const universityP = document.createElement('p');
            universityP.classList.add('text-sm');
            universityP.textContent = `${edu.university} | ${edu.year}`;
            eduDiv.appendChild(universityP);

            const detailsUl = document.createElement('ul');
            edu.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsUl.appendChild(li);
            });
            eduDiv.appendChild(detailsUl);
            resumeSection.appendChild(eduDiv);
        });

        // Skills
        const skillsH2 = document.createElement('h2');
        skillsH2.textContent = 'Skills';
        resumeSection.appendChild(skillsH2);

        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('skills-container');

        for (const category in resumeData.skills) {
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: `;
            p.appendChild(strong);
            p.append(resumeData.skills[category]);
            skillsDiv.appendChild(p);
        }
        resumeSection.appendChild(skillsDiv);

        // Projects
        const projectsH2 = document.createElement('h2');
        projectsH2.textContent = 'Projects';
        resumeSection.appendChild(projectsH2);

        resumeData.projects.forEach(project => {
            const projectDiv = document.createElement('div');

            const projectNameH3 = document.createElement('h3');
            projectNameH3.textContent = project.name;
            projectDiv.appendChild(projectNameH3);

            const projectTechP = document.createElement('p');
            projectTechP.classList.add('text-sm');
            projectTechP.textContent = project.technologies;
            projectDiv.appendChild(projectTechP);

            const descriptionUl = document.createElement('ul');
            project.description.forEach(desc => {
                const li = document.createElement('li');
                li.textContent = desc;
                descriptionUl.appendChild(li);
            });
            projectDiv.appendChild(descriptionUl);
            resumeSection.appendChild(projectDiv);
        });
    }

    // Generate the AI's context string from the structured data for consistent output
    function generateAIContextString(data) {
        let context = `Jane Doe\n`;
        context += `Email: ${data.contact.find(c => c.type === 'email').value}\n`;
        context += `Phone: ${data.contact.find(c => c.type === 'phone').value}\n`;
        context += `LinkedIn: ${data.contact.find(c => c.type === 'linkedin').url}\n`;
        context += `GitHub: ${data.contact.find(c => c.type === 'github').url}\n\n`;

        context += `Summary:\n${data.summary}\n\n`;

        context += `Experience:\n`;
        data.experience.forEach(job => {
            context += `${job.title} at ${job.company} (${job.dates}) | ${job.location}\n`;
            job.responsibilities.forEach(resp => context += `- ${resp}\n`);
            context += `\n`;
        });

        context += `Education:\n`;
        data.education.forEach(edu => {
            context += `${edu.degree}, ${edu.university} (${edu.year})\n`;
            edu.details.forEach(detail => context += `- ${detail}\n`);
            context += `\n`;
        });

        context += `Skills:\n`;
        for (const category in data.skills) {
            context += `${category.charAt(0).toUpperCase() + category.slice(1)}: ${data.skills[category]}\n`;
        }
        context += `\n`;

        context += `Projects:\n`;
        data.projects.forEach(project => {
            context += `${project.name} (${project.technologies})\n`;
            project.description.forEach(desc => context += `- ${desc}\n`);
            context += `\n`;
        });

        return context;
    }

    const aiResumeContext = generateAIContextString(resumeData);

    let chatHistory = []; // Stores the conversation history

    // Function to display messages in the chatbox
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        // Handle markdown for lists or bold text in AI responses
        messageElement.innerHTML = message.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    }

    // Function to show a loading indicator
    function showLoadingIndicator() {
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('loading-indicator');
        loadingElement.innerHTML = `
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <span>Thinking...</span>
        `;
        loadingElement.id = 'loading-indicator'; // Add an ID to easily remove it
        chatbox.appendChild(loadingElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Function to remove the loading indicator
    function removeLoadingIndicator() {
        const loadingElement = document.getElementById('loading-indicator');
        if (loadingElement) {
            loadingElement.remove();
        }
    }

    // Function to send message to AI
    async function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === '') return;

        displayMessage(userText, 'user');
        userInput.value = ''; // Clear input field

        showLoadingIndicator(); // Show loading indicator

        // Construct the prompt for the AI model, using the dynamically generated context string
        const prompt = `You are an AI assistant tasked with answering questions strictly based on the provided resume content.
        If the answer is not present in the resume, clearly state that the information is not available in the provided resume.
        Do not make up information.

        Resume Content:
        """
        ${aiResumeContext}
        """

        User Question: ${userText}

        Answer:`;

        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        };
        // *** IMPORTANT: Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API Key obtained from Google AI Studio (aistudio.google.com) ***
        // Without a valid API key, you will encounter a 403 Forbidden error.
        const apiKey = "AIzaSyAe1AwuLwh5TtfStiVre0AEtIIOG84NW10"; // <--- ENTER YOUR API KEY HERE
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                // More detailed error logging for debugging 403 or other issues
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                throw new Error(`HTTP error! status: ${response.status} - ${errorData.error.message || 'Unknown error'}`);
            }

            const result = await response.json();

            removeLoadingIndicator(); // Remove loading indicator once response is received

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const aiResponseText = result.candidates[0].content.parts[0].text;
                displayMessage(aiResponseText, 'ai');
            } else {
                displayMessage("Sorry, I couldn't get a response. Please try again.", 'ai');
            }
        } catch (error) {
            console.error("Error communicating with AI:", error);
            removeLoadingIndicator(); // Remove loading indicator on error
            displayMessage("An error occurred while fetching a response. Please try again later.", 'ai');
        }
    }

    // Chatbox toggle functionality
    function toggleChatbox(open) {
        if (open) {
            floatingChatSection.classList.add('open');
            chatToggleButton.textContent = '✖'; // Close icon
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom when opening
        } else {
            floatingChatSection.classList.remove('open');
            chatToggleButton.textContent = '💬'; // Chat icon
        }
    }

    // Event listener for main chat toggle button
    chatToggleButton.addEventListener('click', () => {
        toggleChatbox(!floatingChatSection.classList.contains('open'));
    });

    // Event listener for chatbox close button
    chatCloseButton.addEventListener('click', () => {
        toggleChatbox(false); // Close the chatbox
    });

    // Event listener to close chatbox when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideChatbox = floatingChatSection.contains(event.target) || chatToggleButton.contains(event.target);
        if (!isClickInsideChatbox && floatingChatSection.classList.contains('open')) {
            toggleChatbox(false);
        }
    });

    // Theme toggle functionality
    function toggleTheme() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'light');
        }
    }

    // Set initial theme based on local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    } else if (savedTheme === 'light') {
        themeToggle.checked = false;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Default to system preference if no theme saved
        themeToggle.checked = true;
    }
    toggleTheme(); // Apply initial theme immediately

    themeToggle.addEventListener('change', toggleTheme);

    // Initial render of resume content
    renderResume();

    // Event listeners for chat interactions
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}); // End DOMContentLoaded
