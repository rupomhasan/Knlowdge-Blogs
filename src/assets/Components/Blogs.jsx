import React, { useEffect, useState } from 'react';
import '../../../public/blog.json';
import Blog from './Blog';
const Blogs = () => {
    const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3 '>
            Blogs : {blogs.length}
            {
                blogs.map(blog => <Blog key='id' blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;