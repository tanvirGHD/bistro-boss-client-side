import { Link } from "react-router-dom";
import Cover from "../../CommonPages/Cover/Cover";
import MenuItem from "../../CommonPages/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-12">
    {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {items.map(item => 
          <MenuItem key={item._id} item={item}></MenuItem>
        )}
      </div>

      {/* <Link to={`/order/${title}`}> */}
      <Link to={`/order/${title}`}>
      <button className="text-lg my-10 flex justify-center font-semibold border-b-2 w-2/12 mx-auto rounded-2xl border-black hover:bg-black hover:text-white">
      Order your favorite food
      </button>
      </Link>

    </div>
  );
};

export default MenuCategory;
