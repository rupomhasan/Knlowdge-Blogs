import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
   return (
      <div className="w-1/3 bg-blue-300">
        <p className="text-3xl">Bookmark : {bookmarks.length}</p>
       
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks : PropTypes.array
}

export default Bookmarks;
