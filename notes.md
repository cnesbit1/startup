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

#### 1. React Hooks
React hooks allow functional components in React to leverage features previously only accessible to class components, such as state management and lifecycle methods. With hooks, functions like `useState` and `useEffect` are used to manage state and perform side effects in a React component, making functional components the preferred approach for building React applications. Hooks also enable cleaner, modular code by reducing the reliance on complex class components&#8203;:contentReference[oaicite:0]{index=0}.

#### 2. Reactivity in React
Reactivity is the ability of a UI to update in response to changes in data or user input. In React, reactivity is managed through props, state, and the `render` function. When a component’s state or props change, React detects this and re-renders the component, ensuring that the interface reflects the latest data. React achieves this by tracking dependencies and selectively re-rendering only the components that need updating, enhancing performance and user experience&#8203;:contentReference[oaicite:1]{index=1}.

#### 3. React Router
React Router is essential for building single-page applications (SPAs), where users navigate through different views within a single HTML page. It manages routing by controlling which components render based on the URL path, simulating the effect of navigating between different pages. The `BrowserRouter`, `Routes`, `Route`, and `Link` components from `react-router-dom` v6 provide a straightforward approach to defining routes and links, giving React applications a dynamic, multi-page feel without actual page reloads&#8203;:contentReference[oaicite:2]{index=2}.

#### 4. Vite
Vite is a modern frontend build tool that provides a fast and efficient development environment for JavaScript frameworks like React. It simplifies project setup by bundling, transpiling, and minifying code and offering support for JSX, TypeScript, and CSS pre-processing out of the box. By running a development server and hot-reloading changes instantly, Vite enables developers to quickly iterate on their applications, making it an ideal toolchain for React projects&#8203;:contentReference[oaicite:3]{index=3}.

#### 5. Toolchains
A toolchain is a set of tools used to automate various aspects of development, such as code formatting, testing, transpiling, and deployment. In a React project, toolchains typically include tools like GitHub for version control, Vite for development, ESBuild for bundling, and PostCSS for CSS processing. Each component in the toolchain improves workflow by automating repetitive tasks, ensuring consistent code quality, and streamlining deployment to production environments&#8203;:contentReference[oaicite:4]{index=4}.

#### 6. React Components
React components are the building blocks of a React application, representing individual pieces of the user interface. Each component encapsulates its structure, behavior, and presentation logic, enabling code reuse and modularity. Components can be functional or class-based, although functional components, often written with hooks, are now the preferred approach. Components return JSX, which is rendered into HTML by React, allowing dynamic UI updates based on state and props&#8203;:contentReference[oaicite:5]{index=5}.

#### 7. React
React is a popular JavaScript library for building user interfaces, especially SPAs. Created by Facebook, React focuses on creating interactive UIs by using components that respond to changes in data. React’s key feature is its “reactive” approach, where components update automatically in response to changes in state or props. This, combined with a virtual DOM that optimizes updates, makes React an efficient and flexible choice for web application development&#8203;:contentReference[oaicite:6]{index=6}.

#### 8. Web Frameworks
Web frameworks are collections of tools and libraries that simplify the development of complex web applications. Frameworks like React, Vue, and Angular provide structure and pre-built functionalities, enabling developers to build scalable, maintainable applications. Modern web frameworks often support SPAs, reactivity, and modularized code, allowing developers to focus on creating interactive user experiences. Many frameworks also support hybrid file formats, such as JSX, which combines JavaScript and HTML, further streamlining development&#8203;:contentReference[oaicite:7]{index=7}.

#### Example Code
```javascript
// Import React, React Router, and hooks
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// App Component - Main wrapper for routing
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

// Home Component - Static page
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

// Profile Component - Demonstrates reactivity and state management
function Profile() {
  const [user, setUser] = useState({ name: "React Learner", age: 20 });
  const [color, setColor] = useState('#3498db');

  // Example of reactivity: dynamically update user information
  useEffect(() => {
    console.log("User profile loaded:", user);
  }, [user]);

  return (
    <div style={{ color }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
      <button onClick={() => setColor(color === '#3498db' ? '#e74c3c' : '#3498db')}>
        Toggle Color
      </button>
    </div>
  );
}

// Settings Component - Simulates async data loading with hooks
function Settings() {
  const [data, setData] = useState(null);

  // Fetch data asynchronously (simulated)
  useEffect(() => {
    async function fetchData() {
      // Simulated fetch request
      const mockData = { theme: "dark", notifications: true };
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulated delay
      setData(mockData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Settings</h2>
      {data ? (
        <div>
          <p>Theme: {data.theme}</p>
          <p>Notifications: {data.notifications ? "On" : "Off"}</p>
        </div>
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
}

export default App;
```

## HTTP Startup

#### 1. HTTP
HTTP, or Hypertext Transfer Protocol, is the method that enables communication between a web client (like a browser) and a server. A client sends an HTTP request, and the server responds with an HTTP response, transferring data across the web. The structure of an HTTP request includes elements such as the verb (like GET or POST), path, parameters, and headers, all of which define the type of data requested and how it’s transmitted.

#### 2. Ports
Ports serve as dedicated pathways on a server for handling different types of network requests. Port 80 is commonly used for HTTP (unsecure), while port 443 is for HTTPS (secure). Web servers often use these ports to route traffic securely or redirect unsecure requests. Additionally, a server can run various services on other ports (like 3000 or 4000) to efficiently manage and distribute incoming requests to the appropriate services.

