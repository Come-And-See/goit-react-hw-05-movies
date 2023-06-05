import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Block = styled.div`
  margin-left: 25px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding: 25px 0;
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
