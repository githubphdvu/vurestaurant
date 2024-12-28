import {useState} from 'react'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
//////////////////////////
const FOOD = [
  {
    title: 'Phở Bò',
    price: '$12',
    description: 'Beef Noodle Soup',
  },
  {
    title: 'Bánh Mì Thịt Nướng',
    price: '$8',
    description: 'Grilled Pork Sandwich',
  },
  {
    title: 'Gỏi Cuốn',
    price: '$7',
    description: 'Fresh Spring Rolls',
  },
  {
    title: 'Cơm Tấm',
    price: '$10',
    description: 'Broken Rice with Grilled Pork',
  },
  {
    title: 'Bún Chả Giò',
    price: '$9',
    description: 'Vermicelli with Egg Rolls',
  },
]
const DRINKS = [
  {
    title: 'Bourbon Whiskey',
    price: '$16',
    description: 'Burning Chair, California – 88 proof, 2oz',
  },
  {
    title: "Japanese Whiskey",
    price: '$50',
    description: 'Hakushu 12, Kyoto – 86 proof, 2oz',
  },
  {
    title: 'American Whiskey',
    price: '$18',
    description: '10th Street STR Single Malt, San Jose, CA – 92 proof, 2oz',
  },
  {
    title: 'Rum',
    price: '$14',
    description: 'Appleton Estate 12, Jamaica',
  },
  {
    title: 'Vodka',
    price: '$10',
    description: 'Tito’s, Austin, TX',
  },
]
const AWARDS = [
  {
    imgUrl: 'leadcoder.jpg',
    title: 'LeadCoder',
    subtitle: 'Recognizes for exceptional leadership, innovation, and expertise in coding while cooking.',
  },
  {
    imgUrl: 'michelinbibgourmand.jpg',
    title: 'MICHELIN Bib Gourmand',
    subtitle: 'Experience our high quality dining at a reasonable price.',
  },
  {
    imgUrl: 'michelinstar.jpg',
    title: 'Michelin star',
    subtitle: 'Experience our top quality ingredients, where dishes with distinct flavours are prepared to a consistently high standard',
  },
  {
    imgUrl: 'hospitality.jpg',
    title: 'AA Hospitality Awards',
    subtitle: 'Experience our best of the best in Hospitality',
  },
  {
    imgUrl: 'bestchef.jpg',
    title: 'Best Chef',
    subtitle: 'Experience our amazing food, from a modern chef, a leader, and one that elevates food with technology or science',
  },
]
//////////////////////////
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav  id="home" className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <a href="https://alanvu.vercel.app" className="flex items-center">
        <img src="https://projectsav.netlify.app/logo1.jpg" alt="" className="h-10 rounded-md"/>
      </a>
      <a href="#home" className="flex items-center">
        <img src='phologo.jpg' alt="" className="w-40 h-14 rounded-full"/>
      </a>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-yellow-400 transition duration-300">About</a>
        <a href="#menu" className="hover:text-yellow-400 transition duration-300">Menu</a>
        <a href="#awards" className="hover:text-yellow-400 transition duration-300">Awards</a>
        <a href="#hours" className="hover:text-yellow-400 transition duration-300">Hours</a>
        <a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
      </div>      
      <div className="md:hidden flex items-center">{/*Hamburger menu for medium screens or smaller*/}
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} className="cursor-pointer"/>
        {toggleMenu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50">
            <MdOutlineRestaurantMenu fontSize={27} className="absolute top-6 right-6 cursor-pointer text-white" onClick={() => setToggleMenu(false)}/>
            <a href="#about" onClick={() => setToggleMenu(false)} className="text-white text-lg my-2 hover:text-yellow-400 transition duration-300">About</a>
            <a href="#menu" onClick={() => setToggleMenu(false)} className="text-white text-lg my-2 hover:text-yellow-400 transition duration-300">Menu</a>
            <a href="#awards" onClick={() => setToggleMenu(false)} className="text-white text-lg my-2 hover:text-yellow-400 transition duration-300">Awards</a>
            <a href="#hours" onClick={() => setToggleMenu(false)} className="text-white text-lg my-2 hover:text-yellow-400 transition duration-300">Contact</a>
            <a href="#contact" onClick={() => setToggleMenu(false)} className="text-white text-lg my-2 hover:text-yellow-400 transition duration-300">Join</a>
          </div>
        )}
      </div>
    </nav>
  )
}
const Hero = () => (
  <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
    <div className="text-center max-w-2xl">
      <h1 className="flex flex-col items-center text-4xl md:text-5xl font-bold mb-4 text-pink-500">
        Your great dining experience <MdOutlineRestaurantMenu/>
      </h1>
      <p className="text-lg md:text-xl  mb-6" style={{ margin: '2rem 0' }}>
        Your food will be of the highest quality, made with luxurious ingredients, and served in unique and beautiful presentations.
      </p>
      <a href="#menu" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Menu</a>
    </div>
    <div className="mt-12 max-w-md md:max-w-lg">
      <img src='foods.jpg' alt="" className="w-full rounded-lg shadow-lg"/>
    </div>
  </div>
)
const About = () => (
  <div className="py-12 px-6" id="about">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="text-left">
      🍴<span className="text-4xl font-bold text-pink-500 mb-4">About Us</span>
        <p className="text-lg  leading-relaxed mb-6">We welcome you to sit back, unwind, and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.</p>
        <a href="#menu" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Menu</a>
      </div>
      <div className="flex justify-center">
        <img src='restaurant.jpg' alt="" className="w-full max-w-md rounded-lg shadow-lg"/>
      </div>
      <div className="text-right">
      🍴<span className="text-4xl font-bold text-pink-500 mb-4">Our History</span>
        <p className="text-lg  leading-relaxed mb-6">Established 5 decades ago, 3rd generation, you will feel us like the perfect dining companion. The space is plain likable, featuring a chic dining room set with sleek furnishings, silver bark-like wallpaper, and black-and-white photos</p>
        <a href="#home" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Home</a>
      </div>
    </div>
  </div>
)
const MenuItem = ({ title, price, description }) => (
  <div className="flex flex-col mb-6">
    <div className="flex justify-between items-center">
      <div className="text-gold font-bold text-lg"><p>{title}</p></div>
      <div className="text-white font-medium"><p>{price}</p></div>
    </div>
    <div className="mt-2"><p className="text-gray-400">{description}</p></div>
  </div>
)
const Menu = () => (
  <div className="bg-black text-white py-12 px-6" id="menu">
    <h1 className="text-center text-gold text-4xl font-bold mb-12">Menu</h1>
    <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start gap-12">
      <div className="lg:w-1/3">
      <p className="text-pink-500 text-2xl font-semibold mb-4 text-center">Food</p>
        {FOOD.map((food,i)=><MenuItem key={food.title + i} title={food.title} price={food.price} description={food.description}/>)}
      </div>
      <div className="flex justify-center lg:w-1/3"><img src='noodlesoup.jpg' alt="" className="rounded-lg shadow-lg max-h-96 object-cover"/></div>
      <div className="lg:w-1/3">
        <p className="text-pink-500 text-2xl font-semibold mb-4 text-center">Drinks</p>
        {DRINKS.map((drink,i)=><MenuItem key={drink.title+i} title={drink.title} price={drink.price} description={drink.description}/>)}
      </div>
    </div>
    <div className="text-center mt-12">
    <a href="#home" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Home</a>
    </div>
  </div>
)
const Chef = () => (
  <div className="bg-black text-white py-12 px-6">
    <div className="flex justify-center mb-8"><img src='chef.jpg' alt="" className="rounded-full shadow-lg w-48 h-48 object-cover"/></div>
    <div className="text-center mb-8">
      <p className="text-3xl font-semibold text-gold mb-4">⚔️ <span className="headtext__cormorant">I cook and code for you ⚒️</span></p>
        <div className="app__chef-content_quote flex justify-center items-center mb-6">          
          <p className=" text-lg italic text-gray-300 max-w-3xl">Cooking is like coding. Just as there are only so many objects, functions, attributes, properties, or arguments, there are only so many flavors – it’s how you combine them that sets you apart</p>
        </div>
    </div>
    <div className="app__chef-sign text-center">
      <p className="text-xl font-semibold text-gold mb-4">Chef Cook and Chief Code</p>
      <img src='signature.jpg' alt="" className="mx-auto w-40" />
    </div>
  </div>
)
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex items-center space-x-4 bg-gray-800 rounded-lg p-4 shadow-lg">
    <img src={imgUrl} alt='' className="w-16 h-16 rounded-full object-cover" />
    <div>
      <p className="text-lg font-semibold text-gold">{title}</p>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </div>
  </div>
)
const Awards = () => (
  <div className="bg-black text-white py-12 px-6" id="awards">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gold mt-4">🎗️ Awards</h1>
    </div>
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {AWARDS.map(award=><AwardCard award={award} key={award.title} />)}
      </div>
      <div className="lg:w-1/2"><img src='laurels.jpg' alt='' className="w-full rounded-lg shadow-lg" /></div>
    </div>
  </div>
)
const Hours = () => (
  <div id="hours" className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl font-bold text-gold mb-12">Open Hours</h1>
      <p className="text-lg  mb-4">Mon - Fri: 10:00 am - 9:00 pm</p>
      <p className="text-lg  mb-6">Sat - Sun: 10:00 am - 11:00 pm</p>  
      <a href="#home" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">Home</a>
    </div>
    <img src='findus.jpg' alt="" className="lg:w-1/2 rounded-lg shadow-lg object-cover"/>
  </div>
)
//////////////////////////
const Newsletter = () => (
  <div className="py-12 px-6 text-center">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Subscribe</h1>
      <p className="text-gray-300">Subscribe to our weekly newsletters</p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input type="email" placeholder="Enter your email address" className="py-2 px-4 rounded-lg w-full sm:w-96 bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold"/>
      <button type="button" className="py-2 px-6 rounded-lg bg-gold text-black font-semibold hover:bg-yellow-500 transition duration-300">Subscribe</button>
    </div>
  </div>
)
const FooterOverlay = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 bg-pattern"></div>
  </div>
)
const Contact = () => (
  <div className="bg-black text-white pt-16 pb-8" id="contact">
    <FooterOverlay />
    <Newsletter />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-16 py-12">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold text-gold mb-4">Contact</h1>
        <p className="text-gray-300">101 3rd St, San Jose, CA, USA</p>
        <p className="text-gray-300 mt-2">800-344-1230</p>
      </div>
      <div className="text-center">
        <img src='phologo.jpg' alt="" className="mx-auto mb-6 w-24 rounded-full"/>
        <p className="italic">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="flex justify-center gap-6 mt-4 text-gold">
          <FiFacebook className="text-2xl cursor-pointer hover:text-yellow-500" />
          <FiTwitter className="text-2xl cursor-pointer hover:text-yellow-500" />
          <FiInstagram className="text-2xl cursor-pointer hover:text-yellow-500" />
        </div>
        <a href="#home" className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 mt-4">Home</a>
      </div>
      <div className="text-center lg:text-right">
        <h1 className="text-2xl font-bold text-gold mb-4">Open Hours</h1>
        <p className="text-gray-300">Monday-Friday:</p>
        <p className="text-gray-300">08:00 am - 9:00 pm</p>
        <p className="text-gray-300 mt-4">Saturday-Sunday:</p>
        <p className="text-gray-300">00:00 am - 11:00 pm</p>
      </div>
    </div>
    <footer className="bg-gray-900 text-center p-4">2021 Vu-Restaurant</footer>
  </div>
)
//////////////////////////
export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Awards />
      <Hours />
      <Contact />
    </div>
  )
}