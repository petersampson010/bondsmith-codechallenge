import React, { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ShowDetail.scss';



const ShowDetail: FC = () => {
  const dispatch = useDispatch(),
  showActive = useSelector((state: Store) => state.showActive);

  return (
    <div className='container m-5'>
        <div className='show-detail-cont'>
            <img className="large-image-cover" src={showActive.show.image ? showActive.show.image.original : showActive.image} alt={showActive.show.name}/>
            <div className="show-detail-text">
                <h3>{showActive.show.name}  ({showActive.show.premiered.split('-')[0]})</h3>
                <p>{showActive.show.summary.replace('<p>', '').replace('</p>', '')}</p>
                {/* <p>{showActive.cast}</p> */}
                <p>Status: {showActive.show.status}</p>
                <p>Genres: {showActive.show.genres[0] ? showActive.show.genres.join(', ') : showActive.type}</p>
            </div>
        </div>
    </div>
  );
};

export default ShowDetail;
