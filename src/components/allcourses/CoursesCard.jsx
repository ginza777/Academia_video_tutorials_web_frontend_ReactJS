import React from "react"
import "./courses.css"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"



function CoursesCard() {
    // const
    const baseURL = "http://127.0.0.1:8000/api/courses/"
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(baseURL)
            .then(res => res.json())
            .then((results) => {
                setCourses(results.results)

            }, (error) => {
                console.log(error)
            })
    }, [])


    const handleEnrollClick  = ({ id, title }) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <>
            <section className='coursesCards'>
                <div className='containercards'>
                    {courses.map((val) => (
                        <div className='coursesCarditems' key={val.id}>
                            <img className={'course-icon'} src={val.icon} alt=''/>
                            <h1 className={'course-title'}>{val.title}</h1>
                            <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <label htmlFor=''>(5.0)</label>
                            </div>
                            <div className={'teacher'}>
                                <img className={'teacher-icon'}   src={val.teacher_image} alt=''/>
                                <h4>by {val.teacher_fistname} <br/>{val.teacher_lastname}</h4>

                            </div>

                            <span className={'time'}>2 hours</span>
                            <h3 className={'price'}>
                                {val.price} All Course / {val.price_per} per month
                            </h3>
                            <Link key={val.id} id={val.id} to={`/courses/${val.id}`}  smooth={true}>
                                <button onClick={handleEnrollClick} className='course-btn'>ENROLL NOW !</button>
                            </Link>


                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CoursesCard
