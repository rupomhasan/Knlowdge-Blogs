import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks ,readingTime}) => {
   return (
      <div className="w-1/3 mt-10 py-3 px-5 rounded-xl bg-gray-100">
      <div>
         <h3 className='font-bold text-xl bg-indigo-200 p-3 rounded mb-2' >Spent Time on read : {readingTime} mins</h3>
      </div>
        <p className="text-3xl">Bookmark : {bookmarks.length}</p>
         {
            bookmarks.map(bookmark => <Bookmark key='bookmark.id' bookmark={bookmark}></Bookmark>)
         }
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks : PropTypes.array,
   readingTime : PropTypes.number
}

export default Bookmarks;
