import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the styles based on primary prop */
  background: ${props => props.primary ? "#3d90e3" : "white"};
  color: ${props => props.primary ? "white" : "#b52a2a"};

  font-size: 1em;
  margin: 2px 5px;
  padding: ${({primary}) => primary ? '0.25em 1.2em' : '0 4px'};
  border: ${props => props.primary ? '2px solid #3d90e3' : '2px solid #b52a2a'};
  border-radius: 3px;
`;
