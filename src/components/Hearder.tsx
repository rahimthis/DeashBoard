

import { Button } from "@/components/ui/button";

/**
 * hooks  
 */

import { useSidebar } from "./ui/sidebar";


/**
 * Assets 
 */

import { Logo } from "@/assets/Logo";
import { MenuIcon } from "lucide-react";
import { ThemToggle } from "./ThemeToggle";




export const Header = () => {
    const { toggleSidebar } = useSidebar()

    return (
        <>
            <header className=" flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden">
                <Logo />

                <div className="ml-aut">
                    <ThemToggle />
                </div>

                <Button
                    variant="ghost" size="icon"
                    onClick={toggleSidebar} aria-label="Toggle mobile menu">
                    <MenuIcon />
                </Button>
            </header>
        </>
    )

}