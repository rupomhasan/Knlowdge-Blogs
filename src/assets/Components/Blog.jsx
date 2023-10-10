import PropTypes from "prop-types";

const Blog = ({ blog }) => {
   console.log(blog);
   const {
      cover_img,
      title,
      author,
      posted_date,
      reading_time,
      author_img,
      hashtags,
   } = blog;
   return (
      <div className="mb-10">
         <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
               <img src={cover_img} alt="Shoes" />
            </figure>
            <div className="card-body">
               <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                     <div className="w-16 ">
                        <img src={author_img} alt="" />
                     </div>
                     <div>
                        <h4 className="text-6 font-extrabold">{author}</h4>
                        <p>{posted_date}</p>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <p>{reading_time}</p>
                     <button className="btn btn-xs btn-secondary">
                        Bookmark
                     </button>
                  </div>
               </div>
               <h2 className="text-4xl font-semibold">{title}</h2>
               <div>
                  {hashtags.map((has, idx) => (
                     <span key={idx}>
                        {" "}
                        <a href="">#{has}</a>
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
};
export default Blog;
