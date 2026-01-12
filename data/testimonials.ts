export interface Testimonial {
    id: number;
    name: string;
    title: string;
    text: string;
    avatar: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Emma Johnson",
        title: "Founder at Specra",
        text: "Starwise helped me turn my experience into clear, structured answers. I felt much more confident going into my interviews.",
        avatar: "/images/avatar-1.png",
    },
    {
        id: 2,
        name: "David Wilson",
        title: "Founder at Boom",
        text: "Practicing with Starwise showed me exactly what was missing in my answers. The AI feedback made a real difference.",
        avatar: "/images/avatar-2.png",
    },
    {
        id: 3,
        name: "John Doe",
        title: "Founder at Nova",
        text: "I struggled to explain my impact clearly before. Starwise helped me structure my answers using STAR in a way interviewers expect.",
        avatar: "/images/avatar-3.png",
    },
    {
        id: 4,
        name: "Laura Martinez",
        title: "Founder at Comet",
        text: "The AI-generated improvements gave me a strong base to refine my answers. It saved me a lot of preparation time.",
        avatar: "/images/avatar-1.png",
    },
    {
        id: 5,
        name: "John Pitt",
        title: "Founder at Apex",
        text: "Starwise made interview preparation much more focused. I stopped guessing and knew exactly what to improve.",
        avatar: "/images/avatar-2.png",
    },
    {
        id: 6,
        name: "Marcus Chen",
        title: "Software Engineer at TechFlow",
        text: "I was skeptical about AI interview prep, but Starwise blew me away. The feedback was incredibly specific and actionable. I landed my dream job at a FAANG company!",
        avatar: "/images/avatar-3.png",
    },
    {
        id: 7,
        name: "Sarah Miller",
        title: "Product Manager at Innovate Inc",
        text: "The STAR method guidance is a game changer. It helped me structure my thoughts and deliver concise, impactful answers. Highly recommended for any PM interview.",
        avatar: "/images/avatar-1.png",
    },
];
