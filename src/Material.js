import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const radios = ["kelly", "Richard"];
const datas = [
  {
    id: 1,
    name: "john",
    age: 24,
    type: "a1"
  },
  {
    id: 2,
    name: "mike",
    age: 50,
    type: "a1"
  },
  {
    id: 3,
    name: "kelly",
    age: 50,
    type: "a2"
  }
];
const Material = () => {
  const [value, setValue] = useState("female");
  function handleChange(event) {
    setValue(event.target.value);
  }
  const [state, setState] = useState({});

  const handleChangeCheckbox = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <RadioGroup
        aria-label="Gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {radios.map((radio, idx) => (
          <FormControlLabel value={radio} control={<Radio />} label={radio} />
        ))}
      </RadioGroup>

      <FormGroup>
        {datas.map((data, idx) => (
          <FormControlLabel
            control={
              <Checkbox onChange={handleChangeCheckbox(data.name)} value={data.name} />
            }
            label={data.name}
          />
        ))}
      </FormGroup>
      {Object.keys(state).map((v, i) => state[v] && v)}
    </div>
  );
};

export default Material;
