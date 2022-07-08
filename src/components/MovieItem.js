import React from "react";
import Star from "./Star";

const MovieItem = ({ data }) => {
  return (
    <div className="flex flex-col bg-white p-3 rounded-2xl shadow-md">
      <div className="h-[300px]">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="py-4 ">
        <h3 className="text-xl text-black font-semibold">{data.title}</h3>
      </div>
      <p className="text-sm text-[#999] pb-6">{data.overview}</p>
      <div className="flex gap-x-2 flex-1 items-end pb-2">
        <Star></Star>
        <span className="text-sm font-semibold text-[#333]">
          {data.vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
