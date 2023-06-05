import "./App.css"
import Header from "./components/common/header/Header"
import {Route, Routes, BrowserRouter} from "react-router-dom";
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import CoursesSingle from "./components/course_detail/course_single";
import RegistrationPage from "./components/login-register/register";
import LoginPage from './components/login-register/login';
import UserContext from "./context";


function App() {
    const user_email = localStorage.getItem('user_email');
    const user_name = localStorage.getItem('user_name');
    console.log(user_email);
    console.log(user_name);
    const userData = {
        username: user_name,
        email: user_email,
    };
    return (
        <>
            <UserContext.Provider value={userData}>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                            <Route exact path='/' element={<Home/>}/>
                            <Route exact path='/about' element={<About/>}/>
                            <Route exact path='/courses' element={<CourseHome/>}/>
                            <Route exact path='/courses/:id' element={<CoursesSingle/>}/>
                            <Route exact path='/team' element={<Team/>}/>
                            <Route exact path='/pricing' element={<Pricing/>}/>
                            <Route exact path='/journal' element={<Blog/>}/>
                            <Route exact path='/contact' element={<Contact/>}/>
                            <Route path={'/register'} element={<RegistrationPage/>}/>
                            <Route path={'/login'} element={<LoginPage/>}/>
                        </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

export default App
