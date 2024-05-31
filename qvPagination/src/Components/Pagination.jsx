import React from 'react'

function Pagination({prod, productsPerPage, setCurrPage, currPage}) {

  let pages=[];
  for(let i=1;i<=Math.ceil(prod/productsPerPage);i++){
    pages.push(i);
  }

  return (
    <div>
      {
        pages.map((page, index) => <button key={index} className="hover:bg-gray-200 m-1 p-1 size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"{...page== currPage ? 'active':''} onClick={() => setCurrPage(page)}>{page}</button>)
      }

    </div>
  )
}

export default Pagination