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

## React
