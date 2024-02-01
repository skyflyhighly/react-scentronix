"use client";

import Image from "next/image";
import { Box, Grid, Typography, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

import CustomBreadCrumbs from "../../components/breadCrumbs/CustomBreadCrumbs";
import CustomButton from "../../components/buttons/CustomButton";
import TimeContent from "../../components/timeContent/TimeContent";
import breadPic from "@/public/images/bread.jpg";

export const firstTimeContentList = [
  {
    desc: "prep",
    time: "10 mins",
  },
  {
    desc: "bake",
    time: "1 hr to 1 hr 15 mins",
  },
  {
    desc: "total",
    time: "1 hr 10 mins",
  },
];

export const secondTimeContentList = [
  {
    desc: "yield",
    time: "1 loaf, 12 generous servings",
  },
];

export default function recipes() {
  return (
    <Box>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 8 }}
        rowSpacing={2}
        className="tw-mt-8"
      >
        <Grid item xs={12} sm={6}>
          <Box className="tw-flex tw-flex-col">
            <CustomBreadCrumbs />
            <Box className="tw-pt-2 md:tw-pt-4">
              <Typography className="tw-text-3xl md:tw-text-4xl tw-font-semibold">
                Whole-Grain Banana Bread
              </Typography>
            </Box>
            <Box className="tw-mt-10 md:tw-mt-20">
              <Typography variant="body2" className="tw-text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Box>

            <Grid
              container
              direction="row"
              spacing={{ xs: 1 }}
              className="tw-my-2 md:tw-my-3"
            >
              <Grid item xs={2}>
                <AccessTimeIcon className="tw-text-5xl" />
              </Grid>
              <Grid item xs={10}>
                <Grid
                  container
                  direction="row"
                  columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  {firstTimeContentList.map((item) => (
                    <Grid item>
                      <TimeContent desc={item.desc} time={item.time} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Divider />

            <Grid
              container
              direction="row"
              spacing={{ xs: 1 }}
              className="tw-mt-2 md:tw-my-4"
            >
              <Grid item xs={2}>
                <AirlineSeatLegroomExtraIcon className="tw-text-5xl" />
              </Grid>
              <Grid item xs={10}>
                <Grid
                  container
                  direction="row"
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <Grid item xs={12} md={5}>
                    {secondTimeContentList.map((item) => (
                      <Grid item>
                        <TimeContent desc={item.desc} time={item.time} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box className="tw-flex tw-gap-2">
                      <CustomButton
                        variant="outlined"
                        startIcon={
                          <ControlPointIcon className="tw-text-black" />
                        }
                        className="tw-uppercase"
                        color="error"
                        label="Save Recipe"
                      />
                      <CustomButton
                        variant="outlined"
                        startIcon={
                          <LocalPrintshopIcon className="tw-text-black" />
                        }
                        className="tw-uppercase"
                        color="error"
                        label="Print"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="tw-w-full">
            <Image alt="bread" sizes="100vw" src={breadPic} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
