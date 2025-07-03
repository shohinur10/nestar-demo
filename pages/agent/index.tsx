import { NextPage } from "next";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";

const Agents: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Agents</Stack>
    </div>
  );
};

export default withLayoutBasic(Agents);
