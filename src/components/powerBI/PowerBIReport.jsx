import React, { useEffect, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import * as models from "powerbi-models";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import { Loader } from "../loaders/Loaders";
import MainLoader from "../../components/mainLoader/mainLoader.jsx";
import NoDataFound from "../noDataFound/noDataFound";

const PowerBIReport = (props) => {
  const link = props.link;

  useEffect(() => {
    const loadPowerBIReport = async () => {
      // Load Power BI JavaScript API from CDN
      const script = document.createElement("script");
      script.src = "https://app.powerbi.com/libs/powerbi-reportembed.min.js";
      script.async = true;

      script.onload = () => {
        // Wait for DOMContentLoaded before initializing Power BI
        window.addEventListener("DOMContentLoaded", () => {
          // Handle events when the report is loaded
          const eventHandlers =
            new window.powerbi.extensibility.EventHandlers();
          eventHandlers.add("loaded", () => {
            console.log("Report loaded");
            setIsLoading(false); // Set isLoading to false when the report is loaded
          });

          // Clean up event handlers when the component is unmounted
          return () => {
            eventHandlers.removeAll();
          };
        });
      };

      document.body.appendChild(script);
    };

    loadPowerBIReport();
  }, []);
  const handleRedirect = () => {
    window.location.href = "/dashboard"; // Redirect to the dashboard
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set timeout for 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.reload();
    // For demo purposes, just close the logout dialog
    setIsLogoutDialogOpen(false);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user.user_email ", user);
  return (
    <>
      {(user?.access_level === "admin" ||
        user?.user_email === "s.stokes@guestx.co") && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "20px",
            zIndex: "1000",
            cursor: "pointer",
            transition: "color 0.3s ease, box-shadow 0.3s ease",

            borderRadius: "50%" // Optional: Add border-radius for a circular shape
          }}
        >
          <Button onClick={handleRedirect} variant="contained">
            Dashboard
          </Button>
        </div>
      )}
      {/* {isLoading && <MainLoader />} Display loader while loading */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: "1000",
          cursor: "pointer",
          boxShadow: isHovered ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none", // Add box shadow on hover
          transition: "color 0.3s ease, box-shadow 0.3s ease",
          borderRadius: "50%" // Optional: Add border-radius for a circular shape
        }}
        onClick={() => setIsLogoutDialogOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PowerSettingsNewIcon
          style={{
            fontSize: "30px",
            color: isHovered ? "#FFD700" : "#000"
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
          zIndex: "1000",
          cursor: "pointer",
          transition: "color 0.3s ease, box-shadow 0.3s ease",
          borderRadius: "50%" // Optional: Add border-radius for a circular shape
        }}
      >
        <div className="bg-[#eaeaea] h-[34px] w-60 "></div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          zIndex: "1000",
          cursor: "pointer",
          transition: "color 0.3s ease, box-shadow 0.3s ease",
          borderRadius: "50%" // Optional: Add border-radius for a circular shape
        }}
      >
        <div className="bg-[#eaeaea] h-[34px] w-36"></div>
      </div>
      {isLogoutDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-120 shadow-md">
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#fff",
                padding: "20px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                zIndex: "1001",
                width: "350px", // Increase width
                height: "150px", // Increase height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between" // Align buttons to the bottom
              }}
            >
              <p>Are you sure you want to logout?</p>
              <div style={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                  style={{ marginRight: "10px" }}
                >
                  Log out
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setIsLogoutDialogOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.link == "" || !props.link ? (
        <NoDataFound />
      ) : (
        <div style={{ margin: 0, padding: 0, height: "100vh" }}>
          <iframe
            title="GuestX reporting"
            width="100%"
            height="100%"
            src={props.link}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default PowerBIReport;
