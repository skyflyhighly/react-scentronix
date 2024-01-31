"use client";

import React from "react";
import { Box, Container } from "@mui/material";

import Logo from "./Logo";
import LinkBox from "./LinkBox";

export const Categories = [
  { label: "shop", url: "shop" },
  { label: "recipes", url: "recipes" },
  { label: "learn", url: "learn" },
  { label: "about", url: "about" },
  { label: "blog", url: "blog" },
];

export const SubCategories = [
  { label: "categories", url: "categories" },
  { label: "collections", url: "collections" },
  { label: "resources", url: "resources" },
];

const Navbar = () => {
  return (
    <React.Fragment>
      <Box className="tw-flex tw-flex-col tw-w-full tw-bg-white tw-z-10">
        <Box>
          <Container className="tw-relative tw-flex-row tw-flex tw-justify-start tw-items-center tw-gap-3 md:tw-gap-12 tw-py-4 tw-pl-36">
            <Logo />
            {Categories.map((category) => (
              <LinkBox
                key={category.url}
                label={category.label}
                url={category.url}
              />
            ))}
          </Container>
        </Box>
        <Box className="tw-bg-subCategory">
          <Container className="tw-flex tw-justify-start tw-items-center tw-gap-3 md:tw-gap-4 tw-py-3 tw-pl-36 tw-text-sm">
            {SubCategories.map((category) => (
              <LinkBox
                key={category.url}
                label={category.label}
                url={category.url}
              />
            ))}
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
