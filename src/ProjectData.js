const projects = [
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
        category: "Game Dev",
        startDate: "Feb 2022",
        endDate: "May 2023",
        title: "React Infinite Scroll",
        description:
            "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
        skills: ["C#", "Unity", "Pixel Art"],
        codeLink: "Code",
        figmaLink: "Figma",
        getImageSrc: () => require("./assets/photo2.jpg"),
    },
    {
        category: "Game Dev",
        startDate: "Feb 2022",
        endDate: "May 2023",
        title: "Photo Gallery",
        description:
            "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        skills: ["C#", "Unity", "Pixel Art"],
        codeLink: "Code",
        figmaLink: "Figma",
        getImageSrc: () => require("./assets/photo3.jpg"),
    },
    {
        category: "Game Dev",
        startDate: "Feb 2022",
        endDate: "May 2023",
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        skills: ["C#", "Unity", "Pixel Art"],
        codeLink: "Code",
        figmaLink: "Figma",
        getImageSrc: () => require("./assets/photo4.jpg"),
    },
];

export default projects;