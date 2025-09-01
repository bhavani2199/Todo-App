import './globals.css';

export const metadata = {
  title: 'To-Do List App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        {children}
      </body>
    </html>
  );
}
