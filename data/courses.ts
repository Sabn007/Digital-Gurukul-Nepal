import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "html-basics",
    title: "HTML Foundations",
    shortDescription: "Structure web pages with tags, lists, links, and semantic HTML.",
    level: "Beginner",
    durationWeeks: 3,
    accent: "indigo",
    lessons: [
      {
        id: "html-l1",
        courseId: "html-basics",
        title: "What is HTML?",
        order: 1,
        type: "video",
        durationMinutes: 12,
        summary:
          "Meet HTML as the skeleton of every webpage. Learn how browsers read tags to show headings, paragraphs, and more.",
        quiz: [
          {
            id: "q1",
            prompt: "What does HTML mainly describe?",
            options: [
              { id: "a", label: "The structure and meaning of content" },
              { id: "b", label: "Only the colors of a page" },
              { id: "c", label: "How fast the server responds" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "html-l2",
        courseId: "html-basics",
        title: "Headings & paragraphs",
        order: 2,
        type: "text",
        durationMinutes: 15,
        summary:
          "Practice h1–h6 for titles and p for body text. See why order matters for readers and screen readers.",
        quiz: [
          {
            id: "q1",
            prompt: "Which tag is best for the main page title?",
            options: [
              { id: "a", label: "<h1>" },
              { id: "b", label: "<p>" },
              { id: "c", label: "<span>" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "html-l3",
        courseId: "html-basics",
        title: "Links & images",
        order: 3,
        type: "video",
        durationMinutes: 18,
        summary:
          "Connect pages with anchors and brighten lessons with accessible images and alt text.",
        quiz: [
          {
            id: "q1",
            prompt: "Why is alt text important on images?",
            options: [
              { id: "a", label: "It helps accessibility and when images fail to load" },
              { id: "b", label: "It makes images load faster" },
              { id: "c", label: "It hides images from the page" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "html-l4",
        courseId: "html-basics",
        title: "Mini project: Profile card",
        order: 4,
        type: "text",
        durationMinutes: 25,
        summary:
          "Build a simple profile card using semantic tags—great portfolio starter for grades 5–10.",
      },
    ],
  },
  {
    id: "css-style",
    title: "CSS Styling Lab",
    shortDescription: "Colors, layout, and responsive design with fun UI challenges.",
    level: "Beginner",
    durationWeeks: 4,
    accent: "sky",
    lessons: [
      {
        id: "css-l1",
        courseId: "css-style",
        title: "Selectors & the cascade",
        order: 1,
        type: "video",
        durationMinutes: 14,
        summary:
          "Pick elements with classes and IDs, and learn why some rules win when styles overlap.",
        quiz: [
          {
            id: "q1",
            prompt: "In CSS, what is a class selector written as?",
            options: [
              { id: "a", label: ".my-class" },
              { id: "b", label: "#my-class" },
              { id: "c", label: "/my-class" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "css-l2",
        courseId: "css-style",
        title: "Colors, fonts, spacing",
        order: 2,
        type: "text",
        durationMinutes: 20,
        summary:
          "Make layouts breathe with margin, padding, and web-safe font stacks.",
      },
      {
        id: "css-l3",
        courseId: "css-style",
        title: "Flexbox playground",
        order: 3,
        type: "video",
        durationMinutes: 22,
        summary:
          "Line up navigation bars and card grids using flex-direction, justify, and align.",
        quiz: [
          {
            id: "q1",
            prompt: "Flexbox is especially helpful for:",
            options: [
              { id: "a", label: "One-dimensional layouts like rows or columns" },
              { id: "b", label: "Only database queries" },
              { id: "c", label: "Writing JavaScript functions" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "css-l4",
        courseId: "css-style",
        title: "Responsive basics",
        order: 4,
        type: "text",
        durationMinutes: 18,
        summary:
          "Use relative units and media queries so your page looks great on phones and desktops.",
      },
    ],
  },
  {
    id: "javascript-fun",
    title: "JavaScript Adventures",
    shortDescription: "Variables, logic, and DOM fun, bring pages to life.",
    level: "Intermediate",
    durationWeeks: 5,
    accent: "amber",  
    lessons: [
      {
        id: "js-l1",
        courseId: "javascript-fun",
        title: "Console & variables",
        order: 1,
        type: "video",
        durationMinutes: 16,
        summary:
          "Say hello to let, const, and strings. Log messages and fix tiny bugs like a detective.",
        quiz: [
          {
            id: "q1",
            prompt: "Which keyword declares a block-scoped constant?",
            options: [
              { id: "a", label: "const" },
              { id: "b", label: "varonly" },
              { id: "c", label: "freeze" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "js-l2",
        courseId: "javascript-fun",
        title: "Conditionals & loops",
        order: 2,
        type: "text",
        durationMinutes: 24,
        summary:
          "Guide programs with if/else and repeat work with for loops—perfect for quizzes and games.",
      },
      {
        id: "js-l3",
        courseId: "javascript-fun",
        title: "Functions & events",
        order: 3,
        type: "video",
        durationMinutes: 21,
        summary:
          "Wrap logic in functions and listen for clicks to update the page instantly.",
        quiz: [
          {
            id: "q1",
            prompt: "An event listener lets you:",
            options: [
              { id: "a", label: "Run code when something happens (like a click)" },
              { id: "b", label: "Delete HTML files" },
              { id: "c", label: "Change the Wi-Fi password" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "js-l4",
        courseId: "javascript-fun",
        title: "DOM mini project",
        order: 4,
        type: "text",
        durationMinutes: 30,
        summary:
          "Build a counter or color toggler—your first interactive widget on a real page.",
      },
    ],
  },
  {
    id: "scratch-creative",
    title: "Scratch Creative Coding",
    shortDescription: "Blocks, sprites, and stories, learn logic without typing syntax.",
    level: "Beginner",
    durationWeeks: 3,
    accent: "violet",
    lessons: [
      {
        id: "sc-l1",
        courseId: "scratch-creative",
        title: "Stage & sprites",
        order: 1,
        type: "video",
        durationMinutes: 12,
        summary:
          "Drag blocks to move characters. Explore coordinates so sprites know where to dance.",
        quiz: [
          {
            id: "q1",
            prompt: "In Scratch, a character you program is called a:",
            options: [
              { id: "a", label: "Sprite" },
              { id: "b", label: "Cookie" },
              { id: "c", label: "Router" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "sc-l2",
        courseId: "scratch-creative",
        title: "Loops & broadcasts",
        order: 2,
        type: "text",
        durationMinutes: 18,
        summary:
          "Repeat actions forever or a set number of times, and send messages between sprites.",
      },
      {
        id: "sc-l3",
        courseId: "scratch-creative",
        title: "Variables & scoring",
        order: 3,
        type: "video",
        durationMinutes: 16,
        summary:
          "Keep score, collect items, and show numbers on stage with variable monitors.",
      },
      {
        id: "sc-l4",
        courseId: "scratch-creative",
        title: "Story or game capstone",
        order: 4,
        type: "text",
        durationMinutes: 35,
        summary:
          "Plan, build, and share a short story or maze game with sounds and costumes.",
      },
    ],
  },
  {
    id: "python-starters",
    title: "Python Starters",
    shortDescription: "Readable syntax, turtle graphics, and small automation scripts.",
    level: "Beginner",
    durationWeeks: 4,
    accent: "emerald",
    lessons: [
      {
        id: "py-l1",
        courseId: "python-starters",
        title: "Hello, Python!",
        order: 1,
        type: "video",
        durationMinutes: 14,
        summary:
          "Install-friendly intro: print text, use variables, and run your first .py file.",
        quiz: [
          {
            id: "q1",
            prompt: "Which function prints output in Python 3?",
            options: [
              { id: "a", label: "print()" },
              { id: "b", label: "echo()" },
              { id: "c", label: "shout()" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "py-l2",
        courseId: "python-starters",
        title: "Lists & loops",
        order: 2,
        type: "text",
        durationMinutes: 22,
        summary:
          "Store many items in a list and loop with for to process homework-sized datasets.",
      },
      {
        id: "py-l3",
        courseId: "python-starters",
        title: "Functions & inputs",
        order: 3,
        type: "video",
        durationMinutes: 20,
        summary:
          "Ask users questions with input() and organize code into reusable functions.",
        quiz: [
          {
            id: "q1",
            prompt: "A Python function is defined with:",
            options: [
              { id: "a", label: "def" },
              { id: "b", label: "fun" },
              { id: "c", label: "make" },
            ],
            correctOptionId: "a",
          },
        ],
      },
      {
        id: "py-l4",
        courseId: "python-starters",
        title: "Turtle art challenge",
        order: 4,
        type: "text",
        durationMinutes: 28,
        summary:
          "Draw shapes and patterns—geometry plus code equals gallery-ready art.",
      },
    ],
  },
];
