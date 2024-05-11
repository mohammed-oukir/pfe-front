import React from 'react';
import './TestimonialsSection.css'; // Assurez-vous que ce fichier CSS est correctement lié

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Mohammed Oukir",
            text: "Grâce à Find Worker, j'ai trouvé un plombier fiable en moins de 24 heures ! Le service a été impeccable et à un prix très raisonnable. Je recommande fortement !",
            role: "Client"
        },
        {
            id: 2,
            name: "Omar Riafi",
            text: "J'utilise Find Worker pour tous mes besoins en rénovation. Les professionnels sont compétents, respectueux et offrent toujours un travail de qualité.",
            role: "Client"
        },
        {
            id: 3,
            name: "Yassine Aghla",
            text: "Fantastique expérience du début à la fin. Le processus de réservation était simple, et le service client a été très réactif à mes questions.",
            role: "Client "
        },
        {
            id: 4,
            name: "Malak",
            text: "L'expérience a été fantastique de bout en bout. La réservation s'est déroulée sans accroc, avec un processus simple et fluide. De plus, le service client s'est montré incroyablement réactif à toutes mes questions, ce qui a grandement contribué à ma satisfaction globale.",
            role: "Client "
        }
    ];

    return (
        <div className="testimonials-container">
            <h2>Témoignages</h2>
            <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-item">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-author">- {testimonial.name}, {testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
