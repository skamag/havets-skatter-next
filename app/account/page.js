import { auth } from "../_lib/auth"

export const metadata = {
  title: "Guest area",
}

export default async function Account() {
  const session = await auth
  const firstName = session.use.name.split(" ").at(0)

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  )
}
