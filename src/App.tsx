import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Header } from "./componets/common/Header";
import { UserInfo } from "./componets/MainPage/UserInfo";
Amplify.configure(awsExports);

export default function App() {
  return (
    <>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <Header signOut={signOut} user={user} />
            {user ? (
              <main>
                <UserInfo userInfo={user} signOut={signOut} />
              </main>
            ) : (
              <></>
            )}
          </>
        )}
      </Authenticator>
    </>
  );
}
