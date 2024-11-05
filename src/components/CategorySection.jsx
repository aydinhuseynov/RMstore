import male from "../assets/Images/categoryMale.webp";
import female from "../assets/Images/categoryFemale.webp";
import kids from "../assets/Images/categoryKids.webp";
const CategorySection = () => {
  const categories = [
    {
      title: "Male",
      imageUrl: male,
    },
    {
      title: "Female",
      imageUrl: female,
    },
    {
      title: "Kids",
      imageUrl: kids,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className='relative h-64 
        transform transition-transform duration-300 hover:scale-95 cursor-pointer">'
        >
          <img
            src={category.imageUrl}
            alt=""
            className="w-full h-full rounded-lg shadow-md"
          />
          <div className="absolute top-2 left-2 ">
            <p className="text-xl font-bold text-blue-600" style={{ color: '#0F2145' }}>{category.title}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CategorySection;
