import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import { toast,ToastContainer } from "react-toastify";

const Shop = () => {
    const products = useSelector(state =>state.product);

    const showToast = (message) => {
      toast.success(message);
    };
    
    return (
    <div>
         <ToastContainer position="top-right" autoClose={1000} />
      <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24 ">
        <h2 className="text-2xl font-bold mb-6 text-center " style={{ color: '#0F2145' }}>Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 cursor-pointer">
          {
            products.products.map((product,index)=>(
              <ProductCard showToast={showToast} key={index} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
