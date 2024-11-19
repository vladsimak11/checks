import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Buttons = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${(props) => (props.active ? "#0056b3" : "#e2e6ea")};
  }
`;

export const Block = styled.div`
  font-size: 20px;
`;
