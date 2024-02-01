
import { Inter, Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";


import { ThemeProvider } from "@/components/theme-provider";
import Navmenu from "@/components/navmenu";
import Sidebar from "@/components/sidebar";
 
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            
          >
          
            
            <Navmenu />
            
            
            <div className="w-full flex flex-row">
              
            <div className="w-60 p-0 h-screen shadow-md"> 
                {/* <div className={ pathname == '/' ? 'hidden':'w-60 p-0 h-screen shadow-md'}> */}
              <Sidebar />
              </div>
              
              <div className="w-screen p-4">
                { children }
              </div>
              
            </div>
          
          
          
          </ThemeProvider>
        
      </body>
    </html>
  );
}
