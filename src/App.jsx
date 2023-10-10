import "./App.css";
import Blogs from "./assets/Components/Blogs";
import Bookmarks from "./assets/Components/Bookmarks";
import Header from "./assets/Components/Header";

function App() {
   return (
      <>
         <Header></Header>
         <main className="flex gap-10">
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
         </main>
      </>
   );
}

export default App;
