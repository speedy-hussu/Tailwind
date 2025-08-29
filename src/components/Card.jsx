function Card({ title, desc, img }) {
  return (
    <div className=" w-20 flex flex-col items-center text-white m-5 md:w-45">
      <img src={img} className="w-30 p-2 h-auto mb-2 bg-white rounded-full" />
      <h1 className="font-bold md:text-xl">{title}</h1>
      <p className="md:text-lg text-center text-gray-300">{desc}</p>
    </div>
  );
}

export default Card;
