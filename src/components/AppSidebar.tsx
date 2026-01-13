import { cn } from '@/lib/utils'

import Avatar from 'react-avatar'

import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenuItem, SidebarMenu, SidebarMenuButton, SidebarGroup, SidebarGroupContent, useSidebar } from './ui/sidebar'

import { Button } from './ui/button'


import { LogOutIcon } from "lucide-react"

import { Logo } from '@/assets/Logo'

import { APP_SIDEBAR } from '@/constants'
import { UserMenu } from './UserMenu'
// import { useEffect } from 'react'



export const AppSidebar = () => {
    const { isMobile,
        //  toggleSidebar 
    } = useSidebar();

    // useEffect((() => {
    //     toggleSidebar()
    // }), [toggleSidebar])

    return (
        <>
            <Sidebar variant='floating' collapsible='icon'>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem className='px-0.5 max-lg:p-2 '>
                            <Logo variant={isMobile ? "default" : "icon"} />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    {/* primary nav */}
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {APP_SIDEBAR.primaryNav.map(item => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton tooltip={item.title} asChild>
                                            <a href={item.url}>
                                                <item.Icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>

                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>

                    {/* secondary Nav */}

                    {
                        isMobile && (
                            <SidebarGroup className='mt-auto'>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {APP_SIDEBAR.secondaryNav.map(item => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton tooltip={item.title} asChild>
                                                    <a href={item.url}>
                                                        <item.Icon />
                                                        <span>{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>

                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        )
                    }
                </SidebarContent>

                {/* sidebarFooter */}
                <SidebarFooter className={cn(isMobile && 'border-t')}>
                    <SidebarMenu>
                        <SidebarMenuItem className={cn(isMobile && 'p-3')}>
                            {isMobile ?
                                <div className="">
                                    <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2">
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


                                        <div>
                                            <h3 className='text-sm font-semibold'>{APP_SIDEBAR.curProfile.name}</h3>
                                            <p className='text-[13px]'>{APP_SIDEBAR.curProfile.email}</p>
                                        </div>


                                    </div>

                                    <Button
                                        className='mt-3'
                                        variant="ghost"
                                        size="icon-sm"
                                        aria-label='Lagout'>
                                        <LogOutIcon />
                                    </Button>
                                </div>
                                :
                                <UserMenu />
                            }
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>

            </Sidebar>

        </>
    )
}