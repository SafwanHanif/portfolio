// ---- Project data (shared knowledge base for AI assistant + project pages) ----
const PROJECTS = [
  // ── GenAI Projects (from GitHub) ──
  {
    id: "sales-agent",
    title: "Sales Agent",
    category: "genai",
    tagLabel: "GenAI",
    summary: "AI-powered inbound call handler that answers calls, answers questions, and books appointments for dental clinics and real estate agencies.",
    problem: "Small businesses miss calls after hours and struggle to book appointments efficiently.",
    features: [
      "Answers inbound calls 24/7 with natural AI voice",
      "Books appointments for dental clinics and real estate agencies",
      "Answers FAQs about services, hours, and pricing",
      "Detects emergencies and transfers to human operator",
      "Supports multiple business profiles and custom greetings",
    ],
    diagram: "Caller Dials In --> Twilio Voice --> Groq Whisper STT --> Groq Llama 3.3 70B --> gTTS Response",
    architecture: "Twilio Voice captures caller audio → Groq Whisper STT transcribes → Groq Llama 3.3 70B processes intent with tool calling → gTTS speaks the response. The agent can book appointments, answer FAQs, detect emergencies, and transfer to a human operator.",
    stack: ["Python", "FastAPI", "Groq", "Twilio", "gTTS"],
    github: "https://github.com/SafwanHanif/Sales_Agent",
    demo: "https://voice-sales-agent-eta.vercel.app",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "evently",
    title: "Evently — Event Manager",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Event management system for creating, viewing, and managing events with a clean FastAPI + PostgreSQL backend.",
    problem: "Managing events and tracking details is cumbersome without a dedicated tool.",
    features: [
      "Create, view, edit, and delete events",
      "PostgreSQL-backed persistent storage",
      "Clean server-rendered interface with Jinja2 templates",
      "Automatic database initialization on startup",
      "Responsive design for desktop and mobile",
    ],
    diagram: "User --> FastAPI Server --> PostgreSQL Database | FastAPI Server --> Jinja2 Templates --> HTML Pages",
    architecture: "FastAPI backend with PostgreSQL for event storage and Jinja2 templating for server-rendered pages. CRUD routes for listing, adding, viewing, and deleting events with automatic database initialization.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Jinja2"],
    github: "https://github.com/SafwanHanif/event-pg",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "ai-data-intelligence",
    title: "AI Data Intelligence Engine",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Upload datasets and analyze them with AI — auto profiling, anomaly detection, correlation analysis, and natural language querying.",
    problem: "Raw datasets are hard to interpret without writing complex code or using expensive tools.",
    features: [
      "Upload CSV and XLSX files for instant analysis",
      "Auto-profiling with statistics, missing values, and data types",
      "Anomaly and outlier detection across numeric columns",
      "Correlation analysis between dataset variables",
      "Natural-language querying powered by Groq LLM",
      "What-if simulation by scaling numeric columns",
    ],
    diagram: "Upload CSV/XLSX --> FastAPI Backend --> Pandas & NumPy --> Groq LLM Analysis --> Chart.js Visualizations",
    architecture: "FastAPI backend processes uploaded CSV/XLSX files with Pandas and NumPy. Groq LLM generates plain-English summaries and answers natural-language questions. What-if simulation scales numeric columns. Sessions persist via SQLite.",
    stack: ["Python", "FastAPI", "Groq", "Pandas", "Chart.js"],
    github: "https://github.com/SafwanHanif/ai-data-intelligence",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "interview-ai",
    title: "AI Interview Assistant",
    category: "genai",
    tagLabel: "GenAI",
    summary: "AI-powered interview platform with a TypeScript frontend and Python backend for conducting and assisting with job interviews.",
    problem: "Preparing for or conducting structured interviews is time-consuming and inconsistent across candidates.",
    features: [
      "Generates structured interview questions by role and seniority",
      "Evaluates candidate responses with AI feedback",
      "Modern TypeScript/React frontend for smooth UX",
      "Tracks candidate scores across multiple interview rounds",
      "Customizable question categories and difficulty levels",
    ],
    diagram: "Interviewer --> React/TypeScript Frontend --> Python Backend API --> AI Question Generator --> Structured Feedback",
    architecture: "Python backend handles AI logic with a TypeScript-based modern frontend (React/Vue). Generates interview questions, evaluates responses, and provides structured feedback.",
    stack: ["TypeScript", "Python", "React", "CSS"],
    github: "https://github.com/SafwanHanif/interview-ai",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "vision-speak",
    title: "VisionSpeak",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Upload an image and hear it described aloud — powered by Llama 4 Scout via Groq and browser Speech Synthesis.",
    problem: "Visually impaired users and anyone wanting quick image descriptions needs a fast, accessible tool.",
    features: [
      "Upload any image and get an instant spoken description",
      "Powered by Groq Llama 4 Scout for high-quality vision analysis",
      "Browser Speech Synthesis reads descriptions aloud — no extra TTS cost",
      "Fast image compression via Pillow for quick uploads",
      "Clean, accessible interface for visually impaired users",
    ],
    diagram: "Upload Image --> FastAPI Backend --> Pillow Compression --> Groq Llama 4 Scout --> Speech Synthesis Output",
    architecture: "FastAPI backend receives images, compresses them via Pillow, and sends to Groq's Llama 4 Scout API for description. The response is read aloud using the Web Speech API — no extra TTS cost or tokens.",
    stack: ["Python", "FastAPI", "Groq", "Llama 4", "Pillow"],
    github: "https://github.com/SafwanHanif/VisionSpeak",
    demo: "https://vision-speak-zeta.vercel.app",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "todo-fastapi",
    title: "FastAPI Todo App",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Clean and minimal to-do list application built with FastAPI and styled with CSS.",
    problem: "Everyone needs a straightforward way to track daily tasks without bloated project management tools.",
    features: [
      "Add, edit, and delete todo items",
      "Mark tasks as complete with visual feedback",
      "Persistent storage with FastAPI backend",
      "Minimal, clean HTML/CSS interface",
      "Quick setup — single command to run",
    ],
    diagram: "User --> FastAPI Server --> Jinja2 Templates --> Browser Interface",
    architecture: "FastAPI backend with HTML/CSS frontend served via templates. Simple CRUD operations for creating, viewing, and managing todo items with a clean interface.",
    stack: ["Python", "FastAPI", "HTML", "CSS"],
    github: "https://github.com/SafwanHanif/to-do-fastapi-app",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "fastapi-file-manager",
    title: "FastAPI File Manager",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Lightweight file upload and retrieval tool with a no-refresh HTML/JS interface powered by FastAPI.",
    problem: "Quick file sharing and retrieval between devices needs a simple, self-hosted solution.",
    features: [
      "Upload multiple files simultaneously",
      "Retrieve and download uploaded files instantly",
      "No page refresh — smooth Fetch API interactions",
      "Server-side file storage with FastAPI",
      "Lightweight and easy to self-host",
    ],
    diagram: "User --> HTML/JS Frontend --> Fetch API --> FastAPI Backend --> File Storage",
    architecture: "FastAPI backend handles multipart file uploads and stores them server-side. The vanilla JS frontend uses Fetch API for async operations, enabling a smooth no-refresh user experience.",
    stack: ["Python", "FastAPI", "JavaScript", "HTML"],
    github: "https://github.com/SafwanHanif/fastapi-html-frontend-demo",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "calendar-assistant",
    title: "Calendar Assistant",
    category: "genai",
    tagLabel: "GenAI",
    summary: "AI-enhanced productivity tool that syncs with Google Calendar and delivers daily AI summaries via Gemini.",
    problem: "Managing a busy schedule and getting meaningful insights from your calendar requires too much manual effort.",
    features: [
      "Syncs with Google Calendar for live event data",
      "AI-powered daily summaries via Gemini 1.5 Flash",
      "All-day event visibility in a dark-mode dashboard",
      "Streamlit frontend with executive-dashboard aesthetic",
      "Quick overview of your schedule without manual checking",
    ],
    diagram: "User --> Streamlit Dashboard --> Google Calendar API --> Gemini 1.5 Flash --> Daily AI Summary",
    architecture: "Streamlit frontend connects to Google Calendar API for event data and Gemini 1.5 Flash for AI-powered daily summaries. Crimson dark-mode UI provides an executive-dashboard feel with all-day event visibility.",
    stack: ["Python", "Streamlit", "Google Calendar API", "Gemini"],
    github: "https://github.com/SafwanHanif/Calendar-Assistant",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Movie recommendation app that suggests films based on your preferences — built with Python.",
    problem: "Choosing what to watch from endless streaming options leads to decision fatigue.",
    features: [
      "Suggests movies based on user preferences",
      "Python-based recommendation engine",
      "Easy setup with dev-container support",
      "Processes movie metadata for personalized results",
    ],
    diagram: "User Preferences --> Python Engine --> Movie Database --> Recommendations",
    architecture: "Python-based recommendation engine with a dev-container setup for easy onboarding. Processes movie data to generate personalized suggestions based on user preferences.",
    stack: ["Python"],
    github: "https://github.com/SafwanHanif/Movie_recommendation",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },


  {
    id: "ai-chat-app",
    title: "AI Chat App",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Full-stack ChatGPT-style AI chat application with streaming responses, JWT auth, and multi-model support.",
    problem: "Building a modern AI chat interface with streaming, session management, and authentication from scratch is complex.",
    features: [
      "Real-time token-by-token streaming via WebSocket",
      "JWT-based user authentication and session management",
      "Multi-model support — switch between Groq Llama variants",
      "Auto-generated chat titles and full-text search across chats",
      "Export conversations to Markdown or TXT with syntax highlighting",
    ],
    diagram: "User --> HTML/JS Chat UI --> WebSocket --> FastAPI Backend --> Groq Llama 3.3 70B | SQLAlchemy + JWT --> User Sessions",
    architecture: "FastAPI backend with SQLAlchemy and JWT authentication for user management. WebSocket-powered token-by-token streaming from Groq Llama 3.3 70B. Features chat session management, auto-generated titles, search, and export to Markdown/TXT with syntax-highlighted Markdown rendering.",
    stack: ["Python", "FastAPI", "Groq", "WebSocket", "SQLAlchemy"],
    github: "https://github.com/SafwanHanif/AI-Chat-App",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "receipt-tracker",
    title: "Smart Receipt & Expense Tracker",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Scan receipts with your phone camera — OCR extracts items, AI categorizes spending, with budget alerts and PDF reports.",
    problem: "Tracking expenses from receipts is tedious and often left undone, making budgeting harder.",
    features: [
      "Scan receipts with phone camera using Flutter",
      "Tesseract OCR extracts item details automatically",
      "AI categorizes spending via Groq Llama 3.3 70B",
      "Monthly analytics with interactive pie charts",
      "Budget alerts and PDF report export",
    ],
    diagram: "Phone Camera --> Flutter App --> FastAPI Backend --> Tesseract OCR --> Groq AI --> Analytics & Reports",
    architecture: "Flutter/Dart frontend handles camera scanning and UI. FastAPI backend runs Tesseract OCR for text extraction and Groq Llama 3.3 70B for AI categorization. Features monthly pie-chart analytics, budget alerts, and PDF report export via ReportLab. SQLite for local storage.",
    stack: ["Flutter", "Dart", "FastAPI", "Python", "Groq", "Tesseract"],
    github: "https://github.com/SafwanHanif/Receipt_Tracker",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "nexus-ai",
    title: "NEXUS — AI Communication Agent",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Send WhatsApp messages and emails through natural language — the AI interprets requests, looks up contacts, and confirms before sending.",
    problem: "Managing multiple communication channels with different contacts and tones is time-consuming.",
    features: [
      "Send WhatsApp messages through natural language commands",
      "Send emails via SMTP/Gmail with AI drafting",
      "Smart contact lookup and tone selection (casual/professional)",
      "Conversation memory for multi-step communication tasks",
      "Demo mode works without Twilio or Gmail credentials",
    ],
    diagram: "User Command --> FastAPI Backend --> Groq Intent Parsing --> Twilio WhatsApp / SMTP Email --> Message Sent",
    architecture: "FastAPI backend with Groq Llama 3.3 70B for intent parsing, Twilio for WhatsApp, and SMTP/Gmail API for email. Features smart contact lookup, tone selection, conversation memory, email summaries, and demo mode when credentials are not configured.",
    stack: ["Python", "FastAPI", "Groq", "Twilio", "SQLite"],
    github: "https://github.com/SafwanHanif/AI-Communication-Assistant",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "smart-order-assistant",
    title: "Smart Order Assistant",
    category: "genai",
    tagLabel: "GenAI",
    summary: "AI that connects to your Gmail, finds order emails, and lets you ask questions about your purchases in plain English.",
    problem: "Tracking online orders across multiple stores and emails is chaotic and easy to lose track of.",
    features: [
      "OAuth2 Gmail integration for read-only inbox access",
      "AI parses order details from email receipts",
      "Natural-language chat: ask 'Where is my Nike order?'",
      "Automatic delay detection and return deadline extraction",
      "React frontend with FastAPI backend",
    ],
    diagram: "Gmail OAuth2 --> FastAPI Backend --> Groq Email Parsing --> SQLite Storage --> React Chat UI",
    architecture: "FastAPI backend with Gmail OAuth2 read-only access fetches order emails from the last 90 days. Groq Llama models parse structured data and power a natural-language chat interface. SQLite storage, React/Vite frontend, and automatic delay and return deadline detection.",
    stack: ["Python", "FastAPI", "React", "Groq", "Gmail API", "SQLite"],
    github: "https://github.com/SafwanHanif/smart-order-assistant",
    demo: "#",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "adalat-ai",
    title: "Adalat AI — Legal Document Analyzer",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Upload legal documents for plain-language summaries, risk assessment, and AI-powered Q&A.",
    problem: "Legal documents are dense and hard to understand without a lawyer.",
    features: [
      "Upload PDF, DOCX, or TXT legal documents",
      "Plain-language summaries and document type classification",
      "Risk severity ratings (High/Medium/Low) with explanations",
      "What-if outcome scenarios based on document details",
      "Interactive AI chat for document Q&A with streaming responses",
      "Built-in sample documents to test the system",
    ],
    diagram: "Upload Document --> FastAPI Backend --> Groq Llama 3.3 70B --> Summary / Risk Assessment / AI Chat",
    architecture: "FastAPI backend with Groq Llama 3.3 70B analyzes PDF/DOCX/TXT uploads. Features document classification, plain-language summaries, risk severity ratings, what-if outcome scenarios, suggested lawyer questions, and interactive streaming chat. React + Vite frontend deployed on PythonAnywhere.",
    stack: ["Python", "FastAPI", "Groq", "React", "PythonAnywhere"],
    github: "https://github.com/SafwanHanif/Adalat_AI",
    demo: "https://safwanhanif.pythonanywhere.com",
    images: [],
    figmaEmbed: ""
  },
  {
    id: "reading-assistant",
    title: "AI Reading Assistant",
    category: "genai",
    tagLabel: "GenAI",
    summary: "Paste any article URL for focus-mode reading, AI summaries, reading mode rewrites, quizzes, and text-to-speech.",
    problem: "Reading long articles online is cluttered with ads and distractions.",
    features: [
      "Focus Mode strips ads and clutter from any article",
      "Multi-length summaries: short, medium, or detailed",
      "Reading mode rewrites for students, professionals, or children",
      "AI highlighting of key points and facts",
      "Quiz and flashcard generation from article content",
      "Dark, sepia, high-contrast, and dyslexia-friendly themes",
      "Built-in text-to-speech via browser SpeechSynthesis",
    ],
    diagram: "Article URL --> FastAPI Backend --> readability-lxml --> Groq Llama 3.3 70B --> Summary / Quiz / Tutor",
    architecture: "FastAPI backend extracts clean article text via readability-lxml and BeautifulSoup. Groq Llama 3.3 70B powers multi-length summaries, reading-mode rewrites, difficulty analysis, key-point highlighting, AI tutor explanations, and quiz generation. Vanilla JS frontend with accessible themes and browser SpeechSynthesis TTS.",
    stack: ["Python", "FastAPI", "Groq", "BeautifulSoup", "JavaScript"],
    github: "https://github.com/SafwanHanif/Reading-Assistant",
    demo: "https://reading-assistant-six.vercel.app",
    images: [],
    figmaEmbed: ""
  },
  // ── UI/UX Design Projects ──
  {
    id: "kprts",
    title: "KPRTS — Government Complaint App",
    category: "uiux",
    tagLabel: "UI/UX",
    summary: "Led the design of a comprehensive government complaint app — streamlining how citizens submit and track applications.",
    problem: "Citizens struggle with opaque, paper-based government complaint processes — no visibility into submission status, long wait times, and no feedback loop.",
    research: "Studied existing government service portals and conducted user interviews to identify pain points in complaint tracking and status visibility.",
    process: "Designed end-to-end complaint submission and tracking flow in Figma. Focused on reducing form friction, providing clear status indicators, and building trust through transparent tracking.",
    stack: ["Figma", "FigJam", "Wireframing", "Prototyping"],
    github: "#",
    demo: "#",
    images: [],
    figmaEmbed: "https://embed.figma.com/proto/EaZz4CaIYTGYaInhmduIFQ/KPRTS?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&embed-host=share",
    features: [
      "End-to-end complaint submission flow with guided form steps",
      "Real-time complaint tracking dashboard with status indicators",
      "Clear categorization for efficient routing to departments",
      "Paperless submission reducing manual follow-ups",
      "Status notifications keeping citizens informed at every stage"
    ]
  },
  {
    id: "cheezious-redesign",
    title: "Cheezious App Redesign (Concept)",
    category: "uiux",
    tagLabel: "UI/UX",
    summary: "Redesigned the Cheezious mobile app as a UI/UX practice project — improving navigation, menu browsing, and the ordering experience.",
    problem: "The original Cheezious app had cluttered navigation and a confusing menu browsing flow that slowed down the ordering process.",
    research: "Analyzed the existing Cheezious app UX for pain points in navigation depth, menu categorization, and checkout flow efficiency.",
    process: "Focused on simplifying navigation structure, improving menu taxonomy, and streamlining the order-to-checkout flow with a cleaner visual hierarchy.",
    stack: ["Figma", "Prototyping"],
    github: "#",
    demo: "#",
    images: [],
    figmaEmbed: "https://embed.figma.com/proto/1FIC5oMXdSGNgIPhiSiwzU/Cheezious-App?node-id=23-3&p=f&viewport=420%2C316%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=23%3A3&page-id=0%3A1&embed-host=share",
    features: [
      "Simplified bottom navigation for one-handed mobile use",
      "Improved menu taxonomy with category-based browsing",
      "Streamlined order customization before adding to cart",
      "Faster checkout flow with saved addresses and payment",
      "Visual hierarchy improvements for better scanability"
    ]
  },
  {
    id: "utorrent-redesign",
    title: "uTorrent Mobile App Redesign (Practice)",
    category: "uiux",
    tagLabel: "UI/UX",
    summary: "Designed an improved mobile experience for torrent downloading and file management through user-centered UI/UX principles.",
    problem: "The uTorrent mobile interface was cluttered and hard to navigate — downloading and managing torrents on mobile felt overwhelming.",
    research: "Reviewed torrent client UX patterns and user complaints about mobile interface density, download management, and file organization.",
    process: "Focused on decluttering the interface, improving download queue management, and creating clearer visual feedback for active/seeded/paused torrents.",
    stack: ["Figma", "Prototyping"],
    github: "#",
    demo: "#",
    images: [],
    figmaEmbed: "https://embed.figma.com/proto/0tepZOEPp5mY9z0kDKrVvO/Utorrent-App?node-id=38-431&page-id=0%3A1&starting-point-node-id=38%3A431&embed-host=share",
    features: [
      "Decluttered interface with clear active/seeded/paused status",
      "Improved download queue management and prioritization",
      "Simplified file selection and management per torrent",
      "Intuitive search and filter for large torrent libraries",
      "Clean visual feedback for download progress and completion"
    ]
  },
  {
    id: "home-service-marketplace",
    title: "Home Service Marketplace",
    category: "uiux",
    tagLabel: "UI/UX",
    summary: "Booking platform connecting users with electricians, mechanics, and home service pros.",
    problem: "Finding trusted, available local service providers quickly is hard and trust-deficient.",
    research: "Mapped user journeys for urgent vs. scheduled service requests; identified trust signals (ratings, response time) as key UI priorities.",
    process: "Built a design system for provider cards, availability states, and booking confirmation flows.",
    stack: ["Figma", "Design Systems", "Wireframing"],
    github: "#",
    demo: "#",
    images: [],
    figmaEmbed: "https://embed.figma.com/proto/XYdYaGW4cqSp2QpqykR0O8/Untitled?page-id=0%3A1&node-id=9-70&p=f&viewport=-1154%2C-310%2C0.45&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A70&embed-host=share",
    features: [
      "Browse and search local service providers by category",
      "Provider cards with key trust signals — ratings, response time, pricing",
      "Urgent vs. scheduled booking flow for different service needs",
      "Real-time availability status and instant booking confirmation",
      "Complete design system for consistent provider-to-booking experience"
    ]
  },
  {
    id: "deep-proctor",
    title: "DeepProctor",
    category: "uiux",
    tagLabel: "UI/UX",
    summary: "Clean and modern dashboard for invigilators to monitor exams, track incidents, and manage proctoring sessions seamlessly.",
    problem: "Invigilators need a clear, intuitive interface to monitor multiple exam sessions, track incidents in real time, and manage proctoring workflows without cognitive overload.",
    research: "Focused on reducing cognitive load for invigilators during high-stakes exam monitoring — prioritizing glanceable status indicators, clear incident classification, and minimal navigation depth.",
    process: "Designed in Figma with a focus on dashboard clarity, session management flows, and incident tracking. Iterated on information hierarchy to surface the most critical data (active sessions, flagged incidents) at the top.",
    stack: ["Figma", "Prototyping"],
    github: "#",
    demo: "#",
    images: [],
    figmaEmbed: "https://embed.figma.com/proto/shALCKR2kJZ7ONVcK1T0wN/Deep-Proctor?page-id=0%3A1&node-id=1-2&p=f&viewport=20%2C311%2C0.04&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&embed-host=share",
    features: [
      "Real-time exam session monitoring dashboard at a glance",
      "Incident tracking with severity classification and timestamps",
      "Quick-action tools for flagging and resolving proctoring issues",
      "Session management with join/leave controls for invigilators",
      "Glanceable status indicators for active, flagged, and completed sessions"
    ]
  }
];

