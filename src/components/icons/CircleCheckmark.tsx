import React from 'react';
import styled from 'styled-components';

export interface IProps {
    color?: string;
    size?: string;
}

const CircleContainer = styled.svg<{ color?: string, size?: string }>`
    background-color: ${({ color }) => color};
    height: ${({ size }) => size};
    width: ${({ size }) => size};
`;

const IconWrapper = styled.div<{}>`
    display: flex;
`;

const CircleCheckmark = ({ color = '#1e8449', size = "100px"}: IProps) => (
    <IconWrapper>
    <CircleContainer viewBox="0 0 100 100" size={size}>
        <circle cx="50" cy="50" r="50" fill={color}/>
        <rect x="16" y="48.0711" width="10" height="28.9255" transform="rotate(-45 16 48.0711)" fill="white"/>
        <rect x="77.6396" y="26" width="10" height="59.1284" transform="rotate(45 77.6396 26)" fill="white"/>
    </CircleContainer>
    </IconWrapper>
);

export default CircleCheckmark;