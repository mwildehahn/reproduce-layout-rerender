import Provider from "./_components/provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