// ---- Boot sequence (hero terminal intro) ----
function runBootSequence(el, onDone) {
  const lines = [
    "> initializing safwan_hanif_portfolio.exe",
    "> loading modules: ui_ux.dll, genai_core.dll",
    "> connecting to creative_engine... [OK]",
    "> render ready."
  ];
  let i = 0;
  function next() {
    if (i >= lines.length) { onDone && onDone(); return; }
    const span = document.createElement("span");
    span.className = "line" + (i === lines.length - 1 ? " ok" : "");
    span.textContent = lines[i];
    el.appendChild(span);
    i++;
    setTimeout(next, 280);
  }
  next();
}

// ---- Simple keyword-based AI assistant (client-side, no backend needed) ----
function aiRespond(query) {
  const q = query.toLowerCase();

  if (/genai|ai project|llm|rag|agent/.test(q)) {
    const list = PROJECTS.filter(p => p.category === "genai").map(p => p.title).join(", ");
    return "GenAI projects: " + list + ". Open the Projects page and filter by GenAI for details.";
  }
  if (/ui\/?ux|design project/.test(q)) {
    const list = PROJECTS.filter(p => p.category === "uiux").map(p => p.title).join(", ");
    return "UI/UX projects: " + list + ". Check the Projects page, filtered by UI/UX.";
  }
  if (/technolog|stack|tools|skills/.test(q)) {
    return "Safwan Hanif works across Figma/FigJam for design, and builds GenAI apps with Python, FastAPI, Groq, Twilio, Streamlit, Google APIs, and modern frontend frameworks like TypeScript and React.";
  }
  if (/contact|email|hire|reach/.test(q)) {
    return "You can reach Safwan Hanif via the Contact section below, or LinkedIn/GitHub linked in the footer.";
  }
  if (/resume|cv/.test(q)) {
    return "Use the Resume button in the hero section at the top of the Home page.";
  }
  // fallback: try matching a specific project name
  const match = PROJECTS.find(p => q.includes(p.title.toLowerCase().split(" ")[0]));
  if (match) {
    return match.title + ": " + match.summary;
  }
  return "Try asking: 'Show me GenAI work', 'What technologies does Safwan Hanif use?', or 'Tell me about Safwan Hanif's projects'.";
}

