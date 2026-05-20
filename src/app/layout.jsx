import { Source_Serif_4, Kaushan_Script } from "next/font/google";
import "./globals.css";

import "@/uploads/styles/header/header.css";
import MainTemplate from "@/components/templates/MainTemplate";
import ReduxProvider from "@/store/provider";
import { HeaderFixedProvider } from "@/context/useHeaderContext";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-source-serif",
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-kaushan",
});

export const metadata = {
  title: "Seven Echoes",
  description: "Seven Echoes",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSerif4.variable} ${kaushanScript.variable}`}
    >
      <body>
        <HeaderFixedProvider>
          <ReduxProvider>
            <MainTemplate>
              {children}
            </MainTemplate>
          </ReduxProvider>
        </HeaderFixedProvider>
      </body>
    </html>
  );
}