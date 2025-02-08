import { Restaurants } from "../restaurants/Restaurants"
import { Layout } from "../layout/Layout"
import { ThemeContextProvider } from "../themecontext/ThemeContextProvider"
import { UserContextProvider } from "../usercontext/UserContextProvider"

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  )
}
