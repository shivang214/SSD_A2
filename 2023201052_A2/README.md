## Question 1:

Applied the required stylings to get the desired webpage and kept all the links intact to the page.

1. Made the about page and the other weblinks of the nav bar are the same as provided in the documentation of the question.


## Question 2:

To generate the token:
```
https://accounts.spotify.com/authorize?client_id="give id" &redirect_uri=http://localhost:3000&response_type=token
```
**By just replacing the client_id we can login to spotify account and it will generate a token as a response on local host:3000**


Used the token generation method which has the validity of 1 hour (3600 secs) due to the security purposes and needs to be regenerated after every 1hr of interval.


1. The Client ID and the Client secret key is used to generate the tkoen which is then used to authenticate the login process and access the spotify application.


2. The webpage fetches the spotify api which shows the **icons** of the **categories** of the songs present in spotify.


3. The icons of different categories include hindi,punjabi,telgu,tamil etc.


4. Used the Axios library to GET the data from the API.


## Question 3:

To start the frontEnd:
```
npm i

npm start
```


To start the BackEnd:
```
npm i

npx nodemon index.js
```


The front folder includes the frontend part of the project  and the backend folder includes the backend part.


1. FrontEnd has the **index.js**,**register page**,**login page** and the **chat area** code which thus linked to the backend for the connecting to the database for fetching the data. 

2. BackEnd is linked using the mongoose to the MongoDB server which holds the login,registeration details and the question answere for the developed application.

3. In the Chat Area added the toggle button to toggle between light and dark mode.




