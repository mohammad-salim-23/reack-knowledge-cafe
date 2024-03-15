import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
   const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex '>
                <img className='w-14 mr-6 mb-5' src={author_img} alt="" />
              <div>
                <h5 className='text-2xl'>{author}</h5>
                <p>{posted_date}</p>
                </div>
                </div>
            <div>
            <span>{reading_time} min read</span>
            <button onClick={()=>handleAddToBookmark(blog)}  className='ml-2 text-red-600 text-2xl'><FaBookmark>Bookmark</FaBookmark></button>
            </div>
            </div>
<h2 className="text-4xl mb-4">{title}</h2>

  <p className='mb-5'>
    {
        hashtags.map((hash,id)=><span key={id}><a>  #{hash}</a></span>)
    }
  </p>
  <button onClick={()=>handleMarkAsRead(id,reading_time)} className='mb-4 space-y-4 text-purple-800 font-bold underline'>Mark As Read</button>

            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}

export default Blog;