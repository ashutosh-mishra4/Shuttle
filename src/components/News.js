import React, {useState, useEffect} from 'react'

function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://spaceflightnewsapi.net/api/v2/articles')
        .then(response => response.json())
        .then((data) => {
          setNews(data)
        })
    }, [])  

    return (
        <div className="md:flex md:gap-8 md:flex-wrap">
            <h2 className="font-bold font-roboto text-2xl text-left pl-4 pt-6 underline w-full md:text-center">Latest News</h2>
            {news.map((val) => {
                return (
                        <div className="w-11/12 m-auto md:w-1/3 xl:w-1/3" key={val.id}>
                            <img src={val.imageUrl} className="rounded-lg mt-10 shadow-md md:h-48 md:w-80 xl:h-60 xl:w-96" />
                            <p className="text-left font-bold py-3 font-roboto md:wrap">{val.title}</p>
                            <div className="flex justify-start gap-4">
                                <p className="text-left rounded-sm text-white font-montserrat bg-blue-900 p-2 inline">{val.newsSite}</p>
                                <button className="text-left rounded-sm text-white font-montserrat bg-blue-900 p-2 inline" onClick={() => {window.location.href = val.url}}>Read More</button>
                            </div>
                        </div>
                )
            })}          
        </div>
    )
}

export default News
