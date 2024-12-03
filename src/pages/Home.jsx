import { Categories, mockData } from "../assets/productData";
import RealShop from "../assets/Images/rm-shop.webp";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  const showToast = (message) => {
    toast.success(message);
  };

  return (
    <React.Fragment>
       <ToastContainer position="top-right" autoClose={1000} />
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="text-white text-xs font-bold px-2 py-2.5" style={{background:'#3E31FA'}}>
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium hover:text-blue-600 "
                  style={{ color: "#0F2145" }}
                >
                  <div className="w-2 h-2 border border-blue-500 rounded-full mr-1.5 mt-1"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img
              src={RealShop}
              alt="Realmadrid shop"
              className="h-full w-full pl-1"
            />
            <div className="absolute top-16 left-10 text-white mt-5">
              <p className="text-white-600 mb-4">Official RMstore</p>
              <h2 className="text-2xl md:text-xl font-bold">
                REALMADRID SUITCASE
              </h2>
              <p className="mt-2.5 font-bold text-xl">Millions + Product</p>
              <button
                className="border border-white-600 px-12 py-2.5 mt-4 rounded hover:bg-blue-700 text-white-800
               font-semibold transform transition-transform duration-300 hover:scale-105"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />

        <div className="container mx-auto py-12 ">
          <h2
            className="text-2xl font-bold mb-6 text-center "
            style={{ color: "#0F2145" }}
          >
           Our Top Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 cursor-pointer">
            {products.products.slice(12, 17).map((product, index) => (
              <ProductCard showToast={showToast} key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
