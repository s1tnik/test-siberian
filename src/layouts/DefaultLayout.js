import { Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";

const DefaultLayout = () => {
  return (
    <Container>
      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <Outlet />
      </Stack>
    </Container>
  );
};

export default DefaultLayout;
