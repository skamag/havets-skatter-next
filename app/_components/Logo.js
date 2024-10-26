import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.jpg" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <div style={{ borderRadius: "50%", overflow: "hidden" }}>
        <Image
          src={logo}
          height="60"
          quality={100}
          width="60"
          alt="The Wild Oasis logo"
        />
      </div>

      <span className="text-xl font-semibold text-primary-100">
        {/* The Wild Oasis */}
      </span>
    </Link>
  )
}

export default Logo
