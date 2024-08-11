import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchProducts} from "../redux/reducers/productReducer";
import {addToCart} from "../redux/reducers/cartReducer"

const ProductList = () => {
    const dispatch = useDispatch();
    // Use useSelector to access the products slice of the state
    const {products, loading, error} = useSelector((state) =>state.products);

 useEffect(()=>{
    dispatch(fetchProducts());
 },[dispatch]);

 const handleAddCart =(product) => {
    dispatch(addToCart(product));
 };

 if(loading){
    return <div>Loading...</div>;
 }

 if(error){
    return <div>Error :{error}</div>
 }

 return (
    <div className="product-list">

        {products.map((product) => (
             <div key={product.id} className="product">
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={() => handleAddCart(product)}>Add to Cart</button>
             </div>
        ))}

    </div>
 );

};

export default ProductList;