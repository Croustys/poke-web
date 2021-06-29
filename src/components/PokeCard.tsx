import { IPokemon } from "../interfaces/interfaces";
import {Container, Img, DivTable, DivTableBody, DivTableRow, DivTableCell} from "../TSStyled";

const PokeCard = ({sprites, height, weight, game_indices, types}: IPokemon) => {
  return (
      <Container>
        <Img src={sprites["front_default"]} />
          <DivTable>
            <DivTableBody>
              <DivTableRow>
                <DivTableCell>Type</DivTableCell>
                <DivTableCell>{types[0].type.name}</DivTableCell>
              </DivTableRow>
              <DivTableRow>
                <DivTableCell>Height</DivTableCell>
                <DivTableCell>
                  {Math.round(height * 3.9)}"
              </DivTableCell>
              </DivTableRow>
              <DivTableRow>
                <DivTableCell>Weight</DivTableCell>
                <DivTableCell>
                  {Math.round(weight / 4.3)} lbs
                </DivTableCell>
              </DivTableRow>
              <DivTableRow>
                <DivTableCell>Number of Battles</DivTableCell>
                <DivTableCell>{game_indices.length}</DivTableCell>
              </DivTableRow>
            </DivTableBody>
          </DivTable>
      </Container>
  );
};

export default PokeCard;

/*

*/