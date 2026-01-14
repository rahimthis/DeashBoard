import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { MoonIcon, SunIcon, MonitorIcon, CheckIcon } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Toggle Theme"
                    className="relative"
                >
                    <SunIcon className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <MoonIcon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                >
                    <SunIcon className="size-4" />
                    <span>Light</span>
                    {theme === "light" && <CheckIcon className="ms-auto size-4" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                >
                    <MoonIcon className="size-4" />
                    <span>Dark</span>
                    {theme === "dark" && <CheckIcon className="ms-auto size-4" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                >
                    <MonitorIcon className="size-4" />
                    <span>System</span>
                    {theme === "system" && <CheckIcon className="ms-auto size-4" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
