'use client';

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { moduleData, ChartTooltipContent } from '@/lib/chart-data.tsx';

const COLORS = ['#4CAF50', '#2196F3', '#FF9800'];

export function ModuleMasteryPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Module Mastery</CardTitle>
        <CardDescription>Your progress in each module</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip content={<ChartTooltipContent />} />
            <Pie
              data={moduleData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="percent"
            >
              {moduleData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
