import "./globals.css";

export const metadata = {
  title: "Green Pastures | Cattle Farm",
  description: "Premium cattle farming, livestock and sustainable agriculture."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}