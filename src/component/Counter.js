import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/CounterSlice";
import { Box, Typography } from "@mui/material";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: "100vw",
        height:'100vh',
        bgcolor:'#EEEEEE',
        pt:'150px'
      }}
    >
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 600,
        }}
        color="text.secondary"
        gutterBottom
      >
        Counter App
      </Typography>

      <Typography
        sx={{
          fontSize: 60,
        }}
      >
        {counter}
      </Typography>

      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(increment())}
        sx={{ mr: "10px" }}
      >
        Increment
      </Button>

      <Button
        variant="contained"
        onClick={() => dispatch(reset())}
        sx={{ mr: "10px" }}
      >
        Reset
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;
