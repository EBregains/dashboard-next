import '@/app/ui/global.css'
import { DMSans, lusitana } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} antialiased`}>{children}</body>
    </html>
  );
}
