import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Get me A Chai - A website for chai lovers",
  description: "This website is a crowdfunding platform for chai creaters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // {`${geistSans.variable} ${geistMono.variable} antialiased`}
        className=" bg-blue-950 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-blue-950 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
