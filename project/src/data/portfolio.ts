export const profileData = {
  name: 'Yuvika Singodia',
  role: 'B.Tech IT Student | AI & Machine Learning Enthusiast | Aspiring Software Developer',
  tagline: 'Building AI and machine learning solutions with modern technologies',
  bio: 'I am a B.Tech Information Technology student passionate about artificial intelligence, machine learning, and problem solving. I enjoy building modern web applications, exploring AI models, and creating user-friendly digital experiences. Through projects, internships, and continuous learning, I am developing strong skills in Java, Python, React, AI technologies, and machine learning concepts.',
  email: 'yuvikasingodia@gmail.com',
  emailDisplay: 'yuvikasingodia@gmail.com',
  phone: '+91-9216630253',
  location: 'Jaipur, India',
  github: 'https://github.com/YuvikaSingodia10',
  linkedin: 'https://linkedin.com/in/yuvikasingodia',
};

export const typingPhrases = [
  'Aspiring Software Developer',
  'IT Engineering Student',
  'AI Enthusiast',
  'Machine Learning Learner',
  'Problem Solver',
];

export const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Certifications', value: '6+' },
  { label: 'Technologies', value: '15+' },
];

export type Achievement = {
  id: number;
  icon: 'trophy' | 'pen' | 'code';
  title: string;
  date: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    icon: 'trophy',
    title: 'Outstanding Intern Performance',
    date: 'Jan 2025',
    description: 'Recognized for delivering high-quality work and fast learning in internship projects.',
  },
  {
    id: 2,
    icon: 'pen',
    title: 'Technical Article Published',
    date: 'Jun 2025',
    description: 'Published a tutorial on building AI-powered web interfaces with React and Tailwind CSS.',
  },
  {
    id: 3,
    icon: 'code',
    title: 'Project Showcase Winner',
    date: 'Sep 2025',
    description: 'Won recognition for a polished AI-focused web application presented during a coding showcase.',
  },
];

export const skills = {
  frontend: [
    { name: 'HTML', level: 9, icon: 'code' },
    { name: 'CSS', level: 9, icon: 'palette' },
    { name: 'JavaScript', level: 8, icon: 'braces' },
    { name: 'React.js', level: 7, icon: 'atom' },
    { name: 'Tailwind CSS', level: 8.5, icon: 'wind' },
  ],
  programming: [
    { name: 'Java', level: 9, icon: 'coffee' },
    { name: 'Python', level: 8, icon: 'snake' },
    { name: 'C++', level: 7, icon: 'cpu' },
  ],
  backend: [
    { name: 'Node.js', level: 7.5, icon: 'server' },
    { name: 'Express.js', level: 7, icon: 'git-branch' },
  ],
  database: [
    { name: 'MongoDB', level: 7, icon: 'database' },
    { name: 'MySQL', level: 7.5, icon: 'database' },
  ],
  tools: [
    { name: 'Git', level: 8.5, icon: 'git-branch' },
    { name: 'Linux', level: 7, icon: 'terminal' },
    { name: 'VS Code', level: 9, icon: 'code-2' },
    { name: 'IntelliJ IDEA', level: 7.5, icon: 'code-2' },
  ],
  design: [
    { name: 'UI Design', level: 7.5, icon: 'layout' },
    { name: 'Video Editing', level: 9.5, icon: 'video' },
    { name: 'Power BI', level: 7.5, icon: 'graph' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'BridgeDrop',
    subtitle: 'Resource Sharing Platform',
    description: 'A platform designed to simplify the process of sharing, managing, and accessing resources efficiently. The project focuses on user-friendly design, seamless navigation, and practical problem-solving through technology.',
    features: [
      'Resource sharing workflow',
      'Organized content management',
      'Clean navigation and responsive UI',
      'Practical problem-solving features',
    ],
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Node.js'],
    image: '/project_images/5_bridge_drop.png',
    githubUrl: 'https://github.com/YuvikaSingodia10/BridgeDrop',
    featured: false,
  },
  {
    id: 2,
    title: 'AirWrite',
    subtitle: 'Touchless Text Input System',
    description: 'A real-time touchless text input system that allows users to write in the air using hand gestures through a webcam.',
    features: [
      'Hand tracking using MediaPipe',
      'OCR text recognition',
      'Gesture controls',
      'Virtual drawing canvas',
      'Real-time interaction',
    ],
    tech: ['Python', 'MediaPipe', 'OpenCV', 'OCR'],
    image: '/project_images/1_airwrite_ai.png',
    githubUrl: 'https://github.com/YuvikaSingodia10/airwrite_AI',
    featured: true,
  },
  {
    id: 3,
    title: 'HireBlind',
    subtitle: 'Smart Hiring Platform',
    description: 'A modern smart hiring platform developed during a hackathon focused on making recruitment more skill-based, unbiased, and efficient. Helps companies evaluate candidates beyond resumes.',
    features: [
      'Blind hiring workflow',
      'Candidate dashboard',
      'Recruiter dashboard',
      'JWT Authentication',
      'Skill-based evaluation',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image: '/project_images/4_hireblind.png',
    githubUrl: 'https://github.com/YuvikaSingodia10/COPULAR_PROJECT',
    featured: true,
  },
  {
    id: 4,
    title: 'Cadence',
    subtitle: 'Music Website',
    description: 'A responsive and visually engaging music website created using HTML, CSS, and JavaScript with a focus on clean user experience.',
    features: [
      'Music player UI',
      'Responsive design',
      'Interactive animations',
      'Clean user experience',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/project_images/2_cadence.png',
    githubUrl: 'https://github.com/YuvikaSingodia10/Cadence---Music-Player',
    featured: false,
  },
  {
    id: 5,
    title: 'Expense Tracker',
    subtitle: 'Financial Management App',
    description: 'A modern expense tracking web application for managing daily expenses efficiently with a clean, user-friendly interface.',
    features: [
      'Expense management',
      'Clean UI',
      'Responsive layout',
      'User-friendly interface',
    ],
    tech: ['React.js', 'Tailwind CSS', 'LocalStorage'],
    image: '/project_images/3_Expense_tracker.png',
    githubUrl: 'https://github.com/YuvikaSingodia10/Expense_Tracker',
    featured: false,
  },
  
];

export const certifications = [
  {
    id: 1,
    title: 'Linux Fundamentals',
    issuer: 'Red Hat Academy',
    certificateUrl: '/certificates/linux_redhat.pdf',
    date: 'April 2025',
  },
  {
    id: 2,
    title: 'Python Programming',
    issuer: 'Regex Software Services',
    certificateUrl: '/certificates/regex_python.pdf',
    date: 'September 2024',
  },
  {
    id: 3,
    title: 'Microsoft Power BI',
    issuer: 'CoursePe / Learn More Pro',
    certificateUrl: '/certificates/certificate_power_bi.pdf',
    date: 'October 2024',
  },
  {
    id: 4,
    title: 'Machine Learning for Data Science',
    issuer: 'IBM SkillsBuild',
    certificateUrl: '/certificates/ibm_machine_learning.pdf',
    date: 'March 2026',
  },
  {
    id: 5,
    title: 'Generative AI-Powered Chatbot',
    issuer: 'Regex Software Services',
    certificateUrl: '/certificates/regex_gen_ai.pdf',
    date: 'October 2024',
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Internships & Training', href: '#internships' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];
