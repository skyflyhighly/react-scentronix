"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material";

const Logo = () => {
  const rotuer = useRouter();

  return (
    <Box className="tw-absolute tw-top-0 tw-left-0 tw-p-1 tw-cursor-pointer">
      <Image alt="Logo" height="100" width="110" src="/images/logo.png" />
    </Box>
  );
};

export default Logo;
