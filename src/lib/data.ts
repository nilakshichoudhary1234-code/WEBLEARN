
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
      // --- Basic Level ---
      {
        slug: 'html-introduction',
        title: 'HTML Introduction',
        description: 'Learn what HTML is and its role in web pages.',
        content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements, which tell the browser how to display the content. At its core, HTML is about defining the meaning and structure of your content, a concept known as semantics. For instance, is this text a heading, a paragraph, a list, or something else? HTML provides the tags to make these distinctions clear.',
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
        description: 'Learn how to provide additional information to elements.',
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
        description: 'Learn how to define blocks of text.',
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
        description: 'Learn how to add comments to your code.',
        content: 'HTML comments are not displayed in the browser, but they can help document your HTML source code. Comments are written as `<!-- This is a comment -->` and can be used to leave notes for yourself or other developers.',
        codeSnippet: { language: 'html', code: '<!-- This comment will not be displayed -->\n<p>This paragraph will be displayed.</p>' },
        output: 'Only the paragraph is visible on the page.',
      },
      // --- Intermediate Level ---
      {
        slug: 'html-links',
        title: 'HTML Links',
        description: 'Learn how to create hyperlinks to connect pages.',
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
        description: 'Learn how to display data in rows and columns.',
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
        description: 'Learn how to create forms to collect user input.',
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
        description: 'Learn to create graphics on the web.',
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
        description: 'Learn what CSS is and how it styles HTML.',
        content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, or in other media. It controls colors, fonts, spacing, layout, and much more.',
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
        description: 'Learn how to target specific HTML elements for styling.',
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
        description: 'Learn how to add comments to your stylesheet.',
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
        description: 'Master one-dimensional layouts with this powerful layout module.',
        content: 'The Flexbox Layout module makes it easier to design flexible responsive layout structures in one dimension (either a row or a column). It provides powerful alignment (`align-items`) and distribution (`justify-content`) capabilities.',
        codeSnippet: { language: 'css', code: '.container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}' },
        output: 'Items inside `.container` will be spaced out evenly along the main axis and centered on the cross axis.',
      },
      {
        slug: 'css-grid',
        title: 'CSS Grid',
        description: 'Master two-dimensional layouts for complex page structures.',
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
        description: 'Learn about tools that extend the capabilities of CSS.',
        content: 'Preprocessors like Sass and Less are scripting languages that extend the default capabilities of CSS. They allow you to use variables, nesting, mixins, functions, and more, which can make your CSS more maintainable, themeable, and organized. The code is then compiled into regular CSS.',
        codeSnippet: { language: 'css', code: '// Sass Example\n$primary-color: #333;\n\nbody {\n  color: $primary-color;\n  a {\n    color: darken($primary-color, 10%);\n  }\n}' },
        output: 'This Sass code uses variables and nesting, which would be compiled into standard CSS.',
      },
      {
        slug: 'css-methodologies-bem',
        title: 'CSS Methodologies (BEM)',
        description: 'Learn strategies for writing scalable and maintainable CSS.',
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
        codeSnippet: { language: 'javascript', code: '// JavaScript can change HTML content\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";' },
        output: 'The text of the HTML element with id="demo" is changed.',
      },
      {
        slug: 'js-syntax-and-statements',
        title: 'JS Syntax and Statements',
        description: 'Learn the fundamental rules for writing JavaScript.',
        content: 'A JavaScript program is a list of statements to be executed by a computer. Statements are separated by semicolons. JavaScript is case-sensitive, so `myVariable` and `myvariable` are different.',
        codeSnippet: { language: 'javascript', code: 'let x, y, z;  // Declare 3 variables\nx = 5;          // Assign the value 5 to x\ny = 6;          // Assign the value 6 to y\nz = x + y;      // Assign the sum of x and y to z' },
        output: 'These statements declare variables and perform a simple calculation.',
      },
      {
        slug: 'js-variables',
        title: 'JS Variables (var, let, const)',
        description: 'Learn how to store data values using variables.',
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
        description: 'Learn to store collections of key-value pairs.',
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
        description: 'Learn how JavaScript can interact with and change HTML content.',
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
        description: 'Learn how to react to user actions like clicks and key presses.',
        content: 'Events are actions that happen in the browser, such as a user clicking a button or pressing a key. You can use event listeners (`addEventListener`) to "listen" for these events and execute a function in response.',
        codeSnippet: { language: 'javascript', code: 'const button = document.getElementById("myBtn");\nbutton.addEventListener("click", function() {\n  alert("Button was clicked!");\n});' },
        output: 'When the button with id="myBtn" is clicked, an alert box will pop up.',
      },
      {
        slug: 'js-strings-and-methods',
        title: 'JS Strings and Methods',
        description: 'Learn methods for working with text.',
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
        description: 'Learn modern JavaScript syntax and features.',
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
        description: 'Learn concepts that are fundamental to modern frameworks.',
        content: 'Modern frameworks like React, Vue, and Angular build upon core JavaScript concepts. Key ideas to understand are: component-based architecture, managing state, props (passing data down), declarative vs. imperative programming, and virtual DOM concepts. Mastering these will make learning a framework much easier.',
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
    'html-introduction': [
      {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"],
        correctAnswer: 1,
        explanation: "HTML stands for Hyper Text Markup Language. It's the standard for creating web pages."
      },
      {
        question: "What is the primary purpose of HTML?",
        options: ["To style the web page", "To define the structure and meaning of web content", "To add interactivity to the web page", "To manage server-side logic"],
        correctAnswer: 1,
        explanation: "The main role of HTML is to structure content semantically, telling the browser what each part of the content represents (e.g., a heading, a paragraph, a link)."
      }
    ],
    'html-editors': [
      {
        question: "Which of the following is a professional code editor?",
        options: ["Notepad", "Microsoft Word", "VS Code", "Gmail"],
        correctAnswer: 2,
        explanation: "VS Code is a popular, free, and powerful code editor developed by Microsoft, widely used for web development."
      }
    ],
    'html-basic': [
      {
        question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
        options: ["It defines a variable.", "It tells the browser that the document is an HTML5 document.", "It creates a comment.", "It links to a stylesheet."],
        correctAnswer: 1,
        explanation: "The `<!DOCTYPE html>` declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures the page is rendered in standards mode."
      }
    ],
    'html-elements': [
      {
        question: "Which of the following is an example of an empty or void element?",
        options: ["<p>", "<img>", "<div>", "<span>"],
        correctAnswer: 1,
        explanation: "Empty elements are elements that do not have a closing tag or content. `<img>`, `<br>`, and `<hr>` are common examples."
      }
    ],
    'html-attributes': [
      {
        question: "Which attribute specifies the URL of the page a link goes to?",
        options: ["src", "link", "url", "href"],
        correctAnswer: 3,
        explanation: "The `href` attribute is used in an `<a>` tag to specify the destination of the hyperlink."
      }
    ],
    'html-headings': [
      {
        question: "For SEO and accessibility, how many `<h1>` elements should a page ideally have?",
        options: ["As many as you want", "Zero", "Exactly one", "At least two"],
        correctAnswer: 2,
        explanation: "It's a best practice to have only one `<h1>` element per page, representing the main title or subject of that page."
      }
    ],
    'html-paragraphs': [
      {
        question: "Which element is the correct choice for defining a paragraph?",
        options: ["<paragraph>", "<para>", "<p>", "<pg>"],
        correctAnswer: 2,
        explanation: "The `<p>` element is the correct semantic tag for defining a paragraph of text."
      }
    ],
    'html-styles': [
      {
        question: "Is using the `style` attribute (inline styles) generally considered a best practice for large websites?",
        options: ["Yes, it's the most efficient way", "No, it makes maintenance difficult and mixes content with presentation", "It does not matter", "Yes, it overrides all other styles"],
        correctAnswer: 1,
        explanation: "While inline styles work, they are hard to maintain. External stylesheets are preferred because they separate structure (HTML) from presentation (CSS), making the code cleaner and easier to manage."
      }
    ],
    'html-text-formatting': [
      {
        question: "What is the semantic difference between `<b>` and `<strong>`?",
        options: ["There is no difference", "`<b>` is for bold, `<strong>` is for important", "`<strong>` has more weight", "`<b>` is newer than `<strong>`"],
        correctAnswer: 1,
        explanation: "Both tags render text as bold by default, but `<strong>` indicates that the text has strong importance, significance, or urgency. Screen readers may use a different tone of voice for it."
      }
    ],
    'html-comments': [
      {
        question: "How do you correctly write a multi-line comment in HTML?",
        options: ["<!-- First line\nSecond line -->", "/* First line\nSecond line */", "// First line\n// Second line", "You cannot have multi-line comments"],
        correctAnswer: 0,
        explanation: "An HTML comment starts with `<!--` and ends with `-->`. Anything between these markers, including line breaks, is part of the comment."
      }
    ],
    'html-links': [
      {
        question: 'How do you create a link that opens in a new tab?',
        options: ['<a href="..." target="_blank">', '<a href="..." newtab>', '<a href="..." target="_new">', '<a href="..." open="new">'],
        correctAnswer: 0,
        explanation: 'Using `target="_blank"` instructs the browser to open the linked document in a new window or tab. It\'s important to also add `rel="noopener noreferrer"` for security.'
      }
    ],
    'html-images': [
      {
        question: "Why is the `alt` attribute on an `<img>` tag important?",
        options: ["It provides a caption that appears below the image.", "It is required for the image to load.", "It provides alternative text for screen readers and is displayed if the image fails to load.", "It sets the alignment of the image."],
        correctAnswer: 2,
        explanation: "The `alt` attribute is crucial for web accessibility, providing a textual description of the image for users who cannot see it."
      }
    ],
    'html-tables': [
      {
        question: "Which elements are used to semantically structure a table?",
        options: ["<header>, <body>, <footer>", "<thead>, <tbody>, <tfoot>", "<head>, <main>, <foot>", "<top>, <middle>, <bottom>"],
        correctAnswer: 1,
        explanation: "Using `<thead>`, `<tbody>`, and `<tfoot>` helps structure the table, which can be useful for styling and for accessibility tools."
      }
    ],
    'html-lists': [
      {
        question: "Which tag is used for a single term in a description list?",
        options: ["<item>", "<li>", "<dd>", "<dt>"],
        correctAnswer: 3,
        explanation: "In a `<dl>` (description list), `<dt>` stands for 'description term' and `<dd>` stands for 'description details'."
      }
    ],
    'html-block-and-inline': [
      {
        question: "Can you set a `width` and `height` on an inline element like a `<span>`?",
        options: ["Yes, without any changes", "No, width and height properties have no effect on non-replaced inline elements", "Only if you use JavaScript", "Only `width` works"],
        correctAnswer: 1,
        explanation: "By default, inline elements only take up as much space as their content requires. To apply dimensions, you must change its display property, for example to `inline-block` or `block`."
      }
    ],
    'html-classes-and-id': [
      {
        question: "How many times can a specific ID be used in an HTML document?",
        options: ["As many times as needed", "Twice", "Once", "Ten times"],
        correctAnswer: 2,
        explanation: "The value of an ID attribute MUST be unique within the HTML document. It is used to target a single, specific element."
      }
    ],
    'html-iframes': [
      {
        question: "What is a potential security risk of using iframes?",
        options: ["They can slow down your website.", "They can be used for 'clickjacking' attacks if not secured properly.", "They are not supported by modern browsers.", "They can only display insecure content."],
        correctAnswer: 1,
        explanation: "Clickjacking is a malicious technique of tricking a user into clicking on something different from what the user perceives. The `sandbox` attribute and `X-Frame-Options` header can help prevent this."
      }
    ],
    'html-forms': [
      {
        question: 'What is the purpose of the `name` attribute on an `<input>` element?',
        options: ["It is a unique identifier for the element.", "It provides the label text for the input.", "It is sent to the server along with the input's value to identify the data.", "It sets the default value of the input."],
        correctAnswer: 2,
        explanation: "When a form is submitted, the data is sent as name-value pairs. The `name` attribute provides the key for the submitted data."
      }
    ],
    'html-form-elements': [
      {
        question: "What is the purpose of the `<label>` element in a form?",
        options: ["To provide a caption for the form.", "To visually style the input.", "To associate a text label with a form control, improving accessibility.", "To create a multi-line text input."],
        correctAnswer: 2,
        explanation: "A `<label>` is programmatically associated with an input via the `for` attribute. This allows users to click the label to focus the input and helps screen readers announce the purpose of the input."
      }
    ],
    'html-head': [
      {
        question: "Which `<meta>` tag is essential for responsive web design?",
        options: ['<meta name="description" ...>', '<meta charset="UTF-8">', '<meta name="viewport" ...>', '<meta name="keywords" ...>'],
        correctAnswer: 2,
        explanation: 'The viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`) tells the browser how to control the page\'s dimensions and scaling on different devices.'
      }
    ],
    'html-layout-elements': [
      {
        question: "Which HTML5 element should contain the primary navigation links for a site?",
        options: ["<header>", "<nav>", "<menu>", "<links>"],
        correctAnswer: 1,
        explanation: "The `<nav>` element is specifically intended for major blocks of navigation links."
      }
    ],
    'html-responsive': [
      {
        question: "Is responsive design primarily an HTML or CSS concern?",
        options: ["HTML only", "CSS only", "Both, but mostly handled by CSS with a crucial meta tag in HTML", "JavaScript only"],
        correctAnswer: 2,
        explanation: "Responsive design requires the viewport meta tag in HTML, but the actual layout changes and adaptations are almost entirely controlled by CSS using techniques like flexible grids, flexible images, and media queries."
      }
    ],
    'html-semantic-elements': [
      {
        question: "Which element would be best for grouping an image and its caption?",
        options: ["<figure>", "<div>", "<image>", "<section>"],
        correctAnswer: 0,
        explanation: "The `<figure>` element is the semantically correct way to encapsulate media like an image, which can then be associated with a `<figcaption>`."
      }
    ],
    'html-multimedia': [
      {
        question: "What is the purpose of the `<source>` element inside a `<video>` tag?",
        options: ["To provide a text transcript.", "To provide multiple video file formats for better browser compatibility.", "To set the poster image.", "To define subtitles."],
        correctAnswer: 1,
        explanation: "Because not all browsers support the same video formats, you can provide multiple `<source>` elements, and the browser will use the first one it supports."
      }
    ],
    'html-apis': [
      {
        question: "Which Web Storage API object stores data only for the current browser session?",
        options: ["sessionStorage", "localStorage", "globalStorage", "cookieStorage"],
        correctAnswer: 0,
        explanation: "`sessionStorage` maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser tab is open)."
      }
    ],
    'html-graphics': [
      {
        question: "Which graphics technology is generally better for accessibility and SEO?",
        options: ["Canvas, because it's scripted.", "SVG, because it's XML-based and its content can be indexed and accessed by screen readers.", "Both are equal.", "Neither are accessible."],
        correctAnswer: 1,
        explanation: "SVG is an XML-based format. Its content is part of the DOM, which means text inside an SVG is findable, selectable, and accessible to assistive technologies. Canvas is a pixel-based drawing surface and is not inherently accessible."
      }
    ],
    'html-web-storage': [
      {
        question: "Is data stored in `localStorage` and `sessionStorage` sent to the server with every HTTP request?",
        options: ["Yes, always", "No, it is purely client-side storage", "Only `localStorage` is sent", "Only if the user allows it"],
        correctAnswer: 1,
        explanation: "Unlike cookies, data in Web Storage is not automatically sent to the server with every request. It is only accessible via JavaScript on the client side, which makes it more secure and efficient for storing larger amounts of data."
      }
    ],
    'html-web-workers': [
      {
        question: "Can a Web Worker directly manipulate the DOM (e.g., change an element's color)?",
        options: ["Yes, they have full access to the DOM.", "No, Web Workers run in a separate thread and do not have access to the `document` object.", "Only if given special permission.", "Yes, but it's not recommended."],
        correctAnswer: 1,
        explanation: "Web Workers operate in a different global context that is separate from the main window. They cannot access the DOM. To make changes to the UI, a worker must send a message back to the main script, which then performs the DOM manipulation."
      }
    ],
    'html-accessibility': [
      {
        question: "What does ARIA stand for?",
        options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Architecture", "Accessible Reading Interface Attributes", "Automated Reader Interaction API"],
        correctAnswer: 0,
        explanation: "ARIA is a set of attributes you can add to HTML elements to help make web content more accessible, especially for dynamic content and advanced user interface controls."
      }
    ],
    'html-best-practices': [
      {
        question: "Why is it important to validate your HTML?",
        options: ["To make your website load faster", "To ensure it works in future browsers and to catch syntax errors", "To get a higher score on Google", "It's not important"],
        correctAnswer: 1,
        explanation: "Validating your HTML using a tool like the W3C Markup Validation Service helps you find errors, such as missing closing tags or improperly nested elements, which can cause rendering issues and ensure your site is more future-proof."
      }
    ],
  },
  css: {
    'css-introduction': [
      {
        question: 'What does CSS stand for?',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        correctAnswer: 1,
        explanation: 'CSS stands for Cascading Style Sheets, and it is used to style and lay out web pages.'
      }
    ],
    'css-syntax': [
      {
        question: 'A CSS rule consists of a selector and what else?',
        options: ['A property', 'A value', 'A declaration block', 'A comment'],
        correctAnswer: 2,
        explanation: 'A CSS rule is made of a selector and a declaration block, which contains one or more declarations (property-value pairs).'
      }
    ],
    'css-selectors': [
      {
        question: 'Which character is used to select an element by its ID?',
        options: ['.', '&', '*', '#'],
        correctAnswer: 3,
        explanation: 'The hash (#) symbol is used to select an element with a specific ID, for example: `#myId`.'
      }
    ],
    'css-how-to': [
      {
        question: 'Which method of applying CSS is generally considered best practice?',
        options: ['External style sheet', 'Internal style sheet', 'Inline style', 'All are equal'],
        correctAnswer: 0,
        explanation: 'External stylesheets are preferred because they separate concerns (structure vs. presentation), allow for reusability across multiple pages, and are easier to maintain.'
      }
    ],
    'css-comments': [
      {
        question: 'How do you insert a comment in a CSS file?',
        options: ['// this is a comment', '<!-- this is a comment -->', "' this is a comment", '/* this is a comment */'],
        correctAnswer: 3,
        explanation: 'CSS comments start with `/*` and end with `*/` and can span multiple lines.'
      }
    ],
    'css-colors': [
      {
        question: 'Which of the following is the HEX code for pure black?',
        options: ['#000000', '#ffffff', '#111111', '#eeeeee'],
        correctAnswer: 0,
        explanation: '`#000000` represents zero intensity for red, green, and blue, which creates black. `#ffffff` is white.'
      }
    ],
    'css-backgrounds': [
      {
        question: 'How do you make a background image cover the entire container without losing its aspect ratio?',
        options: ['`background-size: contain;`', '`background-size: 100% 100%;`', '`background-size: cover;`', '`background-fit: cover;`'],
        correctAnswer: 2,
        explanation: '`background-size: cover;` scales the image to be as large as possible so that the background area is completely covered, while maintaining the image\'s aspect ratio. This may crop the image.'
      }
    ],
    'css-borders': [
      {
        question: 'What does `border-radius` do?',
        options: ['Changes the color of the border.', 'Sets the thickness of the border.', 'Adds rounded corners to an element\'s border.', 'Makes the border a radial gradient.'],
        correctAnswer: 2,
        explanation: 'The `border-radius` property is used to add rounded corners to an element.'
      }
    ],
    'css-margins': [
      {
        question: 'What is "margin collapsing"?',
        options: ['When padding and margin cancel each other out.', 'When the vertical margins of two adjacent block elements merge into a single, larger margin.', 'When you set margin to zero.', 'A browser bug that should be avoided.'],
        correctAnswer: 1,
        explanation: 'Margin collapsing is a defined behavior where the top and bottom margins of adjacent block elements collapse into a single margin whose size is the larger of the two.'
      }
    ],
    'css-padding': [
      {
        question: 'If you write `padding: 20px;`, where is the padding applied?',
        options: ['Only to the top', 'Only to the left and right', 'To the top and bottom', 'To all four sides'],
        correctAnswer: 3,
        explanation: 'A single value for `padding` applies that spacing to all four sides of the element: top, right, bottom, and left.'
      }
    ],
    'css-box-model': [
      {
        question: 'What does `box-sizing: border-box;` do?',
        options: ['It removes the border and padding.', 'It includes padding and border in the element\'s total width and height.', 'It makes the box model visible.', 'It only allows a box to be a border.'],
        correctAnswer: 1,
        explanation: '`box-sizing: border-box;` tells the browser that the `width` and `height` properties should include the content, padding, and border, which makes layout calculations more intuitive.'
      }
    ],
    'css-text-and-fonts': [
      {
        question: 'Which property is used to set the font for an element?',
        options: ['font-style', 'font-family', 'font-type', 'text-font'],
        correctAnswer: 1,
        explanation: 'The `font-family` property specifies the font for an element as a prioritized list of font family names and/or generic family names.'
      }
    ],
    'css-links': [
      {
        question: 'Which pseudo-class is used to style a link that has been visited?',
        options: [':focus', ':visited', ':link', ':hover'],
        correctAnswer: 1,
        explanation: 'The `:visited` pseudo-class applies to links that the user has already visited.'
      }
    ],
    'css-lists': [
      {
        question: 'How do you remove the bullets from an unordered list?',
        options: ['`list-style-type: none;`', '`bullets: none;`', '`list-style: hidden;`', '`marker: none;`'],
        correctAnswer: 0,
        explanation: 'Setting `list-style-type` to `none` will remove the default list markers, such as bullets or numbers.'
      }
    ],
    'css-tables': [
      {
        question: 'What does `border-collapse: collapse;` do for a table?',
        options: ['It hides all borders.', 'It makes all borders dashed.', 'It merges adjacent cell borders into a single border.', 'It makes the table collapse into a single line.'],
        correctAnswer: 2,
        explanation: 'The `border-collapse` property sets whether table borders should be collapsed into a single border or be separated as in standard HTML.'
      }
    ],
    'css-display': [
      {
        question: 'What is the main characteristic of `display: inline-block;`?',
        options: ['It is the same as `display: block;`', 'It is the same as `display: inline;`', 'It behaves like an inline element but you can set width and height on it.', 'It behaves like a block element but flows with text.'],
        correctAnswer: 2,
        explanation: '`display: inline-block;` is a hybrid. It flows with surrounding content like an inline element, but you can apply dimensions and vertical margins/padding like a block element.'
      }
    ],
    'css-position': [
      {
        question: 'An element with `position: fixed;` is positioned relative to what?',
        options: ['Its normal position', 'Its nearest positioned ancestor', 'The browser viewport', 'The `<html>` element'],
        correctAnswer: 2,
        explanation: 'A fixed position element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.'
      }
    ],
    'css-z-index': [
      {
        question: '`z-index` only works on elements that have which `position` values?',
        options: ['`static` only', '`relative`, `absolute`, `fixed`, or `sticky`', '`block` or `inline-block`', 'It works on all elements.'],
        correctAnswer: 1,
        explanation: 'The `z-index` property has no effect on elements with the default `position: static`. It only applies to positioned elements.'
      }
    ],
    'css-combinators': [
      {
        question: 'What does the selector `h2 ~ p` target?',
        options: ['All `<p>` elements inside an `<h2>`', 'The first `<p>` element immediately after an `<h2>`', 'All `<p>` elements that are preceded by an `<h2>` at the same sibling level', 'All `<p>` elements that are children of an `<h2>`'],
        correctAnswer: 2,
        explanation: 'The `~` is the general sibling combinator. It selects all `<p>` elements that are siblings of an `<h2>` and come after it.'
      }
    ],
    'css-pseudo-classes': [
      {
        question: 'What does the `:nth-child(odd)` pseudo-class select?',
        options: ['Every odd-numbered element (1st, 3rd, 5th, etc.) among its siblings.', 'Every element with an odd `id`.', 'The third element only.', 'The first and last elements.'],
        correctAnswer: 0,
        explanation: '`:nth-child(odd)` selects every sibling element that is the first, third, fifth (and so on) child of its parent. It is great for zebra-striping tables.'
      }
    ],
    'css-pseudo-elements': [
      {
        question: 'Which property is required for `::before` and `::after` pseudo-elements to be visible?',
        options: ['`display`', '`position`', '`content`', '`color`'],
        correctAnswer: 2,
        explanation: 'For a pseudo-element like `::before` or `::after` to be rendered, you must declare a `content` property, even if it\'s just an empty string (`content: ""`).'
      }
    ],
    'css-flexbox': [
      {
        question: 'How do you center a single flex item both horizontally and vertically within its container?',
        options: ['`text-align: center;` and `vertical-align: middle;`', '`margin: auto;` on the item', '`justify-content: center;` and `align-items: center;` on the container', '`position: absolute;`'],
        correctAnswer: 2,
        explanation: 'For a flex container, setting `justify-content: center;` (for the main axis) and `align-items: center;` (for the cross axis) is the standard way to perfectly center its children.'
      }
    ],
    'css-grid': [
      {
        question: 'What does `grid-template-columns: 1fr 2fr;` do?',
        options: ['Creates two columns, the second being twice as wide as the first.', 'Creates two columns of equal width.', 'Creates one column that is 1/2 the width of the container.', 'This is invalid syntax.'],
        correctAnswer: 0,
        explanation: 'The `fr` unit represents a fraction of the available space. This rule allocates 1 part of the space to the first column and 2 parts to the second, making the second column twice the size of the first.'
      }
    ],
    'css-responsive-design-media-queries': [
      {
        question: 'How would you apply a style ONLY to screens that are 800px wide or MORE?',
        options: ['`@media (min-width: 800px) { ... }`', '`@media (max-width: 800px) { ... }`', '`@media (width: 800px) { ... }`', '`@media screen and (width >= 800px) { ... }`'],
        correctAnswer: 0,
        explanation: 'The `min-width` media feature is used to apply styles for viewports from a certain width and up. This is a core part of a mobile-first approach.'
      }
    ],
    'css-variables': [
      {
        question: 'How do you declare a CSS variable named `main-bg-color`?',
        options: ['`$main-bg-color: blue;`', '`let --main-bg-color: blue;`', '`--main-bg-color: blue;`', '`var main-bg-color = blue;`'],
        correctAnswer: 2,
        explanation: 'CSS variables (custom properties) must start with two hyphens (`--`) and are typically declared within a selector like `:root` to be global.'
      }
    ],
    'css-transforms': [
      {
        question: 'Which `transform` function moves an element horizontally and vertically?',
        options: ['`scale()`', '`translate()`', '`skew()`', '`move()`'],
        correctAnswer: 1,
        explanation: 'The `translate(x, y)` function moves an element from its current position according to the given x and y values.'
      }
    ],
    'css-transitions': [
      {
        question: 'What is a common trigger for a CSS transition?',
        options: ['Loading the page.', 'A change in state, such as `:hover` or adding a class with JavaScript.', 'A user clicking a button.', 'The animation ending.'],
        correctAnswer: 1,
        explanation: 'Transitions are triggered when a CSS property they are "watching" changes. This most commonly happens when a pseudo-class like `:hover` becomes active or when a JavaScript event adds or removes a CSS class.'
      }
    ],
    'css-animations': [
      {
        question: 'What do percentages (e.g., 0%, 50%, 100%) represent inside a `@keyframes` rule?',
        options: ['The duration of the animation.', 'The opacity of the element.', 'The keyframes or stages of the animation sequence.', 'The number of times to repeat.'],
        correctAnswer: 2,
        explanation: 'Percentages are used to define the state of the element at different points during the animation\'s duration, from start (0%) to finish (100%).'
      }
    ],
    'css-preprocessors': [
      {
        question: 'What is a CSS preprocessor?',
        options: ['A tool that compresses CSS files.', 'A scripting language that extends CSS and is then compiled into regular CSS.', 'A linter that checks for errors in CSS.', 'A JavaScript library for styling.'],
        correctAnswer: 1,
        explanation: 'Preprocessors like Sass and Less add features like variables, nesting, and mixins to CSS, which helps with organization and code reuse. The preprocessor then compiles this code into standard CSS that browsers can understand.'
      }
    ],
    'css-methodologies-bem': [
      {
        question: 'What is BEM?',
        options: ['A CSS preprocessor.', 'A JavaScript library.', 'A popular naming convention for CSS classes (Block, Element, Modifier).', 'A type of CSS animation.'],
        correctAnswer: 2,
        explanation: 'BEM (Block, Element, Modifier) is a naming methodology that helps create more readable, maintainable, and scalable CSS by creating clear, strict relationships between class names.'
      }
    ],
  },
  javascript: {
    'js-introduction': [
      {
        question: 'Where is JavaScript code typically executed?',
        options: ['On the web server', 'In the user\'s web browser', 'In the database', 'In the CSS file'],
        correctAnswer: 1,
        explanation: 'JavaScript is a client-side scripting language, which means it runs on the user\'s computer inside their web browser.'
      }
    ],
    'js-syntax-and-statements': [
      {
        question: 'In JavaScript, what character is used to separate statements?',
        options: ['Comma (,)', 'Colon (:)', 'Semicolon (;)', 'Period (.)'],
        correctAnswer: 2,
        explanation: 'Semicolons are used to separate JavaScript statements, although they are sometimes optional due to Automatic Semicolon Insertion (ASI). However, it is a best practice to always use them.'
      }
    ],
    'js-variables': [
      {
        question: 'What is the main difference between `let` and `const`?',
        options: ['`let` is for numbers, `const` is for strings.', '`let` can be reassigned, while `const` cannot.', '`let` is function-scoped, `const` is block-scoped.', 'There is no difference.'],
        correctAnswer: 1,
        explanation: 'A `let` variable can be reassigned a new value, but a `const` variable\'s value cannot be changed after it is declared (for primitive values). Both are block-scoped.'
      }
    ],
    'js-data-types': [
      {
        question: 'What is the result of `typeof null`?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswer: 2,
        explanation: 'This is a well-known quirk in JavaScript from its early days. `typeof null` returns "object", which is generally considered a bug in the language.'
      }
    ],
    'js-operators': [
      {
        question: 'Which operator is used for strict equality (checks both value and type)?',
        options: ['==', '=', '===', '!='],
        correctAnswer: 2,
        explanation: 'The `===` operator checks for strict equality, meaning it will only return `true` if both the value and the data type of the operands are the same. It is generally preferred over `==`.'
      }
    ],
    'js-functions': [
      {
        question: 'What does the `return` statement do in a function?',
        options: ['It prints a value to the console.', 'It stops the execution of the function and, optionally, returns a value from that function.', 'It restarts the function.', 'It declares a new variable.'],
        correctAnswer: 1,
        explanation: 'The `return` statement ends the function execution and specifies a value to be returned to the function caller.'
      }
    ],
    'js-objects': [
      {
        question: 'How do you access the `name` property of an object called `person`?',
        options: ['`person("name")`', '`person.name` or `person["name"]`', '`person->name`', '`get(person.name)`'],
        correctAnswer: 1,
        explanation: 'You can access object properties using dot notation (`person.name`) or bracket notation (`person["name"]`).'
      }
    ],
    'js-arrays': [
      {
        question: 'Which method adds a new element to the end of an array and returns the new length?',
        options: ['`pop()`', '`shift()`', '`push()`', '`unshift()`'],
        correctAnswer: 2,
        explanation: 'The `push()` method adds one or more elements to the end of an array.'
      }
    ],
    'js-conditions': [
      {
        question: 'What is a "ternary operator"?',
        options: ['An operator for combining three strings.', 'An operator that takes three operands, often used as a shortcut for an `if` statement.', 'An operator for working with 3D graphics.', 'There is no such operator.'],
        correctAnswer: 1,
        explanation: 'The ternary operator has the syntax `condition ? value_if_true : value_if_false`. It is a concise way to write a simple conditional expression.'
      }
    ],
    'js-loops': [
      {
        question: 'Which loop is best suited for iterating over the elements of an array?',
        options: ['`for...in`', '`while`', '`for...of`', '`for each`'],
        correctAnswer: 2,
        explanation: 'The `for...of` loop is the modern and preferred way to iterate over iterable objects like arrays, as it gives you direct access to the value of each element.'
      }
    ],
    'js-dom-intro': [
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Display Object Management", "Document Order Model"],
        correctAnswer: 0,
        explanation: "DOM stands for Document Object Model. It's a tree-like representation of the HTML document that can be manipulated by scripting languages like JavaScript."
      }
    ],
    'js-dom-methods': [
      {
        question: 'Which method is the most versatile for selecting a single element using a CSS selector?',
        options: ['`getElementById()`', '`getElementsByClassName()`', '`querySelector()`', '`getElement()`'],
        correctAnswer: 2,
        explanation: '`querySelector()` is very powerful because it can use any valid CSS selector (like `.my-class > p`) to find the first matching element in the document.'
      }
    ],
    'js-events': [
      {
        question: 'Which method is used to attach an event handler to an element in modern JavaScript?',
        options: ['`attachEvent()`', '`onEvent()`', '`addEventListener()`', '`listen()`'],
        correctAnswer: 2,
        explanation: '`element.addEventListener()` is the modern and recommended way to register an event handler, as it allows multiple handlers for the same event and has more options.'
      }
    ],
    'js-strings-and-methods': [
      {
        question: 'What is a major advantage of using template literals (backticks ``)?',
        options: ['They are faster than regular strings', 'They allow for multi-line strings and easy embedding of expressions.', 'They can only be used for numbers.', 'They automatically escape HTML characters.'],
        correctAnswer: 1,
        explanation: 'Template literals make it much cleaner to create strings that span multiple lines or include variables/expressions (using `${...}`).'
      }
    ],
    'js-array-iteration': [
      {
        question: 'Which array method creates a new array with all elements that pass a test implemented by a provided function?',
        options: ['`map()`', '`filter()`', '`reduce()`', '`forEach()`'],
        correctAnswer: 1,
        explanation: 'The `filter()` method creates a new array containing only the elements from the original array that return `true` from the provided callback function.'
      }
    ],
    'js-dates-and-math': [
      {
        question: 'How do you get a random integer between 1 and 10 (inclusive)?',
        options: ['`Math.random(1, 10)`', '`Math.floor(Math.random() * 10) + 1`', '`Math.ceil(Math.random() * 10)`', '`Math.randomInt(1, 10)`'],
        correctAnswer: 1,
        explanation: '`Math.random()` gives a number from 0 to <1. Multiplying by 10 gives 0 to <10. `Math.floor()` rounds down, giving 0-9. Adding 1 shifts the range to 1-10.'
      }
    ],
    'js-es6-features': [
      {
        question: 'What does "destructuring assignment" allow you to do?',
        options: ['Destroy an object or array.', 'Unpack values from arrays, or properties from objects, into distinct variables.', 'A way to restructure a database.', 'A new type of `for` loop.'],
        correctAnswer: 1,
        explanation: 'Destructuring provides a concise way to extract data. For example, `const [a, b] = [10, 20];` creates variables `a` and `b`.'
      }
    ],
    'js-async-intro': [
      {
        question: 'What is "callback hell"?',
        options: ['A type of JavaScript error', 'A situation with deeply nested, unreadable callbacks', 'A function that calls itself infinitely', 'A security vulnerability'],
        correctAnswer: 1,
        explanation: '"Callback hell" (or the "pyramid of doom") refers to the messy, hard-to-read code structure that results from nesting many callback functions to handle sequential asynchronous operations.'
      }
    ],
    'js-promises': [
      {
        question: 'What are the three states of a Promise?',
        options: ['`pending`, `resolved`, `rejected`', '`waiting`, `complete`, `failed`', '`pending`, `fulfilled`, `rejected`', '`start`, `middle`, `end`'],
        correctAnswer: 2,
        explanation: 'A Promise starts in the `pending` state. If the operation is successful, it transitions to the `fulfilled` state. If it fails, it transitions to the `rejected` state.'
      }
    ],
    'js-async-await': [
      {
        question: 'What does the `await` keyword do?',
        options: ['It defines a function as asynchronous.', 'It immediately rejects a Promise.', 'It pauses the execution of an `async` function until a Promise is settled (fulfilled or rejected).', 'It runs a function synchronously.'],
        correctAnswer: 2,
        explanation: '`await` can only be used inside an `async function`. It makes the function wait for the Promise to resolve and then returns its result, which makes asynchronous code look and behave more like synchronous code.'
      }
    ],
    'js-classes': [
      {
        question: 'What is the name of the special method for creating and initializing an object created with a class?',
        options: ['`init()`', '`constructor()`', '`create()`', '`setup()`'],
        correctAnswer: 1,
        explanation: 'The `constructor` method is a special method of a class for creating and initializing an object instance of that class.'
      }
    ],
    'js-modules': [
      {
        question: 'What is the difference between a default export and a named export?',
        options: ['There is no difference.', 'A module can have multiple default exports.', 'A module can only have one default export, but it can have multiple named exports.', 'Default exports are for functions, named exports are for variables.'],
        correctAnswer: 2,
        explanation: 'Each module can have one default export and as many named exports as needed. Default exports are imported without curly braces, while named exports must be imported with curly braces.'
      }
    ],
    'js-json': [
      {
        question: 'Which of the following is NOT valid in JSON?',
        options: ['`"name": "John"`', '`"age": 30`', '`"isAdmin": false`', '`"sayHi": function(){}`'],
        correctAnswer: 3,
        explanation: 'JSON is a data-interchange format and cannot contain functions or undefined values. It only supports strings, numbers, booleans, arrays, and objects.'
      }
    ],
    'js-fetch-api': [
      {
        question: 'Is the Fetch API a replacement for XMLHttpRequest (XHR)?',
        options: ['No, they do different things.', 'Yes, Fetch is a modern, more powerful, and flexible replacement for XHR.', 'They are the same thing.', 'Fetch is older than XHR.'],
        correctAnswer: 1,
        explanation: 'The Fetch API provides a much better, Promise-based alternative to the older, callback-based XMLHttpRequest interface.'
      }
    ],
    'js-error-handling': [
      {
        question: 'Which block is executed regardless of whether an error was thrown or caught in a `try...catch` statement?',
        options: ['`then`', '`finally`', '`else`', '`always`'],
        correctAnswer: 1,
        explanation: 'The optional `finally` block executes after `try` and `catch`. It always executes, regardless of whether an exception was thrown or caught, making it ideal for cleanup code.'
      }
    ],
    'js-this-keyword': [
      {
        question: 'What is a key difference in how arrow functions handle the `this` keyword?',
        options: ['There is no difference.', 'Arrow functions do not have their own `this`; they inherit it from the parent (lexical) scope.', '`this` always refers to the global object in arrow functions.', 'Arrow functions require you to explicitly bind `this`.'],
        correctAnswer: 1,
        explanation: 'Arrow functions have a lexical `this`, meaning `this` retains the value of the enclosing context. This avoids many common bugs where `this` would otherwise be rebound in regular functions.'
      }
    ],
    'js-prototypes': [
      {
        question: "In JavaScript, where do objects get their properties and methods from if they are not defined on the object itself?",
        options: ["From the global scope", "From their prototype chain", "From a parent class", "They don't; it results in an error"],
        correctAnswer: 1,
        explanation: "JavaScript uses the prototype chain for inheritance. If a property is not found on an object, the JavaScript engine looks up the prototype chain until it finds the property or reaches the end of the chain."
      }
    ],
    'js-closures': [
      {
        question: 'What is a closure?',
        options: ['A function that has been closed and cannot be called.', 'A function that has access to its outer function\'s scope, even after the outer function has returned.', 'A way to secure JavaScript code.', 'A type of variable.'],
        correctAnswer: 1,
        explanation: 'A closure gives you access to an outer function’s variables from an inner function. This is a fundamental concept for creating private data and stateful functions in JavaScript.'
      }
    ],
    'js-event-loop': [
      {
        question: 'What is the role of the message queue in the event loop?',
        options: ['To execute JavaScript code immediately.', 'To store messages to be processed by the call stack when it is empty.', 'To pause the browser.', 'To store variables.'],
        correctAnswer: 1,
        explanation: 'Asynchronous operations (like `setTimeout`) place their callbacks in the message queue. The event loop moves tasks from the queue to the call stack for execution, but only when the call stack is clear.'
      }
    ],
    'js-frameworks-intro': [
      {
        question: 'What is a key principle of component-based architecture in frameworks like React?',
        options: ['Writing all code in a single file.', 'Breaking the UI into independent, reusable pieces.', 'Using only JavaScript to style the page.', 'Avoiding the use of HTML.'],
        correctAnswer: 1,
        explanation: 'Component-based architecture involves building encapsulated components that manage their own state, then composing them to make complex UIs. This makes code more manageable and reusable.'
      }
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
