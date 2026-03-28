import { AuthContextProvider } from "./contexts/AuthContext.js";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
