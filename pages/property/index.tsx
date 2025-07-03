import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Stack className="container">Property List</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
 // export default PropertyList;
