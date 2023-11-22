// import { useState, useContext, createContext, useEffect } from "react";

// const CartContext = createContext();
// const CartProvider = ({ children }) => {
//   const [PlanDetails, setPlanDetails] = useState([]);

//   const getAllProducts = async () => {
//     try {

//       const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
//       setPlanDetails(data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllProducts()
//   }, []);

//   return (
//     <CartContext.Provider value={[PlanDetails, setPlanDetails]}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // custom hook
// const usePlanDetails = () => useContext(PlanDetailsContext);

// export { usePlanDetails, PlanDetailsProvider };
