import { Restaurants } from "../restaurants/Restaurants"
import { Layout } from "../layout/Layout"
import { ThemeContextProvider } from "../themecontext/ThemeContextProvider"
import { UserContextProvider } from "../usercontext/UserContextProvider"
import { Provider } from "react-redux"
import { store } from "../redux/store"

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  )
}
