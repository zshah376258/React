import React from 'react'
import Product from './Product'

function ProductList({data}) {
  return (
    <div className="flex flex-wrap gap-y-0 justify-evenly ali m-0 p-0">
        {
          data.map((item) => {
            const imageUrl = `https://26968mukhtar${item.thumbnail}`;
            const discountedPrice = item.price[0].value - item.price[1].value
            const discountedPercent=Math.round((discountedPrice/item.price[0].value)*100)

            return (
              
            <Product  
            key={item.uniqueID}
            name={item.name} 
            price={item.price[1].value} 
            displayPrice={item.price[0].value} 
            img={imageUrl}
            discount={discountedPercent}/>

           
          )})
        }
    </div>
  )
}

export default ProductList