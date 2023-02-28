import styled from 'styled-components';
import EmailInput from './Input/Email';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
`;

export default function MyComponent() {
  return (
    <div>
      <EmailInput />
      <Button>Click me</Button>
    </div>
  );
}
