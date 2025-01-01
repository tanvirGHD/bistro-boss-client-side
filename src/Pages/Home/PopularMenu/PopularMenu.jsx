
import MenuItem from "../../CommonPages/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

  return (
    <section>
      <div className="text-center md:w-3/12 mx-auto mt-10">
        <p className="text-xl text-yellow-400 ">
        ---Check it out---
        </p>
        <h3 className="text-3xl border-y-2 py-2">FROM OUR MENU</h3>
      </div>

    <div className="grid md:grid-cols-2 gap-5 mt-9">
      {
        popular.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
      }
    </div>
    <div className="text-center">
    <button className="text-lg my-10 font-semibold border-b-2 w-2/12 mx-auto rounded-2xl border-black">
      view full menu
    </button>
    </div>
    </section>
  );
};

export default PopularMenu;
