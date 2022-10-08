import styled from "styled-components";

export const Page = styled.div`
    position:relative;
    bottom: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Container = styled.div`
    position:relative;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin: 120px 0;
    > div{
        width:50%;
        height: 100%;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        padding:10px;
        margin-top: 100px;
    }
    *{
        font-size: 30px;
    }
    @media (max-width: 650px) {
        *{
            font-size: 20px;
        }
        flex-direction: column;
    }
`