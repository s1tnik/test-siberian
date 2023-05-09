import { styled, keyframes, Box } from "@mui/material";

const growAndFade = keyframes`
 0% {
   opacity: .25;
   transform: scale(0);
 }
 100% {
   opacity: 0;
   transform: scale(1);
 }
`;

const Circle = styled(Box)`
  animation: ${growAndFade} infinite ease-out;
  animation-duration: ${(props) => `${props.frequency}s`};
  background-color: dodgerblue;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  opacity: 0;
  position: absolute;
`;

const Ripple = ({ frequency = 6 }) => {
  return (
    <Box
      sx={{ transform: "scale(2)" }}
      height="90vmin"
      width="90vmin"
      position="relative"
    >
      {[...new Array(frequency)].map((_, index) => (
        <Circle
          frequency={frequency}
          sx={{ animationDelay: `${index}s` }}
          key={index}
        />
      ))}
    </Box>
  );
};

export default Ripple;
