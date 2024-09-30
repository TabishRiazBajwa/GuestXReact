import React from "react";

import {
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";

export default function CallScoreTabTableRow(props) {
  return (
    <tr className=" h-20 ">
      <td className="text-center">
        <Checkbox />
      </td>
      <td>
        <p>{props.children}</p>
      </td>
      <td className="text-center">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            labelPlacement="bottom"
          >
            <FormControlLabel
              value="pass"
              control={<Radio icon={<CheckCircleIcon color="success" />} />}
              label="Pass"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </td>
      <td className="text-center">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={props.data.adjustedScore}
            onChange={(e) => {
              props.updateAdjustedScore(
                props.tab,
                props.criteria,
                e.target.value
              );
            }}
            labelPlacement="bottom"
            row
          >
            <FormControlLabel
              value="pass"
              control={
                <Radio checkedIcon={<CheckCircleIcon color="success" />} />
              }
              label="Pass"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="fail"
              control={
                <Radio checkedIcon={<CancelIcon sx={{ color: "#ff0000" }} />} />
              }
              label="Fail"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="n/a"
              control={
                <Radio checkedIcon={<ErrorIcon sx={{ color: "#606060" }} />} />
              }
              label="N/A"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </td>
      <td className="text-center">7</td>
    </tr>
  );
}
