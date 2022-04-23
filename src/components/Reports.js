import React, { useState, useEffect } from "react";

function News() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/reports")
      .then((response) => response.json())
      .then((data) => {
        setReports(data);
      });
  }, []);

  return (
    <div className="font-press-start flex flex-col md:flex-row md:gap-8 md:flex-wrap">
      <h2 className="font-bold text-2xl text-left pl-4 pt-6 pb-6 underline w-full md:text-center">
        Latest Reports
      </h2>
      <section className="flex flex-col md:flex-row md:flex-wrap gap-6">
        {reports.map((val) => {
          return (
            <article
              className="w-11/12 p-4 rounded-lg bg-black m-auto md:w-72 shadow-xl"
              key={val.id}
            >
              <img
                alt={val.title}
                src={val.imageUrl}
                className="rounded-lg md:h-48 md:w-80 xl:h-60 xl:w-96"
              />
              <p className="text-left font-bold py-3 text-white md:wrap">
                {val.title}
              </p>
              <div className="flex justify-start gap-4">
                <p className="text-left rounded-sm text-white bg-blue-900 p-2 inline">
                  {val.newsSite}
                </p>
                <button
                  className="text-left rounded-sm text-white bg-blue-900 p-2 inline"
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

export default News;
