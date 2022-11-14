import Input from './components/input';
import Button from './components/button';
import {Container, Content, Row, Span, Icon, Span1, Span2 } from './style';
import { useState } from 'react';
import { AiFillCalculator } from "react-icons/ai";

const App = () => {
const [currentNumber, setcurrentNumber] = useState('0');
const [firstNumber, setFirstNumber] = useState('0');
const [operation, setOperation] = useState('');
const handleonClear =() =>{
    setcurrentNumber ('0')
    setFirstNumber('0')
    setOperation('')
};
  const handlrAddNumber = (num) => {
      setcurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleMaisNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setcurrentNumber ('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number (currentNumber);
      setcurrentNumber(String(sum))
      setOperation('')
      
    }

  }

  const handleMenosNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setcurrentNumber ('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number (currentNumber);
      setcurrentNumber(String(sum))
      setOperation('')
      
    }

  }

  const handlevezesNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setcurrentNumber ('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number (currentNumber);
      setcurrentNumber(String(sum))
      setOperation('')
      
    }

  }

  const handleDividiNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setcurrentNumber ('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number (currentNumber);
      setcurrentNumber(String(sum))
      setOperation('')
      
    }

  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
        handleMaisNumber();
        break;
        case '-':
          handleMenosNumber();
        break;
        case '*':
          handlevezesNumber();
        break;
        case '/':
          handleDividiNumber();
        break;
      default:
        break;
      }
    }

  }

  
  return (
    <Container>
      <Content>
        <Icon><AiFillCalculator/></Icon><Span> Calculadora | React</Span>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handlevezesNumber}/>
          <Button label="/" onClick={handleDividiNumber}/>
          <Button label="C" onClick={() =>handleonClear('C')}/>
        
          
        </Row>      
        <Row>
          <Button label="7" onClick={() =>handlrAddNumber('7')}/>
          <Button label="8" onClick={() =>handlrAddNumber('8')}/>
          <Button label="9" onClick={() =>handlrAddNumber('9')}/>
        </Row>  
        <Row>
          <Button label="4" onClick={() =>handlrAddNumber('4')}/>
          <Button label="5" onClick={() =>handlrAddNumber('5')} />
          <Button label="6" onClick={() =>handlrAddNumber('6')}/>
        </Row>   
        <Row>
          <Button label="1" onClick={() =>handlrAddNumber('1')}/>
          <Button label="2" onClick={() =>handlrAddNumber('2')}/>
          <Button label="3" onClick={() =>handlrAddNumber('3')}/>
        </Row> 
        <Row>
          <Button label="-" onClick={handleMenosNumber}/>
          <Button label="0" onClick={() =>handlrAddNumber('0')}/>
          <Button label="+" onClick={handleMaisNumber}/>
        </Row> 
        <Row>  
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Span1>Projeto Orange Tech + | React  </Span1>
        <Span2>Pablo Kenedy</Span2>
      </Content>
    </Container>

  );
}

export default App;
