import { Backdrop, Stack, Typography } from "@mui/material";
import { useIsFetching } from "react-query";
import Ripple from "../Ripple";

const LoadingScreen = () => {
  const loading = useIsFetching();

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        "&.MuiBackdrop-root": {
          backgroundColor: "white",
        },
      }}
      open={!!loading}
    >
      <Stack
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        borderRadius="50%"
        bgcolor="white"
        height="145px"
        width="145px"
        position="absolute"
        padding="5px"
        border="1px solid"
        borderColor="rgb(30, 144, 255, 0.4)"
      >
        <Typography fontWeight={500} variant="h6">
          Loading
        </Typography>
      </Stack>
      <Ripple frequency={10} />
    </Backdrop>
  );
};

export default LoadingScreen;
