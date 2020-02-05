import styled from 'styled-components';

export const Container = styled.div`
  margin: 75px 15px 15px 245px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: ${props => props.height || 'auto'};
  grid-template-rows: ${props => props.rows || 'repeat(1, calc(100vh - 90px))'};
  grid-gap: ${props => props.gap || '15px'};
`;

export const Row = styled.div`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: ${props => props.margin};
  padding: ${props => props.padding || '15px'};

  & h1,
  & h2,
  & h3 {
    margin-block-start: 0;
    margin-block-end: 0.25em;
  }
`;
