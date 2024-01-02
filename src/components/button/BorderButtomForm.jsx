import Button from "@mui/material/Button";
import { brownColor } from "../../utils/color";
import PropTypes from "prop-types";

const BorderButtomForm = (Props) => {
  return (
    <Button
      variant="outlined"
      onClick={Props.action}
      style={{
        width : '130px',
        border: `1px solid ${brownColor()}`,
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

BorderButtomForm.propTypes = { 
  action: PropTypes.func,
  title: PropTypes.string.isRequired
};
export default BorderButtomForm
