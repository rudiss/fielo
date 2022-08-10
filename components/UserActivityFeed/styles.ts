import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  max-width: 300px;
  width: 100%;
  border-radius: 16px;
  padding: 8px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: rgb(22 50 92);
    margin: 0;
  }
  p {
    color: #8a94a6;
  }
  .ant-list {
    width: 100%;
    overflow: auto;
    height: 390px;
  }
  .ant-list-item-meta-title {
    color: #8a94a6;
    font-size: 12px;
    font-weight: normal;
  }
  .ant-list-item-meta-description {
    color: rgb(22 50 92);
    font-size: 14px;
  }
`;