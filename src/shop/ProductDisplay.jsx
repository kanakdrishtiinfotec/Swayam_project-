import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos!Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quos!"
const ProductDisplay = ({ item }) => {

    const { name, id, price, seller, quantity, img} = item;

    const [prequantity, setPrequantity] = useState(quantity);
    const [size, setSize] = useState("Select size");
    const [colour, setColour] = useState("Select Colour");
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColor = (e) => {
        setColour(e.target.value)
    }

    const handleDecrese= ()=>{
        if(prequantity>1){
            setPrequantity(prequantity -1)
        }

    }
const handleIncrese= ()=>{
        setPrequantity(prequantity + 1)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        const product = {
            id: id,
            img: img,
            name: name,
            price:price,
            quantity : prequantity,
            colour : colour,
            size : size,
            

        }
        // console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item)=> item.id === id);

        if(
            existingProductIndex !== -1
        ){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }

        // update local 
        localStorage.setItem("cart", JSON.stringify(existingCart));

        setColour("Select colour");
        setSize("Select Size");
        setPrequantity(1);
    }



    return (
        <div>

            <h4>
                {name}
            </h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
            </p>
            <h4>Price: ₹{price}</h4>
            <h6>Description: {desc}</h6>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="Select-product size mb-2">
                        <select value={size} onChange={handleSizeChange}>
                            <option value=""> Select size</option>

                            <option value="md">sm</option>
                            <option value="lg">lg</option>
                            <option value="xl">xl</option>
                            <option value="xxl">xxl</option>

                        </select>

                    </div>
                    <div className="Select-product color mx-1 mb-2">

                        <select value={colour} onChange={handleColor}>
                            <option value=""> Select color</option>

                            <option value="md">Blue</option>
                            <option value="lg">Black</option>
                            <option value="xl">Red</option>
                            <option value="xxl">White</option>

                        </select>
                    </div>

                    {/* cart plus minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrese}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e)=> setPrequantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrese}>+</div>
                    </div>

                    {/* button */}
<div>

         <button type='submit' className='lab-btn mx-2'>
                       <span>Add to Cart</span> 
                    </button>
                    <Link to="/cart-page">
                    <button type='submit' className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </button>
                    </Link>
                    </div>
           
                </form>
            </div>
        </div>
    )
}


export default ProductDisplay
