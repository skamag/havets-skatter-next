import Navigation from "@/app/_components/Navigation"
import Logo from "@/app/_components/Logo"

import "@/app/_styles/globals.css"

export const metadata = {
  title: "The Wild Oasis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <Logo />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  )
}
