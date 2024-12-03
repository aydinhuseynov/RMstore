import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {

  const [billingToogle, setBillingTogle] = useState(true);
  const [shippingToogle, setShippingTogle] = useState(false);
  const [paymentToogle, setPaymentTogle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    adrress: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    setOrder({
      products: cart.products,
      orderNumber: "234",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    });
    navigate('/order-confirmation')
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 text-mainTextColor">
      <h3 className="text-2xl text-center font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingTogle(!billingToogle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToogle ? "" : "hidden"}`}>
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ener a name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter a email"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter a number"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingTogle(!shippingToogle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToogle ? "" : "hidden"}`}>
              <div>
                <label className="block">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Ener a new address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      adrress: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block">City</label>
                <input
                  type="ext"
                  name="city"
                  placeholder="Enter a new city"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter your zip code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentTogle(!paymentToogle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToogle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  id="cod"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label htmlFor="cod" className="block ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="cd"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label htmlFor="cd" className="block ml-2">
                  Debit Card
                </label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter Card Number"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter Card Holder Name"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="p-2 w-full border rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Sumary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800 mt-2">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            onClick={handleOrder}
            className="w-full rounded bg-blue-600 text-white py-2 mt-6 hover:bg-blue-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  setOrder: PropTypes.func.isRequired,
};
export default Checkout;
