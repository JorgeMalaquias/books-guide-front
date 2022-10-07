import styled from "styled-components";

export const Container = styled.div`
    background-color: brown;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    > *{
        height: 50%;
        width: 100%;
    }
`