import Button from "@mui/material/Button";
import { brownColor } from "../../utils/color";
import HomeIcon from '@mui/icons-material/Home';
import PropTypes from "prop-types";

const BorderButtomForm = (Props) => {
  return (
    <Button
      variant="outlined"
      onClick={Props.action}
      style={{
        width : '200px',
        border: `1px solid ${brownColor()}`,
        color: brownColor(),
        padding: "6px 0px",
        marginLeft: '10px',
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: '700',
        // startIcon={<HomeIcon />}
      }}
      startIcon={<HomeIcon/>}
    >
    {/* <HomeIcon fontSize="small" style={{ marginRight: '4px' }} sx={{ color: brownColor() }}/> */}
    {Props.title}
    </Button>
  );
};

BorderButtomForm.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default BorderButtomForm
