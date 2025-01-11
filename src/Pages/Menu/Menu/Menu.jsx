
import { Helmet } from "react-helmet-async";
import Cover from "../../CommonPages/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";





const Menu = () => { 
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* Main Cover */}
      <div className="text-center md:w-3/12 mx-auto my-10">
        <p className="text-lg text-yellow-400 ">
        "Don't Miss"
        </p>
        <h3 className="text-3xl border-y-2 py-2">Today's Offer</h3>
      </div>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
      {/* pizzaImg menu items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
