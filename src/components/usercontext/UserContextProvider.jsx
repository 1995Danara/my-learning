import { useState, useCallback } from "react"
import { UserContextName } from "./usercontextname"

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = useCallback(() => {
    setUser("Dana")
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <UserContextName value={{ user, login, logout }}>
      {children}
    </UserContextName>
  )
}