#### 3. URL
A URL, or Uniform Resource Locator, is the unique address that specifies the location of a web resource, such as a webpage or image. A URL includes elements like the scheme (typically HTTP or HTTPS), domain name, optional port, path to the resource, query parameters for filtering data, and an anchor for specific sections. Each part plays a role in routing the browser to the correct resource on the web.

#### 4. Web Services Introduction
Web services enable web applications to interact with external resources, adding dynamic functionality. For example, a web page might use JavaScript to fetch data from an external source over HTTPS and display it for the user. This ability to call external services allows applications to incorporate real-time data and perform operations that extend beyond the local server environment.

#### 5. Domain Names
Domain names are human-readable identifiers that link to IP addresses, making it easier for users to access websites without memorizing numeric addresses. A domain is structured with a root domain, top-level domain (like .com or .edu), and optional subdomains. Managed by domain name registries and overseen by ICANN, this structured system allows for scalable, reliable access to resources across the web.

#### 6. Web Servers
Web servers are computers that host websites and respond to HTTP requests from clients. Historically, web servers were monolithic systems serving static HTML, but they have evolved to support dynamic content and complex application services. Today, many programming languages have libraries that simplify creating and managing web services, allowing servers to serve content dynamically based on user interactions.

#### 7. Internet
The internet is a vast, interconnected network that enables devices worldwide to communicate. Every device connected to the internet has an IP address, which serves as its unique identifier. Domain names act as user-friendly aliases for IP addresses, simplifying navigation. The internet’s underlying structure of interconnected networks and IP addresses enables web applications to access resources and communicate globally.

#### 8. Fetch
The Fetch API is the modern method for making HTTP requests in JavaScript. Using promises, Fetch allows for easy data retrieval and handling, enabling applications to fetch and display data from external sources asynchronously. Fetch can be configured for different HTTP methods, such as GET and POST, making it versatile for interacting with RESTful APIs and other web services​.

#### 9. Node Web Service
With Node.js, developers can create basic web services that listen on specified ports, accept HTTP requests, and send responses. By using Node's built-in HTTP module, it’s possible to set up a simple server that responds with HTML or JSON content. This foundation enables the creation of more complex applications by layering additional functionality on top of the base service​.

#### 10. Express
Express is a minimalistic Node.js framework that enhances web server capabilities by adding tools for handling routes, parsing JSON, managing HTTP requests and responses, and using middleware. Express simplifies developing robust, scalable web services by allowing developers to easily set up and handle HTTP routes and use reusable functions, making it an ideal choice for building production-level applications​.

#### 11. SOP and CORS
The Same-Origin Policy (SOP) is a security measure that restricts JavaScript code from making requests to a different domain than the one serving the web page, preventing unauthorized access to sensitive data. Cross-Origin Resource Sharing (CORS) allows servers to selectively permit cross-origin requests by specifying allowable domains in the response headers. This approach secures data while enabling authorized interactions across domains, essential for modern web applications​.

#### Example Code

##### Backend Express
```javascript
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Simple quotes array
const quotes = [
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { author: "Isaac Newton", quote: "If I have seen further, it is by standing on the shoulders of giants." },
  { author: "Marie Curie", quote: "One never notices what has been done; one can only see what remains to be done." },
];

// Endpoint to get a random quote
app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

##### Frontend Fetch
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Quote Example</title>
</head>
<body>
  <h1>Inspirational Quote</h1>
  <button id="get-quote">Get Quote</button>
  <p id="quote-display"></p>
  <p id="author-display"></p>

  <script>
    document.getElementById('get-quote').addEventListener('click', () => {
      fetch('http://localhost:3000/api/quote') // Request to Express server
        .then(response => response.json())      // Parse JSON from response
        .then(data => {
          // Display the quote and author in HTML
          document.getElementById('quote-display').innerText = `"${data.quote}"`;
          document.getElementById('author-display').innerText = `— ${data.author}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
    });
  </script>
</body>
</html>
```


## MongoDB Login Logic

#### 1. Connecting and Interfacing with MongoDB Atlas
MongoDB Atlas serves as a powerful cloud-based database solution that simplifies the integration of database services in web applications. By creating a cluster on Atlas, developers gain access to a managed, scalable environment for storing and retrieving application data. The database connection involves using the mongodb Node.js driver, which facilitates seamless communication between the application and the database. Credentials for the connection are securely managed using a dbConfig.json file, ensuring sensitive information remains protected. Developers can define specific endpoints and perform operations like querying collections, inserting documents, and managing user data from within the web service.

#### Example Code

##### Frontend Fetch
```javascript
const { MongoClient } = require('mongodb');

// MongoDB Atlas credentials
const dbConfig = {
  userName: 'yourUsername',
  password: 'yourPassword',
  hostname: 'yourCluster.mongodb.net',
};

const url = `mongodb+srv://${dbConfig.userName}:${dbConfig.password}@${dbConfig.hostname}`;
const client = new MongoClient(url);

async function connectDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    const collection = client.db('appData').collection('users');

    // Example operation: Insert a user document
    await collection.insertOne({ name: 'John Doe', score: 100 });
    console.log('User added to the database');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    client.close();
  }
}

connectDatabase();
```
