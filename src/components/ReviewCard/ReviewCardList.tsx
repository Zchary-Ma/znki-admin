import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { CardService } from '../../shared/api/api';

interface Props {}

const ReviewCardList = (props: Props) => {
  const [data, setData] = useState([
    {
      title: 'title',
      content: 'content',
      id: 0,
    },
  ]);
  useEffect(() => {
    CardService.cardControllerRetrieveReviewCards({
      body: {
        deckId: 7, // AMEND
        length: 20,
      },
    }).then((res) => {
      if (res.message === 'success') {
        setData(
          res.data.map((item) => ({
            title: item?.title,
            content: item?.notes[0]?.content, // AMEND
            id: item.id,
          })),
        );
      }
    });
  }, []);

  return (
    <React.Fragment>
      {data.length > 0 ? (
        data.map((item, index) => (
          <ReviewCard
            key={index}
            title={item.title}
            id={item.id}
            content={item.content}
            count={index}
          />
        ))
      ) : (
        <ReviewCard />
      )}
    </React.Fragment>
  );
};

export default ReviewCardList;
