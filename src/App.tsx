import "@mantine/core/styles.css";
import { MantineProvider, AppShell } from "@mantine/core";
import { AppHeader } from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }}>
        <AppShell.Header>
          <AppHeader />
        </AppShell.Header>

        <AppShell.Main>
          <Home />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
