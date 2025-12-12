import { leaderboardData } from '@/lib/data';
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

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Leaderboard
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          See how you stack up against other learners.
        </p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Trophy className="h-5 w-5 text-secondary" />
            Top Performers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b-white/10">
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((entry, index) => (
                <TableRow key={entry.rank} className="border-b-white/10 hover:bg-white/5">
                  <TableCell className="font-medium text-lg">
                     <span className={cn({
                       'text-yellow-400': index === 0,
                       'text-gray-400': index === 1,
                       'text-yellow-600': index === 2,
                     })}>
                      {entry.rank}
                     </span>
                    </TableCell>
                  <TableCell className="font-medium text-foreground">{entry.username}</TableCell>
                  <TableCell className="text-right font-mono text-secondary">{entry.score}</TableCell>
                  <TableCell className="text-right font-mono text-muted-foreground">{entry.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
