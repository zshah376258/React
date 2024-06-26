import { useEffect, useState } from "react";
import Product from "./Components/Product";
import Pagination from "./Components/Pagination";
import axios from "axios";

function App() {
  
  const [data, setData] = useState([]);
  const [prod, setProd] = useState(0);
  let categoryId = 10006;
  
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

  return (
    
    <>
      <div className="flex flex-wrap gap-y-0 justify-evenly ali m-0 p-0 ">
        {
          data.slice(0,12).map((item) => {
            const imageUrl = `https://26968mukhtar${item.thumbnail}`;
            const discountedPrice = item.price[0].value - item.price[1].value
            const discountedPercent=(discountedPrice/item.price[0].value)*100

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
        {
          prod>12 && <Pagination/>
        }
      </div>
      </>
  );
}

export default App;
