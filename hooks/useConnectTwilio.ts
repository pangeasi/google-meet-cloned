import { useToast } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Video from "twilio-video";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
import { usernameAtom } from "../atoms/user";
import { request } from "../config/request";

export const useConnectTwilio = () => {
  const [room, roomSet] = useState<Video.Room | null>(null);
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
        status: "error",
      });
      return;
    }

    const room = await Video.connect(token);
    room.on("participantConnected", (participant) => {
      toast({
        title: "Participant connected",
        description: `${participant.identity} has joined the rom`,
        status: "success",
      });
    });
    room.on("participantDisconnected", (participant) => {
      toast({
        title: "Participant disconnected",
        description: `${participant.identity} has left the room`,
        status: "error",
      });
    });
    room.on("disconnected", () => {
      toast({
        title: "Room disconnected",
        description: "The room has been disconnected",
        status: "error",
      });
      router.push("/");
    });
    toast({
      title: "Connected",
      description: `You are connected to the room ${room.name}`,
      status: "success",
    });
    roomSet(room);
  };

  useEffect(() => {
    !!id && connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return { room };
};
