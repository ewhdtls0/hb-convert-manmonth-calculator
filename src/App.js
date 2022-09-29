/* eslint-disable no-unused-vars */
import { Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./App.css";

/** The Man / Month Calcultor */
function App() {

  const [hb, setHb] = useState(0);

  const handleOnchange = (e) => {

    const {value} = e.target;
    const numberValue = value.replace(/[^0-9]/g, '');
    setHb(numberValue);

  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      handleOnClick(e);
    }
  }

  const handleOnfocus = (e) => {
    e.target.select();

  }

  const handleOnClick = (e) => {
    // 1맨먼스에 20호밥
    let 분모 = 20;

    let 몇맨먼스 = Math.round((hb / 분모)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    alert("약 " + 몇맨먼스 + " 맨먼스 동안 먹을 수 있습니다.");
  }

  return (
    <Container className="container">
      <Grid container xs={12}>

      <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="hb-select-label">HB</InputLabel>
            <Input className="select-form"
              labelId="hb-select-label"
              id="select-hb"
              value={hb}
              label="HB"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleOnClick}>Convert To HB</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
