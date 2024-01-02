import Button from "@mui/material/Button";
import { brownColor, yellowColor } from "../../utils/color";
import PropTypes from "prop-types";

const FlatButtonForm = (Props) => {
  return (
    <Button
      type="submit"
      onClick={Props.action}
      variant="text"
      sx={{
        width: '130px',
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

FlatButtonForm.propTypes = {
  action: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default FlatButtonForm