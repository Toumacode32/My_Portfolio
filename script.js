// Certification data
const certifications = [
    {
        title: "Certificate of Virtual Assistant Training Completion",
        organization: "LightHouse",
        year: "2024",
        imageUrl: "img/virtual-assistant-training.jpg" // Replace with actual file name
    },
    {
        title: "E-Lab Certificate of Achievement",
        organization: "ALU",
        year: "2024",
        imageUrl: "img/e-lab-certificate.jpg" // Replace with actual file name
    },
    {
        title: "Attestation of Recognition for Restless Excellence",
        organization: "Mariama Ba",
        year: "2022",
        imageUrl: "img/attestation-recognition.jpg" // Replace with actual file name
    },
    {
        title: "High School Diploma",
        organization: "Minister of Higher Education, Research, and Innovation",
        year: "2022",
        imageUrl: "img/high-school-diploma.jpg" // Replace with actual file name
    },
    {
        title: "ALX Virtual Assistant Training",
        organization: "Certificate of Completion",
        year: "2024",
        imageUrl: "img/alx-virtual-assistant.jpg" // Replace with actual file name
    },
    {
        title: "Not Yet Available",
        organization: "",
        year: "2025",
        imageUrl: "" // Replace with actual file name
    },
    
];

// Populate certifications
function populateCertifications() {
    const certGrid = document.getElementById('certGrid');
    certGrid.innerHTML = ''; // Clear any existing content
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        
        certCard.innerHTML = `
            <div class="cert-image" style="background-image: url(${cert.imageUrl});"></div>
            <div class="cert-content">
                <h3>${cert.title}</h3>
                <p>${cert.organization} | ${cert.year}</p>
            </div>
        `;
        
        certGrid.appendChild(certCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateCertifications();
});


    // Fade-in effect for testimonials
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        testimonial.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(testimonial);
    });


