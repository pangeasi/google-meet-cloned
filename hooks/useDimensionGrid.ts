import useParticipants from "./useParticipants";

export const useDimensionGrid = () => {
  const participants = useParticipants();

  const participantsSize = (participants.length || 0) + 1;
  if (participantsSize === 1) {
    return "100%";
  } else if (participantsSize > 1 && participantsSize <= 4) {
    return "50%";
  } else if (participantsSize > 4 && participantsSize <= 8) {
    return "33.33%";
  } else if (participantsSize > 8 && participantsSize <= 12) {
    return "25%";
  } else if (participantsSize > 12 && participantsSize <= 16) {
    return "20%";
  } else if (participantsSize > 16 && participantsSize <= 20) {
    return "16.67%";
  } else {
    return "14.29%";
  }
};
