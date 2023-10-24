import "../styles/globals.css";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import MountedClient from "./components/MountedClient";
import Navbar from "./components/navbar/Navbar";
import ReduxProvider from "./providers/ReduxProvider";
import ToastProvider from "./providers/ToastProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
            <MountedClient>
              <ToastProvider />
              <LoginModal />
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
