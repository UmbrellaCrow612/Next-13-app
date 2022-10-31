export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10 bg-blue-200 border">{children}</div>;
}
