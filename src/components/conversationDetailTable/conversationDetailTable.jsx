import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Input,
  Space,
  Table,
  theme,
  ConfigProvider,
} from "antd";
import Highlighter from "react-highlight-words";
import { Verified } from "@mui/icons-material";
import AudioPlayer from "../audioPlayer/audioPlayer";
import ConversationDetailsTabs from "../conversationDetailsTabs/conversationDetailsTabs";
import ToggleColumnDropdown from "../toggleColumns/columnToggle";

import { getDarkModeEnabled } from "../../store/selector/general.selector";

export default function ConvesationDetailsTableo(props) {
  const { data, loading } = props;
  const [rescoreCallCheckbox, setRescoreCallCheckbox] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const [filteredInfo, setFilteredInfo] = useState({ Lead: ["Yes"] });

  const themeMode = useSelector(getDarkModeEnabled);

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
  console.log("loading", loading);

  const clearFilters = () => {
    setFilteredInfo({ Lead: ["Yes"] });
    setSearchText("");
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    // setSortedInfo(sorter);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnListFilterProps = (dataIndex) => ({
    filters: getUniqueValuesForFilter(data, dataIndex),
    onFilter: (value, record) => {
      if (value === "") {
        return record[dataIndex] === "";
      }
      return record[dataIndex].includes(value);
    },
    filteredValue: filteredInfo[dataIndex] || null,
  });

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

  const getColumnSearchForCustomerNameProps = (dataIndex) => ({
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
    filteredValue: filteredInfo[dataIndex] || null,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
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

  const columns = [
    {
      title: "Key", // Change this title to match your key property name
      dataIndex: "key", // Change this dataIndex to match your key property name
      key: "key",
      filteredValue: filteredInfo.key || null,
      onFilter: (value, record) => record.key.includes(value),
      render: (text, record) => (
        <span
          onClick={() => {
            // Toggle row expansion when the key is clicked
            setExpandedRowKey(
              expandedRowKey === record.key ? null : record.key
            );
          }}
        >
          {text}
        </span>
      ),
      width: 80,
    },
    {
      title: "UID",
      dataIndex: "Conversation_ID",
      key: "U",

      ...getColumnSearchProps("Conversation_ID"),
    },
    {
      title: "Lead",
      dataIndex: "Lead",
      key: "Lead",

      ...getColumnListFilterProps("Lead"),
    },
    {
      title: "Recording",
      dataIndex: "Duration",
      key: "Duration",

      // ...getColumnSearchProps("Recording"),
    },

    {
      title: "Customer Name",
      dataIndex: "Customer_Name",
      key: "Customer_Name",

      ...getColumnSearchForCustomerNameProps("Customer_Name"),
    },

    {
      title: "Caller Id",
      dataIndex: "Caller_Id",
      key: "Caller_Id",

      ...getColumnSearchProps("Caller_Id"),
    },

    {
      title: "Lead Source",
      dataIndex: "Tracking_Number_Name",
      key: "Tracking_Number_Name",

      ...getColumnListFilterProps("Tracking_Number_Name"),
      // ...getColumnSearchProps("Tracking_Number_Name"),
    },

    {
      title: "Call Type",
      dataIndex: "Campaipn_Name",
      key: "Campaipn_Name",

      ...getColumnListFilterProps("Campaipn_Name"),

      // ...getColumnSearchProps("Campaipn_Name"),
    },

    {
      title: "Service Advisor",
      dataIndex: "Identified_Agent",
      key: "Identified_Agent",

      ...getColumnListFilterProps("Identified_Agent"),

      // ...getColumnSearchProps("Identified_Agent"),
    },

    {
      title: "Service Requested",
      dataIndex: "Service_Requested",
      key: "Service_Requested",

      ...getColumnSearchProps("Service_Requested"),
    },

    {
      title: "Appointment Booked",
      dataIndex: "Appointment_outcome",
      key: "Appointment_outcome",

      ...getColumnListFilterProps("Appointment_outcome"),
    },

    {
      title: "Outcome",
      dataIndex: "Outcome_Classification",
      key: "Outcome_Classification",

      ...getColumnListFilterProps("Outcome_Classification"),

      // ...getColumnSearchProps("Outcome_Classification"),
    },

    {
      title: "Average Score",
      dataIndex: "Average",
      key: "Average",

      sorter: (a, b) => a.Average - b.Average,

      ...getColumnSearchProps("Average"),
    },

    {
      title: "Score",
      dataIndex: "tags",
      key: "tags",
      width: 70,

      render: (_, { tags }) => (
        <>
          <div title="verified" className="text-[#DD3E3E]">
            <Verified />
          </div>
        </>
      ),
    },
    {
      title: "App",
      dataIndex: "tags",
      key: "tags",
      width: 70,

      render: (_, { tags }) => (
        <>
          <div title="verified" className="text-[#DD3E3E]">
            <Verified />
          </div>
        </>
      ),
    },
    {
      title: "Leads",
      dataIndex: "tags",
      key: "tags",
      width: 70,
      render: (_, { tags }) => (
        <>
          <div title="verified" className="text-[#48C476]">
            <Verified />
          </div>
        </>
      ),
    },
  ];

  let defaultHiddenList = [
    "U",
    "UID",
    "Lead",
    "Caller_Id",
    "Campaipn_Name",
    "Appointment_Book",
    "Service_Requested",
    "Tracking_Number_Name",
    "Appointment_outcome",
  ];

  const defaultCheckedList = columns
    .filter(({ key }) => !defaultHiddenList.includes(key))
    .map(({ key }) => key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  console.log(checkedList, "checkedList");

  const [expandedRowKey, setExpandedRowKey] = useState(null);
  return (
    <>
      <div className=" ">
        <div className=" pb-2  px-2  text-base leading-6 text-black flex flex-row justify-between  gap-4 ">
          <div className=" pl-2   flex flex-row gap-4 ">
            <input
              className="w-4"
              type="checkbox"
              id="checkbox"
              checked={rescoreCallCheckbox}
              onChange={() => setRescoreCallCheckbox(!rescoreCallCheckbox)}
            />
            <span className="flex flex-col justify-center darkText">
              Rescored calls
            </span>
          </div>
          <ToggleColumnDropdown>
            <Checkbox.Group
              value={checkedList}
              options={options}
              onChange={(value) => {
                setCheckedList(value);
              }}
            />
          </ToggleColumnDropdown>
          <button className="button_primary" onClick={clearFilters}>
            <span>Clear all filters</span>
          </button>
        </div>
      </div>
      <ConfigProvider
        theme={{
          algorithm:
            themeMode.mode === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        <Table
          // other table props...
          pagination={{
            pageSize: 20,
          }}
          style={{ zIndex: 40 }}
          scroll={{ y: 638, x: checkedList.length > 10 ? "160vw" : undefined }}
          loading={loading}
          // pagination={false}
          columns={newColumns}
          dataSource={data}
          expandable={{
            expandedRowRender: (record) => (
              <div className="">
                <div className="flex items-center justify-center">
                  <AudioPlayer
                    loading={loading}
                    showRowDetail={false}
                    setShowRowDetail={() => {}}
                    dataProp={{
                      date: record?.Date,
                      time: record?.Time,
                      play_audio_conversation: record?.Play_Conversation,
                      service_requested: record?.Service_Requested,
                    }}
                  />
                </div>
                <div className="mt-4   shadow-xl rounded-lg shadow-black/5 ring-1 ring-slate-700/10">
                  <ConversationDetailsTabs
                    ConversationID={record.Conversation_ID}
                    summaryTab={{
                      service_requested: record?.Service_Requested,
                      summary: record?.Summary,
                      recommendations: record?.Coaching_Recommendation,
                    }}
                    callScoreTab={{
                      score: {
                        average: Math.round(record?.Average * 100) / 100,
                        greeting: Math.round(record?.Greeting * 100) / 100,
                        discovery: Math.round(record?.Discovery * 100) / 100,
                        appointment: Math.round(record?.Appt * 100) / 100,
                        closing: Math.round(record?.Close * 100) / 100,
                      },
                      appointment_booked: record?.Appointment_outcome,
                      appointment_outcome: record?.Outcome_Classification,
                    }}
                  />
                </div>
              </div>
            ),
            expandedRowKeys: expandedRowKey ? [expandedRowKey] : [],
            onExpand: (expanded, record) => {
              setExpandedRowKey(expanded ? record.key : null);
            },
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          onChange={handleChange}
        />
      </ConfigProvider>
    </>
  );
}
