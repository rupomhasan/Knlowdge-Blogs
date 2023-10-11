import { useState } from "react";
import "./App.css";
import Blogs from "./assets/Components/Blogs";
import Bookmarks from "./assets/Components/Bookmarks";
import Header from "./assets/Components/Header";

function App() {
   
   const [bookmarks,setBookmark] = useState([])
   const [readingTime, setReadingTime] = useState(0)


   const handleMarkAsRead = (id,time) => {

      const newReadingTime = readingTime + parseInt(time);
      setReadingTime(newReadingTime)
      const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmark(remaining)
   }
   const handClickBookmark = (blog) => {
      console.log(blog)
      const newBookmark = [...bookmarks,blog]
      setBookmark(newBookmark)
   }

   return (
      <>
         <Header></Header>
         <main className="flex gap-10">
            <Blogs handClickBookmark={handClickBookmark}
            handleMarkAsRead = {handleMarkAsRead}
            ></Blogs>
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
         </main>
      </>
   );
}

export default App;
