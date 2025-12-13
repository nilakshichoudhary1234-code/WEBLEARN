import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { leaderboardData } from '@/lib/data';
import { LeaderboardBarChart } from '@/components/LeaderboardBarChart';
import { ModuleMasteryPieChart } from '@/components/ModuleMasteryPieChart';
import { ProgressLineChart } from '@/components/ProgressLineChart';

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Leaderboard
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          See how you stack up against other learners and visualize your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Trophy className="h-5 w-5 text-secondary" />
                Global Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b-white/10">
                    <TableHead className="w-[80px]">Rank</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right hidden md:table-cell">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((entry) => (
                    <TableRow key={entry.rank} className="border-b-white/10 hover:bg-white/5">
                      <TableCell className="font-bold text-lg">{entry.rank}</TableCell>
                      <TableCell className="font-medium text-foreground">{entry.username}</TableCell>
                      <TableCell className="text-right font-mono text-secondary">{entry.score}</TableCell>
                      <TableCell className="text-right font-mono text-muted-foreground hidden md:table-cell">{entry.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <LeaderboardBarChart />
        </div>

        <div className="space-y-8">
          <ModuleMasteryPieChart />
          <ProgressLineChart />
        </div>
      </div>
    </div>
  );
}
