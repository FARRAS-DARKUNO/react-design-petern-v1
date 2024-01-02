import { Button, Box } from "@mui/material";
import { brownColor, yellowColor } from "../../utils/color";
import { Link } from "react-router-dom";

export const MainHeaderButtonBeforeLogin = () => {
  return (
    <Box>
      <Link to={"/login"}>
        <Button
          // href="/"/login""
          variant="outlined"
          style={{
            border: `2px solid ${brownColor()}`,
            color: brownColor(),
            padding: "5px 0px",
            borderRadius: "12px",
            width: 175,
            fontSize: "16px",
          }}
        >
          Login
        </Button>
      </Link>
      <Link to={"/register"}>
        <Button
          variant="text"
          style={{
            background: yellowColor(),
            color: brownColor(),
            padding: "6px 0px",
            margin: "0px 10px",
            borderRadius: "12px",
            width: 175,
            fontSize: "16px",
          }}
        >
          Register
        </Button>
      </Link>
    </Box>
  );
};
