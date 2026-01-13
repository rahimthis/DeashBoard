import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"



import { EllipsisVerticalIcon } from "lucide-react"

/**
 * 
 *  types of typescript
 */

type Props = {
    title: string;
    description: string;
    text?: string;
    buttonText: string;
    footerText?: string;
}


/**
 * Constants 
 */

import { DASHBOARD_CARD_MENU } from "@/constants"
import { Button } from "./ui/button";





export const DashboardCard = ({ title, description, text, buttonText, footerText, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <Card className="bg-background">
                <CardHeader className="border-b flex justify-between">
                    <div>
                        <CardTitle> {title}</CardTitle>
                        <CardDescription> {description}</CardDescription>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <EllipsisVerticalIcon size={20} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            {
                                DASHBOARD_CARD_MENU.map((item) => (
                                    <DropdownMenuItem key={item.label}>
                                        <item.Icon />
                                        {item.label}
                                    </DropdownMenuItem>
                                ))
                            }

                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>

                <CardContent className="grid grid-cols-1 grow">
                    {children}
                </CardContent>

                <CardFooter className="border-t ">

                    <Button
                        variant="outline"
                        className="ml-auto"
                    >  {buttonText}
                    </Button>

                </CardFooter>

            </Card>
        </>
    )
} 