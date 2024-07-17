import Navigation from "./components/Navigation"
import Logo from "./components/Logo"

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
