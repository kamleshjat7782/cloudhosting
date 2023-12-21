import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const PlanContext = createContext();

// Create a context provider
export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch plans from  API here and set them in state
    
    fetch('/api/v1/product/get-product')
      .then((response) => response.json())
      .then((data) => setPlans(data.products))
      .catch((error) => console.error('Error fetching plans:', error));
  }, []);

  return (
    <PlanContext.Provider value={plans}>
      {children}
    </PlanContext.Provider>
  );
};
