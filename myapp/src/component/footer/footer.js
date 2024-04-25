import {  HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer=()=>{
    return(
        <div className='footer'>

     
        <div className='footer_main_container'>
            <div className='footer_inner_container'>
                <Link to='/home'>
                <Button type="primary" >
            <HomeOutlined  twoToneColor="#eb2f96" style={{fontSize:'20px' }}/>
          </Button>
                </Link>
        <Link to='/post'>
          <Button type="primary" >
          <PlusCircleOutlined twoToneColor="#eb2f96" style={{fontSize:'20px'}}/>
          </Button>
          </Link>
            
            </div>
        
        </div>
        </div>
    )
}

export default Footer
