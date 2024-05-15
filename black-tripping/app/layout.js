import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Black Tripping</title>
      <body>{children}</body>
    </html>
  );
}
