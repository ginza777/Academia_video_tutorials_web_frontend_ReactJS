import React from "react"
import CoursesInfo from "./course_info";
import CourseVideos from "./course_videos";
import "./style.css"


const CoursesSingle = () => {
    return(<div className={'course-detail-page'}>
        <CoursesInfo/>
        <CourseVideos/>

    </div>)

}
export default CoursesSingle