import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack flexDirection="column" className="home-page" spacing={2}>
      <Stack className="container">Properties</Stack>
      <Stack className="container">Community</Stack>
      <Stack className="container">Agents</Stack>
      <Stack className="container">Cs</Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
