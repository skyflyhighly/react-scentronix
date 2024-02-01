"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

interface TimeContentProps {
  desc: string;
  time: string;
}

const TimeContent: React.FC<TimeContentProps> = ({ desc, time }) => {
  return (
    <Box>
      <Box>
        <Typography variant="caption" className="tw-uppercase">
          {desc}
        </Typography>
      </Box>
      <Box className="tw-mt-[1px]">
        <Typography variant="subtitle1" className="tw-font-semibold">
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeContent;
