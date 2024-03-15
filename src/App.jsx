
import './App.css'
import Header from './components/Header/Header';
import Blogs from './components/Header/Blogs/Blogs';
import Bookmarks from './components/Header/Bookmarks';
import { useState } from 'react';
function App() {
const [bookmarks,setBookmarks] = useState([]);

const [readingTime, setreadingTime] = useState(0);
const handleMarkAsRead = (id,time)=>{
 
setreadingTime(readingTime+time);
 // remove the read blog from bookmark
 
 const remainingBookmark = bookmarks.filter(bookmark=>bookmark.id!==id)
 setBookmarks(remainingBookmark);
}

const handleAddToBookmark = blog=>{
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks);
 
}


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}
      ></Bookmarks>
      </div>
      
      </>
  )
}

export default App;
