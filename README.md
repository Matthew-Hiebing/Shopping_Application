# Shopping_Application

This project was put together to learn more about user creation, passwords, password validation, using express, and working with user created data.  The shopping application mimicks a typical shopping website like Amazon or eBay but does not allow you to buy anything.  Products can be added, deleted, or updated in the user admin panel once you're logged in.  Pictures are stored as strings but in a production settting, should be stored on a server.  Below is a screenshot from the prouducts page.

![Imgur](https://i.imgur.com/fZgTZeT.png)

A live demo of this app is hosted on Heroku.  Click the link below to try it out.

[https://ski-shoppers.herokuapp.com/](https://ski-shoppers.herokuapp.com/)

## Installation
```bash
npm install express-validator # Provides validators for username, passwords, etc.
npm install cookie-session # Provides cookies for server requests.
npm install express # Provides routing capabilities on website.
npm install multer # Allows you to send multi-part form data (like pictures).
npm install nodemon # Automatically restarts server after changes are made, good for catching erros and seeing server status.
```


## Questions?
Send me a message on GitHub (Matthew-Hiebing) or E-mail me at: Matthew.Hiebing@gmail.com

## License
Copyright 2020 Matthew-Hiebing

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
