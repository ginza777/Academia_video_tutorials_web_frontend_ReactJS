import React, {useEffect, useState} from "react"
import "./style.css"
import {useParams} from "react-router-dom";

const CourseVideos = () => {
    // const
    const [videos, setVideos] = useState([])
    const {id} = useParams();
    const baseURL = "http://127.0.0.1:8000/api/courses/"
    // videos list fetch function
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`${baseURL}${id}/videos`);
                const data = await response.json();
                setVideos(data.results);
                console.log(data.results)
            } catch (error) {
            }
        };
        fetchVideos();
    }, [id]);


    const Popup = ({videoUrl, onClose}) => {
        return (
            <div className="popup">
                <div className="popup-content">
                    <video
                        src={videoUrl}
                        controls
                    />
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };


    const [selectedVideo, setSelectedVideo] = useState(null);

    const openPopup = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const closePopup = () => {
        setSelectedVideo(null);
    }


    return (
        <section className='coursesCard  '>
            <div className="videos-column">
                {videos.map(video => (
                    <div className={'video-item'} key={video.id}>
                        <h1>{video.title}</h1>
                        <button onClick={() => openPopup(video.file)}>View</button>
                    </div>
                ))}

                {selectedVideo && <Popup videoUrl={selectedVideo} onClose={closePopup}/>}

            </div>

        </section>
    )
}

export default CourseVideos
