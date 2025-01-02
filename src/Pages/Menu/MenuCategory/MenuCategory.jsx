import Cover from "../../CommonPages/Cover/Cover";
import MenuItem from "../../CommonPages/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-12">
    {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
