import { Footer, Navbar } from '@lookin-app/common-components';
import './global.css';
import Script from 'next/script';

export const metadata = {
  title: 'Welcome to admin-app',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
           <head>
          
            </head> 
      <body>
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
