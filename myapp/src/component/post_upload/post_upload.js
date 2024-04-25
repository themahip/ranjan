import React, { useState } from 'react';
import "./post.css"


import { Input, Button } from 'antd';
import Footer from '../footer/footer';

const { TextArea } = Input;

const PostUpload =() => {
  const [value, setValue] = useState('');

  return (
    
    <div className='post_main_container'>
        <div className='post_inner_container'>
        <TextArea placeholder="Title" autoSize />
      <div style={{ margin: '24px 0' }} />
    
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Content"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
         <Button type="primary" >
            Post
          </Button>
        </div>

      <Footer/>
    </div>
  );
};

export default PostUpload;