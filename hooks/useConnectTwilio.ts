import { useToast } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Video from "twilio-video";
import { roomAtom } from "../atoms/room";
import { usernameAtom } from "../atoms/user";
import { request } from "../config/request";

export const useConnectTwilio = () => {
  const [room, roomSet] = useAtom(roomAtom);
  const username = useAtomValue(usernameAtom);
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;
  const connect = async () => {
    const { token } = await request("/api/get_token", {
      method: "POST",
      body: {
        identity: username,
        room: id,
      },
    });

    if (!token) {
      toast({
        title: "Tu identidad no está disponible",
        description: "Alguien más está usando tu nombre",
        position: "top",
        status: "error",
        isClosable: true,
      });
      return;
    }

    const room = await Video.connect(token, {
      dominantSpeaker: true,
    });
    room.on("participantConnected", (participant) => {
      toast({
        title: "Participante conectado",
        description: `${participant.identity} se ha conectado`,
        position: "top",
        status: "success",
        isClosable: true,
      });
    });
    room.on("participantDisconnected", (participant) => {
      toast({
        title: "Participante desconectado",
        description: `${participant.identity} se ha desconectado`,
        position: "top",
        status: "info",
        isClosable: true,
      });
    });
    room.on("disconnected", () => {
      toast({
        title: "Sala desconectada",
        description: "La sala se ha desconectado",
        position: "top",
        status: "info",
        isClosable: true,
      });
      roomSet(null);
      router.push("/");
    });
    toast({
      title: "Conectado a la sala",
      description: `Conectado a la sala ${room.name}`,
      position: "top",
      status: "success",
      isClosable: true,
    });
    roomSet(room);
  };

  useEffect(() => {
    !!id && connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return { room };
};
