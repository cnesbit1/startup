# Startup Application: BallotBox Exchange

## Elevator Pitch
*Introducing "BallotBox Exchange"—a platform where individual creativity meets community collaboration. BallotBox Exchange empowers users to submit their best ideas, websites, text, and more, while voting on others using various systems like ranked choice, majority rule, and approval voting. Explore how different voting methods influence outcomes and discover which ideas rise to the top based on collective preferences. Whether you're an entrepreneur, a student, or a researcher, BallotBox Exchange provides a dynamic space to experience how the way we vote can shape the future of innovation, while also getting to enjoy that innovation.*

## Application Design
![Login Page](https://github.com/user-attachments/assets/7a288440-a10b-4047-9756-aa45062cc87b)
![Voting Roster Page](https://github.com/user-attachments/assets/1d5ee879-0e87-4697-a6ae-7e6fdc1ee542)
![User Profile/Submission Page](https://github.com/user-attachments/assets/25b3fc0c-5540-466f-9700-9acb26d07693)

## Key Features
- **General Platform Usage**: The website provides a user-friendly interface where individuals can easily submit, browse, and vote on ideas. Upon logging in, users can navigate to the global ranking page to see the top ideas based on different voting systems, or head to the submission page to contribute their own ideas. The site is designed to support multiple voting systems, allowing users to experience ranked choice, majority rule, and approval voting. Users can track their contributions and interact with the community by voting for ideas in real-time.
- **Real-Time Voting Interaction**: Leverages WebSockets to provide real-time updates on voting results and idea rankings as users cast their votes. When a vote is submitted, all users instantly see the updated leaderboard, rankings, or score breakdown based on the active voting system. This creates a dynamic experience where users can watch ideas rise and fall in real-time.
- **Robust Authentication & User Profiles**: Provides secure user login and session management through an authentication system. Users can create personalized profiles where they can track their submitted ideas and voting history. Authentication is essential for protecting user data and ensuring that only verified users can submit ideas or vote.
- **Persistent Data Storage**: Stores all user submissions, votes, and preferences using a secure database. Each user’s voting history and saved submissions are stored persistently, ensuring that their contributions are tracked over time. Additionally, user preferences, such as their favorite voting system or topic categories, are saved to provide a personalized experience when they return.
- **Responsive Design**: Features a responsive and visually appealing UI that encourages user interaction. The design ensures that users can submit ideas, vote, and interact with the platform seamlessly. The application will also include CSS animations to enhance the user experience, such as smooth transitions when an idea moves up or down in rankings, or hover effects on interactive elements.

## Technology Usage
- **HTML**: The structure of the app will include a login page for user authentication, a global ranking page that displays the real-time ranking of ideas, and a submission page where users can submit their ideas, including text or links. HTML will be used to structure these pages with proper headings, forms, links, and navigation elements, ensuring the correct layout and functionality across the app. Hyperlinks will be implemented to navigate between these core sections seamlessly.
- **CSS**: The styling will emphasize clean layouts, good use of whitespace, and an intuitive color scheme for easy readability. It will also include animations for smooth transitions, such as when users submit ideas, cast votes, or when rankings update in real-time.
- **JavaScript**: JavaScript will be used to manage dynamic behaviors across the app. It will handle form validation for idea submissions, ensuring all fields are completed before the idea is sent to the backend. It will also enable real-time updates to the global ranking page by fetching data from the server and updating the page dynamically. JavaScript will also manage the submission of votes and ideas, as well as integrating third-party APIs to enhance ideas with additional media or data.
- **React**: The app is built with React, with reusable components and client-side routing for a smooth single-page experience. React will manage the various views for the login, global ranking, and submission pages, ensuring that these views are componentized and reactive to user interactions. Client-side routing will allow for seamless navigation between pages without reloading, and components will update automatically as users submit ideas or cast votes, providing a smooth and fast user experience across the platform.
- **Web Service**: The backend will feature API endpoints for retrieving ideas, submitting new ideas, and casting votes. These services will allow users to interact with the database, fetching real-time data for the global ranking page and submitting new content for others to view and vote on.
- **Authentication**: A secure authentication system will manage user registration and login. Users will create accounts and securely log in to submit ideas and cast votes. The system will ensure that only registered users can participate, displaying the user’s name once logged in, and securing their session to protect sensitive data and interactions with the app.
- **Database**: All user data, ideas, and votes will be stored in a secure database. User accounts, including login credentials and voting history, will be stored securely, alongside the submitted ideas with relevant metadata, such as timestamps and media links. The database will also store votes from users, allowing the app to calculate rankings based on different voting systems and update the results dynamically as new data is received.
- **WebSocket**: WebSockets will enable real-time interaction across the app, particularly for the global ranking page. As users cast votes or submit new ideas, the app will instantly update the rankings and notify users of changes without needing a page refresh. This will create a dynamic experience where users can see how their votes impact the ranking of ideas in real-time, fostering greater engagement and interactivity.

## HTML Deliverable

All of these requirements have been completed.

- HTML Pages: The application consists of three HTML pages (index.html, roster.html, and user.html) that support user login, voting on submissions, and adding new ideas. The index.html page handles login and signup functionality, roster.html displays a list of ideas with vote counts, and user.html provides a user profile view and idea submission form.
- Proper Use of HTML Tags: Each page is structured using semantic HTML tags such as `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, and more. This organization helps ensure maintenance of the codebase. The `<header>` and `<footer>` tags are used to encapsulate navigation links and page-specific information, while the `<main>` tag is used to contain the core content of each page.
- Links: The index.html page includes a link to the roster.html page after login, while the roster.html page links back to the index.html page for logout and to user.html for accessing user profiles. The user.html page also includes navigation links back to roster.html and index.html.
- Application Text Content: Each voting option is presented as a textual description within a table on the roster.html page. The descriptions highlight the different ideas submitted by users, along with the number of votes each has received. Additional textual content on the login and profile pages ensures clarity for users interacting with the application.
- Third Party Service Call Placeholder: Firebase Authentication has been set up as a placeholder in index.html to handle user authentication in the future. The Firebase SDK scripts are included in the HTML file, and configuration comments indicate where the authentication logic will be integrated. This setup prepares the application for future API calls to authenticate users and manage their sessions securely. 
- Application Images: An image placeholder has been included in index.html. Future updates to image support will be addressed in the CSS deliverable, which will better integrate and position the images within the website’s interface. Additional images will be added and styled as part of this process.
- Login Placeholder: The index.html page includes input fields for username, password, and email, along with a login button, forming a basic user authentication structure. A similar set of input fields is present under the "Sign In" section to allow for new user registration. These fields act as placeholders for functionality that would typically interact with a backend authentication system.
- Database Placeholder: The roster.html page displays voting results and submission details using a table layout, which simulates data that would typically be fetched from a backend database. This setup acts as a placeholder for integrating database connections where voting data and user submissions would be stored and retrieved.
- WebSocket Placeholder: The user.html page includes placeholders for real-time communication, which would be necessary for updating submissions dynamically or synchronizing voting preferences as users interact with the application. This feature would rely on WebSocket technology for live updates.

## CSS Deliverable

All of these requirements have been completed.

- Header, Footer, and Main Content Body: The header and footer are consistently styled with a dark blue background color `(#203864)` and white text, using consistent spacing and alignment. The main content body has a light gray background and is centrally aligned with padding for spacing, and there are red highlights used for section titles and borders to add contrast and emphasis.

- Navigation Elements: Navigation links are styled with white text, padding, and hover effects that change the background to white and the text to dark blue. The initial `index.html` page does not have these links to simulate proper website authentification protocol.

- Responsive Design: Responsive styling has been implemented using media queries in the `responsive.css` file. Elements such as logos, navigation links, and layout configurations adjust or disappear based on screen size. Text sizes and padding are adjusted to ensure the design remains visually appealing and functional on all devices.

- Application Elements: Forms and buttons use a consistent red color scheme for primary actions with hover states that darken the color. Tables are styled with alternating row colors for readability, and they include hover effects to highlight rows on interaction. Borders and shadows provide depth and separation for different sections.

- Application Text Content: Headings and paragraphs are styled with dark blue text `(#203864)`, and links have a distinctive gold color `(#ffd700)`. Strong tags are highlighted in red `(#e63946)` to emphasize important information. The text in the header and footer uses white to contrast against the dark blue background.

- Application Images: A voting icon image has been added to the header twice on each page of the website. These images are positioned in the header and have defined sizes to prevent overflow.

## CSS Deliverable

All of these requirements have been completed.

- Bundled React Using React: 

- Added All React Components: 

- React Router: 

- React Hooks: 
