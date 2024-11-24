import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product,showToast  }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    showToast("Product added successfully!");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="bg-white p-4 shadow rounded relative border
    transform transition-transform duration-300 hover:scale-95"
      >
        <img src={product.image} className="w-full h-48 object-contain mb-4" />
        <h3 className="text-lg font-semibold" style={{ color: "#0F2145" }}>
          {product.name}
        </h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <div
          onClick={(e) => handleAddToCart(e, product)}
          className="absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 bg-blue-600 
       text-white text-sm rounded-full group transition-all 
       duration-500 hover:bg-blue-700 hover:w-32 max-w-xs p-2 cursor-pointer"
        >
          <span className="group-hover:hidden mb-1">+</span>
          <span className="hidden group-hover:block mb-1">Add to cart</span>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  showToast: PropTypes.func.isRequired,
};
export default ProductCard;
