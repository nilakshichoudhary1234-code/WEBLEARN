
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
        content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements, which tell the browser how to display the content.',
        codeSnippet: { language: 'html', code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>' },
        output: 'The browser renders a heading and a paragraph.',
      },
      {
        slug: 'html-editors',
        title: 'HTML Editors',
        description: 'Discover the tools you can use to write HTML code.',
        content: 'You can write HTML using a simple text editor like Notepad or TextEdit, or use a professional code editor like VS Code, Sublime Text, or Atom for more features like syntax highlighting and code completion.',
        codeSnippet: { language: 'bash', code: '<!-- No code example for editors -->' },
        output: 'Choosing a good editor can significantly speed up your development process.',
      },
      {
        slug: 'html-basic',
        title: 'HTML Basic Examples',
        description: 'See the basic structure of an HTML document.',
        content: 'All HTML documents must start with a document type declaration: `<!DOCTYPE html>`. The HTML document itself begins with `<html>` and ends with `</html>`. The visible part of the HTML document is between `<body>` and `</body>`.',
        codeSnippet: { language: 'html', code: '<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://www.example.com">This is a link.</a>' },
        output: 'Renders a heading, a paragraph, and a hyperlink.',
      },
      {
        slug: 'html-elements',
        title: 'HTML Elements',
        description: 'Understand the building blocks of an HTML page.',
        content: 'An HTML element is defined by a start tag, some content, and an end tag. For example, `<p>My paragraph.</p>`. Some HTML elements have no content (like the `<br>` element). These are called empty elements.',
        codeSnippet: { language: 'html', code: '<p>This is an element.</p>\n<br> <!-- This is an empty element -->' },
        output: 'An element consists of tags and content.',
      },
      {
        slug: 'html-attributes',
        title: 'HTML Attributes',
        description: 'Learn how to provide additional information to elements.',
        content: 'Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like `name="value"`. The `href` attribute of a link is an example.',
        codeSnippet: { language: 'html', code: '<a href="https://example.com">Visit our site</a>\n<img src="image.jpg" alt="An image">' },
        output: 'The `href` attribute specifies the link\'s destination, and the `src` attribute specifies the image source.',
      },
      {
        slug: 'html-headings',
        title: 'HTML Headings',
        description: 'Use headings to structure your content hierarchically.',
        content: 'Headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading. Use them to create a document outline.',
        codeSnippet: { language: 'html', code: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>' },
        output: 'Renders headings of decreasing importance and size.',
      },
      {
        slug: 'html-paragraphs',
        title: 'HTML Paragraphs',
        description: 'Learn how to define blocks of text.',
        content: 'The HTML `<p>` element defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph.',
        codeSnippet: { language: 'html', code: '<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>' },
        output: 'Renders two separate blocks of text.',
      },
      {
        slug: 'html-styles',
        title: 'HTML Styles',
        description: 'Apply basic inline styling to elements.',
        content: 'The `style` attribute can be used to apply inline CSS to an element, to change its color, font, size, and more. For example, `style="color:blue;"`.',
        codeSnippet: { language: 'html', code: '<p style="color:red; font-size:20px;">This is a styled paragraph.</p>' },
        output: 'Renders a paragraph with red text at a 20px font size.',
      },
      {
        slug: 'html-text-formatting',
        title: 'HTML Text Formatting',
        description: 'Use tags to format text, like bold or italic.',
        content: 'HTML contains several elements for defining text with a special meaning. For example, `<b>` for bold, `<i>` for italic, `<strong>` for important text, and `<em>` for emphasized text.',
        codeSnippet: { language: 'html', code: '<b>Bold text</b>\n<i>Italic text</i>\n<code>A piece of code</code>' },
        output: 'Demonstrates various ways to format text for visual and semantic purposes.',
      },
      {
        slug: 'html-comments',
        title: 'HTML Comments',
        description: 'Learn how to add comments to your code.',
        content: 'HTML comments are not displayed in the browser, but they can help document your HTML source code. Comments are written as `<!-- This is a comment -->`.',
        codeSnippet: { language: 'html', code: '<!-- This comment will not be displayed -->\n<p>This paragraph will be displayed.</p>' },
        output: 'Only the paragraph is visible on the page.',
      },
      // --- Intermediate Level ---
      {
        slug: 'html-links',
        title: 'HTML Links',
        description: 'Learn how to create hyperlinks to connect pages.',
        content: 'Links are created using the `<a>` (anchor) tag. The `href` attribute is essential as it specifies the destination URL. You can link to other pages or to sections within the same page.',
        codeSnippet: { language: 'html', code: '<a href="/about">About Us</a>\n<a href="#section2">Go to Section 2</a>' },
        output: 'Creates a link to an "About" page and an internal link to an element with `id="section2"`.',
      },
      {
        slug: 'html-images',
        title: 'HTML Images',
        description: 'Embed images into your web page.',
        content: 'Use the `<img>` tag to embed images. The `src` attribute points to the image file, and the `alt` attribute provides descriptive text for accessibility and for when the image cannot be displayed.',
        codeSnippet: { language: 'html', code: '<img src="logo.png" alt="Company Logo" width="100" height="50">' },
        output: 'Displays the "logo.png" image with a specific size and provides "Company Logo" as the alternative text.',
      },
      {
        slug: 'html-tables',
        title: 'HTML Tables',
        description: 'Learn how to display data in rows and columns.',
        content: 'HTML tables allow you to arrange data into rows and columns. Use `<table>` to define the table, `<tr>` for rows, `<th>` for headers, and `<td>` for data cells.',
        codeSnippet: { language: 'html', code: '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>30</td>\n  </tr>\n</table>' },
        output: 'Renders a simple table with headers "Name" and "Age" and one row of data.',
      },
      {
        slug: 'html-lists',
        title: 'HTML Lists',
        description: 'Organize items with ordered, unordered, and description lists.',
        content: 'Unordered lists (`<ul>`) are for items where order doesn\'t matter. Ordered lists (`<ol>`) are for items where order is important. Description lists (`<dl>`) are for name/value pairs.',
        codeSnippet: { language: 'html', code: '<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>' },
        output: 'Renders a bulleted list with "Coffee" and "Tea", and a numbered list with two steps.',
      },
      {
        slug: 'html-block-and-inline',
        title: 'HTML Block & Inline Elements',
        description: 'Understand the difference between block and inline elements.',
        content: 'Block-level elements (like `<p>`, `<div>`, `<h1>`) always start on a new line and take up the full width available. Inline elements (like `<a>`, `<span>`, `<img>`) do not start on a new line and only take up as much width as necessary.',
        codeSnippet: { language: 'html', code: '<div>A block-level div.</div>\n<span>An inline span.</span> <span>Another inline span.</span>' },
        output: 'The div takes its own line, while the two spans appear on the same line.',
      },
      {
        slug: 'html-classes',
        title: 'HTML Classes',
        description: 'Use the class attribute to style multiple elements.',
        content: 'The `class` attribute is used to specify one or more class names for an HTML element. It is often used to point to a class in a style sheet, allowing multiple elements to share the same styling.',
        codeSnippet: { language: 'html', code: '<p class="important-text">This is important.</p>\n<span class="important-text">So is this.</span>' },
        output: 'Both the paragraph and the span can be styled together using the `.important-text` selector in CSS.',
      },
      {
        slug: 'html-id',
        title: 'HTML ID',
        description: 'Use the id attribute to uniquely identify an element.',
        content: 'The `id` attribute specifies a unique id for an HTML element. The value must be unique within the HTML document. It is used by CSS to style a specific element and by JavaScript to manipulate it.',
        codeSnippet: { language: 'html', code: '<h1 id="main-title">My Website</h1>' },
        output: 'This h1 element can be uniquely targeted with `#main-title` in CSS or JavaScript.',
      },
      {
        slug: 'html-iframes',
        title: 'HTML Iframes',
        description: 'Embed another HTML document within the current one.',
        content: 'An iframe (Inline Frame) is used to embed another document within the current HTML document. This is often used for embedding maps, videos, or content from other websites.',
        codeSnippet: { language: 'html', code: '<iframe src="https://www.example.com" width="600" height="400"></iframe>' },
        output: 'Embeds the website at example.com into your page within a 600x400 pixel frame.',
      },
      {
        slug: 'html-forms',
        title: 'HTML Forms',
        description: 'Learn how to create forms to collect user input.',
        content: 'Forms (`<form>`) are essential for collecting user data. They contain various input elements like text fields (`<input type="text">`), checkboxes, radio buttons, and submit buttons.',
        codeSnippet: { language: 'html', code: '<form action="/submit_form">\n  <label for="username">Username:</label>\n  <input type="text" id="username">\n  <input type="submit">\n</form>' },
        output: 'Renders a text input field labeled "Username" and a submit button inside a form.',
      },
      {
        slug: 'html-form-elements',
        title: 'HTML Form Elements',
        description: 'Explore the different types of input controls for forms.',
        content: 'HTML offers a variety of form elements, including `<input>`, `<label>`, `<select>` (dropdown), `<textarea>`, `<button>`, `<fieldset>`, and `<legend>`, to create rich user interfaces.',
        codeSnippet: { language: 'html', code: '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>' },
        output: 'Creates a dropdown menu with two car options.',
      },
      {
        slug: 'html-input-types',
        title: 'HTML Input Types',
        description: 'Discover the many input types available in HTML5.',
        content: 'HTML5 introduced many new input types like `color`, `date`, `email`, `number`, `range`, and `search`, which provide better input control and validation.',
        codeSnippet: { language: 'html', code: '<label for="bday">Birthday:</label>\n<input type="date" id="bday" name="bday">' },
        output: 'Renders a date picker control in supporting browsers.',
      },
      {
        slug: 'html-input-attributes',
        title: 'HTML Input Attributes',
        description: 'Enhance your form inputs with attributes like `required` and `placeholder`.',
        content: 'Input attributes modify the behavior and appearance of form inputs. Examples include `value`, `readonly`, `disabled`, `size`, `maxlength`, `required`, and `placeholder`.',
        codeSnippet: { language: 'html', code: '<input type="text" placeholder="Enter your name" required>' },
        output: 'Creates a text input that displays placeholder text and is mandatory for form submission.',
      },
      {
        slug: 'html-head',
        title: 'HTML Head',
        description: 'Understand the purpose of the <head> element.',
        content: 'The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag. It is not displayed. It typically defines the document title, character set, styles, scripts, and other meta information.',
        codeSnippet: { language: 'html', code: '<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n  <link rel="stylesheet" href="styles.css">\n</head>' },
        output: 'This head section sets the character encoding, page title, and links an external CSS file.',
      },
      {
        slug: 'html-layout',
        title: 'HTML Layout',
        description: 'Learn techniques and elements for structuring a web page.',
        content: 'Websites often display content in multiple columns. HTML5 introduced semantic elements like `<header>`, `<footer>`, `<nav>`, `<section>`, and `<aside>` to define different parts of a web page, which are then styled with CSS for layout.',
        codeSnippet: { language: 'html', code: '<header>Site Header</header>\n<nav>Navigation</nav>\n<main>Main Content</main>\n<footer>Site Footer</footer>' },
        output: 'Defines the primary semantic sections of a webpage.',
      },
      {
        slug: 'html-responsive',
        title: 'HTML Responsive Design',
        description: 'Make your web pages look good on all devices.',
        content: 'Responsive web design is about creating web pages that look good on all devices (desktops, tablets, and phones). This is done using CSS and a responsive viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.',
        codeSnippet: { language: 'html', code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
        output: 'This meta tag is essential for telling the browser how to control the page\'s dimensions and scaling on mobile devices.',
      },
      // --- Advanced Level ---
      {
        slug: 'html5-semantic-elements',
        title: 'HTML5 Semantic Elements',
        description: 'Use tags that clearly describe their meaning.',
        content: 'Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Examples include `<article>`, `<figure>`, `<figcaption>`, `<main>`, and `<time>`. This improves accessibility and SEO.',
        codeSnippet: { language: 'html', code: '<article>\n  <h2>Article Title</h2>\n  <p>Content...</p>\n  <footer><p>Author: J. Doe</p></footer>\n</article>' },
        output: 'Structurally defines an independent article with its own heading and footer.',
      },
      {
        slug: 'html-multimedia',
        title: 'HTML Multimedia',
        description: 'Embed audio and video content natively.',
        content: 'HTML5 introduced the `<audio>` and `<video>` elements, allowing for native embedding of multimedia without needing plugins like Flash. The `controls` attribute provides play, pause, and volume controls.',
        codeSnippet: { language: 'html', code: '<video width="320" controls>\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>' },
        output: 'Embeds a video player on the page for the "movie.mp4" file.',
      },
      {
        slug: 'html-apis',
        title: 'HTML APIs',
        description: 'Explore browser APIs like Geolocation and Web Storage.',
        content: 'HTML APIs provide interfaces for complex operations. Examples include the Geolocation API for identifying a user\'s location, the Drag/Drop API, and the Web Storage API (`localStorage` and `sessionStorage`) for storing data in the browser.',
        codeSnippet: { language: 'javascript', code: '// Geolocation API Example\nnavigator.geolocation.getCurrentPosition(showPosition);' },
        output: 'This JavaScript code accesses the browser\'s Geolocation API.',
      },
      {
        slug: 'html-graphics',
        title: 'HTML Graphics (Canvas & SVG)',
        description: 'Learn to create graphics on the web.',
        content: 'Canvas (`<canvas>`) is used to draw graphics via JavaScript, ideal for dynamic animations and games. SVG (`<svg>`) is an XML-based language for describing 2D vector graphics, perfect for logos and icons that need to scale perfectly.',
        codeSnippet: { language: 'html', code: '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="yellow" />\n</svg>' },
        output: 'Renders a yellow circle using Scalable Vector Graphics (SVG).',
      },
      {
        slug: 'html-web-storage',
        title: 'HTML Web Storage',
        description: 'Store data locally within the user\'s browser.',
        content: 'Web storage allows websites to store data in the user\'s browser. `localStorage` stores data with no expiration date, while `sessionStorage` stores data for one session (data is lost when the browser tab is closed).',
        codeSnippet: { language: 'javascript', code: 'localStorage.setItem("username", "JohnDoe");\nlet user = localStorage.getItem("username");' },
        output: 'This stores the username "JohnDoe" in the browser\'s local storage and then retrieves it.',
      },
      {
        slug: 'html-web-workers',
        title: 'HTML Web Workers',
        description: 'Run background scripts without freezing the user interface.',
        content: 'A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.',
        codeSnippet: { language: 'javascript', code: 'const worker = new Worker("worker.js");' },
        output: 'Starts a new worker thread by loading the script at "worker.js".',
      },
      {
        slug: 'html-server-sent-events',
        title: 'HTML Server-Sent Events (SSE)',
        description: 'Enable a web page to get updates from a server.',
        content: 'Server-Sent Events (SSE) allow a web page to get automatic updates from a server. This was traditionally done with polling, but SSE is more efficient. It is a one-way messaging system from the server to the client.',
        codeSnippet: { language: 'javascript', code: 'const evtSource = new EventSource("sse_demo.php");' },
        output: 'Creates a new EventSource object to receive server-sent events from a specific URL.',
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
        content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, or in other media.',
        codeSnippet: { language: 'css', code: 'p {\n  color: red;\n  font-size: 16px;\n}' },
        output: 'All paragraph elements will have red text and a font size of 16 pixels.',
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
        content: 'Selectors are patterns used to select the element(s) you want to style. You can select elements by tag name (e.g., `p`), class (e.g., `.my-class`), or ID (e.g., `#my-id`).',
        codeSnippet: { language: 'css', code: 'p { ... }      /* Tag selector */\n.info { ... }   /* Class selector */\n#header { ... } /* ID selector */' },
        output: 'These are the three most basic types of CSS selectors.',
      },
      {
        slug: 'css-how-to',
        title: 'How To Add CSS',
        description: 'Explore the three ways of inserting a style sheet.',
        content: 'There are three ways to add CSS: External CSS (in a `<link>` tag), Internal CSS (in a `<style>` tag in the `<head>`), and Inline CSS (using the `style` attribute on an element).',
        codeSnippet: { language: 'html', code: '<link rel="stylesheet" href="styles.css">' },
        output: 'This example shows how to link an external stylesheet, which is the recommended method.',
      },
      {
        slug: 'css-comments',
        title: 'CSS Comments',
        description: 'Learn how to add comments to your stylesheet.',
        content: 'CSS comments are used to explain your code and are ignored by the browser. A CSS comment starts with `/*` and ends with `*/`.',
        codeSnippet: { language: 'css', code: '/* This is a single-line comment */\np {\n  color: red;\n}' },
        output: 'Comments can be used to document your code for better maintainability.',
      },
      {
        slug: 'css-colors',
        title: 'CSS Colors',
        description: 'Specify colors using names, RGB, HEX, HSL, and more.',
        content: 'CSS colors can be specified using predefined color names, or RGB, HEX, HSL, RGBA, or HSLA values. RGBA and HSLA include an alpha channel for transparency.',
        codeSnippet: { language: 'css', code: 'p {\n  color: #ff0000; /* Red using HEX */\n  background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent blue */\n}' },
        output: 'Applies a solid red color to the text and a semi-transparent blue background.',
      },
      {
        slug: 'css-backgrounds',
        title: 'CSS Backgrounds',
        description: 'Control the background color, image, and position of elements.',
        content: 'CSS background properties are used to define the background effects for elements. You can set a background color, a background image, and control its repetition and position.',
        codeSnippet: { language: 'css', code: 'body {\n  background-image: url("paper.gif");\n  background-repeat: no-repeat;\n}' },
        output: 'Sets a background image for the page and ensures it does not tile.',
      },
      {
        slug: 'css-borders',
        title: 'CSS Borders',
        description: 'Set the style, width, and color of element borders.',
        content: 'The CSS `border` properties allow you to specify the style, width, and color of an element\'s border. You can style each of the four sides individually.',
        codeSnippet: { language: 'css', code: 'p {\n  border: 2px solid powderblue;\n  padding: 10px;\n}' },
        output: 'Creates a 2-pixel wide, solid, light blue border around paragraph elements with 10px of inner padding.',
      },
      {
        slug: 'css-margins',
        title: 'CSS Margins',
        description: 'Control the space outside of an element.',
        content: 'Margins are used to create space around elements, outside of any defined borders. You can control the margin for each side of an element (top, right, bottom, and left).',
        codeSnippet: { language: 'css', code: 'div {\n  margin-top: 50px;\n  margin-left: 100px;\n}' },
        output: 'Pushes the div element 50px down from the element above it and 100px from the left.',
      },
      {
        slug: 'css-padding',
        title: 'CSS Padding',
        description: 'Control the space between an element\'s content and its border.',
        content: 'Padding is used to create space around an element\'s content, inside of any defined borders. You can control the padding for each side of an element.',
        codeSnippet: { language: 'css', code: 'div {\n  padding: 25px 50px;\n}' },
        output: 'Applies 25px of padding to the top and bottom, and 50px of padding to the left and right of the div\'s content.',
      },
      // --- Intermediate Level ---
      {
        slug: 'css-box-model',
        title: 'CSS Box Model',
        description: 'Understand how elements are sized and spaced.',
        content: 'The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. Understanding this is fundamental to controlling layout and spacing.',
        codeSnippet: { language: 'css', code: 'div {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}' },
        output: 'A div will have a total rendered width of 350px (300 + 20*2 + 5*2) with the default box-sizing.',
      },
      {
        slug: 'css-outline',
        title: 'CSS Outline',
        description: 'Draw a line around elements, outside the borders.',
        content: 'An outline is a line drawn around elements, outside the borders, to make the element "stand out". Unlike a border, the outline is drawn outside the element\'s box and does not take up space.',
        codeSnippet: { language: 'css', code: 'p:focus {\n  outline: 2px solid red;\n}' },
        output: 'When a paragraph element receives focus (e.g., by tabbing to it), a red outline will appear around it.',
      },
      {
        slug: 'css-text',
        title: 'CSS Text',
        description: 'Control text alignment, decoration, and spacing.',
        content: 'CSS has a lot of properties for formatting text. You can control color, alignment (`text-align`), decoration (`text-decoration` for underlines), transformation (`text-transform` for case), and spacing (`letter-spacing`, `word-spacing`).',
        codeSnippet: { language: 'css', code: 'p {\n  text-align: center;\n  letter-spacing: 2px;\n}' },
        output: 'Centers paragraph text and adds 2px of space between each character.',
      },
      {
        slug: 'css-fonts',
        title: 'CSS Fonts',
        description: 'Control font family, boldness, size, and style.',
        content: 'CSS font properties define the typeface, size, weight, and style of text. Key properties include `font-family`, `font-size`, `font-weight`, and `font-style`.',
        codeSnippet: { language: 'css', code: 'body {\n  font-family: Arial, sans-serif;\n  font-weight: bold;\n}' },
        output: 'Sets the default font for the page to Arial (or a generic sans-serif) and makes it bold.',
      },
      {
        slug: 'css-icons',
        title: 'CSS Icons',
        description: 'Add icons to your site using icon libraries.',
        content: 'Icons can be easily added to your HTML page by using an icon library, such as Font Awesome or Material Icons. These are often used by adding a specific class to an `<i>` or `<span>` element.',
        codeSnippet: { language: 'html', code: '<!-- Using Font Awesome -->\n<i class="fas fa-cloud"></i>' },
        output: 'Renders a cloud icon from the Font Awesome library.',
      },
      {
        slug: 'css-links',
        title: 'CSS Links',
        description: 'Style hyperlinks based on their state.',
        content: 'Links can be styled differently depending on what state they are in. The four link states are `:link` (unvisited), `:visited`, `:hover` (mouse over), and `:active` (being clicked).',
        codeSnippet: { language: 'css', code: 'a:hover {\n  color: hotpink;\n  text-decoration: none;\n}' },
        output: 'When a user hovers over a link, its color changes to hotpink and the underline is removed.',
      },
      {
        slug: 'css-lists',
        title: 'CSS Lists',
        description: 'Customize the appearance of ordered and unordered lists.',
        content: 'CSS list properties allow you to change the list item marker for ordered and unordered lists. You can change the marker type (`list-style-type`), use an image for the marker (`list-style-image`), or control its position (`list-style-position`).',
        codeSnippet: { language: 'css', code: 'ul {\n  list-style-type: square;\n}' },
        output: 'Changes the bullets of an unordered list to squares.',
      },
      {
        slug: 'css-tables',
        title: 'CSS Tables',
        description: 'Control the layout and appearance of HTML tables.',
        content: 'HTML tables can be styled with CSS to improve their appearance. You can control borders, padding, alignment, and even create striped tables for better readability.',
        codeSnippet: { language: 'css', code: 'tr:nth-child(even) {\n  background-color: #f2f2f2;\n}' },
        output: 'Applies a light gray background to all even-numbered table rows, creating a "zebra-striped" effect.',
      },
      {
        slug: 'css-display',
        title: 'CSS Display Property',
        description: 'Control how an element is displayed.',
        content: 'The `display` property is the most important CSS property for controlling layout. Every element has a default display value. Common values are `block`, `inline`, `inline-block`, and `none`.',
        codeSnippet: { language: 'css', code: 'li {\n  display: inline-block;\n  padding: 10px;\n}' },
        output: 'Makes list items display horizontally next to each other instead of vertically.',
      },
      {
        slug: 'css-position',
        title: 'CSS Position Property',
        description: 'Control how an element is placed in the document.',
        content: 'The `position` property specifies the type of positioning method used for an element. Values are `static`, `relative`, `absolute`, `fixed`, or `sticky`. This property is used with `top`, `right`, `bottom`, and `left` to place the element.',
        codeSnippet: { language: 'css', code: '.fixed-header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}' },
        output: 'An element with class "fixed-header" will stick to the top of the viewport, even when the user scrolls.',
      },
      {
        slug: 'css-z-index',
        title: 'CSS z-index',
        description: 'Control the vertical stacking order of positioned elements.',
        content: 'The `z-index` property specifies the stack order of a positioned element. An element with a greater stack order (a higher `z-index` number) is always in front of an element with a lower stack order.',
        codeSnippet: { language: 'css', code: '.popup {\n  position: absolute;\n  z-index: 10;\n}' },
        output: 'Ensures the `.popup` element appears on top of other elements with a lower z-index.',
      },
      {
        slug: 'css-overflow',
        title: 'CSS Overflow',
        description: 'Control what happens when content is too big for its container.',
        content: 'The `overflow` property controls what happens to content that is too big to fit into an area. Values can be `visible` (default), `hidden`, `scroll` (adds scrollbars), or `auto`.',
        codeSnippet: { language: 'css', code: 'div.scrollable {\n  height: 100px;\n  overflow: scroll;\n}' },
        output: 'Creates a 100px tall div where any content that overflows will be accessible via scrollbars.',
      },
      {
        slug: 'css-float',
        title: 'CSS Float (Legacy)',
        description: 'A legacy property for wrapping text around elements.',
        content: 'The `float` property was historically used for layout, allowing an element to be taken out of the normal flow and placed to the left or right of its container, with text wrapping around it. Modern layouts should use Flexbox or Grid instead.',
        codeSnippet: { language: 'css', code: 'img {\n  float: left;\n  margin-right: 10px;\n}' },
        output: 'Makes an image float to the left, with text wrapping around it on the right.',
      },
      {
        slug: 'css-combinators',
        title: 'CSS Combinators',
        description: 'Combine selectors to create powerful targeting rules.',
        content: 'Combinators are used to combine selectors. There are four different combinators in CSS: descendant selector (space), child selector (`>`), adjacent sibling selector (`+`), and general sibling selector (`~`).',
        codeSnippet: { language: 'css', code: 'div > p {\n  color: blue;\n}' },
        output: 'Selects only `<p>` elements that are direct children of a `<div>` element.',
      },
      {
        slug: 'css-pseudo-classes',
        title: 'CSS Pseudo-classes',
        description: 'Style elements based on their state.',
        content: 'A pseudo-class is used to define a special state of an element. For example, it can be used to style an element when a user mouses over it (`:hover`), or style visited and unvisited links differently (`:visited`).',
        codeSnippet: { language: 'css', code: 'input:focus {\n  border-color: blue;\n}' },
        output: 'Changes the border color of an input field when it has keyboard focus.',
      },
      // --- Advanced Level ---
      {
        slug: 'css-pseudo-elements',
        title: 'CSS Pseudo-elements',
        description: 'Style a specific part of an element.',
        content: 'A pseudo-element is used to style specified parts of an element. For example, it can be used to style the first letter (`::first-letter`), or the first line (`::first-line`) of an element, or to insert content before or after an element (`::before`, `::after`).',
        codeSnippet: { language: 'css', code: 'p::first-line {\n  font-weight: bold;\n}' },
        output: 'Makes the first line of every paragraph element bold.',
      },
      {
        slug: 'css-flexbox',
        title: 'CSS Flexbox',
        description: 'Master one-dimensional layouts with this powerful layout module.',
        content: 'The Flexbox Layout module makes it easier to design flexible responsive layout structures in one dimension (either a row or a column). It provides powerful alignment and distribution capabilities.',
        codeSnippet: { language: 'css', code: '.container {\n  display: flex;\n  justify-content: space-around;\n}' },
        output: 'Items inside `.container` will be spaced out evenly along the main axis.',
      },
      {
        slug: 'css-grid',
        title: 'CSS Grid',
        description: 'Master two-dimensional layouts for complex page structures.',
        content: 'CSS Grid Layout is a two-dimensional layout system. It lets you lay content out in rows and columns, making it easy to create complex layouts that would be difficult with Flexbox alone.',
        codeSnippet: { language: 'css', code: '.wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}' },
        output: 'Items inside `.wrapper` will be arranged in a three-column grid with a 10px gap between them.',
      },
      {
        slug: 'css-responsive-design',
        title: 'CSS Responsive Design',
        description: 'Use media queries to adapt your layout for different screen sizes.',
        content: 'Responsive design ensures your website looks good on all devices. Media queries are the core of this, allowing you to apply different CSS rules based on device characteristics like screen width, height, or orientation.',
        codeSnippet: { language: 'css', code: '@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}' },
        output: 'Changes the background color to light blue on screens that are 600px wide or smaller.',
      },
      {
        slug: 'css-variables',
        title: 'CSS Variables',
        description: 'Create reusable values in your stylesheets for easier maintenance.',
        content: 'CSS Variables (Custom Properties) allow you to store values in one place and reuse them throughout your stylesheet. This is incredibly useful for theming and maintaining large projects.',
        codeSnippet: { language: 'css', code: ':root {\n  --main-color: #3498db;\n}\n\na {\n  color: var(--main-color);\n}' },
        output: 'Defines a main color variable and applies it to all link elements. Changing it in one place updates it everywhere.',
      },
      {
        slug: 'css-transforms',
        title: 'CSS Transforms',
        description: 'Rotate, scale, move, and skew elements in 2D or 3D space.',
        content: 'The `transform` property lets you apply transformations like `rotate()`, `scale()`, `translate()`, and `skew()` to elements, modifying their position and shape without affecting the normal document flow.',
        codeSnippet: { language: 'css', code: 'div:hover {\n  transform: rotate(45deg) scale(1.5);\n}' },
        output: 'When a user hovers over the div, it will rotate 45 degrees and grow to 1.5 times its original size.',
      },
      {
        slug: 'css-transitions',
        title: 'CSS Transitions',
        description: 'Create smooth animations when property values change.',
        content: 'Transitions allow you to smoothly change property values over a given duration. This provides a way to animate changes from one state to another, such as on hover.',
        codeSnippet: { language: 'css', code: 'button {\n  background-color: blue;\n  transition: background-color 0.5s ease;\n}\n\nbutton:hover {\n  background-color: red;\n}' },
        output: 'When you hover over the button, its background color will smoothly fade from blue to red over 0.5 seconds.',
      },
      {
        slug: 'css-animations',
        title: 'CSS Animations',
        description: 'Create complex, multi-step animations using @keyframes.',
        content: 'CSS animations allow for more complex sequences of motion than transitions. You define the animation with a `@keyframes` rule and then apply it to an element using the `animation` property.',
        codeSnippet: { language: 'css', code: '@keyframes slide-in {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}\n\n.box {\n  animation: slide-in 1s forwards;\n}' },
        output: 'An element with class "box" will slide in from the left over the course of 1 second.',
      },
      {
        slug: 'css-functions',
        title: 'CSS Functions',
        description: 'Use functions like `calc()`, `var()`, and `attr()` for dynamic values.',
        content: 'CSS includes several functions that can be used as values for properties. `calc()` lets you perform calculations, `var()` uses a custom property, and `attr()` can retrieve the value of an attribute on the element.',
        codeSnippet: { language: 'css', code: 'div {\n  width: calc(100% - 80px);\n}' },
        output: 'Sets the width of the div to be 80 pixels less than 100% of its container\'s width.',
      },
      {
        slug: 'css-best-practices',
        title: 'CSS Best Practices',
        description: 'Learn tips for writing clean, maintainable, and efficient CSS.',
        content: 'Best practices include organizing your code, using a consistent naming convention (like BEM), minimizing selector specificity, using CSS variables, and writing mobile-first media queries.',
        codeSnippet: { language: 'bash', code: '/* No code example for best practices */' },
        output: 'Following best practices makes your code easier for you and others to work with in the long run.',
      },
    ],
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
        content: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It is one of the three core technologies of the World Wide Web.',
        codeSnippet: { language: 'javascript', code: '// This is a comment\nconsole.log("Hello from JavaScript!");' },
        output: 'The browser console will display the message "Hello from JavaScript!".',
      },
      {
        slug: 'js-where-to',
        title: 'JS Where To',
        description: 'Learn how to add JavaScript to your HTML page.',
        content: 'JavaScript can be added directly to an HTML file inside `<script>` tags, or it can be placed in an external file and linked with `<script src="myscript.js"></script>`.',
        codeSnippet: { language: 'html', code: '<script>\nalert("Hello, World!");\n</script>' },
        output: 'This code will show a "Hello, World!" alert box when the page loads.',
      },
      {
        slug: 'js-output',
        title: 'JS Output',
        description: 'Discover different ways to display data.',
        content: 'JavaScript can display data in different ways: writing into an HTML element using `innerHTML`, writing into the HTML output using `document.write()`, writing into an alert box using `alert()`, and writing into the browser console using `console.log()`.',
        codeSnippet: { language: 'javascript', code: 'console.log(5 + 6);' },
        output: 'The value 11 will be displayed in the browser\'s developer console.',
      },
      {
        slug: 'js-statements',
        title: 'JS Statements',
        description: 'Understand the commands that make up a JavaScript program.',
        content: 'A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these instructions are called statements. A JavaScript program is a list of statements, separated by semicolons.',
        codeSnippet: { language: 'javascript', code: 'let x, y, z;\nx = 5;\ny = 6;\nz = x + y;' },
        output: 'These statements declare three variables, assign values to two of them, and then assign their sum to the third.',
      },
      {
        slug: 'js-syntax',
        title: 'JS Syntax',
        description: 'Learn the fundamental rules for writing JavaScript.',
        content: 'JavaScript syntax is the set of rules that define a correctly structured JavaScript program. This includes rules for variables, operators, expressions, keywords, and comments.',
        codeSnippet: { language: 'javascript', code: '// JavaScript is case-sensitive\nlet lastname, lastName;\nlastName = "Doe";\nlastname = "Peterson";' },
        output: '`lastName` and `lastname` are treated as two different variables.',
      },
      {
        slug: 'js-variables',
        title: 'JS Variables',
        description: 'Learn how to store data values using variables.',
        content: 'Variables are containers for storing data. In JavaScript, you can declare variables using `var`, `let`, or `const`. `let` and `const` are modern, block-scoped declarations.',
        codeSnippet: { language: 'javascript', code: 'let name = "Alice";\nconst year = 2024;\nlet isActive = true;' },
        output: 'Three variables are created, holding a string, a number, and a boolean value.',
      },
      {
        slug: 'js-operators',
        title: 'JS Operators',
        description: 'Perform arithmetic and logical operations on values.',
        content: 'Operators are symbols used to perform operations on operands (values and variables). Common types include arithmetic (`+`, `-`), assignment (`=`), comparison (`==`, `>`), and logical (`&&`, `||`) operators.',
        codeSnippet: { language: 'javascript', code: 'let x = 10 + 5; // x is 15\nlet y = x * 2; // y is 30\nlet isGreater = y > 20; // isGreater is true' },
        output: 'This code performs basic arithmetic and a comparison, storing the results in variables.',
      },
      {
        slug: 'js-data-types',
        title: 'JS Data Types',
        description: 'Understand the different types of data in JavaScript.',
        content: 'JavaScript has several primitive data types: String, Number, Boolean, Null, Undefined, and Symbol. It also has a complex data type: Object (which includes Arrays).',
        codeSnippet: { language: 'javascript', code: 'let length = 16;          // Number\nlet lastName = "Johnson";   // String\nlet x = {firstName:"John"}; // Object' },
        output: 'Variables can hold values of different data types.',
      },
      {
        slug: 'js-functions',
        title: 'JS Functions',
        description: 'Create reusable blocks of code to perform specific tasks.',
        content: 'A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions help organize code, make it reusable, and easier to debug.',
        codeSnippet: { language: 'javascript', code: 'function add(a, b) {\n  return a + b;\n}\nlet sum = add(5, 3); // sum is 8' },
        output: 'This defines a function to add two numbers and then calls it, storing the result (8) in the `sum` variable.',
      },
      {
        slug: 'js-objects',
        title: 'JS Objects',
        description: 'Learn to store collections of key-value pairs.',
        content: 'Objects are variables too, but they can contain many values. The values are written as name:value pairs. Objects are used to represent real-world entities.',
        codeSnippet: { language: 'javascript', code: 'const person = {\n  firstName: "John",\n  lastName: "Doe",\n  age: 50\n};\nconsole.log(person.firstName);' },
        output: 'The console will display "John".',
      },
      // --- Intermediate Level ---
      {
        slug: 'js-events',
        title: 'JS Events',
        description: 'Learn how to react to user actions like clicks and key presses.',
        content: 'Events are actions that happen in the browser, such as a user clicking a button or moving the mouse. You can use event listeners to "listen" for these events and execute code in response.',
        codeSnippet: { language: 'html', code: '<button onclick="alert(\'Clicked!\')">Click me</button>' },
        output: 'When the button is clicked, an alert box will pop up.',
      },
      {
        slug: 'js-strings',
        title: 'JS Strings',
        description: 'Learn methods for working with text.',
        content: 'JavaScript provides many built-in methods for working with strings, such as `length`, `slice()`, `substring()`, `replace()`, `toUpperCase()`, and `concat()`.',
        codeSnippet: { language: 'javascript', code: 'let text = "Hello World!";\nlet upper = text.toUpperCase(); // "HELLO WORLD!"' },
        output: 'This code converts the content of the `text` variable to uppercase.',
      },
      {
        slug: 'js-arrays',
        title: 'JS Arrays',
        description: 'Store multiple values in a single variable.',
        content: 'An array is a special variable, which can hold more than one value at a time. Arrays are used to store lists of items, and you can access items by their index number (starting from 0).',
        codeSnippet: { language: 'javascript', code: 'const fruits = ["Apple", "Banana", "Cherry"];\nfruits.push("Orange"); // Adds a new element' },
        output: 'The `fruits` array now contains four elements.',
      },
      {
        slug: 'js-array-methods',
        title: 'JS Array Methods',
        description: 'Explore powerful methods for manipulating arrays.',
        content: 'JavaScript provides many useful array methods, including `toString()`, `join()`, `pop()`, `push()`, `shift()`, `unshift()`, `splice()`, and `concat()`.',
        codeSnippet: { language: 'javascript', code: 'const fruits = ["Banana", "Orange", "Apple"];\nfruits.sort(); // Sorts the array' },
        output: 'The `fruits` array is now sorted alphabetically: ["Apple", "Banana", "Orange"].',
      },
      {
        slug: 'js-dates',
        title: 'JS Dates',
        description: 'Work with dates and times.',
        content: 'The `Date` object is used to work with dates and times. You can create a new date object, get parts of a date (year, month, day), and set them.',
        codeSnippet: { language: 'javascript', code: 'const d = new Date();\nconsole.log(d.getFullYear());' },
        output: 'Displays the current year in the console.',
      },
      {
        slug: 'js-math',
        title: 'JS Math',
        description: 'Use the Math object to perform mathematical tasks.',
        content: 'The JavaScript `Math` object allows you to perform mathematical tasks on numbers. It includes properties and methods for mathematical constants and functions, like `Math.round()`, `Math.random()`, and `Math.pow()`.',
        codeSnippet: { language: 'javascript', code: 'let r = Math.random(); // Returns a random number between 0 and 1' },
        output: 'The `r` variable holds a random decimal number.',
      },
      {
        slug: 'js-booleans',
        title: 'JS Booleans',
        description: 'Work with logical values: true or false.',
        content: 'A JavaScript Boolean represents one of two values: `true` or `false`. They are often the result of comparisons and are used to control program flow in conditional statements and loops.',
        codeSnippet: { language: 'javascript', code: 'let isAdult = age > 18;' },
        output: 'The `isAdult` variable will be `true` if `age` is greater than 18, and `false` otherwise.',
      },
      {
        slug: 'js-comparisons',
        title: 'JS Comparisons',
        description: 'Compare values using comparison and logical operators.',
        content: 'Comparison operators (`==`, `===`, `!=`, `!==`, `>`, `<`) are used in logical statements to determine equality or difference between variables or values. Logical operators (`&&`, `||`, `!`) are used to determine the logic between variables or values.',
        codeSnippet: { language: 'javascript', code: 'if (age < 18 || isStudent) {\n  // give discount\n}' },
        output: 'This `if` statement checks if the age is less than 18 OR if the person is a student.',
      },
      {
        slug: 'js-conditions',
        title: 'JS Conditions (if/else)',
        description: 'Execute different blocks of code based on conditions.',
        content: 'Conditional statements are used to perform different actions based on different conditions. The most common are `if`, `else if`, and `else`, which allow your code to make decisions.',
        codeSnippet: { language: 'javascript', code: 'if (hour < 18) {\n  greeting = "Good day";\n} else {\n  greeting = "Good evening";\n}' },
        output: 'Sets the `greeting` variable based on the time of day.',
      },
      {
        slug: 'js-switch',
        title: 'JS Switch Statement',
        description: 'Select one of many blocks of code to be executed.',
        content: 'The `switch` statement is used to perform different actions based on different conditions. It provides an alternative to long `if...else if...else` chains when checking a single variable against multiple values.',
        codeSnippet: { language: 'javascript', code: 'switch (new Date().getDay()) {\n  case 6: text = "Today is Saturday"; break;\n  default: text = "Looking forward to the Weekend";\n}' },
        output: 'Sets the value of `text` based on the current day of the week.',
      },
      {
        slug: 'js-loop-for',
        title: 'JS For Loop',
        description: 'Execute a block of code a specified number of times.',
        content: 'The `for` loop is often used when the number of iterations is known. It consists of an initializer, a condition, and an incrementor.',
        codeSnippet: { language: 'javascript', code: 'for (let i = 0; i < 5; i++) {\n  console.log("Number " + i);\n}' },
        output: 'The console will display "Number 0", "Number 1", "Number 2", "Number 3", and "Number 4".',
      },
      {
        slug: 'js-loop-while',
        title: 'JS While Loop',
        description: 'Execute a block of code as long as a condition is true.',
        content: 'The `while` loop is used when the loop should continue as long as a condition is true. The condition is checked before the loop body is executed.',
        codeSnippet: { language: 'javascript', code: 'let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}' },
        output: 'The loop will print the numbers 0 through 4 to the console.',
      },
      {
        slug: 'js-dom',
        title: 'JS DOM',
        description: 'Learn how to interact with and change HTML content.',
        content: 'The Document Object Model (DOM) is a programming interface for web documents. JavaScript can access and change all the elements of an HTML document. This is how you make web pages interactive.',
        codeSnippet: { language: 'javascript', code: '// Assuming an element <p id="demo"></p> exists\ndocument.getElementById("demo").innerHTML = "Hello World!";' },
        output: 'The text content of the HTML paragraph with the ID "demo" will be changed to "Hello World!".',
      },
      {
        slug: 'js-es6',
        title: 'JS ES6 (ECMAScript 2015)',
        description: 'Learn modern JavaScript syntax and features.',
        content: 'ES6 introduced many powerful features like `let` and `const`, arrow functions for more concise function syntax, classes, template literals, destructuring, promises, and modules.',
        codeSnippet: { language: 'javascript', code: 'const greet = (name) => `Hello, ${name}!`;\nconsole.log(greet("World"));' },
        output: 'This uses an arrow function and a template literal. The console will display "Hello, World!".',
      },
      {
        slug: 'js-async',
        title: 'JS Async (Callbacks, Promises, Async/Await)',
        description: 'Understand asynchronous programming in JavaScript.',
        content: 'JavaScript is single-threaded, so asynchronous operations (like fetching data from a server) are essential to prevent blocking the main thread. This is handled using callbacks, Promises, and the modern `async/await` syntax.',
        codeSnippet: { language: 'javascript', code: 'async function fetchData() {\n  const response = await fetch("/api/data");\n  const data = await response.json();\n  console.log(data);\n}' },
        output: 'This function asynchronously fetches data from an API without freezing the page.',
      },
      // --- Advanced Level ---
      {
        slug: 'js-classes',
        title: 'JS Classes',
        description: 'Use classes for object-oriented programming.',
        content: 'ES6 classes are syntactic sugar over JavaScript\'s existing prototype-based inheritance. They provide a much simpler and cleaner syntax for creating objects and handling inheritance.',
        codeSnippet: { language: 'javascript', code: 'class Car {\n  constructor(name) {\n    this.name = name;\n  }\n  honk() {\n    return "Beep!";\n  }\n}' },
        output: 'Defines a `Car` class that can be used to create new car objects.',
      },
      {
        slug: 'js-modules',
        title: 'JS Modules',
        description: 'Split your code into separate, reusable files.',
        content: 'ES6 Modules provide a standardized way to organize your code. You can `export` functions, objects, or primitives from one module and `import` them for use in other modules.',
        codeSnippet: { language: 'javascript', code: '// lib.js\nexport const pi = 3.14;\n\n// main.js\nimport { pi } from "./lib.js";' },
        output: 'This shows how to export a value from one module and import it into another.',
      },
      {
        slug: 'js-json',
        title: 'JS JSON',
        description: 'Understand and use JavaScript Object Notation.',
        content: 'JSON is a lightweight format for storing and transporting data, often used when data is sent from a server to a web page. Use `JSON.parse()` and `JSON.stringify()` to work with it.',
        codeSnippet: { language: 'javascript', code: 'const myObj = JSON.parse(\'{"name":"John", "age":30}\');' },
        output: 'Parses the JSON string into a JavaScript object.',
      },
      {
        slug: 'js-debugging',
        title: 'JS Debugging',
        description: 'Learn techniques for finding and fixing errors in your code.',
        content: 'Errors in JavaScript programs are common. The process of finding and fixing errors is called debugging. The browser\'s developer console and tools like breakpoints and the `debugger` statement are essential for this.',
        codeSnippet: { language: 'javascript', code: 'let x = 15 * 5;\ndebugger;\ndocument.getElementById("demo").innerHTML = x;' },
        output: 'The `debugger` keyword stops the execution of JavaScript and calls (if available) the debugging function, just like setting a breakpoint in the code.',
      },
      {
        slug: 'js-error-handling',
        title: 'JS Error Handling (try/catch)',
        description: 'Handle runtime errors gracefully.',
        content: 'The `try...catch` statement allows you to test a block of code for errors. The `try` block contains the code to be run, and the `catch` block contains the code to be executed if an error occurs.',
        codeSnippet: { language: 'javascript', code: 'try {\n  adddlert("Welcome guest!");\n} catch(err) {\n  console.error(err.message);\n}' },
        output: 'Catches the error caused by the misspelled `alert` function and logs the error message to the console instead of crashing the script.',
      },
      {
        slug: 'js-this-keyword',
        title: 'JS `this` Keyword',
        description: 'Understand the context of `this` in different situations.',
        content: 'The `this` keyword refers to the object it belongs to. Its value depends on how a function is called. In an object method, `this` refers to the object. Alone, `this` refers to the global object. In an event, `this` refers to the element that received the event.',
        codeSnippet: { language: 'javascript', code: 'const person = {\n  fullName: function() {\n    return this.firstName + " " + this.lastName;\n  }\n};' },
        output: 'In this method, `this` refers to the `person` object.',
      },
      {
        slug: 'js-strict-mode',
        title: 'JS Strict Mode',
        description: 'Write more secure and robust JavaScript code.',
        content: 'Strict Mode is a way to opt in to a restricted variant of JavaScript. It helps you write cleaner code, by catching common coding bloopers and throwing exceptions. It is enabled by writing `"use strict";` at the beginning of a script or a function.',
        codeSnippet: { language: 'javascript', code: '"use strict";\nx = 3.14; // This will cause an error because x is not declared.' },
        output: 'Strict mode prevents the accidental creation of global variables.',
      },
      {
        slug: 'js-best-practices',
        title: 'JS Best Practices',
        description: 'Learn conventions for writing high-quality JavaScript.',
        content: 'Best practices include avoiding global variables, using `let` and `const` over `var`, using strict mode, using consistent naming conventions, and commenting your code appropriately.',
        codeSnippet: { language: 'bash', code: '/* No code example for best practices */' },
        output: 'Following best practices leads to more readable, maintainable, and less error-prone code.',
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
        question: "Who makes the Web standards?",
        options: ["Google", "Mozilla", "The World Wide Web Consortium", "Microsoft"],
        correctAnswer: 2,
        explanation: "The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web."
      },
      {
        question: "Which element contains all the visible content of a webpage?",
        options: ["<head>", "<body>", "<main>", "<div>"],
        correctAnswer: 1,
        explanation: "The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, etc."
      }
    ],
    'html-editors': [
      {
        question: "Which of the following is a professional code editor?",
        options: ["Notepad", "Microsoft Word", "VS Code", "Gmail"],
        correctAnswer: 2,
        explanation: "VS Code is a popular, free, and powerful code editor developed by Microsoft, widely used for web development."
      },
      {
        question: "Do you need an expensive software to write HTML?",
        options: ["Yes, a professional license is required.", "Yes, only Adobe Dreamweaver works.", "No, you can use a simple text editor or a free code editor.", "No, but you need a compiler."],
        correctAnswer: 2,
        explanation: "HTML is a text-based language, so any program that can edit plain text can be used to write HTML."
      }
    ],
    'html-basic': [
      {
        question: "What is the purpose of the `<!DOCTYPE html>` declaration?",
        options: ["It defines a variable.", "It tells the browser that the document is an HTML5 document.", "It creates a comment.", "It links to a stylesheet."],
        correctAnswer: 1,
        explanation: "The `<!DOCTYPE html>` declaration is an instruction to the web browser about what version of HTML the page is written in."
      },
      {
        question: "The visible part of the HTML document is between which two tags?",
        options: ["<head> and </head>", "<html> and </html>", "<body> and </body>", "<p> and </p>"],
        correctAnswer: 2,
        explanation: "The `<body>` tag defines the document's body, which contains all visible content."
      }
    ],
    'html-elements': [
      {
        question: "What does an HTML element typically consist of?",
        options: ["A start tag and an end tag", "Content only", "A start tag, content, and an end tag", "A start tag only"],
        correctAnswer: 2,
        explanation: "An HTML element is defined by a start tag, the content inside, and an end tag. For example: `<p>My content.</p>`"
      },
      {
        question: "Which of the following is an example of an empty or void element?",
        options: ["<p>", "<img>", "<div>", "<span>"],
        correctAnswer: 1,
        explanation: "Empty elements are elements that do not have a closing tag or content. `<img>` and `<br>` are common examples."
      }
    ],
    'html-attributes': [
      {
        question: "Where are HTML attributes always specified?",
        options: ["In the end tag", "In the start tag", "After the end tag", "In a separate file"],
        correctAnswer: 1,
        explanation: "Attributes provide additional information about elements and are always included in the opening tag."
      },
      {
        question: "Which attribute specifies the URL of the page a link goes to?",
        options: ["src", "link", "url", "href"],
        correctAnswer: 3,
        explanation: "The `href` attribute is used in an `<a>` tag to specify the destination of the hyperlink."
      }
    ],
    'html-headings': [
      {
        question: "Which element is used for the most important heading?",
        options: ["<h6>", "<h1>", "<heading>", "<head>"],
        correctAnswer: 1,
        explanation: "`<h1>` defines the most important heading and should generally be used for the main title of the page content."
      },
      {
        question: "How many heading levels does HTML support?",
        options: ["3", "6", "8", "Unlimited"],
        correctAnswer: 1,
        explanation: "HTML provides six levels of headings, from `<h1>` to `<h6>`."
      }
    ],
    'html-paragraphs': [
      {
        question: "Which element defines a paragraph?",
        options: ["<paragraph>", "<para>", "<p>", "<pg>"],
        correctAnswer: 2,
        explanation: "The `<p>` element is the correct tag for defining a paragraph of text."
      },
      {
        question: "What do browsers typically do with paragraph elements?",
        options: ["Make them bold", "Center them on the page", "Add some white space (margin) before and after them", "Make them italic"],
        correctAnswer: 2,
        explanation: "Browsers automatically add a margin to the top and bottom of `<p>` elements to separate them visually."
      }
    ],
    'html-styles': [
      {
        question: "Which attribute is used to apply inline CSS?",
        options: ["css", "inline", "style", "design"],
        correctAnswer: 2,
        explanation: "The `style` attribute is used to add styles to an element, such as color, font, size, etc."
      },
      {
        question: "What is the correct syntax for changing the text color to blue?",
        options: ['style="text-color:blue;"', 'style="color:blue;"', 'style="font-color:blue;"', 'style="blue-text;"'],
        correctAnswer: 1,
        explanation: 'The CSS `color` property is used to set the color of the text. The correct syntax is `style="color:blue;"`.'
      }
    ],
    'html-text-formatting': [
      {
        question: "Which tag is used to define important text, which typically renders as bold?",
        options: ["<b>", "<important>", "<strong>", "<bold>"],
        correctAnswer: 2,
        explanation: "The `<strong>` tag is used to give text strong importance, and it is semantically preferred over `<b>` for this purpose."
      },
      {
        question: "Which tag is used to define emphasized text, which typically renders as italic?",
        options: ["<i>", "<em>", "<italic>", "<emp>"],
        correctAnswer: 1,
        explanation: "The `<em>` tag is used to define emphasized text. It carries semantic meaning, unlike `<i>` which is purely for style."
      }
    ],
    'html-comments': [
      {
        question: "What is the correct syntax for an HTML comment?",
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "' This is a comment"],
        correctAnswer: 2,
        explanation: "HTML comments start with `<!--` and end with `-->`."
      },
      {
        question: "Are HTML comments displayed in the browser?",
        options: ["Yes", "No", "Only if they contain a special tag", "Only in development mode"],
        correctAnswer: 1,
        explanation: "Comments are completely ignored by the browser and are not displayed on the page."
      }
    ],
    'html-links': [
        {
          question: 'How do you create a link that opens in a new tab?',
          options: ['<a href="..." target="_blank">', '<a href="..." newtab>', '<a href="..." target="_new">', '<a href="..." open="new">'],
          correctAnswer: 0,
          explanation: 'Using `target="_blank"` instructs the browser to open the linked document in a new window or tab.',
        },
        {
          question: 'How can you create a link to a section with `id="tips"` within the same page?',
          options: ['<a href="tips">', '<a href="#tips">', '<a link="#tips">', '<a target="tips">'],
          correctAnswer: 1,
          explanation: 'You create an internal link (or "fragment identifier") by setting the `href` attribute to a hash symbol `#` followed by the `id` of the target element.',
        }
    ],
    'html-images': [
      {
        question: "Which two attributes are required for an `<img>` tag?",
        options: ["src and href", "src and alt", "href and alt", "title and src"],
        correctAnswer: 1,
        explanation: "An `<img>` tag must have a `src` attribute to specify the image source and an `alt` attribute to provide alternative text for accessibility."
      },
      {
        question: "What is the purpose of the `alt` attribute?",
        options: ["To provide a caption for the image.", "To specify the image URL.", "To provide alternative text for screen readers and when the image fails to load.", "To set the image alignment."],
        correctAnswer: 2,
        explanation: "The `alt` attribute provides alternative text for an image, which is essential for accessibility and for SEO."
      }
    ],
    'html-tables': [
      {
        question: "Which tag is used to define a table row?",
        options: ["<td>", "<col>", "<th>", "<tr>"],
        correctAnswer: 3,
        explanation: "The `<tr>` (table row) element is used to define a row of cells in a table."
      },
      {
        question: "How do you make a cell span across two columns?",
        options: ["`span=\"2\"`", "`colspan=\"2\"`", "`col-span: 2;`", "`merge=\"2\"`"],
        correctAnswer: 1,
        explanation: "The `colspan` attribute on a `<td>` or `<th>` element specifies the number of columns a cell should span."
      }
    ],
    'html-lists': [
        {
          question: "Which tag is used to create an unordered (bulleted) list?",
          options: ["<ol>", "<dl>", "<ul>", "<list>"],
          correctAnswer: 2,
          explanation: "The `<ul>` tag is used to define an unordered list, which is typically rendered with bullet points."
        },
        {
          question: "Which tag defines a single item within a list?",
          options: ["<item>", "<li>", "<dd>", "<dt>"],
          correctAnswer: 1,
          explanation: "The `<li>` (list item) tag is used to define each item within `<ul>`, `<ol>`, and other list types."
        }
    ],
    'html-block-and-inline': [
      {
        question: "Which of these is a block-level element by default?",
        options: ["<span>", "<a>", "<img>", "<div>"],
        correctAnswer: 3,
        explanation: "Block-level elements always start on a new line and take up the full width available. `<div>` is a classic example."
      },
      {
        question: "Which of these is an inline element by default?",
        options: ["<p>", "<h1>", "<span>", "<li>"],
        correctAnswer: 2,
        explanation: "Inline elements do not start on a new line and only take up as much width as necessary. `<span>` is a generic inline container."
      }
    ],
    'html-classes': [
      {
        question: "How would you select all elements with `class=\"highlight\"` in CSS?",
        options: ["#highlight", ".highlight", "highlight", "*highlight"],
        correctAnswer: 1,
        explanation: "The dot (`.`) character is used in CSS to select all elements with a specific class name."
      },
      {
        question: "Can an element have multiple classes?",
        options: ["No, only one class is allowed.", "Yes, by separating the class names with a space.", "Yes, by separating them with a comma.", "Only with JavaScript."],
        correctAnswer: 1,
        explanation: 'Yes, you can assign multiple classes to an element by separating them with spaces, for example: `<p class="important urgent">`.'
      }
    ],
    'html-id': [
      {
        question: "How many times can a specific ID be used in an HTML document?",
        options: ["As many times as needed", "Twice", "Once", "Ten times"],
        correctAnswer: 2,
        explanation: "The value of an ID attribute must be unique within the HTML document. It is used to target a single, specific element."
      },
      {
        question: "How would you select an element with `id=\"main-nav\"` in CSS?",
        options: [".main-nav", "#main-nav", "main-nav", "&main-nav"],
        correctAnswer: 1,
        explanation: "The hash (`#`) character is used in CSS to select an element by its ID."
      }
    ],
    'html-iframes': [
      {
        question: "Which attribute specifies the URL of the document to embed in an iframe?",
        options: ["href", "src", "link", "url"],
        correctAnswer: 1,
        explanation: "The `src` attribute specifies the URL (web address) of the inline frame page."
      },
      {
        question: "What is a potential security risk of using iframes?",
        options: ["They can slow down your website.", "They can be used for \"clickjacking\" attacks.", "They are not supported by modern browsers.", "They can only display insecure content."],
        correctAnswer: 1,
        explanation: "Clickjacking is a malicious technique of tricking a user into clicking on something different from what the user perceives. Iframes are a common vector for this, although modern headers can help prevent it."
      }
    ],
    'html-forms': [
      {
        question: "Which tag is used as a container for all user input controls?",
        options: ["<input>", "<form>", "<fieldset>", "<label>"],
        correctAnswer: 1,
        explanation: "The `<form>` element is the container for all form controls that will be submitted together."
      },
      {
        question: "Which `<input>` type is used for a submit button?",
        options: ["type=\"button\"", "type=\"submit\"", "type=\"send\"", "type=\"ok\""],
        correctAnswer: 1,
        explanation: "`<input type=\"submit\">` defines a button for submitting the form data to a form-handler."
      }
    ],
    'html-form-elements': [
      {
        question: "Which element is used to create a dropdown list?",
        options: ['<input type="dropdown">', "<list>", "<select>", "<dropdown>"],
        correctAnswer: 2,
        explanation: "The `<select>` element is used to create a drop-down list, with the options defined by `<option>` tags inside it."
      },
      {
        question: "Which element is used for a multi-line text input?",
        options: ['<input type="textarea">', '<input type="multiline">', "<textarea>", "<text-field>"],
        correctAnswer: 2,
        explanation: "The `<textarea>` element defines a multi-line text input control."
      }
    ],
    'html-input-types': [
      {
        question: "Which HTML5 input type provides a color picker interface?",
        options: ["type=\"picker\"", "type=\"color\"", "type=\"rgb\"", "type=\"palette\""],
        correctAnswer: 1,
        explanation: '`<input type="color">` defines a color picker, allowing the user to select a color from a standard color-picker interface in supported browsers.'
      },
      {
        question: "Which input type is specifically for entering an email address and provides validation on mobile devices?",
        options: ["type=\"text\"", "type=\"email\"", "type=\"address\"", "type=\"user\""],
        correctAnswer: 1,
        explanation: "Using `type=\"email\"` provides automatic validation to check if the text is a properly formatted email address and often shows a specialized keyboard on mobile devices."
      }
    ],
    'html-input-attributes': [
      {
        question: "What does the `placeholder` attribute do?",
        options: ["It sets the default value of the input field.", "It provides a short hint that describes the expected value of an input field.", "It is the name of the input field sent to the server.", "It makes the input field required."],
        correctAnswer: 1,
        explanation: "The `placeholder` attribute specifies a short hint that is displayed in the input field before the user enters a value."
      },
      {
        question: "Which attribute makes an input field mandatory for form submission?",
        options: ["validate", "mandatory", "important", "required"],
        correctAnswer: 3,
        explanation: "The `required` boolean attribute specifies that an input field must be filled out before submitting the form."
      }
    ],
    'html-head': [
      {
        question: "Which of the following elements is typically found inside the `<head>` section?",
        options: ["<h1>", "<p>", "<title>", "<div>"],
        correctAnswer: 2,
        explanation: "The `<head>` element is a container for metadata. The `<title>`, `<meta>`, `<link>`, and `<style>` elements are placed inside the `<head>` section."
      },
      {
        question: "Is content inside the `<head>` element displayed on the web page?",
        options: ["Yes, at the top of the page.", "No, it contains metadata and links that are not displayed.", "Only the `<title>` is displayed.", "Yes, but it is hidden by default."],
        correctAnswer: 1,
        explanation: "Content of the `<head>` element is not displayed in the browser window, with the exception of the `<title>` element, which sets the title for the browser tab or window."
      }
    ],
    'html-layout': [
      {
        question: "Which HTML5 element is intended to contain the main, dominant content of a document?",
        options: ["<section>", "<body>", "<main>", "<article>"],
        correctAnswer: 2,
        explanation: "The `<main>` tag specifies the main content of a document. The content inside the `<main>` element should be unique to the document."
      },
      {
        question: "Which semantic element would you use for a sidebar?",
        options: ["<sidebar>", "<details>", "<aside>", "<section>"],
        correctAnswer: 2,
        explanation: "The `<aside>` element represents a portion of a document whose content is only indirectly related to the document's main content, which is perfect for a sidebar."
      }
    ],
    'html-responsive': [
      {
        question: "What is the primary purpose of the viewport meta tag?",
        options: ["To set the background color.", "To control the layout and scaling on mobile browsers.", "To define the visible area for printing.", "To set the zoom level for desktops."],
        correctAnswer: 1,
        explanation: 'The viewport meta tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is crucial for responsive design, as it tells the browser how to control the page\'s dimensions and scaling.'
      },
      {
        question: "What is a 'mobile-first' approach in web design?",
        options: ["Designing only for mobile devices.", "Designing the mobile layout first, then enhancing for larger screens.", "Making the desktop site look like a mobile app.", "Using mobile-specific code that doesn't work on desktop."],
        correctAnswer: 1,
        explanation: "Mobile-first means designing for the smallest screen first and then progressively enhancing the design for tablets and desktops. This often leads to a cleaner, more performant result."
      }
    ],
    'html5-semantic-elements': [
      {
        question: "Which element represents a self-contained composition in a document, such as a blog entry or newspaper article?",
        options: ["<section>", "<aside>", "<article>", "<div>"],
        correctAnswer: 2,
        explanation: "The `<article>` element specifies independent, self-contained content. It should make sense on its own."
      },
      {
        question: "Which element would be best for grouping an image and its caption?",
        options: ["<figure>", "<div>", "<image>", "<section>"],
        correctAnswer: 0,
        explanation: "The `<figure>` element is the semantically correct way to encapsulate media like an image, which can then be associated with a `<figcaption>`."
      }
    ],
    'html-multimedia': [
      {
        question: "What does the `controls` attribute do on `<audio>` and `<video>` tags?",
        options: ["It starts the media playback automatically.", "It loops the media.", "It displays playback controls like play, pause, and volume.", "It sets the media quality."],
        correctAnswer: 2,
        explanation: "The `controls` attribute is a boolean attribute that, when present, specifies that audio/video controls should be displayed."
      },
      {
        question: "What is the purpose of the `<source>` element inside a `<video>` tag?",
        options: ["To provide a text transcript.", "To provide multiple video file formats for better browser compatibility.", "To set the poster image.", "To define subtitles."],
        correctAnswer: 1,
        explanation: "Because not all browsers support the same video formats, you can provide multiple `<source>` elements, and the browser will use the first one it supports."
      }
    ],
    'html-apis': [
      {
        question: "Which API is used to get the geographical position of a user?",
        options: ["Drag/Drop API", "Web Storage API", "Geolocation API", "History API"],
        correctAnswer: 2,
        explanation: "The Geolocation API is used to locate the user's position."
      },
      {
        question: "Which Web Storage API object stores data with no expiration date?",
        options: ["sessionStorage", "localStorage", "globalStorage", "cookieStorage"],
        correctAnswer: 1,
        explanation: "`localStorage` stores data that persists even after the browser is closed and reopened."
      }
    ],
    'html-graphics': [
      {
        question: "What is the main difference between SVG and Canvas?",
        options: ["SVG is raster-based, Canvas is vector-based.", "SVG is vector-based, Canvas is raster-based (pixel-based).", "SVG is for 3D graphics, Canvas is for 2D.", "There is no difference."],
        correctAnswer: 1,
        explanation: "SVG is a vector format that retains quality at any scale, making it ideal for logos. Canvas is a raster format that draws pixels, which is better for dynamic games and animations."
      },
      {
        question: "How do you draw on a `<canvas>` element?",
        options: ["Using CSS properties.", "Using HTML tags inside the canvas.", "Using JavaScript to get the rendering context and call drawing methods.", "Using a special `draw` attribute."],
        correctAnswer: 2,
        explanation: "The `<canvas>` element is just a container. To draw, you must use JavaScript to get its 2D or WebGL context and then use the context's API to draw shapes, text, and images."
      }
    ],
    'html-web-storage': [
        {
          question: "How do you save a value 'John' with key 'name' to `localStorage`?",
          options: ['`localStorage.save("name", "John");`', '`localStorage.setItem("name", "John");`', '`localStorage.add("name", "John");`', '`localStorage("name") = "John";`'],
          correctAnswer: 1,
          explanation: 'The `setItem()` method is used to add a key and a value to the localStorage object.'
        },
        {
          question: "What happens to data in `sessionStorage` when the user closes the browser tab?",
          options: ["It is saved for the next visit.", "It is sent to the server.", "It is deleted.", "It is moved to localStorage."],
          correctAnswer: 2,
          explanation: '`sessionStorage` maintains a separate storage area for each given origin that\'s available for the duration of the page session (as long as the browser tab is open).'
        }
    ],
    'html-web-workers': [
      {
        question: "What is the primary benefit of using a Web Worker?",
        options: ["It makes the website look better.", "It allows scripts to run in the background without freezing the user interface.", "It stores data permanently.", "It improves SEO."],
        correctAnswer: 1,
        explanation: "Web Workers run on a separate thread, allowing them to perform computationally intensive tasks without blocking the main thread and making the webpage unresponsive."
      },
      {
        question: "How does a Web Worker communicate with the main script?",
        options: ["By direct function calls.", "By posting messages using `postMessage()` and listening for them with an `onmessage` event handler.", "By modifying the DOM.", "They cannot communicate."],
        correctAnswer: 1,
        explanation: "Web Workers run in a different global context. Communication between the worker and the main thread is done by posting messages back and forth."
      }
    ],
    'html-server-sent-events': [
      {
        question: "What are Server-Sent Events (SSE) primarily used for?",
        options: ["Sending data from the client to the server.", "Receiving automatic updates from a server to a web page.", "Executing server-side code.", "Storing data on the server."],
        correctAnswer: 1,
        explanation: "SSE is a technology for enabling a server to push data to the client once an initial client connection has been established. It's a one-way communication channel from server to client."
      },
      {
        question: "What is a major difference between WebSockets and Server-Sent Events?",
        options: ["SSE is faster than WebSockets.", "WebSockets are bi-directional (two-way), while SSE is uni-directional (one-way from server to client).", "SSE has better browser support.", "There is no difference."],
        correctAnswer: 1,
        explanation: "WebSockets provide a full-duplex communication channel, allowing both client and server to send messages at any time. SSE is simpler and only allows the server to send data to the client."
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
      },
      {
        question: 'Which HTML tag is used to link an external CSS file?',
        options: ['<style>', '<script>', '<css>', '<link>'],
        correctAnswer: 3,
        explanation: 'The `<link>` tag, placed in the `<head>` section, is used to link to external style sheets.'
      }
    ],
    'css-syntax': [
      {
        question: 'A CSS rule consists of a selector and what else?',
        options: ['A property', 'A value', 'A declaration block', 'A comment'],
        correctAnswer: 2,
        explanation: 'A CSS rule is made of a selector and a declaration block, which contains one or more declarations (property-value pairs).'
      },
      {
        question: 'How are declarations separated inside a declaration block?',
        options: ['With a comma', 'With a semicolon', 'With a period', 'With a space'],
        correctAnswer: 1,
        explanation: 'Each declaration inside a declaration block must be separated by a semicolon.'
      }
    ],
    'css-selectors': [
      {
        question: 'Which character is used to select an element by its ID?',
        options: ['.', '&', '*', '#'],
        correctAnswer: 3,
        explanation: 'The hash (#) symbol is used to select an element with a specific ID, for example: `#myId`.'
      },
      {
        question: 'How do you select all `<p>` elements with `class="intro"`?',
        options: ['p.intro', 'p .intro', 'p, .intro', 'p#intro'],
        correctAnswer: 0,
        explanation: 'The selector `p.intro` selects all `<p>` elements that also have the class `intro`.'
      }
    ],
    'css-how-to': [
      {
        question: 'Which method of applying CSS has the highest precedence?',
        options: ['External style sheet', 'Internal style sheet', 'Inline style', 'They all have the same precedence'],
        correctAnswer: 2,
        explanation: 'Inline styles (using the `style` attribute) have the highest priority, overriding internal and external styles.'
      },
      {
        question: 'Which HTML attribute is used for inline styles?',
        options: ['class', 'style', 'styles', 'font'],
        correctAnswer: 1,
        explanation: 'The `style` attribute is used to apply CSS rules directly to a specific HTML element.'
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
        question: 'What does the "a" in `rgba(255, 0, 0, 0.5)` stand for?',
        options: ['alpha', 'amount', 'adjust', 'analogous'],
        correctAnswer: 0,
        explanation: 'The "a" stands for alpha, which represents the opacity of the color. A value of 0 is fully transparent, and 1 is fully opaque.'
      },
      {
        question: 'Which of the following is the HEX code for pure white?',
        options: ['#000000', '#ffffff', '#111111', '#eeeeee'],
        correctAnswer: 1,
        explanation: '`#ffffff` represents full intensity for red, green, and blue, which creates white. `#000000` is black.'
      }
    ],
    'css-backgrounds': [
      {
        question: 'Which property is a shorthand for all background properties?',
        options: ['background-all', 'bg', 'background-shorthand', 'background'],
        correctAnswer: 3,
        explanation: 'The `background` property is a shorthand for setting `background-color`, `background-image`, `background-repeat`, `background-position`, etc., in one declaration.'
      },
      {
        question: 'How do you make a background image cover the entire container without losing its aspect ratio?',
        options: ['`background-size: contain;`', '`background-size: 100% 100%;`', '`background-size: cover;`', '`background-fit: cover;`'],
        correctAnswer: 2,
        explanation: '`background-size: cover;` scales the image to be as large as possible so that the background area is completely covered, while maintaining the image\'s aspect ratio.'
      }
    ],
    'css-borders': [
      {
        question: 'What does `border-radius` do?',
        options: ['Changes the color of the border.', 'Sets the thickness of the border.', 'Adds rounded corners to an element\'s border.', 'Makes the border a radial gradient.'],
        correctAnswer: 2,
        explanation: 'The `border-radius` property is used to add rounded corners to an element.'
      },
      {
        question: 'What are the three components of the `border` shorthand property?',
        options: ['width, style, color', 'size, type, color', 'width, shape, color', 'thickness, style, hue'],
        correctAnswer: 0,
        explanation: 'The `border` shorthand property sets the `border-width`, `border-style`, and `border-color` in one declaration.'
      }
    ],
    'css-margins': [
      {
        question: 'The declaration `margin: 10px 5px 20px;` sets which margins?',
        options: ['Top 10, Right 5, Bottom 20, Left 5', 'Top 10, Right 5, Bottom 20, Left 10', 'Top 10, Right 20, Bottom 5, Left 20', 'Top 10, Right 5, Bottom 20, Left 20'],
        correctAnswer: 0,
        explanation: 'When three values are provided, the first is for the top, the second is for left and right, and the third is for the bottom.'
      },
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
      },
      {
        question: 'If an element has a background color, does the padding area also get that color?',
        options: ['No, padding is always transparent.', 'Yes, the background extends through the padding area.', 'Only if specified with `padding-color`.', 'Only the top padding gets the color.'],
        correctAnswer: 1,
        explanation: 'The background of an element extends through its content and padding areas, up to the inner edge of the border.'
      }
    ],
    'css-box-model': [
      {
        question: 'What does `box-sizing: border-box;` do?',
        options: ['It removes the border and padding.', 'It includes padding and border in the element\'s total width and height.', 'It makes the box model visible.', 'It only allows a box to be a border.'],
        correctAnswer: 1,
        explanation: '`box-sizing: border-box;` tells the browser that the width and height properties should include content, padding, and border, but not the margin.'
      },
      {
        question: 'Which of the following is NOT part of the standard CSS Box Model?',
        options: ['Margin', 'Border', 'Padding', 'Outline'],
        correctAnswer: 3,
        explanation: 'The standard CSS Box Model consists of Content, Padding, Border, and Margin. The `outline` is drawn outside the border but is not part of the box model\'s space calculation.'
      }
    ],
    'css-outline': [
      {
        question: 'What is the main difference between `border` and `outline`?',
        options: ['There is no difference.', '`outline` is drawn inside the border.', '`outline` does not take up any space in the layout, while `border` does.', '`outline` can only be a solid line.'],
        correctAnswer: 2,
        explanation: 'An outline is drawn around the element, outside the border. Unlike the border, it does not take up space, so it will not affect the position or layout of other elements.'
      }
    ],
    'css-text': [
      {
        question: 'Which property would you use to create space between letters?',
        options: ['`word-spacing`', '`font-spacing`', '`letter-spacing`', '`text-spacing`'],
        correctAnswer: 2,
        explanation: 'The `letter-spacing` property is used to increase or decrease the space between characters in a text.'
      }
    ],
    'css-fonts': [
      {
        question: 'What is a "fallback" font in a `font-family` declaration?',
        options: ['The first font in the list.', 'A font that is used if the preceding fonts are not available.', 'A font that is guaranteed to be on all computers.', 'A decorative font.'],
        correctAnswer: 1,
        explanation: 'You should provide a list of fonts, ending with a generic family (like `sans-serif`), so the browser has backups if the first choices aren\'t installed on the user\'s system.'
      }
    ],
    'css-icons': [
      {
        question: 'What is a common way to add icons from a library like Font Awesome?',
        options: ['Using the `<img>` tag.', 'Using an `<i>` or `<span>` tag with a specific class.', 'Using the `::before` pseudo-element with a content URL.', 'Using the `<icon>` tag.'],
        correctAnswer: 1,
        explanation: 'Icon libraries typically provide a set of CSS classes that you apply to an inline element like `<i>` or `<span>` to render the desired icon.'
      }
    ],
    'css-links': [
      {
        question: 'Which pseudo-class is used to style a link when the user\'s mouse is over it?',
        options: [':focus', ':active', ':link', ':hover'],
        correctAnswer: 3,
        explanation: 'The `:hover` pseudo-class applies when the user interacts with an element with a pointing device, but does not necessarily activate it.'
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
        question: 'An element with `position: absolute;` is positioned relative to what?',
        options: ['Its normal position', 'Its nearest positioned (non-static) ancestor', 'The viewport', 'The `<html>` element'],
        correctAnswer: 1,
        explanation: 'An absolutely positioned element is removed from the normal document flow and is positioned relative to its closest ancestor that has a `position` value other than `static`.'
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
    'css-overflow': [
      {
        question: 'Which `overflow` value will add scrollbars only when necessary?',
        options: ['`visible`', '`hidden`', '`scroll`', '`auto`'],
        correctAnswer: 3,
        explanation: '`auto` is similar to `scroll`, but it only adds scrollbars when the content actually overflows its container.'
      }
    ],
    'css-float': [
      {
        question: 'What modern CSS layout modules are now used instead of `float` for most layouts?',
        options: ['Tables and Iframes', '`position: absolute`', 'Flexbox and Grid', '`display: inline-block`'],
        correctAnswer: 2,
        explanation: '`float` was a technique for layout in the past, but Flexbox (for one dimension) and Grid (for two dimensions) are the modern, powerful, and standard tools for creating page layouts.'
      }
    ],
    'css-combinators': [
      {
        question: 'What does the selector `h2 + p` target?',
        options: ['All `<p>` elements inside an `<h2>`', 'All `<p>` elements that are children of an `<h2>`', 'The first `<p>` element immediately following an `<h2>`', 'All `<p>` elements that are siblings of an `<h2>`'],
        correctAnswer: 2,
        explanation: 'The `+` is the adjacent sibling combinator. It selects the element that is immediately after the former element.'
      }
    ],
    'css-pseudo-classes': [
      {
        question: 'What does the `:nth-child(odd)` pseudo-class select?',
        options: ['Every odd-numbered element (1st, 3rd, 5th, etc.).', 'Every element with an odd `id`.', 'The third element only.', 'The first and last elements.'],
        correctAnswer: 0,
        explanation: '`:nth-child(odd)` selects every sibling element that is the first, third, fifth (and so on) child of its parent. It is great for zebra-striping tables.'
      }
    ],
    'css-pseudo-elements': [
      {
        question: 'Which property is required for `::before` and `::after` pseudo-elements to work?',
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
    'css-responsive-design': [
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
    'css-functions': [
      {
        question: 'What does `width: calc(50% - 20px);` do?',
        options: ['It calculates 50% of 20px.', 'It sets the width to be 20 pixels less than 50% of its container\'s width.', 'It is invalid syntax.', 'It sets the width to either 50% or 20px.'],
        correctAnswer: 1,
        explanation: 'The `calc()` function lets you perform mathematical calculations on property values. It\'s very useful for mixing units, like percentages and pixels.'
      }
    ],
    'css-best-practices': [
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
      },
      {
        question: 'JavaScript is the same as Java.',
        options: ['True', 'False', 'Sometimes', 'They are different versions of the same language'],
        correctAnswer: 1,
        explanation: 'This is a common misconception. JavaScript and Java are two completely different programming languages with different syntax and use cases.'
      }
    ],
    'js-where-to': [
      {
        question: 'Which HTML element is used to contain JavaScript code?',
        options: ['<javascript>', '<js>', '<script>', '<style>'],
        correctAnswer: 2,
        explanation: 'The `<script>` tag is used to embed or refer to executable code; it is typically used for JavaScript.'
      },
      {
        question: 'Is it better to put `<script>` tags at the end of the `<body>` or in the `<head>`?',
        options: ['In the `<head>` to load first.', 'At the end of the `<body>` to improve page load performance.', 'It makes no difference.', 'Outside the `<html>` tag.'],
        correctAnswer: 1,
        explanation: 'Placing scripts at the end of the `<body>` allows the HTML content to be parsed and displayed first, which can make the page feel faster for the user.'
      }
    ],
    'js-output': [
      {
        question: 'Which method is most commonly used for debugging purposes to display data in the browser\'s developer tools?',
        options: ['`alert()`', '`document.write()`', '`innerHTML`', '`console.log()`'],
        correctAnswer: 3,
        explanation: '`console.log()` is the standard tool for developers to inspect values and debug code without interrupting the user with an alert box.'
      }
    ],
    'js-statements': [
      {
        question: 'In JavaScript, what character is used to separate statements?',
        options: ['Comma (,)', 'Colon (:)', 'Semicolon (;)', 'Period (.)'],
        correctAnswer: 2,
        explanation: 'Semicolons are used to separate JavaScript statements, although they are sometimes optional due to Automatic Semicolon Insertion (ASI).'
      }
    ],
    'js-syntax': [
      {
        question: 'Is JavaScript case-sensitive?',
        options: ['No', 'Yes', 'Only for variable names', 'Only for function names'],
        correctAnswer: 1,
        explanation: 'Yes, JavaScript is case-sensitive. The variables `myVar` and `myvar` would be two different variables.'
      }
    ],
    'js-variables': [
      {
        question: 'What is the main difference between `let` and `const`?',
        options: ['`let` is for numbers, `const` is for strings.', '`let` can be reassigned, while `const` cannot.', '`let` is function-scoped, `const` is block-scoped.', 'There is no difference.'],
        correctAnswer: 1,
        explanation: 'A `let` variable can be reassigned a new value, but a `const` variable\'s value cannot be changed after it is declared.'
      }
    ],
    'js-operators': [
      {
        question: 'Which operator is used for strict equality (checks both value and type)?',
        options: ['==', '=', '===', '!='],
        correctAnswer: 2,
        explanation: 'The `===` operator checks for strict equality, meaning it will only return `true` if both the value and the data type of the operands are the same.'
      }
    ],
    'js-data-types': [
      {
        question: 'What is the result of `typeof null`?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswer: 2,
        explanation: 'This is a well-known quirk in JavaScript from its early days. `typeof null` returns "object".'
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
    'js-events': [
      {
        question: 'Which method is used to attach an event handler to an element in modern JavaScript?',
        options: ['`attachEvent()`', '`onEvent()`', '`addEventListener()`', '`listen()`'],
        correctAnswer: 2,
        explanation: '`element.addEventListener()` is the modern and recommended way to register an event handler, as it allows multiple handlers for the same event.'
      }
    ],
    'js-strings': [
      {
        question: 'Which method extracts a part of a string between two indexes and returns the extracted part?',
        options: ['`split()`', '`slice()`', '`replace()`', '`search()`'],
        correctAnswer: 1,
        explanation: 'The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.'
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
    'js-array-methods': [
      {
        question: 'Which method creates a new array with all elements that pass a test implemented by a provided function?',
        options: ['`map()`', '`filter()`', '`reduce()`', '`forEach()`'],
        correctAnswer: 1,
        explanation: 'The `filter()` method creates a new array containing only the elements from the original array that return `true` from the provided callback function.'
      }
    ],
    'js-dates': [
      {
        question: 'In the `Date` object, which number represents the month of January?',
        options: ['0', '1', '12', 'JAN'],
        correctAnswer: 0,
        explanation: 'Months in JavaScript\'s `Date` object are zero-indexed, meaning January is 0, February is 1, and so on up to December which is 11.'
      }
    ],
    'js-math': [
      {
        question: 'How do you get a random integer between 1 and 10 (inclusive)?',
        options: ['`Math.random(1, 10)`', '`Math.floor(Math.random() * 10) + 1`', '`Math.ceil(Math.random() * 10)`', '`Math.randomInt(1, 10)`'],
        correctAnswer: 1,
        explanation: '`Math.random()` gives a number from 0 to <1. Multiplying by 10 gives 0 to <10. `Math.floor()` rounds down, giving 0-9. Adding 1 shifts the range to 1-10.'
      }
    ],
    'js-booleans': [
      {
        question: 'Which of the following is a "falsy" value in JavaScript?',
        options: ['"0"', '[] (an empty array)', '{} (an empty object)', '"" (an empty string)'],
        correctAnswer: 3,
        explanation: 'The six falsy values are `false`, `0`, `""`, `null`, `undefined`, and `NaN`. An empty array or object is "truthy".'
      }
    ],
    'js-comparisons': [
      {
        question: 'What is the result of `"5" == 5`?',
        options: ['`true`', '`false`', '`undefined`', '`TypeError`'],
        correctAnswer: 0,
        explanation: 'The loose equality operator `==` performs type coercion. It converts the string "5" to a number before comparing, so it evaluates to true.'
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
    'js-switch': [
      {
        question: 'What is the purpose of the `break` keyword within a `switch` statement?',
        options: ['To end the entire script.', 'To stop the execution of the `switch` block and prevent "fall-through" to the next case.', 'To skip the current case.', 'To indicate the default case.'],
        correctAnswer: 1,
        explanation: 'Without a `break`, the code will continue to execute the code in the next `case` block, which is usually not the intended behavior.'
      }
    ],
    'js-loop-for': [
      {
        question: 'Which loop is best suited for iterating over the properties of an object?',
        options: ['`for`', '`while`', '`for...of`', '`for...in`'],
        correctAnswer: 3,
        explanation: 'The `for...in` loop is specifically designed to iterate over the enumerable properties of an object.'
      }
    ],
    'js-loop-while': [
      {
        question: 'What is the main difference between a `while` loop and a `do...while` loop?',
        options: ['There is no difference.', 'A `do...while` loop will execute its body at least once, regardless of the condition.', 'A `while` loop is faster.', 'A `do...while` loop does not need a condition.'],
        correctAnswer: 1,
        explanation: 'A `while` loop checks the condition *before* executing the body. A `do...while` loop executes the body *first* and then checks the condition, guaranteeing at least one execution.'
      }
    ],
    'js-dom': [
      {
        question: 'How do you add a CSS class "highlight" to an element?',
        options: ['`element.class = "highlight";`', '`element.className += " highlight";`', '`element.classList.add("highlight");`', '`element.style = "highlight";`'],
        correctAnswer: 2,
        explanation: 'Using the `classList` API (`add`, `remove`, `toggle`) is the modern and safest way to manage classes without accidentally overwriting existing ones.'
      }
    ],
    'js-es6': [
      {
        question: 'What does "destructuring assignment" allow you to do?',
        options: ['Destroy an object or array.', 'Unpack values from arrays, or properties from objects, into distinct variables.', 'A way to restructure a database.', 'A new type of `for` loop.'],
        correctAnswer: 1,
        explanation: 'Destructuring provides a concise way to extract data. For example, `const [a, b] = [10, 20];` creates variables `a` and `b`.'
      }
    ],
    'js-async': [
      {
        question: 'What is a `Promise` in JavaScript?',
        options: ['A guarantee that a function will not have errors.', 'An object representing the eventual completion (or failure) of an asynchronous operation.', 'A new data type for storing strings.', 'A way to schedule code execution.'],
        correctAnswer: 1,
        explanation: 'Promises are a core feature for handling asynchronous operations, providing a cleaner alternative to nested callback functions (known as "callback hell").'
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
        explanation: 'JSON is a data-interchange format and cannot contain functions. It only supports strings, numbers, booleans, arrays, and objects.'
      }
    ],
    'js-debugging': [
      {
        question: 'What does the `debugger` statement do in JavaScript?',
        options: ['It logs a debug message to the console.', 'It stops the execution of JavaScript and calls the debugging function (like the browser\'s developer tools).', 'It fixes any bugs in the code.', 'It runs a performance check.'],
        correctAnswer: 1,
        explanation: 'Placing the `debugger` statement in your code acts like a breakpoint, pausing execution and allowing you to inspect variables and the call stack in the developer tools.'
      }
    ],
    'js-error-handling': [
      {
        question: 'Which block is executed regardless of whether an error was thrown or caught in a `try...catch` statement?',
        options: ['`then`', '`finally`', '`else`', '`always`'],
        correctAnswer: 1,
        explanation: 'The optional `finally` block executes after `try` and `catch`. It always executes, regardless of whether an exception was thrown or caught.'
      }
    ],
    'js-this-keyword': [
      {
        question: 'What is a key difference in how arrow functions handle the `this` keyword?',
        options: ['There is no difference.', 'Arrow functions do not have their own `this`; they inherit it from the parent (lexical) scope.', '`this` always refers to the global object in arrow functions.', 'Arrow functions require you to explicitly bind `this`.'],
        correctAnswer: 1,
        explanation: 'Arrow functions have a lexical `this`, meaning `this` retains the value of the enclosing context. This avoids many common bugs where `this` would otherwise be rebound.'
      }
    ],
    'js-strict-mode': [
      {
        question: 'What is an effect of using "use strict";?',
        options: ['It makes your code run faster.', 'It allows the use of more experimental features.', 'It changes previously accepted "bad syntax" into real errors, like assigning a value to an undeclared variable.', 'It automatically comments your code.'],
        correctAnswer: 2,
        explanation: 'Strict mode makes several changes to normal JavaScript semantics. For example, it prevents the accidental creation of global variables, which is a common source of bugs.'
      }
    ],
    'js-best-practices': [
      {
        question: 'Why is it a best practice to avoid using global variables?',
        options: ['They are slower.', 'They are not supported in modern browsers.', 'They can be overwritten by other scripts on the page, leading to unpredictable behavior and bugs.', 'They have a limited size.'],
        correctAnswer: 2,
        explanation: 'Global variables live in the shared global scope, which means any script on the page can access and modify them. This can lead to naming conflicts and hard-to-debug issues.'
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
