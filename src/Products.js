import { Link } from "react-router-dom";
function Products(props) {
   
  return (
    <>
    <div style={{ justifyContent:"space-between", marginLeft:130}}>
      <div className="card"  style={{ width: 500 }} id="card">
        <img className="card-img-top" src={props.img1} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.category}</p>
        
          <p className="card-text">Rs.{props.price}</p>
          <Link to={`/product/${props.id}`}  className="btn1 btn-primary">Read More</Link>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Products;
