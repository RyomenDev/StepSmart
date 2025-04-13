import HERO_BG from "../assets/images/hero_bg.jpg";
import ORGANIZATION_IMG from "../assets/images/about.jpg";

import { FaRobot, FaUserTie, FaBookOpen, FaChartLine } from "react-icons/fa";
import img1 from "../assets/images/course_1.jpg";
import img2 from "../assets/images/course_2.jpg";
import img3 from "../assets/images/course_3.jpg";
import img4 from "../assets/images/course_4.jpg";

const HomePageData = {
  hero: {
    hero_bg: HERO_BG,
    title_1: "Unlock Your Potential with Expert Mentorship",
    title_2: "Learn. Grow. Succeed.",
    subtitle:
      "Join our community and get access to tailored mentorship, structured courses, and a supportive network to accelerate your career.",
    ctaText: "Get Started",
    ctaLink: "#",
  },
  organization: {
    title: "The Organisation",
    intro:
      "UNNAT - EUROPE Unnat provides the platform for students and professionals that allows direct interaction. The platform will guide the students in unconventional professions.",
    points: [
      "Connecting the enthusiasts with professionals from the field.",
      "Building a knowledge repository filled with diverse experiences.",
      "Constructing a community of likeminded people and evolving the profession.",
    ],
    closing: "Because we believe in making learning accessible.",
    image: ORGANIZATION_IMG,
  },
  featuresData: [
    {
      icon: <FaRobot size={40} className="text-blue-600" />,
      img: img1,
      title: "Mock Interviews",
      description:
        "Practice with our interviewer who adapts to your responses and simulates real interview conditions.",
    },
    {
      icon: <FaUserTie size={40} className="text-purple-600" />,
      img: img2,
      title: "Expert Mentoring",
      description:
        "Connect with industry professionals who provide personalized guidance and insider knowledge.",
    },
    {
      icon: <FaBookOpen size={40} className="text-green-600" />,
      img: img3,
      title: "Interactive Courses",
      description:
        "Learn interview techniques through engaging, interactive courses designed by industry experts.",
    },
    {
      icon: <FaChartLine size={40} className="text-yellow-500" />,
      img: img4,
      title: "Real-Time Feedback",
      description:
        "Receive instant analysis of your performance with actionable insights to improve your skills.",
    },
  ],
  testimonials: [
    {
      name: "Ananya Sharma-1",
      feedback:
        "The mentors here genuinely care. The one-on-one sessions gave me clarity and direction in my software career.",
      role: "Software Engineer Intern at Google",
    },
    {
      name: "Ananya Sharma-2",
      feedback:
        "The mentors here genuinely care. The one-on-one sessions gave me clarity and direction in my software career.",
      role: "Software Engineer Intern at Google",
    },
    {
      name: "Ravi Verma-1",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-2",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-3",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-4",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-5",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-6",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
    {
      name: "Ravi Verma-7",
      feedback:
        "The courses are beginner-friendly and well structured. I was able to land my first internship within 3 months.",
      role: "Frontend Developer Intern",
    },
  ],
  teamMembers: [
    {
      name: "Sanket",
      role: "Product Manager",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Ankit",
      role: "Designer",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Achutya",
      role: "Investment Planner",
      img: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    {
      name: "Member-4",
      role: "Financial Analyst",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  ],
};

export default HomePageData;
