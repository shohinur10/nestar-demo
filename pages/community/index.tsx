import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Stack } from "@mui/material";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Community</Stack>
    </div>
  );
};

export default withLayoutBasic(Community);
