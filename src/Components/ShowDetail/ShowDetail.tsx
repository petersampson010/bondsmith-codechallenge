import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateShowDetailActive } from '../../ReduxStore/actions.tsx';
import './ShowDetail.scss';



const ShowDetail: FC = () => {
  const dispatch = useDispatch(),
  activeShow = useSelector((state: Store) => state.activeShow);

  return (
    <div className='container m-5'>
        <div  className='container d-inline-flex justify-content-center mb-4'><button onClick={() => dispatch(updateShowDetailActive(false, null))}>Back</button></div>
        <div className='show-detail-cont'>
            <img className="large-image-cover" src={activeShow?.show?.image ? activeShow?.show?.image?.original : activeShow?.image} alt={activeShow?.show?.name}/>
            <div className="show-detail-text">
                <h3>{activeShow?.show?.name}  ({activeShow?.show?.premiered?.split('-')[0]})</h3>
                <p dangerouslySetInnerHTML={{__html: activeShow?.show?.summary}}></p>
                <p>Status: {activeShow?.show?.status}</p>
                <p>Genres: {activeShow?.show?.genres[0] ? activeShow?.show?.genres?.join(', ') : activeShow?.type}</p>
            </div>
        </div>
    </div>
  );
};

export default ShowDetail;
