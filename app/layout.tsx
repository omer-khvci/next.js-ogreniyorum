import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import MountedClient from "./components/MountedClient";
import Navbar from "./components/navbar/Navbar";
import ReduxProvider from "./providers/ReduxProvider";
import ToastProvider from "./providers/ToastProvider";

export default async function RootLayout ({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
            <MountedClient>
              <ToastProvider />
              <LoginModal />
              <RegisterModal/>
              <Navbar user={user}/>
            </MountedClient>
            {children}
            </ReduxProvider>
      </body>
    </html>
  );
};

