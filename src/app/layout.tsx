import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import SessionProvider from "./components/SessionProvider";
import SideBar from "./components/SideBar";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <div className='flex'>
            {/* SideBar */}
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] '>
              <SideBar />
            </div>
            {/* ClientProvider - Notifications */}
            <div className='bg-[#343541] flex-1'>{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
