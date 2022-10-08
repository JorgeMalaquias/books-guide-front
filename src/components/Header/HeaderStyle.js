import styled from "styled-components";

export const Container = styled.div`
    background-color: brown;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    padding: 6px;
    > *{
        height: 50%;
        width: 100%;
    }
    form{
        display: flex;
        align-items: center;
        width: 38%;
        height: 34%;
        select{
            width: 28%;
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