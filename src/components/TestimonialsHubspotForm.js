"use client";

import React, { useEffect } from "react";

const TestimonialsHubSpotForm = () => {
  useEffect(() => {
    // Load the HubSpot embed script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/22615991.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.querySelector("script[src='https://js.hsforms.net/forms/embed/22615991.js']");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <div 
        className="hs-form-frame" 
        data-region="na1" 
        data-form-id="6ccee6ab-9b00-4645-9c36-c9bf2d1477d9" 
        data-portal-id="22615991"
      ></div>
    </div>
  );
};

export default TestimonialsHubSpotForm;
