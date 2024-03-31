import React, { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'

const CartPage = () => {

    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        const storeCartItem = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItem(storeCartItem);
    }, [])

    // calculate  price

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;

    }

    // handle quantity

    const handleIncrese = (item) => {
        item.quantity += 1;
        setCartItem([...cartItem]);

        localStorage.setItem("cart", JSON.stringify(cartItem));

    }

    const handleDecrese = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItem([...cartItem]);

            localStorage.setItem("cart", JSON.stringify(cartItem));

        }
    }

    // handle delete


    const handleRemoveItem = (item) => {
        const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id)

        // update new cart

        setCartItem(updatedCart);
        updateLocalStorage(updatedCart)
    }

    const updateLocalStorage = (cart) => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }
    // cart subtotal

    const cartSubtotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    // order total


    const orderTotal = cartSubtotal;

    const [phone, setPhone] = useState("");

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className="cart-top">

                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>
                                            Product
                                        </th>

                                        <th className='cat-product'>
                                            Price
                                        </th>
                                        <th className='cat-product'>
                                            Quantity
                                        </th>
                                        <th className='cat-product'>
                                            Total
                                        </th>
                                        <th className='cat-product'>
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map((item, index) => {
                                            return <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to='/shop'><img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to={"/shop"}>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}

                                                </td>
                                                <td className='cat-quantity'>


                                                    <div className="cart-plus-minus">
                                                        <div className='dec qtybutton' onClick={() => handleDecrese(item)}>-</div>
                                                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrese(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>

                        {/* cart bottom */}

                        <div className="cart-bottom">

                            
                            <div className="shipping-box">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="calculate-shipping p-4">
                                                <h3>Calculate Shipping</h3>
                                                <hr />  
                                                <label htmlFor=""> <h6>Name</h6></label>
                                                <input type="text" name="" id="" placeholder='name'/>
                                                <label htmlFor=""><h6>Address</h6> </label>
                                                <input type="text" name="" id="" placeholder='address'/>
                                                <label htmlFor=""><h6>Phone number</h6> </label>
                                                <input type="tel" name="" id="" placeholder='number'/>
                                            </div>

                                        </div>
                                        <div className="col-md-6 col-12 mt-4 ">
                                            <h3>Cart Total</h3>
                                                 <ul className='lab-ul p-3'>    
                                                    <li>
                                                        <span className='pull-left'>Cart Subtotal</span>
                                                        <p>${cartSubtotal}</p>
                                                    </li>
                                                    <li>
                                                        <span className='pull-left'>Order Total</span>
                                                        <p>${orderTotal.toFixed(2)}</p>
                                                    </li>
                                                 </ul>
                                                 <div className="cart-checkout-box">

                                <form className='cart-checkout' >
                              <Link to="/shop"><button  className= 'btn btn-primary' type='submit'>Update Cart</button></Link>  
                                    <button className= 'btn btn-primary' type='submit'>Proceed Order</button>

                                </form>
                                {/* shoping box */}

                                
                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage
