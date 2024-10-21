# Repository Notes

The overall insights and notes of concepts found within this repository will be noted here.

## Server and Access Information

- **Elastic Public IP Address**: `44.209.159.76`

- **SSH Command**:
  To access the server, use one of the following SSH commands:
  ```bash
  ssh -i ../260CNKey.pem ubuntu@44.209.159.76
  ssh -i ../260CNKey.pem ubuntu@ballotboxexchange.com
  ```
  These commands should be run in the startup repository itself.

- **Domain Information**:
  - **Domain Name**: ballotboxexchange.com
  - **Subdomains**:
    - www.ballotboxexchange.com
    - simon.ballotboxexchange.com
    - startup.ballotboxexchange.com


## HTML Structure, Forms, and Media Elements

### 1. HTML Structure and Layout

#### Key Concepts
HTML provides structure and content to web applications using elements like `<header>`, `<main>`, `<footer>`, `<section>`, `<div>`, and `<span>`. These elements help define different areas of a page, organizing content logically and making it accessible to both users and automated tools like search engines and screen readers.

#### Inline vs. Block Elements
The distinction between inline and block elements is fundamental. Block elements (e.g., `<div>`) create distinct sections, while inline elements (e.g., `<span>`) do not disrupt the flow of text within block elements.

#### Usage and Nesting
Proper nesting of elements ensures that the page structure is clear. For example, `<header>` might include a navigation (`<nav>`), while `<main>` might include content areas like sections and lists.

#### Example HTML Structure
```html
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```

### 2. HTML Forms and Input Elements

#### Purpose of Forms
Forms (`<form>`) in HTML are used to collect and submit user data. They include elements like `<input>`, `<textarea>`, and `<select>`, which allow different types of input. With JavaScript, forms can be dynamically controlled and validated, reducing reliance on traditional server submissions.

#### Input Types and Attributes
Input elements have various types such as `text`, `number`, `email`, `password`, and more. Key attributes include:
- `name`: The name of the input.
- `value`: The initial value of the input.
- `required`: Signifies that a value is required for validity.
- `pattern`: Provides a regular expression pattern for text validation.

#### Example Form
```html
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```

#### Input Types
| Type            | Meaning                        |
|-----------------|--------------------------------|
| `text`          | Single line textual value      |
| `password`      | Obscured password              |
| `email`         | Email address                  |
| `tel`           | Telephone number               |
| `url`           | URL address                    |
| `number`        | Numerical value                |
| `checkbox`      | Inclusive selection            |
| `radio`         | Exclusive selection            |
| `range`         | Range limited number           |
| `date`          | Year, month, day               |
| `datetime-local`| Date and time                  |
| `month`         | Year, month                    |
| `week`          | Week of year                   |
| `color`         | Color                          |
| `file`          | Local file                     |
| `submit`        | Button to trigger submission   |

#### Example Input Element
```html
<label for="checkbox1">Check me</label>
<input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```

#### Validating Input
Several input types have built-in validation, such as ensuring a field contains a number or valid email. Attributes like `pattern` enforce custom validation. It’s good practice to use JavaScript for additional validation and user feedback.

### 3. Media Elements in HTML

#### External Media
Media elements like `<img>`, `<audio>`, and `<video>` reference external files using the `src` attribute.

##### Example Image
```html
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```

##### Example Audio
```html
<audio controls src="testAudio.mp3"></audio>
```

##### Example Video
```html
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

#### Internal Media
- **SVG (Scalable Vector Graphics)**: Allows for inline vector graphics.
- **Canvas**: A drawing area for creating 2D animations and graphics using JavaScript.

##### Example SVG
```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```

## CSS Flex and Frameworks

### CSS Flexbox
The CSS Flexible Box Layout, commonly known as Flexbox, is a layout model designed to provide a more efficient way to distribute space among items within a container. It is particularly useful for creating responsive web layouts where elements adjust themselves based on screen size and device orientation.

- Flexbox Container: To use Flexbox, a container is set with display: flex. This allows all of its direct child elements to become "flex items," which can be positioned and sized according to the container's properties.
- Flex Direction: You can set the layout direction with the flex-direction property. For example, using row places items side-by-side (horizontally), while column stacks them vertically.
- Space Distribution: Flexbox makes it easy to control space between items and their alignment within the container using properties like justify-content, align-items, and flex-grow.
- Responsive Design: Flexbox is a great tool for building layouts that respond to changes in screen size without the need for complex CSS media queries.

```css
body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100vh;
}

