import { useState } from "react";
import "./App.css";
import Blogs from "./assets/Components/Blogs";
import Bookmarks from "./assets/Components/Bookmarks";
import Header from "./assets/Components/Header";

function App() {
   
   const [bookmarks,setBookmark] = useState([])

   const handClickBookmark = (blog) => {
      console.log(blog)
      const newBookmark = [...bookmarks,blog]
      setBookmark(newBookmark)
   }

   return (
      <>
         <Header></Header>
         <main className="flex gap-10">
            <Blogs handClickBookmark={handClickBookmark}></Blogs>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
         </main>
      </>
   );
}

export default App;
