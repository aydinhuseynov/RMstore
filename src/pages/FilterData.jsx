import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import notFound from '../assets/Images/no-product-found.png'

const FilterData = () => {

    const filteredProducts = useSelector(state=>state.product.filteredData)

  return (
   
      <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24 ">
      {
        filteredProducts.length > 0 ?
        <>
          <h2 className="text-2xl font-bold mb-6 text-center " style={{ color: '#0F2145' }}>Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 cursor-pointer">
          {
            filteredProducts.map((product,index)=>(
                <ProductCard key={index} product={product}/>
            ))
          }
        </div>
        </>
        : <div className="flex justify-center">
            <img src={notFound} alt="" />
        </div>
      }
      </div>
  )
}

export default FilterData
