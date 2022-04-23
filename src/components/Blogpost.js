import React, { useState, useEffect } from "react";

function Blogpost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/blogs")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div className="flex font-press-start flex-col md:flex-row md:gap-8 md:flex-wrap">
      <h2 className="font-bold text-2xl text-left pl-4 pt-6 pb-6 underline w-full md:text-center">
        Latest Blogs
      </h2>
      <section className="flex flex-col md:flex-row md:flex-wrap gap-6">
        {post.map((val) => {
          return (
            <article
              className="w-11/12 p-4 bg-black rounded-lg m-auto md:w-72 shadow-xl"
              key={val.id}
            >
              <img
                alt={val.title}
                src={val.imageUrl}
                className="rounded-lg md:h-48 md:w-80 xl:h-60 xl:w-96 object-cover object-top"
              />
              <p className="text-left text-white font-bold py-3 md:wrap">
                {val.title}
              </p>
              <div className="flex justify-start gap-4">
                <p className="text-center rounded-sm text-white bg-blue-900 p-2 inline">
                  {val.newsSite}
                </p>
                <button
                  className="text-center rounded-sm text-white bg-blue-900 p-2 inline"
                  onClick={() => {
                    window.location.href = val.url;
                  }}
                >
                  Read More
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Blogpost;
