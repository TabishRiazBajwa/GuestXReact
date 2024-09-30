import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faEllipsisV,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import Badge from "../../components/UI/Badge/Badge";
import Avatar from "../../components/UI/Avatar/Avatar";
import ImportFromExcelView from "./ImportFromExcelView";
import FullScreenPopup from "./kpiEdit";
import FullScreenPopupAdd from "./kpiAdd";
import { BASE_URL } from "../../store/services/URL";
import withAPIKeys from "../../store/services/service";
import { Table, Space, Spin, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;

function AccessManagement(props) {
  const { locations, setLocations } = props;

  const [tableData, setTableData] = useState([]);
  const user = localStorage.getItem("user");
  const [loading, setLoading] = useState(false);
  console.log("tableData", tableData);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL + "auth/get_kpis", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify({
          email: JSON.parse(user).email
        })
      });

      // Check if the response is successful (status code 200)
      if (response.ok) {
        const data = await response.json(); // Extract JSON data from the response
        setLoading(false);

        console.log("data for kpi", data.data);
        setTableData(data.data);
        // if (data) {
        // } else {
        //   setTableData([]);
        // }
      } else {
        // console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      setLoading(false);
      // console.error("An error occurred while fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [openPopupId, setOpenPopupId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [showExcelView, setShowExcelView] = useState(false);
  const [editData, setEditData] = useState(null); // State to hold data for editing
  const [updatedUser, setUpdatesUser] = useState();
  const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown
  useEffect(() => {
    if (updatedUser) {
      // If updatedUser is not null
      setTableData((prevTableData) =>
        prevTableData.map(
          (item) => (item.id === updatedUser.id ? updatedUser : item) // Update the corresponding record
        )
      );
    }
  }, [updatedUser]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Add event listener to document for clicks outside the dropdown
    return () => {
      document.removeEventListener("click", handleClickOutside); // Remove event listener on component unmount
    };
  }, []);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Close dropdown if clicked outside of it
      setShowDropdown(false);
    }
  };
  const [dropOpen, setDropOpen] = useState(false);

  const handleIconClick = (record) => {
    setDropOpen(true);

    setEditData(record); // Set the data to edit
    setOpenPopupId(record.id);
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleClosePopup = () => {
    setDropOpen(true);

    setOpenPopupId(null);
    setShowDropdown(false); // Close dropdown when popup is closed
  };

  const toggleExcelView = () => {
    setShowExcelView((prevShowExcelView) => !prevShowExcelView);
  };

  const openPopup = () => {
    setDropOpen(false);

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowDropdown(false); // Close dropdown when popup is closed
  };

  const closePopupAdd = () => {
    setShowPopupAdd(false);
    setShowDropdown(false); // Close dropdown when popup is closed
  };

  const columns = [
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
      // Filter logic for Phone column
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Division"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<FontAwesomeIcon icon={faPlus} className="mr-2" />}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()}>Reset</Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => record.phone_number.includes(value),
      filterIcon: (filtered) => (
        <FontAwesomeIcon icon={faEllipsisV} className="text-[#888888]" />
      )
    },
    {
      title: "KPI",
      dataIndex: "kpi",
      key: "kpi",
      // Filter logic for Phone column
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Division"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<FontAwesomeIcon icon={faPlus} className="mr-2" />}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()}>Reset</Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => record.phone_number.includes(value),
      filterIcon: (filtered) => (
        <FontAwesomeIcon icon={faEllipsisV} className="text-[#888888]" />
      )
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
      // Filter logic for Phone column
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Division"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<FontAwesomeIcon icon={faPlus} className="mr-2" />}
            >
              Search
            </Button>
            <Button onClick={() => clearFilters()}>Reset</Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => record.phone_number.includes(value),
      filterIcon: (filtered) => (
        <FontAwesomeIcon icon={faEllipsisV} className="text-[#888888]" />
      )
    },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
      // Filter logic for Role column
      // filterDropdown: ({
      //   setSelectedKeys,
      //   selectedKeys,
      //   confirm,
      //   clearFilters
      // }) => (
      //   <div style={{ padding: 8 }}>
      //     <Select
      //       placeholder="Select goal"
      //       value={selectedKeys[0]}
      //       onChange={(value) => setSelectedKeys(value ? [value] : [])}
      //       onPressEnter={() => confirm()}
      //       style={{ width: 188, marginBottom: 8, display: "block" }}
      //     >
      //       <Option value="Admin">Admin</Option>
      //       <Option value="User">User</Option>
      //       {/* Add more role options as needed */}
      //     </Select>
      //     <Space>
      //       <Button
      //         type="primary"
      //         onClick={() => confirm()}
      //         icon={<FontAwesomeIcon icon={faPlus} className="mr-2" />}
      //       >
      //         Filter
      //       </Button>
      //       <Button onClick={() => clearFilters()}>Reset</Button>
      //     </Space>
      //   </div>
      // ),
      onFilter: (value, record) => record.access_level.includes(value),
      filterIcon: (filtered) => (
        <FontAwesomeIcon icon={faEllipsisV} className="text-[#888888]" />
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Badge
          color={
            text === "completed"
              ? "primary"
              : text === "pending"
              ? "secondary"
              : text === "rejected"
              ? "danger"
              : "rejected"
          }
        >
          {text}
        </Badge>
      ),
      // Filter logic for Status column
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <div style={{ padding: 8 }}>
          <Select
            placeholder="Select Status"
            value={selectedKeys[0]}
            onChange={(value) => setSelectedKeys(value ? [value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          >
            <Option value="Active">Active</Option>
            <Option value="Pending">Pending</Option>
            <Option value="completed">Completed</Option>
            <Option value="Rejected">Rejected</Option>
            {/* Add more status options as needed */}
          </Select>
          <Space>
            <Button
              type="primary"
              onClick={() => confirm()}
              icon={<FontAwesomeIcon icon={faPlus} className="mr-2" />}
            >
              Filter
            </Button>
            <Button onClick={() => clearFilters()}>Reset</Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => record.status.includes(value),
      filterIcon: (filtered) => (
        <FontAwesomeIcon icon={faEllipsisV} className="text-[#888888]" />
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            className="text-[#888888] mr-4 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="text-[#888888] cursor-pointer"
            size="lg"
            onClick={() => handleIconClick(record)} // Pass the record data to the function
          />
          {openPopupId === record.id && dropOpen && (
            <div
              className="absolute top-0 right-14 mt-8 bg-white border border-gray-100 p-2 rounded-md z-50 shadow-lg flex flex-col gap-1"
              onBlur={handleClosePopup}
              tabIndex="0"
            >
              {JSON.parse(user).access_level !== "user" && (
                <>
                  <div
                    onClick={() => setDropOpen(false)}
                    className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-[#d03939]"
                      size="sm"
                      onClick={
                        () => setDropOpen(false)
                        // onClick={() => handleDelete(data.id)
                      }
                    />
                    <span className="text-[#d03939]">Delete</span>
                  </div>
                  <div
                    onClick={openPopup}
                    className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-[#888888] "
                      size="sm"
                      // onClick={() => handleEdit(data.id)}
                    />
                    <span>Edit</span>
                  </div>
                </>
              )}
            </div>
          )}
        </Space>
      )
    }
  ];
  const ComingSoon = () => {
    return (
      <div className="items-center justify-center flex py-32">
        <div className="bg-white rounded-lg shadow-md p-8  ">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Coming Soon
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="flex justify-center">
            <div className="border-t-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    );
  };
  if (true) {
    return <ComingSoon />;
  } else
    return (
      <div className="flex flex-col">
        {showPopup && (
          <FullScreenPopup
            onClose={closePopup}
            initialData={editData}
            setUpdatesUser={setUpdatesUser}
            locations={locations}
            setLocations={setLocations}
          />
        )}
        {showPopupAdd && (
          <FullScreenPopupAdd
            onClose={closePopupAdd}
            // initialData={editData}
            setUpdatesUser={setUpdatesUser}
            locations={locations}
            setLocations={setLocations}
          />
        )}
        {!showExcelView ? (
          <div className="flex flex-col">
            {JSON.parse(user).access_level !== "user" && (
              <div className="flex flex-row justify-start ">
                <Button
                  color="#0F2E60"
                  onClick={() => setShowPopupAdd(true)}
                  className="mr-2"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  New KPI
                </Button>
                {/* <Button
              color="#0F2E60"
              className="text-[#0F2E60]"
              outline
              onClick={() => setShowExcelView(true)}
            >
              Import From Excel
            </Button> */}
              </div>
            )}
            <Spin spinning={loading}>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                bordered
              />
            </Spin>
          </div>
        ) : (
          <ImportFromExcelView goBack={toggleExcelView} />
        )}
      </div>
    );
}

export default AccessManagement;
