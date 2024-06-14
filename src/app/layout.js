import "./globals.css";
import { Inter } from "next/font/google";
import portfolioImage from "../img/nyheim-hunter-portfolio.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyheim Hunter | Tech Enthusiast | Continous Learner ",
  description: "Nyheim Hunter`s software engineer portfolio",
  ogImage: portfolioImage,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
