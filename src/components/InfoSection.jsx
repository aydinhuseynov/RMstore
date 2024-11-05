import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa"
import { FaMoneyBill1Wave } from "react-icons/fa6"

const InfoSection = () => {

    const InfoItems=[
        {
            icon:<FaShippingFast className="text-3xl text-blue-600"/>,
            title:'Free Delivery',
            description:'Get your orders with no extra money'
        },
        {
            icon:<FaHeadset className="text-3xl text-blue-600"/>,
            title:'Support 7/24',
            description:'We are here to help you anytime'
        },
        {
            icon:<FaMoneyBill1Wave className="text-3xl text-blue-600"/>,
            title:'100% money back',
            description:'Your payment info is safe'
        },
        {
            icon:<FaLock className="text-3xl text-blue-600"/>,
            title:'Payment Secure',
            description:'Get your orders with no extra money'
        },
        {
            icon:<FaTag className="text-3xl text-blue-600"/>,
            title:'Discount',
            description:'Enjoy with our product with best prices'
        },
    ]
  return (
    <div className="bg-white pb-8 pt-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {InfoItems.map((item,index)=>(
            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md
            transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold" style={{ color: '#0F2145' }}>{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection
