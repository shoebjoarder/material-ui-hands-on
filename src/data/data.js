import thesisImg from "../assets/soco-thesis.jpg";
import coursesImg from "../assets/soco-courses.jpg";
import researchImg from "../assets/soco-research.jpg";

const activities = [
  {
    img: thesisImg,
    title: "Thesis",
    description:
      "We offer interesting Bachelor‘s and Master‘s thesis projects in the fields of social computing, data science, and learning technologies.",
    button: "Open Thesis",
    url: "https://www.uni-due.de/soco/teaching/theses/overview.php",
  },
  {
    img: coursesImg,
    title: "Courses",
    description:
      "We offer lectures, seminars, and practical courses in learning technologies, web technologies, data science and visual analytics.",
    button: "View Courses",
    url: "https://www.uni-due.de/soco/teaching/courses/overview.php",
  },
  {
    img: researchImg,
    title: "Research",
    description:
      "We conduct applied research into intelligent data-intensive systems and their application in social media and technology-enhanced learning.",
    button: "View Research",
    url: "https://www.uni-due.de/soco/research/research-topics.php",
  },
];

export default activities;
