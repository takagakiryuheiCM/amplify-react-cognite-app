import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { AuthUser } from "aws-amplify/auth";
import { UserIcon } from "./UserIcon";
import anonimousLogo from "../../images/anonimaus_icon.png";

export const Header = ({
  signOut,
  user,
}: {
  signOut: ((data?: any | undefined) => void) | undefined;
  user?: AuthUser;
}) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#F0566E" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        {user ? (
          <>
            <UserIcon imageUrl={anonimousLogo} />
            <Button
              variant="text"
              sx={{ fontSize: "15px" }}
              color="inherit"
              onClick={signOut}
            >
              ログアウト
            </Button>
          </>
        ) : (
          <>ログインしてください</>
        )}
      </Toolbar>
    </AppBar>
  );
};
