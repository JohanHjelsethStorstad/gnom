import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johans søknad",
  description: "en kul søknad",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-grey-100">
			<body className={inter.className}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
