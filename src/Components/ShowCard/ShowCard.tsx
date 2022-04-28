import React, { useEffect } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './ShowCard.scss';


const ShowCard: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="show-card-cont">
      hi
    </div>
  );
};

export default ShowCard;
