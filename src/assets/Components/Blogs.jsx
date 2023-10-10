import React, { useEffect, useState } from 'react';
import '../../../public/blog.json';
const Blogs = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;