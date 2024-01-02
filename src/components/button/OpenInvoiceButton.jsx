import Button from "@mui/material/Button";
import { brownColor, yellowColor } from "../../utils/color";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from "prop-types";

const FlatButtonForm = (Props) => {
  return (
    <Button
      onClick={Props.action}
      variant="text"
      sx={{
        width : '130px',
        background: yellowColor(),
        color: brownColor(),
        padding: "6px 0px",
        marginLeft: '10px',
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: '700'
      }}
      startIcon={<ArrowForwardIcon/>}
    >
        {/* <ArrowForwardIcon fontSize="small" style={{ marginRight: '4px' }}/> */}
      {Props.title}
    </Button>
  );
};

FlatButtonForm.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
export default FlatButtonForm