import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrumbs, Typography, Stack, Box } from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomBreadCrumbs: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pathnameList = useMemo(() => {
    return pathname.split("/");
  }, [pathname]);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const currentPath = pathnameList.filter((item, currentIndex) => {
      if (item !== "" && index >= currentIndex) return item;
    });
    router.push("/" + currentPath.join("/"));
  };

  const breadcrumbs = pathnameList.map((path: string, index: number) => {
    if (path === "") return;
    if (index === pathnameList.length - 1) {
      return (
        <Typography
          key={index}
          className="tw-text-sm tw-uppercase tw-font-semibold"
        >
          {path}
        </Typography>
      );
    } else {
      return (
        <div
          className="tw-text-sm tw-cursor-pointer tw-uppercase tw-font-semibold"
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleClick(event, index)
          }
        >
          {path}
        </div>
      );
    }
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadCrumbs;
