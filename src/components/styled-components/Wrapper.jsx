import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 4rem 5rem;

  @media (max-width: 1024px) {
    margin: 3rem 2rem; /* tablet */
  }

  @media (max-width: 768px) {
    margin: 2rem 1.5rem; /* small tablets/large phones */
  }

  @media (max-width: 480px) {
    margin: 1.5rem 1rem; /* phones */
  }
`;
