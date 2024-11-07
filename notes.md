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


## JavaScript

#### 1. JavaScript Introduction
JavaScript, officially known as ECMAScript, is a versatile, weakly typed programming language foundational to web development. Inspired by languages like C, Java, and Scheme, it runs on all major web browsers and is also widely used for server-side applications. One of JavaScript’s strengths is its interpretive execution, which enhances portability but can lead to runtime errors, such as undefined variables, that are only discovered during execution. Over time, JavaScript has evolved through multiple versions, with each introducing new features. Developers often check compatibility through resources like MDN or CanIUse, as browser support can vary.

#### 2. JavaScript Arrays
JavaScript arrays are dynamic, zero-indexed data structures capable of holding sequences of various data types, from numbers and strings to objects. Arrays can be constructed using the Array constructor or literal notation ([]). Several built-in methods enhance their functionality, including `push` and `pop` for modifying the array's end, `slice` for extracting subarrays, and `sort` for ordering elements. Additional functions like `find` and `values` allow for element retrieval based on conditions and iteration, making arrays flexible and powerful for data handling in JavaScript.

#### 3. JSON (JavaScript Object Notation)
JSON, a data-interchange format created by Douglas Crockford, is simple and highly compatible with JavaScript. Standardized in 2013 and 2017, JSON consists of key-value pairs within an object or array, with values constrained to types like strings, numbers, booleans, and null. Its straightforward syntax and ability to convert seamlessly to and from JavaScript objects have made it a popular format for data storage and communication in web applications.

#### 4. JavaScript Arrow Functions
Arrow functions in JavaScript offer a concise syntax for defining functions, especially useful for writing compact, inline operations. Using the `=>` symbol, they reduce the need for the `function` keyword and simplify return statements, especially when a single expression is involved. However, arrow functions come with limitations: they cannot serve as constructors, nor can they create iterator functions. They also adopt the surrounding scope’s `this` context, a behavior distinct from regular functions.

#### 5. JavaScript Functions
In JavaScript, functions are first-class objects, which means they can be assigned to variables, passed as arguments, and returned by other functions. Defined with the `function` keyword, functions can have parameters and may or may not return a value. Functions that return values execute computations, while those without a return often produce side effects like modifying objects or interacting with external systems. The flexibility of function parameters in JavaScript allows for versatile function applications in complex programming scenarios.

#### 6. JavaScript Strings
Strings in JavaScript represent sequences of characters and are defined by surrounding text in single, double, or backticks. Backticks allow for template literals, where embedded expressions within `${}` are evaluated dynamically. JavaScript strings support Unicode, enabling broad internationalization capabilities. However, building a fully internationalized application involves additional considerations like handling locale-specific formats for dates and numbers.

#### 7. Adding JavaScript to HTML
JavaScript can be added to HTML in two main ways: through `<script>` tags containing inline code or by linking external JavaScript files using the `src` attribute. Inline scripts allow for quick interactivity, while external files promote code reuse and modularity. Event listeners, such as `onclick`, can trigger JavaScript functions directly from HTML elements, enhancing user interaction. Using JavaScript within HTML pages is essential for creating responsive, interactive web experiences.

#### 8. JavaScript Console
The JavaScript `console` object provides developers with powerful debugging tools. With `console.log`, values can be output to the browser’s console, allowing for real-time feedback. Additional features include formatted logging, timers (`console.time` and `console.timeEnd`), and counters (`console.count`), which help analyze execution time and code flow. The `console` object is indispensable for development and debugging within interactive environments like VS Code.

#### 9. JavaScript Objects and Classes
In JavaScript, objects are collections of key-value pairs, where each key is a string or symbol, and values can be any data type, including functions or other objects. JavaScript’s object-oriented capabilities allow for features like constructors, inheritance, and the `this` keyword. Objects can be created with literal notation or using constructors, allowing for dynamic modifications, such as adding properties or methods after creation. JavaScript classes provide a blueprint for objects, encapsulating methods and properties, making it easier to manage and extend complex data structures&#8203;:contentReference[oaicite:0]{index=0}.

