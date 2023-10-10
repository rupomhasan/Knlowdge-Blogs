import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import "../../../public/blog.json";
import Blog from "./Blog";
const Blogs = ({ handClickBookmark }) => {
   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
      fetch("blog.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);
   return (
      <div className="w-2/3 ">
         Blogs : {blogs.length}
         {blogs.map((blog) => (
            <Blog handClickBookmark={handClickBookmark} key="id" blog={blog}></Blog>
         ))}
      </div>
   );
};
Blogs.propTypes = {
    handClickBookmark : PropTypes.func
}
export default Blogs;
