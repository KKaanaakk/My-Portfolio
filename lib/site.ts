export const site = {
  name: 'Kanak Joshi',
  role: 'Full-stack developer',
  city: 'Pune, India',
  coords: { lat: '18.5204° N', lng: '73.8567° E' },
  email: 'Kanak31.joshi@gmail.com',
  phone: '+91 7440898360',
  phoneHref: 'tel:+917440898360',
  github: 'https://github.com/kanakjoshi',
  linkedin: 'https://www.linkedin.com/in/kanak-joshi-766104212/',
  now: {
    company: 'Dvio Digitals',
    role: 'Software Developer',
    focus: 'Live analytics and an AI chatbot in production',
  },
};

export const navLinks = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'Spec' },
  { href: '/experience', label: 'Log' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Ping' },
] as const;

export const experiences = [
  {
    company: 'Dvio Digitals',
    role: 'Software Developer',
    period: 'Jul 2025 — Present',
    start: '2025.07',
    current: true,
    tech: ['React.js', 'RR7', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python'],
    achievements: [
      'Shipped an analytics platform with real-time engagement metrics and audience insights across platforms',
      'Refactored frontend and API surfaces to cut waste and keep the product fast under load',
      'Designed and built an AI chatbot for assistance and automated insight generation',
    ],
  },
  {
    company: 'Skitre.ai',
    role: 'Software Developer',
    period: 'Jan 2024 — Jul 2025',
    start: '2024.01',
    current: false,
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'Python', 'REST'],
    achievements: [
      'Built recruitment-platform modules including AI video-resume tools and text, audio, and video agents',
      'Took features from blank file to production with reliability and auth as first-class work',
      'Worked with design and backend to ship responsive, low-latency interfaces',
    ],
  },
];

export const projects = [
  {
    title: 'CNN detection of TCP SYN flood attacks',
    kicker: 'IEEE ATNT',
    description:
      'A convolutional network that flags TCP SYN flood DDoS with better accuracy and scale than the classical ML baselines we compared it against. Published and presented at IEEE ATNT.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Keras'],
    featured: true,
  },
  {
    title: 'Signature recognition & document similarity',
    kicker: 'Research',
    description:
      'CNN signature identification plus Jaccard similarity to fetch records and check whether a document is the real thing.',
    tech: ['Python', 'Keras', 'TensorFlow', 'CNN'],
    featured: false,
  },
  {
    title: 'Weather application',
    kicker: 'Personal',
    description:
      'Live conditions from OpenWeather, built as a tight React interface with a responsive layout and clean API wiring.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'OpenWeather'],
    featured: false,
  },
];

export const education = [
  {
    degree: 'M.Tech, Computer Science',
    school: 'PES University, Bangalore',
    focus: 'Cyber Security',
    period: 'Feb 2023 — Jun 2024',
  },
  {
    degree: 'B.Tech, Computer Science',
    school: 'Parul University, Vadodara',
    focus: 'Computer Science Engineering',
    period: 'Jul 2018 — Jul 2022',
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    label: 'Systems',
    items: ['React.js', 'Next.js', 'Node.js', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    label: 'Ops',
    items: ['Docker', 'Git', 'MongoDB', 'MySQL', 'Tailwind CSS'],
  },
];

export const marks = [
  {
    title: 'Dotslash 24-hour hackathon',
    detail: 'Led Memory Mavericks. Finished in the top 10.',
  },
  {
    title: 'Research publication',
    detail: 'Published and presented work on network security and deep learning.',
  },
  {
    title: 'Web development certification',
    detail: 'Udemy',
  },
];
