import styled from "styled-components";

export const ButtonD = styled.button`
  outline: none;
  transition: 0.3s;
  color: whitesmoke;
  border-radius: 5px;
  margin: auto;
  padding: 3%;
  background: #30336b;
  width: 50%;
  height: 100px;
  box-sizing: border-box;
  border-color: #30336b;

  &:hover {
    font-size: 3vh;
    cursor: pointer;
    transition: 0.3s;
    background: #1b9cfc;
    color: white;
    border-color: #1b9cfc;
  }
`;

export const InputBox = styled.input`
  width: 90%;
  height: 5vh;
  border-radius: 3px;
  border-style: solid;
  outline: none;

  &::placeholder {
    text-align: center;
    color: white;
  }
`;

export const TinyButton = styled.button`
  border-radius: 4px;
  width: auto;
  height: 6vh;
  margin: auto;
  background: #0a79df;
  color: black;
  border-color: #0a79df;

  &:hover {
    border: 3px solid #34ace0;
    color: white;
    transition: 0.3s;
    background: #2475b0;
  }
`;
