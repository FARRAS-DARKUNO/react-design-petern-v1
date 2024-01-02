import { Box, Grid } from "@mui/material";
import { brownColor } from "../../utils/color";
import FooterAbout from "./FooterAbout";
import FooterProduct from "./FooterProduct";
import FooterAddress from "./FooterAddress";

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      width: "100%",
      backgroundColor: brownColor,
      margin : 0
    }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'start',
          padding: "30px 5% ",
          margin : 0
        }}
      >
        <FooterAbout />
        <FooterProduct />
        <FooterAddress/>
      </Grid>
    </Box>
  )
};

export default Footer;
