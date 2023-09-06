import Provider from "./_components/provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Provider>{children}</Provider>
    </div>
  );
}
