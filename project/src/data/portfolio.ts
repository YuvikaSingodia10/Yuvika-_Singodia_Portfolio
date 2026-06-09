export const profileData = {
  name: 'Yuvika Singodia',
  role: 'IT Engineering Student | Software Developer | AI Enthusiast',
  tagline: 'Building the future, one line of code at a time',
  bio: 'I enjoy turning ideas into elegant web experiences that bridge modern UI, responsive design, and data-driven engineering. I bring clarity and polish to every project, especially when applying Java, React, and machine learning principles.',
  email: 'yuvikasingodia@gmail.com',
  emailDisplay: 'yuvikasingodia@gmail.com',
  phone: '+91-9216630253',
  location: 'Jaipur, India',
  github: 'https://github.com/yuvikasingodia',
  linkedin: 'https://linkedin.com/in/yuvikasingodia',
};

export const typingPhrases = [
  'Web Developer',
  'Java Developer',
  'AI Learner',
  'Problem Solver',
  'Creative Thinker',
];

export const stats = [
  { label: 'Projects Completed', value: '4+' },
  { label: 'Certifications', value: '6+' },
  { label: 'Technologies', value: '15+' },
  
];

export const skills = {
  frontend: [
    { name: 'HTML', level: 95, icon: 'code' },
    { name: 'CSS', level: 90, icon: 'palette' },
    { name: 'JavaScript', level: 85, icon: 'braces' },
    { name: 'React.js', level: 80, icon: 'atom' },
    { name: 'Tailwind CSS', level: 85, icon: 'wind' },
  ],
  programming: [
    { name: 'Java', level: 90, icon: 'coffee' },
    { name: 'Python', level: 80, icon: 'snake' },
    { name: 'C++', level: 70, icon: 'cpu' },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: 'server' },
    { name: 'Express.js', level: 70, icon: 'git-branch' },
  ],
  database: [
    { name: 'MongoDB', level: 70, icon: 'database' },
    { name: 'MySQL', level: 75, icon: 'database' },
  ],
  tools: [
    { name: 'Git', level: 85, icon: 'git-branch' },
    { name: 'Linux', level: 70, icon: 'terminal' },
    { name: 'VS Code', level: 90, icon: 'code-2' },
    { name: 'IntelliJ IDEA', level: 75, icon: 'code-2' },
  ],
  design: [
    { name: 'UI Design', level: 75, icon: 'layout' },
    { name: 'Video Editing', level: 95, icon: 'video' },
    { name: 'Power BI', level: 75, icon: 'graph' },
  ],
};

export const projects = [
  {
    id: 1,
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
    githubUrl: 'https://github.com/yuvikasingodia',
    featured: true,
  },
  {
    id: 2,
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
    githubUrl: 'https://github.com/yuvikasingodia',
    featured: true,
  },
  {
    id: 3,
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
    githubUrl: 'https://github.com/yuvikasingodia',
    featured: false,
  },
  {
    id: 4,
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
    githubUrl: 'https://github.com/yuvikasingodia',
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
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];
