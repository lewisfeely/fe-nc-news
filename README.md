## front end Northcoders news

This project integrates both front-end and back-end techniques to create a seamless user experience. The majority of the front-end code is written using React, HTML, and CSS, which together allow for dynamic, responsive interactions on the page.

The database for this projects is Supabase and hosted on Render. The set-up instructions for the back-end are provided in the `README` file. Articles are fetched through the Render URL (specified in the `api.js` file), allowing for real-time access to the data.

On the front-end, articles are organized using route tags in the `App.jsx` file, with navigation achieved through methods like React Router’s `navigate` and Link components. These navigation methods allow users to transition between pages, dynamically updating the content displayed based on the current route or path. For example, when a user navigates to a specific article, the content is updated to reflect that article’s details, including the ability to view, delete, or add comments. The page content automatically updates to reflect the relevant information for each route, providing an intuitive and responsive experience.

## set up steps

<ol>
<li>clone this git repository https://github.com/lewisfeely/fe-nc-news.git
 </li>
<li>run the command `npm i` this will install all the dependecies required for the project</li>
<Li>then simply run the command "npm run dev" this will generate a server port and run the express server so that the server begins listening on that port</li>
<li>copy and paste the link on the local tag in the terminal</li>
</ol>

## user stories

guest users on this news site are able to login to an account thats ready made and stored in the supabase data base (default password is "password" for all accounts)

### all users are able to...

<ol>
<li> users are able to view articles 
<li> users are able to filter articles by votes, title (alphabetically) and quantity of votes.
<li>users are able to view articles by their topic
<li> users are able to leave a comment on an article if theyre logged in
<li> users are able to delete their own comments 
<li> users are able to leave a vote on an article 
<li> users are able to interact with the heading
<li> users are able to see a preview of an article 
</ol>
