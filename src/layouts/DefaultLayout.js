import { Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";

const DefaultLayout = () => {
  return (
    <Container>
      <Stack
        width="100%"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Outlet />
      </Stack>
    </Container>
  );
};

export default DefaultLayout;
