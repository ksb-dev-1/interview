/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Pagination from "./Pagination";

// Main App component
const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const productsPerPage = 15;

  const fetchProducts = async () => {
    setLoading(true);

    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    if (data && data.products) setProducts(data.products);

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center justify-center overflow-hidden">
      {loading && <div className="font-bold text-3xl">Loading...</div>}
      {products.length > 0 && (
        <div className="max-w-6xl grid grid-cols-3 lg:grid-cols-5 gap-4">
          {products
            .slice((page - 1) * productsPerPage, page * productsPerPage)
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col border p-4 cursor-pointer rounded hover:bg-slate-100 overflow-hidden"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-contain h-24"
                />
                <span className="text-xs sm:text-base">{product.title}</span>
              </div>
            ))}
        </div>
      )}
      {products.length > 0 && (
        <Pagination
          totalProducts={products.length}
          productsPerPage={productsPerPage}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;

// ------------------------------------------------------------

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   const fetchProducts = async () => {
//     const response = await fetch("https://dummyjson.com/products?limit=100");
//     const data = await response.json();

//     if (data && data.products) setProducts(data.products);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handlePageChange = (selectedPage) => {
//     setPage(selectedPage);
//   };

//   const productsPerPage = 12;

//   return (
//     <div className="max-w-screen flex flex-col items-center overflow-hidden">
//       {products.length > 0 && (
//         <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products
//             .slice((page - 1) * productsPerPage, page * productsPerPage)
//             .map((product) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col border p-4 cursor-pointer rounded hover:bg-slate-100"
//               >
//                 <img src={product.thumbnail} alt={product.title} />
//                 <span>{product.title}</span>
//               </div>
//             ))}
//         </div>
//       )}
//       {products.length > 0 && (
//         <Pagination
//           totalProducts={products.length}
//           productsPerPage={productsPerPage}
//           currentPage={page}
//           onPageChange={handlePageChange}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------------
