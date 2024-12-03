import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptybag.webp";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAdress from "../components/ChangeAdress";
import { increaseQuantity,decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";



const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [adress,setAdress] = useState('Madrid,Spain');
  const [isModalOpen,setIsModalOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 text-mainTextColor">
       {cart.products.length > 0 ? (
        <div>
           <h3 className="text-3xl text-center font-semibold mb-4">Your bag</h3>
           <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                    <p>PRODUCTS</p>
                    <div className="flex space-x-8">
                        <p >PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                    </div>
                </div>
                <div>
                    {
                        cart.products.map((product)=>(
                            <div key={product.id}
                            className="flex items-center justify-between p-3 border-b"
                            >
                                <div className="md:flex items-center space-x-4">
                                    <img className="w-16 h-16 object-contain rounded"
                                     src={product.image}
                                      alt={product.name} 
                                     />
                                    <div className="flex-1 ml-4">
                                        <h5 className="text-lg font-semibold">{product.name}</h5>
                                    </div>
                                </div>
                                <div className="flex space-x-12 items-center">
                                    <p>
                                        ${product.price}
                                    </p>
                                    <div 
                                    className="flex items-center justify-center border"
                                    >
                                        <button
                                        onClick={()=>dispatch(decreaseQuantity(product.id))}
                                         className="text-xl font-bold px-1.5 border-r"
                                         >
                                            -
                                        </button>
                                        <p 
                                        className="text-xl px-2">
                                            {product.quantity}
                                        </p>
                                        <button 
                                        onClick={()=>dispatch(increaseQuantity(product.id))}
                                        className="text-xl px-1 border-l">
                                            +
                                        </button>
                                    </div>
                                    <p>${(product.quantity*product.price).toFixed(2)}</p>
                                    <button 
                                    onClick={()=>dispatch(removeFromCart(product.id))}
                                    className="text-blue-500 hover:text-blue-800"
                                    >
                                        <FaTrashAlt/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">BAG TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                    <span className="text-sm">Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                </div>
                <div className="mb-4 border-b pb-2">
                    <p>Shipping:</p>
                    <p >Shipping to:</p>
                    <span className="text-xs font-bold">{adress}</span>
                    <button 
                    onClick={()=> setIsModalOpen(true)}
                    className="text-blue-500 hover:underline mt-1 ml-2">
                        Change adress
                    </button>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Total price</span>
                    <span>{cart.totalPrice.toFixed(2)}</span>
                </div>
                <button 
                onClick={()=>navigate('/checkout')}
                className="rounded w-full bg-blue-500 text-white py-2 hover:bg-blue-800">
                    Proced to checkout
                </button>
            </div>
           </div>
           <Modal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
            >
                <ChangeAdress setAdress={setAdress}  setIsModalOpen={setIsModalOpen}/> 
            </Modal>
        </div>
      ) : (
        <div>
        <h1 className="text-center font-bold mt-2 text-2xl" style={{ color: '#0F2145' }}>
          Your bag is empty
        </h1>
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty bag" className="h-80" />
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Cart;
