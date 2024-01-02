import Button from "@mui/material/Button";
import { brownColor, yellowColor } from "../../utils/color";
import PropTypes from "prop-types";

const ConfirmationButton = (Props) => {
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
    >
      {Props.title}
    </Button>
  );
};

ConfirmationButton.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ConfirmationButton