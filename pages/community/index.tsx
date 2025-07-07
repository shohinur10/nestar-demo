import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  const device = useDeviceDetect();
  if(device == "mobile"){
    return <Stack> Community MOBILE</Stack>
  }else{

  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Community</Stack>
    </div>
  );
}
};

export default withLayoutBasic(Community);
