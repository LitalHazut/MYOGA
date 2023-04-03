import express from 'express';
import cors from 'cors';
import * as path from 'path';
import AccountsService from './accountService';

const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());

if (process.env.NONE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: ['*'],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const accountsService = new AccountsService();

app.get('/api/get', async (req, res) => {
  res.send({ accounts: await accountsService.getAllAccounts() });
});

app.post('/api/post', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  res.send({ accounts: await accountsService.createAccount(name, email, password) });

});
app.post('/api/postemail', async (req, res) => {
  const email = req.body.email;
  res.send({ accounts: await accountsService.checkIfEmailExist(email) });

});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

