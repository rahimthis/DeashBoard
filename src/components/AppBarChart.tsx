


import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartLegend, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

/**
 * Hooks
 */

import { useIsMobile } from "@/hooks/use-mobile"


/**
 * Tyeps
 */


import { VENDOR_BREAKDOWN } from "@/constants"

const chartConfig = {
    eu: { label: "EU", color: 'var(--chart-1)' },
    us: { label: "US", color: 'var(--chart-2)' },
    asia: { label: "ASIA", color: 'var(--chart-3)' }
} satisfies ChartConfig;


export const AppBarChart = () => {

    const isMoboile = useIsMobile()
    return (
        <>
            <ChartContainer config={chartConfig} className="h-70 lg:h-52 w-full">
                <BarChart accessibilityLayer
                    data={VENDOR_BREAKDOWN}
                    barSize={isMoboile ? 12 : 30}>
                    <CartesianGrid vertical={false} />

                    <Bar
                        dataKey='asia'
                        stackId='a'
                        fill="var(--color-asia)"
                    />
                    <Bar
                        dataKey='us'
                        stackId='a'
                        fill="var(--color-us)"
                    />
                    <Bar
                        dataKey='eu'
                        stackId='a'
                        fill="var(--color-eu)"
                        radius={[8, 8, 0, 0]}
                    />

                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    {!isMoboile && (
                        <YAxis
                            tickLine={false}
                            axisLine={false}

                        />
                    )

                    }

                    <ChartTooltip content={<ChartTooltipContent />} />

                    {!isMoboile &&
                        <ChartLegend content={<p className=" font-semibold text-muted-foreground  mt-2">Month</p>} />
                    }
                </BarChart>
            </ChartContainer>
        </>
    )
} 