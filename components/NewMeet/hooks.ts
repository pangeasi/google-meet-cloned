import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  adjectives,
  animals,
  colors,
  Config,
  uniqueNamesGenerator,
} from "unique-names-generator";

export const useRandomRoomName = (): [
  string,
  Dispatch<SetStateAction<string>>
] => {
  const [roomName, roomNameSet] = useState("");
  const config: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: "-",
    length: 3,
    style: "capital",
  };

  const randomRoom = uniqueNamesGenerator(config);

  useEffect(() => {
    roomNameSet(randomRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [roomName || randomRoom, roomNameSet];
};
