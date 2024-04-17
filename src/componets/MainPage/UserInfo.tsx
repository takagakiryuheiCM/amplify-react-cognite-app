import React from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import anonimousLogo from "../../images/anonimaus_icon.png";
import { Button } from "@aws-amplify/ui-react";
import { UserIcon } from "../common/UserIcon";
import { AuthUser } from "aws-amplify/auth";

type TProps = {
  userInfo: AuthUser;
  signOut: any;
};
export function UserInfo({ userInfo, signOut }: TProps): React.ReactElement {
  console.log(userInfo);

  return (
    <Box
      height="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" marginBottom={5}>
        Wellcome {userInfo.username}!!
      </Typography>
      <Card sx={{ minWidth: 345 }}>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <UserIcon imageUrl={anonimousLogo} bigSize />
          </Box>

          <Typography gutterBottom variant="h5" paddingTop={2}>
            {userInfo.username}
          </Typography>
          <Typography gutterBottom variant="h5" paddingTop={2}>
            {userInfo.signInDetails?.loginId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userInfo.userId}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={signOut}>ログアウト</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
