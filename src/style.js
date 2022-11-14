import styled from 'styled-components';

export const Container = styled.div`
    background-color: #CACACA;
    width: 100%;
    height: 100vh;
    

    display: flex;
    align-items: center;
    justify-content: center;

`
export const Content = styled.div`
background-color: #000;
width: 40%;
border: 5px solid #000;

`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

`

export const Coloumn = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;

`
export const Span = styled.div`
    font-size: 24px;
    color: #FFFF;
    flex: 1;
    font-weight: 700;
    margin: 5px;
    padding: 0px 0.1px 1px;
    display: flex;
    flex-direction: center;
    align-items: flex;
    display: inline-block;

`

export const Icon = styled.div`
    font-size: 24px;
    color: #FFFF;
    padding: 0;
    display: inline-block;

`
export const Span1 = styled.div`
    font-size: 12px;
    color: #FFFF;
    flex: 1;
    font-weight: 700;
    margin: 1px;
    padding: 1px 01% ;
    display: flex;
    flex-direction: center;
    align-items: flex;
    display: inline-block;

`

export const Span2 = styled.div`
    font-size: 12px;
    color: #f6ff00;
    flex: 1;
    font-weight: 700;
    margin: 1px;
    padding: 1px 01% ;
 

`