import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  // Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify"; // Importar Auth

function App() {
  // Eliminar signOut de las props
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <View className="App">
      <Card>
        {/* <Image className="App-logo" alt="logo" /> */}
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
