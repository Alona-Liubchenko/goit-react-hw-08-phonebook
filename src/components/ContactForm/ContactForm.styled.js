import styled from 'styled-components';
import { Form, Field } from 'formik';
export const Forma = styled(Form)`
  width: 95%;
  display: block;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
`;
export const Input = styled(Field)`
  height: 20px;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  flex-wrap: wrap;

  height: 100%;
  width: 90%;
  margin: 15px 0;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
  }
`;
export const Btn = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 20px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-color: #0e0e9c;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
    background-color: #6363e7d4;
  }
`;
