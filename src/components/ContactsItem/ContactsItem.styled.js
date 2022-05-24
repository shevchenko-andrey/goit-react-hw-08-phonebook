import styled from 'styled-components';
export const Item = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5%;
  border: 2px solid #4f8f2a;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  border-radius: 10px;
  margin-left: 10px;
  padding: 5px;
  color: #ffffff;
  background-color: #4f8f2a;
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 300px;
`;
export const Name = styled.span`
  margin-right: 10px;
`;
