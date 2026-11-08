import ahmedImg from "@/assets/team/ahmed.jpg";
import ayeshaImg from "@/assets/team/ayesha.jpg";
import bilalImg from "@/assets/team/bilal.jpg";
import sanaImg from "@/assets/team/sana.jpg";
import usmanImg from "@/assets/team/usman.jpg";
import hiraImg from "@/assets/team/hira.jpg";
import zainImg from "@/assets/team/zain.jpg";
import mahnoorImg from "@/assets/team/mahnoor.jpg";
import hamzaImg from "@/assets/team/hamza.jpg";
import fatimaImg from "@/assets/team/fatima.jpg";
import classroom from "@/assets/classroom.jpg";
import agencyTeam from "@/assets/agency_team.jpg";
import branding from "@/assets/branding_project.jpg";
import analytics from "@/assets/analytics_project.jpg";

export const images = { classroom, agencyTeam, branding, analytics };

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const courses = [
  { t: "AI Automation", d: "AI tools, workflow automation and practical AI implementation." },
  { t: "Digital Marketing", d: "Strategy, social media, campaigns, content and funnels." },
  { t: "Finance & Budgeting", d: "Budget planning and practical money management." },
  { t: "Graphic Designing", d: "Design fundamentals, branding assets and social creatives." },
  { t: "SEO", d: "On-page, off-page, technical SEO and keyword strategy." },
  { t: "Photography & Videography", d: "Composition, lighting, shooting and production workflow." },
  { t: "Video Editing", d: "Storytelling, short-form content and post-production." },
  { t: "Acting", d: "Camera confidence, expression and performance basics." },
];

export const services = [
  {
    t: "Lead Generation",
    d: "Finding and developing qualified business opportunities through targeted digital systems.",
    points: ["Targeted campaigns", "Landing pages", "Lead nurturing"],
  },
  {
    t: "Digital Marketing",
    d: "Strategy, campaigns, social media, content and digital growth execution.",
    points: ["Social media", "Paid ads", "Content plans"],
  },
  {
    t: "AI Automation",
    d: "Automating repetitive workflows, customer processes and business operations with AI.",
    points: ["Chat assistants", "Workflow automation", "CRM integration"],
  },
  {
    t: "SEO",
    d: "Improving organic visibility, search performance and long-term discoverability.",
    points: ["Technical audits", "Keyword strategy", "Content optimization"],
  },
  {
    t: "Brand Building",
    d: "Positioning, identity, content direction and digital presence designed for growth.",
    points: ["Brand identity", "Positioning", "Visual systems"],
  },
  {
    t: "Training for Teams",
    d: "Practical workshops from our Institute so your own team becomes independent.",
    points: ["Custom workshops", "Hands-on practice", "Follow-up support"],
  },
];

export const team = [
  {
    name: "Ahmed Raza",
    role: "Founder & CEO",
    bio: "Started Digi Turtles to turn beginners into independent professionals.",
    img: ahmedImg,
  },
  {
    name: "Ayesha Khan",
    role: "Head of Institute",
    bio: "Designs the Learn → Practice → Build learning paths.",
    img: ayeshaImg,
  },
  {
    name: "Bilal Hussain",
    role: "AI Automation Lead",
    bio: "Builds AI workflows that save businesses hours every week.",
    img: bilalImg,
  },
  {
    name: "Sana Malik",
    role: "Digital Marketing Strategist",
    bio: "Plans campaigns that turn attention into leads.",
    img: sanaImg,
  },
  {
    name: "Usman Tariq",
    role: "SEO Specialist",
    bio: "Helps brands get found on search, month after month.",
    img: usmanImg,
  },
  {
    name: "Hira Shah",
    role: "Creative Director",
    bio: "Leads brand identity and visual design projects.",
    img: hiraImg,
  },
  {
    name: "Zain Ali",
    role: "Video Production Lead",
    bio: "Shoots and edits stories for brands and students.",
    img: zainImg,
  },
  {
    name: "Mahnoor Iqbal",
    role: "Graphic Design Mentor",
    bio: "Teaches design fundamentals with real client briefs.",
    img: mahnoorImg,
  },
  {
    name: "Hamza Qureshi",
    role: "Lead Generation Manager",
    bio: "Builds systems that bring in qualified opportunities.",
    img: hamzaImg,
  },
  {
    name: "Fatima Noor",
    role: "Community & Student Success",
    bio: "Supports every little turtle on their journey.",
    img: fatimaImg,
  },
];

