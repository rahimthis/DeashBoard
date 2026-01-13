import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Hearder"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Page, PageHeader } from "./components/Page"
import { DashboardCard } from "./components/DashboardCard"


export const App = () => {
  return (
    <ThemeProvider >
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />

          <main>
            <Page>

              <PageHeader />

              <div className="">
                <DashboardCard
                  title='Vender breakdown'
                  description="Keep track of vendors and their security rating."
                  buttonText="View full report "

                >

                </DashboardCard>
              </div>

            </Page>
          </main>

        </SidebarInset>

      </SidebarProvider>
    </ThemeProvider>
  )
}