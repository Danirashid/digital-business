import "./globals.css";
import { Josefin_Sans } from 'next/font/google';

export const metadata = {
  title: "Digital Business",
  description: "Digital business Landing Page",
};

const josf = Josefin_Sans({
  // Disable preloading by setting preload to false
  preload: false,
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={josf.className}>{children}</body>
    </html>
  );
}
