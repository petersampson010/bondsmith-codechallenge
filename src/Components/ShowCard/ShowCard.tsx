import React from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateShowDetailActive } from '../../ReduxStore/actions.tsx';
import './ShowCard.scss';

type Props = {
    show: Show
}

const ShowCard: FC<Props> = ({show}) => {
  const dispatch = useDispatch();

  return (
    <div className="show-card-cont" onClick={() => dispatch(updateShowDetailActive(true, show))}>
      <img className="image-cover" src={show.show.image ? show.show.image.original : show.image} alt={show.show.name}/>
    </div>
  );
};

export default ShowCard;