#### 10. JavaScript Regular Expressions
Regular expressions (regex) in JavaScript are powerful tools for matching patterns within strings. Defined using the `RegExp` constructor or literal syntax (`/pattern/flags`), they support operations like `match`, `replace`, `search`, and `split` on strings. Regular expressions simplify searching and manipulating text, allowing developers to find, test, and modify content based on specific patterns, making them essential for text processing tasks&#8203;:contentReference[oaicite:1]{index=1}.

#### 11. JavaScript Rest and Spread
The rest and spread operators (`...`) provide flexibility when handling function parameters and objects in JavaScript. The rest operator collects remaining arguments into an array, making it useful for functions expecting variable-length arguments. The spread operator, on the other hand, allows expanding elements from an array or object, enabling tasks like array concatenation or cloning objects, which improves readability and simplifies complex operations&#8203;:contentReference[oaicite:2]{index=2}.

#### 12. JavaScript Exceptions
JavaScript supports exception handling with `try`, `catch`, `throw`, and `finally` blocks, which helps manage errors gracefully. The `try` block contains code that may throw an error, while `catch` handles the error if it occurs. The `finally` block executes code regardless of an error, useful for cleanup actions. Using exceptions allows developers to maintain robust applications by catching and managing errors in a structured way&#8203;:contentReference[oaicite:3]{index=3}.

#### 13. JavaScript Destructuring
Destructuring is a shorthand syntax in JavaScript for extracting specific values from arrays or objects into individual variables. For arrays, values are assigned based on index positions, whereas with objects, properties are assigned based on matching keys. Destructuring enhances readability and reduces code length, making it easier to work with complex data structures by selectively unpacking only the necessary elements&#8203;:contentReference[oaicite:4]{index=4}.

#### 14. JavaScript Scope
JavaScript scope determines the visibility of variables in different parts of code. JavaScript has four main scope types: global, module, function, and block. Variables declared with `var` are function-scoped, often leading to unexpected behavior when used within blocks, while `let` and `const` are block-scoped, making them more predictable. Understanding scope is crucial for effective variable management and avoiding conflicts in larger programs&#8203;:contentReference[oaicite:5]{index=5}.

#### 15. JavaScript Modules
JavaScript modules allow developers to split code into reusable components, improving organization and maintainability. ES6 introduced module syntax, which lets developers export and import functions, objects, or values between files. By isolating functionality, modules prevent scope pollution and enhance collaboration. ES modules are widely supported in modern browsers, marking a standardized approach for JavaScript code organization&#8203;:contentReference[oaicite:6]{index=6}.

#### 16. JavaScript Types and Constructs
JavaScript supports multiple data types, including primitives like `String`, `Number`, `Boolean`, and complex types like `Object` and `Array`. Variables are declared with `let` and `const` (avoiding `var` due to scoping issues). JavaScript’s dynamic typing allows variables to hold any type, but this can lead to runtime errors if types are not managed carefully. Using the correct types and constructs is essential for building efficient and readable JavaScript code&#8203;:contentReference[oaicite:7]{index=7}.

#### 17. Debugging Node.js
Debugging Node.js applications can be effectively managed using tools like Visual Studio Code (VS Code). Since Node.js runs JavaScript outside of the browser, debugging techniques differ from front-end debugging. In VS Code, developers can set breakpoints, inspect variables, and control execution flow by pressing F5 to start debugging. This setup allows you to track and resolve issues within Node.js applications, offering insight into back-end JavaScript execution and enhancing code reliability&#8203;:contentReference[oaicite:0]{index=0}.

#### 18. Document Object Model (DOM)
The Document Object Model (DOM) is a hierarchical representation of an HTML document, structured as a tree of nodes corresponding to elements, attributes, and text. JavaScript can access and manipulate the DOM using the `document` object, allowing dynamic content updates and interactivity. Each HTML element is represented as a node in this structure, making it possible to modify, create, or delete elements programmatically, forming the foundation of interactive web development&#8203;:contentReference[oaicite:1]{index=1}.

