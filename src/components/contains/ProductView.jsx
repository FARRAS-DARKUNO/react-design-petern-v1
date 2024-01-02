import { Typography, Box, Grid, Stack } from "@mui/material";
import { useState, useContext } from "react";
import { gray4Color, brownColor } from "../../utils/color";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlatButtonForm from "../button/FlatButtonForm";
import BorderButtonForm from "../button/BorderButtomForm";
import ModalPaymanet from "../../components/modal/ModalPayment";
import { imageUrl } from "../../utils/imageUrl";
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { useAddCart } from "../../hooks/useAddCart";
import { useCheckout } from "../../hooks/useChekout";
import { convertTime } from "../../utils/moment";

const ProductView = (Props) => {



  const {
    createInvoice,
    setListData,
    setIdPayment,
  } = useCheckout()

  const navigate = useNavigate()

  const { createCart, isLoading } = useAddCart()

  const { isAuth } = useContext(AuthContext)

  const [open, setOpen] = useState(false);

  const [schedule, setSchedule] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Box
        sx={{
          padding: "100px 5% 0px 5%",
        }}
      >
        <Grid container spacing={3} >
          {/* {Props.data.map((product) => ( */}
          <Grid item xs={12} sm={12} md={5} >
            <img
              src={imageUrl + Props.data.image}
              alt={Props.data.name}
              style={{ width: "100%", aspectRatio: "16/9" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} >
            <Typography variant="body1" sx={{ color: gray4Color }}>
              {Props.data.category}
            </Typography>
            <Typography
              fontWeight={700}
              variant="h5"
              sx={{ color: brownColor }}
            >
              {Props.data.name}
            </Typography>
            <Typography
              sx={{
                color: brownColor,
                typography: { lg: "h5", md: "h5", sm: "body1", xs: "body1" },
              }}
            >
              IDR {Props.data.price}
            </Typography>
            {
              Props.data.schedules == null
                ? <div></div>
                : <Box width={"60%"} marginY={"30px"}>
                  <FormControl fullWidth>
                    <InputLabel>Date</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={schedule}
                      label="Select Schedule"
                      onChange={(e) => setSchedule(e.target.value)}
                    >
                      {
                        Props.data.schedules.map((schedule) => (
                          <MenuItem key={schedule} value={schedule.id}>
                            {convertTime(schedule.date)}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </Box>
            }
            {
              isAuth
                ? Props.data.schedules == null
                  ? <Box marginTop={6}>
                    <BorderButtonForm title="Comming Soon" />
                  </Box>
                  : <Stack direction="row" gap={4} marginTop={5}>
                    <BorderButtonForm title={isLoading ? "Loading" : "Add to Cart"} action={() => isLoading ? null : createCart(schedule)} />
                    <FlatButtonForm
                      title={isLoading ? "Loading" : "Buy Now"}
                      action={isLoading ? null : () => {
                        let tempData = [
                          {
                            "idChart": 0,
                            "idSchedule": schedule
                          }
                        ]
                        setListData(tempData)
                        handleOpen()
                      }} />
                  </Stack>
                : <Box marginTop={6}>
                  <FlatButtonForm title="Login to Buy" action={() => navigate('/login')} />
                </Box>
            }
          </Grid>
        </Grid>
      </Box>
      <ModalPaymanet data={Props.payment} open={open} handleClose={handleClose} action={createInvoice} setId={setIdPayment} />
    </>
  );
};

export default ProductView;
