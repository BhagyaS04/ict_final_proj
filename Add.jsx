
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: "",
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in", inputs);
  };
  const addData = () => {
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        console.log(res);
        // Redirect to the homepage or another page after successful addition
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        // Handle errors here, for example, by displaying an error message
      });
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Employee Name"
            onChange={inputHandler}
            name="EmpName"
            value={inputs.EmpName} // Changed to inputs.EmpName
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="Designation"
            onChange={inputHandler}
            name="designation"
            value={inputs.designation}
            multiline // Set to true
            rows={4} // Set the number of rows
          />
          <TextField
            variant="outlined"
            placeholder="Employee Id"
            onChange={inputHandler}
            name="empId"
            value={inputs.empId}
          />
          <TextField
            variant="outlined"
            placeholder="Photo (paste any link from the browser)"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
          />
          <Button variant="contained" color="secondary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;

