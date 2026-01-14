import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Hearder"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Page, PageHeader } from "./components/Page"
import { DashboardCard } from "./components/DashboardCard"
import { AppBarChart } from "./components/AppBarChart"
import { AppRadialChart } from "./components/AppRadicalChart"
import { TrendingUpIcon } from "lucide-react"
import { DashboardTable } from "./components/DashboardTable"


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
              <div className="grid gap-6 py-8 lg:grid-cols-[1fr_360px] ">
                <DashboardCard
                  title='Vender breakdown'
                  description="Keep track of vendors and their security rating."
                  buttonText="View full report "

                >
                  <AppBarChart />
                </DashboardCard>


                <DashboardCard
                  title='Vender monitored'
                  description="You are using 80% of savailable spots."
                  buttonText="Upgrade plan "

                >
                  <div className=" flex justify-between items-start ">
                    <AppRadialChart />

                    <div className="flex items-center gap-2">
                      <TrendingUpIcon size={20}
                        className="text-emerald-500 dark:text-emerald-400"
                      />

                      <span className="text-emerald-500 dark:text-emerald-400 font-medium">
                        10%
                      </span>
                    </div>
                  </div>


                  <div className="mt-6 lg:mt-8">
                    <p className="font-medium">
                      You've almost reached your limit
                    </p>
                    <p className="text-muted-foreground">
                      You have used 80% of your available spots. Upgrade plan to monitor vendors.
                    </p>
                  </div>
                </DashboardCard>
              </div>

              <DashboardTable></DashboardTable>

            </Page>
          </main>

        </SidebarInset>

      </SidebarProvider>
    </ThemeProvider>
  )
}