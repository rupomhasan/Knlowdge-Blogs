import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <>
            <ol className=''>
                <li className='font-semibold text-2xl my-3 bg-indigo-300 p-3 rounded-md shadow-xl'>
                    {bookmark.title}
                </li>
            </ol>
        </>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.array
}

export default Bookmark;