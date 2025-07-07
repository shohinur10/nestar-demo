import withLayoutMain from "@/libs/components/layout/LayoutHome";
import Advertisement from "@/libs/homepage/Advertisement";
import PopularProperties from "@/libs/homepage/PopularProperties";
import TopAgents from "@/libs/homepage/TopAgents";
import TopProperties from "@/libs/homepage/TopProperties";
import TrendProperties from "@/libs/homepage/TrendProperties";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";




const Home: NextPage = () => {
    const device = useDeviceDetect();
     

    const {
      loading: getPropertiesLoading,
      data: getPropertiesData,
      error: getPropertiesError,
      refetch: getPropertiesRefetch,
    } =useQuery(GET_PROPERTIES, {
      fetchPolicy: "network-only",
      variables: { 
     input:{
        page:1,
        limit:5,
        sort:"propertyRank",
        direction: "DESC",
        search:{
        },
    },
      },
    });
        console.log( "getPropertiesData => ", getPropertiesData);
      
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
