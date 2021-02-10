import React , { useState } from 'react';
import styled from 'styled-components';


let StyledSwitchMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #1a1f29;
`;

let StyledMenuBar = styled.div`
    position: relative;
    top: 0;

    width: 100%;
    height: 50px;
    background-color: #1a1f29;
    border-bottom: solid;
    border-width: 2px;
    border-color: 12151c;
`;


export default function SwitchMenu(props) {
    const [pageIndex , setPageIndex] = useState(0);


    return (
        <StyledSwitchMenu className={props.className}>
            <StyledMenuBar>

            </StyledMenuBar>

            {props.pages[0]}
        </StyledSwitchMenu>
    );
}