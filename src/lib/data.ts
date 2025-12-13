
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
        slug: 'introduction-to-html',
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
