const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${PORT}`));