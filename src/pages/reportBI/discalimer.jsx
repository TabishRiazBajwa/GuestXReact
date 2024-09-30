import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { BASE_URL } from "../../store/services/URL";
import withAPIKeys from "../../store/services/service";
import { ifcUsers } from "../../Constants/constant";

import Disclaimer_Ifc_Owner from "./Disclaimer_Ifc_Owner";
import Disclaimer_IFMC_NonOwner from "./Disclaimer_IFMC_NonOwner";
import Disclaimer_IFMC_Owner from "./Disclaimer_IFMC_Owner";
import Disclaimer_IFC_NonOwner from "./Disclaimer_IFC_NonOwner";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const FullScreenPopup = ({ onClose, initialData }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [loading, setLoading] = useState(false); // Disabled by default
  const user = localStorage.getItem("user");
  const contentRef = useRef(null);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = contentRef.current;

    // Check if scrolled to the bottom
    // if (scrollHeight - scrollTop === clientHeight) {
    //   setLoading(false); // Enable the button
    // } else {
    //   setLoading(true); // Disable the button
    // }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user on disclaimer", JSON.parse(user));
    setLoading(true);
    try {
      // Make API call to save disclaimer
      const response = await fetch(BASE_URL + "auth/disclaimer", {
        method: "POST",
        headers: withAPIKeys().headers,
        body: JSON.stringify({
          email: JSON.parse(user)?.user_email || JSON.parse(user)?.email,
          disclaimer: "signed"
        })
      });
      if (response.ok) {
        const data = await response.json();
        setLoading(false);

        console.log("data from response", data.user_info);
        localStorage.setItem("user", JSON.stringify({ ...data.user_info }));
        onClose(); // Close the popup regardless of API success or failure
        // You can perform additional actions or update the UI based on the response
      } else {
        console.error("Failed to save disclaimer");
      }
    } catch (error) {
      console.error("An error occurred while saving disclaimer", error);
    }
  };
  const ifc = () => {
    return (
      <body class="bg-gray-100 font-sans">
        <div class="container mx-auto p-6 bg-white shadow-md mt-10 max-w-2xl">
          {/* <h2 class="text-2xl font-bold mb-4"> */}
          <p>
            BY CLICKING ON THE “I AGREE” BUTTON OR BY ACCESSING THE BETA
            PRODUCT, YOU ARE CONSENTING TO BE BOUND BY THIS AGREEMENT.
          </p>
          {/* </h2> */}
          <br />

          <p>
            This BETA TEST AGREEMENT (the “Agreement”) is by and between Iron
            Fist Consultants, LLP and its affiliates (collectively, “IFC”) and
            you (“You”).
          </p>
          <br />

          <p>
            “Beta Product” shall mean those products, services, and/or features
            that are designated as beta or pre-release versions of the GuestX
            platform and are provided to You during the term hereof.
          </p>
          <br />

          <h3 class="font-bold text-lg">License.</h3>
          <p>
            IFC grants to You a non-exclusive, non-transferable,
            non-sublicensable license to use the Beta Product solely for the
            purposes of testing, research, and evaluation. You shall not modify,
            disassemble, decompile, reverse engineer, rent, lease, loan,
            transfer, or make copies of the Beta Product.
          </p>
          <br />

          <h3 class="font-bold text-lg">Ownership.</h3>
          <p>
            All title, interest, and ownership rights in and to the Beta Product
            and associated documentation, including any improvements,
            modifications, and enhancements made thereto, are and shall remain
            in IFC or IFC’s partners. Except for those rights expressly granted
            herein, no other rights are granted, either express or implied, to
            You.
          </p>
          <br />

          <h3 class="font-bold text-lg">Confidentiality.</h3>
          <p>
            The Beta Product, the fact of its existence, all accompanying
            documentation, and all information disclosed by IFC to You hereunder
            or otherwise in connection with the Beta Product, including without
            limitation performance data, features and other information relating
            to or obtained from the Beta Product, is “Confidential Information”
            of IFC. You will not use the Confidential Information except as
            necessary under this Agreement, and will not disclose any portion of
            the Confidential Information to any other person or entity. You will
            use all reasonable steps to protect the Confidential Information
            from unauthorized use or disclosure. Confidential Information does
            not include information that: (1) was rightfully known by You at the
            time of disclosure without an obligation of confidentiality, (2) is
            lawfully obtained by You from a third party without restriction on
            use or disclosure, or (3) is or becomes generally known to the
            public through no fault or breach of this Agreement by You.
          </p>
          <br />

          <h3 class="font-bold text-lg">Termination.</h3>
          <p>
            This Agreement shall terminate upon the release by IFC of a publicly
            available version of the Beta Product, or upon written notice from
            IFC to You. IFC does not guarantee that any such publicly available
            version will be released.
          </p>
          <br />

          <h3 class="font-bold text-lg">Data & Feedback.</h3>
          <p>
            You agree that IFC may obtain information and data from You in
            connection with Your registration, installation, and use of the Beta
            Product including, without limitation, personal information. IFC may
            also collect and process technical and performance information about
            your use of the Beta Product and use this information to support and
            troubleshoot issues, provide updates, analyze trends and improve IFC
            products or services. IFC shall be allowed to use such data and
            share such data with IFC partners for the program purposes. You
            hereby consent to IFC processing and transferring this information,
            including, if any, personal information, in conformity with the IFC
            Privacy Policy, as updated from time to time. Further, You shall
            provide feedback to IFC concerning the functionality and performance
            of the Beta Product from time to time as reasonably requested by
            IFC, including, without limitation, identifying potential errors and
            improvements. You will also be invited to complete surveys regarding
            the IFC devices. Feedback provided to IFC through any of the
            foregoing methods in connection with the Beta Product may be used by
            IFC and its partners to improve or enhance products, services and/or
            features and, accordingly, IFC shall have a non-exclusive,
            perpetual, irrevocable, royalty-free, worldwide right and license to
            use, reproduce, disclose, sublicense, distribute, modify and
            otherwise exploit such feedback without restriction.
          </p>
          <br />

          <p>
            THE BETA PRODUCT MAY CONTAIN ERRORS AND IS PROVIDED FOR LIMITED
            EVALUATION ONLY. THE BETA PRODUCT IS PROVIDED “AS IS” WITHOUT
            WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR
            OTHERWISE. IFC SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF
            MERCHANTABILITY, NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR
            PURPOSE.
          </p>
          <br />

          <p>
            THE TOTAL LIABILITY OF IFC ARISING OUT OF OR RELATED TO THIS
            AGREEMENT SHALL NOT EXCEED $100. IN NO EVENT SHALL IFC HAVE
            LIABILITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
            DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE
            LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL
            PURPOSE OF ANY LIMITED REMEDY.
          </p>
          <br />

          <h3 class="font-bold text-lg">Miscellaneous.</h3>
          <p>
            This Agreement shall be governed by the laws of North Carolina
            without reference to conflict of laws principles. You shall not
            assign this Agreement, directly or indirectly, by operation of law
            or otherwise, without the prior written consent of IFC. You shall
            comply in all respects with all U.S. and foreign export and
            re-export laws and regulations applicable to the technology and
            documentation provided hereunder. This is the entire agreement
            between the parties relating to the subject matter hereof. No waiver
            or modification of this Agreement shall be valid unless in writing
            signed by each party. If any provision of this Agreement is held by
            a court of competent jurisdiction to be contrary to law, the
            remaining provisions of this Agreement shall remain in full force
            and effect.
          </p>
        </div>
      </body>
    );
  };
  const ifmc = () => {
    return (
      <body class="bg-gray-100 font-sans">
        <div class="container mx-auto p-6 bg-white shadow-md mt-10 max-w-2xl">
          {/* <h2 class="text-2xl font-bold mb-4"> */}
          <p>
            BY CLICKING ON THE “I AGREE” BUTTON OR BY ACCESSING THE BETA
            PRODUCT, YOU ARE CONSENTING TO BE BOUND BY THIS AGREEMENT.
          </p>
          {/* </h2> */}
          <br />

          <p>
            This USER AGREEMENT (the “Agreement”) is by and between Iron Fist
            Marketing Consultants, LLC and its affiliates (collectively, “IFMC”)
            and you (“You”).
          </p>
          <br />

          <p>
            “Beta Product” shall mean those products, services, and/or features
            that are designated as beta or pre-release versions of the GuestX
            platform and are provided to You during the term hereof.
          </p>
          <br />

          <h3 class="font-bold text-lg">License.</h3>
          <p>
            IFMC grants to You a non-exclusive, non-transferable,
            non-sublicensable license to use the Beta Product solely for the
            purposes of testing, research, and evaluation. You shall not modify,
            disassemble, decompile, reverse engineer, rent, lease, loan,
            transfer, or make copies of the Beta Product.
          </p>
          <br />

          <h3 class="font-bold text-lg">Ownership.</h3>
          <p>
            All title, interest, and ownership rights in and to the Beta Product
            and associated documentation, including any improvements,
            modifications, and enhancements made thereto, are and shall remain
            in IFMC or IFMC’s partners. Except for those rights expressly
            granted herein, no other rights are granted, either express or
            implied, to You.
          </p>
          <br />

          <h3 class="font-bold text-lg">Confidentiality.</h3>
          <p>
            The Beta Product, the fact of its existence, all accompanying
            documentation, and all information disclosed by IFMC to You
            hereunder or otherwise in connection with the Beta Product,
            including without limitation performance data, features and other
            information relating to or obtained from the Beta Product, is
            “Confidential Information” of IFMC. You will not use the
            Confidential Information except as necessary under this Agreement,
            and will not disclose any portion of the Confidential Information to
            any other person or entity. You will use all reasonable steps to
            protect the Confidential Information from unauthorized use or
            disclosure. Confidential Information does not include information
            that: (1) was rightfully known by You at the time of disclosure
            without an obligation of confidentiality, (2) is lawfully obtained
            by You from a third party without restriction on use or disclosure,
            or (3) is or becomes generally known to the public through no fault
            or breach of this Agreement by You.
          </p>
          <br />

          <h3 class="font-bold text-lg">Termination.</h3>
          <p>
            This Agreement shall terminate upon the release by IFMC of a
            publicly available version of the Beta Product, or upon written
            notice from IFMC to You. IFMC does not guarantee that any such
            publicly available version will be released.
          </p>
          <br />

          <h3 class="font-bold text-lg">Data & Feedback.</h3>
          <p>
            You agree that IFMC may obtain information and data from You in
            connection with Your registration, installation, and use of the Beta
            Product including, without limitation, personal information. IFMC
            may also collect and process technical and performance information
            about your use of the Beta Product and use this information to
            support and troubleshoot issues, provide updates, analyze trends and
            improve IFMC products or services. IFMC shall be allowed to use such
            data and share such data with IFMC partners for the program
            purposes. You hereby consent to IFMC processing and transferring
            this information, including, if any, personal information, in
            conformity with the IFMC Privacy Policy, as updated from time to
            time. Further, You shall provide feedback to IFMC concerning the
            functionality and performance of the Beta Product from time to time
            as reasonably requested by IFMC, including, without limitation,
            identifying potential errors and improvements. You will also be
            invited to complete surveys regarding the IFMC devices. Feedback
            provided to IFMC through any of the foregoing methods in connection
            with the Beta Product may be used by IFMC and its partners to
            improve or enhance products, services and/or features and,
            accordingly, IFMC shall have a non-exclusive, perpetual,
            irrevocable, royalty-free, worldwide right and license to use,
            reproduce, disclose, sublicense, distribute, modify and otherwise
            exploit such feedback without restriction.
          </p>
          <br />

          <p>
            THE BETA PRODUCT MAY CONTAIN ERRORS AND IS PROVIDED FOR LIMITED
            EVALUATION ONLY. THE BETA PRODUCT IS PROVIDED “AS IS” WITHOUT
            WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR
            OTHERWISE. IFMC SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF
            MERCHANTABILITY, NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR
            PURPOSE.
          </p>
          <br />

          <p>
            THE TOTAL LIABILITY OF IFMC ARISING OUT OF OR RELATED TO THIS
            AGREEMENT SHALL NOT EXCEED $100. IN NO EVENT SHALL IFMC HAVE
            LIABILITY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
            DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE
            LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL
            PURPOSE OF ANY LIMITED REMEDY.
          </p>
          <br />

          <h3 class="font-bold text-lg">Miscellaneous.</h3>
          <p>
            This Agreement shall be governed by the laws of North Carolina
            without reference to conflict of laws principles. You shall not
            assign this Agreement, directly or indirectly, by operation of law
            or otherwise, without the prior written consent of IFMC. You shall
            comply in all respects with all U.S. and foreign export and
            re-export laws and regulations applicable to the technology and
            documentation provided hereunder. This is the entire agreement
            between the parties relating to the subject matter hereof. No waiver
            or modification of this Agreement shall be valid unless in writing
            signed by each party. If any provision of this Agreement is held by
            a court of competent jurisdiction to be contrary to law, the
            remaining provisions of this Agreement shall remain in full force
            and effect.
          </p>
        </div>
      </body>
    );
  };
  const getDisclaimer = () => {
    const userEmail = JSON.parse(user)?.user_email || JSON.parse(user)?.email;
    const group = JSON.parse(localStorage.getItem("user")).group;
    const access_level = JSON.parse(localStorage.getItem("user")).access_level;

    console.log(JSON.parse(localStorage.getItem("user")), "user");
    console.log(group, "group");

    if (group === "IFC" && access_level === "owner") {
      return <Disclaimer_Ifc_Owner />;
    } else if (group === "IFC" && access_level !== "owner") {
      return <Disclaimer_IFC_NonOwner />;
    } else if (group === "IFMC" && access_level === "owner") {
      return <Disclaimer_IFMC_Owner />;
    } else if (group === "IFMC" && access_level !== "owner") {
      return <Disclaimer_IFMC_NonOwner />;
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.reload();
    // For demo purposes, just close the logout dialog
    setIsLogoutDialogOpen(false);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: "1000",
          cursor: "pointer",
          // boxShadow: isHovered ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "none", // Add box shadow on hover
          transition: "color 0.3s ease, box-shadow 0.3s ease",
          borderRadius: "50%" // Optional: Add border-radius for a circular shape
        }}
        onClick={() => setIsLogoutDialogOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <PowerSettingsNewIcon
          style={{
            fontSize: "30px"
            // color: isHovered ? "#FFD700" : "#000",
          }}
        />
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

      {!isLogoutDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-120 shadow-md">
            <form onSubmit={handleSubmit} className="">
              <div
                ref={contentRef}
                className=" w-[800px]  h-96 overflow-y-scroll"
                onScroll={handleScroll}
              >
                {/* <div className=" w-full  h-96  overflow-y-scroll"> */}{" "}
                {/* <h1>BETA TEST AGREEMENT</h1> */}
                <h2 className="text-xl font-bold mb-4 text-center  ">
                  User Agreement
                </h2>
                {getDisclaimer()}
              </div>

              <div className="w-full col-span-2">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? "I Agree" : "I Agree"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenPopup;
