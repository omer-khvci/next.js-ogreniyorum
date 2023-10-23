import "../styles/globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import MountedClient from "./components/MountedClient";
import Navbar from "./components/navbar/Navbar";
import ReduxProvider from "./providers/ReduxProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
            <MountedClient>
              <RegisterModal/>
              <Navbar/>
            </MountedClient>
            {children}
            </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
