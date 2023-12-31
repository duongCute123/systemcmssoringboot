import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Tạo một mảng các số trang từ 1 đến tổng số trang
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button className=''
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          <div className='w-12 border'>
            <p className=''>{pageNumber}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Pagination;