import React, { useState, useEffect, useRef } from "react";
import ButtonUI from "../../components/UI/Button/Button";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlighter from "react-highlight-words";
import {
  faPlus,
  faPen,
  faEllipsisV,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { SearchOutlined } from "@ant-design/icons";

import { DownOutlined } from "@ant-design/icons";

import Badge from "../../components/UI/Badge/Badge";
import Avatar from "../../components/UI/Avatar/Avatar";
import ImportFromExcelView from "./ImportFromExcelView";
import FullScreenPopup from "./userEdit";
import FullScreenPopupAdd from "./userAdd";
import { BASE_URL } from "../../store/services/URL";
import withAPIKeys from "../../store/services/service";
import {
  Table,
  Space,
  Spin,
  Input,
  Select,
  Dropdown,
  message,
  Button,
} from "antd";

function AccessManagement(props) {
  const { locations, setLocations } = props;
  const [tableData, setTableData] = useState([]);
  const user = localStorage.getItem("user");
  const [loading, setLoading] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const [searchText, setSearchText] = useState("");
  console.log("first", JSON.parse(user));

  const items = [
    {
      key: "1",
      label: "Delete",
      icon: <FontAwesomeIcon icon={faTrash} className="text-[#d03939] " />,
    },
    {
      key: "2",
      label: "Edit",
      icon: <FontAwesomeIcon icon={faPen} className="text-[#888888] " />,
    },
  ];
  const [filteredInfo, setFilteredInfo] = useState({});
  const [deleteRecord, setDeleteRecord] = useState(null); // State to hold record to delete
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false); // State to control visibility of delete confirmation modal
  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch("YOUR_DELETE_API_ENDPOINT", {
        method: "DELETE",
        headers: withAPIKeys().headers,
        body: JSON.stringify({
          // Send any necessary data for the delete operation
          id: deleteRecord.id,
        }),
      });

      if (response.ok) {
        // Remove the deleted record from the table data
        setTableData((prevTableData) =>
          prevTableData.filter((item) => item.id !== deleteRecord.id)
        );

        // Close the delete confirmation modal
        setDeleteConfirmVisible(false);

        // Show success message
        message.success("Record deleted successfully!");
      } else {
        // Handle error response
        message.error("Failed to delete record");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error
      message.error("An error occurred");
    }
  };

  // Function to handle delete cancellation
  const handleDeleteCancel = () => {
    // Close the delete confirmation modal
    setDeleteConfirmVisible(false);
  };

  // Function to show delete confirmation modal
  const showDeleteConfirmModal = (record) => {
    setDeleteRecord(record); // Set the record to delete
    setDeleteConfirmVisible(true); // Show the delete confirmation modal
  };
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL + "auth/get_all_users", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify({
          email: JSON.parse(user).email,
        }),
      });

      if (response) {
        const data = await response.json();
        setLoading(false);

        console.log("data", data);
        if (data.hasOwnProperty("user_info")) {
          setTableData(data.user_info);
        } else {
          setTableData([]);
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      setLoading(false);
      // console.error("An error occurred while fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [openPopupId, setOpenPopupId] = useState(null);

  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [showExcelView, setShowExcelView] = useState(false);
  const [editData, setEditData] = useState(null); // State to hold data for editing
  const [updatedUser, setUpdatesUser] = useState();
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

  const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Close dropdown if clicked outside of it
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Add event listener to document for clicks outside the dropdown
    return () => {
      document.removeEventListener("click", handleClickOutside); // Remove event listener on component unmount
    };
  }, []);

  const [dropOpen, setDropOpen] = useState(false);
  const handleIconClick = (record) => {
    openPopup();
    setDropOpen(false);

    setEditData(record); // Set the data to edit
    setOpenPopupId(record.id);
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleClosePopup = () => {
    setDropOpen(false);
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

  const getUniqueValuesForFilter = (array, property) => {
    // This function will return the unique values of the property name
    return [
      { text: "N/A", value: "" },
      ...[...new Set(array.map((item) => item[property]))]
        .filter((item) => item !== "")
        .sort()
        .map((item) => ({ text: item, value: item })),
    ];
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              backgroundColor: "#1890ff", // This is the primary color used by Ant Design for buttons
              borderColor: "#1890ff", // Border color, you can adjust it if needed
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    filteredValue: filteredInfo[dataIndex] || null,
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        <div>{text}</div>
      ),
  });

  const getColumnListFilterProps = (dataIndex) => ({
    filters: getUniqueValuesForFilter(tableData, dataIndex),
    onFilter: (value, record) => {
      if (value === "") {
        return record[dataIndex] === "";
      }
      return record[dataIndex].includes(value);
    },
    filteredValue: filteredInfo[dataIndex] || null,
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    // setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (text, record) => (
        <Space>
          <Avatar initials content={text} />
          <div>
            <div>{text}</div>
            <div className="text-sm text-[#888888]">{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
      key: "phone",
      // Filter logic for Phone column

      ...getColumnSearchProps("phone_number"),

      filteredValue: filteredInfo["phone"] || null,
    },
    {
      title: "Role",
      dataIndex: "access_level",
      key: "role",
      // Filter logic for Role column

      ...getColumnListFilterProps("access_level"),

      filteredValue: filteredInfo["role"] || null,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnListFilterProps("status"),

      render: (text) => (
        <Badge
          color={
            text === "approved"
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
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <div
            onClick={() => handleIconClick(record)}
            className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faPen}
              className="text-[#888888] "
              size="sm"
            />
            <span>Edit</span>
          </div>
          {/* <div
            onClick={() => showDeleteConfirmModal(record)}
            className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded hover:bg-[#EDEFF1] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-[#d03939] "
              size="sm"
              onClick={() => setDropOpen(false)}
            />
            <span className="text-[#d03939]">Delete</span>
          </div> */}
        </Space>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-[41rem]  overflow-y-auto   ">
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
              <ButtonUI
                color="#0F2E60"
                onClick={() => setShowPopupAdd(true)}
                className="mr-2"
                size="sm"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                New User
              </ButtonUI>
            </div>
          )}
          <div className="mt-4">
            <Spin spinning={loading}>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ y: 580 }}
                bordered
                onChange={handleChange}
              />
            </Spin>
          </div>
        </div>
      ) : (
        <ImportFromExcelView goBack={toggleExcelView} />
      )}
      <Modal
        title="Confirm Delete"
        visible={deleteConfirmVisible}
        onOk={handleDeleteConfirm} // Handle delete confirmation
        onCancel={handleDeleteCancel} // Handle delete cancellation
        okButtonProps={{
          style: { backgroundColor: "#52c41a", borderColor: "#52c41a" },
        }} // Custom styles for the OK button
      >
        <p>Are you sure you want to delete this record?</p>
      </Modal>
    </div>
  );
}

export default AccessManagement;