#### 19. Local Storage
The `localStorage` API allows JavaScript to store data persistently in the browser, enabling data retention across sessions. With methods like `setItem`, `getItem`, `removeItem`, and `clear`, developers can save and retrieve key-value pairs, ideal for caching and storing user-specific data. This data remains available even when the user navigates away or closes the browser, providing a seamless user experience by retaining data such as settings and preferences&#8203;:contentReference[oaicite:2]{index=2}.

#### 20. JavaScript Promises
Promises in JavaScript provide a way to handle asynchronous operations, allowing the main thread to continue execution while awaiting completion of tasks. Promises can have three states: pending, fulfilled, or rejected. They enable smoother asynchronous coding by defining `.then` and `.catch` handlers for success and error outcomes, respectively. Promises are crucial for managing operations like network requests, where results may not be immediately available&#8203;:contentReference[oaicite:3]{index=3}.

#### 21. JavaScript Async/Await
The `async` and `await` keywords simplify working with promises by allowing asynchronous code to look and behave more like synchronous code. Using `await` pauses function execution until a promise resolves, providing clearer, more readable asynchronous code. This syntax reduces the need for chaining `.then` statements and is particularly useful in functions that handle multiple asynchronous calls sequentially&#8203;:contentReference[oaicite:4]{index=4}.

#### 22. Debugging JavaScript
Debugging JavaScript is a crucial skill for resolving bugs and improving code quality. Common techniques include using `console.log` to track variable values and employing browser developer tools to set breakpoints, inspect elements, and analyze the execution flow. These tools help developers understand and fix issues by providing real-time feedback, essential for troubleshooting both simple and complex issues in JavaScript code&#8203;:contentReference[oaicite:5]{index=5}.

#### 23. Node.js
Node.js is a runtime environment that allows JavaScript to run on the server, outside of a browser. Built on Google’s V8 JavaScript engine, Node.js has transformed JavaScript into a full-stack language, capable of handling server-side tasks. It supports asynchronous programming and is highly efficient for I/O-bound tasks, making it widely used in modern web applications for handling backend logic and APIs&#8203;:contentReference[oaicite:6]{index=6}.

### JavaScript Code Snippets

#### 1. Asynchronous API Call with `async`/`await`, Promises, and Local Storage

```javascript
// Function to fetch user data and cache it in localStorage
async function fetchUserData(userId) {
  const cachedUser = localStorage.getItem(`user_${userId}`);
  if (cachedUser) {
    console.log("Loaded from cache:", JSON.parse(cachedUser));
    return JSON.parse(cachedUser);
  }
  
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch user data");
    
    const userData = await response.json();
    localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
    console.log("Fetched and cached:", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserData(1); // Fetch and cache user data
```
#### 2. Manipulating the DOM with Destructuring, Rest/Spread, and Classes

```javascript
class User {
  constructor({ id, name, email, ...rest }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.otherProps = { ...rest };
  }

  render() {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
      <h2>${this.name}</h2>
      <p>Email: ${this.email}</p>
    `;
    document.body.appendChild(userCard);
  }
}

// Example usage
const user = new User({ id: 1, name: "Jane Doe", email: "jane@example.com", age: 25 });
user.render();
```

#### 3. Handling Errors with try/catch and Async Logic

```javascript
async function getUserWithError(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("User not found");

    const { id, name, email } = await response.json(); // Destructure response
    console.log(`Fetched User - ID: ${id}, Name: ${name}, Email: ${email}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUserWithError(1000); // Example with an invalid ID to trigger the error

```
#### 4. Using Classes, Modules, and the this Context

```javascript
// counter.js (Module export)
export class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
    console.log(`Current count: ${this.count}`);
  }

  reset() {
    this.count = 0;
    console.log("Counter reset.");
  }
}

// main.js (Module import and usage)
import { Counter } from './counter.js';

const counter = new Counter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.reset();      // Output: Counter reset.

```
#### 5. Regular Expressions and console for Debugging
```javascript
const sampleText = `
  Contact us at support@example.com or sales@domain.com. 
  Visit us at https://example.com.
`;

// Regular expression to match email addresses
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/g;

const foundEmails = sampleText.match(emailRegex);
console.log("Extracted emails:", foundEmails); // Logs all matched email addresses

```
## React
