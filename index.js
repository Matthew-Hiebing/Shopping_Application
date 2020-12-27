const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session')
const users = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['dsfdsafdasfdf35kd32']
}))

app.get('/signup', (req, res) => {
    res.send(`
    <div>
      Your id is: ${req.session.userID}
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email: email });
    if (existingUser) {
        return res.send('Email in use')
    }

    if (password !== passwordConfirmation) {
        return res.send('Passwords must match');
    }

    res.send('Account created!!!');

    // Create a user in our user repo to represent this person
    const user = await usersRepo.create({ email: email, password: password});

    // Store the id of that user inside the users cookie
    req.session.userID === user.id; //Added by cookie session.

});

app.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out')
})

app.get('/signin', (req, res) => {
  res.send(`
  <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign In</button>
      </form>
  </div>
  `)
})

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy( { email: email } );

  if (!user) {
    return res.send('Email not found');
  }
  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  )
  if (!validPassword) {
    return res.send ('Invalid password');
  }
  req.session.userID = user.id;

  res.send('You are signed in!!!');
})

app.listen(3000, () => {
    console.log('Listening');
});
