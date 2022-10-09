import styled from "styled-components";

export const Page = styled.div`
    position:relative;
    bottom: 0;
    width: 100%;
    min-height: 100%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 120px 0;
    padding: 6px;
    strong{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        margin-bottom: 30px;
        @media(max-width:720px){
            font-size: 36px;
        }
        @media(max-width:550px){
            font-size: 30px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 6px;
        min-height: 200px;
        *{
            min-width: 300px;
            min-height: 40px;
        }
    }
 `