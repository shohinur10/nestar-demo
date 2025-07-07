import { NextPage } from "next";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const CS: NextPage = () => {
  const device = useDeviceDetect();
  if(device == "mobile"){
    return <Stack>CS MOBILE</Stack>
  }else{
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Cs</Stack>
    </div>
  );
  }
};

export default withLayoutBasic(CS);