export const projects = [
  {
    t: "Retail Brand Refresh",
    cat: "Brand Building",
    img: branding,
    d: "New identity, social templates and launch content for a local retail brand.",
  },
  {
    t: "Lead Engine for a Clinic",
    cat: "Lead Generation",
    img: analytics,
    d: "Landing pages and targeted campaigns to bring in steady appointment requests.",
  },
  {
    t: "Student Showcase Cohort",
    cat: "Institute",
    img: classroom,
    d: "Students built real portfolios by working on supervised client briefs.",
  },
  {
    t: "AI Customer Assistant",
    cat: "AI Automation",
    img: analytics,
    d: "An automated assistant answering common customer questions around the clock.",
  },
  {
    t: "Restaurant Social Growth",
    cat: "Digital Marketing",
    img: agencyTeam,
    d: "Content calendar, short videos and paid campaigns for a restaurant chain.",
  },
  {
    t: "Search Visibility Boost",
    cat: "SEO",
    img: branding,
    d: "Technical fixes and content plan to grow organic traffic for an online store.",
  },
];

export const posts = [
  {
    slug: "why-the-turtle",
    t: "Why We Chose the Turtle",
    cat: "Our Story",
    date: "Nov 2, 2026",
    img: classroom,
    excerpt: "Not because it is the fastest — because it keeps moving.",
    body: [
      "Every journey begins with a first step. For a sea turtle, that journey starts the moment it breaks free from the sand and heads toward the ocean.",
      "We chose the turtle because it represents the beginner: someone who may start small and have a lot to learn, but keeps going. With the right guidance, that same turtle becomes skilled, confident and independent.",
      "That is Digi Turtles: digital skills plus the turtle mindset.",
    ],
  },
  {
    slug: "ai-automation-for-small-business",
    t: "AI Automation for Small Businesses",
    cat: "AI",
    date: "Oct 24, 2026",
    img: analytics,
    excerpt: "Where to start automating without a big tech team.",
    body: [
      "Most small businesses repeat the same tasks every day: answering questions, following up on leads, updating sheets.",
      "Start by listing tasks you do more than ten times a week. Those are your first automation candidates.",
      "Automate one workflow, measure the time saved, then move to the next. Small steps compound.",
    ],
  },
  {
    slug: "learn-practice-build",
    t: "Learn → Practice → Build → Showcase",
    cat: "Institute",
    date: "Oct 12, 2026",
    img: classroom,
    excerpt: "How our teaching model turns knowledge into income.",
    body: [
      "Knowledge becomes valuable when it is applied to real problems.",
      "Our students learn a skill, practice it on exercises, build real projects, showcase them in a portfolio and then learn how to monetize.",
      "That cycle is what moves a learner from beginner to independent professional.",
    ],
  },
  {
    slug: "seo-basics-2026",
    t: "SEO Basics Every Brand Needs",
    cat: "SEO",
    date: "Sep 30, 2026",
    img: branding,
    excerpt: "Simple foundations that keep paying off.",
    body: [
      "Good SEO starts with understanding what your customers actually search for.",
      "Fix the technical basics, write pages that answer real questions, and keep publishing consistently.",
      "Like the turtle, SEO rewards consistency over speed.",
    ],
  },
  {
    slug: "brand-building-first-steps",
    t: "First Steps in Building a Brand",
    cat: "Branding",
    date: "Sep 18, 2026",
    img: agencyTeam,
    excerpt: "Positioning before logos.",
    body: [
      "A brand is more than a logo. It is how people remember and describe you.",
      "Start with who you serve and what makes you different, then build a visual identity that expresses it.",
      "Consistency across every touchpoint is what turns a business into a brand.",
    ],
  },
  {
    slug: "from-little-to-ninja-turtle",
    t: "From Little Turtle to Ninja Turtle",
    cat: "Community",
    date: "Sep 5, 2026",
    img: agencyTeam,
    excerpt: "The five stages of growth in our community.",
    body: [
      "Little Turtle: a beginner with curiosity. Growing Turtle: actively learning and practicing. Skilled Turtle: producing real work.",
      "Ninja Turtle: disciplined, independent and able to solve problems. Mentor Turtle: helping the next generation grow.",
      "We were once little turtles too — now we want to help the next turtles grow.",
    ],
  },
];
