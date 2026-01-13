
import Avatar from "react-avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu"


import { APP_SIDEBAR } from '@/constants'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"


export const UserMenu = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="relative">
                        <Avatar
                            src={APP_SIDEBAR.curProfile.src}
                            size='36px'
                            round='8px'
                        />
                        <div className="absolute bottom-0 right-0 size-2 
                                            bg-emerald-500 
                                            rounded-full
                                            dark:bg-emerald-400 ring-sidebar ring-1" >
                        </div>

                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start" className="w-70">

                    <DropdownMenuGroup >
                        {
                            APP_SIDEBAR.userMenu.itemsPrimary.map((Item) =>
                            (
                                <DropdownMenuItem key={Item.title}>
                                    <Item.Icon />
                                    <span> {Item.title}</span>
                                    {Item.kbd && (<DropdownMenuShortcut>{Item.kbd}</DropdownMenuShortcut>
                                    )
                                    }

                                </DropdownMenuItem>
                            )

                            )
                        }
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={APP_SIDEBAR.curProfile.email} className="gap-2 space-y-2">
                        <DropdownMenuLabel>
                            Switch Acount
                        </DropdownMenuLabel>
                        {
                            APP_SIDEBAR.allProfiles.map((profile) => (
                                <DropdownMenuRadioItem key={profile.name} value={profile.email}>
                                    <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2">
                                        <div className="relative">
                                            <Avatar
                                                src={profile.src}
                                                size='36px'
                                                round='8px'
                                            />
                                            <div className="absolute bottom-0 right-0 size-2 
                                            bg-emerald-500 
                                            rounded-full
                                            dark:bg-emerald-400 ring-sidebar ring-1" >
                                            </div>

                                        </div>


                                        <div>
                                            <h3 className='text-sm font-semibold'>{profile.name}</h3>
                                            <p className='text-[13px]'>{profile.email}</p>
                                        </div>


                                    </div>
                                </DropdownMenuRadioItem>

                            ))
                        }

                        <DropdownMenuItem asChild>
                            <Button variant="outline" size="icon-sm" className="w-full" >
                                <PlusIcon />
                                <span>Add Acount</span>
                            </Button>

                        </DropdownMenuItem>

                    </DropdownMenuRadioGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup >
                        {
                            APP_SIDEBAR.userMenu.itemsSecondary.map((Item) =>
                            (
                                <DropdownMenuItem key={Item.title}>
                                    <Item.Icon />
                                    <span> {Item.title}</span>
                                    {Item.kbd && (<DropdownMenuShortcut>{Item.kbd}</DropdownMenuShortcut>
                                    )
                                    }

                                </DropdownMenuItem>
                            )

                            )
                        }
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}