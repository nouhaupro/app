import styled from 'styled-components';
import colors from './colors.style';

export const Bar = styled.div`
  background-color: ${colors.darkOpacity};
  color: white;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 230px;
  text-align: center;
  & img {
    width: 120px;
  }
`;

export const AvatarBox = styled.div`
  height: 40px;
  width: 110px;
  display: flex;
  align-items: center;
  color: ${colors.dark};
  background-color: white;
  border-radius: 20px;
  margin-right: 10px;
`;
