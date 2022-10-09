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
    min-height: 100%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    margin: 120px 0;
    @media (max-width: 650px) {
        flex-direction: column;
    }
    > div{
        width:50%;
        height: fit-content;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        padding:6px;
        strong{
            font-size: 30px;
            margin-bottom: 16px;
        }
    }
`
export const UserInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    strong{
        font-size: 30px;
        margin-bottom: 10px;
    }
    div{
        max-width: 100%;
        font-size: 22px;
        background-color: brown;
        border-radius: 6px;
        color: white;
        margin-bottom: 6px;
        padding: 4px;
    }

`
export const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:flex-start;
    width: 80%;
    *{
        font-size: 20px;
    }
`

export const TitleTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 8px;
    cursor: pointer;
    img{
        height: 166px;
        width: 108px;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 108px;
        margin-left: 8px;
    }
`
export const UserTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 8px;
    cursor: pointer;
    img{
        height: 80px;
        width: 80px;
    }
    > div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80px;
        margin-right: 8px;
        margin-bottom: 8px;
    }
`