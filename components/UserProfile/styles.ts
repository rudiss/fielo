import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  max-width: 300px;
  width: 100%;
  border-radius: 16px;
  padding: 8px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: rgb(22 50 92);
    margin: 0;
  }
  p {
    color: #8a94a6;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  div {
    text-align: center;
  }
  gap: 32px;
  color: #16325c;
  font-size: 16px;
  font-weight: 500;
  span {
    color: #8a94a6;
    font-weight: 400;
    font-size: 12px;
  }
`