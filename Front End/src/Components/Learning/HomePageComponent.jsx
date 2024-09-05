// import React, { useState } from 'react';
// import { FaSearch, FaStar, FaShare, FaCommentAlt } from 'react-icons/fa';
// import { IoFastFood } from 'react-icons/io5';
// import { BsChevronLeft, BsChevronRight, BsFillMoonFill, BsPerson, BsCartCheck } from 'react-icons/bs';



// const HomePageComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [theme, setTheme] = useState(false);

//   const restaurants = [
//     { id: 1, name: 'Burger Palace', rating: 4.5, cuisine: 'Fast Food', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8' },
//     { id: 2, name: 'Pasta Paradise', rating: 4.2, cuisine: 'Italian', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_84467.JPG' },
//     { id: 3, name: 'Sushi Sensation', rating: 4.8, cuisine: 'Japanese', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/ccbe50c2-ba6d-44d7-b9cd-683b018d88e6_131588.jpg' },
//     { id: 4, name: 'Taco Town', rating: 4.3, cuisine: 'Mexican', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898' },
//   ];

//   const cuisines = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese', 'Thai', 'American', 'Mediterranean'];

//   const offers = [
//     { id: 1, text: '50% OFF up to ₹100', code: 'WELCOME50' },
//     { id: 2, text: 'Free Delivery on your first order', code: 'FREEDEL' },
//     { id: 3, text: '20% OFF on orders above ₹500', code: 'BIGORDER' },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search functionality
//     console.log('Searching for:', searchTerm);
//   };

//   const toggleHighContrast = () => {
//     setTheme(!theme);
//   };

//   return (
//     <div className={`min-h-screen ${theme ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
//       <header className={`${theme ? 'bg-black text-white' : 'bg-white-500 text-black'} ml-3 shadow-md`}>
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <IoFastFood className="text-3xl mr-2" />
//             <h1 className="text-2xl font-bold mr-10">FoodieGo</h1>
//             <a href="#" className="text-lg hover:underline mr-10">Home</a>
//             <a href="#" className="text-lg hover:underline">Restaurants</a>
//           </div>
//           <nav>
//             <ul className="flex space-x-4 mt-10">
              
//           <form onSubmit={handleSearch} className="mb-8 mr-7">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for restaurants or dishes"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-[500px] p-2 rounded-full ${theme ? 'bg-white text-black' : 'bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-orange-500`}
//               aria-label="Search for restaurants or dishes"
//             />
//             <button
//               type="submit"
//               className={`absolute top-1/2 transform -translate-y-1/2 ${theme ? 'text-black' : 'text-gray-600'}`}
//               aria-label="Search"
//             >
//               <FaSearch className="text-xl ml-5" />
//             </button>
//           </div>
//         </form>
              
//             </ul>
//           </nav>
//           <ul className='flex space-x-4 mt-10'>
//           <li><a href="#" className="hover:underline"><BsCartCheck size={24} className='mb-10'/></a></li>
//               <li><a href="#" className="hover:underline"><BsPerson size={24}className='mb-10' /></a></li>
//             <li><button
//             onClick={toggleHighContrast}
//             className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 rounded`}
//             aria-label="Toggle high contrast mode">{theme ? <BsFillMoonFill /> : <BsFillMoonFill /> }</button></li>
//             </ul>
//         </div>
//       </header>

//       <main className="container mx-auto mt-8 px-4">
//         <section className="mb-12" aria-labelledby="trending-restaurants">
//           <h2 id="trending-restaurants" className="text-2xl font-bold mb-4">Trending Restaurants</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {restaurants.map((restaurant) => (
//               <div key={restaurant.id} className={`${theme ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105`}>
//                 <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg mb-2">{restaurant.name}</h3>
//                   <p className="text-sm mb-2">{restaurant.cuisine}</p>
//                   <div className="flex items-center">
//                     <FaStar className="text-yellow-400 mr-1" />
//                     <span>{restaurant.rating}</span>
//                   </div>
//                   <div className="mt-4 flex justify-between items-center">
//                     <button className={`${theme ? 'bg-white text-black' : 'bg-orange-500 text-white'} px-4 py-2 rounded`}>Order Now</button>
//                     <div className="flex space-x-2">
//                       <button aria-label="Share" className={`${theme ? 'text-white' : 'text-gray-600'} hover:text-orange-500`}>
//                         <FaShare />
//                       </button>
//                       <button aria-label="Reviews" className={`${theme ? 'text-white' : 'text-gray-600'} hover:text-orange-500`}>
//                         <FaCommentAlt />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="mb-12" aria-labelledby="popular-cuisines">
//           <h2 id="popular-cuisines" className="text-2xl font-bold mb-4">Popular Cuisines</h2>
//           <div className="flex flex-wrap gap-4">
//             {cuisines.map((cuisine, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 rounded-full ${theme ? 'bg-white text-black' : 'bg-orange-100 text-orange-800'} hover:bg-orange-200 transition-colors duration-300`}
//               >
//                 {cuisine}
//               </button>
//             ))}
//           </div>
//         </section>

//         <section className="mb-12" aria-labelledby="special-offers">
//           <h2 id="special-offers" className="text-2xl font-bold mb-4">Special Offers</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {offers.map((offer) => (
//               <div key={offer.id} className={`${theme ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 border-2 border-dashed ${theme ? 'border-white' : 'border-orange-500'}`}>
//                 <h3 className="font-bold text-lg mb-2">{offer.text}</h3>
//                 <p className={`text-sm ${theme ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Use code: <span className="font-bold">{offer.code}</span></p>
//                 <button className={`${theme ? 'bg-white text-black' : 'bg-orange-500 text-white'} px-4 py-2 rounded w-full`}>Apply Offer</button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className={`${theme ? 'bg-indigo-950 text-white' : 'bg-red-600 text-black'} py-8`}>
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="font-bold text-lg mb-4">About Foodie</h3>
//               <p>Foodie is your go-to app for delicious meals delivered right to your doorstep.</p>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:underline">FAQ</a></li>
//                 <li><a href="#" className="hover:underline">Contact Us</a></li>
//                 <li><a href="#" className="hover:underline">Terms of Service</a></li>
//                 <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
//               <div className="flex space-x-4">
//                 <a href="#" aria-label="Facebook" className="hover:text-orange-500"><i className="fab fa-facebook-f"></i></a>
//                 <a href="#" aria-label="Twitter" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
//                 <a href="#" aria-label="Instagram" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 text-center">
//             <p>&copy; 2023 Foodie. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePageComponent;
