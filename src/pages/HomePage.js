import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import ROUTES from "../routes/routes";

const HomePage = () => {
  const navigate = useNavigate();

  const onStartClick = () => navigate(ROUTES.DASHBOARD);

  return (
    <Stack maxWidth="700px" gap={2} alignItems="center">
      <Typography
        fontWeight="bold"
        variant="h5"
        textAlign="center"
        color="primary"
      >
        Explore the world of cryptocurrencies and stay up-to-date with the
        latest market trends.
      </Typography>
      <Button onClick={onStartClick} size="large" variant="outlined">
        Start
      </Button>
    </Stack>
  );
};

export default HomePage;
