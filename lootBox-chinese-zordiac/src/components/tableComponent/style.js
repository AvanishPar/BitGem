import styled from "styled-components";

export const TableMain = styled.div`
  .table > :not(caption) > * > * {
    padding: 0.2rem;
  }
  font-size: 1rem;
  font-weight: 900;
  margin-left: 8rem;
  .ppA-dp tbody,
  .ppA-dp td,
  .ppA-dp tfoot,
  .ppA-dp th,
  .ppA-dp thead,
  .ppA-dp tr {
    border-color: none;
    border-style: inherit;
    border-width: 0;
  }
`;
