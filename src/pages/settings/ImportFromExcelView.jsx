import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/UI/Button/Button";

const ImportFromExcelView = (props) => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-row justify-between text-[#0F2E60]">
        <div>
          <h1 className="text-2xl font-bold">Import Teams</h1>
          <p className="text-sm mt-1">
            This page allows you to import multiple users in one step
          </p>
        </div>
        <div className="flex flex-row justify-end gap-2 items-start text-[#0F2E60]">
          <p>Back</p>
          <button className="text-[#0F2E60]" onClick={props.goBack}>
            <FontAwesomeIcon icon={faCircleChevronLeft} size="xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">
          Please download the provided template Excel file and insert the user
          data you wish to import. It is important that you do not change the
          format or structure of the file.
        </p>
        <Button color="#888888" size="lg">
          Download Template
        </Button>
      </div>
      <div className="flex flex-col gap-4 pb-9 border-b border-[#707070]">
        <p className="text-sm text-gray-500">
          Once done, upload the file below, and press "Preview". On the next
          step you will be able to review the team and user structure before
          saving.
        </p>
        <h2 className="text-md font-bold text-[#0F2E60]">Excel File</h2>
        <div className="flex flex-row justify-start gap-4 items-end">
          <Button color="#0E2E60">Upload File</Button>
          <span className="text-sm text-[#FF0000]">
            Filename.xlsx appears here after upload
          </span>
        </div>
      </div>

      <Button color="#0E2E60" outline className=" self-end">
        Preview
      </Button>
    </div>
  );
};

export default ImportFromExcelView;
