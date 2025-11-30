import { CodeXml, Paintbrush } from 'lucide-react';
import type { ComponentType } from 'react';
import { JsIcon } from '@/components/JsIcon';

// --- CONTENT DATA ---

interface Topic {
  slug: string;
  title: string;
  description: string;
  content: string;
  codeSnippet: {
    language: 'html' | 'css' | 'javascript' | 'bash';
    code: string;
  };
  output?: string;
}

export interface Category {
  name: string;
  slug: 'html' | 'css' | 'javascript';
  icon: ComponentType<{ className?: string }>;
  description: string;
  topics: Topic[];
}

export const contentData: Category[] = [
  {
    name: 'HTML',
    slug: 'html',
    icon: CodeXml,
    description: 'Structure your web content.',
    topics: [
      {
        slug: 'basics',
        title: 'HTML Basics',
        description: 'The fundamental building blocks.',
        content: `HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It forms the very foundation of all web pages. An HTML document is made up of elements, which are represented by tags.`,
        codeSnippet: {
          language: 'html',
          code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`,
        },
        output: 'Your browser renders this as a page with a heading and a paragraph.',
      },
      {
        slug: 'tags',
        title: 'HTML Tags',
        description: 'Structuring content with tags.',
        content: `HTML tags are like keywords which define how web browser will format and display the content. With the help of tags, a web browser can distinguish between an HTML content and a simple content. HTML tags are enclosed within angle brackets < >.`,
        codeSnippet: {
          language: 'html',
          code: `<!-- Heading Tags -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>

<!-- Paragraph Tag -->
<p>This is a paragraph.</p>

<!-- Link Tag -->
<a href="https://example.com">Visit Example.com</a>`,
        },
        output: 'The browser displays different text sizes for headings and a clickable link.',
      },
      {
        slug: 'forms',
        title: 'HTML Forms',
        description: 'Collecting user input.',
        content: 'HTML forms are used to collect user input. The input can be of many types, like text, email, password, and more. The <form> element is a container for different types of input elements.',
        codeSnippet: {
          language: 'html',
          code: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>`,
        },
        output: 'This renders two text fields and a submit button.',
      },
    ],
  },
  {
    name: 'CSS',
    slug: 'css',
    icon: Paintbrush,
    description: 'Style your web pages beautifully.',
    topics: [
      {
        slug: 'selectors',
        title: 'CSS Selectors',
        description: 'Targeting elements to style.',
        content: 'CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories: Simple selectors (select elements based on name, id, class), Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, and Attribute selectors.',
        codeSnippet: {
          language: 'css',
          code: `/* Element selector */
p {
  color: blue;
}

/* Class selector */
.my-class {
  font-size: 16px;
}

/* ID selector */
#my-id {
  background-color: yellow;
}`,
        },
      },
      {
        slug: 'flexbox',
        title: 'CSS Flexbox',
        description: 'Layouts made easy.',
        content: 'The Flexbox Layout module makes it easier to design flexible responsive layout structure without using float or positioning. A flex container expands items to fill available free space or shrinks them to prevent overflow.',
        codeSnippet: {
          language: 'css',
          code: `.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}`,
        },
        output: 'Elements inside .container will be spaced out evenly on the horizontal axis and centered vertically.',
      },
      {
        slug: 'grid',
        title: 'CSS Grid',
        description: 'Mastering two-dimensional layouts.',
        content: 'CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.',
        codeSnippet: {
          language: 'css',
          code: `.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`,
        },
        output: 'Items inside .wrapper will be arranged in a 3-column grid with 10px of space between them.',
      },
    ],
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    icon: JsIcon,
    description: 'Add interactivity to your site.',
    topics: [
      {
        slug: 'variables',
        title: 'JavaScript Variables',
        description: 'Storing data values.',
        content: 'Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. `let` allows you to reassign the variable, while `const` is for values that will not change.',
        codeSnippet: {
          language: 'javascript',
          code: `let name = "Alice"; // Can be changed
const age = 30; // Cannot be changed

console.log(name + " is " + age + " years old.");`,
        },
        output: 'The console will show: "Alice is 30 years old."',
      },
      {
        slug: 'functions',
        title: 'JavaScript Functions',
        description: 'Reusable blocks of code.',
        content: 'A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).',
        codeSnippet: {
          language: 'javascript',
          code: `function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("Bob");
console.log(greeting);`,
        },
        output: 'The console will show: "Hello, Bob!"',
      },
      {
        slug: 'dom',
        title: 'JavaScript DOM',
        description: 'Manipulating the document.',
        content: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. With the DOM, JavaScript gets all the power it needs to create dynamic HTML.',
        codeSnippet: {
          language: 'javascript',
          code: `// Assuming an HTML element <p id="demo"></p> exists
const paragraph = document.getElementById("demo");
paragraph.textContent = "Hello World!";
paragraph.style.color = "red";`,
        },
        output: 'The text of the paragraph with the ID "demo" changes to "Hello World!" and its color becomes red.',
      },
    ],
  },
];

