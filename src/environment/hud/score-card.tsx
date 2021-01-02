import { scoreState } from "gameState";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';

const Section = styled.section`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 1000;
    color: #FFF;
`;

const ScoreCard = () => {
    const score = useRecoilValue(scoreState);

    return (
        <Section>
            Score: {score*1000}
        </Section>
    )
};

export default ScoreCard;