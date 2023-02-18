import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
`

export default function MyComponent() {
  return <Button>Click me</Button>
}
