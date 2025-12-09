import {
  Globe,
  Layout,
  Zap,
  Server,
  Code,
  Cpu,
  Layers,
  Flame,
  Activity,
} from "lucide-react";
import silicon1 from "@/assets/silicon-1.png";
import silicon2 from "@/assets/silicon-2.png";
import silicon3 from "@/assets/silicon-3.png";
import silicon4 from "@/assets/silicon-4.png";
import portfolio1 from "@/assets/portolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import billbd1 from "@/assets/billbd-1.png";
import billbd2 from "@/assets/billbd-2.png";
import billbd3 from "@/assets/billbd-3.png";

const mySelf = {
  headerTitle: "Full Stack Developer",
  hederDescription:
    "I’m a Full Stack Developer who builds modern, scalable, and user-focused web applications. I work across the entire development stack — from crafting clean, responsive interfaces with React, Next.js, TypeScript, and Tailwind, to building secure and efficient backend systems using Node.js, Express, and NestJS.At ShunnoIT (Rajshahi), I develop production-ready features, integrate APIs, optimize performance, and write maintainable code that simplifies complex problems. I’m passionate about continuous learning, clean architecture, and delivering solutions that create real impact",
};

// about info

const aboutInfo = {};

const projects = [
  {
    title: "ISP Billing Software",
    id: 1,
    projectName: "ISP Billing Software",
    icon: Globe,
    description:
      "A complete ISP billing and client management system. Automates package management, router integration, bandwidth control, invoice generation, client notifications, and provides a real-time dashboard with analytics. Ideal for ISPs to monitor and optimize operations efficiently.",
    tech: "React, Tailwind Css, TypeScript, Node.js, Nest js , MongoDB, MikroTik API",
    link: "https://billing.siliconisp.com/",
    children: {
      images: [silicon1, silicon2, silicon3, silicon4],
      projectName: "Silicon ISP Management System",
      description:
        "A complete ISP management platform including hotspot, network, inventory, billing, and client management with real-time monitoring and multi-branch support.",
      technologies: [
        "Tailwind CSS",
        "React",
        "Redux",
        "RTK Query",
        "NestJS",
        "MongoDB",
        "TypeScript",
        "MikroTik API",
      ],
      features: [
        {
          title: "Feature 1: PPPoe Management",
          subFeatures: [
            "Automated PPPoE Client Creation: Create PPPoE clients with unique usernames and passwords, assign packages, and set bandwidth limits automatically.",
            "Real-Time Speed Monitoring: Monitor client connection speeds in real-time, view online/offline status, and track data usage.",
            "MikroTik Integration: Seamlessly integrate with MikroTik routers for efficient PPPoE management and configuration.",
            "Bulk Client Operations: Perform bulk operations such as client creation, package assignment, and data limit updates for efficient management.",
          ],
        },
        {
          title: "Feature 2: Hotspot Management",
          subFeatures: [
            "Card Generation: Generate top-up cards with unique ID and PIN. Create cards with specified data limits.",
            "Card Recharge System: Allow clients to log in using their ID and PIN to recharge manually. Track expiration times and data limits.",
            "Hotspot Package Creation: Create customizable packages with specified pool/IP profiles.",
            "Package Assignment: Assign packages during client creation or card generation.",
            "Self-Branding Login Page: Customize the client login page with your ISP’s branding.",
            "Customer Self-Signup: Enable customers to sign up and make payments online, including OTP verification for added security.",
            "Distributor Panel: Manage card distribution with a reseller-like interface for hotspot clients.",
            "Client Portal: Provide clients with a portal to view their package details, remaining data, expiration dates, and more.",
          ],
        },
        {
          title: "Feature 3: Network Configuration",
          subFeatures: [
            "Mikrotik Configuration: Securely configure Mikrotik routers with integrated API support.",
            "OLT Configuration: Manage and configure Optical Line Terminals (OLT).",
            "Real-Time User Sync: Synchronize user data with Mikrotik information in real-time.",
            "PPPoE and Hotspot Management: Handle both PPPoE and Hotspot configurations seamlessly.",
            "Automated Mikrotik Server Backup: Schedule daily backups of your Mikrotik server to ensure data safety.",
          ],
        },
        {
          title: "Feature 4: Network Diagram & Monitoring",
          subFeatures: [
            "Google Map Integration: Visualize your entire network on Google Maps with detailed fiber rod and core color mapping.",
            "Real-Time Monitoring: Track the status of network devices and clients in real-time, receiving alerts for any changes.",
            "Device Location Mapping: Set and edit device locations on the map, including fiber rods and client ONUs.",
            "Reseller Customer Integration: Add reseller customers to the network diagram for comprehensive network management.",
          ],
        },
        {
          title: "Feature 5: Inventory Management",
          subFeatures: [
            "Total Inventory Solution: Manage all products with detailed information including serial numbers and barcodes.",
            "Vendor and Customer Management: Keep detailed records of vendors and customers.",
            "Purchase and Sale Management: Track product purchases, sales, stock, and supply management.",
            "Warranty and Assets Management: Check product warranties by serial number and manage company assetss efficiently.",
            "Instrument and Fiber Stock: Monitor stock summaries, including individual instruments and fiber/cable pieces.",
            "Damage Product List: Keep a record of damaged products for accountability.",
          ],
        },
        {
          title: "Feature 6: SMS/Email Module",
          subFeatures: [
            "Automated Notifications: Send automated SMS and email notifications for payment due, invoices, and other important updates.",
            "Promotional and Emergency Announcements: Notify clients about promotions and emergencies.",
            "Custom SMS Templates: Create and manage SMS templates for recurring messages.",
            "Payment Links and Package Changes: Send payment links and notifications for package changes via SMS.",
          ],
        },
        {
          title: "Feature 7: Configuration Settings",
          subFeatures: [
            "Box/Zone/SubZone Settings: Customize network settings including zones and connection types.",
            "Client and Billing Type Configuration: Define client types (e.g., home, corporate) and billing types (e.g., prepaid, postpaid).",
            "Responsive UI: Customize the user interface for client and admin portals, including language and theme settings.",
            "Invoice and Report Customization: Set invoice formats and report periods for better financial management.",
          ],
        },
        {
          title: "Feature 8: Branch Management",
          subFeatures: [
            "Multi-Branch Control: Super Merchants can manage multiple branches with individual credentials for each branch.",
            "Report Generation: Generate comprehensive reports for each branch to track performance and financial health.",
          ],
        },
        {
          title: "Feature 9: Dynamic Dashboard",
          subFeatures: [
            "Informative Graphs and Reports: Access various graphs and reports for client status, payments, problem tracking, and more.",
            "Real-Time Monitoring: View real-time data on online clients, income, expenses, and other key metrics.",
            "Monthly Tracking: Track monthly new clients, income, expenses, and performance metrics.",
          ],
        },
        {
          title: "Feature 10: Payment Gateway Settings",
          subFeatures: [
            "Multiple Payment Gateway Integration: Integrate with various payment gateways like Bkash, Nogod, Rocket, and SSL for secure transactions.",
            "Transaction Fee Settings: Configure processing fees for different payment methods.",
          ],
        },
        {
          title: "Feature 11: Role-Based Access Control",
          subFeatures: [
            "User Role Configuration: Define and assign roles with specific permissions for different users (e.g., admin, manager, staff).",
            "Secure Business Management: Ensure confidentiality and proper access control within the organization.",
          ],
        },
        {
          title: "Feature 12: Accounts Management",
          subFeatures: [
            "Expense Tracking: Track daily, weekly, monthly, and yearly expenses by category and employee.",
            "Vendor Payments: Manage payments to vendors and agents.",
            "Financial Records: Keep comprehensive records of all financial transactions.",
            "Profit and Loss Calculation: Automatically calculate profit or loss.",
            "Balance Sheet and Income Statement: Generate and print financial reports.",
          ],
        },
        {
          title: "Feature 13: Client Management",
          subFeatures: [
            "Comprehensive Client Profiles: Manage detailed client profiles with real-time speed and connection monitoring.",
            "Bulk Operations: Perform bulk operations for efficient client management.",
            "Information Sync with Mikrotik: Synchronize client information with Mikrotik for seamless management.",
            "Client Information Download: Download client information in various formats (PDF, Excel, CSV).",
          ],
        },
      ],
    },

    color: "text-blue-500",
  },
  {
    title: "Utility Bill Management System (BillBD)",
    icon: Zap,
    id: 2,
    projectName: "Utility Bill Management System (BillBD)",
    description:
      "A modern utility bill management platform designed to streamline monthly billing cycles, automate calculations, manage user roles, and provide admin dashboards with insightful analytics. Ensures secure, scalable, and efficient utility operations.",
    tech: "React, Tailwind Css, TypeScript, Node.js, Nest js , MongoDB,",
    link: "https://app.billbd.com/",
    children: {
      images: [billbd1, billbd2, billbd3],
      projectName: "Silicon ISP Management System",
      description:
        "A complete ISP management platform including hotspot, network, inventory, billing, and client management with real-time monitoring and multi-branch support.",
      technologies: [
        "Tailwind CSS",
        "React",
        "Redux",
        "RTK Query",
        "NestJS",
        "MongoDB",
        "TypeScript",
      ],
      features: [
        {
          title: "Feature 1: Monthly Billing Cycle Automation",
          subFeatures: [
            "Automated Bill Generation: Automatically generate monthly utility bills for all customers based on their usage data.",
            "Customizable Billing Cycles: Define and manage different billing cycles (monthly, quarterly, yearly) for various customer segments.",
            "Usage Data Integration: Seamlessly integrate with utility meters to fetch real-time usage data for accurate billing.",
          ],
        },
        {
          title: "Feature 2: SMS/Email Module",
          subFeatures: [
            "Automated Notifications: Send automated SMS and email notifications for payment due, invoices, and other important updates.",
            "Promotional and Emergency Announcements: Notify clients about promotions and emergencies.",
            "Custom SMS Templates: Create and manage SMS templates for recurring messages.",
            "Payment Links and Package Changes: Send payment links and notifications for package changes via SMS.",
          ],
        },

        {
          title: "Feature 3: Dynamic Dashboard",
          subFeatures: [
            "Informative Graphs and Reports: Access various graphs and reports for client status, payments, problem tracking, and more.",
            "Real-Time Monitoring: View real-time data on online clients, income, expenses, and other key metrics.",
            "Monthly Tracking: Track monthly new clients, income, expenses, and performance metrics.",
          ],
        },
        {
          title: "Feature 4: Payment Gateway Settings",
          subFeatures: [
            "Multiple Payment Gateway Integration: Integrate with various payment gateways like Bkash, Nogod, Rocket, and SSL for secure transactions.",
            "Transaction Fee Settings: Configure processing fees for different payment methods.",
          ],
        },
        {
          title: "Feature 5: Role-Based Access Control",
          subFeatures: [
            "User Role Configuration: Define and assign roles with specific permissions for different users (e.g., admin, manager, staff).",
            "Secure Business Management: Ensure confidentiality and proper access control within the organization.",
          ],
        },
        {
          title: "Feature 6: Accounts Management",
          subFeatures: [
            "Expense Tracking: Track daily, weekly, monthly, and yearly expenses by category and employee.",
            "Vendor Payments: Manage payments to vendors and agents.",
            "Financial Records: Keep comprehensive records of all financial transactions.",
            "Profit and Loss Calculation: Automatically calculate profit or loss.",
            "Balance Sheet and Income Statement: Generate and print financial reports.",
          ],
        },
        {
          title: "Feature 7: Client Management",
          subFeatures: [
            "Comprehensive Client Profiles: Manage detailed client profiles with real-time speed and connection monitoring.",
            "Bulk Operations: Perform bulk operations for efficient client management.",
            "Information Sync with Mikrotik: Synchronize client information with Mikrotik for seamless management.",
            "Client Information Download: Download client information in various formats (PDF, Excel, CSV).",
          ],
        },
      ],
    },
    color: "text-yellow-400",
  },

  {
    title: "Personal Portfolio Website",
    icon: Layout,
    id: 3,
    projectName: "Personal Portfolio Website",
    children: {
      images: [portfolio1, portfolio2, portfolio3],
      projectName: "Personal Portfolio Website",
      description:
        "A clean, responsive, and visually appealing personal portfolio website showcasing professional projects and skills. Features dark/light theme, SEO optimization, interactive components, and smooth animations.",
      technologies: [
        "Next js",
        "shadcn UI",
        "TypeScript",
        "Tailwind CSS",
        "Meta api",
        "Vimeo API",
      ],
      features: [
        {
          title: "Feature 1: Meta Api Integration",
          subFeatures: [
            "Integrated Meta Api for seamless communication with Meta services.",
            "Automated handling of Meta-related tasks within the portfolio website.",
            "Instagram Api Integration: Fetch and display Instagram posts dynamically.",
          ],
        },
        {
          title: "Feature 2: Vimeo Api Integration",
          subFeatures: [
            " Integrated Vimeo Api to showcase video content effectively.",
            " Smooth video playback and management using Vimeo's robust platform.",
          ],
        },
      ],
    },
    description:
      "A clean, responsive, and visually appealing personal portfolio website showcasing professional projects and skills. Features dark/light theme, SEO optimization, interactive components, and smooth animations.",
    tech: "Next.js, Tailwind CSS, ShadCN UI, TypeScript",
    link: "https://www.abdullahalfahim.com/",
    color: "text-purple-500",
  },
];

