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


## JAVASCRIPT
