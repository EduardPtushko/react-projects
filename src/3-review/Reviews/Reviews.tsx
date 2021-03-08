import React from 'react';
import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';
import { Review } from '../Review/Review';
import {
    Block,
    ButtonLeft,
    ButtonRight,
    Button,
    ButtonsBlock,
    Icons,
} from './style';
import reviewsData from '../data';

export const Reviews: React.FC = ({}) => {
    const [current, setCurrent] = React.useState(0);
    const { image, name, job, text, id } = reviewsData[current];

    const clickLeft = () => {
        if (0 < current) {
            setCurrent(current - 1);
        } else {
            setCurrent(reviewsData.length - 1);
        }
    };
    const clickRight = () => {
        if (reviewsData.length - 1 > current) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    };

    const randomPerson = () => {
        const random = Math.floor(Math.random() + reviewsData.length);
        setCurrent(random);
    };
    return (
        <Block>
            <Review id={id} image={image} name={name} job={job} text={text} />
            <ButtonsBlock>
                <Icons>
                    <ButtonLeft onClick={clickLeft}>
                        <ChevronLeft />
                    </ButtonLeft>
                    <ButtonRight onClick={clickRight}>
                        <ChevronRight />
                    </ButtonRight>
                </Icons>
                <Button onClick={randomPerson}>Surprise Me</Button>
            </ButtonsBlock>
        </Block>
    );
};