const articlesFAQ = [
  {
    title: "Mastering React for Modern Frontend Development",
    description:
      "Learn React core concepts including hooks, virtual DOM, component patterns, performance optimization, state management, and best practices.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    faqs: [
      {
        question: "What is the Virtual DOM?",
        answer:
          "The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first and then efficiently updates the real DOM only where changes occurred.",
      },
      {
        question: "Explain React hooks.",
        answer:
          "Hooks like useState, useEffect, and useRef let you use state and lifecycle features inside functional components without classes.",
      },
      {
        question: "What is the purpose of useEffect?",
        answer:
          "useEffect runs side effects in functional components. Examples include API calls, subscriptions, or manually updating the DOM.",
      },
      {
        question: "How to optimize React performance?",
        answer:
          "Use React.memo, useCallback, useMemo, code-splitting, lazy loading, and avoid unnecessary renders to improve performance.",
      },
    ],
  },
  {
    title: "A Complete Guide to Node.js Backend Architecture",
    description:
      "Understand Node.js backend architecture, asynchronous patterns, event loop, building APIs, working with databases, and scalability best practices.",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    faqs: [
      {
        question: "What is the Event Loop in Node.js?",
        answer:
          "The Event Loop handles asynchronous operations in Node.js. It allows non-blocking I/O operations by processing events and callbacks in a loop.",
      },
      {
        question: "What are callbacks, Promises, and async/await?",
        answer:
          "Callbacks are functions executed after async operations. Promises represent future values. async/await is syntactic sugar to handle Promises more cleanly.",
      },
      {
        question: "How to handle CORS in Node.js?",
        answer:
          "CORS (Cross-Origin Resource Sharing) allows you to define which domains can access your API. Use the 'cors' package or set headers manually.",
      },
      {
        question: "How to structure Node.js projects?",
        answer:
          "Organize by feature or layer (routes, controllers, services, models). Separate concerns, follow MVC or modular architecture for scalability.",
      },
    ],
  },
  {
    title: "Next.js Best Practices for Production Apps",
    description:
      "Learn Next.js SSR, SSG, ISR, routing, file structure, performance optimization, API routes, and full-stack app development.",
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
    faqs: [
      {
        question: "What is SSR, SSG, and ISR?",
        answer:
          "SSR (Server Side Rendering) generates pages on each request, SSG (Static Site Generation) pre-builds pages at build time, ISR (Incremental Static Regeneration) updates static pages after build.",
      },
      {
        question: "How to use Next.js API routes?",
        answer:
          "API routes are serverless functions in Next.js located in /pages/api. They can handle HTTP requests for backend logic.",
      },
      {
        question: "How to optimize Next.js apps?",
        answer:
          "Use dynamic imports, image optimization, caching, and avoid unnecessary re-renders to improve performance.",
      },
    ],
  },
  {
    title: "How Express.js Works Internally",
    description:
      "Deep dive into Express.js middleware, routing engine, request-response lifecycle, error handling, and building scalable APIs.",
    icon: Cpu,
    gradient: "from-yellow-500 to-orange-500",
    faqs: [
      {
        question: "What are middleware in Express?",
        answer:
          "Middleware are functions executed during request-response lifecycle. They can manipulate requests, responses, or perform logging, auth, etc.",
      },
      {
        question: "How does Express routing work?",
        answer:
          "Express matches incoming requests to route definitions based on HTTP method and URL pattern.",
      },
      {
        question: "How to handle errors in Express?",
        answer:
          "Use error-handling middleware with four arguments (err, req, res, next) to catch and respond to errors consistently.",
      },
    ],
  },
  {
    title: "Understanding NestJS for Enterprise Backend Systems",
    description:
      "Master NestJS modules, controllers, services, dependency injection, middleware, pipes, guards, interceptors, and scalable backend design.",
    icon: Flame,
    gradient: "from-red-500 to-rose-500",
    faqs: [
      {
        question: "What is NestJS?",
        answer:
          "NestJS is a progressive Node.js framework for building scalable, testable, and maintainable backend applications using TypeScript.",
      },
      {
        question: "Explain modules, controllers, and services in NestJS.",
        answer:
          "Modules organize app structure, controllers handle requests, services contain business logic. DI allows injecting dependencies easily.",
      },
      {
        question: "How to handle middleware and guards in NestJS?",
        answer:
          "Middleware runs before route handlers. Guards handle authorization. Pipes can validate/transform data.",
      },
    ],
  },
  {
    title: "Core JavaScript Concepts Every Developer Should Know",
    description:
      "Important JS concepts like closures, scope, this keyword, event loop, promises, async/await, ES6+ features.",
    icon: Activity,
    gradient: "from-indigo-500 to-blue-500",
    faqs: [
      {
        question: "What are closures in JavaScript?",
        answer:
          "Closures are functions that remember variables from their lexical scope even after the outer function has executed.",
      },
      {
        question: "Explain the 'this' keyword.",
        answer:
          "In JavaScript, 'this' refers to the object context in which a function is called. It varies in arrow functions, methods, and global scope.",
      },
      {
        question: "What are Promises and async/await?",
        answer:
          "Promises handle asynchronous operations. async/await provides a cleaner syntax to work with Promises in a sequential manner.",
      },
      {
        question: "What is the Event Loop?",
        answer:
          "The Event Loop allows JavaScript to perform non-blocking operations by executing callback functions in a loop after current operations complete.",
      },
      {
        question: "How to handle CORS in frontend?",
        answer:
          "Frontend can handle CORS by making requests to a server with proper headers or using proxy in development to bypass cross-origin restrictions.",
      },
    ],
  },
];

