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
 `

export const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between;
    width: 80%;
    *{
        font-size: 30px;
    }
`

export const TitleTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 6px;
    cursor: pointer;
    img{
        height: 200px;
        width: 130px;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        max-width: 130px;
    }
`
export const UserTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 6px;
    cursor: pointer;
    img{
        height: 100px;
        width: 100px;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        max-width: 120px;
    }
`