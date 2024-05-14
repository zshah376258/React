import { useState } from "react";
import Product from "./Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-wrap gap-y-0 justify-evenly ali m-0 p-0 ">
        <Product name="Nike v1 air" price={399} displayPrice={999} discount={30}/>
        <Product name="Puma z1" price={599} displayPrice={799} discount={40}/>
        <Product name="Nike air jordan" price={699} displayPrice={999} discount={60}/>
        <Product name="Nike sports"  displayPrice={599} discount={70}/>
        <Product name="Gucci sneaker" price={799} discount={20}/>
        <Product name="Addidas gamma force" price={899} displayPrice={999}/>
        <Product name="Nike air force"  displayPrice={999} discount={50}/>
        <Product name="Nike killshot" price={467} discount={20}/>
        <Product price={644} displayPrice={999}/>
        <Product price={325} discount={50}/>
      </div>
    </>
  );
}

export default App;
