import { Source_Serif_4 } from 'next/font/google';
import "@/uploads/styles/header/header.css"
import MainTemplate from '@/components/templates/MainTemplate';
import { NotFoundProvider } from '@/context/useNotFoundContext';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-serif',
});

export const metadata = {
  title: "Seven Echoes",
  description: "Seven Echoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={sourceSerif4.variable}>

      <body>
        <NotFoundProvider>
          <MainTemplate>
            {children}
          </MainTemplate>
        </NotFoundProvider>
      </body>

    </html>
  );
}
