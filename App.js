import Toast from 'react-native-toast-message';
import {useFonts} from "expo-font";
import Main from "./src/main";

export default function App() {
  const [fontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  });
  
  if (!fontLoaded) {
    return null;
  }
  
  return (
      <>
      <Main />
      <Toast />
      </>
  );
}
