import styled from 'styled-components';

export const Block = styled.div`
  width: 100%;
  margin-left: 25px;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 17px;
`;

export const Ul = styled.ul`
  height: 600px;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  text-align: center;
`;


export const Li = styled.li`
  width: 133px;
`;


export const Img = styled.img`
  height: 200px;
  width: 133px;
  border-radius: 15px;
`;

export const NotFoto = styled.div`
  height: 200px;
  width: 133px;
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
`;

export const Info = styled.p`
  font-size: 17px;
`;
