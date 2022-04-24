import {
  Box,
  Hide,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
import { usernameAtom } from "../../atoms/user";
import { useIsRoom } from "../../hooks/useIsRoom";

const Username = () => {
  const [username, usernameSet] = useAtom(usernameAtom);
  const { isRoom } = useIsRoom();
  useEffect(() => {
    const name = uniqueNamesGenerator({ dictionaries: [starWars] });
    usernameSet(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (value: string) => {
    usernameSet(value);
  };

  return (
    <HStack color={isRoom ? "white" : "black"}>
      <InputGroup>
        <InputLeftElement>
          <FiUser />
        </InputLeftElement>
        <Input
          value={username}
          onChange={(e) => handleChange(e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
};

export default dynamic(() => Promise.resolve(Username), { ssr: false });
