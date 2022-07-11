import styled from "styled-components";

export const TableMain = styled.div`
  color: white !important;
  .table > :not(caption) > * > * {
    padding: 0.2rem;
  }
  #table {
    background: rgba(46, 44, 43, 0.8);
    color: white !important;
    padding: 1rem;
    border-radius: 1rem;
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
