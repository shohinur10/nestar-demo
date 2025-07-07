import { NextPage } from "next";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Agents: NextPage = () => {
  const device = useDeviceDetect();
  if(device == "mobile"){
    return <Stack>Agents MOBILE</Stack>
  }else{
  
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Agents</Stack>
    </div>
  );
}
};

export default withLayoutBasic(Agents);
