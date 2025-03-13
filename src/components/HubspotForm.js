"use client";

import React, { useEffect, useState } from "react";

const HubSpotForm = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) return; // If the script is already loaded, do nothing

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoaded(true); // Mark the script as loaded
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
  }, [scriptLoaded]);

  return (
    <div>
      <div id="hubspot-form"></div>
    </div>
  );
};

export default HubSpotForm;