header, footer {
    background-color: #282c34;
    color: white;
    text-align: center;
    padding: 1rem;
}

header {
    flex: 0 80px;
}

footer {
    flex: 0 30px;
}

main {
    flex: 1;
    display: flex;
    flex-direction: row;
}

.controls {
    flex: 1;
    background-color: #dbe9e9;
    padding: 1rem;
}

.content {
    flex: 3;
    background-color: #f5f5f5;
    padding: 1rem;
}

@media (max-width: 600px) {
    main {
        flex-direction: column;
    }
}

@media (max-height: 700px) {
    header, footer {
        display: none;
    }
}
```

### CSS Frameworks
CSS frameworks are collections of pre-defined CSS rules and components that help developers build web applications quickly and consistently. They provide common styling patterns, layouts, and UI components, so you don't have to write everything from scratch.

#### Popular CSS Frameworks

- Bootstrap: A widely used framework with a comprehensive set of components, a responsive grid system, and built-in support for UI elements. It uses a "mobile-first" approach and offers utilities for building responsive layouts.
- Tailwind CSS: A utility-first framework that provides low-level utility classes to build custom designs. Instead of relying on predefined components, Tailwind lets you style elements directly in your HTML, giving you more flexibility and control.
- 

## Midterm Notes
1. What does the <link> element do in HTML?

The <link> element is used to define relationships between the current document and external resources. It is commonly used to link stylesheets (CSS files) to the HTML document.

Example:

html
Copy code
<link rel="stylesheet" href="styles.css">
This links an external CSS file to style the HTML page.

2. What does the <div> tag do in HTML?

The <div> element is a generic container for grouping other HTML elements. It doesn’t apply any specific styling by default but is commonly used as a block-level container that can be styled or manipulated via CSS or JavaScript.

Example:

html
Copy code
<div>
  <p>This is a paragraph inside a div.</p>
</div>
3. What is the difference between the #title and .grid CSS selectors?

#title targets an element with the id "title". IDs are unique, meaning they should only appear once on a page.
.grid targets elements with the class "grid". Multiple elements can share the same class.
Example:

css
Copy code
#title {
  font-size: 24px;
}

.grid {
  display: grid;
}
4. What is the difference between padding and margin in CSS?

Padding: Space inside an element, between the element's content and its border.
Margin: Space outside an element, separating it from adjacent elements.
5. How will the images be displayed using flexbox (given HTML and CSS)?

In a flexbox layout, images (or other elements) are aligned based on flexbox properties such as justify-content, align-items, flex-direction, etc.

For example,

css
Copy code
.container {
  display: flex;
  justify-content: space-around;
}
This would evenly space the images inside a flex container.

6. What does the following padding CSS do?

For example,

css
Copy code
element {
  padding: 10px 20px 30px 40px;
}
This applies padding in the following order: top (10px), right (20px), bottom (30px), and left (40px).

7. What does the following code using arrow function syntax do?

Arrow functions are a shorthand for writing functions in JavaScript. For example:

javascript
Copy code
const add = (a, b) => a + b;
This defines a function that takes two arguments a and b and returns their sum.

8. What does the following code using .map() with an array output?

The .map() method creates a new array by calling a provided function on every element of the array.

Example:

javascript
Copy code
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
9. What does the following code output using getElementById and addEventListener?

javascript
Copy code
document.getElementById('myBtn').addEventListener('click', () => {
  alert('Button clicked');
});
This code sets up an event listener on an element with the ID myBtn. When that element is clicked, it triggers an alert saying "Button clicked".

10. What does the following line of JavaScript do using a # selector?

A #selector is used in JavaScript (via query selectors) to target an element by its ID:

javascript
Copy code
document.querySelector('#elementID');
This selects the element with the specified ID.

11. Which of the following are true about the DOM?

The DOM (Document Object Model) is the programming interface for HTML and XML documents. It represents the document structure as a tree of objects that can be manipulated with JavaScript.

Key principles:

The DOM represents a page structure.
Elements in the DOM can be dynamically modified with JavaScript.
12. By default, what is the CSS display property value of the <span> element?

By default, the display value of a <span> is inline.

13. How would you use CSS to change all <div> elements to have a background color of red?

You can target all <div> elements and apply the style like this:

css
Copy code
div {
  background-color: red;
}
14. How would you display an image with a hyperlink in HTML?

You can wrap an <img> tag inside an <a> tag to create a clickable image:

html
Copy code
<a href="https://example.com">
  <img src="image.jpg" alt="Description">
</a>
15. In the CSS box model, what is the ordering of the box layers starting from the inside?

The order of the CSS box model from the inside out is:

Content
Padding
Border
Margin
16. Given the following HTML, how would you set the text "trouble" to green and leave the "double" text unaffected?

You can target the text using CSS classes or a span element:

html
Copy code
<span class="trouble">trouble</span>double
CSS:

css
Copy code
.trouble {
  color: green;
}
17. What will the following code output when executed using a for loop and console.log?

Without the actual code, the general principle is:

The for loop iterates through values, and console.log outputs them to the console.
18. How would you use JavaScript to select an element with the ID "byu" and change the text color of that element to green?

You can use:

javascript
Copy code
document.getElementById('byu').style.color = 'green';
19. What are the opening HTML tags for the following elements?

Paragraph: <p>
Ordered list: <ol>
Unordered list: <ul>
Second level heading: <h2>
First level heading: <h1>
Third level heading: <h3>
20. How do you declare the document type to be HTML?

At the top of your HTML document, declare:

html
Copy code
<!DOCTYPE html>
21. What is valid JavaScript syntax for if, else, for, while, and switch statements?

Examples:

If/Else:
javascript
Copy code
if (condition) {
  // code
} else {
  // code
}
For:
javascript
Copy code
for (let i = 0; i < 10; i++) {
  // code
}
While:
javascript
Copy code
while (condition) {
  // code
}
Switch:
javascript
Copy code
switch (value) {
  case 1:
    // code
    break;
  default:
    // code
}
22. What is the correct syntax for creating a JavaScript object?

javascript
Copy code
const obj = {
  property1: value1,
  property2: value2,
};
23. Is it possible to add new properties to JavaScript objects?

Yes, you can add properties to an object dynamically:

javascript
Copy code
obj.newProperty = 'newValue';
24. If you want to include JavaScript on an HTML page, which tag do you use?

Use the <script> tag:

html
Copy code
<script src="script.js"></script>
25. How would you set the text "animal" to "crow" while leaving "fish" unaffected using JavaScript?

javascript
Copy code
document.getElementById('animal').textContent = 'crow';
26. Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight data format that is easy to read and write. It’s used to represent data structures, especially in web APIs.

27. What do the following console commands do?

chmod: Changes file permissions.
pwd: Prints the working directory.
cd: Changes the directory.
ls: Lists directory contents.
vim/nano: Text editors.
mkdir: Creates a new directory.
mv: Moves or renames files.
rm: Removes files.
man: Displays manual pages.
ssh: Connects to a remote server via SSH.
ps: Lists running processes.
wget: Downloads files from the web.
sudo: Executes a command with superuser privileges.
28. Which console command creates a remote shell session?

The ssh command is used to create a remote shell session.

29. What is true when the -la parameter is specified for the ls command?

The -la option for ls lists all files, including hidden ones, and provides detailed information about them.

30. For the domain name banana.fruit.bozo.click, which is the top-level domain, subdomain, and root domain?

Top-level domain (TLD): .click
Root domain: bozo.click
Subdomain: banana.fruit.bozo.click
31. Is a web certificate necessary to use HTTPS?

Yes, a valid SSL/TLS certificate is required to use HTTPS.

32. Can a DNS A record point to an IP address or another A record?

A DNS A record points to an IP address, but not to another A record.

33. Port 443, 80, and 22 are reserved for which protocols?

Port 443: HTTPS
Port 80: HTTP
Port 22: SSH
34. What will the following code using Promises output when executed?

Without the actual code, the general principle is:

A promise either resolves or rejects, and the .then() method handles the resolved value, while .catch() handles errors.
