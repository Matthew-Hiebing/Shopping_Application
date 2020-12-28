const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const authRouter = require('./routes/admin/auth')
const productsRouter = require('./routes/admin/products')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['dsfdsafdasfdf35kd32']
}))

app.listen(3000, () => {
    console.log('Listening');
});
app.use(authRouter);
app.use(productsRouter);
