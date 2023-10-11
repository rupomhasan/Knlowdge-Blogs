import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import "../../../public/blog.json";
import Blog from "./Blog";
const Blogs = ({ handClickBookmark ,handleMarkAsRead}) => {
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      fetch("blog.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);
   return (
      <div className="w-2/3 ">
      <h3 className='mb-4 mt-1'>
      Blogs : {blogs.length}

      </h3>
         {blogs.map((blog,id) => (
            <Blog handClickBookmark={handClickBookmark}
            handleMarkAsRead = {handleMarkAsRead}
             key={id} blog={blog}></Blog>
         ))}
      </div>
   );
};
Blogs.propTypes = {
    handClickBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blogs;
