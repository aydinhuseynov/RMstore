import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/Images/mainLogo.webp';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearctTerm } from "../redux/productSlice";

const Navbar = () => {

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(true)
    const [search,setSearch] = useState();
    const dispatch = useDispatch();
    const navigate =useNavigate()

    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(setSearctTerm(search))
        navigate('/filter-data')
    }

    const openSignUp = () =>{
        setIsLogin(false);
        setIsModalOpen(true)
    }
    const openLogin = () =>{
        setIsLogin(true);
        setIsModalOpen(true)
    }
    const products = useSelector(state =>state.cart.products)
  return (
   <div>
     <nav className="bg=white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center"> 
            <div className="text-lg font-bold">
                <Link to="/" >
                <img src={Logo} className="mt-1" style={{ width:90,height:50 }} />
                </Link>
            </div>

            <div className="relative flex-1 mx-4">
                <form onSubmit={handleSearch}>
                <input
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-customPurple focus:border-customPurple"
                    type="text"
                    placeholder="Search product"
/>                    <FaSearch className="absolute top-3 right-3 text-gray-400"></FaSearch>
                </form>
            </div>

            <div className="flex items-center space-x-4">
                <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-2xl"/>
                    {
                       products.length > 0 &&(
                        <span className="absolute bottom-3 text-xs w-4 left-4 bg-blue-600 rounded-full flex justify-center items-center text-white">
                            {products.length}
                        </span>
                       )
                    }
                </Link>
                <button 
                onClick={()=>setIsModalOpen(true)}
                className="hidden md:block hover:text-blue-600 " style={{ color: '#0F2145' }}>
                    Login | Register
                </button>
                <button className="block md:hidden">
                    <FaUser/>
                </button>
            </div>
        </div>
        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold" style={{ color: '#0F2145' }}>
            <Link to="/" className="hover:underline hover:text-blue-600 transform transition-transform duration-300 hover:scale-110">Home</Link>
            <Link to="/shop" className="hover:underline hover:text-blue-600 transform transition-transform duration-300 hover:scale-110">Shop</Link>
            <Link to="/contact" className="hover:underline hover:text-blue-600 transform transition-transform duration-300 hover:scale-110">Contact</Link>
            <Link to="/about" className="hover:underline hover:text-blue-600 transform transition-transform duration-300 hover:scale-110">About</Link>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
        </Modal>
    </nav>
   </div>
  )
}

export default Navbar
