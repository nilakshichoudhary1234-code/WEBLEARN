export const top10Data = [
  { name: 'John', score: 92 },
  { name: 'Sarah', score: 89 },
  { name: 'Mike', score: 85 },
  { name: 'Lisa', score: 95 },
  { name: 'Raj', score: 90 },
  { name: 'Alex', score: 80 },
  { name: 'Emily', score: 88 },
  { name: 'Chris', score: 82 },
  { name: 'Anna', score: 91 },
  { name: 'Tom', score: 78 },
].sort((a, b) => b.score - a.score);

export const moduleData = [
  { module: 'HTML', percent: 95, color: '#4CAF50' },
  { module: 'CSS', percent: 78, color: '#2196F3' },
  { module: 'JS', percent: 62, color: '#FF9800' },
];

export const progressData = [
  { date: 'Day 1', score: 45, average: 40 },
  { date: 'Day 7', score: 78, average: 65 },
  { date: 'Day 14', score: 92, average: 85 },
  { date: 'Day 21', score: 88, average: 80 },
  { date: 'Day 28', score: 95, average: 90 },
];

export const ChartTooltipContent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label || payload[0].payload.module || payload[0].payload.name}
            </span>
            <span className="font-bold text-foreground">
              {payload[0].value}
              {payload[0].payload.module ? '%' : ''}
            </span>
          </div>
          {payload[1] && (
             <div className="flex flex-col space-y-1">
             <span className="text-[0.70rem] uppercase text-muted-foreground">
               Average
             </span>
             <span className="font-bold text-muted-foreground">
               {payload[1].value}
             </span>
           </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};
