import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Advertisement from "@/libs/homepage/Advertisement";
import PopularProperties from "@/libs/homepage/PopularProperties";
import TopAgents from "@/libs/homepage/TopAgents";
import TopProperties from "@/libs/homepage/TopProperties";
import TrendProperties from "@/libs/homepage/TrendProperties";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from '../libs/hooks/useDeviceDetect';




const Home: NextPage = () => {
    const device = useDeviceDetect();

    if(device == "mobile"){
      return <Stack>HOMEPAGE MOBILE</Stack>
    }else{
      return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>

  );
 }
};
export default withLayoutMain(Home);
