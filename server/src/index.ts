import express from 'express';
import cors from 'cors';
import * as path from 'path';

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

app.get('api/get', function (req, res) {
  res.send('GET request to the homepage');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
