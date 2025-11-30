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
        slug: 'introduction-to-html',
        title: 'Introduction to HTML',
        description: 'Learn the role of HTML in web development.',
        content: `HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It forms the very foundation of all web pages, defining the meaning and structure of web content.`,
        codeSnippet: {
          language: 'html',
          code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`,
        },
        output: 'The browser renders this as a simple web page with the title "My First Web Page" and a main heading that says "Hello, World!".',
      },
      {
        slug: 'html-tags-and-elements',
        title: 'HTML Tags & Elements',
        description: 'Understand the building blocks of HTML.',
        content: `An HTML element is defined by a start tag, some content, and an end tag. Tags are the keywords enclosed in angle brackets that define how the content is formatted and displayed. For example, <p> is a tag for a paragraph.`,
        codeSnippet: {
          language: 'html',
          code: `<p>This is a paragraph element.</p>
<strong>This text is important.</strong>
<em>This text is emphasized.</em>`,
        },
        output: 'This renders a standard paragraph, followed by bold and italicized text.',
      },
      {
        slug: 'attributes-in-html',
        title: 'Attributes in HTML',
        description: 'Provide additional information to elements.',
        content: `Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like name="value". The 'href' attribute in a link, for example, specifies the URL.`,
        codeSnippet: {
          language: 'html',
          code: `<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="An example image">
<p class="info-text">A paragraph with a class.</p>`,
        },
        output: 'This creates a hyperlink, displays an image (with alternative text), and styles a paragraph using a CSS class.',
      },
      {
        slug: 'headings-and-paragraphs',
        title: 'Headings & Paragraphs',
        description: 'Structure your text content effectively.',
        content: `Headings (<h1> to <h6>) are used to define the hierarchical structure of a page, from most important (h1) to least (h6). Paragraphs (<p>) are used for blocks of text.`,
        codeSnippet: {
          language: 'html',
          code: `<h1>Main Title</h1>
<p>This is an introduction to the topic.</p>
<h2>Subtitle</h2>
<p>More details about the subtopic.</p>`,
        },
        output: 'This renders a large main heading, a paragraph, a smaller sub-heading, and another paragraph.',
      },
      {
        slug: 'links-and-navigation',
        title: 'Links & Navigation',
        description: 'Connect pages and create menus.',
        content: `Links are created using the <a> (anchor) tag. The 'href' attribute is crucial as it specifies the destination URL. A collection of links can form a navigation menu, often structured with a <nav> element.`,
        codeSnippet: {
          language: 'html',
          code: `<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`,
        },
        output: 'This renders a simple navigation bar with three links.',
      },
      {
        slug: 'images-and-multimedia',
        title: 'Images & Multimedia',
        description: 'Embed images and other media.',
        content: `Use the <img> tag to embed images. The 'src' attribute points to the image file, and the 'alt' attribute provides descriptive text for accessibility. Other multimedia like videos can also be embedded.`,
        codeSnippet: {
          language: 'html',
          code: `<img src="logo.png" alt="Company Logo" width="100" height="50">`,
        },
        output: 'This displays the "logo.png" image on the page with a specific size and provides "Company Logo" as the alternative text.',
      },
      {
        slug: 'lists',
        title: 'Lists (Ordered & Unordered)',
        description: 'Organize items with ordered and unordered lists.',
        content: `Unordered lists (<ul>) are for items where the order doesn't matter (like a shopping list), displayed with bullet points. Ordered lists (<ol>) are for items where order is important (like steps in a recipe), displayed with numbers.`,
        codeSnippet: {
          language: 'html',
          code: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>`,
        },
        output: 'This renders a bulleted list with "Coffee" and "Tea", and a numbered list with two steps.',
      },
      {
        slug: 'tables',
        title: 'Tables',
        description: 'Display data in rows and columns.',
        content: `HTML tables allow you to arrange data into rows and columns. Use <table> to define the table, <tr> for rows, <th> for headers, and <td> for data cells.`,
        codeSnippet: {
          language: 'html',
          code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>30</td>
  </tr>
</table>`,
        },
        output: 'This renders a simple table with headers "Name" and "Age" and one row of data.',
      },
      {
        slug: 'forms-and-input-elements',
        title: 'Forms & Input Elements',
        description: 'Collect information from users.',
        content: `Forms (<form>) are essential for collecting user data. They contain various input elements like text fields (<input type="text">), checkboxes (<input type="checkbox">), radio buttons, and submit buttons.`,
        codeSnippet: {
          language: 'html',
          code: `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <input type="submit" value="Go">
</form>`,
        },
        output: 'This renders a text input field labeled "Username" and a submit button.',
      },
      {
        slug: 'semantic-html',
        title: 'Semantic HTML',
        description: 'Use tags that describe their meaning.',
        content: `Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Examples include <header>, <footer>, <nav>, <section>, and <article>. This improves accessibility and SEO.`,
        codeSnippet: {
          language: 'html',
          code: `<article>
  <h2>Article Title</h2>
  <p>Content of the article...</p>
  <footer><p>Author: John Doe</p></footer>
</article>`,
        },
        output: 'Structurally, this defines an independent article with its own heading and footer, which is meaningful for search engines and screen readers.',
      },
      {
        slug: 'html5-new-elements',
        title: 'HTML5 New Elements',
        description: 'Explore modern semantic and structural elements.',
        content: `HTML5 introduced several new elements to better structure web documents, such as <main>, <figure>, <figcaption>, <mark>, and <time>. These add more semantic meaning to your markup.`,
        codeSnippet: {
          language: 'html',
          code: `<figure>
  <img src="pic.jpg" alt="A view">
  <figcaption>Fig.1 - A scenic view.</figcaption>
</figure>`,
        },
        output: 'This associates a caption ("Fig.1...") directly with an image, which is semantically correct.',
      },
      {
        slug: 'iframes',
        title: 'Iframes',
        description: 'Embed another HTML document within the current one.',
        content: `An iframe (Inline Frame) is used to embed another document within the current HTML document. This is often used for embedding maps, videos, or content from other websites.`,
        codeSnippet: {
          language: 'html',
          code: `<iframe src="https://www.example.com" width="600" height="400"></iframe>`,
        },
        output: 'This embeds the website at example.com into your page within a 600x400 pixel frame.',
      },
      {
        slug: 'audio-and-video',
        title: 'Audio & Video',
        description: 'Embed native audio and video content.',
        content: `HTML5 introduced the <audio> and <video> elements, allowing for native embedding of multimedia without needing plugins like Flash. The 'controls' attribute provides play, pause, and volume controls.`,
        codeSnippet: {
          language: 'html',
          code: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
        },
        output: 'This embeds a video player on the page for the "movie.mp4" file.',
      },
      {
        slug: 'canvas-and-svg',
        title: 'Canvas & SVG',
        description: 'Create graphics on the web.',
        content: `Canvas is used to draw graphics via JavaScript, ideal for dynamic animations and games. SVG (Scalable Vector Graphics) is an XML-based language for describing 2D graphics, perfect for logos and icons that need to scale perfectly.`,
        codeSnippet: {
          language: 'html',
          code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`,
        },
        output: 'This renders a yellow circle with a green border using SVG.',
      },
      {
        slug: 'meta-tags-and-seo-basics',
        title: 'Meta Tags & SEO Basics',
        description: 'Optimize your site for search engines.',
        content: `Meta tags provide metadata about the HTML document. They don't appear on the page but are machine-parsable. They are crucial for SEO (Search Engine Optimization), defining the page description, keywords, and character set.`,
        codeSnippet: {
          language: 'html',
          code: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
        },
        output: 'These tags are not visible on the page but provide important information to search engines and control the viewport for responsive design.',
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
        slug: 'introduction-to-css',
        title: 'Introduction to CSS',
        description: 'Learn how to apply styles to HTML.',
        content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in a markup language like HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
        codeSnippet: {
          language: 'css',
          code: `p {
  color: red;
  font-size: 16px;
}`,
        },
        output: 'All paragraph elements on the page will have red text and a font size of 16 pixels.',
      },
      {
        slug: 'selectors-and-properties',
        title: 'Selectors & Properties',
        description: 'Targeting elements and applying styles.',
        content: 'Selectors are patterns used to select the element(s) you want to style. Properties are the stylistic rules you apply, like `color`, `font-size`, or `background-color`, each with a corresponding value.',
        codeSnippet: {
          language: 'css',
          code: `/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#main-header {
  border-bottom: 2px solid black;
}`,
        },
        output: 'Elements with class="highlight" get a yellow background, and the element with id="main-header" gets a black bottom border.',
      },
      {
        slug: 'colors-backgrounds-borders',
        title: 'Colors, Backgrounds & Borders',
        description: 'Fundamental styling for elements.',
        content: 'You can control the color of text, the background of elements (colors or images), and the style, width, and color of borders around elements. These are some of the most common CSS properties.',
        codeSnippet: {
          language: 'css',
          code: `.box {
  color: #333;
  background-color: lightblue;
  border: 1px dashed navy;
}`,
        },
        output: 'An element with the class "box" will have dark gray text, a light blue background, and a dashed navy border.',
      },
      {
        slug: 'box-model',
        title: 'Box Model',
        description: 'Understand how elements are sized and spaced.',
        content: 'The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. Understanding this is fundamental to controlling layout and spacing.',
        codeSnippet: {
          language: 'css',
          code: `div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
        },
        output: 'A div will have a content width of 300px, surrounded by 20px of padding, a 5px border, and finally a 10px margin on the outside.',
      },
      {
        slug: 'display-and-positioning',
        title: 'Display & Positioning',
        description: 'Control how elements are shown and placed.',
        content: 'The `display` property controls how an element is rendered (e.g., `block`, `inline`, `none`). The `position` property (`static`, `relative`, `absolute`, `fixed`, `sticky`) determines how an element is positioned in the document flow.',
        codeSnippet: {
          language: 'css',
          code: `.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}`,
        },
        output: 'An element with class "fixed-header" will stick to the top of the viewport, even when the user scrolls.',
      },
      {
        slug: 'flexbox',
        title: 'Flexbox',
        description: 'Layouts made easy for one dimension.',
        content: 'The Flexbox Layout module makes it easier to design flexible responsive layout structures in one dimension (either a row or a column). It provides powerful alignment and distribution capabilities.',
        codeSnippet: {
          language: 'css',
          code: `.container {
  display: flex;
  justify-content: space-around;
}`,
        },
        output: 'Items inside .container will be spaced out evenly along the main axis.',
      },
      {
        slug: 'grid-layout',
        title: 'Grid Layout',
        description: 'Mastering two-dimensional layouts.',
        content: 'CSS Grid Layout is a two-dimensional layout system. It lets you lay content out in rows and columns, making it easy to create complex layouts that would be difficult with Flexbox alone.',
        codeSnippet: {
          language: 'css',
          code: `.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`,
        },
        output: 'Items inside .wrapper will be arranged in a three-column grid with a 10px gap between them.',
      },
      {
        slug: 'typography',
        title: 'Typography',
        description: 'Style your fonts and text.',
        content: 'CSS provides a wide range of properties for styling text, including `font-family` (typeface), `font-size`, `font-weight` (boldness), `text-align`, and `line-height` (spacing between lines).',
        codeSnippet: {
          language: 'css',
          code: `body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}`,
        },
        output: 'Sets the default font for the entire page to Arial and improves readability with increased line spacing.',
      },
      {
        slug: 'margin-padding-spacing',
        title: 'Margin, Padding & Spacing',
        description: 'Control the space around and inside elements.',
        content: 'Margin is the space outside an element, separating it from other elements. Padding is the space inside an element, between the content and the border. Mastering these is key to good layout design.',
        codeSnippet: {
          language: 'css',
          code: `button {
  margin: 10px 5px; /* 10px top/bottom, 5px left/right */
  padding: 12px 20px;
}`,
        },
        output: 'This gives a button external spacing and internal padding to make it larger and easier to click.',
      },
      {
        slug: 'transitions-and-animations',
        title: 'Transitions & Animations',
        description: 'Bring your site to life with motion.',
        content: 'Transitions allow you to smoothly change property values over a given duration. Animations (`@keyframes`) allow for more complex sequences of motion, giving you fine-grained control over the styling changes.',
        codeSnippet: {
          language: 'css',
          code: `button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darkblue;
}`,
        },
        output: 'When you hover over the button, its background color will smoothly fade from blue to dark blue over 0.3 seconds.',
      },
      {
        slug: 'pseudo-classes-and-pseudo-elements',
        title: 'Pseudo-classes & Pseudo-elements',
        description: 'Style elements based on state or create virtual elements.',
        content: 'Pseudo-classes select elements based on their state (e.g., `:hover`, `:focus`). Pseudo-elements create virtual elements that can be styled (e.g., `::before`, `::after`, `::first-letter`).',
        codeSnippet: {
          language: 'css',
          code: `a:hover {
  text-decoration: underline;
}

p::first-line {
  font-weight: bold;
}`,
        },
        output: 'Links will get an underline when hovered, and the first line of every paragraph will be bold.',
      },
      {
        slug: 'responsive-design',
        title: 'Responsive Design (Media Queries)',
        description: 'Adapt your layout for different screen sizes.',
        content: 'Responsive design ensures your website looks good on all devices. Media queries are the core of this, allowing you to apply different CSS rules based on device characteristics like screen width, height, or orientation.',
        codeSnippet: {
          language: 'css',
          code: `.container {
  width: 90%;
}

@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}`,
        },
        output: 'The container will be 90% wide on small screens and 80% wide on screens that are 768px or wider.',
      },
      {
        slug: 'css-variables',
        title: 'CSS Variables',
        description: 'Create reusable values in your stylesheets.',
        content: 'CSS Variables (Custom Properties) allow you to store values in one place and reuse them throughout your stylesheet. This is incredibly useful for theming and maintaining large projects.',
        codeSnippet: {
          language: 'css',
          code: `:root {
  --main-color: #3498db;
}

a {
  color: var(--main-color);
}`,
        },
        output: 'Defines a main color variable and applies it to all link elements. Changing it in one place updates it everywhere.',
      },
      {
        slug: 'shadows-and-filters',
        title: 'Shadows & Filters',
        description: 'Add depth and graphical effects.',
        content: '`box-shadow` and `text-shadow` add shadow effects to elements and text. The `filter` property lets you apply graphical effects like `blur()`, `brightness()`, and `grayscale()` to elements.',
        codeSnippet: {
          language: 'css',
          code: `.card {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
}

img:hover {
  filter: grayscale(100%);
}`,
        },
        output: 'A card element will have a noticeable drop shadow. Hovering over an image will turn it to black and white.',
      },
      {
        slug: 'css-frameworks',
        title: 'CSS Frameworks',
        description: 'Learn the basics of Bootstrap/Tailwind.',
        content: 'CSS frameworks provide pre-written CSS to help you build responsive websites quickly. Bootstrap is component-based, while Tailwind is a utility-first framework. Both are extremely popular and powerful.',
        codeSnippet: {
          language: 'html',
          code: `<!-- Tailwind Example -->
<div class="bg-blue-500 text-white p-4 rounded">
  A styled box.
</div>`,
        },
        output: 'Using Tailwind CSS classes directly in HTML, this creates a blue box with white text, padding, and rounded corners without writing any separate CSS file.',
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
        slug: 'introduction-to-javascript',
        title: 'Introduction to JavaScript',
        description: 'Understand the role of JS in web development.',
        content: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS.',
        codeSnippet: {
          language: 'javascript',
          code: `// This is a comment
console.log("Hello from JavaScript!");`,
        },
        output: 'The browser console will display the message "Hello from JavaScript!".',
      },
      {
        slug: 'variables-and-data-types',
        title: 'Variables & Data Types',
        description: 'Storing and classifying data.',
        content: 'Variables are containers for storing data values, declared with `let`, `const`, or `var`. JavaScript has several data types, including String, Number, Boolean, Null, Undefined, Object, and Symbol.',
        codeSnippet: {
          language: 'javascript',
          code: `let name = "Alice"; // String
