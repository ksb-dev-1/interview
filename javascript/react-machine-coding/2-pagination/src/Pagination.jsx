/* eslint-disable react/prop-types */

// export default function Pagination({
//   totalProducts,
//   productsPerPage,
//   currentPage,
//   onPageChange,
// }) {
//   // Calculate total number of pages
//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   // Create an array of page numbers
//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   // Handle page button click
//   const handlePageClick = (pageNumber) => {
//     if (pageNumber !== currentPage) {
//       onPageChange(pageNumber);
//     }
//   };

//   return (
//     <div className="mt-8 flex items-center space-x-2">
//       <button
//         onClick={() => handlePageClick(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="border px-4 py-2 rounded hover:bg-slate-100 disabled:opacity-50"
//       >
//         Prev
//       </button>

//       {pages.map((pageNumber) => (
//         <button
//           key={pageNumber}
//           onClick={() => handlePageClick(pageNumber)}
//           className={`border px-4 py-2 rounded ${
//             currentPage === pageNumber
//               ? "bg-blue-500 text-white"
//               : "hover:bg-slate-100"
//           }`}
//         >
//           {pageNumber}
//         </button>
//       ))}

//       <button
//         onClick={() => handlePageClick(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="border px-4 py-2 rounded hover:bg-slate-100 disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// -------------------------------------------------------------

import { useState, useEffect } from "react";

export default function Pagination({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) {
  const [pageGroup, setPageGroup] = useState(0);
  const maxPagesToShow = 5;

  // calculate total pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // start page
  const startPage = pageGroup * maxPagesToShow + 1;

  // end page
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  useEffect(() => {
    if (currentPage > endPage || currentPage < startPage) {
      setPageGroup(Math.floor((currentPage - 1) / maxPagesToShow));
    }
  }, [currentPage, endPage, startPage]);

  return (
    <div className="mt-8 flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded hover:bg-slate-100 disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded ${
              currentPage === pageNumber
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded hover:bg-slate-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
