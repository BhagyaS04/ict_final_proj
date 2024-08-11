const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");

const BlogModel = require('./model');

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API Code
app.get('/get', async (req, res) => {
  try {
    const emp = await BlogModel.find();
    console.log(emp);
    res.send(emp);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'An error occurred while fetching employees' });
  }
});

//del emp
app.delete('/empremoval/:id', async (req, res) => {
  try {
    const result = await BlogModel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.send({ message: "Deleted successfully", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting employee" });
  }
});

// update emp details
app.put('/emp-updation/:id', async (req, res) => {
  try {
    const data = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.send({ message: "Updated successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating employee" });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
