import styled from "styled-components";

export const Page = styled.div`
    position:relative;
    bottom: 0;
    width: 100%;
    height: 100%;
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
    justify-content: flex-start;
    margin: 50px 0;
    padding: 6px;
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

export const TitleCoverTag = styled.div`
        width:50%;
        height: 100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:space-around;
        padding:10px;
        margin-top: 100px;
    img{
        width: 300px;
        height: 500px;
    }
`

export const TitleInfosTag = styled.div`
    width:50%;
        height: 100%;
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content:space-around;
        padding:10px;
        margin-top: 100px;
        > *{
            
            background-color: brown;
            border-radius: 6px;
            color: white;
        }
    
`
export const AddToCollection = styled.div`
    
    cursor: pointer;
`