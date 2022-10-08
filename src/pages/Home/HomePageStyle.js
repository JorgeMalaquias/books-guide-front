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
    > div:last-child{
        align-items: center;
    }
    > div:last-child > div{
        width: 80%;
        font-size: 30px;
        line-height: 50px;
        border-radius: 6px;
        background-color: #800000;
        color: white;
        margin-bottom: 70px;
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

export const TitlesTag = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    
`

export const TitleTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    img{
        height: 200px;
        width: 130px;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`

export const GeneralInfoTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6px;
    margin-bottom: 20px;
`

export const FormTag = styled.form`
        width: 80%;
        font-size: 30px;
        line-height: 50px;
        border-radius: 6px;
        background-color: #800000;
        color: white;
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 6px;
        *{
            width: 80%;
            margin-bottom: 20px;
        }
`