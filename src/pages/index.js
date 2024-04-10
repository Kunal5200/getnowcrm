import { data } from "@/assessts/data";
import About from "@/components/about";
import BannerSlider from "@/components/bannerSlider";
import Bussiness from "@/components/bussiness";
import Counter from "@/components/counter";
import CreditSlider from "@/components/creditSlider";
import KeyFeatures from "@/components/keyFeatures";
import Secured from "@/components/secured";
import Support from "@/components/support";
import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <BannerSlider />
        <Container>
          <Box sx={{ mt: 15 }}>
            <Grid container>
              {data.secured.map((val, i) => (
                <Grid item lg={4} key={i}>
                  <Secured
                    img={val.img}
                    description={val.description}
                    title={val.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Container>
          <Box
            sx={{
              my: 2,
            }}
          >
            <About />
          </Box>
        </Container>
        <Box>
          <Bussiness />
        </Box>
        <Box>
          <Support />
        </Box>
        <Box>
          <Counter />
        </Box>
        <Box sx={{ mt: 4 }}>
          <CreditSlider />
        </Box>
        <Container>
          <KeyFeatures />
        </Container>
      </Box>
    </>
  );
}
