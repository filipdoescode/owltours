<h1 align="center">
  <br>
  <a href="https://owltours.herokuapp.com/"><img src="https://github.com/theowlf/owltours/blob/master/public/img/logo-green-round.png" alt="Owltours" width="100"></a>
  <br>
  Owltours
  <br>
</h1>

<h4 align="center">Tour booking website built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#api-usage">API Guide</a> •
  <a href="#implemented-on-the-website">Features</a> •
  <a href="#demonstration">Preview</a> •
  <a href="#how-to-use">Use guide</a> •
  <a href="#build-with">Build With</a> •
  <a href="#to-do">To-do</a> •
  <a href="#installation">Installation</a> • 
  <a href="#future-updates">Future Updates</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Deployed Version
Live demo 🟢 : https://owltours.herokuapp.com/


## API Usage
Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add: 
  ```
  - {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
  - {{password}} with your user password as value.
  ```

<b>[Check Owltours API Documentation](https://documenter.getpostman.com/view/13472875/TVsxBmbF) for more info. </b>


## Implemented on the website

* Authentication and Authorization (Used JWT)
  - Login and Logout
* Tour
  - View all tours, check tours map, check users reviews and rating, manage bookings
* User profile
  - Update user name,e-mail and password
* Credit card Payment using Stripe
* File Upload for user profile picture



## Demonstration
#### Home Page :
![owltours-home-page](https://media.giphy.com/media/VXN2dyU4pkdVTWoDZ9/giphy.gif)

#### Tour Details :
![owltours-tour-page](https://media.giphy.com/media/KlpxkMYnovIgVjHDHb/giphy.gif)

#### Log in and Log out Process :
![owltours-login-page](https://media.giphy.com/media/wsWzZ1fC1DSWDPMNV2/giphy.gif)

#### Admin and User Dashboard :
![owltours-me-page](https://media.giphy.com/media/1fUSWSY9KwK42jxfKd/giphy.gif)

#### Booking a tour with Stripe :
![owltours-stripe-page](https://media.giphy.com/media/PymrDkiuOe8ulAYNFd/giphy.gif)




## How To Use

### Book a tour
* Login to the site with the following credentials
  ```
  username: laura@example.com
  password: test1234
  ```
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page
* Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222
  ```
* Finished!



### Manage your booking

* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

* You can update your own username, profile photo, email and password.


## Build With

* [NodeJS](https://nodejs.org/en/) - JS runtime environment
* [Express](http://expressjs.com/) - The web framework used
* [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
* [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
* [JSON Web Token](https://jwt.io/) - Security token
* [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
* [Stripe](https://stripe.com/) - Online payment API
* [Postman](https://www.getpostman.com/) - API testing
* [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
* [Heroku](https://www.heroku.com/) - Cloud platform



## To-do
* Advanced authentication features
  - Signup, confirm user email, login with refresh token, two-factor authentication

* Review and rating
  - Allow user to add a review directly at the website after they have taken a tour
* Booking
  - Prevent duplicate bookings after user has booked that exact tour, implement favourite tours

* And More ! There's always room for improvement!


## Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start (for production)
$ npm run debug (for debug)
Setting up ESLint and Prettier in VS Code 👇

$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```




## Future Updates

* Enable PWA
* Improve overall UX/UI and fix bugs
* Add mobile responsivnes 
* Featured Tours
* Recently Viewed Tours
* and so much more ...

## Acknowledgement

* This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2019](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
