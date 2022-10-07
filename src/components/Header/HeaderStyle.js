import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > *{
        height: 50%;
        width: 100%;
    }
    form{
        display: flex;
        align-items: center;
        width: 34%;
        height: 34%;
        select{
            width: 20%;
        }
        input{
            width: 60%;
        }
        button{
            width: 20%;
        }
    }
`
export const HeaderTag = styled.div`
    background-color: brown;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 650px){
        border:none;
        form{
            display: none;
        }
    }
`
export const HeaderTag2 = styled.div`
    background-color: brown;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 6px;
    @media(max-width: 650px){
        display: flex;
        border: none;
    }
`