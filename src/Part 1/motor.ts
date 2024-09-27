
import { banks } from "./constants";

export const getBankViaNumber = (codigo: string): string => {
    let bank = "";
    for (let i = 0; i < banks.length; i++) {
      if (banks[i].number === codigo) {
        bank = banks[i].bank;
      }
    }
    return bank;
  };

  