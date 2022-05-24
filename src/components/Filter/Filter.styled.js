import styled from 'styled-components';

export const FilterContact = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
`;
export const FilterDescription = styled.span`
  display: block;
  text-align: center;
  padding-bottom: 10px;
`;
export const Input = styled.input`
  display: block;
  border: 2px solid #b1aeac;
  padding: 5px;
  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;
