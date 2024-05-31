import { useEffect, useState } from "react";

import axios from "axios";
import ProductList from "./Components/ProductList";
import Pagination from "./Components/Pagination";

function App() {
  
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [prod, setProd] = useState(0);
  let categoryId = 10014;
  
  useEffect(() => {
    async function getData() {
      try{
      const res = await axios.get(`https://26968mukhtar/search/resources/store/10201/productview/byCategory/${categoryId}`);
      
      setProd(res.data.recordSetCount);
      setData(res.data.catalogEntryView);

      }catch(error){  
        console.log("error fetching the data",error);
      }
      
    }
    getData();
  },[categoryId])

  const lastProductIndex = currPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = data.slice(firstProductIndex, lastProductIndex);

  return (
    
    <>
      <div >
        <ProductList data={currentProducts} />
        {
          prod>12 && 
          <Pagination 
          prod={prod} 
          productsPerPage={productsPerPage}
          setCurrPage={setCurrPage}
          currPage={currPage}/>
        }
      </div>
      </>
  );
}

export default App;
