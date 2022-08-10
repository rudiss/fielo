import { Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';

export const Container = styled(Header)`
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 70px;

  h1 {
    color: #16325c;
    font-weight: bold;
    margin: 0;
  }
`;
