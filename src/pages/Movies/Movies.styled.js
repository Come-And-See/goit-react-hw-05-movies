import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Block = styled.div`
  margin-left: 25px;
`;

export const Form = styled.form`
  margin: 25px 0;
  width: 412px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  padding-left: 15px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

export const Button = styled.button`
  height: 50px;
  border: 0;
  cursor: pointer;
  width: 95px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  &:hover {
    color: #fff;
    background: blue;
  }
`;



export const ListFilms = styled.ul`
  font-size: 25px;
  margin-top: 0;
`;

export const ItemFilms = styled.li`
  padding-bottom: 9px;
  color: blue;
`;

export const LinkFilms = styled(Link)`
  color: #000;

  &:hover {
    color: blue;
  }
`;