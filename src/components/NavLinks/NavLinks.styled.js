import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  padding: 25px;
  border-right: 1px solid;

  &.active {
    color: blue;
  }
`;