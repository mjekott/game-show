import { Badge } from "@chakra-ui/react";
import { FC } from "react";

interface CriticScoreProps {
  value: number;
}

const CriticScore: FC<CriticScoreProps> = ({ value }) => {
  const colorSchema = value > 75 ? "green" : value > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={colorSchema} fontSize="14px">
      {value}
    </Badge>
  );
};

export default CriticScore;
