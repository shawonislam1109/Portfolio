import {
  Globe,
  Layout,
  Zap,
  Server,
  Box,
  PanelTop,
  Hexagon,
  Atom,
  Code,
  Cpu,
  Layers,
  Flame,
  Activity,
} from "lucide-react";

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
    icon: Globe,
    description:
      "A complete ISP billing and client management system. Automates package management, router integration, bandwidth control, invoice generation, client notifications, and provides a real-time dashboard with analytics. Ideal for ISPs to monitor and optimize operations efficiently.",
    tech: "React, Next.js, TypeScript, Node.js, Express, MongoDB, MikroTik API, ShadCN UI",
    link: "https://billing.siliconisp.com/",
    color: "text-blue-500",
  },
  {
    title: "Utility Bill Management System (BillBD)",
    icon: Zap,
    description:
      "A modern utility bill management platform designed to streamline monthly billing cycles, automate calculations, manage user roles, and provide admin dashboards with insightful analytics. Ensures secure, scalable, and efficient utility operations.",
    tech: "NestJS, TypeScript, MongoDB, JWT, Clean Architecture",
    link: "https://app.billbd.com/",
    color: "text-yellow-400",
  },
  {
    title: "Personal Portfolio Website",
    icon: Layout,
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

export { mySelf, aboutInfo, projects, articlesFAQ };
