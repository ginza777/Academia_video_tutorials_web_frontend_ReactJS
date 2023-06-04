import React, {useEffect, useState} from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard
async function fetchData() {
    const url = 'http://127.0.0.1:8000/api/blogposts/'; // API url manzili

    try {
        const response = await fetch(url, {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }, // Gerekli bo'lsa, kirish ma'lumotlarini (headers, body, etc.) qo'shing
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); // JSON ma'lumotlarini olish

        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
const Hblog = () => {
          const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const apiData = await fetchData();
            setBlog(apiData.results);
        };

        fetchDataAndSetData();
    }, []);
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow' key={val.id}>
                <div className='img'>
                  <img src={val.image} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.username}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.created_at}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.comments_count}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
            <p>{val.description.slice(0, 50)}.....</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
