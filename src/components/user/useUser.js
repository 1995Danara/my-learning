import { use } from "react"
import { UserContextName } from "../usercontext/usercontextname"

export const useUser = () => {
  return use(UserContextName)
}