// --- QUIZ DATA ---

interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

type Quizzes = {
  [categorySlug in Category['slug']]?: {
    [topicSlug in string]?: Question[];
  };
};

export const quizzes: Quizzes = {
  html: {
    basics: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'],
        correctAnswer: 1,
        explanation: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages.',
      },
      {
        question: 'Which element is used for the largest heading?',
        options: ['<h6>', '<heading>', '<h1>', '<head>'],
        correctAnswer: 2,
        explanation: '<h1> defines the most important heading. <h6> defines the least important heading.',
      },
    ],
    tags: [
        {
            question: 'What is the correct HTML tag for inserting a line break?',
            options: ['<break>', '<lb>', '<br>', '<brk>'],
            correctAnswer: 2,
            explanation: 'The <br> tag is an empty tag which means that it has no end tag. It inserts a single line break.'
        },
        {
            question: 'Which character is used to indicate an end tag?',
            options: ['<', '^', '/', '*'],
            correctAnswer: 2,
            explanation: 'An end tag is written like a start tag, but with a forward slash (/) inserted before the element name.'
        }
    ]
  },
  css: {
    selectors: [
      {
        question: 'Which selector is used to select an element with a specific ID?',
        options: ['.', '#', '*', '$'],
        correctAnswer: 1,
        explanation: 'The # symbol is used to select an element by its ID. For example, #myId would select the element with id="myId".',
      },
      {
        question: 'How do you select all <p> elements inside a <div> element?',
        options: ['div + p', 'div p', 'div.p', 'div ~ p'],
        correctAnswer: 1,
        explanation: 'The "div p" selector (descendant selector) selects all <p> elements that are inside a <div> element.',
      },
    ],
  },
  javascript: {
    variables: [
        {
            question: 'Which keyword is used to declare a variable that cannot be reassigned?',
            options: ['let', 'var', 'const', 'static'],
            correctAnswer: 2,
            explanation: 'The `const` keyword is used to declare a block-scoped variable whose value cannot be changed or redeclared.'
        },
        {
            question: 'What is the result of `typeof null`?',
            options: ['"null"', '"undefined"', '"object"', '"number"'],
            correctAnswer: 2,
            explanation: 'This is a well-known quirk in JavaScript. `typeof null` returns "object".'
        }
    ]
  },
};

// --- LEADERBOARD DATA ---

export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  time: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: 'Alice', score: 98, time: '01:32' },
  { rank: 2, username: 'Bob', score: 95, time: '01:45' },
  { rank: 3, username: 'Charlie', score: 95, time: '01:50' },
  { rank: 4, username: 'Diana', score: 92, time: '02:01' },
  { rank: 5, username: 'Ethan', score: 88, time: '02:15' },
  { rank: 6, username: 'Fiona', score: 85, time: '02:10' },
  { rank: 7, username: 'George', score: 81, time: '02:30' },
  { rank: 8, username: 'Hannah', score: 79, time: '02:25' },
  { rank: 9, username: 'Ian', score: 75, time: '02:45' },
  { rank: 10, username: 'Jane', score: 72, time: '02:55' },
];
