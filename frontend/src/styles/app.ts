import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    padding: 85px 103px 54px;   
    width: 100%;
    background-color: #ACD88A;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    padding: 85px 103px 54px;
    flex-direction: column;
    width: 100%;
    background-color: #85A088;

    header{
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-bottom: 250px;
        
        input{
            margin-bottom: 12px;
        }
    }        
    
    h1{ 
        font-size: 56px;
    }

`;

export const Inputs = styled.div`
    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

export const Selects = styled.div`
    display: flex;
    padding: 0 200px;
    justify-content: space-evenly;
    margin-bottom: 80px;
    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

export const Transitions = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    display: block;
    border: solid 2px;
    height: 400px;
    overflow-y: scroll;
`;

export const SelectsContent = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    div{
        display: flex;
        flex-direction: column; 
    }
`;