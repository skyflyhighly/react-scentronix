"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@mui/material";

interface LinkBoxProps {
  label: string;
  url: string;
  underline: boolean;
}

const LinkBox: React.FC<LinkBoxProps> = ({ label, url, underline }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    router.push(`/${url}`);
  }, []);

  const selected = useMemo(() => {
    return pathname.split("/")[1] === url;
  }, [pathname]);

  return (
    <Box
      className={`tw-p-1 tw-uppercase tw-text-black tw-cursor-pointer tw-font-medium ${
        underline &&
        "hover:tw-box-content hover:tw-border-b-2 hover:tw-border-red-700"
      } ${
        underline &&
        selected &&
        "tw-box-content tw-border-b-2 tw-border-red-700"
      }`}
      onClick={() => handleClick()}
    >
      {label}
    </Box>
  );
};

export default LinkBox;
