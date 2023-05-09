import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Slider, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import MarketDepthChart from "../charts/MarketDepthChart";
import { queryKeys } from "../react-query/constants";
import { fetchOrderBook, fetchPrice } from "../api";
import ROUTES from "../routes/routes";

const formatLimit = (value) => {
  return value * 50;
};

const DashboardPage = () => {
  const [limit, setLimit] = useState(20);
  const [debouncedLimit, setDebouncedLimit] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLimit(limit);
    }, 600);

    return () => clearTimeout(timerId);
  }, [limit]);

  const { data, isLoading } = useQuery(
    [queryKeys.marketDepth, debouncedLimit],
    () =>
      Promise.all([fetchOrderBook(formatLimit(debouncedLimit)), fetchPrice()])
  );

  const onLimitChange = (e) => {
    setLimit(e.target.value);
  };

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <Stack gap={2} width="100%">
      <MarketDepthChart data={data} />
      <Stack gap={1}>
        <Typography>Data points limit:</Typography>
        <Slider
          valueLabelFormat={formatLimit}
          size="small"
          valueLabelDisplay="auto"
          value={limit}
          onChange={onLimitChange}
        />
      </Stack>
    </Stack>
  );
};

export default DashboardPage;
