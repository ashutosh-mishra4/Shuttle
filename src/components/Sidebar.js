import React, {useState, useEffect} from 'react'
import { Tab } from '@headlessui/react'

function Sidebar() {

    const [post, setPost] = useState([])
    const [report, setReport] = useState([])

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v3/blogs')
        .then(response => response.json())
        .then((data) => {
            setPost(data)
        })
    }, [])

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v3/reports')
        .then(response => response.json())
        .then((data) => {
            setReport(data)
        })
    }, [])


    return (
        <Tab.Group>
            <div className="lg:w-1/2">
            <Tab.List className="flex justify-around">
                <Tab className="font-roboto  p-2 border-b-4 border-blue-900 hover:bg-blue-900 hover:text-white">Posts</Tab>
                <Tab className="font-roboto  p-2 border-b-4 border-blue-900 hover:bg-blue-900 hover:text-white">Reports</Tab>
            </Tab.List>
            <Tab.Panels className="lg:overflow-x-auto lg:h-96 ">
                <Tab.Panel className="lg:block" id="posts">
                    {post.map((val, key) => {
                        return (
                            <div key={key}>
                                <div className="text-left p-4">
                                    <p className="text-lg font-bold font-roboto cursor-pointer"
                                        onClick={ () => 
                                            {window.location.href = val.url}
                                        }>{val.title}
                                    </p>  
                                    <p className="font-montserrat">{val.publishedAt}</p>  
                                </div>
                            </div>
                        )})
                    }
                </Tab.Panel>
                <Tab.Panel>
                    {report.map((val, key) => {
                        return (
                            <div key={key} id="reports">
                                <div className="text-left p-4">
                                    <p className="text-lg font-bold font-roboto cursor-pointer"
                                        onClick={ () => 
                                            {window.location.href = val.url}
                                        }>{val.title}
                                    </p>  
                                    <p className="font-montserrat">{val.publishedAt}</p>  
                                </div>
                            </div>
                        )
                    })}
                </Tab.Panel>
          </Tab.Panels>
          </div>
        </Tab.Group>
    )
}

export default Sidebar
