import React from 'react'

function Pagination({ paginate, currentPage, totalData, dataPerPage }) {

  return (
    <div className="mt-2">
      <button
        className="btn"
        style={{ backgroundColor: '#DBE2EF' }}
        onClick={() => paginate(-1)}
        disabled={(currentPage === 1)? true : false}
        >Prev Page</button>
      <button
        className="btn"
        style={{ backgroundColor: '#DBE2EF' }}
        onClick={() => paginate(+1)}
        disabled={(currentPage === Math.ceil(totalData / dataPerPage))? true : false}
        >Next Page</button>
    </div>
  )
}

export default Pagination