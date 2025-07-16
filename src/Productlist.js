import Products from "./Products";
function Productlist(props){
    
    const prod =props.products1;

    return(
        <>
        <p style={{textAlign:"center",fontWeight:"bolder", fontSize:30}}>products</p>
        {/* <Products  {...prod[0]}/>
        <Products {...prod[1]}/>
        <Products {...prod[2]}/>
        <Products {...prod[3]}/>
        <Products {...prod[4]}/>
        <Products {...prod[5]}/> */}
        {
            prod && prod.map((p, index)=>{
               return(
                 <Products {...p} key={index}/>
               );
            })
        }
       ; </>
    )
}

export default Productlist;