function initAIWidget() {
  const toggle = document.getElementById("ai-toggle");
  const panel = document.getElementById("ai-panel");
  const log = document.getElementById("ai-log");
  const input = document.getElementById("ai-input");
  const sendBtn = document.getElementById("ai-send");
  if (!toggle) return;

  toggle.addEventListener("click", () => panel.classList.toggle("open"));

  function send() {
    const val = input.value.trim();
    if (!val) return;
    const you = document.createElement("div");
    you.className = "msg you";
    you.textContent = "> " + val;
    log.appendChild(you);

    const bot = document.createElement("div");
    bot.className = "msg bot";
    bot.textContent = aiRespond(val);
    log.appendChild(bot);

    log.scrollTop = log.scrollHeight;
    input.value = "";
  }
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(); });
}

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    btn.textContent = "☀";
  }
  btn.addEventListener("click", () => {
    const html = document.documentElement;
    if (html.getAttribute("data-theme") === "light") {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☾";
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      btn.textContent = "☀";
    }
  });
}

function initPageTransition() {
  const overlay = document.createElement("div");
  overlay.id = "page-transition";
  overlay.textContent = "> navigating";
  document.body.appendChild(overlay);
  document.body.addEventListener("click", function(e) {
    var a = e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href || href === "#" || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return;
    e.preventDefault();
    overlay.classList.add("active");
    setTimeout(function() { window.location.href = href; }, 200);
  });
}

function setupReveal() {
  var sel = "section, .skill-card, .project-card, .detail-section, .term, .detail-hero";
  var els = document.querySelectorAll(sel);
  if (!els.length) return;
  els.forEach(function(el) {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
  });
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); }
    });
  }, { threshold: 0.08 });
  els.forEach(function(el) { obs.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => {
  initAIWidget();
  initThemeToggle();
  initPageTransition();
  setupReveal();
});
