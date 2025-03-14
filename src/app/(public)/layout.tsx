import type { Metadata } from "next";
import { Urbanist, Inspiration } from "next/font/google"
import localFont from "next/font/local";
import "../globals.css";
import { Toaster } from "react-hot-toast"
import { Header, Footer } from "@/components";
import { Provider } from "@/provider/SessionProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "@/provider/ReduxProvider";

export const eugusto = localFont({ src: "../../fonts/Eugusto.otf", variable: "--eugusto", weight: "100 900", });
export const urbanist = Urbanist({ subsets: ["latin"], variable: "--urbanist", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], fallback: ["cursive"] });
export const inspiration = Inspiration({ subsets: ["latin"], variable: "--inspiration", weight: "400", fallback: ["Helvetica", "Arial", "sans-serif"] });

export const metadata: Metadata = {
  title: "BC Lounge Restaurant",
  description: "Food for the body is not enough. There must be food for the soul.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${eugusto.variable} ${inspiration.variable} ${urbanist.variable} antialiased font-urbanist`}
      >
        <Provider>
          <AntdRegistry>
            {/*AntdRegistry prevents flicker on the page for antd */}
            <ThemeProvider>
              <StoreProvider>
                <Header />
                <Toaster />
                <div className="font-urbanist min-h-[80vh]">
                  {children}
                </div>
                <Footer />
              </StoreProvider>
            </ThemeProvider>
          </AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}
