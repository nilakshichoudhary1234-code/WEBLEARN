'use client';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { progressData, ChartTooltipContent } from '@/lib/chart-data.tsx';

export function ProgressLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress Over Time</CardTitle>
        <CardDescription>
          Comparison of your score against the average.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={progressData}>
            <XAxis
              dataKey="date"
              stroke="hsl(var(--foreground))"
              fontSize={12}
            />
            <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="average"
              stroke="hsl(var(--secondary))"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
