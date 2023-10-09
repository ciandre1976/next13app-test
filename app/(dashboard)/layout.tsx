import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Dlayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>Todos layout</h2>
        {children}
      </body>
    </html>
  );
}
