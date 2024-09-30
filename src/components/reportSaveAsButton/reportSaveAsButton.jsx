import React, { useState } from "react";
import ButtonDropDown from "../buttonDropDown/buttonDropDown";

export default function ReportSaveAsButton(props) {
  const { saveAsCSV, saveAsPDF } = props;

  const options = [
    { id: 0, text: "CSV File", onclick: saveAsCSV },
    { id: 1, text: "PDF File", onclick: saveAsPDF },
  ];

  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleOptionSelection = (id) => {
    setSelectedIndex(id);

    options[id].onclick && options[id].onclick();
  };

  return (
    <React.Fragment>
      <ButtonDropDown
        buttonText="Save As"
        options={options}
        handleOptionSelection={handleOptionSelection}
      />
    </React.Fragment>
  );
}
