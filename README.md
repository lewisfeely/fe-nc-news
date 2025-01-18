## Front-End: Northcoders News

This project integrates both front-end and back-end techniques to create a seamless user experience. The majority of the front-end code is written using React, HTML, and CSS, which together allow for dynamic, responsive interactions on the page.

The database for this project is Supabase, and it is hosted on Render. The setup instructions for the back-end are provided in the `README` file. Articles are fetched through the Render URL (specified in the `api.js` file), allowing for real-time access to the data.

On the front-end, articles are organized using route tags in the `App.jsx` file, with navigation achieved through methods like React Router’s `navigate` and `Link` components. These navigation methods allow users to transition between pages, dynamically updating the content displayed based on the current route or path. For example, when a user navigates to a specific article, the content updates to reflect that article’s details, including the ability to view, delete, or add comments. The page content automatically updates to reflect the relevant information for each route, providing an intuitive and responsive experience.

---

## Setup Instructions

1. Clone this Git repository:

   ```bash
   https://github.com/lewisfeely/fe-nc-news.git

   ```

2. Run the command

   ```bash
   npm install
   ```

to install all the dependencies required for the project.

3. Then, run the command

   ```bash
   npm run dev
   ```

   to start the server. This will generate a server port and run the Express server, which will begin listening on that port.

4. Copy and paste the link provided in the terminal under the "local" tag to access the application.

---

## User Stories

Guest users on this news site are able to log in to a pre-made account stored in the Supabase database (the default password for all accounts is "password").

### All users are able to...

1. View articles.
2. Filter articles by votes, title (alphabetically), and vote count.
3. View articles by their topic.
4. Leave a comment on an article if logged in.
5. Delete their own comments.
6. Leave a vote on an article.
7. Interact with the article heading.
8. See a preview of an article.
