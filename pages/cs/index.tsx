import { NextPage } from "next";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";

const CS: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Cs</Stack>
    </div>
  );
};

export default withLayoutBasic(CS);
