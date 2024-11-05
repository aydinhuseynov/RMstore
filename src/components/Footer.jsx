import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
  FaTwitch,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";
import logoRm from "../assets/Images/logoRM.webp";
import amex from "../assets/Images/payment1.svg";
import apple from "../assets/Images/payment2.svg";
import visa from "../assets/Images/payment3.svg";
import discover from "../assets/Images/payment4.svg";
import google from "../assets/Images/payment5.svg";
import master from "../assets/Images/payment6.svg";
import union from "../assets/Images/unionPay.svg";
const Footer = () => {
  return (
    <footer className="text-white p-8" style={{ background: "#102341" }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                How to Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Track My Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop Locator
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Do You Need Help?</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQS
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-blue-800 p-6 rounded-lg text-center">
          <h3 className="font-bold mb-2">Become a Madridista</h3>
          <p className="mb-4">Sign up and receive 5% off your first purchase</p>
          <a
            href="#"
            className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Sign up now
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-800 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto space-y-4 md:space-y-0">
          <div>
            <h3 className="font-bold text-lg">Payments Accepted</h3>
            <div className="flex items-center space-x-2 mt-2">
              <img src={amex} alt="Amex" className="h-6" />
              <img src={apple} className="h-6" />
              <img src={discover} className="h-6" />
              <img src={visa} className="h-6" />
              <img src={union} className="h-6" />
              <img src={master} className="h-6" />
              <img src={google} className="h-6" />
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <img src={logoRm} className="h-7" />
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaSnapchatGhost size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTiktok size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitch size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="flex items-center justify-center space-x-1">
            <FaRegCopyright />{" "}
            <span>Real Madrid CF Shop 2024 All Rights Reserved</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
