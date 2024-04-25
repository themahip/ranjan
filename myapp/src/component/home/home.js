import "./home.css"
import Footer from "../footer/footer";

import { Card } from 'antd';
import Post from "../post/post";

const Home=()=>{
    return(
        <div className="home_main_container">
            <div className="home_inner_container">
            <Post/>
            </div>
        
         <Footer/>
    
        </div>
    )
}

export default Home;