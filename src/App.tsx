import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Hearder"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


export const App = () => {
  return (
    <ThemeProvider >
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
        </SidebarInset>

      </SidebarProvider>
    </ThemeProvider>
  )
}