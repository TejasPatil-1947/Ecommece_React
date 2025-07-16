import { useEffect, useState } from "react";
import Productlist from "./Productlist";
import { useApi } from "./hooks/useApi";
function App() {
    // const [products, setProducts]    = useState([]);

    const [url, setUrl] = useState(`http://localhost:3001/product`);

    const { products: product, loading: load } = useApi(url);

    // console.log(products);

    // useEffect(()=>{
    //      fetch(url)
    //     .then(data => data.json())
    //     .then(res => setProducts(res))
    // },[url])

    // console.log(products);
    // const fetchdata =()=>{
    //     fetch(`http://localhost:3001/product`)
    //     .then(data => data.json())
    //     .then(res => setProducts(res));
    // }
    // fetchdata();
    console.log("Render");

    return (<>
        <p style={{ textAlign: "center", fontWeight: "bolder", fontSize: 30 }}>product list</p>
      
        <div style={{ marginLeft: 450, display:"flex",justifyContent: "space-between",marginLeft:20  }}>
            <button className="btn btn-dark btn-lg" onClick={() => setUrl(`http://localhost:3001/product`)} >All</button>
            <button className="btn btn-danger btn-lg" onClick={() => setUrl(`http://localhost:3001/product?category=SmartPhone`)}>Mobile</button>
            <button className="btn btn-warning btn-lg" onClick={() => setUrl(`http://localhost:3001/product?category=Laptop`)} >Laptop</button>
            <button className="btn btn-primary btn-lg" onClick={() => setUrl(`http://localhost:3001/product?category=Watch`)} >Watch</button>
            <button className="btn btn-info btn-lg" onClick={() => setUrl(`http://localhost:3001/product?category=TV`)} >TV</button>
        </div>
       
        <Productlist products1={product} />
        {load && <div className="spinner-border m-5" role="status">
        </div>}
    </>
    );
}

export default App;

// hook = useEffect : it will call api only once.
