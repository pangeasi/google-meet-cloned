import { createStandaloneToast } from "@chakra-ui/react";

interface Options extends Omit<RequestInit, "body"> {
  body?:
    | {
        [key: string]: any;
      }
    | string;
}

export const request = async (url: string, options: Options = {}) => {
  const toast = createStandaloneToast();

  try {
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }
    options.headers = {
      "Content-Type": "application/json",
    };
    return await fetch(url, options as RequestInit).then((res) => res.json());
  } catch (error) {
    toast({
      title: "An error occurred.",
      description: (error as Error).message,
      status: "error",
      isClosable: true,
    });
    throw new Error((error as Error).message);
  }
};
