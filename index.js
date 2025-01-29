const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const current_date = new Date(new Date()).toISOString();
  res.status(200).json({
    "email": "oluwayemivictor15@gmail.com",
    "current_datetime": current_date,
    "github_url": "https://github.com/amiabl-programr/get-api"
  });
});



app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
