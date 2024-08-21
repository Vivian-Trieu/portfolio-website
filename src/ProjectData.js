const projects = [
    {
        category: "Website",
        startDate: "July 2024",
        endDate: "Present",
        title: "Portfolio Website",
        description:
            "Website for fictional restaurant Little Lemon as a capstone project for Coursera's Meta Front-end Developer Certification",
        skills: ["React", "CSS", "JSX", "Figma"],
        codeLink: "https://github.com/Vivian-Trieu/portfolio-website",
        figmaLink: "https://www.figma.com/design/xWezgMh5WXp0uyyZr6a7TG/Little-Lemon-Prototype?node-id=0-1&t=abG2h4IwVEUWL8s6-1",
        getImageSrc: () => require("./assets/littlelemon.png"),
    },
    {
        category: "Website",
        startDate: "June 2024",
        endDate: "July 2024",
        title: "Little Lemon",
        description:
            "Website for fictional restaurant Little Lemon as a capstone project for Coursera's Meta Front-end Developer Certification",
        skills: ["React", "CSS", "JSX", "Figma"],
        codeLink: "https://github.com/Vivian-Trieu/capstone-project",
        figmaLink: "https://www.figma.com/design/xWezgMh5WXp0uyyZr6a7TG/Little-Lemon-Prototype?node-id=0-1&t=abG2h4IwVEUWL8s6-1",
        getImageSrc: () => require("./assets/littlelemon.png"),
    },
    {
        category: "Mobile App",
        startDate: "Nov 2023",
        endDate: "Present",
        title: "BroncoBond",
        description:
            "A mobile application for students of Cal Poly Pomona to connect with their peers and stay updated on campus life",
        skills: ["Dart", "Flutter", "API Integration", "Figma"],
        codeLink: "https://github.com/BroncoBond/Bronco-Bond",
        figmaLink: "https://www.figma.com/design/Qsd2VU7kYPljDquYMr7CHE/BroncoBond-UI?node-id=2418-1927&t=l9jVJYk6jy72VskT-1",
        getImageSrc: () => require("./assets/broncobond.png"),
    },
    {
        category: "Web App",
        startDate: "Sept 2023",
        endDate: "Dec 2023",
        title: "ResuMate",
        description:
            "Resume screener web app with a Tinder-style interface using AI to match jobs recommendations to your resume",
        skills: ["React", "CSS", "JSX", "AWS", "Figma", "API Integration"],
        codeLink: "https://github.com/Vivian-Trieu/ResuMate",
        figmaLink: "https://www.figma.com/design/90g4iXwB0lZLTDFs1YHZ7g/ResuMate-UI?node-id=0-1&t=qKfMgr0ObVh2gCSH-1",
        getImageSrc: () => require("./assets/resumate.png"),
    },
    {
        category: "Desktop App",
        startDate: "Feb 2023",
        endDate: "May 2023",
        title: "Restaurant Food Delivery",
        description:
            "A mock restaurant food delivery subsystem with Admin, Customer, and Driver interfaces",
        skills: ["JavaFx", "CSS", "SQL"],
        codeLink: "https://github.com/EvinMenendezVargas/CS3560-01-6-Restaurant-Food-Delivery-System",
        figmaLink: "",
        getImageSrc: () => require("./assets/restaurantdelivery.png"),
    },
];

export default projects;