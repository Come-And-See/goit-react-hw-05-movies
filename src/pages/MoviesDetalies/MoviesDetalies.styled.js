import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Btn = styled.div`
  padding: 5px 15px;
  border: 1px solid blue;
  border-radius: 10px;
  margin-top: 35px;
  margin-left: 25px;
  width: 55px;
  margin-bottom: 2px;
  color: #000;
`;




export const Block = styled.div`
  margin: 0 25px 0 25px;
  display: flex;
  border-bottom: 1px dashed grey;
  padding-bottom: 40px;
`;

export const Img = styled.img`
  height: 600px;
  width: auto;
  border-radius: 10px;
  margin-right: 25px;
`;

export const Title = styled.h1`
  margin-top: 0;
  font-size: 36px;
`;

export const TextBlock = styled.div`
  width: 700px;
`;

export const Score = styled.p`
  font-size: 20px;
`;

export const Overview = styled.p`
  text-align: justify;
  font-size: 17px;
`;

export const Genres = styled.p`
  text-align: justify;
  font-size: 17px;
`;

export const GenresBtn = styled.button`
  font-size: 17px;
  margin-right: 10px;
  border: 1px solid blue;
  padding: 13px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

export const InfoTitle = styled.h2`
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Info = styled(NavLink)`
  font-size: 17px;
  margin-right: 10px;
  border: 1px solid blue;
  padding: 13px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: blue;
  }
`;


export const NotFoto = styled.div`
  height: 600px;
  width: 400px;
  min-width: 400px;
  clip-path: polygon(
    5% 0%,
    50% 45%,
    95% 0%,
    100% 5%,
    55% 50%,
    100% 95%,
    95% 100%,
    50% 55%,
    5% 100%,
    0% 95%,
    45% 50%,
    0% 5%
  );
  background-color: #c4c4c4;
  margin-right: 25px;
`;