import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
background: pink;
border-radius: 10px;
border: 2px solid  #000
color: #f00;
margin: 0 .5em;
padding: 10px 20px;
font-size: 30px;
`

const Container=styled.div`
background: violet;
width:200px;
height:150px;
margin: 50px auto;
padding: 30px 60px;
border: 5px solid #ddd;
`

const Counter = () => {
    const [count, setCount]=useState(0)
    
    const plus= () => {
        setCount(count+1)
    }
    
    const minus= () => {
        setCount(count-1)
    }
    return (
        <Container>
            <h2>{count}</h2>
            <Button onClick={minus}>-</Button>
            <Button onClick={plus}>+</Button>
        </Container>
    );
};

export default Counter;