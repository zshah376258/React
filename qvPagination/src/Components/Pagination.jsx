import React from 'react'

function Pagination({prod, productsPerPage, setCurrPage, currPage}) {

  let pages=[];
  for(let i=1;i<=Math.ceil(prod/productsPerPage);i++){
    pages.push(i);
  }

  return (
    <div>
      {
        pages.map((page, index) => <button key={index} className="m-1 p-1 border border-black"{...page== currPage ? 'active':''} onClick={() => setCurrPage(page)}>{page}</button>)
      }

    </div>
  )
}

export default Pagination