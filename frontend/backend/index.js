const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./models/db');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');
const StudentRouter = require('./Routes/StudentRouter');
const CourseRouter = require('./Routes/CourseRouter');
const TeacherRouter = require('./Routes/TeacherRouter');

const app = express();
const PORT = process.env.PORT || 5007;

// Define CORS options
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(bodyParser.json());

// Define routes
app.use('/auth', AuthRouter);
app.use('/student', StudentRouter);
app.use('/course', CourseRouter);
app.use('/teacher', TeacherRouter);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
