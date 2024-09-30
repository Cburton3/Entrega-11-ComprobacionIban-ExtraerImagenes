import { getBankViaNumber } from "./motor";

describe("getBankViaNumber", () => {
  it("inserts code, gets corresponding bank from list", () => {
    //Arrange

    let codigo = "0061";
    //const codigoBanco: string = bancos.numero

    //Act
    const result = getBankViaNumber(codigo);

    //Assert
    const expected = "Banca March";
    expect(result).toBe(expected);
  });
});
