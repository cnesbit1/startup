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
- **External API Integration**: Integrates with third-party APIs to allow users to enhance their idea submissions with additional media or information. For example, users could embed videos using the YouTube API, link to websites, or fetch live data via the Twitter API to support or elaborate on their ideas. This makes the submissions more interactive and media-rich.
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

➡️ The following is an example of the required information for the Startup HTML deliverable

For this deliverable I built out the structure of my application using HTML.

 HTML pages - Two HTML page that represent the ability to login and vote.
 Links - The login page automatically links to the voter page. The voter page contains links for every voting choice.
 Text - Each of the voting choices is represented by a textual description.
 Images - I couldn't figure out how to include an image and so I didn't do this. 😔
 DB/Login - Input box and submit button for login. The voting choices represent data pulled from the database.
 WebSocket - The count of voting results represent the tally of realtime votes.
