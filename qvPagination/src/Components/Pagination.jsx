import React from 'react'

function Pagination({prod, productsPerPage, setCurrPage, currPage}) {

  let pages=[];
  for(let i=1;i<=Math.ceil(prod/productsPerPage);i++){
    pages.push(i);
  }

  return (
    <div className='flex justify-center '>
    <div>
      {
        pages.map((page, index) => <button
        key={index}
        className={`m-1 p-1 size-8 rounded-md border border-gray-300 bg-cyan-100 text-center font-semibold text-gray-900 ${page === currPage ? 'bg-slate-500 text-white' : ''}`}
        onClick={() => setCurrPage(page)}
      >
        {page}
      </button>)
      }

    </div>
    </div>
  )
}

export default Pagination