import Routes from "@/src/Routes";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  )
}