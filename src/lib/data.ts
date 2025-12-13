
import { CodeXml, Paintbrush } from 'lucide-react';
import type { ComponentType } from 'react';
import { JsIcon } from '@/components/JsIcon';

// --- CONTENT DATA ---

interface Topic {
  slug: string;
  title: string;
  description: string;
  content: string;
  learningObjectives?: string[];
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
      // --- Basic Level ---
      {
        slug: 'introduction-to-html',
        title: 'HTML Introduction',
        description: 'Explore what HTML is and its role in web pages.',
        content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements, which tell the browser how to display the content. At its core, HTML is about defining the meaning and structure of your content, a concept known as semantics. For instance, is this text a heading, a paragraph, a list, or something else? HTML provides the tags to make these distinctions clear.',
        learningObjectives: [
            "Define what HTML is and its role as the backbone of a webpage.",
            "Identify the basic structure of an HTML document, including `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`.",
            "Recognize common HTML tags like `<h1>`, `<p>`, and `<a>`."
        ],
        codeSnippet: { language: 'html', code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>' },
        output: 'The browser renders a heading and a paragraph.',
      },
      {
        slug: 'html-editors',
        title: 'HTML Editors',
        description: 'Discover the tools you can use to write HTML code.',
        content: 'You can write HTML using a simple text editor like Notepad or TextEdit, but professional code editors like VS Code, Sublime Text, or Atom offer powerful features like syntax highlighting, code completion, and integrated terminals, which can dramatically improve your productivity. These tools understand the structure of your code and provide helpful suggestions and error checking.',
        codeSnippet: { language: 'bash', code: '# In VS Code, you can type "!" and press Tab to generate a basic HTML5 boilerplate.\n# This is an example of a productivity feature in modern editors.' },
        output: 'Choosing a good editor can significantly speed up your development process.',
      },
      {
        slug: 'html-basic',
        title: 'HTML Basic Examples',
        description: 'See the basic structure of an HTML document.',
        content: 'All HTML documents must start with a document type declaration: `<!DOCTYPE html>`. The HTML document itself begins with `<html>` and ends with `</html>`. The visible part of the HTML document is between `<body>` and `</body>`, while metadata like the title and character set goes in the `<head>` section.',
        codeSnippet: { language: 'html', code: '<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://www.example.com">This is a link.</a>' },
        output: 'Renders a heading, a paragraph, and a hyperlink.',
      },
      {
        slug: 'html-elements',
        title: 'HTML Elements',
        description: 'Understand the building blocks of an HTML page.',
        content: 'An HTML element is defined by a start tag, some content, and an end tag. For example, `<p>My paragraph.</p>`. Some HTML elements have no content (like the `<br>` or `<img>` elements). These are called empty or void elements and do not need a closing tag.',
        codeSnippet: { language: 'html', code: '<p>This is an element.</p>\n<br> <!-- This is an empty element -->\n<img src="photo.jpg" alt="A photo."> <!-- Another empty element -->' },
        output: 'An element consists of tags and content, but some are self-closing.',
      },
      {
        slug: 'html-attributes',
        title: 'HTML Attributes',
        description: 'Explore how to provide additional information to elements.',
        content: 'Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like `name="value"`. The `href` attribute of a link and the `src` attribute of an image are common examples.',
        codeSnippet: { language: 'html', code: '<a href="https://example.com">Visit our site</a>\n<img src="image.jpg" alt="An image" width="500" height="600">' },
        output: 'The `href` attribute specifies the link\'s destination, and `src`, `alt`, `width`, and `height` provide details about the image.',
      },
      {
        slug: 'html-headings',
        title: 'HTML Headings',
        description: 'Use headings to structure your content hierarchically.',
        content: 'Headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading. Search engines and accessibility tools use headings to understand the structure of your page. You should only have one `<h1>` per page for the main title.',
        codeSnippet: { language: 'html', code: '<h1>Page Title</h1>\n<h2>Section Title</h2>\n<h3>Sub-section Title</h3>' },
        output: 'Renders headings of decreasing importance and size, creating a document outline.',
      },
      {
        slug: 'html-paragraphs',
        title: 'HTML Paragraphs',
        description: 'Explore how to define blocks of text.',
        content: 'The HTML `<p>` element defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph to separate them visually.',
        codeSnippet: { language: 'html', code: '<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>' },
        output: 'Renders two separate blocks of text.',
      },
      {
        slug: 'html-styles',
        title: 'HTML Styles',
        description: 'Apply basic inline styling to elements.',
        content: 'The `style` attribute can be used to apply inline CSS to an element, to change its color, font, size, and more. For example, `style="color:blue;"`. While useful for quick tests, it is generally better practice to use external stylesheets for maintainability.',
        codeSnippet: { language: 'html', code: '<p style="color:red; font-size:20px;">This is a styled paragraph.</p>' },
        output: 'Renders a paragraph with red text at a 20px font size.',
      },
      {
        slug: 'html-text-formatting',
        title: 'HTML Text Formatting',
        description: 'Use tags to format text, like bold or italic.',
        content: 'HTML contains several elements for defining text with a special meaning. `<strong>` and `<b>` both create bold text, but `<strong>` implies strong importance. Similarly, `<em>` and `<i>` create italic text, but `<em>` implies emphasis.',
        codeSnippet: { language: 'html', code: '<strong>Important text</strong>\n<em>Emphasized text</em>\n<code>A piece of code</code>\n<mark>Highlighted text</mark>' },
        output: 'Demonstrates various ways to format text for visual and semantic purposes.',
      },
      {
        slug: 'html-comments',
        title: 'HTML Comments',
        description: 'Explore how to add comments to your code.',
        content: 'HTML comments are not displayed in the browser, but they can help document your HTML source code. Comments are written as `<!-- This is a comment -->` and can be used to leave notes for yourself or other developers.',
        codeSnippet: { language: 'html', code: '<!-- This comment will not be displayed -->\n<p>This paragraph will be displayed.</p>' },
        output: 'Only the paragraph is visible on the page.',
      },
      // --- Intermediate Level ---
      {
        slug: 'html-links',
        title: 'HTML Links',
        description: 'Explore how to create hyperlinks to connect pages.',
        content: 'Links are created using the `<a>` (anchor) tag. The `href` attribute is essential as it specifies the destination URL. You can link to other pages, files, locations on the same page, or create email links.',
        codeSnippet: { language: 'html', code: '<a href="/about">About Us</a>\n<a href="#section2">Go to Section 2</a>\n<a href="mailto:info@example.com">Email Us</a>' },
        output: 'Creates links to another page, an internal section, and an email address.',
      },
      {
        slug: 'html-images',
        title: 'HTML Images',
        description: 'Embed images into your web page.',
        content: 'Use the `<img>` tag to embed images. The `src` attribute points to the image file, and the `alt` attribute provides descriptive text for accessibility and for when the image cannot be displayed. The `alt` attribute is required for valid HTML.',
        codeSnippet: { language: 'html', code: '<img src="logo.png" alt="Company Logo" width="100" height="50">' },
        output: 'Displays the "logo.png" image and provides "Company Logo" as the alternative text.',
      },
      {
        slug: 'html-tables',
        title: 'HTML Tables',
        description: 'Explore how to display data in rows and columns.',
        content: 'HTML tables allow you to arrange data into rows and columns. Use `<table>` to define the table, `<tr>` for rows, `<th>` for headers, and `<td>` for data cells. Use `<thead>`, `<tbody>`, and `<tfoot>` for semantic structure.',
        codeSnippet: { language: 'html', code: '<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>30</td></tr>\n  </tbody>\n</table>' },
        output: 'Renders a simple table with a header section and a body section.',
      },
      {
        slug: 'html-lists',
        title: 'HTML Lists',
        description: 'Organize items with ordered, unordered, and description lists.',
        content: 'Unordered lists (`<ul>`) are for items where order doesn\'t matter. Ordered lists (`<ol>`) are for items where order is important. Description lists (`<dl>`) are for name-value pairs, using `<dt>` for the term and `<dd>` for the description.',
        codeSnippet: { language: 'html', code: '<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>' },
        output: 'Renders a bulleted list and a numbered list.',
      },
      {
        slug: 'html-block-and-inline',
        title: 'HTML Block & Inline Elements',
        description: 'Understand the difference between block and inline elements.',
        content: 'Block-level elements (like `<p>`, `<div>`, `<h1>`) always start on a new line and take up the full width available. Inline elements (like `<a>`, `<span>`, `<img>`) do not start on a new line and only take up as much width as necessary.',
        codeSnippet: { language: 'html', code: '<div style="background: lightblue;">A block-level div.</div>\n<span style="background: lightpink;">An inline span.</span> <span>Another.</span>' },
        output: 'The div takes its own line, while the two spans appear on the same line.',
      },
      {
        slug: 'html-classes-and-id',
        title: 'HTML Classes and ID',
        description: 'Use attributes to target elements for styling and scripting.',
        content: 'The `class` attribute specifies one or more class names, used to style multiple elements similarly. The `id` attribute specifies a unique id for an element, which must be unique within the document. IDs are often used for JavaScript manipulation and internal page links.',
        codeSnippet: { language: 'html', code: '<p class="important-text">This is important.</p>\n<h1 id="main-title">My Website</h1>' },
        output: 'Provides hooks for CSS and JavaScript to target specific elements.',
      },
      {
        slug: 'html-iframes',
        title: 'HTML Iframes',
        description: 'Embed another HTML document within the current one.',
        content: 'An iframe (Inline Frame) is used to embed another document within the current HTML document. This is often used for embedding maps, videos, or content from other websites. Security attributes like `sandbox` are important to restrict the iframe\'s permissions.',
        codeSnippet: { language: 'html', code: '<iframe src="https://www.example.com" width="600" height="400" sandbox></iframe>' },
        output: 'Embeds another website into your page within a sandboxed frame.',
      },
      {
        slug: 'html-forms',
        title: 'HTML Forms',
        description: 'Explore how to create forms to collect user input.',
        content: 'Forms (`<form>`) are essential for collecting user data. They contain various input elements like text fields (`<input type="text">`), checkboxes, radio buttons, and submit buttons. The `action` attribute defines where the data is sent, and `method` defines how (GET or POST).',
        codeSnippet: { language: 'html', code: '<form action="/submit_form" method="post">\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username">\n  <button type="submit">Submit</button>\n</form>' },
        output: 'Renders a text input field labeled "Username" and a submit button inside a form.',
      },
      {
        slug: 'html-form-elements',
        title: 'HTML Form Elements',
        description: 'Explore the different types of input controls for forms.',
        content: 'HTML offers a variety of form elements, including `<input>`, `<label>`, `<select>` (dropdown), `<textarea>`, `<button>`, `<fieldset>`, and `<legend>`, to create rich user interfaces for data collection.',
        codeSnippet: { language: 'html', code: '<label for="cars">Choose a car:</label>\n<select id="cars" name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>' },
        output: 'Creates a dropdown menu with two car options.',
      },
      {
        slug: 'html-head',
        title: 'HTML Head',
        description: 'Understand the purpose of the <head> element.',
        content: 'The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag. It is not displayed. It typically defines the document title, character set, styles, scripts, and other meta information like the viewport for responsive design.',
        codeSnippet: { language: 'html', code: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Page</title>\n  <link rel="stylesheet" href="styles.css">\n</head>' },
        output: 'This head section sets character encoding, responsive viewport, page title, and links a CSS file.',
      },
      // --- Advanced Level ---
      {
        slug: 'html-layout-elements',
        title: 'HTML Layout Elements',
        description: 'Use semantic elements for structuring a web page.',
        content: 'HTML5 introduced semantic elements like `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, and `<aside>` to define different parts of a web page. Using these elements improves accessibility, SEO, and code readability over using generic `<div>` tags for everything.',
        codeSnippet: { language: 'html', code: '<header>Site Header</header>\n<nav>Navigation</nav>\n<main>\n  <article>Article 1</article>\n</main>\n<footer>Site Footer</footer>' },
        output: 'Defines the primary semantic sections of a webpage.',
      },
      {
        slug: 'html-responsive',
        title: 'HTML Responsive Design',
        description: 'Make your web pages look good on all devices.',
        content: 'Responsive web design is about creating web pages that adapt to all devices (desktops, tablets, phones). The foundation in HTML is the viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. The rest is handled with flexible layouts in CSS, typically using media queries.',
        codeSnippet: { language: 'html', code: '<!-- This tag is essential for responsive design -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
        output: 'This meta tag tells the browser how to control the page\'s dimensions and scaling on mobile devices.',
      },
      {
        slug: 'html-semantic-elements',
        title: 'HTML5 Semantic Elements',
        description: 'Use tags that clearly describe their meaning.',
        content: 'Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Examples include `<article>`, `<figure>`, `<figcaption>`, `<main>`, `<details>`, `<summary>`, and `<time>`. This improves accessibility and SEO by providing more context than a generic `<div>`.',
        codeSnippet: { language: 'html', code: '<figure>\n  <img src="pic.jpg" alt="A picture">\n  <figcaption>Fig.1 - A Picture.</figcaption>\n</figure>' },
        output: 'Structurally associates an image with its caption.',
      },
      {
        slug: 'html-multimedia',
        title: 'HTML Multimedia',
        description: 'Embed audio and video content natively.',
        content: 'HTML5 introduced the `<audio>` and `<video>` elements, allowing for native embedding of multimedia without needing plugins like Flash. The `controls` attribute provides play, pause, and volume controls. You can provide multiple `<source>` elements for better browser compatibility.',
        codeSnippet: { language: 'html', code: '<video width="320" controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.webm" type="video/webm">\n  Your browser does not support the video tag.\n</video>' },
        output: 'Embeds a video player with controls, offering two different formats.',
      },
      {
        slug: 'html-apis',
        title: 'HTML APIs',
        description: 'Explore browser APIs like Geolocation and Web Storage.',
        content: 'Modern HTML and browsers expose numerous APIs (Application Programming Interfaces) to JavaScript, enabling powerful features. Key APIs include Geolocation for location services, Drag/Drop for user interactions, and Web Storage (`localStorage` and `sessionStorage`) for client-side data persistence.',
        codeSnippet: { language: 'javascript', code: '// Geolocation API Example\nif (navigator.geolocation) {\n  navigator.geolocation.getCurrentPosition(showPosition);\n}' },
        output: 'This JavaScript code accesses the browser\'s Geolocation API to find the user\'s location.',
      },
      {
        slug: 'html-graphics',
        title: 'HTML Graphics (Canvas & SVG)',
        description: 'Explore to create graphics on the web.',
        content: 'Canvas (`<canvas>`) is used to draw graphics via JavaScript, ideal for dynamic animations, games, and data visualizations. SVG (`<svg>`) is an XML-based language for describing 2D vector graphics, perfect for logos and icons that need to scale perfectly without losing quality.',
        codeSnippet: { language: 'html', code: '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="yellow" />\n</svg>' },
        output: 'Renders a yellow circle using Scalable Vector Graphics (SVG).',
      },
      {
        slug: 'html-web-storage',
        title: 'HTML Web Storage',
        description: 'Store data locally within the user\'s browser.',
        content: 'Web storage allows websites to store data in the user\'s browser securely. `localStorage` stores data with no expiration date, while `sessionStorage` stores data for one session (data is lost when the browser tab is closed). It is a more modern and larger-capacity alternative to cookies.',
        codeSnippet: { language: 'javascript', code: 'localStorage.setItem("username", "JohnDoe");\nlet user = localStorage.getItem("username");\n// user is now "JohnDoe"' },
        output: 'This stores a username in the browser\'s local storage and then retrieves it.',
      },
      {
        slug: 'html-web-workers',
        title: 'HTML Web Workers',
        description: 'Run background scripts without freezing the user interface.',
        content: 'A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. This is ideal for long-running or computationally intensive tasks. Communication with the main page is done via a messaging system.',
        codeSnippet: { language: 'javascript', code: '// main.js\nconst worker = new Worker("worker.js");\nworker.postMessage("Start working!");' },
        output: 'Starts a new worker thread by loading the script at "worker.js" and sends it a message.',
      },
      {
        slug: 'html-accessibility',
        title: 'HTML Accessibility (A11y)',
        description: 'Write HTML that is usable by as many people as possible.',
        content: 'Web accessibility (a11y) means making your website usable by everyone, including people with disabilities. This involves using semantic HTML correctly, providing text alternatives for images (`alt` attributes), ensuring keyboard navigability, and using ARIA attributes where necessary to add more context for screen readers.',
        codeSnippet: { language: 'html', code: '<button aria-label="Close">X</button>\n<img src="profile.jpg" alt="Profile picture of Jane Doe">' },
        output: 'Provides an accessible label for a button with non-descriptive text and a good alternative text for an image.',
      },
      {
        slug: 'html-best-practices',
        title: 'HTML Best Practices',
        description: 'Write clean, maintainable, and standard-compliant HTML.',
        content: 'Best practices for HTML include validating your code, using semantic elements appropriately, keeping your structure logical, ensuring accessibility, optimizing images, and maintaining a clean and readable code style. Consistent and clean code is easier for you and others to maintain.',
        codeSnippet: { language: 'html', code: '<!-- Good: Semantic and Accessible -->\n<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n  </ul>\n</nav>\n\n<!-- Bad: Non-semantic -->\n<div class="nav">\n  <span><a href="/">Home</a></span>\n</div>' },
        output: 'Using semantic tags like `<nav>` and `<ul>` is better than using generic `<div>` and `<span>` tags.',
      },
    ],
  },
  {
    name: 'CSS',
    slug: 'css',
    icon: Paintbrush,
    description: 'Style your web pages beautifully.',
    topics: [
      // --- Basic Level ---
      {
        slug: 'css-introduction',
        title: 'CSS Introduction',
        description: 'Explore what CSS is and how it styles HTML.',
        content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, or in other media. It controls colors, fonts, spacing, layout, and much more.',
        learningObjectives: [
            "Define what CSS is and its role in styling web pages.",
            "Differentiate between the three ways of adding CSS: inline, internal, and external.",
            "Understand the basic syntax of a CSS rule (selector and declaration block)."
        ],
        codeSnippet: { language: 'css', code: 'body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n}' },
        output: 'This CSS sets the default font and background color for the entire page.',
      },
      {
        slug: 'css-syntax',
        title: 'CSS Syntax',
        description: 'Understand the basic syntax of a CSS rule.',
        content: 'A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.',
        codeSnippet: { language: 'css', code: 'selector {\n  property: value;\n}' },
        output: 'This is the fundamental structure of a CSS rule.',
      },
      {
        slug: 'css-selectors',
        title: 'CSS Selectors',
        description: 'Explore how to target specific HTML elements for styling.',
        content: 'Selectors are patterns used to select the element(s) you want to style. You can select elements by tag name (e.g., `p`), class (e.g., `.my-class`), ID (e.g., `#my-id`), attributes, and their state (e.g., `:hover`).',
        codeSnippet: { language: 'css', code: 'p { color: black; }      /* Element selector */\n.info { color: blue; }   /* Class selector */\n#header { color: green; } /* ID selector */' },
        output: 'These are three basic types of CSS selectors.',
      },
      {
        slug: 'css-how-to',
        title: 'How To Add CSS',
        description: 'Explore the three ways of inserting a style sheet.',
        content: 'There are three ways to add CSS: External CSS (in a `<link>` tag), Internal CSS (in a `<style>` tag in the `<head>`), and Inline CSS (using the `style` attribute on an element). External stylesheets are the best practice for most projects.',
        codeSnippet: { language: 'html', code: '<!-- External CSS is the best practice -->\n<link rel="stylesheet" href="styles.css">' },
        output: 'This example shows how to link an external stylesheet.',
      },
      {
        slug: 'css-comments',
        title: 'CSS Comments',
        description: 'Explore how to add comments to your stylesheet.',
        content: 'CSS comments are used to explain your code and are ignored by the browser. A CSS comment starts with `/*` and ends with `*/`. They can be used for notes or to temporarily disable rules.',
        codeSnippet: { language: 'css', code: '/* This is a comment */\np {\n  color: red; /* Set text color to red */\n}' },
        output: 'Comments can be used to document your code for better maintainability.',
      },
      {
        slug: 'css-colors',
        title: 'CSS Colors',
        description: 'Specify colors using names, RGB, HEX, HSL, and more.',
        content: 'CSS colors can be specified using predefined color names (like `red`), or RGB, HEX, HSL, RGBA, or HSLA values. RGBA and HSLA include an alpha channel for transparency.',
        codeSnippet: { language: 'css', code: 'p {\n  color: #ff0000; /* Red using HEX */\n  background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent blue */\n}' },
        output: 'Applies a solid red color to the text and a semi-transparent blue background.',
      },
      {
        slug: 'css-backgrounds',
        title: 'CSS Backgrounds',
        description: 'Control the background color, image, and position of elements.',
        content: 'CSS background properties are used to define the background effects for elements. You can set a background color (`background-color`), a background image (`background-image`), and control its repetition (`background-repeat`) and position (`background-position`).',
        codeSnippet: { language: 'css', code: 'body {\n  background-image: url("paper.gif");\n  background-repeat: no-repeat;\n  background-position: center;\n}' },
        output: 'Sets a background image for the page, prevents it from tiling, and centers it.',
      },
      {
        slug: 'css-borders',
        title: 'CSS Borders',
        description: 'Set the style, width, and color of element borders.',
        content: 'The CSS `border` properties allow you to specify the style, width, and color of an element\'s border. You can style each of the four sides individually or use the `border` shorthand property.',
        codeSnippet: { language: 'css', code: 'p {\n  border: 2px solid powderblue;\n  padding: 10px;\n}' },
        output: 'Creates a 2-pixel wide, solid, light blue border around paragraph elements.',
      },
      {
        slug: 'css-margins',
        title: 'CSS Margins',
        description: 'Control the space outside of an element.',
        content: 'Margins are used to create space around elements, outside of any defined borders. You can control the margin for each side of an element (top, right, bottom, and left). Vertical margins of adjacent block elements can sometimes collapse.',
        codeSnippet: { language: 'css', code: 'div {\n  margin-top: 50px;\n  margin-left: 100px;\n}' },
        output: 'Pushes the div element 50px down from the element above it and 100px from the left.',
      },
      {
        slug: 'css-padding',
        title: 'CSS Padding',
        description: 'Control the space between an element\'s content and its border.',
        content: 'Padding is used to create space around an element\'s content, inside of any defined borders. You can control the padding for each side of an element. Padding is affected by the background color of the element.',
        codeSnippet: { language: 'css', code: 'div {\n  padding: 25px 50px; /* 25px top/bottom, 50px left/right */\n}' },
        output: 'Applies 25px of padding to the top and bottom, and 50px to the left and right.',
      },
      // --- Intermediate Level ---
      {
        slug: 'css-box-model',
        title: 'CSS Box Model',
        description: 'Understand how elements are sized and spaced.',
        content: 'The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The `box-sizing` property determines how the `width` and `height` properties are calculated.',
        codeSnippet: { language: 'css', code: 'div {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n  box-sizing: border-box; /* Width remains 300px */\n}' },
        output: 'With `border-box`, the total width is 300px. The content area shrinks to accommodate the padding and border.',
      },
      {
        slug: 'css-text-and-fonts',
        title: 'CSS Text and Fonts',
        description: 'Control text alignment, decoration, fonts, and style.',
        content: 'CSS has many properties for formatting text. You can control alignment (`text-align`), decoration (`text-decoration`), spacing (`letter-spacing`), font family (`font-family`), size (`font-size`), and weight (`font-weight`).',
        codeSnippet: { language: 'css', code: 'p {\n  font-family: "Georgia", serif;\n  text-align: justify;\n  line-height: 1.6;\n}' },
        output: 'Styles paragraphs with a specific font, justified alignment, and increased line spacing for readability.',
      },
      {
        slug: 'css-links',
        title: 'CSS Links',
        description: 'Style hyperlinks based on their state.',
        content: 'Links can be styled differently depending on what state they are in. The four link states are `:link` (unvisited), `:visited`, `:hover` (mouse over), and `:active` (being clicked). Styling these states provides important user feedback.',
        codeSnippet: { language: 'css', code: 'a:hover {\n  color: hotpink;\n  text-decoration: none;\n}' },
        output: 'When a user hovers over a link, its color changes and the underline is removed.',
      },
      {
        slug: 'css-lists',
        title: 'CSS Lists',
        description: 'Customize the appearance of ordered and unordered lists.',
        content: 'CSS list properties allow you to change the list item marker for ordered and unordered lists. You can change the marker type (`list-style-type`), use an image for the marker (`list-style-image`), or control its position (`list-style-position`).',
        codeSnippet: { language: 'css', code: 'ul {\n  list-style-type: square;\n  padding-left: 20px;\n}' },
        output: 'Changes the bullets of an unordered list to squares and adjusts its indentation.',
      },
      {
        slug: 'css-tables',
        title: 'CSS Tables',
        description: 'Control the layout and appearance of HTML tables.',
        content: 'HTML tables can be styled with CSS to improve their appearance. You can control borders, padding, alignment, and even create striped tables (`:nth-child`) for better readability. Use `border-collapse` to merge borders.',
        codeSnippet: { language: 'css', code: 'tr:nth-child(even) {\n  background-color: #f2f2f2;\n}' },
        output: 'Applies a light gray background to all even-numbered table rows, creating a "zebra-striped" effect.',
      },
      {
        slug: 'css-display',
        title: 'CSS Display Property',
        description: 'Control how an element is displayed.',
        content: 'The `display` property is the most important CSS property for controlling layout. Every element has a default display value. Common values are `block`, `inline`, `inline-block`, `none`, `flex`, and `grid`.',
        codeSnippet: { language: 'css', code: 'li {\n  display: inline-block;\n  margin: 0 10px;\n}' },
        output: 'Makes list items display horizontally next to each other, creating a navigation bar.',
      },
      {
        slug: 'css-position',
        title: 'CSS Position Property',
        description: 'Control how an element is placed in the document.',
        content: 'The `position` property specifies the type of positioning method used for an element. Values are `static`, `relative`, `absolute`, `fixed`, or `sticky`. This property is used with `top`, `right`, `bottom`, and `left` to place the element precisely.',
        codeSnippet: { language: 'css', code: '.fixed-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}' },
        output: 'An element with class "fixed-header" will stick to the top of the viewport.',
      },
      {
        slug: 'css-z-index',
        title: 'CSS z-index',
        description: 'Control the vertical stacking order of positioned elements.',
        content: 'The `z-index` property specifies the stack order of a positioned element (an element with `position` other than `static`). An element with a greater stack order (a higher `z-index` number) is always in front of an element with a lower stack order.',
        codeSnippet: { language: 'css', code: '.popup {\n  position: absolute;\n  z-index: 10;\n  background: white;\n}' },
        output: 'Ensures the `.popup` element appears on top of other elements on the page.',
      },
      {
        slug: 'css-combinators',
        title: 'CSS Combinators',
        description: 'Combine selectors to create powerful targeting rules.',
        content: 'Combinators are used to combine selectors. There are four different combinators in CSS: descendant selector (space), child selector (`>`), adjacent sibling selector (`+`), and general sibling selector (`~`).',
        codeSnippet: { language: 'css', code: 'article > p {\n  color: blue;\n}' },
        output: 'Selects only `<p>` elements that are direct children of an `<article>` element.',
      },
      {
        slug: 'css-pseudo-classes',
        title: 'CSS Pseudo-classes',
        description: 'Style elements based on their state or position.',
        content: 'A pseudo-class is used to define a special state of an element. For example, it can be used to style an element when a user mouses over it (`:hover`), when it is focused (`:focus`), or based on its position among siblings (`:nth-child`).',
        codeSnippet: { language: 'css', code: 'input:focus {\n  border-color: blue;\n  outline: none;\n}' },
        output: 'Changes the border color of an input field when it has keyboard focus.',
      },
      // --- Advanced Level ---
      {
        slug: 'css-pseudo-elements',
        title: 'CSS Pseudo-elements',
        description: 'Style a specific part of an element.',
        content: 'A pseudo-element is used to style specified parts of an element. For example, it can be used to style the first letter (`::first-letter`), or the first line (`::first-line`) of an element, or to insert content before or after an element (`::before`, `::after`).',
        codeSnippet: { language: 'css', code: 'p::first-line {\n  font-weight: bold;\n  font-size: 1.1em;\n}' },
        output: 'Makes the first line of every paragraph element bold and slightly larger.',
      },
      {
        slug: 'css-flexbox',
        title: 'CSS Flexbox',
        description: 'Explore one-dimensional layouts with this powerful layout module.',
        content: 'The Flexbox Layout module makes it easier to design flexible responsive layout structures in one dimension (either a row or a column). It provides powerful alignment (`align-items`) and distribution (`justify-content`) capabilities.',
        codeSnippet: { language: 'css', code: '.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}' },
        output: 'Items inside `.container` will be spaced out evenly along the main axis and centered on the cross axis.',
      },
      {
        slug: 'css-grid',
        title: 'CSS Grid',
        description: 'Explore two-dimensional layouts for complex page structures.',
        content: 'CSS Grid Layout is a two-dimensional layout system. It lets you lay content out in rows and columns, making it easy to create complex layouts that would be difficult with Flexbox alone. It is the most powerful layout system in CSS.',
        codeSnippet: { language: 'css', code: '.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}' },
        output: 'Items inside `.wrapper` will be arranged in a three-column grid of equal-width tracks.',
      },
      {
        slug: 'css-responsive-design-media-queries',
        title: 'CSS Responsive Design & Media Queries',
        description: 'Use media queries to adapt your layout for different screen sizes.',
        content: 'Responsive design ensures your website looks good on all devices. Media queries are the core of this, allowing you to apply different CSS rules based on device characteristics like screen width (`min-width`, `max-width`), height, or orientation.',
        codeSnippet: { language: 'css', code: '@media (max-width: 600px) {\n  .sidebar {\n    display: none;\n  }\n}' },
        output: 'Hides the `.sidebar` element on screens that are 600px wide or smaller.',
      },
      {
        slug: 'css-variables',
        title: 'CSS Variables',
        description: 'Create reusable values in your stylesheets for easier maintenance.',
        content: 'CSS Variables (Custom Properties) allow you to store values in one place and reuse them throughout your stylesheet. This is incredibly useful for theming (e.g., light/dark mode) and maintaining large projects. They are defined with a `--` prefix.',
        codeSnippet: { language: 'css', code: ':root {\n  --main-color: #3498db;\n}\n\na {\n  color: var(--main-color);\n}' },
        output: 'Defines a main color variable and applies it to all link elements.',
      },
      {
        slug: 'css-transforms',
        title: 'CSS Transforms',
        description: 'Rotate, scale, move, and skew elements in 2D or 3D space.',
        content: 'The `transform` property lets you apply transformations like `rotate()`, `scale()`, `translate()`, and `skew()` to elements, modifying their position, shape, and orientation without affecting the normal document flow.',
        codeSnippet: { language: 'css', code: 'div:hover {\n  transform: rotate(10deg) scale(1.1);\n}' },
        output: 'When a user hovers over the div, it will rotate 10 degrees and grow by 10%.',
      },
      {
        slug: 'css-transitions',
        title: 'CSS Transitions',
        description: 'Create smooth animations when property values change.',
        content: 'Transitions allow you to smoothly change property values over a given duration. This provides a way to animate changes from one state to another, such as on hover, creating a more polished user experience.',
        codeSnippet: { language: 'css', code: 'button {\n  background-color: blue;\n  transition: background-color 0.5s ease-out;\n}\n\nbutton:hover {\n  background-color: red;\n}' },
        output: 'The button\'s background color will smoothly fade from blue to red over 0.5 seconds on hover.',
      },
      {
        slug: 'css-animations',
        title: 'CSS Animations',
        description: 'Create complex, multi-step animations using @keyframes.',
        content: 'CSS animations allow for more complex sequences of motion than transitions. You define the animation with a `@keyframes` rule (specifying styles at different points in the sequence) and then apply it to an element using the `animation` property.',
        codeSnippet: { language: 'css', code: '@keyframes slide-in {\n  from { transform: translateX(-100%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n\n.box {\n  animation: slide-in 1s forwards;\n}' },
        output: 'An element with class "box" will slide in from the left and fade in over 1 second.',
      },
      {
        slug: 'css-preprocessors',
        title: 'CSS Preprocessors (Sass/Less)',
        description: 'Explore about tools that extend the capabilities of CSS.',
        content: 'Preprocessors like Sass and Less are scripting languages that extend the default capabilities of CSS. They allow you to use variables, nesting, mixins, functions, and more, which can make your CSS more maintainable, themeable, and organized. The code is then compiled into regular CSS.',
        codeSnippet: { language: 'css', code: '// Sass Example\n$primary-color: #333;\n\nbody {\n  color: $primary-color;\n  a {\n    color: darken($primary-color, 10%);\n  }\n}' },
        output: 'This Sass code uses variables and nesting, which would be compiled into standard CSS.',
      },
      {
        slug: 'css-methodologies-bem',
        title: 'CSS Methodologies (BEM)',
        description: 'Explore strategies for writing scalable and maintainable CSS.',
        content: 'As projects grow, CSS can become difficult to manage. Methodologies like BEM (Block, Element, Modifier) provide a naming convention that helps create self-contained, reusable components and avoids style conflicts. For example: `.card__title--highlighted`.',
        codeSnippet: { language: 'css', code: '/* BEM Naming Convention */\n.card { /* Block */ }\n.card__image { /* Element */ }\n.card--dark { /* Modifier */ }' },
        output: 'BEM provides a structured way to name your classes based on their role.',
      },
    ]
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    icon: JsIcon,
    description: 'Add interactivity to your site.',
    topics: [
      // --- Basic Level ---
      {
        slug: 'js-introduction',
        title: 'JS Introduction',
        description: 'Understand the role of JavaScript in web development.',
        content: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS, and is responsible for webpage behavior.',
        learningObjectives: [
            "Explain the role of JavaScript in making web pages interactive.",
            "Understand how to include JavaScript in an HTML file using the `<script>` tag.",
            "Write a simple JavaScript statement to manipulate an HTML element."
        ],
        codeSnippet: { language: 'javascript', code: '// JavaScript can change HTML content\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";' },
        output: 'The text of the HTML element with id="demo" is changed.',
      },
      {
        slug: 'js-syntax-and-statements',
        title: 'JS Syntax and Statements',
        description: 'Explore the fundamental rules for writing JavaScript.',
        content: 'A JavaScript program is a list of statements to be executed by a computer. Statements are separated by semicolons. JavaScript is case-sensitive, so `myVariable` and `myvariable` are different.',
        codeSnippet: { language: 'javascript', code: 'let x, y, z;  // Declare 3 variables\nx = 5;          // Assign the value 5 to x\ny = 6;          // Assign the value 6 to y\nz = x + y;      // Assign the sum of x and y to z' },
        output: 'These statements declare variables and perform a simple calculation.',
      },
      {
        slug: 'js-variables',
        title: 'JS Variables (var, let, const)',
        description: 'Explore how to store data values using variables.',
        content: 'Variables are containers for storing data. In modern JavaScript, you declare variables using `let` for values that can be reassigned, and `const` for constant values that cannot be reassigned. `var` is the older, function-scoped way to declare variables.',
        codeSnippet: { language: 'javascript', code: 'let name = "Alice";\nconst year = 2024;\nname = "Bob"; // This is allowed\n// year = 2025; // This would cause an error' },
        output: 'Three variables are created, holding a string, a number, and a boolean value.',
      },
      {
        slug: 'js-data-types',
        title: 'JS Data Types',
        description: 'Understand the different types of data in JavaScript.',
        content: 'JavaScript has several primitive data types: String, Number, Boolean, Null, Undefined, and Symbol. It also has a complex data type: Object (which includes Arrays and Functions). JavaScript is a dynamically typed language, so a variable can change type.',
        codeSnippet: { language: 'javascript', code: 'let length = 16;          // Number\nlet lastName = "Johnson";   // String\nlet x = {firstName:"John"}; // Object' },
        output: 'Variables can hold values of different data types.',
      },
      {
        slug: 'js-operators',
        title: 'JS Operators',
        description: 'Perform arithmetic and logical operations on values.',
        content: 'Operators are symbols used to perform operations on operands (values and variables). Common types include arithmetic (`+`, `-`), assignment (`=`), comparison (`==`, `>`), and logical (`&&`, `||`) operators.',
        codeSnippet: { language: 'javascript', code: 'let x = 10 + 5; // x is 15\nlet isGreater = x > 20; // isGreater is false' },
        output: 'This code performs basic arithmetic and a comparison.',
      },
      {
        slug: 'js-functions',
        title: 'JS Functions',
        description: 'Create reusable blocks of code to perform specific tasks.',
        content: 'A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions help organize code, make it reusable, and easier to debug. They can take parameters and return a value.',
        codeSnippet: { language: 'javascript', code: 'function add(a, b) {\n  return a + b;\n}\nlet sum = add(5, 3); // sum is 8' },
        output: 'This defines a function to add two numbers and then calls it.',
      },
      {
        slug: 'js-objects',
        title: 'JS Objects',
        description: 'Explore to store collections of key-value pairs.',
        content: 'Objects are variables too, but they can contain many values. The values are written as name:value pairs (properties). Objects are used to group related data and functionality.',
        codeSnippet: { language: 'javascript', code: 'const person = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 50\n};\nconsole.log(person.firstName);' },
        output: 'The console will display "John".',
      },
      {
        slug: 'js-arrays',
        title: 'JS Arrays',
        description: 'Store multiple values in a single variable.',
        content: 'An array is a special variable which can hold more than one value at a time. Arrays are used to store lists of items, and you can access items by their index number (starting from 0).',
        codeSnippet: { language: 'javascript', code: 'const fruits = ["Apple", "Banana", "Cherry"];\nconsole.log(fruits[0]); // Outputs "Apple"\nfruits.push("Orange"); // Adds a new element to the end' },
        output: 'The `fruits` array stores a list of strings.',
      },
      {
        slug: 'js-conditions',
        title: 'JS Conditions (if/else)',
        description: 'Execute different blocks of code based on conditions.',
        content: 'Conditional statements are used to perform different actions based on different conditions. The most common are `if`, `else if`, and `else`, which allow your code to make decisions and follow different paths.',
        codeSnippet: { language: 'javascript', code: 'let hour = new Date().getHours();\nif (hour < 18) {\n  console.log("Good day");\n} else {\n  console.log("Good evening");\n}' },
        output: 'Logs a greeting based on the time of day.',
      },
      {
        slug: 'js-loops',
        title: 'JS Loops (for/while)',
        description: 'Execute a block of code repeatedly.',
        content: 'Loops are used to execute a piece of code again and again, as long as a certain condition is true. The `for` loop is great for when you know how many times to loop. The `while` loop is for when the number of iterations is unknown.',
        codeSnippet: { language: 'javascript', code: 'for (let i = 0; i < 5; i++) {\n  console.log("Number " + i);\n}' },
        output: 'The console will display numbers 0 through 4.',
      },
      // --- Intermediate Level ---
      {
        slug: 'js-dom-intro',
        title: 'JS DOM Introduction',
        description: 'Explore how JavaScript can interact with and change HTML content.',
        content: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript can access and change all the elements of an HTML document.',
        codeSnippet: { language: 'javascript', code: '// Find an element by its ID\nconst p = document.getElementById("demo");\n\n// Change its content\np.innerHTML = "New content!";' },
        output: 'The text of the HTML element with the ID "demo" will be changed.',
      },
      {
        slug: 'js-dom-methods',
        title: 'JS DOM Methods',
        description: 'Explore methods to find and manipulate HTML elements.',
        content: 'The DOM provides many methods to interact with elements. You can find elements with `getElementById()`, `getElementsByTagName()`, `querySelector()`, and `querySelectorAll()`. You can change attributes with `setAttribute()` and styles with the `style` property.',
        codeSnippet: { language: 'javascript', code: 'const element = document.querySelector(".my-class");\nelement.style.color = "blue";' },
        output: 'Finds the first element with the class "my-class" and changes its text color to blue.',
      },
      {
        slug: 'js-events',
        title: 'JS Events',
        description: 'Explore how to react to user actions like clicks and key presses.',
        content: 'Events are actions that happen in the browser, such as a user clicking a button or pressing a key. You can use event listeners (`addEventListener`) to "listen" for these events and execute a function in response.',
        codeSnippet: { language: 'javascript', code: 'const button = document.getElementById("myBtn");\nbutton.addEventListener("click", function() {\n  alert("Button was clicked!");\n});' },
        output: 'When the button with id="myBtn" is clicked, an alert box will pop up.',
      },
      {
        slug: 'js-strings-and-methods',
        title: 'JS Strings and Methods',
        description: 'Explore methods for working with text.',
        content: 'JavaScript provides many built-in methods for working with strings, such as `length`, `slice()`, `substring()`, `replace()`, `toUpperCase()`, and `concat()`. Template literals (using backticks ``) are a modern way to create strings with embedded expressions.',
        codeSnippet: { language: 'javascript', code: 'let name = "World";\nlet greeting = `Hello, ${name}!`; // "Hello, World!"\nconsole.log(greeting.toUpperCase()); // "HELLO, WORLD!"' },
        output: 'This code uses a template literal and a string method.',
      },
      {
        slug: 'js-array-iteration',
        title: 'JS Array Iteration',
        description: 'Explore modern methods for looping over arrays.',
        content: 'ES6 introduced several powerful iteration methods for arrays that are often cleaner than a `for` loop. These include `forEach()`, `map()`, `filter()`, `reduce()`, and `find()`.',
        codeSnippet: { language: 'javascript', code: 'const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2); // [2, 4, 6]' },
        output: 'The `map()` method creates a new array by applying a function to each element of the original array.',
      },
      {
        slug: 'js-dates-and-math',
        title: 'JS Dates and Math',
        description: 'Work with dates, times, and mathematical functions.',
        content: 'The `Date` object is used to work with dates and times. The `Math` object allows you to perform mathematical tasks on numbers, including `Math.random()` for random numbers, `Math.round()` for rounding, and `Math.max()` to find the highest value.',
        codeSnippet: { language: 'javascript', code: 'const today = new Date();\nconsole.log(`The year is ${today.getFullYear()}`);' },
        output: 'Displays the current year in the console.',
      },
      {
        slug: 'js-es6-features',
        title: 'JS ES6 Features',
        description: 'Explore modern JavaScript syntax and features.',
        content: 'ES6 (ECMAScript 2015) introduced many powerful features: `let` and `const`, arrow functions (`=>`), template literals, default parameters, destructuring, and the spread/rest operator (`...`). These features make code more concise and readable.',
        codeSnippet: { language: 'javascript', code: 'const greet = (name = "Guest") => `Hello, ${name}!`;\nconsole.log(greet()); // "Hello, Guest!"' },
        output: 'This uses an arrow function and a default parameter.',
      },
      {
        slug: 'js-async-intro',
        title: 'JS Async Intro (Callbacks)',
        description: 'Understand asynchronous programming in JavaScript.',
        content: 'JavaScript is single-threaded, so asynchronous operations (like fetching data) are essential to prevent blocking the main thread. The original way to handle this was with callback functions, which are functions passed as an argument to be executed later.',
        codeSnippet: { language: 'javascript', code: 'function fetchData(callback) {\n  setTimeout(() => {\n    callback("Data received");\n  }, 1000);\n}\n\nfetchData(data => console.log(data));' },
        output: 'After 1 second, "Data received" is logged to the console.',
      },
      {
        slug: 'js-promises',
        title: 'JS Promises',
        description: 'A more robust way to handle asynchronous operations.',
        content: 'A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation. They are a cleaner alternative to nested callbacks ("callback hell") and can be chained together using `.then()` and `.catch()`.',
        codeSnippet: { language: 'javascript', code: 'const myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Success!"), 1000);\n});\n\nmyPromise.then(result => console.log(result));' },
        output: 'After 1 second, "Success!" is logged to the console.',
      },
      {
        slug: 'js-async-await',
        title: 'JS Async/Await',
        description: 'Modern syntax for writing asynchronous code that looks synchronous.',
        content: '`async` and `await` are syntactic sugar built on top of Promises. An `async function` can use the `await` keyword to pause execution and wait for a Promise to resolve, making complex asynchronous logic much easier to read and write.',
        codeSnippet: { language: 'javascript', code: 'async function fetchData() {\n  const response = await fetch("/api/data");\n  const data = await response.json();\n  console.log(data);\n}' },
        output: 'This function asynchronously fetches data from an API without blocking the page.',
      },
      // --- Advanced Level ---
      {
        slug: 'js-classes',
        title: 'JS Classes',
        description: 'Use classes for object-oriented programming.',
        content: 'ES6 classes are syntactic sugar over JavaScript\'s existing prototype-based inheritance. They provide a much simpler and cleaner syntax for creating objects and handling inheritance, with `constructor` methods, properties, and methods.',
        codeSnippet: { language: 'javascript', code: 'class Car {\n  constructor(name) {\n    this.name = name;\n  }\n  honk() {\n    return `${this.name} says: Beep!`;\n  }\n}' },
        output: 'Defines a `Car` class that can be used to create new car objects.',
      },
      {
        slug: 'js-modules',
        title: 'JS Modules',
        description: 'Split your code into separate, reusable files.',
        content: 'ES6 Modules provide a standardized way to organize your code. You can `export` functions, objects, or primitives from one module and `import` them for use in other modules. This is essential for building large, maintainable applications.',
        codeSnippet: { language: 'javascript', code: '// lib.js -> export const pi = 3.14;\n// main.js -> import { pi } from "./lib.js";' },
        output: 'This shows how to export a value from one module and import it into another.',
      },
      {
        slug: 'js-json',
        title: 'JS JSON',
        description: 'Understand and use JavaScript Object Notation.',
        content: 'JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data, often used when data is sent from a server to a web page. Use `JSON.parse()` to convert a JSON string to an object, and `JSON.stringify()` to convert an object to a JSON string.',
        codeSnippet: { language: 'javascript', code: 'const jsonString = \'{"name":"John", "age":30}\';\nconst myObj = JSON.parse(jsonString);\nconsole.log(myObj.name); // John' },
        output: 'Parses the JSON string into a JavaScript object and accesses a property.',
      },
      {
        slug: 'js-fetch-api',
        title: 'JS Fetch API',
        description: 'A modern interface for making network requests.',
        content: 'The Fetch API provides a modern, Promise-based interface for fetching resources (including across the network). It is a more powerful and flexible replacement for `XMLHttpRequest`. It is the standard way to make API calls in modern web development.',
        codeSnippet: { language: 'javascript', code: 'fetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));' },
        output: 'Fetches data from an API, parses it as JSON, and logs it to the console.',
      },
      {
        slug: 'js-error-handling',
        title: 'JS Error Handling (try/catch)',
        description: 'Handle runtime errors gracefully.',
        content: 'The `try...catch...finally` statement allows you to test a block of code for errors. The `try` block contains the code to be run, the `catch` block handles any errors, and the optional `finally` block executes regardless of the outcome.',
        codeSnippet: { language: 'javascript', code: 'try {\n  // Code that might throw an error\n  myFunction();\n} catch (error) {\n  console.error("An error occurred:", error.message);\n}' },
        output: 'Catches a potential error and logs a helpful message instead of crashing the script.',
      },
      {
        slug: 'js-this-keyword',
        title: 'JS `this` Keyword',
        description: 'Understand the context of `this` in different situations.',
        content: 'The `this` keyword refers to the object it belongs to. Its value is determined by how a function is called. In an object method, `this` is the object. In an arrow function, `this` is lexically inherited from the parent scope. Understanding `this` is crucial for object-oriented programming.',
        codeSnippet: { language: 'javascript', code: 'const person = {\n  name: "Alice",\n  greet: function() { console.log(`Hi, I am ${this.name}`); }\n};\nperson.greet(); // Logs "Hi, I am Alice"' },
        output: 'In this method, `this` correctly refers to the `person` object.',
      },
      {
        slug: 'js-prototypes',
        title: 'JS Prototypes',
        description: 'Understand the underlying inheritance mechanism in JavaScript.',
        content: 'Every JavaScript object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. This is known as the prototype chain, and it is how JavaScript implements inheritance.',
        codeSnippet: { language: 'javascript', code: 'function Person(name) { this.name = name; }\nPerson.prototype.greet = function() { console.log("Hello!"); };\nconst bob = new Person("Bob");\nbob.greet(); // "Hello!"' },
        output: 'Methods added to the prototype are available to all instances of the object.',
      },
      {
        slug: 'js-closures',
        title: 'JS Closures',
        description: 'Understand how functions can remember their lexical scope.',
        content: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function\'s scope from an inner function. This is a powerful concept for creating private variables and stateful functions.',
        codeSnippet: { language: 'javascript', code: 'function makeCounter() {\n  let count = 0;\n  return function() { return ++count; };\n}\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2' },
        output: 'The inner function has access to the `count` variable from its parent scope, even after the parent has returned.',
      },
      {
        slug: 'js-event-loop',
        title: 'JS Event Loop',
        description: 'Understand how JavaScript handles asynchronous operations.',
        content: 'The event loop is the secret behind JavaScript\'s non-blocking behavior. It continuously checks a message queue for tasks (like callbacks from `setTimeout` or `fetch`) and executes them once the main call stack is empty. This allows long-running operations to happen without freezing the browser.',
        codeSnippet: { language: 'javascript', code: 'console.log("Start");\nsetTimeout(() => console.log("Timeout"), 0);\nconsole.log("End");\n// Output: Start, End, Timeout' },
        output: 'Even with a 0ms delay, the `setTimeout` callback is placed in the queue and runs after the main script.',
      },
      {
        slug: 'js-frameworks-intro',
        title: 'JS Frameworks Prep (React, Vue, Angular)',
        description: 'Explore concepts that are fundamental to modern frameworks.',
        content: 'Modern frameworks like React, Vue, and Angular build upon core JavaScript concepts. Key ideas to understand are: component-based architecture, managing state, props (passing data down), declarative vs. imperative programming, and virtual DOM concepts. Mastering these will make exploring a framework much easier.',
        codeSnippet: { language: 'javascript', code: '// A "component" in plain JS could be a function that returns a DOM element\nfunction Greeting(props) {\n  const el = document.createElement("h1");\n  el.textContent = `Hello, ${props.name}`;\n  return el;\n}' },
        output: 'This shows the basic idea of a component: a reusable piece of UI that accepts data (props).',
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
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"],
        correctAnswer: 1,
        explanation: "HTML stands for Hyper Text Markup Language. It's the standard for creating web pages."
      },
      {
        question: "Who is making the Web standards?",
        options: ["Google", "The World Wide Web Consortium", "Microsoft", "Mozilla"],
        correctAnswer: 1,
        explanation: "The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web."
      },
      {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<h6>", "<h1>", "<head>", "<heading>"],
        correctAnswer: 1,
        explanation: "<h1> defines the most important heading. <h6> defines the least important heading."
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<break>", "<lb>", "<linebreak>"],
        correctAnswer: 0,
        explanation: "The <br> tag is an empty tag, which means that it has no end tag."
      },
      {
        question: "What is the correct HTML for adding a background color?",
        options: ['<body bg="yellow">', '<body style="background-color:yellow;">', '<background>yellow</background>', '<body background="yellow">'],
        correctAnswer: 1,
        explanation: "The correct way to add a background color in HTML is by using the CSS `background-color` property inside a `style` attribute."
      }
    ],
    'html-editors': [
        {
            question: "Which of these is a popular professional code editor?",
            options: ["Notepad", "Microsoft Word", "VS Code", "Photoshop"],
            correctAnswer: 2,
            explanation: "VS Code (Visual Studio Code) is a widely-used, free code editor developed by Microsoft that is popular for web development."
        },
        {
            question: "What is syntax highlighting?",
            options: ["Highlighting errors in your code", "A feature that displays code in different colors and fonts according to the category of terms", "A way to comment out code", "Automatically completing your code"],
            correctAnswer: 1,
            explanation: "Syntax highlighting is a feature of text editors that are used for programming, scripting, or markup languages, where sections of the text are displayed in different colors and fonts according to the category of terms."
        },
        {
            question: "What is a common shortcut to generate HTML5 boilerplate in editors like VS Code?",
            options: ["Typing `html` and pressing Enter", "Typing `!` and pressing Tab", "Typing `doc` and pressing Tab", "Pressing Ctrl+N"],
            correctAnswer: 1,
            explanation: "In many modern code editors with Emmet integration (like VS Code), typing an exclamation mark `!` and pressing the Tab key will generate a basic HTML5 document structure."
        },
        {
            question: "Do you need an internet connection to use a code editor like VS Code?",
            options: ["Yes, always", "Only for installing extensions", "No, the core editor works offline", "Yes, for saving files"],
            correctAnswer: 2,
            explanation: "The core functionality of a code editor like VS Code works entirely offline. You only need an internet connection to download the editor initially and to install updates or extensions."
        },
        {
            question: "What is the main benefit of using a professional code editor over a simple text editor?",
            options: ["They can compile the code for you", "They offer features that increase productivity and reduce errors", "They automatically host your website", "They are required to write valid HTML"],
            correctAnswer: 1,
            explanation: "Professional editors provide productivity-boosting features like syntax highlighting, code completion, error checking, and integrated tools that simple text editors lack."
        }
    ],
    'html-basic': [
        {
            question: "Which of these elements are all `<table>` elements?",
            options: ["<table><head><tfoot>", "<thead><body><tr>", "<table><tr><td>", "<table><tr><tt>"],
            correctAnswer: 2,
            explanation: "A standard HTML table is structured with `<table>`, `<tr>` (table row), and `<td>` (table data/cell) elements. `<th>` is used for table headers."
        },
        {
            question: "How can you make a numbered list?",
            options: ["<ol>", "<ul>", "<dl>", "<list>"],
            correctAnswer: 0,
            explanation: "The `<ol>` tag defines an ordered list. The list items inside will be marked with numbers by default."
        },
        {
            question: "How can you make a bulleted list?",
            options: ["<ol>", "<ul>", "<dl>", "<list>"],
            correctAnswer: 1,
            explanation: "The `<ul>` tag defines an unordered list. The list items inside will be marked with bullets by default."
        },
        {
            question: "What is the correct HTML for creating a hyperlink?",
            options: ["<a url='http://www.example.com'>example.com</a>", "<a>http://www.example.com</a>", "<a href='http://www.example.com'>example.com</a>", "<a link='http://www.example.com'>example.com</a>"],
            correctAnswer: 2,
            explanation: "The `<a>` (anchor) tag is used to define a hyperlink, and the `href` attribute specifies the link's destination."
        },
        {
            question: "Which character is used to indicate an end tag?",
            options: ["/", "<", "*", "^"],
            correctAnswer: 0,
            explanation: "An end tag is written like a start tag, but with a forward slash `/` inserted before the element name."
        }
    ],
    'html-elements': [
        {
            question: "Which of the following is considered an 'empty' or 'void' element?",
            options: ["<p>", "<div>", "<img>", "<span>"],
            correctAnswer: 2,
            explanation: "Empty elements, like `<img>`, `<br>`, and `<hr>`, do not have a closing tag because they don't contain any content."
        },
        {
            question: "What is the purpose of an HTML element?",
            options: ["To style the webpage", "To define the structure and meaning of content", "To add interactivity", "To link to other pages"],
            correctAnswer: 1,
            explanation: "HTML elements are the building blocks of web pages, defining the semantic structure of the content, such as headings, paragraphs, links, etc."
        },
        {
            question: "Are HTML tags case-sensitive?",
            options: ["Yes", "No", "Only for certain tags", "Depends on the browser"],
            correctAnswer: 1,
            explanation: "HTML tags are not case-sensitive. `<p>` is the same as `<P>`, but the W3C recommends using lowercase in HTML."
        },
        {
            question: "What does it mean to 'nest' HTML elements?",
            options: ["Placing multiple elements next to each other", "Placing one element inside another", "Linking elements together", "Commenting out elements"],
            correctAnswer: 1,
            explanation: "Nesting is the practice of putting HTML elements inside other HTML elements, like putting an `<em>` tag inside a `<p>` tag."
        },
        {
            question: "The content of an HTML element is found where?",
            options: ["Before the start tag", "After the end tag", "Between the start and end tags", "Inside the start tag as an attribute"],
            correctAnswer: 2,
            explanation: "The content is the information that you want to display on the webpage, and it is placed between the opening and closing tags of an element."
        }
    ],
    'html-attributes': [
      {
        question: "The `href` attribute in an `<a>` tag specifies what?",
        options: ["The link's text", "The link's style", "The destination URL of the link", "The target frame of the link"],
        correctAnswer: 2,
        explanation: "The `href` attribute is required for an anchor to be a hyperlink, and it specifies the URL of the page the link goes to."
      },
      {
        question: "The `src` attribute in an `<img>` tag specifies what?",
        options: ["The image's size", "The path to the image to be displayed", "The image's caption", "The script to run when the image is clicked"],
        correctAnswer: 1,
        explanation: "The `src` attribute stands for 'source' and contains the path to the image you want to embed."
      },
      {
        question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
        options: ["To provide an alternative title for the image", "To provide alternative text if the image cannot be displayed", "To specify the alignment of the image", "To link the image to another resource"],
        correctAnswer: 1,
        explanation: "The `alt` attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader)."
      },
      {
        question: "The `style` attribute is used to provide what kind of styling?",
        options: ["External CSS", "Internal CSS", "Inline CSS", "Global CSS"],
        correctAnswer: 2,
        explanation: "The `style` attribute is used to apply CSS rules directly to the element it's on, which is known as inline styling."
      },
      {
        question: "Which attribute is used to provide an advisory title for an element, often shown as a tooltip?",
        options: ["tooltip", "title", "info", "alt"],
        correctAnswer: 1,
        explanation: "The `title` attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element."
      },
    ],
    'html-headings': [
        {
            question: "How many levels of headings are available in HTML?",
            options: ["4", "8", "6", "10"],
            correctAnswer: 2,
            explanation: "HTML provides six levels of headings, from `<h1>` (the most important) to `<h6>` (the least important)."
        },
        {
            question: "Which heading element should be used for the main title of a page?",
            options: ["<h1>", "<h2>", "<h3>", "<h6>"],
            correctAnswer: 0,
            explanation: "For SEO and accessibility, it is best practice to use a single `<h1>` element for the main title or heading of a page."
        },
        {
            question: "By default, which heading tag renders the largest text?",
            options: ["<h1>", "<h6>", "<head>", "<h4>"],
            correctAnswer: 0,
            explanation: "By default, browsers render `<h1>` with the largest font size and `<h6>` with the smallest font size among the heading tags."
        },
        {
            question: "Why is it important to use headings hierarchically (e.g., `<h1>` then `<h2>`, not `<h1>` then `<h4>`)?",
            options: ["It makes the text look better", "It is required for the HTML to be valid", "It creates a logical structure for screen readers and search engines", "It loads the page faster"],
            correctAnswer: 2,
            explanation: "A logical heading structure helps assistive technologies and search engine crawlers understand the outline and hierarchy of your content."
        },
        {
            question: "Are heading elements block-level or inline-level?",
            options: ["Block-level", "Inline-level", "They can be both", "Neither"],
            correctAnswer: 0,
            explanation: "Heading elements (`<h1>`-`<h6>`) are block-level elements, meaning they start on a new line and take up the full width available."
        }
    ],
    'html-paragraphs': [
        {
            question: "Which tag is used to define a paragraph in HTML?",
            options: ["<p>", "<para>", "<paragraph>", "<pg>"],
            correctAnswer: 0,
            explanation: "The `<p>` tag is the correct HTML element for defining a paragraph of text."
        },
        {
            question: "How do browsers typically render paragraphs?",
            options: ["With a single line break between them", "With extra white space (margin) above and below", "With an indent on the first line", "In a different font color"],
            correctAnswer: 1,
            explanation: "By default, browsers add a margin to the top and bottom of `<p>` elements to visually separate them from other content."
        },
        {
            question: "Can you put another block-level element, like a heading, inside a `<p>` tag?",
            options: ["Yes, it is common practice", "No, it is invalid HTML", "Only if you use a `<div>`", "Only `<h2>` through `<h6>` are allowed"],
            correctAnswer: 1,
            explanation: "It is invalid to nest a block-level element (like `<h1>` or another `<p>`) inside a `<p>` element. A paragraph can only contain phrasing content (inline elements)."
        },
        {
            question: "How does HTML handle multiple spaces or new lines in your source code within a `<p>` tag?",
            options: ["It preserves all of them", "It converts them to `<br>` tags", "It collapses them into a single space", "It throws an error"],
            correctAnswer: 2,
            explanation: "HTML collapses multiple whitespace characters (spaces, tabs, newlines) into a single space when rendering the content in the browser."
        },
        {
            question: "To create a line break inside a paragraph without starting a new paragraph, you should use which tag?",
            options: ["<break>", "<newline>", "<p>", "<br>"],
            correctAnswer: 3,
            explanation: "The `<br>` (line break) element is an empty tag used to create a line break within a block of text, such as a paragraph."
        }
    ],
    'html-styles': [
        {
            question: "Which attribute is used to apply inline styles to an HTML element?",
            options: ["css", "style", "styles", "inline"],
            correctAnswer: 1,
            explanation: "The `style` attribute is used to add CSS styles directly to an HTML element."
        },
        {
            question: "What is the correct syntax for setting the text color to red using an inline style?",
            options: ["style='text-color:red;'", "style='font-color:red;'", "style='color:red;'", "style='color=red'"],
            correctAnswer: 2,
            explanation: "The CSS property for text color is `color`. The syntax within the style attribute is `property:value;`."
        },
        {
            question: "To apply multiple inline styles, how should you separate them?",
            options: ["With commas (,)", "With semicolons (;)", "With spaces", "Each in a separate style attribute"],
            correctAnswer: 1,
            explanation: "Multiple CSS declarations within a single style attribute must be separated by semicolons."
        },
        {
            question: "Why is it generally recommended to use external stylesheets instead of inline styles?",
            options: ["Inline styles are not supported by all browsers", "Inline styles load slower", "External stylesheets make the code more maintainable and separate content from presentation", "Inline styles have a higher CSS specificity"],
            correctAnswer: 2,
            explanation: "Separating styles into a CSS file (Separation of Concerns) makes it much easier to manage styles for a large website and reuse them across multiple pages."
        },
        {
            question: "Which of these is a valid inline style declaration?",
            options: ["<p style='font-size: 16px'>", "<p style='font-size:16px;'>", "<p style='font-size=16px'>", "<p style='font-size:16px,'>"],
            correctAnswer: 1,
            explanation: "The correct format is `property:value;`. While some browsers may be lenient, the semicolon at the end is part of the correct syntax."
        }
    ],
    'html-text-formatting': [
        {
            question: "Which tag is used to define important text, which browsers typically render as bold?",
            options: ["<b>", "<important>", "<strong>", "<bold>"],
            correctAnswer: 2,
            explanation: "The `<strong>` tag is used to indicate that the text has strong importance. It has a semantic meaning, unlike `<b>` which is purely for presentation."
        },
        {
            question: "Which tag is used to define emphasized text, typically rendered as italic?",
            options: ["<i>", "<em>", "<italic>", "<emphasize>"],
            correctAnswer: 1,
            explanation: "The `<em>` tag is used for text that should be emphasized. It carries semantic weight, whereas `<i>` is just for making text italic."
        },
        {
            question: "What is the correct tag to use for marking up a piece of computer code?",
            options: ["<pre>", "<code>", "<var>", "<samp>"],
            correctAnswer: 1,
            explanation: "The `<code>` tag is semantically correct for marking up a short fragment of computer code."
        },
        {
            question: "To highlight or 'mark' a piece of text, which tag should be used?",
            options: ["<yellow>", "<highlight>", "<mark>", "<background>"],
            correctAnswer: 2,
            explanation: "The `<mark>` tag is used to highlight text for reference or notation purposes, typically rendered with a yellow background."
        },
        {
            question: "What is the difference between `<b>` and `<strong>`?",
            options: ["There is no difference", "`<strong>` is for bold text, `<b>` is for bigger text", "`<b>` is purely presentational, while `<strong>` indicates importance", "`<b>` is deprecated, but `<strong>` is not"],
            correctAnswer: 2,
            explanation: "Semantically, `<strong>` indicates that its content is of strong importance, seriousness, or urgency. `<b>` just applies a bold style without any extra importance."
        }
    ],
    'html-comments': [
        {
            question: "How do you start an HTML comment?",
            options: ["<!--", "/*", "//", "<comment>"],
            correctAnswer: 0,
            explanation: "An HTML comment begins with `<!--`."
        },
        {
            question: "How do you end an HTML comment?",
            options: ["-->", "*/", "//", "</comment>"],
            correctAnswer: 0,
            explanation: "An HTML comment ends with `-->`."
        },
        {
            question: "Are HTML comments displayed in the browser?",
            options: ["Yes", "No", "Only if they contain errors", "Sometimes"],
            correctAnswer: 1,
            explanation: "Comments are completely ignored by the browser and are not displayed on the web page. They are only visible in the source code."
        },
        {
            question: "Can you have a multi-line comment in HTML?",
            options: ["No, only single-line comments are allowed", "Yes, anything between `<!--` and `-->` is a comment", "Yes, by starting each line with `//`", "No, you must use a separate comment for each line"],
            correctAnswer: 1,
            explanation: "HTML comments can span multiple lines. The comment starts with `<!--` and ends with `-->`, and everything in between is part of the comment."
        },
        {
            question: "What is a primary use for HTML comments?",
            options: ["To hide content from users", "To add notes and documentation for developers", "To style parts of the page", "To create hidden links"],
            correctAnswer: 1,
            explanation: "The main purpose of comments is to help developers understand the code by leaving notes, explanations, or reminders."
        }
    ],
    'html-links': [
        {
            question: "What is the correct HTML for creating a hyperlink?",
            options: ["<a>http://www.example.com</a>", "<a href='http://www.example.com'>example.com</a>", "<a name='http://www.example.com'>example.com</a>", "<link>http://www.example.com</link>"],
            correctAnswer: 1,
            explanation: "A hyperlink is created with the `<a>` tag, and the destination is specified in the `href` attribute."
        },
        {
            question: "Which attribute is used to specify that a link should open in a new tab?",
            options: ["target='_blank'", "target='_new'", "open='new'", "window='new'"],
            correctAnswer: 0,
            explanation: "The `target='_blank'` attribute tells the browser to open the linked document in a new window or tab."
        },
        {
            question: "How do you create a link that jumps to a specific part of the same page (an anchor link)?",
            options: ["<a href='#section2'>", "<a href='*section2'>", "<a link='#section2'>", "<a jump='section2'>"],
            correctAnswer: 0,
            explanation: "You create a link with an `href` attribute starting with '#' followed by the `id` of the element you want to link to."
        },
        {
            question: "How do you create a link that sends an email?",
            options: ["<a href='send:user@example.com'>", "<a href='email:user@example.com'>", "<a href='mailto:user@example.com'>", "<a href='mail:user@example.com'>"],
            correctAnswer: 2,
            explanation: "Using `mailto:` in the `href` attribute will open the user's default email client with the specified address."
        },
        {
            question: "What does the content between `<a>` and `</a>` tags represent?",
            options: ["The link's destination", "A tooltip for the link", "The visible, clickable part of the link", "A script to run"],
            correctAnswer: 2,
            explanation: "The content inside the anchor tags is what the user sees and clicks on to navigate to the link's destination."
        }
    ],
    'html-images': [
        {
            question: "Which tag is used to embed an image in HTML?",
            options: ["<image>", "<img>", "<picture>", "<src>"],
            correctAnswer: 1,
            explanation: "The `<img>` tag is an empty element used to embed images in an HTML page."
        },
        {
            question: "Which attribute is required for an `<img>` tag?",
            options: ["alt", "src", "Both src and alt", "title"],
            correctAnswer: 2,
            explanation: "The `src` attribute is required to specify the image path, and the `alt` attribute is required for accessibility, making it mandatory for valid HTML."
        },
        {
            question: "What is the purpose of the `alt` attribute?",
            options: ["To provide a title for the image", "To provide an alternative text description for screen readers and if the image fails to load", "To define the image source", "To set the image alignment"],
            correctAnswer: 1,
            explanation: "The `alt` attribute provides a text alternative for the image, which is crucial for accessibility and is displayed if the image cannot be loaded."
        },
        {
            question: "How do you specify the width and height of an image?",
            options: ["Using the `size` attribute", "Using CSS only", "Using the `width` and `height` attributes", "Using the `dimensions` attribute"],
            correctAnswer: 2,
            explanation: "The `width` and `height` attributes can be used to specify the size of the image in pixels, which helps the browser reserve space before the image loads."
        },
        {
            question: "To make an image a link, what do you do?",
            options: ["Add a `href` attribute to the `<img>` tag", "Nest the `<img>` tag inside an `<a>` tag", "Nest the `<a>` tag inside an `<img>` tag", "Use a special `<imglink>` tag"],
            correctAnswer: 1,
            explanation: "To make an image a hyperlink, you wrap the `<img>` element with an `<a>` (anchor) element."
        }
    ],
    'html-tables': [
        {
            question: "Which tag defines a table row?",
            options: ["<td>", "<th>", "<tr>", "<table>"],
            correctAnswer: 2,
            explanation: "The `<tr>` tag stands for 'table row' and is used to group table cells into a row."
        },
        {
            question: "Which tag is used for table header cells?",
            options: ["<td>", "<th>", "<thead>", "<header>"],
            correctAnswer: 1,
            explanation: "The `<th>` tag stands for 'table header' and defines a cell as a header for a group of table cells. Browsers typically render the text in `<th>` as bold and centered."
        },
        {
            question: "What is the purpose of the `<thead>`, `<tbody>`, and `<tfoot>` elements?",
            options: ["They are required for all tables", "They help style the table with CSS", "They provide semantic structure to a table, separating header, body, and footer content", "They are used to create nested tables"],
            correctAnswer: 2,
            explanation: "These elements provide semantic meaning and structure, which is useful for accessibility and can allow browsers to enable scrolling of the table body independently of the header and footer."
        },
        {
            question: "Which attribute can be used to make a cell span multiple columns?",
            options: ["span", "colspan", "column-span", "merge"],
            correctAnswer: 1,
            explanation: "The `colspan` attribute on a `<td>` or `<th>` element specifies the number of columns a cell should span."
        },
        {
            question: "Which attribute can be used to make a cell span multiple rows?",
            options: ["rowspan", "span", "row-span", "merge-rows"],
            correctAnswer: 0,
            explanation: "The `rowspan` attribute on a `<td>` or `<th>` element specifies the number of rows a cell should span."
        }
    ],
    'html-lists': [
        {
            question: "Which tag is used to create an unordered (bulleted) list?",
            options: ["<ol>", "<li>", "<dl>", "<ul>"],
            correctAnswer: 3,
            explanation: "The `<ul>` tag stands for 'unordered list' and is used to create a list of items where the order does not matter."
        },
        {
            question: "Which tag is used to create an ordered (numbered) list?",
            options: ["<ol>", "<li>", "<list>", "<ul>"],
            correctAnswer: 0,
            explanation: "The `<ol>` tag stands for 'ordered list' and is used to create a list of items where the order is important."
        },
        {
            question: "What tag is used to define an individual item within any list?",
            options: ["<item>", "<li>", "<dd>", "<dt>"],
            correctAnswer: 1,
            explanation: "The `<li>` tag stands for 'list item' and is used to define each item within `<ul>`, `<ol>`, and `<menu>` lists."
        },
        {
            question: "What type of list is created with the `<dl>` tag?",
            options: ["Detail List", "Dynamic List", "Definition List", "Data List"],
            correctAnswer: 2,
            explanation: "The `<dl>` tag creates a definition list (or description list), which consists of pairs of terms (`<dt>`) and their descriptions (`<dd>`)."
        },
        {
            question: "Can you nest lists inside of other lists?",
            options: ["No, it's invalid HTML", "Yes, but only two levels deep", "Yes, you can create hierarchical lists by nesting them", "Only `<ul>` can be nested in `<ol>`"],
            correctAnswer: 2,
            explanation: "HTML allows you to nest lists to create sub-lists and hierarchical structures, for example, by placing a `<ul>` inside an `<li>` element."
        }
    ],
    'html-block-and-inline': [
        {
            question: "Which of the following is a characteristic of a block-level element?",
            options: ["It flows within the text and does not start on a new line.", "It always starts on a new line and takes up the full width available.", "It must be placed inside an inline element.", "It cannot have a margin or padding."],
            correctAnswer: 1,
            explanation: "Block-level elements, like `<div>` or `<p>`, always begin on a new line and stretch to fill the width of their container."
        },
        {
            question: "Which of the following is an example of an inline element?",
            options: ["<div>", "<h1>", "<span>", "<p>"],
            correctAnswer: 2,
            explanation: "The `<span>` tag is a generic inline container that does not start on a new line and only takes up as much width as necessary."
        },
        {
            question: "Can you set a `width` and `height` on an inline element like `<span>`?",
            options: ["Yes, without any issues", "No, `width` and `height` properties have no effect on non-replaced inline elements", "Only if you also set `display: inline`", "Yes, but only in percentage values"],
            correctAnswer: 1,
            explanation: "For an element with `display: inline`, the `width` and `height` properties do not apply. To set these, you would need to change its display property, for example to `inline-block` or `block`."
        },
        {
            question: "Which element is commonly used as a generic container for block-level content?",
            options: ["<span>", "<div>", "<p>", "<a>"],
            correctAnswer: 1,
            explanation: "The `<div>` element is the primary block-level container used for grouping other elements and for layout purposes."
        },
        {
            question: "What is the key difference between `display: inline` and `display: inline-block`?",
            options: ["There is no difference.", "`inline` elements can have margins, but `inline-block` cannot.", "`inline-block` allows you to set a `width` and `height`, while `inline` does not.", "`inline-block` elements start on a new line."],
            correctAnswer: 2,
            explanation: "`inline-block` is a hybrid: it flows like an inline element (doesn't start on a new line) but you can set width, height, and vertical margins/padding like a block element."
        }
    ],
    'html-classes-and-id': [
        {
            question: "How many times can a specific ID be used in an HTML document?",
            options: ["As many times as you want", "Once per section", "Only once", "Twice"],
            correctAnswer: 2,
            explanation: "An `id` must be unique within the entire HTML document. It's a strict rule to ensure it can be reliably targeted by CSS and JavaScript."
        },
        {
            question: "How many times can a specific class be used in an HTML document?",
            options: ["Only once", "As many times as you want", "Once per element", "Ten times max"],
            correctAnswer: 1,
            explanation: "A class is designed to be reusable. You can apply the same class to many elements to give them all the same styling."
        },
        {
            question: "Which character is used to select an element with a specific ID in CSS?",
            options: [". (dot)", "# (hash)", "> (greater than)", "* (asterisk)"],
            correctAnswer: 1,
            explanation: "The hash (`#`) symbol is used in CSS to select an element by its `id` attribute, for example, `#main-content`."
        },
        {
            question: "Which character is used to select elements with a specific class in CSS?",
            options: [". (dot)", "# (hash)", ": (colon)", "& (ampersand)"],
            correctAnswer: 0,
            explanation: "The dot (`.`) symbol is used in CSS to select all elements that have a specific `class` attribute, for example, `.btn-primary`."
        },
        {
            question: "Can an HTML element have multiple classes?",
            options: ["No, only one class is allowed", "Yes, separated by commas", "Yes, separated by spaces", "Yes, but only two"],
            correctAnswer: 2,
            explanation: "You can assign multiple classes to an element by listing them in the `class` attribute, separated by spaces, like `class='btn btn-large'`."
        }
    ],
    'html-iframes': [
        {
            question: "What is the primary purpose of an `<iframe>`?",
            options: ["To display an image", "To embed another HTML document within the current one", "To create a form", "To play a video file"],
            correctAnswer: 1,
            explanation: "An iframe, or Inline Frame, is used to embed content from another source, such as another webpage, into the current HTML document."
        },
        {
            question: "Which attribute specifies the URL of the document to embed in an iframe?",
            options: ["href", "link", "src", "url"],
            correctAnswer: 2,
            explanation: "The `src` (source) attribute is used to specify the path to the HTML document that you want to embed."
        },
        {
            question: "What is a security risk associated with iframes?",
            options: ["They can slow down your website", "They can be used for clickjacking attacks if not properly secured", "They don't work on mobile devices", "They require a special browser plugin"],
            correctAnswer: 1,
            explanation: "Clickjacking is a technique where an attacker tricks a user into clicking on something different from what the user perceives, often by using a transparent iframe. Using security attributes can help prevent this."
        },
        {
            question: "How can you remove the border that appears around an iframe by default?",
            options: ["<iframe border='0'>", "Using the CSS property `border: none;`", "<iframe noborder>", "It's not possible to remove the border"],
            correctAnswer: 1,
            explanation: "The recommended way to control the appearance of an iframe, including its border, is with CSS. The `frameborder='0'` attribute is deprecated."
        },
        {
            question: "What does the `sandbox` attribute do for an iframe?",
            options: ["It gives the iframe a sandy background color", "It enables extra permissions for the iframe", "It applies a set of security restrictions to the iframe's content", "It makes the iframe responsive"],
            correctAnswer: 2,
            explanation: "The `sandbox` attribute enables a set of restrictions for the content in the iframe, such as blocking scripts and form submissions, to improve security."
        }
    ],
    'html-forms': [
        {
            question: "Which tag is used to create an HTML form?",
            options: ["<form>", "<input>", "<formsheet>", "<fieldset>"],
            correctAnswer: 0,
            explanation: "The `<form>` element is the container for all form elements and defines the form itself."
        },
        {
            question: "Which `input` type is used for a text field?",
            options: ["type='textfield'", "type='text'", "type='string'", "type='line'"],
            correctAnswer: 1,
            explanation: "`<input type='text'>` creates a single-line text input field."
        },
        {
            question: "What does the `action` attribute of a form specify?",
            options: ["The type of action to perform (e.g., submit)", "The script or URL where the form data should be sent", "The HTTP method to use (GET or POST)", "The name of the form"],
            correctAnswer: 1,
            explanation: "The `action` attribute defines the location (URL) where the form's collected data should be sent for processing when the form is submitted."
        },
        {
            question: "What is the difference between the GET and POST methods?",
            options: ["GET is more secure than POST", "POST appends form data to the URL, GET does not", "GET requests can be cached and bookmarked, POST requests cannot", "There is no difference"],
            correctAnswer: 2,
            explanation: "GET appends the form data into the URL, which is visible to everyone and has size limits. POST sends the data in the HTTP request body, which is more secure for sensitive data and has no size limits."
        },
        {
            question: "Which element is used to create a submit button?",
            options: ["<input type='submit'>", "<button type='submit'>", "Either of the above", "Neither of the above"],
            correctAnswer: 2,
            explanation: "Both `<input type='submit' value='Submit'>` and `<button type='submit'>Submit</button>` can be used to create a button that submits the form."
        }
    ],
    'html-form-elements': [
        {
            question: "Which element is used to create a drop-down list?",
            options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
            correctAnswer: 2,
            explanation: "The `<select>` element is used to create a drop-down list, with each item in the list defined by an `<option>` tag."
        },
        {
            question: "What is the purpose of the `<label>` element?",
            options: ["To provide a caption for a `<fieldset>`", "To style the form", "To associate a text label with a form control, improving accessibility", "To create a large text input area"],
            correctAnswer: 2,
            explanation: "Using `<label>` and associating it with an input via the `for` attribute allows users to click the label to focus on the input and helps screen readers announce what the input is for."
        },
        {
            question: "Which input type allows for a single choice from multiple options?",
            options: ["type='checkbox'", "type='radio'", "type='select-one'", "type='option'"],
            correctAnswer: 1,
            explanation: "Radio buttons (`<input type='radio'>`), when grouped by the same `name` attribute, allow the user to select only one option from the group."
        },
        {
            question: "Which element is used for a multi-line text input?",
            options: ["<input type='textarea'>", "<input type='multiline'>", "<textarea>", "<text>"],
            correctAnswer: 2,
            explanation: "The `<textarea>` element provides a resizable box for multi-line text entry."
        },
        {
            question: "What does the `<fieldset>` element do?",
            options: ["It creates a set of fields for a database", "It groups related elements in a form, often drawing a box around them", "It disables all elements within it", "It is a replacement for the `<form>` tag"],
            correctAnswer: 1,
            explanation: "A `<fieldset>` is used to group related controls within a form, and it can be given a caption using the `<legend>` element."
        }
    ],
    'html-head': [
        {
            question: "Is the content inside the `<head>` element visible on the web page?",
            options: ["Yes, at the top of the page", "No, it contains metadata and links to resources", "Only the `<title>` is visible", "Yes, but it is hidden by default"],
            correctAnswer: 1,
            explanation: "The `<head>` section contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets, not visible content."
        },
        {
            question: "What is the purpose of the `<title>` tag?",
            options: ["To set the main heading of the webpage", "To define the title of the document, shown in the browser's title bar or tab", "To link to a title image", "To create a title attribute for the body"],
            correctAnswer: 1,
            explanation: "The `<title>` tag is required in all HTML documents and defines the text that appears in the browser tab and in search engine results."
        },
        {
            question: "Which tag is used to link an external CSS file?",
            options: ["<style>", "<script>", "<meta>", "<link>"],
            correctAnswer: 3,
            explanation: "The `<link>` tag with `rel='stylesheet'` is used inside the `<head>` section to link to an external stylesheet."
        },
        {
            question: "What does the `<meta charset='UTF-8'>` tag do?",
            options: ["It sets the character set for the document to Unicode, which supports most characters", "It defines the author of the document", "It sets the page to refresh every 8 seconds", "It makes the website compatible with older browsers"],
            correctAnswer: 0,
            explanation: "`UTF-8` is a universal character encoding that can handle most characters and symbols, and it's the recommended character set for web pages."
        },
        {
            question: "What is the purpose of the `<meta name='viewport'>` tag?",
            options: ["To set the total size of the webpage", "To control the layout on mobile browsers, setting the width and initial scale", "To define a port for viewing the website", "To set the background color of the viewport"],
            correctAnswer: 1,
            explanation: "The viewport meta tag is crucial for responsive design, as it tells the browser how to control the page's dimensions and scaling."
        }
    ],
    'html-layout-elements': [
        {
            question: "Which HTML5 element is intended to contain the main content of a document?",
            options: ["<section>", "<main>", "<article>", "<content>"],
            correctAnswer: 1,
            explanation: "The `<main>` element should contain the dominant content of the `<body>` of a document. There should only be one `<main>` element per page."
        },
        {
            question: "Which element is used for a group of navigational links?",
            options: ["<navigation>", "<links>", "<menu>", "<nav>"],
            correctAnswer: 3,
            explanation: "The `<nav>` element is designed specifically to contain navigation sections, such as menus, tables of contents, or indexes."
        },
        {
            question: "What is the semantic purpose of the `<article>` element?",
            options: ["To contain any piece of text", "To define a self-contained composition that could be distributed independently", "To style a section of the page", "To hold a list of articles"],
            correctAnswer: 1,
            explanation: "An `<article>` should make sense on its own, and it should be possible to distribute it independently from the rest of the site. Examples: a forum post, a blog entry, a news story."
        },
        {
            question: "The `<aside>` element is used for content that is...",
            options: ["The most important content on the page", "Directly related to the main content", "Tangentially related to the content around it, like a sidebar or pull quote", "Hidden from the user"],
            correctAnswer: 2,
            explanation: "The `<aside>` element represents a portion of a document whose content is only indirectly related to the document's main content, like sidebars or advertising."
        },
        {
            question: "Which elements are appropriate for the top and bottom of a webpage?",
            options: ["<top> and <bottom>", "<start> and <end>", "<header> and <footer>", "<head> and <foot>"],
            correctAnswer: 2,
            explanation: "The `<header>` element typically contains introductory content or navigational links, while the `<footer>` element typically contains authorship information, copyright data, or links to related documents."
        }
    ],
    'html-responsive': [
        {
            question: "What is the primary goal of Responsive Web Design?",
            options: ["To make websites load faster", "To make websites accessible to people with disabilities", "To make websites look good on all devices and screen sizes", "To make websites more secure"],
            correctAnswer: 2,
            explanation: "Responsive Web Design is an approach that makes web pages render well on a variety of devices and window or screen sizes from desktops to mobile phones."
        },
        {
            question: "Which HTML tag is essential for enabling responsive design?",
            options: ["<meta name='viewport'>", "<meta name='responsive'>", "<style>", "<responsive>"],
            correctAnswer: 0,
            explanation: "The `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` tag gives the browser instructions on how to control the page's dimensions and scaling."
        },
        {
            question: "What CSS technology is the cornerstone of responsive design layouts?",
            options: ["Floats", "Tables", "Media Queries", "Inline Styles"],
            correctAnswer: 2,
            explanation: "Media queries allow you to apply different CSS styles based on the characteristics of the device, such as its width, height, or orientation."
        },
        {
            question: "What does a 'mobile-first' approach to responsive design mean?",
            options: ["Designing the mobile layout before the desktop layout", "Ignoring the desktop layout completely", "Making the mobile site have more features", "Using a separate URL for the mobile site"],
            correctAnswer: 0,
            explanation: "'Mobile-first' means designing for the smallest screen first and then adding more features and more complex layouts for larger screens. It's a common and effective strategy."
        },
        {
            question: "What is a 'fluid grid' in responsive design?",
            options: ["A grid that uses pixels for all measurements", "A grid that animates like a fluid", "A grid layout that uses relative units like percentages instead of fixed units like pixels", "A grid that only works for liquid-related websites"],
            correctAnswer: 2,
            explanation: "A fluid grid uses relative sizing, allowing the layout to stretch or shrink with the screen size, which is a key component of responsive design."
        }
    ],
    'html-semantic-elements': [
        {
            question: "Which of the following is NOT an HTML5 semantic element?",
            options: ["<article>", "<footer>", "<div>", "<nav>"],
            correctAnswer: 2,
            explanation: "`<div>` is a generic container with no semantic meaning, whereas `<article>`, `<footer>`, and `<nav>` clearly describe their content."
        },
        {
            question: "What is the main advantage of using semantic elements?",
            options: ["They automatically style your content", "They make the HTML shorter", "They provide clear meaning to both the browser and the developer, improving accessibility and SEO", "They are the only way to structure a page"],
            correctAnswer: 2,
            explanation: "Semantic tags like `<header>`, `<main>`, and `<article>` describe the role of their content, which helps screen readers and search engines understand your page structure."
        },
        {
            question: "Which element is used to group a figure (like an image) with a caption?",
            options: ["<group>", "<figure>", "<div>", "<image>"],
            correctAnswer: 1,
            explanation: "The `<figure>` element is used to enclose a self-contained piece of content (like an image, diagram, or code snippet), which can then be captioned using `<figcaption>`."
        },
        {
            question: "The `<time>` element is used for what purpose?",
            options: ["To display a clock", "To specify a date or time in a machine-readable format", "To time how long a user is on a page", "To set a timer for a quiz"],
            correctAnswer: 1,
            explanation: "The `<time>` element allows you to encode dates and times in a way that browsers and search engines can understand, for example: `<time datetime='2024-12-25'>Christmas</time>`."
        },
        {
            question: "When should you use `<section>` vs `<article>`?",
            options: ["They are interchangeable", "`<article>` is for blog posts, `<section>` is for everything else", "`<article>` is self-contained content, `<section>` is a thematic grouping of content", "`<section>` is for sidebars, `<article>` is for main content"],
            correctAnswer: 2,
            explanation: "An `<article>` should be independently distributable (like a blog post). A `<section>` is a broader grouping of related content that isn't necessarily self-contained."
        }
    ],
    'html-multimedia': [
        {
            question: "Which tag is used to embed a video in HTML5?",
            options: ["<media>", "<movie>", "<video>", "<embed>"],
            correctAnswer: 2,
            explanation: "The `<video>` element is the HTML5 standard for embedding video content."
        },
        {
            question: "Which tag is used to embed audio in HTML5?",
            options: ["<audio>", "<sound>", "<mp3>", "<music>"],
            correctAnswer: 0,
            explanation: "The `<audio>` element is the HTML5 standard for embedding sound content."
        },
        {
            question: "What does the `controls` attribute do for `<video>` and `<audio>` tags?",
            options: ["It enables remote control of the media", "It shows the file size and other metadata", "It displays the default browser controls like play, pause, and volume", "It controls the playback speed"],
            correctAnswer: 2,
            explanation: "Adding the boolean `controls` attribute will include the browser's default user interface for controlling the media playback."
        },
        {
            question: "Why would you use multiple `<source>` tags inside a `<video>` element?",
            options: ["To provide multiple camera angles", "To offer the same video in different file formats for better browser compatibility", "To create a playlist", "To provide different language tracks"],
            correctAnswer: 1,
            explanation: "Since not all browsers support the same video formats, you can provide multiple `<source>` elements, and the browser will use the first one it supports."
        },
        {
            question: "What is the purpose of the `autoplay` attribute?",
            options: ["It automatically plays the media as soon as it is ready", "It opens the media in a separate player", "It sets the audio track to auto-tune", "It's for analytics"],
            correctAnswer: 0,
            explanation: "The `autoplay` attribute, if present, will cause the video or audio to start playing automatically. Note that most modern browsers block autoplay for media with sound."
        }
    ],
    'html-apis': [
        {
            question: "Which API is used to get the user's geographical location?",
            options: ["Location API", "Map API", "Geolocation API", "Position API"],
            correctAnswer: 2,
            explanation: "The Geolocation API, accessed via `navigator.geolocation`, allows the user to share their location with web applications."
        },
        {
            question: "What is the main purpose of the Web Storage API (`localStorage` and `sessionStorage`)?",
            options: ["To store data on the server", "To store key-value pairs locally in the user's browser", "To stream large files", "To make API requests"],
            correctAnswer: 1,
            explanation: "Web Storage provides a way for web applications to store data persistently in the browser, which is more modern and flexible than cookies."
        },
        {
            question: "What is the difference between `localStorage` and `sessionStorage`?",
            options: ["`localStorage` is more secure", "`sessionStorage` can store more data", "`localStorage` data persists after the browser is closed, while `sessionStorage` data is cleared", "There is no difference"],
            correctAnswer: 2,
            explanation: "`sessionStorage` maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores)."
        },
        {
            question: "Which API allows you to make elements on a webpage draggable and droppable?",
            options: ["Move API", "Drag and Drop API", "UI API", "Element API"],
            correctAnswer: 1,
            explanation: "The HTML Drag and Drop API allows you to add drag-and-drop functionality to your web application by listening to various drag and drop events."
        },
        {
            question: "The History API (`history.pushState()`) allows you to do what?",
            options: ["View the user's complete browser history", "Manipulate the browser session history, for example, to change the URL without a full page reload", "Go back to the previous page", "Clear the browser history"],
            correctAnswer: 1,
            explanation: "The History API is fundamental to how single-page applications (SPAs) handle routing, allowing them to change the URL in the address bar without triggering a server request."
        }
    ],
    'html-graphics': [
        {
            question: "Which HTML element is used for drawing graphics via JavaScript?",
            options: ["<svg>", "<canvas>", "<graphics>", "<draw>"],
            correctAnswer: 1,
            explanation: "The `<canvas>` element provides a bitmap surface to draw graphics on the fly using JavaScript."
        },
        {
            question: "What does SVG stand for?",
            options: ["Standard Vector Graphics", "Scalable Vector Graphics", "Simple Vector Graphics", "Styled Vector Graphics"],
            correctAnswer: 1,
            explanation: "SVG stands for Scalable Vector Graphics, and it's an XML-based format for defining vector-based graphics for the Web."
        },
        {
            question: "What is the main advantage of SVG over Canvas?",
            options: ["SVG is better for games and animations", "SVG is drawn with JavaScript", "SVG is resolution-independent and scalable without losing quality", "SVG files are larger"],
            correctAnswer: 2,
            explanation: "Since SVG is based on vectors (mathematical shapes), it can be scaled to any size without becoming pixelated, making it ideal for logos and icons."
        },
        {
            question: "What is the main advantage of Canvas over SVG?",
            options: ["Canvas is better for static images like logos", "Canvas is better suited for dynamic, high-performance animations, games, and visualizations with many objects", "Canvas is easier to explore", "Canvas graphics are indexed by search engines"],
            correctAnswer: 1,
            explanation: "Canvas provides a 'fire-and-forget' drawing surface that can be faster for rendering thousands of objects, which is why it's often used for games and complex visualizations."
        },
        {
            question: "How do you draw a rectangle on a `<canvas>` element?",
            options: ["With CSS", "With the `<rect>` tag inside `<canvas>`", "Using JavaScript to get the 2D rendering context and calling methods like `fillRect()`", "By setting attributes on the canvas tag"],
            correctAnswer: 2,
            explanation: "You must use JavaScript to interact with a canvas. First, you get its 2D context, then you use drawing methods like `fillRect(x, y, width, height)`."
        }
    ],
    'html-web-storage': [
        {
            question: "Which Web Storage object stores data with no expiration date?",
            options: ["sessionStorage", "globalStorage", "localStorage", "cookieStorage"],
            correctAnswer: 2,
            explanation: "`localStorage` allows you to store key-value pairs in a web browser, and the data persists even after the browser window is closed."
        },
        {
            question: "Which Web Storage object stores data for only one session?",
            options: ["sessionStorage", "tempStorage", "localStorage", "pageStorage"],
            correctAnswer: 0,
            explanation: "`sessionStorage` stores data only for a session, meaning that the data is stored until the browser (or tab) is closed."
        },
        {
            question: "How do you save an item to `localStorage`?",
            options: ["localStorage.add('key', 'value')", "localStorage.setItem('key', 'value')", "localStorage.save('key', 'value')", "localStorage.write('key', 'value')"],
            correctAnswer: 1,
            explanation: "The `setItem()` method is used to add or update a key-value pair in the localStorage object."
        },
        {
            question: "How do you retrieve an item from `localStorage`?",
            options: ["localStorage.getItem('key')", "localStorage.retrieve('key')", "localStorage.get('key')", "localStorage.read('key')"],
            correctAnswer: 0,
            explanation: "The `getItem()` method is used to retrieve the value associated with a given key from localStorage."
        },
        {
            question: "What type of data is stored in Web Storage?",
            options: ["Only numbers", "JavaScript objects directly", "Only strings (but other data can be stringified)", "Encrypted data only"],
            correctAnswer: 2,
            explanation: "The Web Storage API stores data as strings. If you want to store a JavaScript object, you must first convert it to a string using `JSON.stringify()`."
        }
    ],
    'html-web-workers': [
        {
            question: "What is the primary purpose of a Web Worker?",
            options: ["To style the webpage", "To store data locally", "To run a script in a background thread, separate from the main execution thread", "To make API requests"],
            correctAnswer: 2,
            explanation: "Web Workers allow for long-running scripts to be executed in the background without blocking the user interface and making the page unresponsive."
        },
        {
            question: "How does the main script communicate with a Web Worker?",
            options: ["By directly calling its functions", "By using `postMessage()` and listening for `onmessage` events", "By modifying shared variables", "It cannot communicate directly"],
            correctAnswer: 1,
            explanation: "Communication between the main page and a worker is done via an event model. Both sides use the `postMessage()` method to send messages, and respond to messages via the `onmessage` event handler."
        },
        {
            question: "Can a Web Worker access the DOM?",
            options: ["Yes, it has full access", "No, workers cannot directly access the `document` object or other window objects", "Only to read from it, not write to it", "Yes, but only with special permissions"],
            correctAnswer: 1,
            explanation: "Web Workers run in a different global context than the window, so they do not have access to the DOM. This is a key part of their design to prevent race conditions and UI blocking."
        },
        {
            question: "How do you create a new Web Worker?",
            options: ["`const worker = new WebWorker('script.js');`", "`const worker = createWorker('script.js');`", "`const worker = new Worker('script.js');`", "`const worker = new BackgroundScript('script.js');`"],
            correctAnswer: 2,
            explanation: "The `Worker()` constructor is used to create a new worker, and its argument is the URL of the script to be executed in the worker thread."
        },
        {
            question: "What kind of tasks are suitable for a Web Worker?",
            options: ["Quick UI updates", "Handling click events", "Complex calculations, processing large amounts of data, or other long-running tasks", "Styling elements"],
            correctAnswer: 2,
            explanation: "Any task that is computationally intensive and would otherwise freeze the user interface is a good candidate to be offloaded to a Web Worker."
        }
    ],
    'html-accessibility': [
        {
            question: "What does 'A11y' stand for?",
            options: ["A-eleven-y", "Accessibility", "Automated-eleven-Yankee", "It's a typo"],
            correctAnswer: 1,
            explanation: "A11y is a numeronym for 'accessibility', with '11' representing the eleven letters between 'a' and 'y'."
        },
        {
            question: "What is the purpose of the `alt` attribute on an `<img>` tag in the context of accessibility?",
            options: ["It provides a title tooltip for the image", "It provides a textual alternative for screen readers when an image cannot be seen", "It's used by search engines to categorize the image", "It helps the image load faster"],
            correctAnswer: 1,
            explanation: "The `alt` text is read aloud by screen readers, allowing users with visual impairments to understand the content and purpose of the image."
        },
        {
            question: "What does ARIA stand for?",
            options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Architecture", "Accessible Reading and Interaction Attributes", "Automated Reader and Interface Actions"],
            correctAnswer: 0,
            explanation: "ARIA is a set of attributes you can add to HTML elements to increase their accessibility by providing more information about their role, state, and properties."
        },
        {
            question: "Why is it important to use semantic HTML elements like `<nav>`, `<main>`, and `<button>`?",
            options: ["They have better default styling", "They provide built-in accessibility features and define the structure for screen readers", "They are required for JavaScript to work", "They improve website performance"],
            correctAnswer: 1,
            explanation: "Semantic elements have roles and behaviors built-in. For example, a `<button>` is naturally focusable and can be activated with a keyboard, which is not true for a `<div>` styled to look like a button."
        },
        {
            question: "Which of the following helps create accessible forms?",
            options: ["Using `<table>` for layout", "Using the `<label>` element and associating it with form inputs", "Using only `<div>` and `<span>` tags", "Removing all default styling"],
            correctAnswer: 1,
            explanation: "Properly using `<label>` with the `for` attribute programmatically links the label text to its corresponding input, which is crucial for screen reader users."
        }
    ],
    'html-best-practices': [
        {
            question: "Why is it a good practice to declare the `<!DOCTYPE html>` at the beginning of your document?",
            options: ["It's a comment for developers", "It tells the browser which version of HTML to use and puts it in 'standards mode'", "It loads the HTML5 library", "It's not necessary in modern HTML"],
            correctAnswer: 1,
            explanation: "The doctype declaration ensures the browser renders the page correctly according to modern web standards, preventing 'quirks mode' which can cause layout inconsistencies."
        },
        {
            question: "What is the benefit of validating your HTML code?",
            options: ["It automatically fixes all errors", "It can help you find and fix syntax errors and non-standard code", "It guarantees your website will look the same in all browsers", "It makes your website load faster"],
            correctAnswer: 1,
            explanation: "Using a validator (like the W3C Markup Validation Service) helps catch errors like unclosed tags or improper nesting, which can cause rendering issues."
        },
        {
            question: "Why should you avoid using tables for page layout?",
            options: ["Tables are not supported in HTML5", "Tables make the content less accessible and are not flexible for responsive design", "Tables are slower to render than CSS", "Tables cannot be styled with CSS"],
            correctAnswer: 1,
            explanation: "Tables should be used for tabular data. For page layout, CSS Flexbox and Grid are far more powerful, flexible, and accessible."
        },
        {
            question: "When writing HTML, what is a good practice regarding comments?",
            options: ["Use comments to hide large sections of content you don't want users to see", "Never use comments", "Use comments to explain complex or non-obvious parts of your code", "Write a comment for every single line of code"],
            correctAnswer: 2,
            explanation: "Good comments clarify the 'why' behind your code, not just the 'what'. They should help other developers (and your future self) understand your implementation."
        },
        {
            question: "Why is separating HTML structure from CSS presentation considered a best practice?",
            options: ["It's not a best practice", "It makes the website more secure", "It improves maintainability, reusability, and accessibility", "It's required by the W3C"],
            correctAnswer: 2,
            explanation: "Separation of Concerns (HTML for content, CSS for style, JS for behavior) makes the codebase cleaner, easier to update, and allows different team members to work on different parts of the project more easily."
        }
    ]
  },
  css: {
    'css-introduction': [
      {
        question: 'What does CSS stand for?',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        correctAnswer: 1,
        explanation: 'CSS stands for Cascading Style Sheets, and it is used to style and lay out web pages.'
      },
      {
        question: 'What is the correct HTML for referring to an external style sheet?',
        options: ['<stylesheet>mystyle.css</stylesheet>', '<style src="mystyle.css">', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<style link="mystyle.css">'],
        correctAnswer: 2,
        explanation: 'The `<link>` tag is used to link to external style sheets, with the `rel` attribute set to "stylesheet" and `href` pointing to the CSS file.'
      },
       {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        options: ['In the <body> section', 'At the end of the document', 'In the <head> section', 'In the <footer> section'],
        correctAnswer: 2,
        explanation: 'External style sheets should be linked within the `<head>` section of the HTML document to ensure styles are loaded before the content is rendered.'
      },
       {
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<css>', '<script>', '<style>', '<link>'],
        correctAnswer: 2,
        explanation: 'The `<style>` tag is used to embed CSS directly within an HTML document, usually inside the `<head>` section.'
      },
      {
        question: 'Which HTML attribute is used to define inline styles?',
        options: ['style', 'class', 'styles', 'font'],
        correctAnswer: 0,
        explanation: 'The `style` attribute is used to apply CSS declarations directly to a single HTML element.'
      },
    ],
    'css-syntax': [
      {
        question: 'Which property is used to change the background color?',
        options: ['color', 'bgcolor', 'background-color', 'background'],
        correctAnswer: 2,
        explanation: 'The `background-color` property specifically sets the background color of an element.'
      },
      {
        question: 'How do you add a background color for all <h1> elements?',
        options: ['h1 {background-color:#FFFFFF;}', 'all.h1 {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'h1 {bgcolor:#FFFFFF;}'],
        correctAnswer: 0,
        explanation: 'You use the element selector `h1` followed by a declaration block `{}` containing the `background-color` property and its value.'
      },
       {
        question: 'Which CSS property is used to change the text color of an element?',
        options: ['fgcolor', 'text-color', 'font-color', 'color'],
        correctAnswer: 3,
        explanation: 'The `color` property is used to set the color of the text content of an element.'
      },
      {
        question: 'Which property is used to change the font of an element?',
        options: ['font-family', 'font-style', 'font-weight', 'font'],
        correctAnswer: 0,
        explanation: 'The `font-family` property is used to specify a prioritized list of fonts to be used to render an element.'
      },
      {
        question: 'How do you make the text bold?',
        options: ['font-weight:bold;', 'font:bold;', 'style:bold;', 'text-style:bold;'],
        correctAnswer: 0,
        explanation: 'The `font-weight` property is used to set the weight (or boldness) of the font.'
      },
    ],
    'css-flexbox': [
        {
            question: 'Which is the correct way to make a container a flex container?',
            options: ['display: flexbox;', 'display: flex;', 'flex: true;', 'container: flex;'],
            correctAnswer: 1,
            explanation: 'To create a flex container, you need to set the `display` property of the container element to `flex` or `inline-flex`.'
        },
        {
            question: 'The `justify-content` property aligns flex items along which axis?',
            options: ['The cross axis', 'The main axis', 'The vertical axis', 'The z-axis'],
            correctAnswer: 1,
            explanation: '`justify-content` is used to align flex items along the main axis of the flex container (which is horizontal, by default).'
        },
        {
            question: 'Which `align-items` value will stretch the flex items to fill the container\'s height (cross axis)?',
            options: ['stretch', 'center', 'flex-start', 'baseline'],
            correctAnswer: 0,
            explanation: '`align-items: stretch;` is the default value, and it causes items to stretch to fill the container along the cross axis.'
        },
        {
            question: 'How do you change the direction of the main axis to be vertical?',
            options: ['`flex-flow: vertical;`', '`main-axis: vertical;`', '`flex-direction: column;`', '`direction: column;`'],
            correctAnswer: 2,
            explanation: 'The `flex-direction` property defines the direction of the main axis. Setting it to `column` stacks the flex items vertically.'
        },
        {
            question: 'What does the `flex-wrap: wrap;` property do?',
            options: ['It wraps text inside the flex items.', 'It allows flex items to wrap onto multiple lines if they run out of space.', 'It adds a decorative wrapper around the items.', 'It reverses the order of the items.'],
            correctAnswer: 1,
            explanation: 'By default, flex items try to fit onto one line. `flex-wrap: wrap;` allows the items to wrap onto additional lines if needed.'
        }
    ],
    'css-selectors': [
        {
            question: "Which selector targets an element with the id 'header'?",
            options: [".header", "#header", "header", "*header"],
            correctAnswer: 1,
            explanation: "The hash (#) symbol is used to select an element by its unique ID."
        },
        {
            question: "How do you select all <p> elements inside a <div> element?",
            options: ["div + p", "div p", "div > p", "div.p"],
            correctAnswer: 1,
            explanation: "The descendant selector (space) selects all elements that are descendants of a specified element."
        },
        {
            question: "What does the selector `p.intro` target?",
            options: ["All <p> elements and all elements with class 'intro'", "The first <p> element with class 'intro'", "All <p> elements with the class 'intro'", "All elements inside a <p> with class 'intro'"],
            correctAnswer: 2,
            explanation: "This selector targets only `<p>` elements that also have the class `intro`."
        },
        {
            question: "How do you select an element that is being hovered over by the mouse?",
            options: [":hover", ":active", ":focus", ":visited"],
            correctAnswer: 0,
            explanation: "The `:hover` pseudo-class is used to apply styles to an element when the user's mouse pointer is over it."
        },
        {
            question: "Which selector targets every HTML element on the page?",
            options: ["body", "html", "*", ":all"],
            correctAnswer: 2,
            explanation: "The universal selector (*) targets all elements."
        }
    ],
    'css-how-to': [
        {
            question: "Which is the preferred method for adding CSS to a large website?",
            options: ["Inline styles", "Internal stylesheet", "External stylesheet", "JavaScript"],
            correctAnswer: 2,
            explanation: "External stylesheets are the best practice as they allow you to separate content (HTML) from presentation (CSS) and reuse styles across multiple pages."
        },
        {
            question: "Where in an HTML document should you place a `<link>` tag for an external stylesheet?",
            options: ["In the `<body>` section", "After the `</html>` tag", "In the `<head>` section", "Inside the `<footer>`"],
            correctAnswer: 2,
            explanation: "For best performance and to prevent unstyled content from flashing, `<link>` tags for CSS should always be placed within the `<head>`."
        },
        {
            question: "What is the correct syntax for an inline style?",
            options: ["<p style='color:blue;'>", "<p css='color:blue;'>", "<p style='color=blue'>", "<p> {color:blue;} </p>"],
            correctAnswer: 0,
            explanation: "Inline styles are applied using the `style` attribute, with CSS properties and values written inside the string."
        },
        {
            question: "An internal stylesheet is defined within which HTML element?",
            options: ["<css>", "<stylesheet>", "<script>", "<style>"],
            correctAnswer: 3,
            explanation: "CSS rules for an internal stylesheet are placed inside a `<style>` tag, which typically goes in the `<head>` of the document."
        },
        {
            question: "What does 'Cascading' in Cascading Style Sheets mean?",
            options: ["Styles fall down from the top of the file to the bottom", "It refers to a waterfall-like effect", "It's a system of rules that determines which style applies if multiple rules target the same element", "It means styles are loaded in a cascade"],
            correctAnswer: 2,
            explanation: "The 'cascade' is the algorithm that browsers use to resolve conflicting style declarations. It considers specificity, inheritance, and source order."
        }
    ],
    'css-comments': [
        {
            question: "How do you write a comment in CSS?",
            options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "# this is a comment"],
            correctAnswer: 2,
            explanation: "CSS comments start with `/*` and end with `*/`. They can span multiple lines."
        },
        {
            question: "Can CSS comments be nested?",
            options: ["Yes, without any issues", "No, the first `*/` will close the entire comment block", "Only in Sass or Less", "Yes, but only single-line comments can be nested"],
            correctAnswer: 1,
            explanation: "Standard CSS does not support nested comments. The first closing `*/` sequence encountered will end the comment, which can lead to syntax errors if you try to nest them."
        },
        {
            question: "What is a common use for comments in CSS?",
            options: ["To hide CSS from older browsers", "To create variables", "To temporarily disable a block of code for debugging", "To add images"],
            correctAnswer: 2,
            explanation: "Commenting out CSS rules is a quick and effective way to test how removing certain styles affects a layout without permanently deleting the code."
        },
        {
            question: "Are CSS comments visible to the end-user?",
            options: ["Yes, they are rendered on the page", "No, the browser ignores them", "Only if the user has a special browser extension", "Yes, but they are invisible"],
            correctAnswer: 1,
            explanation: "Comments are for developers. The browser's rendering engine completely ignores them, but anyone who inspects the CSS source file can see them."
        },
        {
            question: "Which of the following is a valid single-line CSS comment?",
            options: ["// color: red;", "/* color: red; */", "<!-- color: red; -->", "' color: red;"],
            correctAnswer: 1,
            explanation: "Both single-line and multi-line comments in CSS use the `/* ... */` syntax."
        }
    ],
    'css-colors': [
        {
            question: "Which of these is a valid way to specify the color red in CSS?",
            options: ["`color: red;`", "`color: #FF0000;`", "`color: rgb(255, 0, 0);`", "All of the above"],
            correctAnswer: 3,
            explanation: "CSS provides multiple ways to define colors, including keywords, hexadecimal codes, and RGB functional notation. All three options are valid for red."
        },
        {
            question: "In a HEX color code like `#RRGGBB`, what does `FF` represent?",
            options: ["The lowest value (0)", "The middle value (128)", "The highest value (255)", "A transparent value"],
            correctAnswer: 2,
            explanation: "Hexadecimal is a base-16 system. `00` is the lowest value (0), and `FF` is the highest value (255)."
        },
        {
            question: "What does the 'A' in `RGBA` and `HSLA` stand for?",
            options: ["Alpha", "Adjust", "Apple", "Aqua"],
            correctAnswer: 0,
            explanation: "The 'A' stands for Alpha, which represents the opacity of the color. A value of `1` is fully opaque, and `0` is fully transparent."
        },
        {
            question: "What does HSL stand for?",
            options: ["Hue, Saturation, Lightness", "Height, Saturation, Luminosity", "Hue, Shade, Lightness", "Hex, Saturation, Luminosity"],
            correctAnswer: 0,
            explanation: "HSL is a way to represent colors based on their hue (the color itself, 0-360), saturation (intensity, 0-100%), and lightness (0-100%)."
        },
        {
            question: "How can you make a color 50% transparent?",
            options: ["`color: transparent(blue, 0.5);`", "`opacity: 0.5;`", "`color: rgba(0, 0, 255, 0.5);`", "Both B and C"],
            correctAnswer: 3,
            explanation: "You can set the opacity of the entire element with `opacity`, or set the transparency of just the color itself using `rgba()` or `hsla()`. Using `rgba`/`hsla` is often better as it doesn't make the element's content transparent."
        }
    ],
    'css-backgrounds': [
        {
            question: "Which property is used to set a background image?",
            options: ["`background-src`", "`background-image`", "`image`", "`src`"],
            correctAnswer: 1,
            explanation: "The `background-image` property is used to set one or more background images for an element. The value is typically `url('path/to/image.jpg')`."
        },
        {
            question: "How can you prevent a background image from repeating?",
            options: ["`background-repeat: no-repeat;`", "`background-repeat: none;`", "`background-tiling: false;`", "`repeat: false;`"],
            correctAnswer: 0,
            explanation: "The `background-repeat` property controls how a background image is repeated. `no-repeat` makes it display only once."
        },
        {
            question: "Which property controls the scrolling behavior of a background image?",
            options: ["`background-scroll`", "`background-attachment`", "`background-position`", "`background-style`"],
            correctAnswer: 1,
            explanation: "`background-attachment` determines if the background image scrolls with the rest of the page (`scroll`, the default) or is fixed relative to the viewport (`fixed`)."
        },
        {
            question: "What does `background-size: cover;` do?",
            options: ["It makes the image as small as possible.", "It scales the image to be as large as possible without stretching or cropping.", "It scales the image to completely cover the container, even if it means cropping the image.", "It makes the image a cover photo for the page."],
            correctAnswer: 2,
            explanation: "`cover` ensures the background image covers the entire container, potentially clipping parts of the image if the aspect ratios don't match."
        },
        {
            question: "Can you apply multiple background images to a single element?",
            options: ["No, only one is allowed.", "Yes, by separating the `url()` values with commas.", "Yes, by using multiple `background-image` properties.", "Only with CSS preprocessors."],
            correctAnswer: 1,
            explanation: "CSS allows for multiple background layers. You can specify multiple images by comma-separating their values in the `background-image` property."
        }
    ],
    'css-borders': [
        {
            question: "Which of these is the correct shorthand property for setting a border?",
            options: ["`border-style`", "`border`", "`border-width`", "`border-shorthand`"],
            correctAnswer: 1,
            explanation: "The `border` shorthand property allows you to set the `border-width`, `border-style`, and `border-color` in a single declaration."
        },
        {
            question: "How do you set a border style to be dotted?",
            options: ["`border-style: dotted;`", "`border-type: dotted;`", "`border: dotted;`", "`border-decoration: dotted;`"],
            correctAnswer: 0,
            explanation: "The `border-style` property is used to set the style of an element's four borders. 'dotted' is one of the valid values."
        },
        {
            question: "How can you set a different style for just the top border?",
            options: ["`top-border: 1px solid black;`", "`border: top 1px solid black;`", "`border-top: 1px solid black;`", "`border-top-style: 1px solid black;`"],
            correctAnswer: 2,
            explanation: "CSS provides longhand properties for each side, such as `border-top`, `border-right`, `border-bottom`, and `border-left`."
        },
        {
            question: "Which property is used to create rounded corners on a border?",
            options: ["`border-corner`", "`corner-radius`", "`border-radius`", "`rounded-corners`"],
            correctAnswer: 2,
            explanation: "The `border-radius` property is used to round the corners of an element's outer border edge."
        },
        {
            question: "To remove a border, what should you set `border-style` to?",
            options: ["`none` or `hidden`", "`remove`", "`0`", "`transparent`"],
            correctAnswer: 0,
            explanation: "Setting `border-style: none;` or `border-width: 0;` will effectively remove the border from an element."
        }
    ],
    'css-margins': [
        {
            question: "What is the purpose of the `margin` property in CSS?",
            options: ["To add space inside an element's border", "To add space outside an element's border", "To set the color of the border", "To set the width of the element"],
            correctAnswer: 1,
            explanation: "Margins are used to create space around elements, outside of any defined borders. It's the outermost layer of the box model."
        },
        {
            question: "What does `margin: 10px 20px;` mean?",
            options: ["10px margin on all sides", "20px margin on all sides", "10px margin on top/bottom, 20px margin on left/right", "10px margin on left/right, 20px margin on top/bottom"],
            correctAnswer: 2,
            explanation: "When two values are provided, the first value applies to the top and bottom margins, and the second value applies to the left and right margins."
        },
        {
            question: "How do you center a block-level element horizontally within its container?",
            options: ["`align: center;`", "`text-align: center;`", "`margin: auto;`", "`margin: 0 auto;`"],
            correctAnswer: 3,
            explanation: "`margin: 0 auto;` sets the top and bottom margins to 0 and tells the browser to automatically calculate and split the remaining horizontal space on the left and right, centering the element."
        },
        {
            question: "What is 'margin collapsing'?",
            options: ["When margins become too small to see", "When an element has a negative margin", "When the vertical margins of two adjacent block-level elements combine into a single margin", "A bug in older browsers"],
            correctAnswer: 2,
            explanation: "If two vertically adjacent elements have margins, they don't add up. Instead, the larger of the two margins is used. This is known as margin collapsing."
        },
        {
            question: "How would you set only the left margin of an element?",
            options: ["`margin-left: 20px;`", "`margin: 0 0 0 20px;`", "Both A and B", "Neither A nor B"],
            correctAnswer: 2,
            explanation: "You can use the longhand property `margin-left` or use the `margin` shorthand with four values (top, right, bottom, left)."
        }
    ],
    'css-padding': [
        {
            question: "What is the purpose of the `padding` property?",
            options: ["To add space outside an element's border", "To add space between the element's content and its border", "To set the thickness of the border", "To make the text larger"],
            correctAnswer: 1,
            explanation: "Padding is the inner space of the box model, clearing an area around the content."
        },
        {
            question: "If an element has `padding: 10px;`, how much padding is applied to the top?",
            options: ["0px", "5px", "10px", "20px"],
            correctAnswer: 2,
            explanation: "When a single value is used for the `padding` shorthand, it is applied equally to all four sides."
        },
        {
            question: "Does the background color of an element extend into its padding area?",
            options: ["Yes", "No", "Only if specified", "Depends on the browser"],
            correctAnswer: 0,
            explanation: "Yes, the background of an element is the area behind its content and padding. The margin area is always transparent."
        },
        {
            question: "What does `padding: 5px 10px 15px;` mean?",
            options: ["Top 5px, Right/Left 10px, Bottom 15px", "Top 5px, Right 10px, Bottom 15px, Left 10px", "Top/Bottom 5px, Right 10px, Left 15px", "It's an invalid syntax"],
            correctAnswer: 0,
            explanation: "When three values are provided, the first is for the top, the second is for left and right, and the third is for the bottom."
        },
        {
            question: "Unlike margin, padding never does what?",
            options: ["Accept percentage values", "Collapse", "Apply to inline elements", "Affect the element's size"],
            correctAnswer: 1,
            explanation: "Vertical margins can collapse, but padding values never do. Padding from adjacent elements will always be additive."
        }
    ],
    'css-box-model': [
        {
            question: "What are the four components of the CSS Box Model, from outermost to innermost?",
            options: ["Margin, Border, Padding, Content", "Border, Margin, Padding, Content", "Margin, Padding, Border, Content", "Content, Padding, Border, Margin"],
            correctAnswer: 0,
            explanation: "The standard box model is composed of four parts, layered like an onion: Margin, Border, Padding, and the Content itself."
        },
        {
            question: "By default (`box-sizing: content-box;`), if an element has `width: 100px;` and `padding: 10px;`, what is its total rendered width?",
            options: ["100px", "110px", "120px", "90px"],
            correctAnswer: 2,
            explanation: "In the default `content-box` model, padding and borders are added *outside* the specified width. So, the total width is 100px (content) + 10px (left padding) + 10px (right padding) = 120px."
        },
        {
            question: "If an element has `box-sizing: border-box;`, `width: 100px;`, and `padding: 10px;`, what is its total rendered width?",
            options: ["100px", "110px", "120px", "80px"],
            correctAnswer: 0,
            explanation: "With `border-box`, padding and borders are included *inside* the specified width. The total width remains 100px, and the inner content area is reduced to 80px to make room for the padding."
        },
        {
            question: "Which CSS property is commonly used to switch between the two box model behaviors?",
            options: ["`box-model`", "`box-sizing`", "`sizing`", "`width-model`"],
            correctAnswer: 1,
            explanation: "The `box-sizing` property allows you to control how the total width and height of an element are calculated."
        },
        {
            question: "Why do many developers prefer to set `box-sizing: border-box;` on all elements?",
            options: ["It's required for modern CSS", "It makes layout math more intuitive and predictable", "It makes websites load faster", "It's better for accessibility"],
            correctAnswer: 1,
            explanation: "Using `border-box` means the `width` you set is the width you get, regardless of padding or borders. This simplifies creating layouts, as you don't have to constantly subtract padding and border widths."
        }
    ],
    'css-text-and-fonts': [
        {
            question: "Which property is used to control the alignment of text?",
            options: ["`text-position`", "`font-align`", "`text-align`", "`align`"],
            correctAnswer: 2,
            explanation: "`text-align` is used to set the horizontal alignment of text. Common values are `left`, `right`, `center`, and `justify`."
        },
        {
            question: "How do you specify a font like 'Helvetica' for an element, with 'Arial' and 'sans-serif' as fallbacks?",
            options: ["`font-family: Helvetica, Arial, sans-serif;`", "`font: Helvetica, Arial, sans-serif;`", "`font-family: 'Helvetica' 'Arial' 'sans-serif';`", "`font-type: Helvetica, Arial, sans-serif;`"],
            correctAnswer: 0,
            explanation: "The `font-family` property accepts a comma-separated list of font names. The browser will use the first one in the list that it has available."
        },
        {
            question: "Which property controls the height of the space between lines of text?",
            options: ["`line-spacing`", "`line-height`", "`text-spacing`", "`height`"],
            correctAnswer: 1,
            explanation: "The `line-height` property is used to set the distance between lines of text, which can greatly improve readability."
        },
        {
            question: "How do you add an underline to text?",
            options: ["`text-style: underline;`", "`font-decoration: underline;`", "`text-decoration: underline;`", "`underline: true;`"],
            correctAnswer: 2,
            explanation: "The `text-decoration` property is used to add decorative lines to text, such as `underline`, `overline`, or `line-through`."
        },
        {
            question: "What does the `font-weight` property control?",
            options: ["The size of the font", "The style (italic or normal) of the font", "The thickness or boldness of the font", "The color of the font"],
            correctAnswer: 2,
            explanation: "`font-weight` sets how thick or thin characters in a text are displayed. Common values are `normal`, `bold`, or numeric values like `400` and `700`."
        }
    ],
    'css-links': [
        {
            question: "Which pseudo-class is used to style a link that has not yet been visited?",
            options: [":link", ":visited", ":hover", ":active"],
            correctAnswer: 0,
            explanation: "The `:link` pseudo-class specifically targets links that have an `href` attribute but have not been visited by the user."
        },
        {
            question: "Which pseudo-class is used to style a link when the mouse is over it?",
            options: [":link", ":visited", ":hover", ":active"],
            correctAnswer: 2,
            explanation: "The `:hover` pseudo-class applies when the user interacts with an element with a pointing device, but does not necessarily activate it."
        },
        {
            question: "How can you remove the default underline from links?",
            options: ["`underline: none;`", "`text-decoration: none;`", "`link-style: no-underline;`", "`decoration: none;`"],
            correctAnswer: 1,
            explanation: "The `text-decoration` property is used to set the appearance of decorative lines on text. Setting it to `none` removes the underline."
        },
        {
            question: "What is the correct order for link pseudo-classes in a stylesheet to ensure they work correctly?",
            options: [":hover, :visited, :link, :active", ":link, :visited, :hover, :active", ":link, :hover, :active, :visited", ":visited, :link, :active, :hover"],
            correctAnswer: 1,
            explanation: "The recommended order is LVHA (:link, :visited, :hover, :active) to avoid specificity conflicts. A common mnemonic is 'LoVe, HAte'."
        },
        {
            question: "The `:active` pseudo-class applies to a link when...",
            options: ["It is the first link on the page", "It is currently being clicked by the user", "It has already been visited", "The mouse is over it"],
            correctAnswer: 1,
            explanation: "The `:active` state occurs for the duration of the click, from the moment the user presses the mouse button until they release it."
        }
    ],
    'css-lists': [
        {
            question: "Which property is used to change the style of the list item marker?",
            options: ["`list-marker-style`", "`list-style-type`", "`marker-style`", "`list-type`"],
            correctAnswer: 1,
            explanation: "`list-style-type` allows you to change the marker to values like `square`, `disc`, `decimal`, `lower-roman`, etc."
        },
        {
            question: "How do you remove the default bullets or numbers from a list?",
            options: ["`list-style-type: none;`", "`marker: none;`", "`list-style: hidden;`", "`bullets: off;`"],
            correctAnswer: 0,
            explanation: "Setting `list-style-type` to `none` will remove the default markers, which is common practice when creating navigation bars from lists."
        },
        {
            question: "Which property allows you to use an image for the list item marker?",
            options: ["`list-marker-image`", "`list-style-image`", "`list-style-icon`", "`marker-image`"],
            correctAnswer: 1,
            explanation: "The `list-style-image` property lets you specify a URL for an image to be used as the list item marker, e.g., `url('image.png')`."
        },
        {
            question: "What does `list-style-position: inside;` do?",
            options: ["It moves the entire list inside its parent element", "It places the list item marker inside the content flow of the list item", "It adds extra padding inside the list item", "It's not a valid property"],
            correctAnswer: 1,
            explanation: "By default, the marker is `outside`. Setting it to `inside` will cause the text of the list item to wrap underneath the marker."
        },
        {
            question: "Can you set all list style properties in a single shorthand property?",
            options: ["No, they must be set individually", "Yes, using the `list` property", "Yes, using the `list-style` property", "Only in Sass or Less"],
            correctAnswer: 2,
            explanation: "The `list-style` shorthand property can be used to set `list-style-type`, `list-style-position`, and `list-style-image` in one declaration."
        }
    ],
    'css-tables': [
        {
            question: "Which CSS property is used to collapse the borders between table cells into a single border?",
            options: ["`border-collapse: collapse;`", "`border-merge: true;`", "`table-border: collapse;`", "`border-style: single;`"],
            correctAnswer: 0,
            explanation: "`border-collapse: collapse;` merges adjacent borders into one, which is typically desired for table styling. The default is `separate`."
        },
        {
            question: "How can you create a 'zebra-striped' effect on a table, where every other row has a background color?",
            options: ["Using JavaScript", "Using the `:nth-child(even)` or `:nth-child(odd)` pseudo-class", "Using `row-color` property", "You have to add a class to every other row in HTML"],
            correctAnswer: 1,
            explanation: "The `:nth-child()` pseudo-class is perfect for this. `tr:nth-child(even) { background-color: #f2f2f2; }` will style all even table rows."
        },
        {
            question: "Which property controls the horizontal alignment of content within a `<td>` or `<th>`?",
            options: ["`align-content`", "`horizontal-align`", "`text-align`", "`align-items`"],
            correctAnswer: 2,
            explanation: "`text-align` is used to control the horizontal alignment of inline content like text within a table cell."
        },
        {
            question: "Which property controls the vertical alignment of content within a `<td>` or `<th>`?",
            options: ["`vertical-align`", "`align-content`", "`justify-content`", "`position`"],
            correctAnswer: 0,
            explanation: "`vertical-align` can be set to `top`, `middle`, or `bottom` to control the vertical positioning of content within a cell."
        },
        {
            question: "To set the space between the content of a cell and its border, which property should you use?",
            options: ["`margin`", "`spacing`", "`padding`", "`cell-spacing`"],
            correctAnswer: 2,
            explanation: "`padding` is used to control the inner space of a table cell, between the content and the border."
        }
    ],
    'css-display': [
        {
            question: "Which `display` value causes an element to generate a block-level box?",
            options: ["`inline`", "`inline-block`", "`block`", "`none`"],
            correctAnswer: 2,
            explanation: "`display: block;` makes an element start on a new line and take up the full available width."
        },
        {
            question: "What does `display: none;` do?",
            options: ["It makes the element transparent", "It hides the element and removes it from the document layout entirely", "It hides the element but leaves an empty space where it was", "It grays out the element"],
            correctAnswer: 1,
            explanation: "`display: none;` removes the element completely from the document flow. It is not just visually hidden; it takes up no space."
        },
        {
            question: "What is the main difference between `visibility: hidden;` and `display: none;`?",
            options: ["There is no difference", "`visibility: hidden;` is for text, `display: none;` is for images", "`visibility: hidden;` hides the element but it still takes up space in the layout", "`display: none;` is not supported in all browsers"],
            correctAnswer: 2,
            explanation: "An element with `visibility: hidden;` is invisible, but it still occupies its space in the document layout, unlike `display: none;`."
        },
        {
            question: "Which `display` value is used to initiate a flexbox layout?",
            options: ["`flexbox`", "`box`", "`flex`", "`grid`"],
            correctAnswer: 2,
            explanation: "Setting `display: flex;` on a container element turns it into a flex container, and its direct children become flex items."
        },
        {
            question: "An element with `display: inline-block;` is special because...",
            options: ["It behaves like an inline element but you can set its width and height", "It is the only display type that can be animated", "It must be used for all links", "It's the same as `display: block;`"],
            correctAnswer: 0,
            explanation: "`inline-block` combines the features of inline (flows with text) and block (can have width, height, and vertical margins) elements."
        }
    ],
    'css-position': [
        {
            question: "What is the default `position` value for all elements?",
            options: ["`relative`", "`absolute`", "`static`", "`fixed`"],
            correctAnswer: 2,
            explanation: "`static` is the default positioning. Statically positioned elements are always positioned according to the normal flow of the page."
        },
        {
            question: "An element with `position: relative;` is positioned relative to what?",
            options: ["The viewport", "Its nearest positioned ancestor", "Its normal position", "The `<body>` element"],
            correctAnswer: 2,
            explanation: "Setting `position: relative;` doesn't move the element until you also add properties like `top`, `left`, etc. It then moves relative to where it would have been in the normal flow."
        },
        {
            question: "An element with `position: absolute;` is positioned relative to what?",
            options: ["Its normal position", "The `<html>` element", "Its nearest positioned (non-static) ancestor", "The center of the page"],
            correctAnswer: 2,
            explanation: "An absolutely positioned element is removed from the normal document flow and is positioned relative to its closest ancestor that has a `position` value other than `static`. If no such ancestor exists, it's positioned relative to the initial containing block (often the `<html>` element)."
        },
        {
            question: "What is the characteristic of an element with `position: fixed;`?",
            options: ["It is positioned relative to its parent", "It scrolls with the page", "It is positioned relative to the viewport, meaning it always stays in the same place even if the page is scrolled", "It cannot be moved with `top` or `left`"],
            correctAnswer: 2,
            explanation: "`position: fixed;` is often used for creating sticky navigation bars or 'back to top' buttons that are always visible."
        },
        {
            question: "Which `position` value is a hybrid of `relative` and `fixed`?",
            options: ["`sticky`", "`absolute`", "`static`", "`hybrid`"],
            correctAnswer: 0,
            explanation: "An element with `position: sticky;` is treated as `relative` until it crosses a specified threshold (e.g., `top: 0`), at which point it becomes `fixed`."
        }
    ],
    'css-z-index': [
        {
            question: "What does the `z-index` property control?",
            options: ["The zoom level of an element", "The horizontal order of elements", "The vertical stacking order (or depth) of positioned elements", "The speed of an animation"],
            correctAnswer: 2,
            explanation: "`z-index` determines which element appears on top when elements overlap."
        },
        {
            question: "For `z-index` to have an effect, an element must have a `position` value of what?",
            options: ["`static` only", "Any value other than `static`", "`block` or `inline-block`", "Any value"],
            correctAnswer: 1,
            explanation: "The `z-index` property only works on elements that have a `position` of `relative`, `absolute`, `fixed`, or `sticky`."
        },
        {
            question: "If two positioned elements overlap, which one will appear on top by default (without `z-index`)?",
            options: ["The one with the larger width", "The one that appears first in the HTML source order", "The one that appears last in the HTML source order", "It is random"],
            correctAnswer: 2,
            explanation: "By default, elements that come later in the HTML document will be rendered on top of elements that come earlier."
        },
        {
            question: "An element with a higher `z-index` will appear...",
            options: ["Behind an element with a lower `z-index`", "In front of an element with a lower `z-index`", "To the right of an element with a lower `z-index`", "With a larger shadow"],
            correctAnswer: 1,
            explanation: "Higher `z-index` values are closer to the viewer (on top), while lower values are further away (behind)."
        },
        {
            question: "What is a 'stacking context'?",
            options: ["A group of stacked elements in a `<div>`", "A special CSS class for `z-index`", "An element that contains a set of layers. `z-index` values are only meaningful within the same stacking context.", "A JavaScript library for managing `z-index`"],
            correctAnswer: 2,
            explanation: "A new stacking context can be formed by elements with `position` and `z-index`, or properties like `opacity < 1`. `z-index` values are only compared between elements in the same context."
        }
    ],
    'css-combinators': [
        {
            question: "Which combinator selects all `p` elements that are descendants of a `div`?",
            options: ["`div > p`", "`div p`", "`div + p`", "`div ~ p`"],
            correctAnswer: 1,
            explanation: "The descendant combinator (a space) is the most general, selecting any `<p>` that is inside a `<div>`, no matter how deeply nested."
        },
        {
            question: "Which combinator selects all `p` elements that are direct children of a `div`?",
            options: ["`div > p`", "`div p`", "`div + p`", "`div ~ p`"],
            correctAnswer: 0,
            explanation: "The child combinator (`>`) is more specific, selecting only `<p>` elements that are immediate children of a `<div>`."
        },
        {
            question: "The selector `h2 + p` targets what?",
            options: ["All `p` elements after an `h2`", "The `p` element immediately following an `h2`", "All `p` elements that are siblings of an `h2`", "All `p` elements inside an `h2`"],
            correctAnswer: 1,
            explanation: "The adjacent sibling combinator (`+`) selects the element that is the very next sibling of the first element."
        },
        {
            question: "The selector `h2 ~ p` targets what?",
            options: ["All `p` elements that are siblings of an `h2` and appear after it", "The `p` element immediately following an `h2`", "All `p` elements, regardless of their relation to `h2`", "The `p` element before an `h2`"],
            correctAnswer: 0,
            explanation: "The general sibling combinator (`~`) is less strict than `+`, selecting all siblings that appear after the specified element."
        },
        {
            question: "Given `<div><p>A</p><span><p>B</p></span></div>`, which `<p>` does `div > p` select?",
            options: ["Both A and B", "Only p 'A'", "Only p 'B'", "Neither"],
            correctAnswer: 1,
            explanation: "Only paragraph 'A' is a direct child of the `<div>`. Paragraph 'B' is a child of the `<span>`, not the `<div>`."
        }
    ],
    'css-pseudo-classes': [
        {
            question: "Which pseudo-class targets the first child element of its parent?",
            options: [":first", ":initial", ":first-of-type", ":first-child"],
            correctAnswer: 3,
            explanation: "`:first-child` selects an element only if it is the first element among its siblings."
        },
        {
            question: "How would you select every third `<li>` element in a list?",
            options: ["`li:nth-child(3)`", "`li:nth-child(3n)`", "`li:child(3)`", "`li:every(3)`"],
            correctAnswer: 1,
            explanation: "The `:nth-child()` pseudo-class can take a formula. `3n` selects the 3rd, 6th, 9th, etc., elements."
        },
        {
            question: "Which pseudo-class can be used to style an input element that is currently selected by the user?",
            options: [":selected", ":current", ":focus", ":active"],
            correctAnswer: 2,
            explanation: "The `:focus` pseudo-class applies when an element has received focus, such as by clicking on it or tabbing to it."
        },
        {
            question: "What does the `:not()` pseudo-class do?",
            options: ["It negates the entire stylesheet", "It selects elements that do NOT match the selector inside the parentheses", "It hides elements", "It is for comments"],
            correctAnswer: 1,
            explanation: "The negation pseudo-class, `:not(X)`, is a functional pseudo-class taking a selector list as an argument. It matches an element that is not represented by the argument. For example, `p:not(.special)` selects all `<p>` elements that do not have the class 'special'."
        },
        {
            question: "The `:checked` pseudo-class would apply to which of the following elements?",
            options: ["A `<div>` that has been clicked", "An `<input type='checkbox'>` that is ticked", "A link that has been visited", "Any active element"],
            correctAnswer: 1,
            explanation: "The `:checked` pseudo-class targets radio buttons, checkboxes, and select options that are selected or checked."
        }
    ],
    'css-pseudo-elements': [
        {
            question: "What is the correct syntax for using a pseudo-element in modern CSS?",
            options: [":before", "::before", "-before", ".before"],
            correctAnswer: 1,
            explanation: "Modern CSS (CSS3) uses a double colon (`::`) to distinguish pseudo-elements (like `::before`) from pseudo-classes (like `:hover`). While single-colon syntax is supported for backward compatibility, double-colon is the standard."
        },
        {
            question: "Which pseudo-element is used to insert some content before the content of an element?",
            options: ["::first", "::before", "::start", "::prefix"],
            correctAnswer: 1,
            explanation: "The `::before` pseudo-element creates a child element before the main content of the selected element. Its content is specified with the `content` property."
        },
        {
            question: "Which property is required for `::before` and `::after` to work?",
            options: ["`display`", "`position`", "`content`", "`color`"],
            correctAnswer: 2,
            explanation: "The `content` property is required for `::before` and `::after` pseudo-elements. Even if you only want to display a shape, you must set `content: '';`."
        },
        {
            question: "How can you style the first letter of a paragraph to be larger and a different color?",
            options: ["`p::first-letter`", "`p:first-letter`", "`p::first`", "`p > first-letter`"],
            correctAnswer: 0,
            explanation: "The `::first-letter` pseudo-element applies styles to the first letter of the first line of a block-level element."
        },
        {
            question: "The `::placeholder` pseudo-element is used to style what?",
            options: ["The default value of an input", "A placeholder image", "The placeholder text in an `<input>` or `<textarea>`", "A comment"],
            correctAnswer: 2,
            explanation: "`::placeholder` allows you to style the appearance of the hint text that appears in a form input before the user enters a value."
        }
    ],
    'css-grid': [
        {
            question: "How do you define a container as a grid container?",
            options: ["`layout: grid;`", "`display: grid;`", "`grid-container: true;`", "`container: grid;`"],
            correctAnswer: 1,
            explanation: "Setting `display: grid;` on an element turns it into a grid container, and its direct children become grid items."
        },
        {
            question: "Which property is used to define the number and size of columns in a grid?",
            options: ["`grid-columns`", "`grid-template-rows`", "`grid-template-columns`", "`columns`"],
            correctAnswer: 2,
            explanation: "`grid-template-columns` is used to define the track sizing of the grid columns. For example, `1fr 1fr 1fr` creates three equal-width columns."
        },
        {
            question: "What does the `fr` unit represent in CSS Grid?",
            options: ["Frame", "Fraction", "Free space", "French unit"],
            correctAnswer: 1,
            explanation: "The `fr` unit represents a fraction of the available space in the grid container. It's a flexible unit that simplifies creating proportional layouts."
        },
        {
            question: "Which property controls the space between grid cells?",
            options: ["`spacing`", "`margin`", "`gap` (or `grid-gap`)", "`padding`"],
            correctAnswer: 2,
            explanation: "The `gap` property is a shorthand for `row-gap` and `column-gap`, and it defines the size of the gutters between grid rows and columns."
        },
        {
            question: "How would you make a grid item span two columns?",
            options: ["`grid-column: span 2;`", "`colspan: 2;`", "`column-span: 2;`", "`grid-area: 1 / 1 / 2 / 3;`"],
            correctAnswer: 0,
            explanation: "`grid-column: span 2;` tells the grid item to occupy two column tracks instead of the default one."
        }
    ],
    'css-responsive-design-media-queries': [
        {
            question: "What is the purpose of a media query?",
            options: ["To query the media files on a page", "To apply CSS styles only when certain conditions (like screen size) are met", "To check the user's social media accounts", "To play media like video or audio"],
            correctAnswer: 1,
            explanation: "Media queries are the cornerstone of responsive design, allowing you to create different layouts for different devices or screen sizes."
        },
        {
            question: "What is the correct syntax for a media query that applies styles to screens with a width of 600px or less?",
            options: ["`@media (width <= 600px)`", "`@media screen and (max-width: 600px)`", "`@media (max-width: 600px)`", "Both B and C are valid"],
            correctAnswer: 3,
            explanation: "The `@media` at-rule is used to define the query. `(max-width: 600px)` is the feature being queried. The `screen` media type is optional but often included for clarity."
        },
        {
            question: "What does a 'mobile-first' approach mean in the context of media queries?",
            options: ["Writing the desktop styles first, then mobile", "Writing the base styles for mobile, then using `min-width` media queries to add styles for larger screens", "Ignoring desktop styles completely", "Using a separate stylesheet for mobile"],
            correctAnswer: 1,
            explanation: "Mobile-first involves writing the default CSS for the smallest screens and then progressively enhancing the layout for larger screens inside `min-width` media queries."
        },
        {
            question: "Can media queries be used to check for things other than screen width?",
            options: ["No, only width is supported", "Yes, you can check for height, orientation (landscape/portrait), resolution, and more", "Only width and height", "Only width and orientation"],
            correctAnswer: 1,
            explanation: "Media queries are very powerful and can test for a wide range of media features, not just screen width."
        },
        {
            question: "How would you combine two conditions in a media query, for example, a min-width and a max-width?",
            options: ["`@media (min-width: 600px), (max-width: 900px)`", "`@media (min-width: 600px) and (max-width: 900px)`", "`@media (min-width: 600px) || (max-width: 900px)`", "You cannot combine conditions"],
            correctAnswer: 1,
            explanation: "The `and` keyword is used to chain multiple media features together, requiring all of them to be true for the styles to apply."
        }
    ],
    'css-variables': [
        {
            question: "What is the correct syntax for defining a CSS variable?",
            options: ["`$my-color: blue;`", "`var my-color = blue;`", "`--my-color: blue;`", "`@my-color: blue;`"],
            correctAnswer: 2,
            explanation: "CSS custom properties (variables) are defined with a double-hyphen prefix and are case-sensitive."
        },
        {
            question: "How do you use a CSS variable?",
            options: ["`color: --my-color;`", "`color: var(--my-color);`", "`color: get(--my-color);`", "`color: $my-color;`"],
            correctAnswer: 1,
            explanation: "The `var()` function is used to insert the value of a custom property."
        },
        {
            question: "Where is the best place to define global CSS variables that should be available to the whole page?",
            options: ["On the `<body>` element", "On the `<html>` element", "Inside the `:root` pseudo-class", "In a `<var>` tag"],
            correctAnswer: 2,
            explanation: "Defining variables inside the `:root` pseudo-class makes them available globally, as `:root` matches the `<html>` element and has the highest specificity for this purpose."
        },
        {
            question: "Can you provide a fallback value for a CSS variable in case it's not defined?",
            options: ["No, it will always cause an error", "Yes, by adding a second parameter to the `var()` function, like `var(--my-color, blue)`", "Yes, by using the `||` operator", "Only with JavaScript"],
            correctAnswer: 1,
            explanation: "The `var()` function can take a second argument which serves as a fallback value if the custom property in the first argument is invalid or undefined."
        },
        {
            question: "What is a major benefit of using CSS variables?",
            options: ["They make CSS run faster", "They allow you to change many values at once and are great for theming (e.g., light/dark mode)", "They are the only way to use colors in CSS", "They are not very useful"],
            correctAnswer: 1,
            explanation: "CSS variables are live and can be updated with JavaScript, making them incredibly powerful for dynamic styling and theming without needing a preprocessor."
        }
    ],
    'css-transforms': [
        {
            question: "Which CSS property is used to apply 2D or 3D transformations to an element?",
            options: ["`transition`", "`animation`", "`transform`", "`move`"],
            correctAnswer: 2,
            explanation: "The `transform` property allows you to modify the coordinate space of the CSS visual formatting model, enabling effects like rotate, scale, skew, and translate."
        },
        {
            question: "Which `transform` function is used to move an element horizontally and/or vertically?",
            options: ["`move()`", "`position()`", "`translate()`", "`offset()`"],
            correctAnswer: 2,
            explanation: "`translate()` moves an element from its current position. For example, `transform: translate(50px, 100px);` moves it 50px right and 100px down."
        },
        {
            question: "How do you rotate an element 45 degrees clockwise?",
            options: ["`transform: rotate(45deg);`", "`transform: rotation(45);`", "`transform: skew(45deg);`", "`transform: angle(45deg);`"],
            correctAnswer: 0,
            explanation: "The `rotate()` function takes an angle value (in degrees, radians, etc.) and rotates the element around its origin."
        },
        {
            question: "Which function would you use to increase the size of an element to 1.5 times its original size?",
            options: ["`transform: resize(1.5);`", "`transform: grow(1.5);`", "`transform: scale(1.5);`", "`transform: magnify(1.5);`"],
            correctAnswer: 2,
            explanation: "`scale()` increases or decreases the size of an element. A value of `1.5` makes it 50% larger, while `0.5` would make it 50% smaller."
        },
        {
            question: "What does the `transform-origin` property do?",
            options: ["It sets the origin of the webpage", "It sets the point around which a transformation is applied", "It's the original value of the transform", "It's not a real property"],
            correctAnswer: 1,
            explanation: "By default, transformations happen around the center of an element (`50% 50%`). `transform-origin` allows you to change this pivot point, for example, to the top-left corner (`0 0`)."
        }
    ],
    'css-transitions': [
        {
            question: "What is the purpose of the `transition` property?",
            options: ["To create complex, multi-step animations", "To define how an element transitions from one page to another", "To enable gradual, smooth changes in CSS property values over a period of time", "To switch between stylesheets"],
            correctAnswer: 2,
            explanation: "Transitions provide a way to control animation speed when changing CSS properties, making the change smooth rather than instantaneous."
        },
        {
            question: "Which property defines which CSS property should be animated?",
            options: ["`transition-property`", "`transition-target`", "`transition-effect`", "`animate-property`"],
            correctAnswer: 0,
            explanation: "`transition-property` specifies the name or names of the CSS properties to which transitions should be applied. You can specify `all` to animate all animatable properties."
        },
        {
            question: "How do you set the duration of a transition to be 2 seconds?",
            options: ["`transition-time: 2s;`", "`transition-length: 2s;`", "`transition-speed: 2s;`", "`transition-duration: 2s;`"],
            correctAnswer: 3,
            explanation: "The `transition-duration` property specifies the length of time a transition animation should take to complete."
        },
        {
            question: "What is a 'timing function' (e.g., `ease-in-out`) used for in a transition?",
            options: ["To delay the start of the transition", "To describe how the speed of the transition changes over its duration", "To specify which property to transition", "To set the end time of the transition"],
            correctAnswer: 1,
            explanation: "The `transition-timing-function` describes the acceleration curve of the transition. `linear` is a constant speed, while `ease-in` starts slow and speeds up, for example."
        },
        {
            question: "To apply a transition to the `background-color` property on hover, where should you declare the `transition` property?",
            options: ["In the `:hover` state", "In the default state of the element", "In both the default and hover states", "On the `<body>` tag"],
            correctAnswer: 1,
            explanation: "The `transition` property should be declared on the base element state, not the `:hover` state. This ensures the transition is applied both when the mouse enters *and* when it leaves the element."
        }
    ],
    'css-animations': [
        {
            question: "What is the role of the `@keyframes` at-rule?",
            options: ["To define the timing of an animation", "To define the intermediate steps in a CSS animation sequence", "To select the element to be animated", "To link to an animation file"],
            correctAnswer: 1,
            explanation: "`@keyframes` allows you to specify the styles for different points in time during the animation, such as `from` and `to`, or using percentages (0%, 50%, 100%)."
        },
        {
            question: "Which CSS property is used to apply a `@keyframes` animation to an element?",
            options: ["`animation-name`", "`animation-apply`", "`use-animation`", "`keyframes`"],
            correctAnswer: 0,
            explanation: "The `animation-name` property specifies the name of the `@keyframes` at-rule that defines the animation's steps."
        },
        {
            question: "How do you make a CSS animation repeat forever?",
            options: ["`animation-repeat: infinite;`", "`animation-loop: true;`", "`animation-iteration-count: infinite;`", "`animation-duration: infinite;`"],
            correctAnswer: 2,
            explanation: "The `animation-iteration-count` property specifies the number of times an animation cycle should be played. The value `infinite` makes it loop endlessly."
        },
        {
            question: "What does the `animation-direction: alternate;` property do?",
            options: ["It makes the animation play backwards", "It makes the animation play forwards on the first cycle, then backwards on the second, and so on", "It alternates between two different animations", "It plays the animation on alternating elements"],
            correctAnswer: 1,
            explanation: "`alternate` is useful for creating smooth, back-and-forth looping animations."
        },
        {
            question: "What is the difference between a transition and an animation?",
            options: ["There is no difference", "Transitions are for simple state changes, while animations can have many steps and loop without user interaction", "Transitions are written in JavaScript, animations in CSS", "Animations are only for 3D effects"],
            correctAnswer: 1,
            explanation: "A transition is for going from a start state to an end state, usually triggered by a user action like `:hover`. An animation is a more complex sequence defined by `@keyframes` that can run and loop automatically."
        }
    ],
    'css-preprocessors': [
        {
            question: "What is a CSS preprocessor?",
            options: ["A tool that automatically writes CSS for you", "A scripting language that extends CSS and is compiled into regular CSS", "A linter that checks for errors in CSS", "A browser feature for faster CSS rendering"],
            correctAnswer: 1,
            explanation: "Preprocessors like Sass and Less add features that don't exist in native CSS, like variables, nesting, and mixins. You write in the preprocessor's syntax, and it compiles it into a normal CSS file that a browser can read."
        },
        {
            question: "Which of the following is a key feature of CSS preprocessors like Sass?",
            options: ["DOM manipulation", "Nesting selectors", "API requests", "Database integration"],
            correctAnswer: 1,
            explanation: "Nesting allows you to write CSS selectors inside one another, mirroring your HTML structure and making your code more readable and organized."
        },
        {
            question: "What is a 'mixin' in Sass?",
            options: ["A special type of variable", "A way to mix colors together", "A reusable block of CSS declarations that can be included in other rules", "A type of comment"],
            correctAnswer: 2,
            explanation: "Mixins are like functions for CSS. They let you group CSS declarations that you want to reuse throughout your site, and can even take arguments."
        },
        {
            question: "Do browsers understand Sass or Less code directly?",
            options: ["Yes, all modern browsers do", "No, it must be compiled into standard CSS first", "Only browsers with a special plugin", "Only Safari"],
            correctAnswer: 1,
            explanation: "Browsers can only read CSS. You need a build tool or a compiler to process your `.scss` or `.less` files into a `.css` file."
        },
        {
            question: "What is an advantage of using variables in a preprocessor?",
            options: ["It's the only way to use colors", "It allows you to store values (like colors or fonts) in one place and reuse them, making changes easier", "It makes the final CSS file smaller", "It's a requirement for responsive design"],
            correctAnswer: 1,
            explanation: "Variables are a cornerstone of preprocessors, allowing for more maintainable and themeable code. For example, you can define a `--primary-color` and use it everywhere."
        }
    ],
    'css-methodologies-bem': [
        {
            question: "What does BEM stand for?",
            options: ["Block, Element, Modifier", "Box, Element, Model", "Base, Element, Module", "Block, Entity, Model"],
            correctAnswer: 0,
            explanation: "BEM stands for Block, Element, Modifier, which are the three parts of its naming convention."
        },
        {
            question: "In BEM, what is a 'Block'?",
            options: ["A block-level element like a `<div>`", "A standalone, reusable component like a search form or a menu", "A block of commented-out code", "Any element with a border"],
            correctAnswer: 1,
            explanation: "A block is an independent component that is meaningful on its own. For example, `.header`, `.card`, `.menu`."
        },
        {
            question: "How is an 'Element' named in BEM?",
            options: ["As a child of the block, separated by two underscores (e.g., `card__title`)", "As a child of the block, separated by a space (e.g., `card title`)", "With a dash (e.g., `card-title`)", "It has its own unique name"],
            correctAnswer: 0,
            explanation: "An element is a part of a block and has no standalone meaning. It is named by appending two underscores and the element name to the block name."
        },
        {
            question: "How is a 'Modifier' named in BEM?",
            options: ["By adding another class", "By appending two dashes and the modifier name (e.g., `card--large`)", "By using an ID", "By nesting it in the CSS"],
            correctAnswer: 1,
            explanation: "A modifier is a flag on a block or an element used to change its appearance or behavior. It's named by appending two dashes and the modifier name."
        },
        {
            question: "What is the main goal of using a methodology like BEM?",
            options: ["To make your CSS more complex", "To write less CSS", "To create scalable, maintainable, and conflict-free CSS by creating clear, strict naming conventions", "To automatically make your site responsive"],
            correctAnswer: 2,
            explanation: "BEM helps avoid common CSS problems like selector conflicts and specificity wars by making the relationship between your HTML and CSS clearer and more predictable."
        }
    ]
  },
  javascript: {
    'js-introduction': [
      {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<js>', '<scripting>', '<javascript>', '<script>'],
        correctAnswer: 3,
        explanation: 'JavaScript code is inserted between `<script>` and `</script>` tags.'
      },
       {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        options: ['<script href="xxx.js">', '<script name="xxx.js">', '<script src="xxx.js">', '<script file="xxx.js">'],
        correctAnswer: 2,
        explanation: 'The `src` attribute in a `<script>` tag is used to specify the URL of an external script file.'
      },
       {
        question: 'The external JavaScript file must contain the <script> tag.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'An external script file should contain only the JavaScript code, not the `<script>` tags themselves.'
      },
       {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'],
        correctAnswer: 2,
        explanation: 'The `alert()` function is a built-in browser function that displays an alert box with a specified message and an OK button.'
      },
      {
        question: 'How do you create a function in JavaScript?',
        options: ['function:myFunction()', 'function = myFunction()', 'function myFunction()', 'def myFunction():'],
        correctAnswer: 2,
        explanation: 'A function is defined with the `function` keyword, followed by a name, followed by parentheses `()`.'
      }
    ],
    'js-variables': [
        {
            question: 'How do you declare a JavaScript variable?',
            options: ['`v carName;`', '`variable carName;`', '`let carName;`', '`string carName;`'],
            correctAnswer: 2,
            explanation: 'In modern JavaScript, variables are declared with the `let` or `const` keywords. `var` is also used but is from older versions.'
        },
        {
            question: 'Which operator is used to assign a value to a variable?',
            options: ['=', 'x', '-', '*'],
            correctAnswer: 0,
            explanation: 'The `=` assignment operator is used to assign a value to a variable.'
        },
        {
            question: 'What will the following code return: `Boolean(10 > 9)`?',
            options: ['false', 'true', 'NaN', 'undefined'],
            correctAnswer: 1,
            explanation: 'The expression `10 > 9` is true, and passing `true` to the `Boolean()` constructor returns `true`.'
        },
        {
            question: 'Is JavaScript case-sensitive?',
            options: ['Yes', 'No'],
            correctAnswer: 0,
            explanation: 'Yes, JavaScript is case-sensitive. `myVariable` and `myvariable` are treated as two different variables.'
        },
        {
            question: 'What is the correct way to write a JavaScript array?',
            options: ['`const colors = "red", "green", "blue"`', '`const colors = (1:"red", 2:"green", 3:"blue")`', '`const colors = ["red", "green", "blue"]`', '`const colors = 1="red", 2="green", 3="blue"`'],
            correctAnswer: 2,
            explanation: 'A JavaScript array is written by enclosing a comma-separated list of values in square brackets `[]`.'
        }
    ],
     'js-async-await': [
        {
            question: 'The `await` keyword can only be used inside...',
            options: ['A regular function', 'An `async` function', 'A `Promise`', 'A `setTimeout` callback'],
            correctAnswer: 1,
            explanation: '`await` is a special syntax available only within `async` functions. It pauses the function execution until a Promise is settled.'
        },
        {
            question: 'What is the primary purpose of `async/await`?',
            options: ['To make code run faster.', 'To allow synchronous code to run in the background.', 'To write asynchronous code that looks and behaves more like synchronous code.', 'To replace all `for` loops.'],
            correctAnswer: 2,
            explanation: '`async/await` is syntactic sugar over Promises, making it easier to read and write asynchronous operations by avoiding long `.then()` chains.'
        },
        {
            question: 'How do you handle errors when using `async/await`?',
            options: ['With a `.catch()` block on the function call', 'With a `try...catch` block', 'Errors cannot be handled with `async/await`', 'With an `onerror` attribute'],
            correctAnswer: 1,
            explanation: 'When an `await`ed Promise rejects, it throws an error. The standard way to handle these errors is to wrap the `await` call in a `try...catch` block.'
        },
        {
            question: 'An `async` function always returns what?',
            options: ['A boolean', 'A string', 'An object', 'A `Promise`'],
            correctAnswer: 3,
            explanation: 'An `async` function implicitly returns a `Promise`. If the function returns a value, the Promise will be fulfilled with that value. If it throws an error, the Promise will be rejected.'
        },
        {
            question: 'Can you use `await` on a non-Promise value?',
            options: ['No, it will throw an error', 'Yes, it will convert the value to a resolved Promise and return the value', 'Yes, but it will block the entire browser', 'Only if the value is a number'],
            correctAnswer: 1,
            explanation: 'If you `await` a non-Promise value, it effectively wraps the value in a resolved Promise and immediately gives you back that value. It does not cause an error.'
        }
    ],
    'js-syntax-and-statements': [
        {
            question: 'How are JavaScript statements typically separated?',
            options: ["Commas", "Colons", "Semicolons", "Line breaks"],
            correctAnswer: 2,
            explanation: "Semicolons are used to separate statements in JavaScript, though they are sometimes optional due to Automatic Semicolon Insertion (ASI)."
        },
        {
            question: "Is JavaScript a case-sensitive language?",
            options: ["Yes", "No", "Only for variables", "Only for functions"],
            correctAnswer: 0,
            explanation: "Yes, JavaScript is case-sensitive. This means that `myVariable` and `MyVariable` would be two different variables."
        },
        {
            question: "Which of the following is a single-line comment in JavaScript?",
            options: ["<!-- Comment -->", "/* Comment */", "// Comment", "# Comment"],
            correctAnswer: 2,
            explanation: "`//` is used for single-line comments. `/* */` is used for multi-line comments."
        },
        {
            question: "What is 'camelCase'?",
            options: ["A type of JavaScript framework", "A naming convention where the first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized", "A way to write comments", "A type of loop"],
            correctAnswer: 1,
            explanation: "camelCase is the most common naming convention for variables and functions in JavaScript (e.g., `myVariableName`)."
        },
        {
            question: "In JavaScript, code blocks are defined by what?",
            options: ["Parentheses ()", "Square brackets []", "Curly braces {}", "Angle brackets <>"],
            correctAnswer: 2,
            explanation: "Curly braces `{}` are used to define code blocks for functions, loops, and conditional statements."
        }
    ],
    'js-data-types': [
        {
            question: "Which of the following is NOT a primitive data type in JavaScript?",
            options: ["String", "Number", "Object", "Boolean"],
            correctAnswer: 2,
            explanation: "Object is a complex data type. The primitive types are String, Number, Boolean, Null, Undefined, BigInt, and Symbol."
        },
        {
            question: "What is the result of `typeof null`?",
            options: ["'null'", "'undefined'", "'object'", "'string'"],
            correctAnswer: 2,
            explanation: "This is a famous, long-standing bug in JavaScript. The `typeof` a `null` value is 'object', which can be misleading."
        },
        {
            question: "What will the variable `x` contain after this statement: `let x;`?",
            options: ["null", "0", "'' (empty string)", "undefined"],
            correctAnswer: 3,
            explanation: "A variable that has been declared but not assigned a value has the value `undefined`."
        },
        {
            question: "Is JavaScript a statically typed or dynamically typed language?",
            options: ["Statically typed", "Dynamically typed", "Both", "Neither"],
            correctAnswer: 1,
            explanation: "JavaScript is dynamically typed, which means a variable can hold values of different types during the execution of a program. You don't have to declare the type of a variable."
        },
        {
            question: "What is the data type of `NaN`?",
            options: ["'NaN'", "'undefined'", "'string'", "'number'"],
            correctAnswer: 3,
            explanation: "`NaN` stands for 'Not-a-Number', but paradoxically, its data type is `number`. It represents a computational error, like the result of `0/0`."
        }
    ],
    'js-operators': [
        {
            question: "What is the difference between `==` and `===`?",
            options: ["There is no difference", "`===` is for numbers, `==` is for strings", "`==` performs type coercion, while `===` does not", "`===` is faster"],
            correctAnswer: 2,
            explanation: "`==` (loose equality) will try to convert the operands to the same type before comparing them (e.g., `5 == '5'` is true). `===` (strict equality) requires both the value and the type to be the same."
        },
        {
            question: "What does the `%` operator do?",
            options: ["Calculates a percentage", "It's a comment character", "It is the modulo operator, which returns the remainder of a division", "It raises a number to a power"],
            correctAnswer: 2,
            explanation: "For example, `10 % 3` would return `1`, because 10 divided by 3 is 3 with a remainder of 1."
        },
        {
            question: "What is the `&&` operator?",
            options: ["The OR operator", "The NOT operator", "The AND operator", "The bitwise XOR operator"],
            correctAnswer: 2,
            explanation: "The logical AND (`&&`) operator returns `true` only if both of its operands are true."
        },
        {
            question: "What will `!true` evaluate to?",
            options: ["true", "false", "undefined", "1"],
            correctAnswer: 1,
            explanation: "The `!` operator is the logical NOT operator. It inverts the boolean value of its operand."
        },
        {
            question: "What is the ternary operator?",
            options: ["`if...else`", "A shorthand for an `if...else` statement, written as `condition ? exprIfTrue : exprIfFalse`", "An operator for creating objects", "An operator for string concatenation"],
            correctAnswer: 1,
            explanation: "The conditional (ternary) operator is the only JavaScript operator that takes three operands. It's a compact way to write simple conditional statements."
        }
    ],
    'js-functions': [
        {
            question: "What is a function declaration?",
            options: ["`const myFunction = function() {}`", "`function myFunction() {}`", "`() => {}`", "`let myFunction = new Function()`"],
            correctAnswer: 1,
            explanation: "A function declaration (or function statement) defines a function with the specified parameters. These are 'hoisted', meaning they can be called before they are defined in the code."
        },
        {
            question: "What is a function expression?",
            options: ["`const myFunction = function() {}`", "`function myFunction() {}`", "A function defined inside an object", "A self-invoking function"],
            correctAnswer: 0,
            explanation: "A function expression is when a function is created and assigned to a variable. Unlike declarations, expressions are not hoisted."
        },
        {
            question: "What is a key characteristic of an arrow function (`=>`)?",
            options: ["They cannot have parameters", "They do not have their own `this` context; they inherit it from the parent scope", "They must always be named", "They are slower than regular functions"],
            correctAnswer: 1,
            explanation: "Arrow functions' lexical `this` binding is one of their most important features, making them very useful for callbacks and event handlers inside objects."
        },
        {
            question: "What does the `return` statement do in a function?",
            options: ["It stops the execution of the entire script", "It logs a value to the console", "It stops the execution of the function and returns a specified value to the function caller", "It declares a new variable"],
            correctAnswer: 2,
            explanation: "The `return` statement ends the function's execution and specifies the value to be returned to where the function was called."
        },
        {
            question: "What is a parameter in a function?",
            options: ["A variable declared inside the function", "The value returned by the function", "A variable name listed in the function's definition, acting as a placeholder for an input value", "The actual value passed to the function when it is called"],
            correctAnswer: 2,
            explanation: "Parameters are the names listed in the function definition. Arguments are the real values passed to (and received by) the function."
        }
    ],
    'js-objects': [
        {
            question: "How do you define an empty object in JavaScript?",
            options: ["`let obj = {};` or `let obj = new Object();`", "`let obj = [];`", "`let obj = null;`", "`let obj = object;`"],
            correctAnswer: 0,
            explanation: "Using object literal syntax `{}` is the most common and concise way to create an object."
        },
        {
            question: "How do you access the `name` property of an object called `person`?",
            options: ["`person->name`", "`person.name` or `person['name']`", "`person(name)`", "`get(person.name)`"],
            correctAnswer: 1,
            explanation: "You can use dot notation (`.`) if the property name is a valid identifier, or bracket notation (`[]`) which allows for dynamic property names."
        },
        {
            question: "What is a method in a JavaScript object?",
            options: ["Any property of an object", "A property of an object that is a function", "The name of the object", "A special type of comment"],
            correctAnswer: 1,
            explanation: "When a function is stored as a property of an object, it is called a method."
        },
        {
            question: "What does the `this` keyword refer to inside an object's method?",
            options: ["The global window object", "The function itself", "The object that the method belongs to", "It is undefined"],
            correctAnswer: 2,
            explanation: "In a method, `this` refers to the owner object, allowing you to access other properties of that object."
        },
        {
            question: "How do you add a new property `country` with value `Norway` to an object `person`?",
            options: ["`add person.country = 'Norway';`", "`person.country = 'Norway';`", "`person('country') = 'Norway';`", "`new person.country = 'Norway';`"],
            correctAnswer: 1,
            explanation: "You can add new properties to an object at any time by simply assigning a value to a new property key."
        }
    ],
    'js-arrays': [
        {
            question: "How do you access the first element of an array named `fruits`?",
            options: ["`fruits(0)`", "`fruits.first()`", "`fruits[0]`", "`fruits.get(0)`"],
            correctAnswer: 2,
            explanation: "JavaScript arrays are zero-indexed, meaning the first element is at index 0."
        },
        {
            question: "Which method adds a new element to the end of an array?",
            options: ["`add()`", "`push()`", "`append()`", "`addToEnd()`"],
            correctAnswer: 1,
            explanation: "The `push()` method adds one or more elements to the end of an array and returns the new length of the array."
        },
        {
            question: "Which method removes the last element from an array?",
            options: ["`pop()`", "`removeLast()`", "`shift()`", "`slice()`"],
            correctAnswer: 0,
            explanation: "The `pop()` method removes the last element from an array and returns that element."
        },
        {
            question: "How do you find the number of elements in an array called `cars`?",
            options: ["`cars.count`", "`cars.length`", "`cars.size()`", "`count(cars)`"],
            correctAnswer: 1,
            explanation: "The `length` property of an array returns the number of elements it contains."
        },
        {
            question: "Which method is used to iterate over the elements of an array and execute a function for each element?",
            options: ["`for...in`", "`loop()`", "`forEach()`", "`iterate()`"],
            correctAnswer: 2,
            explanation: "The `forEach()` method provides a clean, readable way to execute a callback function for each element in an array."
        }
    ],
    'js-conditions': [
        {
            question: "Which statement is used to execute code if a condition is true?",
            options: ["`if`", "`then`", "`when`", "`check`"],
            correctAnswer: 0,
            explanation: "The `if` statement is the fundamental conditional statement in JavaScript."
        },
        {
            question: "Which statement is used to execute code if the same condition is false?",
            options: ["`else`", "`otherwise`", "`elseif`", "`except`"],
            correctAnswer: 0,
            explanation: "The `else` statement specifies a block of code to be executed if the condition in the `if` statement is false."
        },
        {
            question: "How do you write an `if` statement for executing some code if `i` is NOT equal to 5?",
            options: ["`if i <> 5`", "`if (i != 5)`", "`if i =! 5`", "`if (i not 5)`"],
            correctAnswer: 1,
            explanation: "The `!=` (loose inequality) or `!==` (strict inequality) operator is used to check for inequality."
        },
        {
            question: "What is the purpose of the `switch` statement?",
            options: ["To switch between different stylesheets", "To replace an `if` statement", "To perform different actions based on different conditions, as an alternative to a long `if...else if...else` chain", "To swap the values of two variables"],
            correctAnswer: 2,
            explanation: "The `switch` statement is useful when you have a single expression that you want to compare against multiple possible values."
        },
        {
            question: "What is the role of the `break` keyword in a `switch` statement?",
            options: ["It breaks the entire script", "It's optional and does nothing", "It stops the execution of more code and case testing inside the block", "It indicates an error"],
            correctAnswer: 2,
            explanation: "Without `break`, the code will 'fall through' and execute the code in the next case as well. `break` is needed to exit the switch block."
        }
    ],
    'js-loops': [
        {
            question: "Which loop is best suited for running a specific number of times?",
            options: ["`while` loop", "`for` loop", "`do...while` loop", "`for...in` loop"],
            correctAnswer: 1,
            explanation: "The `for` loop is ideal when you know how many iterations you need, as it contains the initialization, condition, and increment/decrement all in one line."
        },
        {
            question: "How does a `while` loop work?",
            options: ["It loops through the properties of an object", "It loops a specific number of times", "It loops as long as a specified condition is true", "It always executes at least once"],
            correctAnswer: 2,
            explanation: "A `while` loop checks the condition *before* executing the loop body. If the condition is false initially, the loop will never run."
        },
        {
            question: "What is the main difference between a `while` loop and a `do...while` loop?",
            options: ["There is no difference", "The `do...while` loop will always execute at least once", "The `while` loop is faster", "The `do...while` loop is for objects"],
            correctAnswer: 1,
            explanation: "The `do...while` loop checks its condition *after* executing the loop body, so the body is always guaranteed to run at least one time."
        },
        {
            question: "Which loop is designed to iterate over the properties of an object?",
            options: ["`for`", "`for...of`", "`for...in`", "`while`"],
            correctAnswer: 2,
            explanation: "The `for...in` statement iterates over the enumerable property names of an object."
        },
        {
            question: "Which loop is designed to iterate over the values of an iterable (like an Array or String)?",
            options: ["`for`", "`for...of`", "`for...in`", "`while`"],
            correctAnswer: 1,
            explanation: "The `for...of` statement, introduced in ES6, provides a cleaner way to loop over the values in an iterable object like an array, string, or map."
        }
    ],
    'js-dom-intro': [
        {
            question: "What does DOM stand for?",
            options: ["Document Object Model", "Data Object Model", "Display Object Management", "Document Oriented Middleware"],
            correctAnswer: 0,
            explanation: "The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
        },
        {
            question: "The DOM represents an HTML document as a...",
            options: ["A flat list of elements", "A string of text", "A tree-like structure of nodes", "A CSS stylesheet"],
            correctAnswer: 2,
            explanation: "The DOM represents the document as a tree of objects (nodes), where the `html` element is the root, and all other elements are branches and leaves."
        },
        {
            question: "Can JavaScript be used to change the content of an HTML element?",
            options: ["No, JavaScript can only change styles", "Yes, using properties like `innerHTML` or `textContent`", "Only if you use jQuery", "No, HTML is static"],
            correctAnswer: 1,
            explanation: "JavaScript's primary role in the browser is to interact with and manipulate the DOM, including changing content, attributes, and styles."
        },
        {
            question: "What is the top-level object in the browser's DOM?",
            options: ["`document`", "`window`", "`html`", "`body`"],
            correctAnswer: 1,
            explanation: "The `window` object represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. The `document` object is a property of the `window` object."
        },
        {
            question: "Finding an HTML element in the DOM is often the ______ step in DOM manipulation.",
            options: ["last", "only", "first", "most difficult"],
            correctAnswer: 2,
            explanation: "Before you can manipulate an element (change its style, content, etc.), you first need to get a reference to it in your JavaScript code."
        }
    ],
    'js-dom-methods': [
        {
            question: "Which method is the fastest and most efficient for finding an element by its unique ID?",
            options: ["`querySelector('#myId')`", "`getElementsByClassName('myId')`", "`getElementById('myId')`", "`findAll('#myId')`"],
            correctAnswer: 2,
            explanation: "`getElementById` is highly optimized for this specific purpose."
        },
        {
            question: "Which method returns a live HTMLCollection of elements?",
            options: ["`querySelector()`", "`querySelectorAll()`", "`getElementsByTagName()`", "`find()`"],
            correctAnswer: 2,
            explanation: "`getElementsByTagName` and `getElementsByClassName` return a live collection, meaning it automatically updates if elements are added or removed from the DOM. `querySelectorAll` returns a static NodeList."
        },
        {
            question: "How do you change the CSS `background-color` of an element with `myElement.style`?",
            options: ["`myElement.style.background-color = 'blue';`", "`myElement.style.backgroundColor = 'blue';`", "`myElement.style('background-color', 'blue');`", "`myElement.css('background-color', 'blue');`"],
            correctAnswer: 1,
            explanation: "When accessing CSS properties in JavaScript, multi-word properties like `background-color` are converted to camelCase (`backgroundColor`)."
        },
        {
            question: "Which method is used to add a new class to an element?",
            options: ["`element.addClass('new-class')`", "`element.classes.add('new-class')`", "`element.className += ' new-class'`", "`element.classList.add('new-class')`"],
            correctAnswer: 3,
            explanation: "The `classList` property provides methods like `add()`, `remove()`, `toggle()`, and `contains()` which are the modern and safest way to manipulate classes."
        },
        {
            question: "How do you create a new `<p>` element in JavaScript?",
            options: ["`document.createElement('p')`", "`document.create('p')`", "`new HTMLParagraphElement()`", "`document.new('p')`"],
            correctAnswer: 0,
            explanation: "The `document.createElement()` method is the standard way to create a new HTML element in memory, which you can then append to the DOM."
        }
    ],
    'js-events': [
        {
            question: "What is the modern and recommended way to handle an event in JavaScript?",
            options: ["Using HTML `onclick` attributes", "Using `element.onclick = function(){}`", "Using `element.addEventListener()`", "Using jQuery"],
            correctAnswer: 2,
            explanation: "`addEventListener()` is the standard. It allows you to add multiple listeners for the same event, and it provides more control over the event handling process (e.g., event capturing vs. bubbling)."
        },
        {
            question: "What does 'event bubbling' mean?",
            options: ["The event is handled by the parent element first, then the child", "The event is handled by the child element first, then bubbles up to its parent elements", "The event creates a visual bubble on the screen", "The event is handled twice"],
            correctAnswer: 1,
            explanation: "By default, events bubble up from the target element to the root of the DOM. This allows you to handle an event on a parent element instead of on every child (event delegation)."
        },
        {
            question: "Which event is fired when a user clicks a button?",
            options: ["`onmouseover`", "`onchange`", "`onclick`", "`onkeydown`"],
            correctAnswer: 2,
            explanation: "The `click` event is the most common event, fired when a pointing device button is pressed and released on a single element."
        },
        {
            question: "How can you prevent the default action of an event, like a form submission?",
            options: ["`event.stop()`", "`event.preventDefault()`", "`event.cancel()`", "`return false;` in the handler"],
            correctAnswer: 1,
            explanation: "Calling `event.preventDefault()` within an event handler will stop the browser from carrying out its default action, such as following a link or submitting a form."
        },
        {
            question: "The first argument of an event listener function is usually what?",
            options: ["The element that triggered the event", "An object containing information about the event", "The current timestamp", "The name of the event"],
            correctAnswer: 1,
            explanation: "The event listener is automatically passed an Event object, which contains useful properties and methods like `event.target`, `event.key`, and `event.preventDefault()`."
        }
    ],
    'js-strings-and-methods': [
        {
            question: "How do you find the length of a string `str`?",
            options: ["`str.length`", "`str.size()`", "`length(str)`", "`str.count`"],
            correctAnswer: 0,
            explanation: "The `length` property returns the number of characters in a string."
        },
        {
            question: "Which method extracts a part of a string and returns it as a new string?",
            options: ["`slice()`", "`split()`", "`substr()`", "Both A and C"],
            correctAnswer: 0,
            explanation: "`slice(start, end)` is the modern and recommended way to extract a section of a string. `substring()` is similar, but `substr()` is considered legacy."
        },
        {
            question: "How do you convert a string `str` to all uppercase letters?",
            options: ["`str.toUpperCase()`", "`str.toUpper()`", "`str.upper()`", "`str.uppercase()`"],
            correctAnswer: 0,
            explanation: "The `toUpperCase()` method returns the calling string value converted to uppercase."
        },
        {
            question: "What is a 'template literal'?",
            options: ["A string created with single quotes", "A string created with double quotes", "A string created with backticks (``) that allows for embedded expressions and multi-line strings", "A comment template"],
            correctAnswer: 2,
            explanation: "Template literals, introduced in ES6, provide a more flexible and powerful way to work with strings. Embedded expressions are indicated with a dollar sign and curly braces, like `${myVar}`."
        },
        {
            question: "Which method checks if a string includes another string?",
            options: ["`includes()`", "`contains()`", "`has()`", "`find()`"],
            correctAnswer: 0,
            explanation: "The `includes()` method determines whether one string may be found within another string, returning `true` or `false` as appropriate."
        }
    ],
    'js-array-iteration': [
        {
            question: "Which array method creates a new array with the results of calling a provided function on every element?",
            options: ["`forEach()`", "`map()`", "`filter()`", "`reduce()`"],
            correctAnswer: 1,
            explanation: "`map()` is used for transforming an array. It creates a new array of the same length, where each element is the result of the callback function."
        },
        {
            question: "Which array method creates a new array with all elements that pass the test implemented by the provided function?",
            options: ["`forEach()`", "`map()`", "`filter()`", "`reduce()`"],
            correctAnswer: 2,
            explanation: "`filter()` is used to select a subset of elements from an array. It returns a new, potentially shorter, array."
        },
        {
            question: "Which method would be best to calculate the sum of all numbers in an array?",
            options: ["`forEach()`", "`map()`", "`filter()`", "`reduce()`"],
            correctAnswer: 3,
            explanation: "`reduce()` is used to execute a reducer function on each element of the array, resulting in a single output value (e.g., a sum, or a flattened array)."
        },
        {
            question: "What is the main difference between `forEach()` and `map()`?",
            options: ["There is no difference", "`forEach()` is faster", "`map()` returns a new array, while `forEach()` returns `undefined` and is used for its side effects", "`forEach()` can modify the original array, `map()` cannot"],
            correctAnswer: 2,
            explanation: "You use `map()` when you want to transform the array into a new one. You use `forEach()` when you just want to do something with each element, like logging it to the console."
        },
        {
            question: "Which method returns the first element in an array that satisfies a provided testing function?",
            options: ["`filter()`", "`find()`", "`findIndex()`", "`some()`"],
            correctAnswer: 1,
            explanation: "`find()` returns the value of the first element that passes the test. `filter()` would return an array of all matching elements, and `findIndex()` would return the index of the first match."
        }
    ],
    'js-dates-and-math': [
        {
            question: "How do you create a new `Date` object?",
            options: ["`new Date();`", "`Date.now()`", "`Date.create()`", "`new Time();`"],
            correctAnswer: 0,
            explanation: "The `new Date()` constructor creates a new date object with the current date and time if no arguments are provided."
        },
        {
            question: "Which `Math` method returns a random number between 0 (inclusive) and 1 (exclusive)?",
            options: ["`Math.rand()`", "`Math.random()`", "`Math.number()`", "`Math.next()`"],
            correctAnswer: 1,
            explanation: "`Math.random()` is the standard way to generate pseudo-random numbers in JavaScript."
        },
        {
            question: "How would you round the number 7.25 to the nearest integer?",
            options: ["`Math.ceil(7.25)`", "`Math.floor(7.25)`", "`Math.round(7.25)`", "`Math.trunc(7.25)`"],
            correctAnswer: 2,
            explanation: "`Math.round()` rounds to the nearest integer (7). `Math.ceil()` rounds up (8), and `Math.floor()` rounds down (7)."
        },
        {
            question: "Which method returns the largest of zero or more numbers?",
            options: ["`Math.max()`", "`Math.largest()`", "`Math.maximum()`", "`Math.peak()`"],
            correctAnswer: 0,
            explanation: "For example, `Math.max(1, 10, 5)` would return `10`."
        },
        {
            question: "In the `Date` object, months are indexed from what number?",
            options: ["1 (January) to 12 (December)", "0 (January) to 11 (December)", "They are represented by strings", "It depends on the user's locale"],
            correctAnswer: 1,
            explanation: "This is a common source of bugs. January is month 0, February is 1, and so on. Days of the week are also 0-indexed starting from Sunday."
        }
    ],
    'js-es6-features': [
        {
            question: "Which keywords were introduced in ES6 for variable declaration?",
            options: ["`var` and `const`", "`let` and `const`", "`let` and `var`", "`static` and `const`"],
            correctAnswer: 1,
            explanation: "`let` and `const` were introduced in ES6. They provide block scope, which is more predictable than the function scope of `var`."
        },
        {
            question: "What is the syntax for an arrow function?",
            options: ["`function() => {}`", "`=> function() {}`", "`() => {}`", "`function => {}`"],
            correctAnswer: 2,
            explanation: "Arrow functions provide a more concise syntax for writing function expressions. For example, `(a, b) => a + b`."
        },
        {
            question: "What is object destructuring?",
            options: ["Deleting properties from an object", "A way to unpack properties from objects into distinct variables", "Combining multiple objects into one", "A new type of object"],
            correctAnswer: 1,
            explanation: "Destructuring assignment makes it easy to extract data from arrays or objects. For example, `const { name, age } = person;`."
        },
        {
            question: "What does the spread operator (`...`) do for arrays?",
            options: ["It compresses the array", "It allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected", "It creates a loop", "It selects the last element"],
            correctAnswer: 1,
            explanation: "The spread syntax is commonly used to make shallow copies of arrays or to combine arrays, e.g., `const newArr = [...arr1, ...arr2];`."
        },
        {
            question: "What is a major advantage of `let` and `const` over `var`?",
            options: ["They can be redeclared", "They are globally scoped", "They have block scope", "They can hold more data"],
            correctAnswer: 2,
            explanation: "Block scope means the variable is confined to the block (`{...}`) in which it is defined, which prevents bugs from variables 'leaking' out of loops or conditional statements."
        }
    ],
    'js-async-intro': [
        {
            question: "Why is asynchronous programming important in JavaScript for browsers?",
            options: ["It makes the code run faster", "It allows long-running operations (like API requests) to run without freezing the user interface", "It is more secure", "It is the only way to write functions"],
            correctAnswer: 1,
            explanation: "Since JavaScript is single-threaded, a long synchronous operation would block the main thread, making the page unresponsive. Asynchronous operations allow the browser to remain responsive."
        },
        {
            question: "What is a 'callback function'?",
            options: ["A function that calls another function", "A function that is called when you dial a number", "A function passed as an argument to another function, to be executed later", "A function that always returns a value"],
            correctAnswer: 2,
            explanation: "Callbacks are the foundational mechanism for handling asynchronous operations in JavaScript. The outer function performs a task, and when it's complete, it calls the callback function."
        },
        {
            question: "What is 'Callback Hell'?",
            options: ["A very difficult callback function", "When you have too many comments in your code", "Deeply nested, unreadable callback functions", "A JavaScript error"],
            correctAnswer: 2,
            explanation: "'Callback Hell' (or the 'Pyramid of Doom') refers to the situation where multiple nested asynchronous operations make the code very difficult to read and maintain."
        },
        {
            question: "What is a common example of an asynchronous function in the browser?",
            options: ["`Math.round()`", "`Array.prototype.push()`", "`setTimeout()`", "`console.log()`"],
            correctAnswer: 2,
            explanation: "`setTimeout(callback, delay)` is a classic asynchronous function. It schedules the `callback` to be executed after a certain `delay`, but it does not stop the rest of the script from running."
        },
        {
            question: "JavaScript is...",
            options: ["Multi-threaded", "Single-threaded", "Dual-threaded", "Non-threaded"],
            correctAnswer: 1,
            explanation: "JavaScript has a single-threaded execution model, meaning it can only do one thing at a time. It uses an event loop to handle asynchronous operations concurrently."
        }
    ],
    'js-promises': [
        {
            question: "A `Promise` in JavaScript is an object that represents what?",
            options: ["A guarantee that a function will run", "The eventual completion (or failure) of an asynchronous operation and its resulting value", "A promise to the user that the website will work", "A string of text"],
            correctAnswer: 1,
            explanation: "A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason."
        },
        {
            question: "What are the three states of a Promise?",
            options: ["pending, fulfilled, rejected", "waiting, complete, failed", "started, finished, error", "ready, set, go"],
            correctAnswer: 0,
            explanation: "A Promise starts in the `pending` state, and from there it can transition to either the `fulfilled` state (success) or the `rejected` state (failure)."
        },
        {
            question: "Which method is used to handle the successful fulfillment of a Promise?",
            options: ["`.catch()`", "`.then()`", "`.finally()`", "`.success()`"],
            correctAnswer: 1,
            explanation: "The `.then()` method takes a callback function that will be executed when the Promise is successfully resolved. The callback receives the result."
        },
        {
            question: "Which method is used to handle the rejection (failure) of a Promise?",
            options: ["`.catch()`", "`.then()`", "`.error()`", "`.fail()`"],
            correctAnswer: 0,
            explanation: "The `.catch()` method is syntactic sugar for `.then(null, rejection)`. It takes a callback that will be executed when the Promise is rejected, receiving the error as an argument."
        },
        {
            question: "What is `Promise.all()` used for?",
            options: ["To find the first promise that resolves", "To handle all promises in a specific order", "To run when all promises in an iterable have fulfilled, or when one of them rejects", "To combine all promises into one big promise"],
            correctAnswer: 2,
            explanation: "`Promise.all()` is useful for aggregating the results of multiple promises. It resolves with an array of the results when all input promises have resolved."
        }
    ],
    'js-classes': [
        {
            question: "What keyword is used to create a class in JavaScript?",
            options: ["`class`", "`function`", "`object`", "`prototype`"],
            correctAnswer: 0,
            explanation: "ES6 introduced the `class` keyword as a more convenient, clearer syntax for creating constructor functions and prototypes."
        },
        {
            question: "What is the name of the special method for creating and initializing an object created with a class?",
            options: ["`init()`", "`create()`", "`constructor()`", "`main()`"],
            correctAnswer: 2,
            explanation: "The `constructor` method is a special method that is automatically called when a new object is instantiated from a class."
        },
        {
            question: "How do you create an instance of a class named `Car`?",
            options: ["`new Car();`", "`Car.create();`", "`create Car();`", "`Car();`"],
            correctAnswer: 0,
            explanation: "The `new` keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function."
        },
        {
            question: "How does one class inherit from another in JavaScript?",
            options: ["Using the `inherit` keyword", "Using the `extends` keyword", "By copying and pasting the code", "Using `prototype.inherit()`"],
            correctAnswer: 1,
            explanation: "The `extends` keyword is used in class declarations or class expressions to create a class as a child of another class."
        },
        {
            question: "What is the purpose of the `super()` keyword in a constructor?",
            options: ["To refer to the parent class object", "To call the constructor of the parent class", "To make the class 'super'", "It is not a real keyword"],
            correctAnswer: 1,
            explanation: "In a child class's constructor, `super()` must be called before the `this` keyword can be used. It calls the parent class's constructor and binds the `this` context."
        }
    ],
    'js-modules': [
        {
            question: "What is the primary benefit of using modules in JavaScript?",
            options: ["To make your code run faster", "To organize code into reusable, separate files", "To make API calls", "To reduce the final file size"],
            correctAnswer: 1,
            explanation: "Modules help to break down a large codebase into smaller, more manageable pieces. They prevent 'polluting' the global namespace by keeping variables and functions private to the module unless explicitly exported."
        },
        {
            question: "Which keyword is used to make a function or variable available for use in other modules?",
            options: ["`export`", "`import`", "`expose`", "`public`"],
            correctAnswer: 0,
            explanation: "The `export` statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs."
        },
        {
            question: "Which keyword is used to bring an exported function or variable into another module?",
            options: ["`export`", "`import`", "`require`", "`include`"],
            correctAnswer: 1,
            explanation: "The `import` statement is used to import bindings that are exported by another module."
        },
        {
            question: "What is a 'default export'?",
            options: ["The first export in a file", "An export that is automatically imported into all files", "A special export that marks the main value exported from a module", "A fallback export if others fail"],
            correctAnswer: 2,
            explanation: "A module can have one default export. When importing it, you don't use curly braces and you can assign it any name. e.g., `import myDefault from './myModule.js';`"
        },
        {
            question: "How do you use modules in a browser environment?",
            options: ["It works automatically", "You must use a `<script type='module'>` tag", "You must use a bundler like Webpack or Vite", "Both B and C are common methods"],
            correctAnswer: 3,
            explanation: "Modern browsers support ES modules directly via `<script type='module'>`. However, for larger applications, developers often use build tools (bundlers) to optimize and combine modules for production."
        }
    ],
    'js-json': [
        {
            question: "What does JSON stand for?",
            options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Ordered Network-data", "Java Source Open Network"],
            correctAnswer: 0,
            explanation: "JSON is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate."
        },
        {
            question: "Which data types are allowed for values in JSON?",
            options: ["string, number, boolean, array, object, null", "function, undefined, symbol", "Only strings and numbers", "Any JavaScript data type"],
            correctAnswer: 0,
            explanation: "JSON's data types are a limited subset of JavaScript's. Functions, `undefined`, and Symbols are not valid in JSON."
        },
        {
            question: "How do you convert a JavaScript object `obj` into a JSON string?",
            options: ["`JSON.toString(obj)`", "`obj.toJSON()`", "`JSON.stringify(obj)`", "`JSON.convert(obj)`"],
            correctAnswer: 2,
            explanation: "The `JSON.stringify()` method is the standard way to serialize a JavaScript object or value into a JSON string."
        },
        {
            question: "How do you convert a JSON string `str` into a JavaScript object?",
            options: ["`JSON.toObject(str)`", "`JSON.parse(str)`", "`new Object(str)`", "`eval(str)`"],
            correctAnswer: 1,
            explanation: "The `JSON.parse()` method parses a JSON string, constructing the JavaScript value or object described by the string. `eval()` should be avoided as it's a security risk."
        },
        {
            question: "In JSON syntax, keys must be what?",
            options: ["Strings enclosed in double quotes", "Strings enclosed in single or double quotes", "Any valid JavaScript identifier", "Numbers"],
            correctAnswer: 0,
            explanation: "A key difference from JavaScript object literals is that in JSON, the keys must always be strings wrapped in double quotes."
        }
    ],
    'js-fetch-api': [
        {
            question: "What is the `fetch()` API used for?",
            options: ["To fetch elements from the DOM", "To make network requests (e.g., to an API) in the browser", "To fetch files from the user's computer", "To manage application state"],
            correctAnswer: 1,
            explanation: "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It's the modern replacement for XMLHttpRequest."
        },
        {
            question: "What does a `fetch()` call return?",
            options: ["The JSON data directly", "A `Promise` that resolves to the `Response` object", "A callback function", "An XML document"],
            correctAnswer: 1,
            explanation: "`fetch()` is asynchronous and Promise-based. The first `.then()` block receives a `Response` object, not the actual data."
        },
        {
            question: "After fetching data, how do you extract the JSON body from the `Response` object?",
            options: ["`response.body`", "`response.json()`", "`response.parseJSON()`", "`JSON.parse(response)`"],
            correctAnswer: 1,
            explanation: "The `response.json()` method reads the response stream to completion and returns a promise that resolves with the result of parsing the body text as JSON."
        },
        {
            question: "How do you handle network errors or failed requests with `fetch()`?",
            options: ["By using a `try...catch` block", "By adding a `.catch()` block to the promise chain", "By checking `response.ok`", "All of the above"],
            correctAnswer: 3,
            explanation: "A `fetch()` promise only rejects on a network failure. For HTTP errors like 404 or 500, you must check the `response.ok` status yourself. Wrapping in `async/await` with `try/catch` is a common pattern."
        },
        {
            question: "How do you send data, like a JSON object, in a POST request using `fetch()`?",
            options: ["You can't send data with fetch", "Append it to the URL", "Provide a second argument to `fetch()` with the method, headers, and a stringified body", "Use the `send()` method"],
            correctAnswer: 2,
            explanation: "You need to configure the request by passing an options object as the second argument, specifying `method: 'POST'`, `headers: { 'Content-Type': 'application/json' }`, and `body: JSON.stringify(data)`."
        }
    ],
    'js-error-handling': [
        {
            question: "Which statement is used to handle exceptions (errors) in JavaScript?",
            options: ["`if...else`", "`try...catch`", "`switch`", "`onerror`"],
            correctAnswer: 1,
            explanation: "The `try...catch` statement marks a block of statements to try, and specifies a response should an exception be thrown."
        },
        {
            question: "What is the purpose of the `finally` block in a `try...catch...finally` statement?",
            options: ["It runs only if an error occurs", "It runs only if no error occurs", "It runs regardless of whether an error occurred or not", "It defines the final error message"],
            correctAnswer: 2,
            explanation: "The `finally` block is useful for cleanup code that should always execute, such as closing a file or a network connection."
        },
        {
            question: "How do you create and throw a custom error?",
            options: ["`throw new Error('My error message');`", "`error('My error message');`", "`createError('My error message');`", "`return new Error('My error message');`"],
            correctAnswer: 0,
            explanation: "The `throw` statement allows you to create a custom error. It's common practice to throw an `Error` object."
        },
        {
            question: "In a `catch(error)` block, what is the `error` object?",
            options: ["A string with the error message", "A boolean value", "An object containing details about the error, such as its name and message", "The line number of the error"],
            correctAnswer: 2,
            explanation: "The `catch` block receives an error object, which typically has `name` and `message` properties that can be used to understand and log the error."
        },
        {
            question: "When a Promise is rejected, which block is analogous to a `catch` block?",
            options: ["The `.then()` block", "The `.finally()` block", "The `.catch()` block of the promise chain", "There is no equivalent"],
            correctAnswer: 2,
            explanation: "A `.catch(error => ...)` block in a promise chain serves the same purpose as a `try...catch` block for handling exceptions in asynchronous code."
        }
    ],
    'js-this-keyword': [
        {
            question: "In the global scope (outside of any function), what does `this` refer to?",
            options: ["`null`", "The `document` object", "The global object (`window` in a browser)", "`undefined`"],
            correctAnswer: 2,
            explanation: "In the global execution context, `this` refers to the global object, which is `window` in web browsers."
        },
        {
            question: "Inside an object's method (defined with `function`), what does `this` refer to?",
            options: ["The global object", "The function itself", "The object that the method was called on", "The parent object"],
            correctAnswer: 2,
            explanation: "When a function is called as a method of an object, its `this` is set to the object the method is called on. This is a fundamental concept of object-oriented programming."
        },
        {
            question: "Inside an arrow function, how is the value of `this` determined?",
            options: ["It's always the global object", "It's determined by how the function is called", "It is inherited lexically from the enclosing (parent) scope", "It is always `undefined`"],
            correctAnswer: 2,
            explanation: "Arrow functions do not have their own `this` binding. Instead, they 'capture' the `this` value of the enclosing context, which makes them behave more predictably inside callbacks."
        },
        {
            question: "What do the `.call()` and `.apply()` methods do?",
            options: ["They call a function asynchronously", "They allow you to call a function with a specified `this` value and arguments", "They convert a function to a string", "They are used to create new functions"],
            correctAnswer: 1,
            explanation: "Both `.call()` and `.apply()` let you invoke a function while explicitly setting its `this` context, which is useful for 'borrowing' methods."
        },
        {
            question: "In a DOM event handler, what does `this` typically refer to?",
            options: ["The `window` object", "The event object", "The HTML element that the event handler is attached to", "The `document` object"],
            correctAnswer: 2,
            explanation: "When an event listener is called, `this` is set to the element that dispatched the event."
        }
    ],
    'js-prototypes': [
        {
            question: "What is the prototype chain?",
            options: ["A list of all objects in a script", "A chain of objects used for building and linking new objects", "A chain of `[[Prototype]]` properties that objects inherit from, ending with `null`", "A security feature in JavaScript"],
            correctAnswer: 2,
            explanation: "When trying to access a property on an object, JavaScript will look at the object itself, and if it can't find it, it will look at the object's prototype, then that prototype's prototype, and so on, until it finds the property or reaches the end of the chain."
        },
        {
            question: "Nearly all objects in JavaScript are instances of what?",
            options: ["`Object`", "`Function`", "`Array`", "`null`"],
            correctAnswer: 0,
            explanation: "At the end of the prototype chain is `Object.prototype`, which contains common methods like `.toString()` and `.hasOwnProperty()`. Therefore, almost every object inherits from `Object`."
        },
        {
            question: "How does JavaScript implement inheritance?",
            options: ["Using the `class` and `extends` keywords exclusively", "Through prototypal inheritance", "By copying properties from one object to another", "It does not support inheritance"],
            correctAnswer: 1,
            explanation: "JavaScript's inheritance model is based on objects inheriting from other objects via their prototype. The `class` syntax introduced in ES6 is largely syntactic sugar over this existing prototype system."
        },
        {
            question: "How can you add a new method to all instances of an array?",
            options: ["You can't do this", "By using a `for` loop", "By adding the method to `Array.prototype`", "By creating a new class that extends `Array`"],
            correctAnswer: 2,
            explanation: "By modifying the prototype of a constructor (like `Array`), you can add new properties and methods that will be available on all instances of that constructor."
        },
        {
            question: "What is the `__proto__` property?",
            options: ["A standard way to access an object's prototype", "A deprecated, non-standard way to access an object's `[[Prototype]]`", "A property that all functions have", "A CSS property"],
            correctAnswer: 1,
            explanation: "While widely supported, `__proto__` is not part of the official standard. The standard way to get an object's prototype is `Object.getPrototypeOf(obj)`."
        }
    ],
    'js-closures': [
        {
            question: "What is a closure in JavaScript?",
            options: ["A function that has no access to outer variables", "A way to close the browser window", "A function that 'remembers' the environment in which it was created", "An error in the code"],
            correctAnswer: 2,
            explanation: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It 'closes over' the variables from its lexical scope."
        },
        {
            question: "What is a common use case for closures?",
            options: ["Creating private variables and methods", "Mathematical calculations", "Styling webpages", "Creating loops"],
            correctAnswer: 0,
            explanation: "By defining variables inside an outer function and returning an inner function that accesses them, you can create state that is not directly accessible from the outside, mimicking private variables."
        },
        {
            question: "Consider `function outer() { let x = 10; return function inner() { console.log(x); } }`. What happens to `x` after `outer()` is called?",
            options: ["`x` is destroyed (garbage collected)", "`x` remains in memory and is accessible to the `inner` function", "`x` becomes a global variable", "`x` becomes `undefined`"],
            correctAnswer: 1,
            explanation: "This is the essence of a closure. The `inner` function maintains a reference to its lexical environment, which includes the variable `x`, so `x` is not garbage collected."
        },
        {
            question: "Do loops in JavaScript create closures?",
            options: ["Yes, especially `for` loops with `var` can have surprising closure behavior", "No, only functions create closures", "Only `while` loops", "Only `for...of` loops"],
            correctAnswer: 0,
            explanation: "A classic interview question involves a `for` loop using `var` inside a `setTimeout`. Because `var` is function-scoped, all the timeout callbacks will share the same `i` variable from the closure, leading to unexpected results. Using `let` (which is block-scoped) fixes this."
        },
        {
            question: "Closures give you access to...",
            options: ["Only the global scope", "Only the function's own scope", "The function's own scope, the outer function's scope, and the global scope", "The user's file system"],
            correctAnswer: 2,
            explanation: "This chain of accessible scopes is what makes closures so powerful and flexible."
        }
    ],
    'js-event-loop': [
        {
            question: "What is the 'Call Stack' in JavaScript?",
            options: ["A list of all variables", "A data structure that records where in the program we are. If we step into a function, we put it on top of the stack.", "A queue of events", "The browser's console"],
            correctAnswer: 1,
            explanation: "The call stack is a LIFO (Last-In, First-Out) stack that keeps track of function calls. When a function is called, it's pushed onto the stack, and when it returns, it's popped off."
        },
        {
            question: "What is the 'Callback Queue' (or 'Task Queue')?",
            options: ["A queue of functions waiting to be executed", "A queue of API responses and DOM events waiting to be processed once the call stack is empty", "The call stack itself", "A list of errors"],
            correctAnswer: 1,
            explanation: "When an asynchronous operation (like `setTimeout` or a `fetch` request) completes, its callback function is placed in the callback queue."
        },
        {
            question: "What is the role of the Event Loop?",
            options: ["To execute JavaScript code line by line", "To constantly monitor the Call Stack and the Callback Queue. If the stack is empty, it takes the first event from the queue and pushes it to the stack.", "To handle user clicks", "To render the HTML"],
            correctAnswer: 1,
            explanation: "The event loop is the mechanism that allows JavaScript's single thread to handle asynchronous events without getting blocked."
        },
        {
            question: "Given `console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');`, what is the output?",
            options: ["A, B, C", "A, C, B", "B, A, C", "It's unpredictable"],
            correctAnswer: 1,
            explanation: "`A` and `C` are logged synchronously. The `setTimeout` callback `B` is placed in the callback queue. The event loop waits for the stack to be empty (after `C` is logged) and then pushes `B` to the stack."
        },
        {
            question: "Is the Event Loop part of the JavaScript V8 engine itself?",
            options: ["Yes, it's built into the engine", "No, it is a part of the browser's and Node.js's runtime environment", "It's a separate library you must import", "It's a physical loop in the computer"],
            correctAnswer: 1,
            explanation: "The JavaScript engine itself just has a call stack and a heap. The browser (or Node.js) provides the event loop, callback queue, and the Web APIs (`setTimeout`, DOM events, etc.)."
        }
    ],
    'js-frameworks-intro': [
        {
            question: "What is a 'component' in the context of modern frameworks like React or Vue?",
            options: ["A CSS class", "A JavaScript file", "A reusable, self-contained piece of the UI, often combining HTML, CSS, and JS", "An HTML tag"],
            correctAnswer: 2,
            explanation: "Component-based architecture is the core concept of modern frontend frameworks, allowing developers to build complex UIs from small, isolated, and reusable pieces."
        },
        {
            question: "What does it mean for a framework to be 'declarative'?",
            options: ["You declare all your variables at the top of the file", "You tell the framework *what* you want the UI to look like, and the framework figures out *how* to update the DOM", "You have to write more code", "You must write instructions step-by-step"],
            correctAnswer: 1,
            explanation: "Declarative programming (e.g., React: `<h1>{title}</h1>`) is in contrast to imperative programming (e.g., vanilla JS: `const h1 = document.createElement('h1'); h1.textContent = title; ...`), where you manually describe every step."
        },
        {
            question: "What is 'state' in a frontend application?",
            options: ["The current country the user is in", "The visual appearance of the app", "Data that can change over time and that the UI should react to", "The `hover` or `focus` state of a button"],
            correctAnswer: 2,
            explanation: "State is any data that describes the condition of your app, such as a user's name in an input field, whether a modal is open, or a list of items fetched from an API. When state changes, the framework re-renders the UI."
        },
        {
            question: "What are 'props'?",
            options: ["A special type of HTML attribute", "Properties of a CSS class", "A way for parent components to pass data down to child components", "Global variables"],
            correctAnswer: 2,
            explanation: "Props (short for properties) are the mechanism for passing data down the component tree. They are typically read-only in the child component."
        },
        {
            question: "What is the 'Virtual DOM'?",
            options: ["A fake DOM used for testing", "An in-memory representation of the real DOM. Frameworks use it to calculate the most efficient way to update the actual DOM.", "An older version of the DOM", "A feature of the browser's developer tools"],
            correctAnswer: 1,
            explanation: "Directly manipulating the real DOM can be slow. The Virtual DOM allows frameworks to 'diff' the previous and current UI state and make minimal, batched updates to the real DOM, which improves performance."
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
