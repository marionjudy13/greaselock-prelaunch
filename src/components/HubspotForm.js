"use client";

import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    // Check if the HubSpot script is already loaded globally
    if (window.hbspt) {
      // If the script is already loaded, initialize the form directly
      window.hbspt.forms.create({
        portalId: "22615991",
        formId: "25300bc4-e616-44e7-b174-99bd5c21f8c8",
        target: "#hubspot-form",
      });
      return; // Exit early to avoid appending the script again
    }

    // Check if the script is already in the DOM
    if (document.querySelector("script[src='//js.hsforms.net/forms/v2.js']")) {
      return; // If the script is already in the DOM, do nothing
    }

    // Append the script to the DOM
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "22615991",
          formId: "25300bc4-e616-44e7-b174-99bd5c21f8c8",
          target: "#hubspot-form",
        });
      }
    });

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="hubspot-form"></div>
    </div>
  );
};

export default HubSpotForm;
