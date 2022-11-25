
<h1>WineApp<h1>
<br>
<hr>
<h2>Description</h2>
“Its Wine By Me” is a marketplace that provides the user with a platform to find wine, add them to a wish list and follow the link to a buying page, you can also filter by type and region.  
<hr>

<h2>Deployment link</h2>
https://wineappsei66.herokuapp.com/

<hr>


<h2>Getting Started/Code Installation</h2>
Email: tester1@hotmail.com
Password: Tester1


<hr>


<h2>Timeframe & Working Team </h2>

We had only 6 days to complete this project working in a team of three. For this project I worked alongside Helene van Besouw and Rob Sesemann and my role was team leader.

<hr>

<h2>Technologies Used</h2>

<h3>Front End</h3>

<ul>
<li>React</li>
<li>CSS</li>
<li>HTML</li>
<li>JavaScript</li>
</ul>

<h3>Back End</h3>
<ul>
<li>Express</li>
<li>MongoDB/Mongoose</li>
<li>HTML</li>
<li>JavaScript</li>
</ul>

<h3>Developer Tools</h3>
<ul>
<li>AJAX</li>
<li>JWT(JSON Web Token)</li>
<li>Spoonacular API</li>
<li>Node<li>
<li>Postman</li>
<li>ProCreate</li>
</ul>
<hr>

<h2>Brief</h2>
The brief outlined the requirements stating that and we must make a MERN stack application utilising MongoDB/Mongoose, Express, React and Node as well as having a well styled interactive frontend. Furthermore the application needs to communicate with the Express backend via AJAX as well as using token based authentication.
<hr>
<h2>Planning</h2>

Having previously researched, fun and unique APIs that I could utilise in side projects I was aware of one called Spoonacular; this API is predominantly used for food planning and recipes but it does have a recommended wine pairing feature. During our first meeting I introduced the idea of creating a wine application where customers could create accounts and save wine playlists for events.
We started off the planning stage by brain storming through ideas then moving onto early wireframes and ERD.


<img  src="/photos/11.png" width="100%"/>

This diagram created in Figma shows the relationship in the database as well how we would be accessing the information in React. As shown above, one user can have many WineList and many WineList can have many Wines; giving us visual diagrams on how to design and build the application.


<img  src="/photos/22.png" width="100%"/>

<hr>
<h2>Wireframe</h2>
This was our first wireframe and it outlined the design principle we wanted to follow as well as providing us with a clear idea on how we would need to implicate React to achieve our desired look. 

As this was our first application in React we decided from the off to work on that aspect as a team, in this case we could all learn and help each other's code, I would then spend the evening styling the application as that's my strongest skill. 




<hr>


<h2>Build/Code Process</h2>

<img  src="/photos/33.png" width="100%"/>

This code block was added first. Once we decided on our idea we needed to find an API that would give us the information that we required. After testing a couple of different options using Postman we settled on the Spoonacular, the information came back to use to the form below:

<img  src="/photos/44.png" width="100%"/>

We came across an issue when building our index page, we could not access and display a full list of the wine available. However, this led us down a better path, as we found that if we map through a list of our chosen wine types we could then take the user to a new index page and just display all the wines under that type.


This is a small snippet of the Wine Classification Data shows how the API would find the data for that wine type then assign it a type which we could then render. 

<img  src="/photos/55.png" width="100%"/>


Below is the mapping function that goes through the data from the API then renders the Wine Card as well as providing the Link tag to bring up the full Index of the wine category. I have designed using Procreate four image options that get assigned to the wine categories, these images are of a red, white, rose or champagne bottle, the first if statement reads; if the type of the wine is equal to red then assign the className as Box, back has the background image of a red wine bottle. 

<img  src="/photos/66.png" width="100%"/>

Our favourite wine schema is below, as the database has a nested object of user, this assigns the users id to the create wine list as well and stores the Wine Id from Spoonacular. 

<img  src="/photos/77.png" width="100%"/>

The image below demonstrates how the new favourite wine is created, it gets the user id from the form then saves the id and pushes the favourite wine through to the user lists.


<img  src="/photos/88.png" width="100%"/>

<h3>Style </h3>
Having decided on our idea I created a rough wireframe, this gave me a base to which I could design a theme for the site, because I was team leader and building the site I decided that a simplistic and minimalist theme would look the sharpest and cleanest given our short time frame. We utilised Bootstrap for the wineIndex page as well as incorporating dropdown functionality in our <nav>. I used ProCreate to design and build all wine bottle logos and kept the same colour pallet throughout to ensure style consistency. 

<hr>


<h2>Challenges</h2>



A challenging part of code we had to write was the filter function for the wine categories, even though I look back and can clearly see the path at the time it did stump me as this was the first filter function that I have added to a site. When I first built this functionality into the application it was very undry, as instead of writing a function that targets the className I built two other wineClassificationData.js with red a white wines along with a red and white wineCard.js. 

<img  src="/photos/99.png" width="100%"/>
This filter occurs when one of the images above is clicked, then an event is triggered, which sets a variable called “type” And after runs an arrow function to filter the wines that are equal to the chosen type. 

<hr>
<h2>Wins</h2>


I believe that there are 3 main wins that I have taken away from this project. Firstly, how much I enjoyed leading this fantastic team, from the start I suggested a path to go down and all of us working as a team and an application we all feel proud of. Secondly, this was my first application using React and by the end I found myself understanding the principles of the library.  And finally, the third is the design and the functionality of the application, having created a classic and warm user experience with a clear aesthetic vision.


<hr>

<h2>Key Learnings/Takeaways</h2>


There are a number of key learnings that I have taken away from this project, this was my first application that worked using a separate front and back end using AJAX. This was also the first time I have implemented JWT authorization and used the React Library to build the site. And while I found aspects of the project challenging, one of the most important takeaways is how to pass down props, how to set states using useEffect for authorization and understanding the basic React processes. 