const profileData = {
  biography: [
    "I am Rabiyul Islam, a passionate Full Stack Developer currently working at ShunnoIT in Rajshahi.",
    "I specialize in building robust and scalable web applications using modern technologies including React, Next.js, Node.js, Express, NestJS, and MongoDB.",
    "My work encompasses both frontend and backend development, focusing on clean, maintainable code and efficient workflows.",
    "Beyond technical skills, I am highly motivated by problem-solving, continuous learning, and innovation.",
    "I actively seek challenging projects that allow me to explore new technologies, optimize processes, and deliver impactful solutions for clients and users.",
  ],
  education: [
    "Diploma in Engineering (Software Engineering) - Completed 2022",
    "North bengal international university - Ongoing BSc in Computer Science and Engineering",
    "Continuous learning in modern web technologies and frameworks",
  ],
  skills: [
    "Frontend: React, Next.js, TypeScript, TailwindCSS, ShadCN UI",
    "Backend: Node.js, Express.js, NestJS, MongoDB, RESTful APIs, Microservices",
    "Tools & Others: Git, Docker, Redis, RabbitMQ, CI/CD",
    "Professional Practices: Clean Code, Agile Methodology, Testing, Project Management",
  ],
  attributes: [
    "Problem solver and critical thinker",
    "Passionate about learning and technology innovation",
    "Team player with strong communication skills",
    "Adaptable and quick learner",
    "Detail-oriented and quality-focused",
  ],
  additionalInfo: {
    languages: ["English (Fluent)", "Bangla (Native)"],
    hobbies: ["Reading tech blogs", "Open-source contribution", "Traveling"],
    certifications: [
      "React Developer Certification",
      "NestJS Backend Specialist",
    ],
  },
};

export { mySelf, aboutInfo, projects, articlesFAQ, profileData };
