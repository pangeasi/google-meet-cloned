import { atom } from "jotai";
import * as Video from "twilio-video";

export const roomAtom = atom<Video.Room | null>(null);
