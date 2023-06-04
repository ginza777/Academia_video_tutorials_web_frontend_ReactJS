import React, {useEffect, useState} from 'react';

async function fetchData() {
    const url = 'http://127.0.0.1:8000/api/teachers/'; // API url manzili

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

const TeamCard = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const apiData = await fetchData();
            setTeamData(apiData.results);
        };

        fetchDataAndSetData();
    }, []);

    return (<>
            {teamData.map((val) => (<div className='items shadow '  key={val.id}>
                    <div className='img'>
                        <img src={val.image} alt=''/>
                        <div className='overlay'>
                            <a href={val.facebook}><i className='fab fa-facebook-f icon'></i></a>
                            <a href={val.instagram}><i className='fab fa-instagram icon'></i></a>
                            <a href={val.telegram}><i className='fab fa-telegram icon'></i></a>
                            <a href={`mailto:${val.email}`}><i className='fas fa-envelope icon'></i></a>
                        </div>
                    </div>
                    <div className='details'>
                        <h2>{val.fistname} {val.lastname}</h2>
                        <p>{val.position}</p>
                    </div>
                </div>))}
        </>);
};

export default TeamCard;
