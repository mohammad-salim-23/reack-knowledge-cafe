
import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    

   
    return (
        <div className="md:w-1/3 bg-gray-300 p-3 ml-5">
           <p className='text-2xl text-purple-500 border-2 mb-2 p-3'>Spent time on read:{readingTime}</p>
            <h2 className='text-2xl text-center'>Bookmarked Blogs:{bookmarks.length}</h2>
          
            
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number,
   
}
export default Bookmarks;