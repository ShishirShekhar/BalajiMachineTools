const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && typeof onPerfEntry === "function") {
    // Dynamically import web-vitals library and get individual metrics
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each metric function with the provided callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
