import React, {useEffect, useState} from "react"
import "./style.css"
import {useParams} from "react-router-dom";
import {Course} from "../../urls.js";
const CoursesInfo = () => {
    // const
    const [course, setCourses] = useState([])
    const {id} = useParams();
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`${Course}/${id}/`);
                const data = await response.json();
                setCourses(data);
            } catch (error) {
            }
        };
        fetchVideos();
    }, [id]);
    return (<>
        <section className='course_info '>
            <div className="course_info-container">
                <div className="course-row">
                    <div className={'row-left'}>
                        <div className="course_info_img">
                            <img src={course.icon} alt=""/>
                            <h1>{course.title}</h1>
                        </div>
                    </div>
                    <div className={'row-right'}>
                        <div className="course_info_text">
                            <table id="table">
                                <thead>
                                <tr>
                                    <th>Kurs haqida</th>
                                    <th>Ma'lumot</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Nomi</td>
                                    <td>{course.title}</td>

                                </tr>
                                <tr>
                                    <td>O'qituvchi</td>
                                    <td>{course.teacher_fistname} {course.teacher_lastname}</td>
                                </tr>
                                <tr>
                                    <td>videolar soni</td>
                                    <td>{course.videos_count} ta video</td>
                                </tr>

                                <tr>
                                    <td>kurs narxi</td>
                                    <td>{course.price}$</td>
                                </tr>
                                </tbody>
                            </table>
                            <p className={'course-description'}>{course.description}</p>



                        </div>

                    </div>
                </div></div>


        </section>
    </>
)
}

export default CoursesInfo
