import styled from 'styled-components';

export const Container = styled.div`
  margin: 75px 15px 15px 245px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: ${props => props.height || 'auto'};
  grid-template-rows: ${props => props.rows || 'repeat(1, calc(100vh - 90px))'};
  grid-gap: 15px;
`;

export const Header = styled.div`
  grid-column: ${props => props.column || '1/13'};
  grid-row: ${props => props.row};
  margin-top: 10px;

  & h1,
  & h2,
  & h3 {
    margin-block-start: 0;
    margin-block-end: 0.25em;
  }
`;
