import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"
import HomePage from "./features/HomePage/HomePage"

function App() {

  return (
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
  )
}

export default App
