import React, { useEffect, useState } from "react";
import MenuItem from "../../CommonPages/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] =useState([])

    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])

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
            menu.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
        }
    </div>
    <p className="text-lg text-center my-10 font-semibold border-b-2 w-2/12 mx-auto rounded-2xl border-black">
        view full menu
    </p>
    </section>
  );
};

export default PopularMenu;
