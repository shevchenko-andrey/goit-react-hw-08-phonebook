import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const FormContainer = styled(Container)`
  margin-top: 80px;
  max-width: 550px;
`;
export const FormName = styled.p`
  color: #212529;
  text-align: center;
  font-size: 40px;
`;
export const LinkToRegister = styled(Link)`
  display: block;
  color: #212529;
  margin-top: 20px;
  transition: 200 linear;
  :hover {
    color: #5456f6;
  }
`;
