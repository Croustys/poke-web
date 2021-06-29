import { styled } from "tsstyled";

export const DivApp = styled('div')`
  background-image: url("pokebackground.png");
  text-align: center;
  height: 100vh;
`
export const Form = styled('form')`
  display: flex;
  text-align: center;
  width: 50%;
  margin: auto;
  padding-top: 10vh;
  flex-direction: column;
`;
export const Input = styled('input')`
  box-sizing: border-box;
  font-size: 2rem;
  padding: 1rem;
  display: block;
  margin: 2rem auto;
  width: 30vw;
`;
export const Label = styled('label')`
  color: white;
  font-size: 3em;
`;
export const DivTableRow = styled('div')`
  display: table-row;
`;
export const Container = styled('div')`
  display: flex;
  opacity: 0.9;
  background-color: whitesmoke;
  justify-content: center;
`;
export const Img = styled('img')`
  height: 16em;
`;
export const DivTable = styled('div')`
  display: table;
  max-width: 20em;
  float: right;
  display: flex;
  align-items: center;
`;
export const divTableHeading = styled('div')`
  background-color: #eee;
  display: table-header-group;
`;
export const divTableHead = styled('div')`
  border: 1px solid #999999;
  display: table-cell;
  padding: 3px 10px;
`;
export const DivTableCell = styled('div')`
  border: 1px solid #999999;
  display: table-cell;
  padding: 3px 10px;
`;
export const divTableFoot = styled('div')`
  background-color: #eee;
  display: table-footer-group;
  font-weight: bold;
`;
export const DivTableBody = styled('div')`
  display: table-row-group;
`;
export const SearchButton = styled('button')`
  width: 40%;
  background: lightblue;
  border-radius: 5px;
  color: white;
  border: none;
  margin-bottom: 10px;
  outline: none;
`;