import featured from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed mb-12">
      <div className="text-center md:w-3/12 mx-auto m-14 pt-5">
        <p className="text-xl text-yellow-400 ">---Check it out---</p>
        <h3 className="text-3xl border-y-2 py-2 text-white">FROM OUR MENU</h3>
      </div>
      <div className="md:flex justify-center items-center gap-5 bg-slate-500 bg-opacity-40 py-20 px-32">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="space-y-3 text-white">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" border-b-2 px-4 border-white rounded-b-xl">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
