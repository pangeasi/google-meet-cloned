import { useRouter } from "next/router";

export const useIsRoom = () => {
  const router = useRouter();
  return {
    isRoom: router.pathname.includes("/room"),
  };
};
