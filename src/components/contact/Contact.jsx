import React, {useState} from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
    const map  = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3245.609720127103!2d69.24007345868544!3d41.29949541180022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suz!4v1652535615693!5m2!1sen!2suz';

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some(value => value === "")) {
        alert("Iltimos, barcha maydonlarni to'ldiring");
        return;
    }


    fetch("http://127.0.0.1:8000/api/contact_us/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // Response from the server after successful submission

            alert("Xabar muvaffaqiyatli yuborildi");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        })
        .catch(error => {
            // Error occurred during submission
            console.error(error);
            alert("Xabar yuborishda xatolik yuz berdi");
        });
};



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Back title="Contact us"/>
            <section className="contacts padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map} title="pizdes"/>
                    </div>
                    <div className="right row">
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            <div className="box">
                                <h4>EMAIL:</h4>
                                <p> info@yoursite.com</p>
                            </div>
                            <div className="box">
                                <h4>PHONE:</h4>
                                <p> + 1235 2355 98</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flexSB">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                cols="30"
                                rows="10"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            >
                Create a message here...
              </textarea>
                            <button className="primary-btn" type="submit">
                                SEND MESSAGE
                            </button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