const year = 2024; // Number
let isActive = true; // Boolean`,
        },
        output: 'Three variables are created, holding a string, a number, and a boolean value, respectively.',
      },
      {
        slug: 'operators',
        title: 'Operators',
        description: 'Perform arithmetic and logical operations.',
        content: 'Operators are symbols used to perform operations on operands (values and variables). Common types include arithmetic (+, -, *), assignment (=), comparison (==, >), and logical (&&, ||) operators.',
        codeSnippet: {
          language: 'javascript',
          code: `let x = 10 + 5; // x is 15
let y = x * 2; // y is 30
let isGreater = y > 20; // isGreater is true`,
        },
        output: 'This code performs basic arithmetic and a comparison, storing the results in variables.',
      },
      {
        slug: 'conditional-statements',
        title: 'Conditional Statements',
        description: 'Execute code based on conditions.',
        content: 'Conditional statements are used to perform different actions based on different conditions. The most common are `if`, `else if`, and `else`, which allow your code to make decisions.',
        codeSnippet: {
          language: 'javascript',
          code: `let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,
        },
        output: 'The console will display "Adult" because the condition `age >= 18` is true.',
      },
      {
        slug: 'loops',
        title: 'Loops (for, while)',
        description: 'Repeat actions multiple times.',
        content: 'Loops can execute a block of code a number of times. The `for` loop is often used when the number of iterations is known, while the `while` loop is used when the loop should continue as long as a condition is true.',
        codeSnippet: {
          language: 'javascript',
          code: `for (let i = 0; i < 3; i++) {
  console.log("Number " + i);
}`,
        },
        output: 'The console will display "Number 0", "Number 1", and "Number 2" on separate lines.',
      },
      {
        slug: 'functions',
        title: 'Functions',
        description: 'Create reusable blocks of code.',
        content: 'A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions help organize code, make it reusable, and easier to debug.',
        codeSnippet: {
          language: 'javascript',
          code: `function add(a, b) {
  return a + b;
}
let sum = add(5, 3); // sum is 8`,
        },
        output: 'This defines a function to add two numbers and then calls it, storing the result (8) in the `sum` variable.',
      },
      {
        slug: 'arrays',
        title: 'Arrays',
        description: 'Store multiple values in a single variable.',
        content: 'An array is a special variable, which can hold more than one value at a time. Arrays are used to store lists of items, and you can access items by their index number (starting from 0).',
        codeSnippet: {
          language: 'javascript',
          code: `const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Access the second item`,
        },
        output: 'The console will display "Banana".',
      },
      {
        slug: 'objects',
        title: 'Objects',
        description: 'Store collections of key-value pairs.',
        content: 'Objects are variables too, but they can contain many values. The values are written as name:value pairs (name and value separated by a colon). Objects are used to represent real-world entities.',
        codeSnippet: {
          language: 'javascript',
          code: `const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log(person.firstName);`,
        },
        output: 'The console will display "John".',
      },
      {
        slug: 'dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Interact with and change HTML content.',
        content: 'The Document Object Model (DOM) is a programming interface for web documents. JavaScript can access and change all the elements of an HTML document. This is how you make web pages interactive.',
        codeSnippet: {
          language: 'javascript',
          code: `// Assuming an element <p id="demo"></p> exists
document.getElementById("demo").innerHTML = "Hello World!";`,
        },
        output: 'The text content of the HTML paragraph with the ID "demo" will be changed to "Hello World!".',
      },
      {
        slug: 'events-and-event-listeners',
        title: 'Events & Event Listeners',
        description: 'React to user actions.',
        content: 'Events are actions that happen in the browser, such as a user clicking a button, moving the mouse, or submitting a form. You can use event listeners to "listen" for these events and execute code in response.',
        codeSnippet: {
          language: 'javascript',
          code: `// Assuming a button with id="myBtn" exists
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Button was clicked!");
});`,
        },
        output: 'When the button with the ID "myBtn" is clicked, an alert box will pop up.',
      },
      {
        slug: 'strings-and-number-methods',
        title: 'Strings & Number Methods',
        description: 'Work with text and numeric data.',
        content: 'JavaScript provides many built-in methods for working with strings (e.g., `.length`, `.toUpperCase()`) and numbers (e.g., `.toFixed()`, `.toString()`).',
        codeSnippet: {
          language: 'javascript',
          code: `let text = "Hello World";
let length = text.length; // 11
let upper = text.toUpperCase(); // "HELLO WORLD"`,
        },
        output: 'This code calculates the length of a string and converts it to uppercase.',
      },
      {
        slug: 'timing-events',
        title: 'Timing (setTimeout, setInterval)',
        description: 'Execute code after a delay or at intervals.',
        content: '`setTimeout()` executes a function once after a specified delay. `setInterval()` executes a function repeatedly at specified intervals. These are essential for animations and asynchronous tasks.',
        codeSnippet: {
          language: 'javascript',
          code: `setTimeout(function() {
  console.log("This message is shown after 2 seconds.");
}, 2000);`,
        },
        output: 'After a 2-second pause, the message will appear in the console.',
      },
      {
        slug: 'local-storage-and-session-storage',
        title: 'Local & Session Storage',
        description: 'Store data in the user\'s browser.',
        content: 'Web storage allows websites to store data in the user\'s browser. `localStorage` stores data with no expiration date, while `sessionStorage` stores data for one session (data is lost when the browser tab is closed).',
        codeSnippet: {
          language: 'javascript',
          code: `localStorage.setItem("username", "JohnDoe");
let user = localStorage.getItem("username");`,
        },
        output: 'This stores the username "JohnDoe" in the browser\'s local storage and then retrieves it.',
      },
      {
        slug: 'json',
        title: 'JSON',
        description: 'Understand JavaScript Object Notation.',
        content: 'JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data. It is often used when data is sent from a server to a web page. `JSON.parse()` converts a JSON string into a JavaScript object, and `JSON.stringify()` does the reverse.',
        codeSnippet: {
          language: 'javascript',
          code: `const myJSON = '{"name":"John", "age":30}';
const myObj = JSON.parse(myJSON);
console.log(myObj.name);`,
        },
        output: 'The console will display "John" after parsing the JSON string into an object.',
      },
      {
        slug: 'es6-features',
        title: 'ES6 Features',
        description: 'Learn modern JavaScript syntax.',
        content: 'ES6 (ECMAScript 2015) introduced many powerful features like `let` and `const`, arrow functions for more concise function syntax, classes for object-oriented programming, template literals, and more.',
        codeSnippet: {
          language: 'javascript',
          code: `const greet = (name) => {
  return \`Hello, \${name}!\`;
};
console.log(greet("World"));`,
        },
        output: 'This uses an arrow function and a template literal to create a greeting. The console will display "Hello, World!".',
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
    'introduction-to-html': [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyperlinks and Text Markup Language',
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyperlinking Text Management Language',
        ],
        correctAnswer: 1,
        explanation:
          'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages.',
      },
      {
        question: 'Who is making the Web standards?',
        options: [
          'Mozilla',
          'Google',
          'The World Wide Web Consortium',
          'Microsoft',
        ],
        correctAnswer: 2,
        explanation:
          'The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web.',
      },
      {
        question:
          'What is the correct sequence of HTML tags for starting a webpage?',
        options: [
          'head, title, html, body',
          'html, body, head, title',
          'html, head, title, body',
          'html, head, body, title',
        ],
        correctAnswer: 2,
        explanation:
          'The correct order is `<html>`, which contains `<head>` (and inside it `<title>`), followed by `<body>`.',
      },
      {
        question: 'What is the purpose of the `<!DOCTYPE html>` declaration?',
        options: [
          'It defines the character set for the document.',
          'It tells the browser that the document is an HTML5 document.',
          'It creates a comment in the code.',
          'It links to an external stylesheet.',
        ],
        correctAnswer: 1,
        explanation:
          'The `<!DOCTYPE html>` declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in. For HTML5, it is simply `<!DOCTYPE html>`.',
      },
      {
        question: 'Which element contains all the visible content of a webpage?',
        options: ['<head>', '<body>', '<main>', '<content>'],
        correctAnswer: 1,
        explanation:
          'The `<body>` element defines the document\'s body. It contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.',
      },
      {
        question: 'The content of the `<title>` element is displayed where?',
        options: [
          'In the main content of the page',
          'In the browser\'s tab or window title bar',
          'In the footer of the page',
          'It is not displayed anywhere',
        ],
        correctAnswer: 1,
        explanation:
          'The `<title>` element specifies a title for the HTML page, which is shown in the browser\'s title bar or in the page\'s tab.',
      },
      {
        question: 'What is a "markup language"?',
        options: [
          'A language that uses tags to define elements within a document.',
          'A programming language for creating dynamic websites.',
          'A language for styling web pages.',
          'A language for querying databases.',
        ],
        correctAnswer: 0,
        explanation:
          'A markup language is a computer language that uses tags to define elements within a document. It is human-readable, containing standard words, rather than typical programming syntax.',
      },
      {
        question: 'Is HTML a case-sensitive language?',
        options: [
          'Yes, all tags must be in lowercase.',
          'Yes, all tags must be in uppercase.',
          'No, HTML tags are not case sensitive.',
          'Only for certain tags.',
        ],
        correctAnswer: 2,
        explanation:
          'HTML tags are not case sensitive. `<P>` means the same as `<p>`. However, the W3C recommends using lowercase in HTML, and demands lowercase for stricter document types like XHTML.',
      },
      {
        question: 'What is the file extension for an HTML file?',
        options: ['.html or .htm', '.xml', '.css', '.web'],
        correctAnswer: 0,
        explanation:
          'HTML files are text files with the file extension `.html` or `.htm`.',
      },
      {
        question: 'What does the `<body>` element represent?',
        options: [
          'The header section of the document',
          'The main content of the document',
          'The metadata about the document',
          'A script to be run on the page',
        ],
        correctAnswer: 1,
        explanation:
          'The `<body>` element represents the content of the document. There can be only one `<body>` element in a document.',
      },
    ],
    'html-tags-and-elements': [
      {
        question: 'Which element is used for the largest heading?',
        options: ['<h6>', '<heading>', '<h1>', '<head>'],
        correctAnswer: 2,
        explanation:
          '<h1> defines the most important heading. <h6> defines the least important heading.',
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<break>', '<lb>', '<br>', '<brk>'],
        correctAnswer: 2,
        explanation:
          'The `<br>` tag is an empty tag which means that it has no end tag. It inserts a single line break.',
      },
      {
        question: 'Which character is used to indicate an end tag?',
        options: ['<', '^', '/', '*'],
        correctAnswer: 2,
        explanation:
          'An end tag is written like a start tag, but with a forward slash (/) inserted before the element name.',
      },
      {
        question:
          'What is the difference between an element and a tag in HTML?',
        options: [
          'There is no difference.',
          'A tag is the opening part, while an element includes the opening tag, content, and closing tag.',
          'An element is the opening part, while a tag includes the opening tag, content, and closing tag.',
          'Tags are for styling, elements are for structure.',
        ],
        correctAnswer: 1,
        explanation:
          'An HTML element is defined by a start tag, some content, and an end tag. The tag is just the label, like `<p>` or `</p>`.',
      },
      {
        question: 'Which of the following is an "empty" or "void" element?',
        options: ['<p>', '<div>', '<img>', '<span>'],
        correctAnswer: 2,
        explanation:
          'Empty elements, also called void elements, are elements that do not have a closing tag or content. `<img>` is a common example.',
      },
      {
        question: 'Which tag is used to define a hyperlink?',
        options: ['<link>', '<href>', '<a>', '<hyperlink>'],
        correctAnswer: 2,
        explanation: 'The `<a>` (anchor) tag is used to define hyperlinks.',
      },
      {
        question: 'What is the purpose of the `<div>` tag?',
        options: [
          'To create a paragraph.',
          'To display an image.',
          'To define a division or a section in an HTML document.',
          'To make text bold.',
        ],
        correctAnswer: 2,
        explanation:
          'The `<div>` tag is a block-level container for other HTML elements and is often used to group elements for styling purposes or with JavaScript.',
      },
      {
        question: 'Which tag is used to make text italic?',
        options: ['<em>', '<i>', 'Both <em> and <i>', 'Neither'],
        correctAnswer: 2,
        explanation:
          'Both `<i>` (italic) and `<em>` (emphasized) tags traditionally render text as italic. However, `<em>` carries semantic meaning of emphasis.',
      },
      {
        question:
          'What does it mean to "nest" HTML elements?',
        options: [
          'Placing elements side-by-side.',
          'Placing an element inside another element.',
          'Commenting out elements.',
          'Linking elements together.',
        ],
        correctAnswer: 1,
        explanation:
          'Nesting in HTML means placing elements inside other elements, like putting a `<strong>` tag inside a `<p>` tag.',
      },
      {
        question:
          'Which of these elements is a block-level element by default?',
        options: ['<span>', '<a>', '<img>', '<p>'],
        correctAnswer: 3,
        explanation:
          'Block-level elements always start on a new line and take up the full width available. `<p>` is a classic example, whereas `<span>`, `<a>`, and `<img>` are inline elements.',
      },
    ],
    'attributes-in-html': [
        {
          question: 'What is the purpose of the `href` attribute in an `<a>` tag?',
          options: [
            'It specifies the color of the link.',
            'It specifies the URL of the page the link goes to.',
            'It specifies the text to be displayed.',
            'It specifies the height of the link.',
          ],
          correctAnswer: 1,
          explanation:
            'The `href` attribute in an anchor `<a>` tag specifies the URL (Uniform Resource Locator) of the destination.',
        },
        {
          question: 'Which attribute is used to provide an alternative text for an image, if the image cannot be displayed?',
          options: [
            'title',
            'src',
            'alt',
            'longdesc',
          ],
          correctAnswer: 2,
          explanation:
            'The `alt` attribute provides alternative text for an image, which is crucial for accessibility and for situations where the image fails to load.',
        },
        {
          question: 'How do you add a tooltip to an element in HTML?',
          options: [
            'Using the `tooltip` attribute.',
            'Using the `title` attribute.',
            'Using the `alt` attribute.',
            'Using the `description` attribute.',
          ],
          correctAnswer: 1,
          explanation:
            'The global `title` attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.',
        },
        {
          question: 'What is the purpose of the `style` attribute?',
          options: [
            'To link to an external stylesheet.',
            'To apply inline CSS to an element.',
            'To define a CSS class.',
            'To import a font.',
          ],
          correctAnswer: 1,
          explanation:
            'The `style` attribute is used to add styles to an element, such as color, font, size, etc. This is known as inline styling.',
        },
        {
          question: 'Which attribute specifies the path to an image file in an `<img>` tag?',
          options: [
            'href',
            'path',
            'source',
            'src',
          ],
          correctAnswer: 3,
          explanation:
            'The `src` (source) attribute is required for the `<img>` tag and specifies the URL or path to the image to be displayed.',
        },
        {
          question: 'In a form, which attribute of the `<input>` tag determines the type of input field?',
          options: [
            'type',
            'inputmode',
            'kind',
            'format',
          ],
          correctAnswer: 0,
          explanation:
            'The `type` attribute of the `<input>` element is the most important attribute, as it specifies what kind of input control to display (e.g., `text`, `password`, `checkbox`, `submit`).',
        },
        {
          question: 'How are boolean attributes written in HTML?',
          options: [
            'attribute="true"',
            'attribute="1"',
            'Just the attribute name itself',
            'attribute: true',
          ],
          correctAnswer: 2,
          explanation:
            'For boolean attributes, their presence means the value is true, and their absence means the value is false. For example, `<input disabled>` is sufficient.',
        },
        {
          question: 'What is the purpose of the `id` attribute?',
          options: [
            'To specify a unique identifier for an HTML element.',
            'To apply a style to multiple elements.',
            'To indicate the language of the element.',
            'To create a tooltip.',
          ],
          correctAnswer: 0,
          explanation:
            'The `id` attribute specifies a unique id for an HTML element. The value of the id must be unique within the HTML document. It is used by CSS and JavaScript to style or manipulate a specific element.',
        },
        {
          question: 'What is the purpose of the `class` attribute?',
          options: [
            'To specify a unique identifier for an element.',
            'To specify one or more class names for an element.',
            'To define the character encoding.',
            'To specify the element\'s language.',
          ],
          correctAnswer: 1,
          explanation:
            'The `class` attribute is used to specify one or more class names for an HTML element. It is often used to point to a class in a style sheet, allowing multiple elements to share the same styling.',
        },
        {
          question: 'Which two attributes are required for an `<img>` tag?',
          options: [
            'src and href',
            'src and alt',
            'href and alt',
            'title and src',
          ],
          correctAnswer: 1,
          explanation:
            'An `<img>` tag must have a `src` attribute to specify the image source and an `alt` attribute to provide alternative text for accessibility.',
        },
      ],
      'headings-and-paragraphs': [
        {
          question: 'How many heading levels does HTML support?',
          options: ['3', '4', '6', '8'],
          correctAnswer: 2,
          explanation: 'HTML provides six levels of headings, from `<h1>` (the most important) to `<h6>` (the least important).',
        },
        {
          question: 'Which heading element should be used for the main title of a page?',
          options: ['<h1>', '<h2>', '<head>', '<title>'],
          correctAnswer: 0,
          explanation: 'An `<h1>` element should be used for the main heading of the page content. There should typically be only one `<h1>` per page for good SEO and document structure.',
        },
        {
          question: 'What is the default display type for a `<p>` element?',
          options: ['inline', 'inline-block', 'block', 'none'],
          correctAnswer: 2,
          explanation: 'Paragraph (`<p>`) elements are block-level elements, meaning they start on a new line and take up the full width available.',
        },
        {
          question: 'Is it valid to put an `<h1>` inside a `<p>` tag?',
          options: ['Yes, it is common practice.', 'No, block-level elements cannot be nested inside paragraphs.', 'Only if you use a special attribute.', 'It depends on the browser.'],
          correctAnswer: 1,
          explanation: 'This is invalid HTML. A `<p>` tag can only contain phrasing content, and `<h1>` is a block-level heading element, not phrasing content.',
        },
        {
          question: 'What is the primary purpose of using heading tags?',
          options: ['To make text bigger and bolder.', 'To structure the document and create a table of contents for search engines.', 'To add comments to the code.', 'To insert images.'],
          correctAnswer: 1,
          explanation: 'While headings do have default styling (like being big and bold), their primary purpose is to provide semantic structure to the document, which is crucial for accessibility and SEO.',
        },
        {
          question: 'If you want to skip a heading level (e.g., from `<h2>` to `<h4>`), is this considered good practice?',
          options: ['Yes, it helps with styling.', 'It doesn\'t matter.', 'No, heading levels should not be skipped to maintain a logical structure.', 'Yes, it is required for sub-sections.'],
          correctAnswer: 2,
          explanation: 'For accessibility and logical document flow, you should not skip heading levels. The structure should be hierarchical, like an outline (1, 1.1, 1.1.1, 1.2, etc.).',
        },
        {
          question: 'Which element is used to define a paragraph?',
          options: ['<paragraph>', '<para>', '<p>', '<pg>'],
          correctAnswer: 2,
          explanation: 'The `<p>` element is the correct tag for defining a paragraph of text.',
        },
        {
          question: 'How do browsers typically render a `<p>` element?',
          options: ['With no extra spacing.', 'With space above and below the text.', 'As italicized text.', 'As a numbered list item.'],
          correctAnswer: 1,
          explanation: 'Browsers automatically add some white space (a margin) before and after a `<p>` element to separate it from other content.',
        },
        {
          question: 'Can a heading element like `<h2>` contain a `<p>` element?',
          options: ['Yes, always.', 'No, never.', 'Only if the paragraph is very short.', 'It is valid but not recommended.'],
          correctAnswer: 1,
          explanation: 'Heading elements (`<h1>`-`<h6>`) can only contain phrasing content (like text, `<span>`, `<a>`, etc.), not block-level elements like `<p>`.',
        },
        {
          question: 'What happens if you have multiple `<h1>` tags on a single page?',
          options: ['The browser will show an error.', 'It is valid in HTML5 and can be used for section headings.', 'The page will not render.', 'The first `<h1>` will be used, and the rest will be ignored.'],
          correctAnswer: 1,
          explanation: 'While it was previously advised to use only one `<h1>` per page, the HTML5 specification allows for multiple `<h1>` tags, as long as they are the main heading for their respective sectioning content (like `<article>` or `<section>`). However, for the main page title, one `<h1>` is still best practice.',
        },
      ],
      'links-and-navigation': [
        {
          question: 'Which attribute is used to define the destination of a link?',
          options: ['src', 'link', 'href', 'dest'],
          correctAnswer: 2,
          explanation: 'The `href` attribute in an `<a>` tag specifies the URL of the page the link goes to.',
        },
        {
          question: 'How do you create a link that opens in a new tab?',
          options: ['<a href="..." newtab>', '<a href="..." target="_blank">', '<a href="..." target="_new">', '<a href="..." open="new">'],
          correctAnswer: 1,
          explanation: 'Using `target="_blank"` instructs the browser to open the linked document in a new window or tab.',
        },
        {
          question: 'What is the purpose of the `<nav>` element?',
          options: ['To create a new paragraph.', 'To define a set of navigation links.', 'To embed a video.', 'To make text bold.'],
          correctAnswer: 1,
          explanation: 'The `<nav>` element is a semantic tag used to define a block of navigation links, either to other pages or to parts of the current page.',
        },
        {
          question: 'How can you create a link to a section within the same page?',
          options: ['<a href="#section-id">', '<a href="section-id">', '<a link="#section-id">', '<a target="section-id">'],
          correctAnswer: 0,
          explanation: 'You can create an internal link by setting the `href` attribute to a hash symbol `#` followed by the `id` of the element you want to scroll to.',
        },
        {
          question: 'How do you create a link that initiates an email?',
          options: ['<a href="email:user@example.com">', '<a href="mailto:user@example.com">', '<a mail="user@example.com">', '<a email="user@example.com">'],
          correctAnswer: 1,
          explanation: 'Using the `mailto:` URL scheme in the `href` attribute will open the user\'s default email client with the specified address.',
        },
        {
          question: 'What is a "relative" URL in a hyperlink?',
          options: ['A full web address (e.g., https://www.example.com).', 'A URL that points to a file within the same website, without the domain name.', 'A URL that changes based on the user\'s location.', 'A URL that can only be accessed from a specific IP address.'],
          correctAnswer: 1,
          explanation: 'A relative URL points to a file within the same website (like `/about.html`). An absolute URL is a full web address.',
        },
        {
          question: 'What is the default appearance of an unvisited link?',
          options: ['Blue and underlined.', 'Purple and underlined.', 'Red and not underlined.', 'Black and bold.'],
          correctAnswer: 0,
          explanation: 'By default, browsers render unvisited links as blue and underlined.',
        },
        {
          question: 'What is the default appearance of a visited link?',
          options: ['Blue and underlined.', 'Purple and underlined.', 'Green and not underlined.', 'Black and italic.'],
          correctAnswer: 1,
          explanation: 'By default, browsers render visited links as purple and underlined to provide a visual cue to the user.',
        },
        {
          question: 'Can an image be used as a link?',
          options: ['No, only text can be a link.', 'Yes, by nesting an `<img>` tag inside an `<a>` tag.', 'Yes, by using a special `<imagelink>` tag.', 'Only SVG images can be links.'],
          correctAnswer: 1,
          explanation: 'You can make any content a link by placing it inside `<a>` tags, including images. Example: `<a href="..."><img src="..."></a>`',
        },
        {
          question: 'What is the purpose of the text between the opening `<a>` and closing `</a>` tags?',
          options: ['It is a comment for developers.', 'It is the alternative text for the link.', 'It is the visible, clickable part of the hyperlink.', 'It is the URL of the link.'],
          correctAnswer: 2,
          explanation: 'The content inside the `<a>` element, known as the anchor text, becomes the part that users can click on.',
        },
      ],
      'images-and-multimedia': [
        {
          question: 'Which tag is used to embed an image in HTML?',
          options: ['<image>', '<img>', '<pic>', '<picture>'],
          correctAnswer: 1,
          explanation: 'The `<img>` tag is used to embed an image on a web page.',
        },
        {
          question: 'What is the purpose of the `alt` attribute on an `<img>` tag?',
          options: ['To provide a caption for the image.', 'To specify the image URL.', 'To provide alternative text for screen readers and when the image fails to load.', 'To set the image alignment.'],
          correctAnswer: 2,
          explanation: 'The `alt` attribute provides alternative text for an image, which is essential for accessibility and SEO.',
        },
        {
          question: 'Which attributes are used to specify the dimensions of an image?',
          options: ['width and height', 'size and aspect-ratio', 'x and y', 'dimensions and scale'],
          correctAnswer: 0,
          explanation: 'The `width` and `height` attributes are used to specify the size of the image in pixels. Setting these helps the browser reserve space before the image loads.',
        },
        {
          question: 'Which of these is NOT a common image format for the web?',
          options: ['JPEG', 'PNG', 'GIF', 'TIFF'],
          correctAnswer: 3,
          explanation: 'JPEG, PNG, and GIF are the most common and widely supported image formats on the web. TIFF is a high-quality format typically used for print, not web display.',
        },
        {
          question: 'What is the purpose of the `<figure>` and `<figcaption>` elements?',
          options: ['To draw shapes on the page.', 'To create a responsive image gallery.', 'To group an image with its caption semantically.', 'To apply a filter to an image.'],
          correctAnswer: 2,
          explanation: 'The `<figure>` element is used to encapsulate media such as an image, diagram, or code snippet, and the `<figcaption>` element is used to provide a caption for it.',
        },
        {
          question: 'Which multimedia format is used for embedding sound files?',
          options: ['<sound>', '<music>', '<audio>', '<mp3>'],
          correctAnswer: 2,
          explanation: 'The `<audio>` element is the standard HTML5 tag for embedding audio content on a web page.',
        },
        {
          question: 'Which multimedia format is used for embedding video files?',
          options: ['<video>', '<movie>', '<media>', '<mp4>'],
          correctAnswer: 0,
          explanation: 'The `<video>` element is the standard HTML5 tag for embedding video content on a web page.',
        },
        {
          question: 'What does the `controls` attribute do on `<audio>` and `<video>` tags?',
          options: ['It starts the media playback automatically.', 'It loops the media.', 'It displays playback controls like play, pause, and volume.', 'It sets the media quality.'],
          correctAnswer: 2,
          explanation: 'The `controls` attribute is a boolean attribute that, when present, specifies that audio/video controls should be displayed.',
        },
        {
          question: 'How can you make an image responsive, so it scales with the viewport?',
          options: ['By setting `width` and `height` to `auto`.', 'By using JavaScript to resize it.', 'By setting `style="max-width: 100%; height: auto;"` in CSS.', 'By using the `<responsive-img>` tag.'],
          correctAnswer: 2,
          explanation: 'A common technique for responsive images is to set `max-width: 100%` and `height: auto` in CSS. This ensures the image never exceeds the width of its container and maintains its aspect ratio.',
        },
        {
          question: 'What is the purpose of the `<picture>` element?',
          options: ['To create a photo gallery.', 'To serve different image files based on screen size or device capabilities.', 'To draw a picture using JavaScript.', 'To apply a filter effect to an image.'],
          correctAnswer: 1,
          explanation: 'The `<picture>` element gives web developers more flexibility in specifying image resources. It contains one or more `<source>` elements, each referring to a different image source, allowing the browser to choose the most appropriate image to display (e.g., for different screen resolutions or formats).',
        },
      ],
      'lists': [
        {
          question: 'Which tag is used to create an unordered (bulleted) list?',
          options: ['<ol>', '<dl>', '<ul>', '<list>'],
          correctAnswer: 2,
          explanation: 'The `<ul>` tag is used to define an unordered list, which is typically rendered with bullet points.',
        },
        {
          question: 'Which tag is used to create an ordered (numbered) list?',
          options: ['<ol>', '<dl>', '<ul>', '<list>'],
          correctAnswer: 0,
          explanation: 'The `<ol>` tag is used to define an ordered list, which is typically rendered with numbers.',
        },
        {
          question: 'Which tag defines a single item within a list?',
          options: ['<item>', '<li>', '<dd>', '<dt>'],
          correctAnswer: 1,
          explanation: 'The `<li>` (list item) tag is used to define each item within `<ul>`, `<ol>`, and `<menu>` lists.',
        },
        {
          question: 'How can you change the marker of an ordered list to Roman numerals (I, II, III)?',
          options: ['<ol type="I">', '<ol style="list-style-type: upper-roman;">', 'Both of the above are valid ways.', 'This is not possible with HTML/CSS.'],
          correctAnswer: 2,
          explanation: 'You can use the deprecated `type="I"` attribute directly in HTML or, preferably, use the CSS property `list-style-type: upper-roman;`.',
        },
        {
          question: 'What is a description list (`<dl>`) used for?',
          options: ['To create a simple bulleted list.', 'To create a numbered list.', 'To create a list of terms and their descriptions.', 'To create a dropdown list.'],
          correctAnswer: 2,
          explanation: 'A description list (`<dl>`) is used for creating a list of terms (`<dt>`) and their corresponding descriptions (`<dd>`).',
        },
        {
          question: 'What does nesting lists mean?',
          options: ['Placing lists side-by-side.', 'Placing a list inside another list item (`<li>`).', 'Using JavaScript to create lists.', 'Changing the color of a list.'],
          correctAnswer: 1,
          explanation: 'Nesting lists involves placing a new `<ul>` or `<ol>` inside an `<li>` element to create sub-lists.',
        },
        {
          question: 'How do you change the bullet point of an unordered list to a square?',
          options: ['<ul type="square">', '<ul style="list-style-type: square;">', 'Both of the above are valid ways.', 'You must use an image.'],
          correctAnswer: 2,
          explanation: 'The deprecated `type="square"` attribute can be used, but the modern and recommended approach is to use the CSS property `list-style-type: square;`.',
        },
        {
          question: 'Which tag is used for the term in a description list?',
          options: ['<dl>', '<dt>', '<dd>', '<li>'],
          correctAnswer: 1,
          explanation: 'The `<dt>` (description term) tag is used to specify the term in a description list (`<dl>`).',
        },
        {
          question: 'Which tag is used for the description in a description list?',
          options: ['<dl>', '<dt>', '<dd>', '<li>'],
          correctAnswer: 2,
          explanation: 'The `<dd>` (description details) tag is used to provide the description for the preceding term (`<dt>`) in a description list.',
        },
        {
          question: 'Can you have an `<ol>` inside a `<ul>`?',
          options: ['No, that is invalid HTML.', 'Yes, you can nest any list type within another by placing it inside an `<li>`.', 'Only if the `<ul>` has a special attribute.', 'Only with JavaScript.'],
          correctAnswer: 1,
          explanation: 'Yes, it is perfectly valid to nest different types of lists. For example, you can have a numbered list of steps within a bulleted list of topics.',
        },
      ],
      'tables': [
        {
          question: 'Which tag defines an HTML table?',
          options: ['<tbl>', '<table>', '<thead>', '<tr>'],
          correctAnswer: 1,
          explanation: 'The `<table>` element is the container for all table-related content.',
        },
        {
          question: 'Which tag is used to define a table row?',
          options: ['<td>', '<col>', '<th>', '<tr>'],
          correctAnswer: 3,
          explanation: 'The `<tr>` (table row) element is used to define a row of cells in a table.',
        },
        {
          question: 'Which tag is used for a standard data cell in a table?',
          options: ['<td>', '<cell>', '<th>', '<data>'],
          correctAnswer: 0,
          explanation: 'The `<td>` (table data) element contains the data for a standard cell.',
        },
        {
          question: 'Which tag is used for a header cell in a table?',
          options: ['<td>', '<head>', '<th>', '<header>'],
          correctAnswer: 2,
          explanation: 'The `<th>` (table header) element defines a header cell. Text in `<th>` elements are bold and centered by default.',
        },
        {
          question: 'What is the purpose of the `<thead>`, `<tbody>`, and `<tfoot>` elements?',
          options: ['They are required for all tables.', 'They help style the table with CSS.', 'They group the header, body, and footer content of a table for semantic structure.', 'They control the table\'s alignment.'],
          correctAnswer: 2,
          explanation: 'These elements provide semantic structure, which can be useful for styling, scripting, and accessibility. `<tbody>` is technically required if you use `<thead>` or `<tfoot>`.',
        },
        {
          question: 'How do you make a cell span across multiple columns?',
          options: ['Using the `span` attribute.', 'Using the `colspan` attribute.', 'Using the `col-span` CSS property.', 'Using the `merge` attribute.'],
          correctAnswer: 1,
          explanation: 'The `colspan` attribute on a `<td>` or `<th>` element specifies the number of columns a cell should span.',
        },
        {
          question: 'How do you make a cell span across multiple rows?',
          options: ['Using the `rowspan` attribute.', 'Using the `span` attribute.', 'Using the `row-span` CSS property.', 'Using the `v-span` attribute.'],
          correctAnswer: 0,
          explanation: 'The `rowspan` attribute on a `<td>` or `<th>` element specifies the number of rows a cell should span.',
        },
        {
          question: 'What is the purpose of the `<caption>` element in a table?',
          options: ['To provide a caption for an image within a cell.', 'To create a header for the table.', 'To provide a title or caption for the entire table.', 'To add a comment that is not displayed.'],
          correctAnswer: 2,
          explanation: 'The `<caption>` tag must be inserted immediately after the `<table>` tag and serves as a title or explanation for the table.',
        },
        {
          question: 'How can you add a border to a table?',
          options: ['Using the `border` attribute on the `<table>` tag.', 'Using CSS `border` property.', 'Both A and B.', 'Tables have borders by default.'],
          correctAnswer: 2,
          explanation: 'You can use the outdated `border="1"` attribute in HTML, but the modern and recommended method is to use the `border` property in CSS for more control over styling.',
        },
        {
          question: 'What is the purpose of the `<colgroup>` and `<col>` elements?',
          options: ['To group columns together for formatting.', 'To create a single column.', 'To merge columns.', 'To define the color of a column.'],
          correctAnswer: 0,
          explanation: 'The `<colgroup>` element is used to group one or more columns in a table for formatting. The `<col>` element is then used to specify style for each column.',
        },
      ],
      'forms-and-input-elements': [
        {
          question: 'Which tag is used to create an HTML form?',
          options: ['<form>', '<input>', '<fieldset>', '<label>'],
          correctAnswer: 0,
          explanation: 'The `<form>` element is the container for all form controls.',
        },
        {
          question: 'Which `<input>` type is used for a single-line text field?',
          options: ['type="textfield"', 'type="text"', 'type="line"', 'type="string"'],
          correctAnswer: 1,
          explanation: '`<input type="text">` defines a single-line text input field.',
        },
        {
          question: 'What is the purpose of the `<label>` element?',
          options: ['To create a submit button.', 'To provide a caption for a group of form elements.', 'To provide a clickable label that is associated with a form control.', 'To create a text area.'],
          correctAnswer: 2,
          explanation: 'The `<label>` tag defines a label for many form elements. It improves usability because the user can click on the label to focus/activate the control.',
        },
        {
          question: 'Which `<input>` type allows the user to select only one option from a limited number of choices?',
          options: ['type="checkbox"', 'type="select"', 'type="radio"', 'type="option"'],
          correctAnswer: 2,
          explanation: '`<input type="radio">` creates a radio button. Radio buttons are normally presented in groups (with the same `name` attribute), and only one can be selected.',
        },
        {
          question: 'Which `<input>` type allows the user to select zero or more options from a limited number of choices?',
          options: ['type="checkbox"', 'type="select"', 'type="radio"', 'type="multiselect"'],
          correctAnswer: 0,
          explanation: '`<input type="checkbox">` defines a checkbox. Checkboxes let a user select zero or more options of a limited number of choices.',
        },
        {
          question: 'Which element is used to create a dropdown list?',
          options: ['<input type="dropdown">', '<list>', '<select>', '<dropdown>'],
          correctAnswer: 2,
          explanation: 'The `<select>` element is used to create a drop-down list, with the options defined by `<option>` tags inside it.',
        },
        {
          question: 'What is the purpose of the `name` attribute on an `<input>` element?',
          options: ['It provides a label for the input.', 'It is sent to the server along with the input\'s value when the form is submitted.', 'It is a unique ID for the input.', 'It sets the default value of the input.'],
          correctAnswer: 1,
          explanation: 'When a form is submitted, the `name` attribute is used as a reference for the data. For example, `name="username"` with value "John" becomes `username=John` in the submitted data.',
        },
        {
          question: 'Which `<input>` type is used for a submit button?',
          options: ['type="button"', 'type="submit"', 'type="send"', 'type="ok"'],
          correctAnswer: 1,
          explanation: '`<input type="submit">` defines a button for submitting the form data to a form-handler.',
        },
        {
          question: 'Which element is used for a multi-line text input?',
          options: ['<input type="textarea">', '<input type="multiline">', '<textarea>', '<text-field>'],
          correctAnswer: 2,
          explanation: 'The `<textarea>` element defines a multi-line text input control.',
        },
        {
          question: 'What does the `placeholder` attribute do?',
          options: ['It sets the default value of the input field.', 'It provides a short hint that describes the expected value of an input field.', 'It is the name of the input field sent to the server.', 'It makes the input field required.'],
          correctAnswer: 1,
          explanation: 'The `placeholder` attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format).',
        },
      ],
      'semantic-html': [
        {
          question: 'Which element is intended to contain the main content of a document?',
          options: ['<section>', '<body>', '<main>', '<article>'],
          correctAnswer: 2,
          explanation: 'The `<main>` tag specifies the main, dominant content of the `<body>` of a document. The content inside the `<main>` element should be unique to the document.',
        },
        {
          question: 'Which element represents a self-contained composition in a document, such as a forum post or a blog entry?',
          options: ['<section>', '<aside>', '<article>', '<div>'],
          correctAnswer: 2,
          explanation: 'The `<article>` element specifies independent, self-contained content. It should make sense on its own, and it should be possible to distribute it independently from the rest of the site.',
        },
        {
          question: 'What is the correct semantic element for a group of navigation links?',
          options: ['<menu>', '<nav>', '<navigation>', '<links>'],
          correctAnswer: 1,
          explanation: 'The `<nav>` element is designed to contain major blocks of navigation links.',
        },
        {
          question: 'Which element is appropriate for content that is tangentially related to the content around it, like a sidebar?',
          options: ['<sidebar>', '<details>', '<aside>', '<section>'],
          correctAnswer: 2,
          explanation: 'The `<aside>` element represents a portion of a document whose content is only indirectly related to the document\'s main content, often presented as a sidebar.',
        },
        {
          question: 'What is the primary benefit of using semantic HTML?',
          options: ['It makes your website load faster.', 'It automatically styles your content.', 'It improves accessibility, SEO, and makes the code easier to understand.', 'It is required by all modern browsers.'],
          correctAnswer: 2,
          explanation: 'Semantic HTML provides meaning to the content, which helps screen readers interpret the page for visually impaired users and helps search engines understand the structure and importance of content.',
        },
        {
          question: 'Which element typically contains introductory content or navigational aids for a section or the whole page?',
          options: ['<header>', '<heading>', '<top>', '<intro>'],
          correctAnswer: 0,
          explanation: 'The `<header>` element represents a container for introductory content or a set of navigational links. It can be used for a page, an article, or a section.',
        },
        {
          question: 'Which element typically contains metadata, copyright information, or links to related documents for a section or page?',
          options: ['<bottom>', '<footer>', '<end>', '<summary>'],
          correctAnswer: 1,
          explanation: 'The `<footer>` element defines a footer for a document or section, and it typically contains authorship information, copyright data, or links to related documents.',
        },
        {
          question: 'Is `<div>` a semantic element?',
          options: ['Yes, it defines a division of content.', 'No, it carries no semantic meaning and is used for styling or grouping.', 'Only when it has a `role` attribute.', 'Yes, it is the most important semantic element.'],
          correctAnswer: 1,
          explanation: '`<div>` is a non-semantic element. It is a generic container used to group elements for styling purposes or to be manipulated with scripts, but it provides no information about its content.',
        },
        {
          question: 'What is the `<section>` element used for?',
          options: ['To define a self-contained article.', 'To define a thematic grouping of content, typically with a heading.', 'To define a sidebar.', 'To replace all `<div>` tags.'],
          correctAnswer: 1,
          explanation: 'The `<section>` element groups related content together. A general rule is that the content of a `<section>` should be thematically related and would likely appear as an entry in an outline of the page.',
        },
        {
          question: 'Which element would be best for grouping an image and its caption?',
          options: ['<figure>', '<div>', '<image>', '<section>'],
          correctAnswer: 0,
          explanation: 'The `<figure>` element is the semantically correct way to encapsulate media like an image, illustration, diagram, or code snippet, which can be accompanied by a `<figcaption>`.',
        },
      ],
      'html5-new-elements': [
        {
          question: 'Which HTML5 element is used to draw graphics, on the fly, via scripting?',
          options: ['<svg>', '<canvas>', '<graphic>', '<draw>'],
          correctAnswer: 1,
          explanation: 'The `<canvas>` element is used to draw graphics via JavaScript. It is a container for graphics and you must use a script to actually draw the graphics.',
        },
        {
          question: 'Which new input type in HTML5 provides a color picker?',
          options: ['type="picker"', 'type="color"', 'type="rgb"', 'type="palette"'],
          correctAnswer: 1,
          explanation: '`<input type="color">` defines a color picker, allowing the user to select a color from a standard color-picker interface.',
        },
        {
          question: 'What is the purpose of the `<mark>` element?',
          options: ['To create a bookmark.', 'To define text that should be marked or highlighted.', 'To add a watermark to the page.', 'To create a marquee text effect.'],
          correctAnswer: 1,
          explanation: 'The `<mark>` tag defines text that should be marked or highlighted, for example, to bring it to the reader\'s attention.',
        },
        {
          question: 'Which element represents a specific period in time or a date?',
          options: ['<date>', '<time>', '<calendar>', '<datetime>'],
          correctAnswer: 1,
          explanation: 'The `<time>` tag defines a specific time (or datetime). The `datetime` attribute of this element is used to translate the date into a machine-readable format.',
        },
        {
          question: 'Which HTML5 element would you use to show the completion progress of a task?',
          options: ['<progress>', '<load>', '<bar>', '<status>'],
          correctAnswer: 0,
          explanation: 'The `<progress>` element represents the completion progress of a task, typically displayed as a progress bar.',
        },
        {
          question: 'What does the `<details>` element do?',
          options: ['It creates a detailed report.', 'It provides extra information that is visible by default.', 'It creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.', 'It links to a details page.'],
          correctAnswer: 2,
          explanation: 'The `<details>` tag specifies additional details that the user can open and close on demand. The `<summary>` tag is used to provide a visible heading for the details.',
        },
        {
          question: 'Which new input type is specifically for entering a date and time (year, month, day, hour, minute)?',
          options: ['type="date"', 'type="time"', 'type="datetime-local"', 'type="calendar"'],
          correctAnswer: 2,
          explanation: '`<input type="datetime-local">` specifies a date and time input field, with no time zone.',
        },
        {
          question: 'Which of these is NOT a new semantic element introduced in HTML5?',
          options: ['<article>', '<header>', '<footer>', '<bloc>'],
          correctAnswer: 3,
          explanation: '`<article>`, `<header>`, and `<footer>` are all important semantic elements introduced in HTML5. `<bloc>` is not an HTML element.',
        },
        {
          question: 'Which element provides a "datalist" for an `<input>` element?',
          options: ['<options>', '<list>', '<autocomplete>', '<datalist>'],
          correctAnswer: 3,
          explanation: 'The `<datalist>` element specifies a list of pre-defined options for an `<input>` element. Users will see a drop-down list of the pre-defined options as they input data.',
        },
        {
          question: 'The `<video>` and `<audio>` tags are new in HTML5. What was commonly used to play media before them?',
          options: ['Java Applets', 'Silverlight', 'Flash', 'All of the above.'],
          correctAnswer: 3,
          explanation: 'Before HTML5, playing audio and video on the web required browser plugins like Adobe Flash, Microsoft Silverlight, or Java Applets. The native `<audio>` and `<video>` elements removed this dependency.',
        },
      ],
      'iframes': [
        {
          question: 'What is the primary purpose of an iframe?',
          options: ['To create a frame around the webpage.', 'To embed another HTML document within the current one.', 'To apply a style frame to an image.', 'To run a script in a separate frame.'],
          correctAnswer: 1,
          explanation: 'An `<iframe>` (Inline Frame) is used to embed another document within the current HTML document. This is often used for ads, videos, or maps.',
        },
        {
          question: 'Which attribute specifies the URL of the document to embed in an iframe?',
          options: ['href', 'src', 'link', 'url'],
          correctAnswer: 1,
          explanation: 'The `src` attribute specifies the URL (web address) of the inline frame page.',
        },
        {
          question: 'How do you set the width and height of an iframe?',
          options: ['Using the `size` attribute.', 'Using the `width` and `height` attributes.', 'Using CSS properties `frame-width` and `frame-height`.', 'The size is determined automatically.'],
          correctAnswer: 1,
          explanation: 'The `width` and `height` attributes specify the size of the iframe in pixels. You can also use CSS to style its dimensions.',
        },
        {
          question: 'What is a potential security risk of using iframes?',
          options: ['They can slow down your website.', 'They can be used for "clickjacking" attacks.', 'They are not supported by modern browsers.', 'They can only display insecure content.'],
          correctAnswer: 1,
          explanation: 'Clickjacking is a malicious technique of tricking a user into clicking on something different from what the user perceives, potentially revealing confidential information or taking control of their computer while clicking on seemingly innocuous web pages. Iframes are a common vector for this.',
        },
        {
          question: 'How can you remove the border of an iframe?',
          options: ['Using `border="0"` attribute.', 'Using CSS `border: none;`', 'Both A and B.', 'The border cannot be removed.'],
          correctAnswer: 2,
          explanation: 'You can use the outdated `frameborder="0"` attribute or the modern CSS approach of `border: none;` to remove the default border from an iframe.',
        },
        {
          question: 'Can a parent page and an iframe\'s content communicate with each other using JavaScript?',
          options: ['No, it is never possible.', 'Yes, but only if they are from the same origin (domain, protocol, port).', 'Yes, it is always possible without restrictions.', 'Only using a special API key.'],
          correctAnswer: 1,
          explanation: 'For security reasons, browsers enforce the same-origin policy, which prevents scripts on one page from accessing data on a second page, unless both pages have the same origin.',
        },
        {
          question: 'What is the `sandbox` attribute used for on an iframe?',
          options: ['To display a sandbox game.', 'To enable a set of extra restrictions on the iframe\'s content for security.', 'To change the background color to a sandy color.', 'To automatically delete the iframe after a time.'],
          correctAnswer: 1,
          explanation: 'The `sandbox` attribute enables a set of restrictions for the content in the `<iframe>`. It can be used to prevent scripts, form submissions, popups, and more, enhancing security.',
        },
        {
          question: 'A common use for iframes is embedding videos from which popular platform?',
          options: ['Spotify', 'Netflix', 'YouTube', 'All of the above'],
          correctAnswer: 2,
          explanation: 'YouTube provides a standard "Embed" option for its videos, which gives you an `<iframe>` code snippet to paste into your website.',
        },
        {
          question: 'Is it generally better to use iframes or load content directly if possible?',
          options: ['Iframes are always better.', 'Loading content directly is generally better for performance and SEO.', 'It makes no difference.', 'Iframes are better for SEO.'],
          correctAnswer: 1,
          explanation: 'Iframes can block the `onload` event of the parent page, and content within them might not be indexed as effectively by search engines. If you can integrate the content directly (e.g., via an API), it\'s often a better choice.',
        },
        {
          question: 'What happens if the page specified in an iframe\'s `src` attribute cannot be found?',
          options: ['The parent page will crash.', 'The iframe will be invisible.', 'The browser will display a "404 Not Found" error within the iframe.', 'The iframe will display a blank white page.'],
          correctAnswer: 2,
          explanation: 'The browser will attempt to load the URL, and if it results in an error like a 404, that error page will be rendered inside the boundaries of the iframe.',
        },
      ],
      'audio-and-video': [
        {
          question: 'Which HTML5 element is used to embed audio files?',
          options: ['<sound>', '<audio>', '<music>', '<mp3>'],
          correctAnswer: 1,
          explanation: 'The `<audio>` element is the standard tag for embedding sound content in documents.',
        },
        {
          question: 'Which HTML5 element is used to embed video files?',
          options: ['<video>', '<movie>', '<media>', '<mp4>'],
          correctAnswer: 0,
          explanation: 'The `<video>` element is the standard tag for embedding video content in documents.',
        },
        {
          question: 'What does the `controls` attribute do?',
          options: ['It starts playback automatically.', 'It provides user controls like play, pause, and volume.', 'It sets the media source.', 'It mutes the media by default.'],
          correctAnswer: 1,
          explanation: 'The `controls` attribute is a boolean attribute that, when present, specifies that audio/video controls should be displayed to the user.',
        },
        {
          question: 'What is the purpose of the `<source>` element inside an `<audio>` or `<video>` tag?',
          options: ['To provide a text transcript.', 'To provide multiple media formats for better browser compatibility.', 'To set the poster image.', 'To define subtitles.'],
          correctAnswer: 1,
          explanation: 'Because not all browsers support the same media formats, you can provide multiple `<source>` elements. The browser will use the first one it supports.',
        },
        {
          question: 'Which attribute makes a video or audio file play automatically when the page loads?',
          options: ['autoplay', 'play', 'autostart', 'start'],
          correctAnswer: 0,
          explanation: 'The `autoplay` attribute, when present, will start the media as soon as it is ready. Note: Most modern browsers block autoplay with sound.',
        },
        {
          question: 'How do you make an audio or video file play over and over again?',
          options: ['Using the `repeat` attribute.', 'Using the `replay` attribute.', 'Using the `loop` attribute.', 'Using the `cycle` attribute.'],
          correctAnswer: 2,
          explanation: 'The `loop` boolean attribute, when present, will cause the media to automatically seek back to the start upon reaching the end.',
        },
        {
          question: 'Which attribute provides an image to be displayed before a video starts playing?',
          options: ['preview', 'image', 'placeholder', 'poster'],
          correctAnswer: 3,
          explanation: 'The `poster` attribute specifies an image to be shown while the video is downloading, or until the user hits the play button.',
        },
        {
          question: 'Which of the following is a common video format supported by modern browsers?',
          options: ['.MOV', '.AVI', '.WMV', '.MP4'],
          correctAnswer: 3,
          explanation: 'MP4 (with H.264 video codec and AAC audio codec) is the most widely supported and recommended video format for the web today.',
        },
        {
          question: 'How can you mute an audio or video element by default?',
          options: ['Using the `silent` attribute.', 'Using the `mute` attribute.', 'Using the `muted` attribute.', 'Using the `nosound` attribute.'],
          correctAnswer: 2,
          explanation: 'The `muted` boolean attribute specifies that the audio output of the media should be muted by default.',
        },
        {
          question: 'What is the `<track>` element used for within `<audio>` or `<video>`?',
          options: ['To specify different audio tracks.', 'To provide text tracks, such as subtitles or captions.', 'To track how many times the media has been played.', 'To set the media source.'],
          correctAnswer: 1,
          explanation: 'The `<track>` element is used to specify timed text tracks (or time-based data) for media elements. This is commonly used for subtitles, captions, or descriptions.',
        },
      ],
      'canvas-and-svg': [
        {
          question: 'What is the main difference between SVG and Canvas?',
          options: ['SVG is raster-based, Canvas is vector-based.', 'SVG is vector-based, Canvas is raster-based (pixel-based).', 'SVG is for 3D graphics, Canvas is for 2D.', 'There is no difference.'],
          correctAnswer: 1,
          explanation: 'SVG (Scalable Vector Graphics) is a vector format, meaning it retains quality at any scale. Canvas is a raster format, drawing pixels, and can lose quality if scaled up.',
        },
        {
          question: 'Which technology is generally better for accessibility?',
          options: ['Canvas', 'SVG', 'They are equally accessible.', 'Neither is accessible.'],
          correctAnswer: 1,
          explanation: 'SVG is XML-based, so the elements within it are part of the DOM. This means they can be accessed by screen readers and are generally better for accessibility.',
        },
        {
          question: 'How do you draw on a `<canvas>` element?',
          options: ['Using CSS properties.', 'Using HTML tags inside the canvas.', 'Using JavaScript to get the rendering context and call drawing methods.', 'Using a special `draw` attribute.'],
          correctAnswer: 2,
          explanation: 'The `<canvas>` element is just a container. To draw, you must use JavaScript to get its 2D or WebGL context and then use the context\'s API to draw shapes, text, and images.',
        },
        {
          question: 'Which technology is typically better suited for interactive applications like games?',
          options: ['Canvas', 'SVG', 'HTML Tables', 'CSS Floats'],
          correctAnswer: 0,
          explanation: 'Canvas is generally faster for rendering a large number of objects and frequent updates, making it a better choice for high-performance applications like games.',
        },
        {
          question: 'How is an SVG graphic defined in HTML?',
          options: ['Using the `<svg>` tag and nested XML-based tags like `<circle>` and `<rect>`.', 'Using a `<script>` tag with drawing commands.', 'Using the `<img>` tag with a special type.', 'Using a CSS stylesheet.'],
          correctAnswer: 0,
          explanation: 'SVG graphics can be written directly into the HTML document using the `<svg>` tag, which then contains other tags like `<circle>`, `<rect>`, `<path>`, etc., to define the shapes.',
        },
        {
          question: 'In Canvas, what does `getContext("2d")` do?',
          options: ['It creates a 2D image from a 3D model.', 'It returns a drawing context object with methods for drawing 2D graphics.', 'It sets the canvas to a 2D display mode.', 'It checks if the browser supports 2D graphics.'],
          correctAnswer: 1,
          explanation: 'The `getContext("2d")` method returns an object that provides the properties and methods for drawing on the canvas in 2D.',
        },
        {
          question: 'What happens when you resize an SVG image?',
          options: ['It becomes pixelated.', 'It loses quality.', 'It maintains perfect quality because it is vector-based.', 'It requires JavaScript to redraw.'],
          correctAnswer: 2,
          explanation: 'Because SVG is based on mathematical vectors, not pixels, it can be scaled to any size without any loss of quality.',
        },
        {
          question: 'Which of the following is an SVG element?',
          options: ['<pixel>', '<shape>', '<path>', '<draw>'],
          correctAnswer: 2,
          explanation: 'The `<path>` element is one of the most powerful in SVG, allowing you to define any custom shape by specifying a series of commands and coordinates.',
        },
        {
          question: 'To clear a Canvas, what method is commonly used?',
          options: ['`context.clear()`', '`context.erase()`', '`context.reset()`', '`context.clearRect(0, 0, canvas.width, canvas.height)`'],
          correctAnswer: 3,
          explanation: 'The `clearRect()` method erases the pixels in a rectangular area, and is commonly used to clear the entire canvas before redrawing a new frame in an animation.',
        },
        {
          question: 'For a company logo that needs to be used at various sizes, which would be the better choice?',
          options: ['Canvas', 'SVG', 'A high-resolution JPEG', 'A GIF'],
          correctAnswer: 1,
          explanation: 'SVG is the ideal choice for logos and icons because of its scalability. It will look crisp and clear at any size, unlike raster formats which can become blurry or pixelated.',
        },
      ],
      'meta-tags-and-seo-basics': [
        {
          question: 'Where are `<meta>` tags placed in an HTML document?',
          options: ['Inside the `<body>` tag.', 'Inside the `<footer>` tag.', 'Inside the `<head>` tag.', 'At the very end of the document.'],
          correctAnswer: 2,
          explanation: '`<meta>` tags provide metadata about the document and are always placed inside the `<head>` section.',
        },
        {
          question: 'What is the purpose of the `<meta charset="UTF-8">` tag?',
          options: ['To set the author of the page.', 'To set the character encoding for the document to handle various characters and symbols.', 'To provide keywords for SEO.', 'To set the page to refresh automatically.'],
          correctAnswer: 1,
          explanation: 'UTF-8 is a universal character set that includes almost every character from human languages. Declaring it ensures the browser correctly displays all text on your page.',
        },
        {
          question: 'Which meta tag is used to provide a brief summary of the page for search engine results?',
          options: ['<meta name="keywords" ...>', '<meta name="summary" ...>', '<meta name="description" ...>', '<meta name="title" ...>'],
          correctAnswer: 2,
          explanation: 'The `description` meta tag provides a summary of the page\'s content, which search engines often use as the snippet in search results.',
        },
        {
          question: 'What is the `<title>` tag\'s importance for SEO?',
          options: ['It has no importance for SEO.', 'It is the most important on-page SEO element, shown in search results and browser tabs.', 'It is only used for browser history.', 'It sets the default font size.'],
          correctAnswer: 1,
          explanation: 'The `<title>` tag is a critical SEO element. It tells search engines what your page is about and is often used as the main clickable headline in search results.',
        },
        {
          question: 'What is the purpose of the `viewport` meta tag?',
          options: ['To set the background color of the viewport.', 'To control the layout on mobile browsers for responsive design.', 'To define the visible area of the page for printing.', 'To set the zoom level for desktop browsers.'],
          correctAnswer: 1,
          explanation: 'The viewport meta tag, specifically `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, is essential for responsive design, telling the browser to set the page width to the device\'s screen width and use an appropriate initial zoom level.',
        },
        {
          question: 'Why are `<h1>` tags important for SEO?',
          options: ['They are not important.', 'They make text bold, which search engines like.', 'They signal the most important heading or topic of the page to search engines.', 'They must contain keywords to rank.'],
          correctAnswer: 2,
          explanation: 'The `<h1>` tag should contain the main title of your page content. It helps search engines (and users) understand the primary topic of the page.',
        },
        {
          question: 'What does "SEO" stand for?',
          options: ['Stylish Element Organization', 'Search Engine Optimization', 'Site Engine Operations', 'Semantic Element Order'],
          correctAnswer: 1,
          explanation: 'SEO stands for Search Engine Optimization, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.',
        },
        {
          question: 'Are the keywords in `<meta name="keywords" ...>` still important for major search engines like Google?',
          options: ['Yes, they are the most important factor.', 'No, major search engines like Google have largely ignored this tag for many years.', 'They are only important for image search.', 'They are only important for local search.'],
          correctAnswer: 1,
          explanation: 'For a long time, the keywords meta tag has not been used by Google as a ranking signal due to overuse and spamming. It is generally considered obsolete for major search engines.',
        },
        {
          question: 'What does the `alt` text on an `<img>` tag contribute to SEO?',
          options: ['Nothing, it is only for accessibility.', 'It helps search engines understand what an image is about, which is important for image search.', 'It provides a caption that is displayed below the image.', 'It sets the image dimensions.'],
          correctAnswer: 1,
          explanation: '`alt` text is crucial for both accessibility and SEO. It provides a description of the image for visually impaired users and helps search engines index your images correctly.',
        },
        {
          question: 'Which meta tag can be used to tell search engine crawlers not to index a page?',
          options: ['<meta name="robots" content="noindex">', '<meta name="googlebot" content="ignore">', '<meta name="seo" content="false">', '<meta name="index" content="no">'],
          correctAnswer: 0,
          explanation: '`<meta name="robots" content="noindex">` is a command that tells all search engine crawlers that they should not index the page and it should not appear in search results.',
        },
      ],
    },
    css: {
      'introduction-to-css': [
        {
          question: 'What does CSS stand for?',
          options: [
            'Creative Style Sheets',
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Colorful Style Sheets',
          ],
          correctAnswer: 1,
          explanation:
            'CSS stands for Cascading Style Sheets. It\'s used to style and lay out web pages.',
        },
        {
          question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
          options: [
            'In the <body> section',
            'At the end of the document',
            'In the <head> section',
            'In the <footer> section',
          ],
          correctAnswer: 2,
          explanation:
            'External stylesheets are linked in the `<head>` section using the `<link>` tag.',
        },
        {
          question: 'Which HTML tag is used to define an internal style sheet?',
          options: ['<css>', '<script>', '<style>', '<link>'],
          correctAnswer: 2,
          explanation:
            'The `<style>` element is used to contain style information (CSS) for a document. It is placed in the `<head>` section.',
        },
        {
          question: 'Which HTML attribute is used to define inline styles?',
          options: ['style', 'class', 'styles', 'font'],
          correctAnswer: 0,
          explanation:
            'The `style` attribute is used to apply CSS rules directly to a specific HTML element.',
        },
        {
          question: 'What is the correct CSS syntax?',
          options: [
            '{body;color:black;}',
            'body:color=black;',
            'body {color: black;}',
            'body;color:black;',
          ],
          correctAnswer: 2,
          explanation:
            'The correct syntax is a selector (e.g., `body`), followed by a declaration block in curly braces `{}`. Declarations consist of a property and a value (e.g., `color: black;`).',
        },
        {
          question: 'How do you insert a comment in a CSS file?',
          options: [
            '// this is a comment',
            '/* this is a comment */',
            '<!-- this is a comment -->',
            '\' this is a comment',
          ],
          correctAnswer: 1,
          explanation: 'CSS comments start with `/*` and end with `*/`.',
        },
        {
          question: 'What does "Cascading" in CSS refer to?',
          options: [
            'The way styles fall from top to bottom in the file.',
            'The process of styles from different sources being applied in a certain order of precedence.',
            'A type of animation effect.',
            'A method for styling water-like elements.',
          ],
          correctAnswer: 1,
          explanation:
            'The "cascade" is the algorithm that browsers use to determine which CSS rule applies if multiple rules for an element conflict. It considers specificity, inheritance, and the order of rules.',
        },
        {
          question: 'Which of the three methods of applying CSS has the highest precedence?',
          options: [
            'External style sheet',
            'Internal style sheet (in the <head> section)',
            'Inline style (in an HTML element\'s style attribute)',
            'They all have the same precedence.',
          ],
          correctAnswer: 2,
          explanation:
            'Inline styles have the highest priority, followed by internal stylesheets, and then external stylesheets. This can be overridden by using `!important`.',
        },
        {
          question: 'What is the file extension for a CSS file?',
          options: ['.css', '.c', '.style', '.cs'],
          correctAnswer: 0,
          explanation: 'CSS files are saved with the `.css` extension.',
        },
        {
          question: 'What is the primary function of CSS?',
          options: [
            'To add interactivity to a webpage.',
            'To structure the content of a webpage.',
            'To describe the presentation and styling of a webpage.',
            'To manage server-side logic.',
          ],
          correctAnswer: 2,
          explanation:
            'CSS is responsible for the visual presentation of HTML documents, including colors, layout, fonts, and more.',
        },
      ],
      'selectors-and-properties': [
        {
          question: 'Which selector is used to select an element with a specific ID?',
          options: ['.', '#', '*', '$'],
          correctAnswer: 1,
          explanation:
            'The # symbol is used to select an element by its ID. For example, #myId would select the element with id="myId".',
        },
        {
          question: 'How do you select all <p> elements inside a <div> element?',
          options: ['div + p', 'div p', 'div.p', 'div ~ p'],
          correctAnswer: 1,
          explanation:
            'The "div p" selector (descendant selector) selects all <p> elements that are inside a <div> element.',
        },
        {
          question: 'Which property is used to change the background color of an element?',
          options: ['color', 'bgcolor', 'background-color', 'background'],
          correctAnswer: 2,
          explanation: 'The `background-color` property sets the background color of an element.',
        },
        {
          question: 'How do you select elements with a specific class?',
          options: ['With the # character', 'With the . character', 'With the * character', 'With the & character'],
          correctAnswer: 1,
          explanation: 'The . character is used to select all elements with a specific class name.',
        },
        {
          question: 'What is the "universal selector"?',
          options: ['>', '+', '~', '*'],
          correctAnswer: 3,
          explanation: 'The universal selector `*` selects all HTML elements on the page.',
        },
        {
          question: 'How do you group selectors?',
          options: ['Separate each selector with a comma', 'Separate each selector with a plus sign', 'Separate each selector with a space', 'You cannot group selectors'],
          correctAnswer: 0,
          explanation: 'To apply the same styles to multiple selectors, you can group them with a comma. Example: `h1, h2, p { color: red; }`',
        },
        {
          question: 'Which property is used to change the text color of an element?',
          options: ['text-color', 'font-color', 'color', 'fgcolor'],
          correctAnswer: 2,
          explanation: 'The `color` property is used to set the color of the text.',
        },
        {
          question: 'What does the selector `p.intro` select?',
          options: ['All <p> elements and all elements with class="intro"', 'All elements with class="intro" that are inside a <p> element', 'All <p> elements that have the class="intro"', 'The first <p> element that has class="intro"'],
          correctAnswer: 2,
          explanation: 'This selector selects only `<p>` elements that also have the class `intro`. There is no space, so it targets the same element.',
        },
        {
          question: 'Which property is used to change the font of an element?',
          options: ['font-style', 'font-family', 'font-weight', 'font-variant'],
          correctAnswer: 1,
          explanation: 'The `font-family` property is used to specify the font for an element.',
        },
        {
          question: 'What is the purpose of the `!important` rule?',
          options: ['To highlight important code for developers', 'To make a CSS property value override any other conflicting declarations', 'To import another stylesheet', 'To mark a style as deprecated'],
          correctAnswer: 1,
          explanation: 'The `!important` rule can be added to a style declaration to give it the highest precedence, overriding all other styles for that property on that element.',
        },
      ],
      'colors-backgrounds-borders': [
        {
          question: 'Which of the following is NOT a valid way to specify a color in CSS?',
          options: ['color: red;', 'color: #ff0000;', 'color: rgb(255, 0, 0);', 'color: color(255, 0, 0);'],
          correctAnswer: 3,
          explanation: 'Valid ways to specify colors include color names (red), hexadecimal values (#ff0000), RGB values (rgb(255,0,0)), and HSL values, among others. `color()` is not a valid function.',
        },
        {
          question: 'What does the `background-image` property do?',
          options: ['Sets the background color.', 'Sets one or more background images for an element.', 'Sets the color of the image.', 'Sets the border of the background.'],
          correctAnswer: 1,
          explanation: 'The `background-image` property is used to set an image as the background of an element.',
        },
        {
          question: 'How can you set a background image to not repeat?',
          options: ['background-repeat: no-repeat;', 'background-repeat: none;', 'background: no-repeat;', 'background-image-repeat: false;'],
          correctAnswer: 0,
          explanation: '`background-repeat: no-repeat;` will make the background image display only once.',
        },
        {
          question: 'Which property is a shorthand for setting all the border properties in one declaration?',
          options: ['border-style', 'border-shorthand', 'border', 'border-width'],
          correctAnswer: 2,
          explanation: 'The `border` property is a shorthand for `border-width`, `border-style`, and `border-color`. Example: `border: 1px solid black;`',
        },
        {
          question: 'What does `border-radius` do?',
          options: ['Changes the color of the border.', 'Sets the thickness of the border.', 'Adds rounded corners to an element\'s border.', 'Makes the border a radial gradient.'],
          correctAnswer: 2,
          explanation: 'The `border-radius` property is used to add rounded corners to an element.',
        },
        {
          question: 'How do you specify a dashed border?',
          options: ['border-type: dashed;', 'border-style: dashed;', 'border: dashed;', 'border-decoration: dashed;'],
          correctAnswer: 1,
          explanation: 'The `border-style` property is used to set the style of the border, with `dashed` being one of the possible values.',
        },
        {
          question: 'What does `background-position: center;` do?',
          options: ['Centers the element on the page.', 'Centers the text inside the element.', 'Centers the background image within the element.', 'Centers the border around the element.'],
          correctAnswer: 2,
          explanation: '`background-position` sets the initial position of a background image. `center` will center it both horizontally and vertically.',
        },
        {
          question: 'Which color value represents transparency?',
          options: ['rgba(255, 255, 255, 0)', 'transparent', 'hsl(0, 0%, 100%, 0)', 'All of the above'],
          correctAnswer: 3,
          explanation: 'All of these are valid ways to specify a fully transparent color. `rgba` and `hsla` use an alpha channel (the `a`) where 0 is fully transparent, and the `transparent` keyword is also available.',
        },
        {
          question: 'What is the `background-size: cover;` property used for?',
          options: ['To make the background image as small as possible.', 'To stretch the background image to fit the container, potentially distorting it.', 'To scale the background image to be as large as possible so that the background area is completely covered by the image, while maintaining aspect ratio.', 'To hide the background image.'],
          correctAnswer: 2,
          explanation: '`background-size: cover;` scales the image (while preserving its aspect ratio) to the smallest size such that both its width and its height can completely cover the background positioning area.',
        },
        {
          question: 'Which property sets the color of the bottom border of an element?',
          options: ['border-bottom-style', 'border-color-bottom', 'border-bottom-color', 'border-bottom'],
          correctAnswer: 2,
          explanation: 'The `border-bottom-color` property is used specifically to set the color of the bottom border of an element.',
        },
      ],
      'box-model': [
        {
          question: 'Which of the following is NOT part of the standard CSS Box Model?',
          options: ['Margin', 'Border', 'Padding', 'Outline'],
          correctAnswer: 3,
          explanation: 'The standard CSS Box Model consists of the Content area, Padding, Border, and Margin. The `outline` is drawn outside the border but is not technically part of the box model\'s space calculation.',
        },
        {
          question: 'What is the `padding` property in CSS?',
          options: ['The space outside the border.', 'The space between the content and the border.', 'The thickness of the border.', 'The space between two separate elements.'],
          correctAnswer: 1,
          explanation: 'Padding is the space between the element\'s content and its border.',
        },
        {
          question: 'What is the `margin` property in CSS?',
          options: ['The space outside the border, between elements.', 'The space between the content and the border.', 'The element\'s content area.', 'The line separating content from padding.'],
          correctAnswer: 0,
          explanation: 'Margin is the transparent space around an element, outside of its border. It pushes other elements away.',
        },
        {
          question: 'If you set `width: 100px;` and `padding: 10px;` on an element with the default `box-sizing`, what will be its total rendered width?',
          options: ['100px', '110px', '120px', '90px'],
          correctAnswer: 2,
          explanation: 'With the default `box-sizing: content-box;`, the total width is `width + padding-left + padding-right`. So, 100px + 10px + 10px = 120px.',
        },
        {
          question: 'What does `box-sizing: border-box;` do?',
          options: ['It includes padding and border in the element\'s total width and height.', 'It removes the border and padding.', 'It makes the box model visible.', 'It only allows a box to be a border.'],
          correctAnswer: 0,
          explanation: '`box-sizing: border-box;` tells the browser to account for any border and padding in the values you specify for an element\'s width and height. If you set an element\'s width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.',
        },
        {
          question: 'What is "margin collapsing"?',
          options: ['When the left and right margins of two elements touch, they combine into one.', 'When the top and bottom margins of two adjacent block elements touch, they combine into a single, larger margin.', 'When you set margin to zero.', 'When margin and padding are the same value.'],
          correctAnswer: 1,
          explanation: 'Margin collapsing happens with the vertical margins of adjacent block-level elements. The browser will use the larger of the two touching margins.',
        },
        {
          question: 'The declaration `margin: 10px 5px;` sets which margins?',
          options: ['Top 10px, Right 5px, Bottom 10px, Left 5px', 'Top 10px, Right 10px, Bottom 5px, Left 5px', 'Top 5px, Right 10px, Bottom 5px, Left 10px', 'Top and Bottom 5px, Left and Right 10px'],
          correctAnswer: 0,
          explanation: 'When two values are provided, the first value applies to the top and bottom margins, and the second value applies to the left and right margins.',
        },
        {
          question: 'The declaration `padding: 10px 5px 20px;` sets which paddings?',
          options: ['Top 10px, Right 5px, Bottom 20px, Left 5px', 'Top 10px, Right 5px, Bottom 20px, Left 10px', 'Top 10px, Right 20px, Bottom 5px, Left 20px', 'Top 10px, Right 5px, Bottom 20px, Left 20px'],
          correctAnswer: 0,
          explanation: 'When three values are provided, the first is for the top, the second is for left and right, and the third is for the bottom.',
        },
        {
          question: 'Which part of the box model is transparent?',
          options: ['Content', 'Padding', 'Border', 'Margin'],
          correctAnswer: 3,
          explanation: 'The margin is always transparent and clears an area around an element.',
        },
        {
          question: 'If you have an element with `box-sizing: border-box;`, `width: 200px;`, `padding: 20px;`, and `border: 10px solid black;`, what is the width of the content area?',
          options: ['200px', '180px', '160px', '140px'],
          correctAnswer: 3,
          explanation: 'With `border-box`, the `width` includes padding and border. So, the content width is `200px - (2 * 20px padding) - (2 * 10px border) = 200 - 40 - 20 = 140px`.',
        },
      ],
      'display-and-positioning': [
        {
          question: 'Which `display` value causes an element to generate a block element box, starting on a new line?',
          options: ['inline', 'block', 'inline-block', 'none'],
          correctAnswer: 1,
          explanation: '`display: block;` makes the element a block-level element. It starts on a new line and takes up the full width available.',
        },
        {
          question: 'Which `display` value causes an element to generate an inline element box, with no line break before or after it?',
          options: ['inline', 'block', 'inline-block', 'flex'],
          correctAnswer: 0,
          explanation: '`display: inline;` makes the element an inline element. It does not start on a new line and only takes up as much width as necessary.',
        },
        {
          question: 'What is the main characteristic of `display: inline-block;`?',
          options: ['It behaves like an inline element but you can set width and height on it.', 'It behaves like a block element but flows with text.', 'It is the same as `display: block;`', 'It is the same as `display: inline;`'],
          correctAnswer: 0,
          explanation: '`display: inline-block;` is a hybrid. It flows with surrounding content like an inline element, but you can set a `width`, `height`, `margin`, and `padding` on it like a block element.',
        },
        {
          question: 'What is the default `position` value for all elements?',
          options: ['relative', 'absolute', 'static', 'fixed'],
          correctAnswer: 2,
          explanation: 'By default, all elements have `position: static;`, which means they are positioned according to the normal flow of the document.',
        },
        {
          question: 'An element with `position: relative;` is positioned relative to what?',
          options: ['The viewport', 'Its nearest positioned ancestor', 'Its normal position in the document flow', 'The `<body>` element'],
          correctAnswer: 2,
          explanation: 'An element with `position: relative;` is positioned relative to its normal position. Setting `top`, `right`, `bottom`, and `left` will cause it to be adjusted away from its normal position.',
        },
        {
          question: 'An element with `position: absolute;` is positioned relative to what?',
          options: ['Its normal position', 'Its nearest positioned (non-static) ancestor', 'The viewport', 'The `<html>` element'],
          correctAnswer: 1,
          explanation: 'An absolutely positioned element is removed from the normal document flow and is positioned relative to its closest ancestor that has a `position` value other than `static`.',
        },
        {
          question: 'What does `position: fixed;` do?',
          options: ['It positions the element relative to its normal position.', 'It positions the element relative to its parent.', 'It positions the element relative to the browser viewport, so it stays in the same place even when the page is scrolled.', 'It cannot be moved.'],
          correctAnswer: 2,
          explanation: 'A fixed position element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.',
        },
        {
          question: 'What is the purpose of the `z-index` property?',
          options: ['To set the zoom level of an element.', 'To control the vertical stacking order of positioned elements.', 'To set the size of an element on the z-axis.', 'To create a 3D effect.'],
          correctAnswer: 1,
          explanation: '`z-index` specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. It only works on positioned elements (not `static`).',
        },
        {
          question: 'How can you hide an element completely (making it invisible and taking up no space)?',
          options: ['visibility: hidden;', 'opacity: 0;', 'display: none;', 'position: absolute; left: -9999px;'],
          correctAnswer: 2,
          explanation: '`display: none;` removes the element from the document flow entirely. `visibility: hidden;` hides the element, but it still takes up space in the layout.',
        },
        {
          question: 'What is `position: sticky;`?',
          options: ['It is the same as `position: fixed;`', 'It is a hybrid of `position: relative;` and `position: fixed;`. It is treated as relative until it crosses a specified threshold, at which point it becomes fixed.', 'It makes an element "stick" to the mouse cursor.', 'It prevents an element from being moved.'],
          correctAnswer: 1,
          explanation: 'Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as `position: relative` until it scrolls to a specified point (e.g., `top: 0`), after which it becomes `position: fixed`.',
        },
      ],
      'flexbox': [
        {
          question: 'How do you define a flex container?',
          options: ['display: flexbox;', 'container: flex;', 'display: flex;', 'flex: container;'],
          correctAnswer: 2,
          explanation: 'To create a flex container, you apply `display: flex;` to an element. Its direct children then become flex items.',
        },
        {
          question: 'Which property defines the direction of the main axis in a flex container?',
          options: ['flex-direction', 'flex-axis', 'main-axis', 'direction'],
          correctAnswer: 0,
          explanation: 'The `flex-direction` property establishes the main-axis, thus defining the direction flex items are placed in the flex container. It can be `row`, `column`, `row-reverse`, or `column-reverse`.',
        },
        {
          question: 'Which `justify-content` value distributes items evenly, with the first item at the start and the last item at the end?',
          options: ['space-around', 'space-evenly', 'center', 'space-between'],
          correctAnswer: 3,
          explanation: '`justify-content: space-between;` distributes items evenly; the first item is flush with the start, the last is flush with the end.',
        },
        {
          question: 'Which property is used to align flex items along the cross axis?',
          options: ['justify-content', 'align-items', 'cross-axis-align', 'flex-align'],
          correctAnswer: 1,
          explanation: '`align-items` defines the default behavior for how flex items are laid out along the cross axis on the current line.',
        },
        {
          question: 'What does `flex-wrap: wrap;` do?',
          options: ['It wraps the text inside flex items.', 'It allows flex items to wrap onto multiple lines if there isn\'t enough space on one line.', 'It adds a decorative wrapper around the flex container.', 'It reverses the order of the flex items.'],
          correctAnswer: 1,
          explanation: 'By default, flex items try to fit onto one line. `flex-wrap: wrap;` allows the items to wrap onto the next line as needed.',
        },
        {
          question: 'Which property would you use on a flex *item* to make it grow and take up available space?',
          options: ['flex-grow', 'flex-shrink', 'flex-basis', 'flex-size'],
          correctAnswer: 0,
          explanation: 'The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items. A value of `1` means it will take up an equal share of the available space.',
        },
        {
          question: 'How do you center a single flex item both horizontally and vertically within its container?',
          options: ['`text-align: center;` and `vertical-align: middle;`', '`margin: auto;` on the item', '`justify-content: center;` and `align-items: center;` on the container', '`position: absolute;` and `transform: translate(-50%, -50%);`'],
          correctAnswer: 2,
          explanation: 'For a flex container, setting `justify-content: center;` (for the main axis) and `align-items: center;` (for the cross axis) is the standard way to perfectly center its children.',
        },
        {
          question: 'What is the `order` property used for?',
          options: ['To set the order of CSS properties.', 'To change the visual order of flex items, independent of their source order.', 'To sort the items alphabetically.', 'To create a numbered list.'],
          correctAnswer: 1,
          explanation: 'The `order` property on a flex item controls the order in which they appear in the flex container. Items with a lower `order` value appear first.',
        },
        {
          question: 'What is the main axis if `flex-direction` is `column`?',
          options: ['The horizontal axis', 'The vertical axis', 'The diagonal axis', 'There is no main axis.'],
          correctAnswer: 1,
          explanation: 'When `flex-direction` is `column`, the main axis is vertical (top to bottom), and the cross axis is horizontal.',
        },
        {
          question: 'Which property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`?',
          options: ['flex-flow', 'flex-item', 'flex', 'flex-size'],
          correctAnswer: 2,
          explanation: 'The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. The default is `0 1 auto`.',
        },
      ],
      'grid-layout': [
        {
          question: 'How do you define a grid container?',
          options: ['display: grid;', 'container: grid;', 'display: grid-layout;', 'grid: true;'],
          correctAnswer: 0,
          explanation: 'To create a grid container, you apply `display: grid;` to an element. Its direct children then become grid items.',
        },
        {
          question: 'Which property defines the columns of a grid?',
          options: ['grid-columns', 'grid-template-columns', 'columns', 'grid-column-template'],
          correctAnswer: 1,
          explanation: 'The `grid-template-columns` property defines the number and sizes of columns in a grid layout.',
        },
        {
          question: 'What does `grid-template-columns: 1fr 1fr 1fr;` do?',
          options: ['Creates three columns, each 1 pixel wide.', 'Creates three columns, each taking up one fraction of the available space.', 'Creates one column that is three times the size of the container.', 'This is invalid syntax.'],
          correctAnswer: 1,
          explanation: 'The `fr` unit represents a fraction of the available space in the grid container. This example creates three equal-width columns.',
        },
        {
          question: 'Which property is used to set the gap between grid rows and columns?',
          options: ['margin', 'padding', 'spacing', 'gap'],
          correctAnswer: 3,
          explanation: 'The `gap` property (or `grid-gap`) is a shorthand for `row-gap` and `column-gap`, and it defines the size of the space between the rows and columns.',
        },
        {
          question: 'How do you make a grid item span two columns?',
          options: ['colspan: 2;', 'grid-column: span 2;', 'column-span: 2;', 'grid-span: 2 columns;'],
          correctAnswer: 1,
          explanation: 'You apply the `grid-column` property to a grid item. `span 2` tells the item to span across two column tracks.',
        },
        {
          question: 'Which function is useful for creating a responsive grid with a variable number of columns?',
          options: ['calc()', 'var()', 'repeat(auto-fit, minmax(200px, 1fr))', 'fit-content()'],
          correctAnswer: 2,
          explanation: 'Using `repeat(auto-fit, minmax(200px, 1fr))` with `grid-template-columns` creates a responsive grid where columns are at least 200px wide, but will grow to fill the space, and new columns will be added as the container gets wider.',
        },
        {
          question: 'What is the difference between `justify-items` and `align-items` in a grid container?',
          options: ['There is no difference.', '`justify-items` aligns items along the row (inline) axis, while `align-items` aligns them along the column (block) axis.', '`justify-items` aligns the entire grid, `align-items` aligns individual items.', '`justify-items` is for horizontal spacing, `align-items` is for vertical spacing.'],
          correctAnswer: 1,
          explanation: '`justify-items` controls the alignment of items within their grid area along the inline (row) axis. `align-items` controls alignment along the block (column) axis.',
        },
        {
          question: 'How can you place a grid item starting at the second column line and ending at the fourth column line?',
          options: ['grid-column: 2 / 4;', 'grid-column: 2-4;', 'grid-column-start: 2; grid-column-end: 3;', 'grid-area: 2 / 4;'],
          correctAnswer: 0,
          explanation: 'The `grid-column` property is a shorthand for `grid-column-start` and `grid-column-end`. The syntax `2 / 4` means the item starts on grid line 2 and ends on grid line 4.',
        },
        {
          question: 'What is the primary advantage of Grid Layout over Flexbox?',
          options: ['Grid is better for one-dimensional layouts.', 'Grid has better browser support.', 'Grid is designed for two-dimensional layouts (rows and columns), giving more control over complex structures.', 'Grid is simpler to learn.'],
          correctAnswer: 2,
          explanation: 'While Flexbox excels at one-dimensional layouts (a single row or column), Grid is specifically designed for complex two-dimensional layouts, allowing simultaneous control over both rows and columns.',
        },
        {
          question: 'Which property allows you to name grid areas and place items into them?',
          options: ['grid-template-areas', 'grid-name', 'grid-area-names', 'grid-template'],
          correctAnswer: 0,
          explanation: 'The `grid-template-areas` property on the container lets you define a template by referencing the names of grid areas, which are specified on the items using the `grid-area` property.',
        },
      ],
      'typography': [
        {
          question: 'Which CSS property is used to change the font of an element?',
          options: ['font-type', 'font-family', 'font-name', 'typeface'],
          correctAnswer: 1,
          explanation: 'The `font-family` property specifies a prioritized list of one or more font family names and/or generic family names for an element.',
        },
        {
          question: 'What is a "fallback" font in a `font-family` declaration?',
          options: ['The first font in the list.', 'A font that is used if the preceding fonts are not available on the user\'s system.', 'A font that is guaranteed to be on all computers.', 'A decorative font.'],
          correctAnswer: 1,
          explanation: 'You should provide a list of fonts, starting with your desired font and ending with a generic family (like `sans-serif`), so the browser has backups if the first choices aren\'t available.',
        },
        {
          question: 'Which property controls the size of the text?',
          options: ['font-size', 'text-size', 'size', 'font-height'],
          correctAnswer: 0,
          explanation: 'The `font-size` property sets the size of the font. Common units include `px`, `em`, `rem`, and `%`.',
        },
        {
          question: 'How do you make text bold?',
          options: ['font-style: bold;', 'text-decoration: bold;', 'font-weight: bold;', 'font-bold: true;'],
          correctAnswer: 2,
          explanation: 'The `font-weight` property sets how thick or thin characters in a text should be displayed. `bold` is a common value.',
        },
        {
          question: 'How do you make text italic?',
          options: ['font-weight: italic;', 'font-style: italic;', 'text-decoration: italic;', 'font-italic: true;'],
          correctAnswer: 1,
          explanation: 'The `font-style` property specifies the font style for a text. `italic` is the value used to make text italic.',
        },
        {
          question: 'Which property is used to control the horizontal alignment of text?',
          options: ['align-text', 'horizontal-align', 'text-align', 'align'],
          correctAnswer: 2,
          explanation: 'The `text-align` property specifies the horizontal alignment of text in an element. Values can be `left`, `right`, `center`, or `justify`.',
        },
        {
          question: 'What does the `line-height` property do?',
          options: ['Sets the height of the entire line of text.', 'Sets the spacing between characters.', 'Sets the distance between lines of text.', 'Sets the thickness of the font.'],
          correctAnswer: 2,
          explanation: 'The `line-height` property is used to control the amount of space used for lines of text. It is often used to improve readability.',
        },
        {
          question: 'How do you add an underline to text?',
          options: ['font-style: underline;', 'text-decoration: underline;', 'underline: true;', 'border-bottom: 1px solid;'],
          correctAnswer: 1,
          explanation: 'The `text-decoration` property is used to set the text formatting to `underline`, `overline`, `line-through`, or `none`.',
        },
        {
          question: 'What does `text-transform: uppercase;` do?',
          options: ['It makes the font bigger.', 'It makes the first letter of each word capitalized.', 'It transforms all characters in the text to uppercase.', 'It makes the text bold.'],
          correctAnswer: 2,
          explanation: 'The `text-transform` property controls the capitalization of text. `uppercase` transforms all letters to uppercase.',
        },
        {
          question: 'Which `@` rule is used to embed your own custom fonts in a web page?',
          options: ['@import', '@media', '@font-face', '@font-embed'],
          correctAnswer: 2,
          explanation: 'The `@font-face` rule allows you to specify your own fonts to be loaded and used on your website.',
        },
      ],
      'margin-padding-spacing': [
        {
          question: 'Which property adds space *inside* the border of an element?',
          options: ['margin', 'spacing', 'padding', 'border-spacing'],
          correctAnswer: 2,
          explanation: 'Padding is the space between the content and the border of an element.',
        },
        {
          question: 'Which property adds space *outside* the border of an element, creating space between it and other elements?',
          options: ['margin', 'spacing', 'padding', 'outline'],
          correctAnswer: 0,
          explanation: 'Margin is the space outside the border, used to create distance between an element and its neighbors.',
        },
        {
          question: 'If you write `margin: 20px;`, where is the margin applied?',
          options: ['Only to the top', 'Only to the left and right', 'To the top and bottom', 'To all four sides (top, right, bottom, left)'],
          correctAnswer: 3,
          explanation: 'A single value for `margin` or `padding` applies that spacing to all four sides of the element.',
        },
        {
          question: 'What does `margin: 10px 20px;` mean?',
          options: ['10px on top and bottom, 20px on left and right', '10px on left and right, 20px on top and bottom', '10px on top, 20px on all other sides', 'This is invalid syntax'],
          correctAnswer: 0,
          explanation: 'When two values are given, the first applies to the top and bottom, and the second applies to the left and right.',
        },
        {
          question: 'What does `padding: 10px 5px 20px 15px;` mean?',
          options: ['Top 10, Right 5, Bottom 20, Left 15', 'Top 10, Left 5, Bottom 20, Right 15', 'Top 10, Right 15, Bottom 20, Left 5', 'This is invalid syntax'],
          correctAnswer: 0,
          explanation: 'When four values are given, they are applied in clockwise order: Top, Right, Bottom, Left.',
        },
        {
          question: 'How can you center a block-level element (like a `div`) horizontally within its container?',
          options: ['`align: center;`', '`margin: auto;`', '`padding: 0 auto;`', '`text-align: center;`'],
          correctAnswer: 1,
          explanation: 'For a block-level element with a specified width, setting `margin: 0 auto;` (or just `margin: auto;` for both axes) will center it horizontally by distributing the remaining space equally between the left and right margins.',
        },
        {
          question: 'What is "margin collapsing"?',
          options: ['When padding and margin cancel each other out.', 'When the vertical margins of two adjacent block elements merge into a single, larger margin.', 'When you set margin to zero.', 'A browser bug that should be avoided.'],
          correctAnswer: 1,
          explanation: 'Margin collapsing is a defined behavior where the top and bottom margins of adjacent block elements collapse into a single margin whose size is the larger of the two individual margins.',
        },
        {
          question: 'Can you have negative margin values?',
          options: ['No, margins must be positive.', 'Yes, negative margins can be used to pull elements closer together or overlap them.', 'Only for the left margin.', 'Only in certain browsers.'],
          correctAnswer: 1,
          explanation: 'Yes, negative margins are valid and are a useful tool for creating overlaps and pulling elements into different positions than they would normally occupy.',
        },
        {
          question: 'If an element has `padding: 20px;` and a background color, where will the background color be visible?',
          options: ['Only in the content area.', 'In the content area and the padding area.', 'Only in the padding area.', 'In the content, padding, and margin areas.'],
          correctAnswer: 1,
          explanation: 'The background of an element extends through its content and padding areas, up to the inner edge of the border.',
        },
        {
          question: 'Which of these properties does NOT affect the total width/height of an element when using the default `box-sizing: content-box;`?',
          options: ['width', 'padding', 'border', 'margin'],
          correctAnswer: 3,
          explanation: 'Margin exists outside of the element\'s box, so it does not add to the element\'s calculated width or height. Padding and border, however, do add to the total size with `content-box`.',
        },
      ],
      'transitions-and-animations': [
        {
          question: 'Which CSS property is used to create a smooth transition effect when a property changes?',
          options: ['animation', 'transform', 'transition', 'duration'],
          correctAnswer: 2,
          explanation: 'The `transition` property allows you to control the speed and smoothness of how a property change occurs.',
        },
        {
          question: 'What is the purpose of the `transition-duration` property?',
          options: ['To specify how long the transition effect should take to complete.', 'To specify when the transition should start.', 'To specify the CSS property to be transitioned.', 'To specify the animation curve.'],
          correctAnswer: 0,
          explanation: '`transition-duration` sets the length of time a transition animation should take to complete. For example, `0.5s` for half a second.',
        },
        {
          question: 'How do you apply a transition to multiple properties?',
          options: ['This is not possible.', 'Use multiple `transition` declarations.', 'Separate the property names with a comma in the `transition-property` value.', 'Use `transition: all;`'],
          correctAnswer: 2,
          explanation: 'You can list multiple properties to transition by separating them with a comma, for example: `transition: background-color 0.5s, transform 0.3s;`',
        },
        {
          question: 'What is the `transition-timing-function` property for?',
          options: ['To set the duration of the transition.', 'To describe how the speed of a transition changes over its duration (e.g., `ease-in`, `linear`).', 'To set a delay before the transition starts.', 'To name the animation.'],
          correctAnswer: 1,
          explanation: 'The timing function (or easing function) controls the acceleration curve of the transition, making it feel more natural. `linear` is a constant speed, while `ease` starts slow, speeds up, then ends slow.',
        },
        {
          question: 'For more complex, multi-step animations, which CSS at-rule should you use?',
          options: ['@transition', '@animate', '@keyframes', '@style'],
          correctAnswer: 2,
          explanation: 'The `@keyframes` at-rule is used to define the stages and styles of a CSS animation from start (`from` or `0%`) to finish (`to` or `100%`) and at intermediate points.',
        },
        {
          question: 'Which property is used to apply a `@keyframes` animation to an element?',
          options: ['animation-name', 'animation-apply', 'keyframes', 'use-animation'],
          correctAnswer: 0,
          explanation: 'The `animation-name` property specifies the name of the `@keyframes` at-rule that defines the animation to be applied.',
        },
        {
          question: 'What does `animation-iteration-count: infinite;` do?',
          options: ['Makes the animation infinitely fast.', 'Makes the animation last forever on its first run.', 'Makes the animation repeat forever.', 'Makes the animation infinitely large.'],
          correctAnswer: 2,
          explanation: 'This property specifies the number of times an animation should be played. `infinite` makes it loop continuously.',
        },
        {
          question: 'Which `transform` function is used to rotate an element?',
          options: ['scale()', 'translate()', 'skew()', 'rotate()'],
          correctAnswer: 3,
          explanation: 'The `transform: rotate(45deg);` function rotates an element by a specified angle around its origin.',
        },
        {
          question: 'Which `transform` function is used to resize an element?',
          options: ['scale()', 'resize()', 'translate()', 'enlarge()'],
          correctAnswer: 0,
          explanation: 'The `transform: scale(1.5);` function increases or decreases the size of an element. A value of 1.5 makes it 50% larger.',
        },
        {
          question: 'What is a common trigger for a CSS transition?',
          options: ['Loading the page.', 'A change in state, such as `:hover` or adding a class with JavaScript.', 'A user clicking a button.', 'The animation ending.'],
          correctAnswer: 1,
          explanation: 'Transitions are triggered when a CSS property they are "watching" changes. This most commonly happens when a pseudo-class like `:hover` becomes active or when a JavaScript event adds or removes a CSS class from the element.',
        },
      ],
      'pseudo-classes-and-pseudo-elements': [
        {
          question: 'Which of the following is a pseudo-class?',
          options: ['::before', ':hover', '::first-letter', '::selection'],
          correctAnswer: 1,
          explanation: 'Pseudo-classes are keywords added to selectors that specify a special state of the selected element(s). `:hover` applies when the user hovers over an element. Pseudo-elements start with `::`.',
        },
        {
          question: 'Which of the following is a pseudo-element?',
          options: [':focus', ':nth-child(n)', '::before', ':active'],
          correctAnswer: 2,
          explanation: 'Pseudo-elements are keywords added to a selector that let you style a specific part of the selected element(s). `::before` creates a pseudo-element that is the first child of the selected element.',
        },
        {
          question: 'How do you select the first child element of a parent?',
          options: [':first', ':first-of-type', ':first-child', '::first-child'],
          correctAnswer: 2,
          explanation: 'The `:first-child` pseudo-class represents the first element among a group of sibling elements.',
        },
        {
          question: 'What does the `:nth-child(2n)` pseudo-class select?',
          options: ['Every second element.', 'Every even-numbered element (2nd, 4th, 6th, etc.).', 'The first two elements.', 'The second element only.'],
          correctAnswer: 1,
          explanation: '`:nth-child(2n)` or `:nth-child(even)` selects every sibling element that is the second, fourth, sixth (and so on) child of its parent.',
        },
        {
          question: 'What is the `::before` pseudo-element used for?',
          options: ['To insert some content before the content of an element.', 'To style the element that comes before the selected element.', 'To apply a style before an animation starts.', 'To select the first letter of an element.'],
          correctAnswer: 0,
          explanation: 'The `::before` pseudo-element can be used to insert some content (defined with the `content` property) before the actual content of an element.',
        },
        {
          question: 'Which pseudo-class applies to an element that has the keyboard focus?',
          options: [':active', ':focus', ':selected', ':hover'],
          correctAnswer: 1,
          explanation: 'The `:focus` pseudo-class is applied when an element has received focus, such as a form input that has been clicked on or tabbed to.',
        },
        {
          question: 'How can you style the placeholder text of an input field?',
          options: [':placeholder', '::placeholder-text', '::placeholder', ':placeholder-text'],
          correctAnswer: 2,
          explanation: 'The `::placeholder` pseudo-element allows you to style the placeholder text within an `<input>` or `<textarea>` element.',
        },
        {
          question: 'What is the difference between `:first-child` and `:first-of-type`?',
          options: ['There is no difference.', '`:first-child` selects any element that is the first child, while `:first-of-type` selects the first element *of its type* among its siblings.', '`:first-child` is for block elements, `:first-of-type` is for inline elements.', '`:first-child` is CSS2, `:first-of-type` is CSS3.'],
          correctAnswer: 1,
          explanation: '`:first-child` matches if the element is the very first child. `:first-of-type` matches if the element is the first of its kind (e.g., the first `<p>`) inside its parent, even if it isn\'t the absolute first child.',
        },
        {
          question: 'What does the `content` property, used with `::before` and `::after`, do?',
          options: ['It hides the element\'s content.', 'It is required to make the pseudo-element be generated and specifies what to insert.', 'It copies the element\'s content.', 'It sets the main text of the element.'],
          correctAnswer: 1,
          explanation: 'For a pseudo-element like `::before` or `::after` to be rendered, you must declare a `content` property, even if it\'s just an empty string (`content: ""`).',
        },
        {
          question: 'Which pseudo-class selects a link that is currently being clicked?',
          options: [':clicked', ':focus', ':active', ':target'],
          correctAnswer: 2,
          explanation: 'The `:active` pseudo-class applies while an element (like a link or button) is being activated by the user, for instance, during the time between a mouse press and release.',
        },
      ],
      'responsive-design': [
        {
          question: 'What is the primary goal of Responsive Web Design (RWD)?',
          options: ['To make websites look identical on all devices.', 'To create websites that adapt their layout to the viewing environment (screen size).', 'To make websites load faster.', 'To use the latest JavaScript frameworks.'],
          correctAnswer: 1,
          explanation: 'RWD aims to provide an optimal viewing and interaction experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices.',
        },
        {
          question: 'Which CSS feature is the cornerstone of responsive design?',
          options: ['Flexbox', 'Grid', 'CSS Variables', 'Media Queries'],
          correctAnswer: 3,
          explanation: 'Media queries allow you to apply CSS rules only when certain conditions are met, such as the viewport being a certain width, which is how layouts are changed for different devices.',
        },
        {
          question: 'What is a "mobile-first" approach in responsive design?',
          options: ['Designing the mobile version of the site first, then adding complexity for larger screens.', 'Designing only for mobile devices.', 'Making the desktop site look like a mobile app.', 'Using mobile-specific technologies.'],
          correctAnswer: 0,
          explanation: 'Mobile-first means designing for the smallest screen first and then progressively enhancing the design and layout for larger screens. This often leads to a cleaner, more focused design.',
        },
        {
          question: 'Which viewport meta tag is essential for responsive design?',
          options: ['<meta name="responsive" content="true">', '<meta name="viewport" content="width=device-width, initial-scale=1.0">', '<meta name="mobile" content="optimized">', '<meta name="layout" content="fluid">'],
          correctAnswer: 1,
          explanation: 'This meta tag tells the browser to set the width of the viewport to the device\'s actual width and to set the initial zoom level to 100%, preventing mobile browsers from "zooming out" to show the desktop layout.',
        },
        {
          question: 'What is a "breakpoint" in responsive design?',
          options: ['A point where the website\'s code breaks.', 'A specific viewport width at which the website\'s layout changes.', 'A type of CSS error.', 'A tool for debugging mobile layouts.'],
          correctAnswer: 1,
          explanation: 'Breakpoints are the points at which a website\'s content and design will adapt in a certain way in order to provide the best possible user experience. They are the "trigger points" for media queries.',
        },
        {
          question: 'What does a "fluid grid" mean?',
          options: ['A grid that uses fixed pixel widths.', 'A grid that uses percentage-based widths so it can stretch and shrink with the viewport.', 'A grid that animates like a fluid.', 'A grid made with JavaScript.'],
          correctAnswer: 1,
          explanation: 'A fluid grid uses relative units like percentages, rather than fixed units like pixels, for column widths. This allows the layout to resize smoothly as the viewport size changes.',
        },
        {
          question: 'How would you apply a style ONLY to screens that are 600px wide or less?',
          options: ['@media (min-width: 600px) { ... }', '@media (max-width: 600px) { ... }', '@media (width: 600px) { ... }', '@media screen and (width <= 600px) { ... }'],
          correctAnswer: 1,
          explanation: 'The `max-width` media feature is used to apply styles for viewports up to a certain width. So, `max-width: 600px` targets all screens 600px and narrower.',
        },
        {
          question: 'How can you serve different images for different screen resolutions?',
          options: ['Using JavaScript to detect the screen size.', 'Using the HTML `<picture>` element or the `srcset` attribute on `<img>`.', 'You must create separate websites.', 'This is not possible with just HTML and CSS.'],
          correctAnswer: 1,
          explanation: 'The `<picture>` element and the `srcset` attribute are modern HTML features designed specifically for responsive images, allowing the browser to select the most appropriate image source from a list based on resolution or viewport size.',
        },
        {
          question: 'Why are relative units like `em` and `rem` useful for responsive typography?',
          options: ['They are not useful.', 'They allow font sizes to scale relative to a base font size, making it easier to manage typography across a site.', 'They are the only units that work on mobile.', 'They are required by media queries.'],
          correctAnswer: 1,
          explanation: 'Using `em` (relative to parent) or `rem` (relative to root) allows you to create a scalable system for your typography. You can change the base font size in a media query, and all fonts using these units will scale proportionally.',
        },
        {
          question: 'Besides screen width, what other media features can be used in a media query?',
          options: ['orientation (portrait or landscape)', 'resolution', 'aspect-ratio', 'All of the above'],
          correctAnswer: 3,
          explanation: 'Media queries are very powerful and can target many device characteristics, including orientation, screen resolution (for high-DPI "Retina" displays), aspect ratio, and more.',
        },
      ],
      'css-variables': [
        {
          question: 'How do you declare a CSS variable (custom property)?',
          options: ['var myColor = blue;', 'let --my-color: blue;', '--my-color: blue;', '$myColor: blue;'],
          correctAnswer: 2,
          explanation: 'CSS variables must start with two hyphens (`--`) and are typically declared within a selector, often `:root` to make them global.',
        },
        {
          question: 'How do you use a CSS variable?',
          options: ['color: --my-color;', 'color: var(--my-color);', 'color: get(--my-color);', 'color: use(--my-color);'],
          correctAnswer: 1,
          explanation: 'To use a CSS variable, you use the `var()` function, passing the variable name as the argument.',
        },
        {
          question: 'Where are CSS variables typically defined to make them globally available?',
          options: ['In the `<body>` selector.', 'In the `<html>` selector.', 'In the `:root` pseudo-class selector.', 'In the `*` universal selector.'],
          correctAnswer: 2,
          explanation: 'The `:root` pseudo-class represents the `<html>` element and is the perfect place to declare global variables because it has the highest specificity and applies to the entire document.',
        },
        {
          question: 'What is a key benefit of using CSS variables?',
          options: ['They make CSS run faster.', 'They are the only way to use colors in CSS.', 'They help avoid repetition and make it easier to manage values like colors and sizes across a large stylesheet.', 'They are required for responsive design.'],
          correctAnswer: 2,
          explanation: 'CSS variables follow the DRY (Don\'t Repeat Yourself) principle. You can define a value once and reuse it in multiple places. To change the value, you only need to update it in one location.',
        },
        {
          question: 'Can you provide a fallback value for a CSS variable?',
          options: ['No, if the variable is not defined, it will cause an error.', 'Yes, by providing a second argument to the `var()` function.', 'Yes, using the `||` operator like in JavaScript.', 'Only by defining a separate fallback class.'],
          correctAnswer: 1,
          explanation: 'You can provide a fallback value that will be used if the variable is not defined. Syntax: `var(--my-color, blue);`',
        },
        {
          question: 'Can CSS variables be manipulated with JavaScript?',
          options: ['No, they are completely separate from JavaScript.', 'Yes, you can get and set their values using JavaScript.', 'Only with jQuery.', 'Only on the `:root` element.'],
          correctAnswer: 1,
          explanation: 'Yes, CSS variables are accessible via JavaScript. You can dynamically change their values using `element.style.setProperty("--my-color", "red");`, which makes them powerful for theming and interactive effects.',
        },
        {
          question: 'What does "cascading" mean in the context of CSS variables?',
          options: ['Variables are not affected by the cascade.', 'Variables inherit down the DOM tree and can be overridden in more specific selectors, just like other CSS properties.', 'Variables can only be defined once.', 'Variables create a waterfall effect.'],
          correctAnswer: 1,
          explanation: 'CSS variables follow the standard cascade. A variable defined on a parent element will be available to its children, and a child can override that variable with its own definition.',
        },
        {
          question: 'What is the main difference between CSS variables and variables in a preprocessor like Sass?',
          options: ['There is no difference.', 'Sass variables are compiled into static CSS, while CSS variables exist live in the browser and can be changed dynamically.', 'CSS variables have better browser support.', 'Sass variables are more powerful.'],
          correctAnswer: 1,
          explanation: 'Sass variables ($my-color) are resolved at compile time. CSS variables (`--my-color`) are live in the browser, meaning they can be inspected, updated with JavaScript, and respond to the cascade.',
        },
        {
          question: 'What is the correct scope for a variable that should only apply to a specific component?',
          options: ['Define it in `:root`.', 'Define it on the component\'s root element selector (e.g., `.my-component`).', 'Define it in the `<body>`.', 'You cannot scope variables.'],
          correctAnswer: 1,
          explanation: 'To create a locally scoped variable, you define it on the selector for the component where you want it to apply. It will then be inherited by the children of that component.',
        },
        {
          question: 'What happens if you try to use a variable that has not been defined and no fallback is provided?',
          options: ['The browser will throw a JavaScript error.', 'The property will be ignored, or revert to its default or inherited value.', 'The browser will crash.', 'The text will turn red.'],
          correctAnswer: 1,
          explanation: 'If a variable is invalid or undefined (and has no fallback), the property using it will be considered invalid. The browser will then fall back to the property\'s default value or the value it inherited from its parent.',
        },
      ],
      'shadows-and-filters': [
        {
          question: 'Which property is used to add a shadow effect to an element\'s box?',
          options: ['text-shadow', 'element-shadow', 'box-shadow', 'shadow-effect'],
          correctAnswer: 2,
          explanation: 'The `box-shadow` property adds shadow effects around an element\'s frame. You can specify multiple effects separated by commas.',
        },
        {
          question: 'What are the first two length values in a basic `box-shadow` declaration?',
          options: ['Blur radius and spread radius', 'Horizontal offset and vertical offset', 'X-position and Y-position', 'Width and height of the shadow'],
          correctAnswer: 1,
          explanation: 'A basic `box-shadow` is defined by the horizontal offset (positive is right, negative is left) and the vertical offset (positive is down, negative is up).',
        },
        {
          question: 'What does the third length value in a `box-shadow` declaration control?',
          options: ['The shadow\'s color', 'The shadow\'s opacity', 'The blur radius', 'The spread radius'],
          correctAnswer: 2,
          explanation: 'The third length value sets the blur radius. The larger the value, the more blurred the shadow, making it bigger and lighter.',
        },
        {
          question: 'How can you create an "inner" shadow instead of an outer drop shadow?',
          options: ['By using negative offset values.', 'By using the `inner-shadow` property.', 'By adding the `inset` keyword to the `box-shadow` declaration.', 'This is not possible with CSS.'],
          correctAnswer: 2,
          explanation: 'If the `inset` keyword is specified, the shadow is drawn inside the border (or padding edge) of the element instead of outside.',
        },
        {
          question: 'Which CSS property is used to apply graphical effects like blur or saturation to an element?',
          options: ['effects', 'filter', 'backdrop-filter', 'appearance'],
          correctAnswer: 1,
          explanation: 'The `filter` property provides access to effects like `blur()`, `brightness()`, `contrast()`, `grayscale()`, `saturate()`, and more.',
        },
        {
          question: 'How would you make an image completely black and white?',
          options: ['`filter: monochrome(100%);`', '`filter: grayscale(1);`', '`filter: black-and-white(true);`', '`color: grayscale;`'],
          correctAnswer: 1,
          explanation: '`filter: grayscale(1)` or `grayscale(100%)` applies a grayscale effect, where a value of 1 (100%) makes the image completely monochrome.',
        },
        {
          question: 'Which filter function would you use to make an element blurry?',
          options: ['`blur()`', '`fuzzy()`', '`soften()`', '`focus()`'],
          correctAnswer: 0,
          explanation: 'The `blur()` function applies a Gaussian blur to the element. The value specifies the blur radius, for example, `blur(5px)`.',
        },
        {
          question: 'What is the `text-shadow` property used for?',
          options: ['To add a shadow to the entire text box.', 'To add a shadow effect directly to the text itself.', 'To make the text transparent.', 'To change the font weight.'],
          correctAnswer: 1,
          explanation: '`text-shadow` works just like `box-shadow` but applies the shadow to the text characters instead of the element\'s box.',
        },
        {
          question: 'Can you apply multiple filters to a single element?',
          options: ['No, only one filter is allowed.', 'Yes, by separating them with commas.', 'Yes, by listing them space-separated within the `filter` property.', 'Only by nesting elements with one filter each.'],
          correctAnswer: 2,
          explanation: 'You can chain multiple filter functions together by separating them with spaces. For example: `filter: blur(5px) grayscale(50%);`',
        },
        {
          question: 'What is the difference between `filter` and `backdrop-filter`?',
          options: ['There is no difference.', '`filter` applies effects to the element itself, while `backdrop-filter` applies effects to the area *behind* the element.', '`filter` is for images, `backdrop-filter` is for text.', '`backdrop-filter` has better browser support.'],
          correctAnswer: 1,
          explanation: '`backdrop-filter` is powerful for creating effects like frosted glass, where you can blur or modify the content that is visible behind a semi-transparent element.',
        },
      ],
      'css-frameworks': [
        {
          question: 'What is the primary purpose of a CSS framework like Bootstrap or Tailwind?',
          options: ['To replace HTML.', 'To provide pre-written, reusable CSS and components to speed up development.', 'To manage server-side code.', 'To replace JavaScript.'],
          correctAnswer: 1,
          explanation: 'CSS frameworks offer a collection of CSS stylesheets and/or components that developers can use to build user interfaces quickly without having to write all the CSS from scratch.',
        },
        {
          question: 'Which framework is known for its "utility-first" approach?',
          options: ['Bootstrap', 'Foundation', 'Bulma', 'Tailwind CSS'],
          correctAnswer: 3,
          explanation: 'Tailwind CSS is a utility-first framework. Instead of pre-styled components, it provides low-level utility classes that you compose directly in your HTML.',
        },
        {
          question: 'Which framework is known for its extensive library of pre-built components like navbars, modals, and cards?',
          options: ['Tailwind CSS', 'Bootstrap', 'Pure.css', 'Skeleton'],
          correctAnswer: 1,
          explanation: 'Bootstrap is a component-based framework. It comes with a rich set of ready-to-use components that you can drop into your project.',
        },
        {
          question: 'In Tailwind CSS, how would you typically style an element?',
          options: ['By writing custom CSS in a separate file.', 'By applying a pre-built component class like `.card`.', 'By composing many small utility classes directly in the HTML.', 'By using inline `style` attributes.'],
          correctAnswer: 2,
          explanation: 'The core idea of Tailwind is to build custom designs by applying many small, single-purpose utility classes in your HTML, like `p-4`, `bg-blue-500`, `rounded-lg`.',
        },
        {
          question: 'What is a potential disadvantage of using a component-based framework like Bootstrap?',
          options: ['It is too slow.', 'It can be difficult to create a unique design that doesn\'t look "like Bootstrap".', 'It requires writing a lot of custom CSS.', 'It does not support responsive design.'],
          correctAnswer: 1,
          explanation: 'Because Bootstrap provides fully styled components, websites built with it can sometimes look very similar if developers don\'t do enough customization.',
        },
        {
          question: 'What is a potential disadvantage of using a utility-first framework like Tailwind CSS?',
          options: ['It makes your CSS files very large.', 'It can lead to very "cluttered" HTML with many classes on each element.', 'It is not customizable.', 'It is not responsive.'],
          correctAnswer: 1,
          explanation: 'The utility-first approach can lead to long lists of classes in the HTML markup, which some developers find "messy" compared to using a single semantic class name.',
        },
        {
          question: 'What is the grid system in Bootstrap used for?',
          options: ['To create database tables.', 'To create a responsive layout with rows and columns.', 'To draw a grid on the screen.', 'To manage user permissions.'],
          correctAnswer: 1,
          explanation: 'Bootstrap includes a powerful mobile-first flexbox grid system for building layouts of all shapes and sizes. It’s based on a 12-column layout.',
        },
        {
          question: 'In Tailwind CSS, `p-4` is an example of what?',
          options: ['A pre-built component', 'A custom property', 'A utility class', 'An invalid class name'],
          correctAnswer: 2,
          explanation: '`p-4` is a utility class that applies a specific amount of `padding` to an element. This is the fundamental concept of a utility-first framework.',
        },
        {
          question: 'Which of these is a benefit of using a CSS framework?',
          options: ['Ensures cross-browser compatibility.', 'Enforces a consistent design system.', 'Speeds up development time.', 'All of the above.'],
          correctAnswer: 3,
          explanation: 'Frameworks handle many cross-browser quirks, provide a consistent set of styles, and save immense amounts of time by providing ready-made solutions for common UI patterns.',
        },
        {
          question: 'To use Tailwind, you typically need a build step. What does this build step do?',
          options: ['It compiles your HTML into CSS.', 'It scans your files for used utility classes and generates a highly optimized CSS file containing only the styles you need.', 'It converts your CSS into JavaScript.', 'It deploys your website.'],
          correctAnswer: 1,
          explanation: 'Because Tailwind provides thousands of utility classes, its default file size is very large. The build process (using tools like PostCSS) purges all unused classes to create a tiny, production-ready CSS file.',
        },
      ],
    },
    javascript: {
      'introduction-to-javascript': [
        {
          question: 'Which is the correct way to write a single-line comment in JavaScript?',
          options: ['<!-- This is a comment -->', '/* This is a comment */', '// This is a comment', '** This is a comment **'],
          correctAnswer: 2,
          explanation: 'Single-line comments in JavaScript start with `//`.',
        },
        {
          question: 'How do you call a function named "myFunction"?',
          options: ['call function myFunction()', 'myFunction()', 'call myFunction()', 'myFunction'],
          correctAnswer: 1,
          explanation: 'You call a function by writing its name followed by parentheses `()`.',
        },
        {
          question: 'JavaScript is the same as Java.',
          options: ['True', 'False', 'Sometimes', 'They are different versions of the same language'],
          correctAnswer: 1,
          explanation: 'This is a common misconception. JavaScript and Java are two completely different programming languages with different syntax and use cases. The similar name is a result of a marketing decision.',
        },
        {
          question: 'Where is JavaScript code typically executed?',
          options: ['On the web server', 'In the user\'s web browser', 'In the database', 'In the CSS file'],
          correctAnswer: 1,
          explanation: 'JavaScript is a client-side scripting language, which means it runs on the user\'s computer inside their web browser.',
        },
        {
          question: 'Which HTML element is used to contain JavaScript code?',
          options: ['<javascript>', '<js>', '<script>', '<style>'],
          correctAnswer: 2,
          explanation: 'The `<script>` tag is used to embed or refer to executable code; it is typically used for JavaScript.',
        },
        {
          question: 'What is the original name of JavaScript?',
          options: ['LiveScript', 'ECMAScript', 'JScript', 'Mocha'],
          correctAnswer: 3,
          explanation: 'JavaScript was created at Netscape and was first named Mocha, then LiveScript, before being renamed to JavaScript.',
        },
        {
          question: 'What does "DOM" stand for in the context of JavaScript?',
          options: ['Document Object Model', 'Data Object Model', 'Display Object Management', 'Document Order Model'],
          correctAnswer: 0,
          explanation: 'The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
        },
        {
          question: 'How do you write "Hello World" in an alert box?',
          options: ['msg("Hello World");', 'alertBox("Hello World");', 'console.log("Hello World");', 'alert("Hello World");'],
          correctAnswer: 3,
          explanation: 'The `alert()` method displays an alert box with a specified message and an OK button.',
        },
        {
          question: 'Is JavaScript a case-sensitive language?',
          options: ['No', 'Yes', 'Only for variable names', 'Only for function names'],
          correctAnswer: 1,
          explanation: 'Yes, JavaScript is case-sensitive. The variables `myVar` and `myvar` would be two different variables.',
        },
        {
          question: 'What organization develops the ECMAScript standard for JavaScript?',
          options: ['W3C', 'Mozilla', 'Google', 'Ecma International'],
          correctAnswer: 3,
          explanation: 'ECMAScript is a standard for scripting languages, including JavaScript. It is standardized by Ecma International in the ECMA-262 specification.',
        },
      ],
      'variables-and-data-types': [
        {
          question: 'Which keyword is used to declare a variable that cannot be reassigned?',
          options: ['let', 'var', 'const', 'static'],
          correctAnswer: 2,
          explanation: 'The `const` keyword is used to declare a block-scoped variable whose value cannot be changed or redeclared.',
        },
        {
          question: 'What is the result of `typeof null`?',
          options: ['"null"', '"undefined"', '"object"', '"number"'],
          correctAnswer: 2,
          explanation: 'This is a well-known quirk in JavaScript. `typeof null` returns "object".',
        },
        {
          question: 'Which of the following is NOT a primitive data type in JavaScript?',
          options: ['String', 'Number', 'Object', 'Boolean'],
          correctAnswer: 2,
          explanation: 'String, Number, Boolean, Null, Undefined, Symbol, and BigInt are primitive types. Object is a complex data type.',
        },
        {
          question: 'What will be the value of `x` after this code runs? `let x;`',
          options: ['null', '0', '"" (empty string)', 'undefined'],
          correctAnswer: 3,
          explanation: 'A variable that has been declared but not assigned a value has the value `undefined`.',
        },
        {
          question: 'What is the difference between `let` and `var`?',
          options: ['There is no difference.', '`let` is block-scoped, while `var` is function-scoped.', '`let` is for numbers, `var` is for strings.', '`var` cannot be reassigned.'],
          correctAnswer: 1,
          explanation: 'The main difference is scoping. `var` is scoped to the function it is in, while `let` is scoped to the block (the `{}` curly braces) it is in. `let` is the modern and preferred way to declare variables that may be reassigned.',
        },
        {
          question: 'What is the data type of the value `true`?',
          options: ['String', 'Number', 'Boolean', 'Object'],
          correctAnswer: 2,
          explanation: '`true` and `false` are the two values of the Boolean data type.',
        },
        {
          question: 'What is the result of `"5" + 2` in JavaScript?',
          options: ['7', '"52"', '3', 'Error'],
          correctAnswer: 1,
          explanation: 'If you add a number to a string, the number will be converted to a string first, and then the two strings are concatenated. The result is the string "52".',
        },
        {
          question: 'How do you declare a variable named "carName"?',
          options: ['v carName;', 'variable carName;', 'var carName;', 'string carName;'],
          correctAnswer: 2,
          explanation: 'You can declare a JavaScript variable using the `var`, `let`, or `const` keyword.',
        },
        {
          question: 'What is the value of `Boolean(0)`?',
          options: ['true', 'false', 'undefined', 'null'],
          correctAnswer: 1,
          explanation: 'In JavaScript, `0`, `""` (empty string), `null`, `undefined`, and `NaN` are "falsy" values, meaning they convert to `false` in a boolean context. All other values are "truthy".',
        },
        {
          question: 'Which data type would be used to store a list of items?',
          options: ['String', 'Number', 'Array (which is a type of Object)', 'Boolean'],
          correctAnswer: 2,
          explanation: 'Arrays are used to store multiple values in a single variable. While technically a specialized type of Object, "Array" is the practical answer.',
        },
      ],
      'operators': [
        {
          question: 'Which operator is used for strict equality (checks both value and type)?',
          options: ['==', '=', '===', '!='],
          correctAnswer: 2,
          explanation: 'The `===` operator checks for strict equality, meaning it will only return true if both the value and the data type of the operands are the same.',
        },
        {
          question: 'What is the result of `10 % 3`?',
          options: ['1', '3', '0', '0.33'],
          correctAnswer: 0,
          explanation: 'The `%` (modulus) operator returns the remainder of a division. 10 divided by 3 is 3 with a remainder of 1.',
        },
        {
          question: 'Which operator represents "logical AND"?',
          options: ['||', '&&', '!', '&'],
          correctAnswer: 1,
          explanation: 'The `&&` operator is the logical AND operator. It returns true only if both operands are true.',
        },
        {
          question: 'Which operator represents "logical OR"?',
          options: ['||', '&&', '|', 'OR'],
          correctAnswer: 0,
          explanation: 'The `||` operator is the logical OR operator. It returns true if at least one of the operands is true.',
        },
        {
          question: 'What is the shorthand for `x = x + 1;`?',
          options: ['x++', 'x+', '++x', 'Both x++ and ++x'],
          correctAnswer: 3,
          explanation: 'Both `x++` (post-increment) and `++x` (pre-increment) are shorthand ways to add 1 to the value of x.',
        },
        {
          question: 'What will `(true && false)` evaluate to?',
          options: ['true', 'false', 'undefined', 'null'],
          correctAnswer: 1,
          explanation: 'The logical AND (`&&`) operator requires both conditions to be true to return `true`. Since one is `false`, the result is `false`.',
        },
        {
          question: 'What is the assignment operator in JavaScript?',
          options: ['=', '==', ':=', '<-'],
          correctAnswer: 0,
          explanation: 'The single equals sign `=` is the assignment operator, used to assign a value to a variable.',
        },
        {
          question: 'What does the `!=` operator do?',
          options: ['Checks for strict inequality (value and type).', 'Checks for loose inequality (value only).', 'Assigns a not-equal value.', 'It is not a valid operator.'],
          correctAnswer: 1,
          explanation: 'The `!=` operator checks if two operands are not equal in value, but it performs type coercion. For example, `5 != "5"` is false.',
        },
        {
          question: 'What does the `!==` operator do?',
          options: ['Checks for strict inequality (value and type).', 'Checks for loose inequality (value only).', 'It is the same as `!=`.', 'It is not a valid operator.'],
          correctAnswer: 0,
          explanation: 'The `!==` operator checks if two operands are not equal in value OR not equal in type. For example, `5 !== "5"` is true.',
        },
        {
          question: 'What is the ternary operator?',
          options: ['An operator that takes three operands, often used as a shortcut for an `if` statement.', 'An operator for working with 3D graphics.', 'An operator for combining three strings.', 'There is no such operator in JavaScript.'],
          correctAnswer: 0,
          explanation: 'The ternary operator has the syntax `condition ? value_if_true : value_if_false`. It is a concise way to write a simple conditional.',
        },
      ],
      'conditional-statements': [
        {
          question: 'Which statement is used to execute code if a specified condition is true?',
          options: ['if', 'then', 'when', 'check'],
          correctAnswer: 0,
          explanation: 'The `if` statement is the fundamental conditional statement in JavaScript.',
        },
        {
          question: 'How do you write an `if` statement for executing some code if "i" is NOT equal to 5?',
          options: ['if i <> 5', 'if (i != 5)', 'if i =! 5', 'if (i not 5)'],
          correctAnswer: 1,
          explanation: 'The `!=` operator means "not equal to". The condition must be enclosed in parentheses.',
        },
        {
          question: 'What is the purpose of the `else` statement?',
          options: ['To provide an alternative block of code to be executed if the `if` condition is false.', 'To create a loop.', 'To end the `if` statement.', 'To add another condition to check.'],
          correctAnswer: 0,
          explanation: 'The `else` statement provides a block of code that runs when the condition in the corresponding `if` statement evaluates to false.',
        },
        {
          question: 'Which statement allows you to select one of many blocks of code to be executed?',
          options: ['if...else if...else', 'switch', 'for', 'Both A and B'],
          correctAnswer: 3,
          explanation: 'Both a chain of `if...else if...else` statements and a `switch` statement can be used to select one of many code blocks to execute based on a condition.',
        },
        {
          question: 'What is the purpose of the `break` keyword within a `switch` statement?',
          options: ['To end the entire script.', 'To stop the execution of the `switch` block and prevent "fall-through" to the next case.', 'To skip the current case.', 'To indicate the default case.'],
          correctAnswer: 1,
          explanation: 'Without a `break`, the code will continue to execute the code in the next `case` block, which is usually not the intended behavior.',
        },
        {
          question: 'What is the purpose of the `default` keyword in a `switch` statement?',
          options: ['It is a required first case.', 'It specifies the code to run if there is no case match.', 'It sets the default value for the switch variable.', 'It is not a valid keyword in `switch`.'],
          correctAnswer: 1,
          explanation: 'The `default` case runs if the expression being evaluated in the `switch` statement does not match any of the other `case` values.',
        },
        {
          question: 'What is the output of the following code? `if (false) { console.log("A"); } else { console.log("B"); }`',
          options: ['A', 'B', 'A and B', 'No output'],
          correctAnswer: 1,
          explanation: 'Since the `if` condition is `false`, the code inside the `else` block is executed.',
        },
        {
          question: 'Which values are considered "falsy" in a JavaScript conditional?',
          options: ['0, "", null, undefined, NaN, false', 'Only `false`', 'Only `0` and `false`', 'Only `null` and `undefined`'],
          correctAnswer: 0,
          explanation: 'These six values are "falsy", meaning they will behave like `false` when used as a condition. All other values are "truthy".',
        },
        {
          question: 'Can you have an `if` statement without an `else` block?',
          options: ['No, `else` is always required.', 'Yes, you can have a standalone `if` block.', 'Only if the condition is always true.', 'Only in a `switch` statement.'],
          correctAnswer: 1,
          explanation: 'An `if` statement can exist on its own. The code inside it will simply be skipped if the condition is false.',
        },
        {
          question: 'What is a "nested" if statement?',
          options: ['An `if` statement inside a loop.', 'An `if` statement with multiple conditions.', 'An `if` statement inside another `if` statement.', 'An `if` statement that uses the `switch` keyword.'],
          correctAnswer: 2,
          explanation: 'A nested `if` statement is an `if` statement that is the target of another `if` or `else` statement, allowing for more complex conditional logic.',
        },
      ],
      'loops': [
        {
          question: 'Which loop is best suited for iterating over the properties of an object?',
          options: ['for', 'while', 'do...while', 'for...in'],
          correctAnswer: 3,
          explanation: 'The `for...in` loop is specifically designed to iterate over the enumerable properties of an object.',
        },
        {
          question: 'Which loop is best suited for iterating over the elements of an array?',
          options: ['for', 'while', 'for...of', 'All of the above can be used'],
          correctAnswer: 3,
          explanation: 'While a standard `for` loop works, the `for...of` loop is the modern and often cleanest way to iterate directly over the values of an iterable like an array. `forEach` is also a popular array method.',
        },
        {
          question: 'What are the three parts of a standard `for` loop statement?',
          options: ['Condition, Increment, Body', 'Initialization, Condition, Increment', 'Variable, Condition, Update', 'Start, Stop, Step'],
          correctAnswer: 1,
          explanation: 'A `for` loop is composed of an initialization expression (e.g., `let i = 0`), a condition (e.g., `i < 5`), and an increment/update expression (e.g., `i++`).',
        },
        {
          question: 'What is the main difference between a `while` loop and a `do...while` loop?',
          options: ['There is no difference.', 'A `do...while` loop will execute its body at least once, regardless of the condition.', 'A `while` loop is faster.', 'A `do...while` loop does not need a condition.'],
          correctAnswer: 1,
          explanation: 'A `while` loop checks the condition *before* executing the body. A `do...while` loop executes the body *first* and then checks the condition, guaranteeing at least one execution.',
        },
        {
          question: 'What is an "infinite loop"?',
          options: ['A loop that runs forever because its condition never becomes false.', 'A loop that covers the entire screen.', 'A special type of `for` loop.', 'A loop that runs 1 million times.'],
          correctAnswer: 0,
          explanation: 'An infinite loop is a common programming error where a loop\'s exit condition is never met, causing it to run indefinitely and often freezing the browser.',
        },
        {
          question: 'What does the `break` statement do inside a loop?',
          options: ['It skips the current iteration and continues with the next.', 'It stops the loop and continues execution at the statement immediately following the loop.', 'It causes an error.', 'It restarts the loop from the beginning.'],
          correctAnswer: 1,
          explanation: 'The `break` statement is used to exit a loop (or a `switch` statement) prematurely.',
        },
        {
          question: 'What does the `continue` statement do inside a loop?',
          options: ['It stops the loop entirely.', 'It restarts the loop from the beginning.', 'It skips the rest of the code in the current iteration and proceeds to the next iteration.', 'It pauses the loop.'],
          correctAnswer: 2,
          explanation: 'The `continue` statement is used to jump over the current iteration and go straight to the next one.',
        },
        {
          question: 'How many times will this loop run? `for (let i = 0; i < 5; i++) { ... }`',
          options: ['4 times', '5 times', '6 times', '0 times'],
          correctAnswer: 1,
          explanation: 'The loop will run for `i` values of 0, 1, 2, 3, and 4. When `i` becomes 5, the condition `5 < 5` is false, and the loop terminates. This is a total of 5 iterations.',
        },
        {
          question: 'What is the `forEach` method?',
          options: ['A standard loop like `for` or `while`.', 'A method on arrays that executes a provided function once for each array element.', 'A way to loop over object properties.', 'A way to create an infinite loop.'],
          correctAnswer: 1,
          explanation: '`array.forEach()` is a clean, readable way to iterate over an array\'s elements without needing a manual `for` loop structure.',
        },
        {
          question: 'Consider `while(x < 5) { ... }`. If `x` starts at 10, how many times does the loop body execute?',
          options: ['0', '1', '5', 'Infinite'],
          correctAnswer: 0,
          explanation: 'The condition `x < 5` (10 < 5) is false from the very beginning, so the loop\'s body is never executed.',
        },
      ],
      'functions': [
        {
          question: 'What is the primary purpose of a function in JavaScript?',
          options: ['To store a single value.', 'To perform a specific task and to organize code into reusable blocks.', 'To create a conditional statement.', 'To loop over an array.'],
          correctAnswer: 1,
          explanation: 'Functions allow you to encapsulate a piece of code that performs a specific task, which you can then call whenever you need it, making your code more organized and reusable.',
        },
        {
          question: 'How do you define a function in JavaScript?',
          options: ['`function myFunction() { ... }`', '`def myFunction(): ...`', '`func myFunction() => { ... }`', '`create function myFunction() { ... }`'],
          correctAnswer: 0,
          explanation: 'The most common way is using the `function` keyword, followed by the function name, parentheses `()`, and a code block `{}`.',
        },
        {
          question: 'What is a "parameter" of a function?',
          options: ['A variable declared inside the function.', 'The value returned by the function.', 'A variable listed in the function\'s definition, acting as a placeholder for a value.', 'The name of the function.'],
          correctAnswer: 2,
          explanation: 'Parameters are the names listed in the function definition. They are placeholders for the arguments that will be passed to the function when it is called.',
        },
        {
          question: 'What is an "argument" of a function?',
          options: ['A variable declared inside the function.', 'The actual value that is passed to the function when it is called.', 'A variable listed in the function\'s definition.', 'The `return` statement.'],
          correctAnswer: 1,
          explanation: 'Arguments are the real values that are passed into the function when it is invoked.',
        },
        {
          question: 'What does the `return` statement do?',
          options: ['It stops the execution of the function and, optionally, returns a value from that function.', 'It prints a value to the console.', 'It restarts the function.', 'It declares a new variable.'],
          correctAnswer: 0,
          explanation: 'The `return` statement ends the function execution and specifies a value to be returned to the function caller.',
        },
        {
          question: 'What is a "function expression"?',
          options: ['Another name for a function declaration.', 'A function that is assigned to a variable.', 'A function that returns another function.', 'A mathematical expression inside a function.'],
          correctAnswer: 1,
          explanation: 'A function expression is when you create a function and assign it to a variable, like `const myFunction = function() { ... };`.',
        },
        {
          question: 'What is an "arrow function"?',
          options: ['A function that draws an arrow.', 'A more concise syntax for writing function expressions, introduced in ES6.', 'A function that can only be used for mathematical calculations.', 'A function that points to another function.'],
          correctAnswer: 1,
          explanation: 'Arrow functions `() => { ... }` provide a shorter syntax compared to traditional function expressions and have a different behavior regarding the `this` keyword.',
        },
        {
          question: 'What is the "scope" of a variable?',
          options: ['The data type of the variable.', 'The physical size of the variable in memory.', 'The context in which the variable is accessible or visible.', 'The name of the variable.'],
          correctAnswer: 2,
          explanation: 'Scope determines the accessibility of variables. Variables defined inside a function are not accessible from outside the function (local scope).',
        },
        {
          question: 'A function that does not have a `return` statement will return what value by default?',
          options: ['null', '0', '"" (empty string)', 'undefined'],
          correctAnswer: 3,
          explanation: 'If a function does not explicitly return a value, it will implicitly return `undefined`.',
        },
        {
          question: 'What is a "callback function"?',
          options: ['A function that calls another function.', 'A function that is passed as an argument to another function, to be "called back" later.', 'A function that can only be called once.', 'The first function declared in a script.'],
          correctAnswer: 1,
          explanation: 'Callback functions are a fundamental concept in asynchronous JavaScript, used in event listeners, timeouts, and data fetching.',
        },
      ],
      'arrays': [
        {
          question: 'How do you create an array in JavaScript?',
          options: ['`let colors = "red", "green", "blue";`', '`let colors = ["red", "green", "blue"];`', '`let colors = ("red", "green", "blue");`', '`let colors = {"red", "green", "blue"};`'],
          correctAnswer: 1,
          explanation: 'Arrays are created using square brackets `[]`, with the elements separated by commas.',
        },
        {
          question: 'How do you access the first element of an array named `myArray`?',
          options: ['`myArray[1]`', '`myArray.first()`', '`myArray[0]`', '`myArray.get(0)`'],
          correctAnswer: 2,
          explanation: 'Array indexing in JavaScript is zero-based, meaning the first element is at index 0.',
        },
        {
          question: 'Which property tells you the number of elements in an array?',
          options: ['size', 'count', 'length', 'elements'],
          correctAnswer: 2,
          explanation: 'The `length` property of an array returns the number of elements it contains.',
        },
        {
          question: 'Which method adds a new element to the end of an array?',
          options: ['push()', 'add()', 'append()', 'addToEnd()'],
          correctAnswer: 0,
          explanation: 'The `push()` method adds one or more elements to the end of an array and returns the new length of the array.',
        },
        {
          question: 'Which method removes the last element from an array?',
          options: ['removeLast()', 'pop()', 'shift()', 'slice()'],
          correctAnswer: 1,
          explanation: 'The `pop()` method removes the last element from an array and returns that element.',
        },
        {
          question: 'Which method removes the first element from an array?',
          options: ['pop()', 'removeFirst()', 'shift()', 'unshift()'],
          correctAnswer: 2,
          explanation: 'The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.',
        },
        {
          question: 'Which method adds a new element to the beginning of an array?',
          options: ['unshift()', 'push()', 'prepend()', 'addToStart()'],
          correctAnswer: 0,
          explanation: 'The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.',
        },
        {
          question: 'Which method is used to iterate over the elements of an array and execute a function for each element?',
          options: ['for', 'loop()', 'forEach()', 'iterate()'],
          correctAnswer: 2,
          explanation: 'The `forEach()` method provides a clean, readable way to execute a callback function for each element in an array.',
        },
        {
          question: 'Which method creates a new array with the results of calling a provided function on every element in the calling array?',
          options: ['map()', 'filter()', 'reduce()', 'forEach()'],
          correctAnswer: 0,
          explanation: 'The `map()` method is used for transforming an array. It creates a new array by applying a function to each element of the original array.',
        },
        {
          question: 'How can you find the index of a specific element in an array?',
          options: ['`findIndex()`', '`indexOf()`', '`search()`', '`find()`'],
          correctAnswer: 1,
          explanation: 'The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.',
        },
      ],
      'objects': [
        {
          question: 'How do you create an empty object in JavaScript?',
          options: ['`let person = [];`', '`let person = {};` or `let person = new Object();`', '`let person = <object>;`', '`let person = ();`'],
          correctAnswer: 1,
          explanation: 'An object can be created using an object literal `{}` or the `new Object()` constructor.',
        },
        {
          question: 'How do you access the `name` property of an object called `person`?',
          options: ['`person("name")`', '`person.name` or `person["name"]`', '`person->name`', '`get(person.name)`'],
          correctAnswer: 1,
          explanation: 'You can access object properties using dot notation (`person.name`) or bracket notation (`person["name"]`).',
        },
        {
          question: 'What is a "method" in a JavaScript object?',
          options: ['Any property of an object.', 'A property of an object that is a function.', 'A special type of array in an object.', 'A way to secure object properties.'],
          correctAnswer: 1,
          explanation: 'When a function is stored as a property of an object, it is called a method.',
        },
        {
          question: 'What is the `this` keyword inside an object method?',
          options: ['It refers to the global window object.', 'It refers to the object the method was called on.', 'It refers to the function itself.', 'It is not a valid keyword in an object.'],
          correctAnswer: 1,
          explanation: 'In an object method, `this` refers to the "owner" of the method, which is the object itself.',
        },
        {
          question: 'How do you add a new property `age` with value `30` to an existing `person` object?',
          options: ['`person.add("age", 30);`', '`person.age = 30;`', '`add property age=30 to person;`', '`person["age"](30);`'],
          correctAnswer: 1,
          explanation: 'You can add a new property to an existing object by simply assigning a value to a new property name.',
        },
        {
          question: 'How do you loop through the properties of an object?',
          options: ['`for (let prop of myObject)`', '`myObject.forEach(prop => ...)`', '`for (let prop in myObject)`', '`while (prop in myObject)`'],
          correctAnswer: 2,
          explanation: 'The `for...in` loop is specifically designed to iterate over the enumerable properties of an object.',
        },
        {
          question: 'What does `JSON.stringify()` do?',
          options: ['Converts a JavaScript object into a JSON string.', 'Parses a JSON string into a JavaScript object.', 'Checks if an object is valid JSON.', 'Creates a string from an object\'s methods.'],
          correctAnswer: 0,
          explanation: '`JSON.stringify()` is used to serialize a JavaScript object, converting it into a string so it can be sent to or stored on a server.',
        },
        {
          question: 'What is an object constructor?',
          options: ['A way to delete objects.', 'The first property of an object.', 'A function for creating and initializing objects of a certain type.', 'A special type of object.'],
          correctAnswer: 2,
          explanation: 'A constructor function is like a blueprint for creating multiple objects of the same type.',
        },
        {
          question: 'Bracket notation (`person["name"]`) is useful when...',
          options: ['The property name is a number.', 'The property name is stored in a variable or contains special characters.', 'You want to access a method.', 'Never, dot notation is always better.'],
          correctAnswer: 1,
          explanation: 'Bracket notation is required if the property name is dynamic (held in a variable) or if the property name is not a valid JavaScript identifier (e.g., "first-name").',
        },
        {
          question: 'What is an "object literal"?',
          options: ['A string that looks like an object.', 'A number that represents an object.', 'The syntax for creating an object using curly braces `{}`.', 'A comment describing an object.'],
          correctAnswer: 2,
          explanation: 'The object literal syntax (`{ key: value }`) is the most common and concise way to create objects in JavaScript.',
        },
      ],
      'dom-manipulation': [
        {
          question: 'What does "DOM" stand for?',
          options: ['Document Object Model', 'Data Object Model', 'Document Oriented Markup', 'Display Object Management'],
          correctAnswer: 0,
          explanation: 'The DOM (Document Object Model) is a tree-like representation of the HTML document that JavaScript can interact with.',
        },
        {
          question: 'Which method is used to find an HTML element by its ID?',
          options: ['`document.querySelector()`', '`document.getElementById()`', '`document.getElementsByClassName()`', '`document.getElement()`'],
          correctAnswer: 1,
          explanation: '`document.getElementById("myId")` is the most direct way to select a single element that has a unique ID.',
        },
        {
          question: 'Which method returns the *first* element that matches a specified CSS selector?',
          options: ['`querySelector()`', '`querySelectorAll()`', '`getElement()`', '`find()`'],
          correctAnswer: 0,
          explanation: '`document.querySelector()` returns the first element within the document that matches the specified selector, or group of selectors.',
        },
        {
          question: 'Which method returns a *collection* of all elements that match a specified CSS selector?',
          options: ['`querySelector()`', '`querySelectorAll()`', '`getElements()`', '`findAll()`'],
          correctAnswer: 1,
          explanation: '`document.querySelectorAll()` returns a static NodeList representing a list of the document\'s elements that match the specified group of selectors.',
        },
        {
          question: 'How do you change the text content of an HTML element?',
          options: ['`element.html = "New text";`', '`element.value = "New text";`', '`element.textContent = "New text";` or `element.innerHTML = "New text";`', '`element.changeText("New text");`'],
          correctAnswer: 2,
          explanation: '`textContent` changes only the text, while `innerHTML` can be used to set text and HTML tags inside the element.',
        },
        {
          question: 'How do you change the value of an element\'s `src` attribute (e.g., for an `<img>`)?',
          options: ['`element.attribute("src", "new.jpg");`', '`element.src = "new.jpg";`', '`element.setSrc("new.jpg");`', '`element.source = "new.jpg";`'],
          correctAnswer: 1,
          explanation: 'Many HTML attributes, like `src`, `href`, and `id`, are directly accessible as properties on the DOM element object.',
        },
        {
          question: 'How do you add a CSS class "highlight" to an element?',
          options: ['`element.class = "highlight";`', '`element.className += " highlight";`', '`element.classList.add("highlight");`', 'Both B and C are common ways.'],
          correctAnswer: 3,
          explanation: 'While manipulating `className` directly works, using the `classList` API (`add`, `remove`, `toggle`) is the modern and safer way to manage classes without accidentally overwriting existing ones.',
        },
        {
          question: 'How do you create a new HTML element (e.g., a `<p>`) with JavaScript?',
          options: ['`document.newElement("p");`', '`document.create("p");`', '`new HTMLParagraphElement();`', '`document.createElement("p");`'],
          correctAnswer: 3,
          explanation: '`document.createElement()` creates the HTML element specified by the tag name.',
        },
        {
          question: 'After creating a new element, which method do you use to add it to the DOM as a child of another element?',
          options: ['`parentElement.appendChild(newElement);`', '`parentElement.addChild(newElement);`', '`parentElement.insert(newElement);`', '`parentElement.innerHTML += newElement;`'],
          correctAnswer: 0,
          explanation: 'The `appendChild()` method adds a node (like a newly created element) to the end of the list of children of a specified parent node.',
        },
        {
          question: 'How do you remove an element from the DOM?',
          options: ['`element.delete();`', '`element.remove();`', '`document.removeElement(element);`', '`element.visibility = "hidden";`'],
          correctAnswer: 1,
          explanation: 'The `element.remove()` method removes the element from the tree it belongs to. It\'s a simple and direct way to delete a node.',
        },
      ],
      'events-and-event-listeners': [
        {
          question: 'What is an "event" in JavaScript?',
          options: ['A function that runs automatically.', 'A signal that something has happened, like a mouse click or a key press.', 'A syntax error.', 'A special type of variable.'],
          correctAnswer: 1,
          explanation: 'Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.',
        },
        {
          question: 'Which method is used to attach an event handler to an element?',
          options: ['`attachEvent()`', '`onEvent()`', '`addEventListener()`', '`listen()`'],
          correctAnswer: 2,
          explanation: '`element.addEventListener()` is the modern and recommended way to register an event handler.',
        },
        {
          question: 'What is the first argument of the `addEventListener()` method?',
          options: ['The function to execute.', 'A boolean value.', 'The name of the event (e.g., "click").', 'The CSS selector of the element.'],
          correctAnswer: 2,
          explanation: 'The first argument is a string representing the event type to listen for, such as "click", "mouseover", or "keydown".',
        },
        {
          question: 'What is the second argument of the `addEventListener()` method?',
          options: ['The name of the event.', 'A CSS selector.', 'A boolean value.', 'The function to be called when the event occurs (the "callback" or "event handler").'],
          correctAnswer: 3,
          explanation: 'The second argument is the function that will be executed whenever the specified event is delivered to the target.',
        },
        {
          question: 'Which event occurs when the user clicks on an HTML element?',
          options: ['`onmouseclick`', '`click`', '`onchange`', '`onmouseover`'],
          correctAnswer: 1,
          explanation: 'The `click` event is fired when a user clicks a pointing device button on an element.',
        },
        {
          question: 'Which event occurs when a user presses a key on the keyboard?',
          options: ['`onkeypress`', '`keyup`', '`keydown`', 'Both `keyup` and `keydown` are keyboard events.'],
          correctAnswer: 3,
          explanation: '`keydown` fires when the key is pressed down, and `keyup` fires when the key is released. Both are common keyboard events.',
        },
        {
          question: 'What is "event bubbling"?',
          options: ['A visual effect where bubbles appear on click.', 'The process where an event travels from the target element up through its ancestors in the DOM tree.', 'An error that stops all event listeners.', 'The process where events are handled in a random order.'],
          correctAnswer: 1,
          explanation: 'Event bubbling is the default behavior where an event triggered on a child element will also trigger the same event on its parent elements, all the way up to the document root.',
        },
        {
          question: 'How can you prevent event bubbling?',
          options: ['`event.preventDefault();`', '`event.stopPropagation();`', '`return false;` from the event handler.', 'Both B and C can work.'],
          correctAnswer: 3,
          explanation: '`event.stopPropagation()` is the standard method to stop the event from bubbling up. In many cases, `return false;` from a handler can also prevent bubbling (and default action).',
        },
        {
          question: 'What does `event.preventDefault()` do?',
          options: ['It stops the event from bubbling up the DOM.', 'It prevents the browser\'s default action for that event.', 'It removes the event listener.', 'It triggers the event manually.'],
          correctAnswer: 1,
          explanation: '`preventDefault()` is used to stop the browser\'s default behavior, such as preventing a form from submitting when the submit button is clicked, or preventing a link from navigating to a new page.',
        },
        {
          question: 'The event object, often named `e` or `event` in a handler function, contains what?',
          options: ['Only the name of the event.', 'Information about the event, such as the target element, mouse coordinates, or key pressed.', 'A function to stop the event.', 'The HTML of the target element.'],
          correctAnswer: 1,
          explanation: 'The event object is automatically passed to the event handler function and contains useful properties and methods related to the event that just occurred.',
        },
      ],
      'strings-and-number-methods': [
        {
          question: 'Which property returns the number of characters in a string?',
          options: ['`size`', '`count`', '`length`', '`characters`'],
          correctAnswer: 2,
          explanation: 'The `length` property of a string returns the number of characters it contains.',
        },
        {
          question: 'Which method converts a string to all uppercase letters?',
          options: ['`toUpperCase()`', '`upper()`', '`toUpper()`', '`toUpperCaseAll()`'],
          correctAnswer: 0,
          explanation: 'The `toUpperCase()` method returns the calling string value converted to uppercase.',
        },
        {
          question: 'Which method returns the character at a specified index in a string?',
          options: ['`getChar()`', '`charAt()`', '`characterAt()`', '`indexOf()`'],
          correctAnswer: 1,
          explanation: 'The `charAt()` method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.',
        },
        {
          question: 'Which method combines the text of two or more strings and returns a new string?',
          options: ['`append()`', '`join()`', '`concat()`', 'The `+` operator is also used'],
          correctAnswer: 3,
          explanation: 'Both the `concat()` method and the `+` operator can be used to concatenate strings.',
        },
        {
          question: 'Which method extracts a part of a string and returns the extracted part in a new string?',
          options: ['`slice()`', '`substring()`', '`substr()`', 'All of the above'],
          correctAnswer: 3,
          explanation: 'All three methods (`slice`, `substring`, and the legacy `substr`) can be used to extract a portion of a string, though they have slightly different behaviors with their arguments.',
        },
        {
          question: 'Which method converts a number to a string, rounded to a specified number of decimals?',
          options: ['`toFixed()`', '`toPrecision()`', '`round()`', '`format()`'],
          correctAnswer: 0,
          explanation: 'The `toFixed()` method formats a number using fixed-point notation and returns a string representation.',
        },
        {
          question: 'What does the `parseInt()` function do?',
          options: ['It checks if a value is an integer.', 'It parses a string argument and returns an integer.', 'It converts a number to a string.', 'It returns the integer part of a number.'],
          correctAnswer: 1,
          explanation: '`parseInt()` parses a string and returns the first integer it finds. For example, `parseInt("10.5em")` returns `10`.',
        },
        {
          question: 'What does the `isNaN()` function do?',
          options: ['Checks if a value is a number.', 'Checks if a value is *Not-a-Number*.', 'Converts a value to a number.', 'Returns a random number.'],
          correctAnswer: 1,
          explanation: '`isNaN()` determines whether a value is `NaN` (Not-a-Number). It\'s useful for checking if a mathematical operation resulted in a valid number.',
        },
        {
          question: 'Which string method can be used to find the position of the first occurrence of a specified text in a string?',
          options: ['`position()`', '`find()`', '`search()`', '`indexOf()`'],
          correctAnswer: 3,
          explanation: 'Both `indexOf()` and `search()` can find the position of a substring, but `search()` can also take a regular expression as an argument.',
        },
        {
          question: 'How do you convert a numeric string like `"3.14"` into a number?',
          options: ['`Number("3.14")`', '`parseFloat("3.14")`', '`+"3.14"` (Unary plus operator)', 'All of the above'],
          correctAnswer: 3,
          explanation: 'All three are valid and common ways to convert a string containing a number into an actual numeric type.',
        },
      ],
      'timing-events': [
        {
          question: 'Which function is used to execute a function *once* after a specified delay?',
          options: ['`setInterval()`', '`setTimeout()`', '`delay()`', '`wait()`'],
          correctAnswer: 1,
          explanation: '`setTimeout()` executes a function or specified piece of code once the timer expires.',
        },
        {
          question: 'Which function is used to execute a function *repeatedly* at specified intervals?',
          options: ['`setInterval()`', '`setTimeout()`', '`repeat()`', '`loop()`'],
          correctAnswer: 0,
          explanation: '`setInterval()` repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.',
        },
        {
          question: 'What unit of time is used for the delay argument in `setTimeout()` and `setInterval()`?',
          options: ['Seconds', 'Microseconds', 'Milliseconds', 'Minutes'],
          correctAnswer: 2,
          explanation: 'The time is specified in milliseconds. So, a delay of 2 seconds would be written as 2000.',
        },
        {
          question: 'How do you stop a `setTimeout()` timer before it executes?',
          options: ['You cannot stop it.', '`stopTimeout(timerID)`', '`clearTimeout(timerID)`', '`deleteTimeout(timerID)`'],
          correctAnswer: 2,
          explanation: 'The `setTimeout()` function returns a timer ID. You can pass this ID to `clearTimeout()` to cancel the execution.',
        },
        {
          question: 'How do you stop a `setInterval()` timer from continuing to execute?',
          options: ['`stopInterval(timerID)`', '`deleteInterval(timerID)`', '`clearInterval(timerID)`', 'It stops automatically after one run.'],
          correctAnswer: 2,
          explanation: 'Just like `setTimeout`, `setInterval` returns a timer ID which you can pass to `clearInterval()` to stop the repeated executions.',
        },
        {
          question: 'What will the following code do? `setTimeout(() => console.log("Hi"), 0); console.log("Bye");`',
          options: ['It will print "Hi", then "Bye".', 'It will print "Bye", then "Hi".', 'It will only print "Hi".', 'It will cause an error.'],
          correctAnswer: 1,
          explanation: 'This demonstrates the asynchronous nature of timers. Even with a 0ms delay, `setTimeout` places the function in the event queue to be run after the current code block finishes. So, "Bye" is logged first, then the event loop picks up the "Hi" task.',
        },
        {
          question: 'What is a common use case for `setTimeout()`?',
          options: ['Creating a game loop.', 'Displaying a popup after a user has been on a page for a few seconds.', 'Checking for new messages every 5 seconds.', 'Validating a form field as the user types.'],
          correctAnswer: 1,
          explanation: '`setTimeout` is perfect for single, delayed actions.',
        },
        {
          question: 'What is a common use case for `setInterval()`?',
          options: ['Running an animation.', 'Creating a countdown timer or a clock.', 'Fetching data from a server at regular intervals.', 'All of the above.'],
          correctAnswer: 3,
          explanation: '`setInterval` is ideal for any task that needs to be repeated continuously at a regular interval.',
        },
        {
          question: 'What is a potential problem with `setInterval()` for complex animations?',
          options: ['It is not accurate.', 'If the function takes longer to execute than the interval time, it can lead to a backlog of executions and performance issues.', 'It stops working if the user switches tabs.', 'It only works with numbers.'],
          correctAnswer: 1,
          explanation: 'If an animation frame takes 20ms to render, but the interval is set to 16ms, the calls will stack up. For animations, `requestAnimationFrame()` is often a better, more optimized choice.',
        },
        {
          question: 'Which modern browser API is generally preferred over `setInterval()` for running animations?',
          options: ['`requestAnimationFrame()`', '`setTimeout()`', '`animate()`', '`runAnimation()`'],
          correctAnswer: 0,
          explanation: '`requestAnimationFrame()` tells the browser you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. It is more efficient and optimized for smooth animations.',
        },
      ],
      'local-storage-and-session-storage': [
        {
          question: 'What is the main difference between `localStorage` and `sessionStorage`?',
          options: ['`localStorage` is faster.', '`localStorage` stores data with no expiration date, while `sessionStorage` data is cleared when the page session ends.', '`localStorage` can store more data.', '`localStorage` is secure, `sessionStorage` is not.'],
          correctAnswer: 1,
          explanation: '`sessionStorage` data is cleared when the browser tab is closed. `localStorage` data persists even after the browser is closed and reopened.',
        },
        {
          question: 'How do you save an item to `localStorage`?',
          options: ['`localStorage.save("key", "value");`', '`localStorage.setItem("key", "value");`', '`localStorage.add("key", "value");`', '`localStorage["key"] = "value";`'],
          correctAnswer: 3,
          explanation: 'Both `localStorage.setItem("key", "value")` and `localStorage.key = "value"` (or `localStorage["key"] = "value"`) are valid ways to save data.',
        },
        {
          question: 'How do you retrieve an item from `localStorage`?',
          options: ['`localStorage.getItem("key");`', '`localStorage.get("key");`', '`localStorage.retrieve("key");`', '`localStorage.read("key");`'],
          correctAnswer: 0,
          explanation: 'The `localStorage.getItem("key")` method is used to retrieve the value associated with the given key.',
        },
        {
          question: 'What data type is stored in Web Storage (localStorage/sessionStorage)?',
          options: ['Only numbers', 'Any JavaScript data type', 'Only strings', 'Objects and Arrays'],
          correctAnswer: 2,
          explanation: 'The Web Storage API stores data as strings. If you want to store an object or array, you must first convert it to a string using `JSON.stringify()` and then parse it back with `JSON.parse()` upon retrieval.',
        },
        {
          question: 'How do you remove a specific item from `localStorage`?',
          options: ['`localStorage.removeItem("key");`', '`localStorage.delete("key");`', '`localStorage.clear("key");`', '`localStorage.remove("key");`'],
          correctAnswer: 0,
          explanation: '`localStorage.removeItem("key")` removes the key and its associated value from the storage.',
        },
        {
          question: 'How do you clear all items from `localStorage`?',
          options: ['`localStorage.deleteAll();`', '`localStorage.empty();`', '`localStorage.reset();`', '`localStorage.clear();`'],
          correctAnswer: 3,
          explanation: 'The `clear()` method, when invoked, will empty all keys out of the storage.',
        },
        {
          question: 'Is `localStorage` data shared between different browsers on the same computer?',
          options: ['Yes, it is shared by all browsers.', 'No, storage is sandboxed to the specific browser and origin.', 'Only between Chrome and Firefox.', 'Yes, if the user is logged into the same account.'],
          correctAnswer: 1,
          explanation: 'Web Storage is sandboxed per origin (protocol, domain, port) and per browser. Data stored by `example.com` in Chrome is not accessible to `example.com` in Firefox, nor to `google.com` in Chrome.',
        },
        {
          question: 'What happens if you try to get an item from `localStorage` that does not exist?',
          options: ['It throws an error.', 'It returns `undefined`.', 'It returns `null`.', 'It returns an empty string `""`.'],
          correctAnswer: 2,
          explanation: 'If the key does not exist in the storage, `getItem()` will return `null`.',
        },
        {
          question: 'What is a common use case for `sessionStorage`?',
          options: ['Storing user preferences that should last forever.', 'Storing temporary data for a multi-page form, which can be discarded when the user closes the tab.', 'Storing a user\'s login token for "remember me" functionality.', 'Storing data that needs to be shared between multiple tabs.'],
          correctAnswer: 1,
          explanation: '`sessionStorage` is ideal for data that is only relevant for a single user session, such as data being passed between pages in a specific workflow.',
        },
        {
          question: 'What is the approximate storage limit for `localStorage`?',
          options: ['10 KB', '500 KB', '5 MB', 'There is no limit.'],
          correctAnswer: 2,
          explanation: 'While it can vary by browser, the generally accepted limit for `localStorage` is around 5MB per origin.',
        },
      ],
      'json': [
        {
          question: 'What does JSON stand for?',
          options: ['JavaScript Object Notation', 'JavaScript Online Network', 'Java Standard Object Network', 'JavaScript Scripting Object Notation'],
          correctAnswer: 0,
          explanation: 'JSON stands for JavaScript Object Notation. It\'s a lightweight format for storing and transporting data.',
        },
        {
          question: 'Which function is used to convert a JSON string into a JavaScript object?',
          options: ['`JSON.parse()`', '`JSON.stringify()`', '`JSON.toObject()`', '`JSON.convert()`'],
          correctAnswer: 0,
          explanation: '`JSON.parse()` takes a JSON string as input and transforms it into a JavaScript object.',
        },
        {
          question: 'Which function is used to convert a JavaScript object into a JSON string?',
          options: ['`JSON.parse()`', '`JSON.stringify()`', '`JSON.toString()`', '`JSON.create()`'],
          correctAnswer: 1,
          explanation: '`JSON.stringify()` takes a JavaScript object and transforms it into a JSON string, often for sending to a web server.',
        },
        {
          question: 'What is the correct syntax for a key in JSON?',
          options: ['Keys must be strings enclosed in double quotes.', 'Keys can be strings, numbers, or booleans.', 'Keys do not need quotes.', 'Keys must be enclosed in single quotes.'],
          correctAnswer: 0,
          explanation: 'In JSON format, the keys of an object must always be strings enclosed in double quotes.',
        },
        {
          question: 'Which of the following is NOT a valid data type in JSON?',
          options: ['string', 'number', 'array', 'function'],
          correctAnswer: 3,
          explanation: 'JSON can contain strings, numbers, booleans, arrays, and objects. It cannot contain more complex JavaScript types like functions, dates, or undefined.',
        },
        {
          question: 'What is the file extension for a JSON file?',
          options: ['.js', '.txt', '.json', '.data'],
          correctAnswer: 2,
          explanation: 'Files containing JSON data are typically saved with the `.json` extension.',
        },
        {
          question: 'Is a trailing comma allowed in a JSON object or array? (e.g., `{"key": "value",}`)',
          options: ['Yes, it is allowed.', 'No, it will cause a parsing error.', 'Only in arrays.', 'Only in objects.'],
          correctAnswer: 1,
          explanation: 'Trailing commas are not allowed in the JSON standard and will cause an error when parsing.',
        },
        {
          question: 'What is JSONP?',
          options: ['A more secure version of JSON.', 'A method for sending JSON data across different domains, bypassing the same-origin policy.', 'A data compression format for JSON.', 'A new version of JSON.'],
          correctAnswer: 1,
          explanation: 'JSONP (JSON with Padding) is a historical technique used to overcome the same-origin policy by wrapping the JSON data in a function call. It has largely been replaced by CORS.',
        },
        {
          question: 'What character is used to define a JSON object?',
          options: ['`[]` (Square Brackets)', '`()` (Parentheses)', '`{}` (Curly Braces)', '`<>` (Angle Brackets)'],
          correctAnswer: 2,
          explanation: 'JSON objects are enclosed in curly braces `{}`, just like JavaScript object literals.',
        },
        {
          question: 'What is a common use for JSON?',
          options: ['Styling web pages.', 'Defining the structure of a web page.', 'Transmitting data between a server and a web application (e.g., in an API).', 'Executing client-side scripts.'],
          correctAnswer: 2,
          explanation: 'JSON is the most common format for data exchanged in modern web APIs because it is lightweight, human-readable, and easy for machines to parse and generate.',
        },
      ],
      'es6-features': [
        {
          question: 'Which keyword, introduced in ES6, is used to declare a block-scoped variable that cannot be reassigned?',
          options: ['let', 'var', 'const', 'static'],
          correctAnswer: 2,
          explanation: '`const` declares a block-scoped variable, but its value cannot be reassigned after initialization.',
        },
        {
          question: 'What is the syntax for an arrow function?',
          options: ['`function() => {}`', '`=> function() {}`', '`() => {}`', '`function => {}`'],
          correctAnswer: 2,
          explanation: 'Arrow functions provide a more concise syntax for writing functions. For example, `(a, b) => a + b;` is a short way to write a function that adds two numbers.',
        },
        {
          question: 'What is a key difference in how arrow functions handle the `this` keyword compared to traditional functions?',
          options: ['There is no difference.', 'Arrow functions do not have their own `this`; they inherit it from the parent scope.', '`this` always refers to the global object in arrow functions.', 'Arrow functions require you to explicitly bind `this`.'],
          correctAnswer: 1,
          explanation: 'Arrow functions have a lexical `this`, meaning `this` retains the value of the enclosing context, which avoids many common bugs found with traditional functions.',
        },
        {
          question: 'Which feature allows you to embed expressions inside string literals?',
          options: ['String Interpolation', 'Template Literals (Template Strings)', 'String Concatenation', 'Formatted Strings'],
          correctAnswer: 1,
          explanation: 'Template literals, enclosed in backticks (`` ` ``), allow for embedded expressions using the `${expression}` syntax.',
        },
        {
          question: 'What does "destructuring assignment" allow you to do?',
          options: ['Destroy an object or array.', 'Unpack values from arrays, or properties from objects, into distinct variables.', 'A way to restructure a database.', 'A new type of `for` loop.'],
          correctAnswer: 1,
          explanation: 'Destructuring provides a concise way to extract data. For example, `const { name, age } = person;` creates `name` and `age` variables from the properties of the `person` object.',
        },
        {
          question: 'What do the "rest parameter" (`...args`) and "spread syntax" (`...arr`) do?',
          options: ['They are the same thing.', 'Rest gathers multiple elements into an array; Spread expands an array into individual elements.', 'Rest is for objects, Spread is for arrays.', 'They are used to create comments.'],
          correctAnswer: 1,
          explanation: 'The rest parameter (`function(...args)`) collects all remaining arguments into an array. The spread syntax (`[...arr1, ...arr2]`) expands an iterable into its individual elements.',
        },
        {
          question: 'What is a `Promise` in ES6?',
          options: ['A guarantee that a function will not have errors.', 'An object representing the eventual completion (or failure) of an asynchronous operation.', 'A new data type for storing strings.', 'A way to schedule code execution.'],
          correctAnswer: 1,
          explanation: 'Promises are a core feature for handling asynchronous operations, providing a cleaner alternative to callback functions for things like fetching data.',
        },
        {
          question: 'What is the purpose of the `class` keyword in ES6?',
          options: ['To add a CSS class to an element.', 'To provide a clearer and more familiar syntax for creating constructor functions and prototypes.', 'To classify variables by type.', 'To create a new file.'],
          correctAnswer: 1,
          explanation: 'ES6 classes are "syntactic sugar" over JavaScript\'s existing prototype-based inheritance. They provide a much simpler and cleaner syntax for creating objects and dealing with inheritance.',
        },
        {
          question: 'How do you define default values for function parameters in ES6?',
          options: ['`function myFunc(a, b) { if(!a) a=1; }`', '`function myFunc(a=1, b=2) { ... }`', '`function myFunc(a || 1, b || 2) { ... }`', 'This is not possible.'],
          correctAnswer: 1,
          explanation: 'ES6 introduced default function parameters, allowing you to initialize named parameters with default values if no value or `undefined` is passed.',
        },
        {
          question: 'What do `import` and `export` allow you to do?',
          options: ['Import external CSS files.', 'Create a modular codebase by allowing you to split your code into separate files (modules).', 'Import and export data from a database.', 'Load images into your script.'],
          correctAnswer: 1,
          explanation: 'ES6 Modules provide a standardized way to organize your code. You can `export` functions, objects, or primitives from one module and `import` them for use in other modules.',
        },
      ],
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
  { rank: 1, username: 'lexie', score: 980, time: '12:30' },
  { rank: 2, username: 'ryan', score: 950, time: '11:45' },
  { rank: 3, username: 'cameron', score: 920, time: '13:10' },
  { rank: 4, username: 'jordan', score: 890, time: '10:55' },
  { rank: 5, username: 'alex', score: 850, time: '14:02' },
  { rank: 6, username: 'casey', score: 820, time: '12:50' },
  { rank: 7, username: 'morgan', score: 790, time: '15:20' },
  { rank: 8, username: 'taylor', score: 760, time: '13:45' },
  { rank: 9, username: 'jamie', score: 730, time: '16:00' },
  { rank: 10, username: 'skyler', score: 700, time: '14:55' },
];
