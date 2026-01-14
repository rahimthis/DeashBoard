
/**
 * components 
 */

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Avatar from "react-avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"



// Asstes 

import { ArrowDownIcon, ArrowUpIcon, Edit2Icon, Trash2Icon } from "lucide-react"


// type 

import { type ColumnDef } from "@tanstack/react-table"

type VendorCategories =
    | 'Active'
    | 'Inactive'
    | 'Database access'
    | 'Admin'
    | 'Salesforce'
    | 'Business data'
    | 'Customer data'
    | 'Financials'
    | 'SOC2'
    | 'Legal'

export type Vendor = {
    src: string,
    name: string,
    website: string,
    rating: number,
    lastAssessed: string
    ratingGrowthPercent: number,
    categories: VendorCategories[];
}


export const Columns: ColumnDef<Vendor>[] = [
    {
        id: 'select',
        header: (({ table }) => <Checkbox
            checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-lebel="Select Al"
        />),

        cell: (({ row }) => <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />),
        enableSorting: false,
        enableHiding: false,

    },
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <div className="flex items-center gap-2">
                <span>Vendor</span>
                <Button variant="ghost"
                    size='icon-sm'

                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    {
                        column.getIsSorted() === 'desc' ? (
                            <ArrowUpIcon />
                        ) :
                            (
                                <ArrowDownIcon />
                            )
                    }
                </Button>
            </div>
        ),
        cell: ({ row }) => {
            const vendor = row.original;
            return (
                <div className="flex items-center gap-3 2xl:min-w-90">
                    <Avatar size="40px" round src={vendor.src} />

                    <div>
                        <h3>{vendor.name}</h3>
                        <p>{vendor.website}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: 'rating',
        header: 'Rating',
        cell: ({ row }) => {
            const rating = row.original.rating;
            return (
                <div className="flex items-center gap-3">
                    <Progress
                        value={rating}
                        className="min-w-24 xl:min-w-48"
                    />
                    <p className="max-xl:hidden">
                        {rating}
                    </p>
                </div>
            )
        }
    },
    {
        id: 'ratingGrowth',
        cell: ({ row }) => {
            const ratingGrowthPercent = row.original.ratingGrowthPercent;

            return (
                <Badge variant='outline'>
                    {ratingGrowthPercent > 0 ? (
                        <ArrowUpIcon className="text-emerald-500" />
                    ) : (
                        <ArrowDownIcon className="text-red-600" />
                    )}
                    {ratingGrowthPercent}%
                </Badge>

            )
        }

    },
    {
        accessorKey: 'lastAssessed',
        header: 'Last assessed',
        cell: ({ row }) => (
            <div className="text-muted-foreground">{row.original.lastAssessed}</div>
        )
    },
    {
        accessorKey: 'categories',
        header: 'Categories',
        cell: ({ row }) => {
            const categories = row.original.categories;

            return (
                <div className=" flex gap-2">
                    {categories.map((item, index) => {
                        return (
                            index < 3 && (
                                <Badge variant="outline" className="flex items-center gap-1">
                                    {item === "Active" && (
                                        <div className="size-1.5 bg-emerald-500 rounded-full" />
                                    )}
                                    {item === "Inactive" && (
                                        <div className="size-1.5 bg-muted-500 rounded-full" />
                                    )}
                                    <span>{item}</span>
                                </Badge>
                            )
                        )
                    })}

                    {
                        categories.length > 3 && (
                            <Badge variant='outline'>
                                +{categories.length - 3}
                            </Badge>
                        )
                    }
                </div>
            )
        }
    },
    {
        id: 'actions',
        cell: () => {
            return (
                <div className="">
                    <Tooltip delayDuration={250}>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon-sm" aria-label="Delete vendor">
                                <Trash2Icon />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                    </Tooltip>

                    <Tooltip delayDuration={250}>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon-sm" aria-label="Edite vendor">
                                <Edit2Icon />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Edit</TooltipContent>
                    </Tooltip>
                </div>
            )
        }
    }
]