import styled from 'styled-components';
import { Link } from "react-scroll";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const Container = styled.div`
  background: #fff;
  max-width: 300px;
  width: 100%;
  border-radius: 16px;
  padding: 8px 10px;
`;

export const Content = styled.div`
  overflow: auto;
  height: 390px;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  color: #8a94a6;
  padding: 8px 0;
  span:first-child {
    text-align: center;
  }
`;

export const ListContent = styled(Link)`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  justify-items: center;
  margin-bottom: 8px;
  color: rgb(22 50 92);
  font-weight: 500;

  div {
    width: 100%;
  }

  div:nth-child(2){
    justify-self: start;
    span {
      margin-right: 8px;
    }
  }

  &:hover {
    background: #f0f8fc;
    border-radius: 8px;
    cursor: pointer;
  }
`;
