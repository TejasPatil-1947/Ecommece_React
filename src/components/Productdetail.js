import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

function Productdetail() {
    const params = useParams();
    const{products:prod} =useApi(`http://localhost:3001/product/${params.id}`);
    console.log(prod);

    const navigate =   useNavigate();

    const handleGoBack =()=>{
        setTimeout(() => {
            navigate('/products')
        }, 1000);
        
    }


    // console.log("Id:    ", params.id); // to fetch id from url
    return (
    <>
    
        <div className="card detailsCard" style={{ width: 400 }}>
            <img className="card-img-top" src={prod.img1} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{prod.name}</h4>
                <h6 className="card-title">Rs: {prod.price}</h6>
                <p className="card-text">{prod.description}</p>
                <p className="card-text">{prod.category}</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                <Link to="" style={{height:50,textAlign:"center"}} onClick={handleGoBack} className="btn btn-primary"><p style={{display:"flex", justifyContent:"center",marginTop:6}}>Go Back</p></Link>
                </div>
            </div>
        </div>


    </>
    );
}

export default Productdetail;