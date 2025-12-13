
'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { User, Mail, Calendar, Award, BarChart2, Zap } from 'lucide-react';

const mockUserData = {
  displayName: 'Alex Doe',
  username: 'alexdoe',
  email: 'alex.doe@example.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  bio: 'Full-stack developer with a passion for learning new technologies and building cool things. Currently diving deep into Next.js and Tailwind CSS.',
  joinedDate: '2023-10-26',
  stats: {
    quizzesTaken: 42,
    avgScore: 88,
    streak: 14,
    moduleProgress: {
      html: 100,
      css: 90,
      javascript: 75,
    },
  },
  recentActivity: [
    { id: 1, topic: 'CSS Flexbox', score: '9/10', date: '2 days ago' },
    { id: 2, topic: 'JS Promises', score: '8/10', date: '3 days ago' },
    { id: 3, topic: 'HTML Forms', score: '10/10', date: '5 days ago' },
  ],
};


export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(mockUserData.displayName);
  const [bio, setBio] = useState(mockUserData.bio);

  const handleSave = () => {
    // In a real app, you'd save this data to a backend or localStorage
    mockUserData.displayName = displayName;
    mockUserData.bio = bio;
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 md:px-6">
      <Card className="glass-card w-full">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-secondary/50">
              <AvatarImage src={mockUserData.avatar} alt={mockUserData.displayName} />
              <AvatarFallback>{mockUserData.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
              ✏️
              <span className="sr-only">Change Avatar</span>
            </Button>
          </div>
          <div className="flex-1">
            {isEditing ? (
              <Input
                className="text-3xl font-bold font-headline tracking-tight"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            ) : (
              <CardTitle className="text-4xl font-bold font-headline tracking-tight text-foreground">
                {displayName}
              </CardTitle>
            )}
            <CardDescription className="mt-1 text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{mockUserData.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Joined {new Date(mockUserData.joinedDate).toLocaleDateString()}</span>
              </div>
            </CardDescription>
          </div>
          <div>
            {isEditing ? (
              <div className="flex gap-2">
                <Button onClick={handleSave}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              </div>
            ) : (
              <Button variant="outline" onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="mt-4">
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium text-muted-foreground">About Me</Label>
            {isEditing ? (
              <Textarea
                id="bio"
                className="min-h-[100px] text-base"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            ) : (
              <p className="text-foreground/90">{bio}</p>
            )}
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="glass-card p-4 rounded-lg">
              <Award className="h-8 w-8 mx-auto text-secondary" />
              <p className="text-3xl font-bold mt-2">{mockUserData.stats.quizzesTaken}</p>
              <p className="text-sm text-muted-foreground">Quizzes Taken</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <BarChart2 className="h-8 w-8 mx-auto text-secondary" />
              <p className="text-3xl font-bold mt-2">{mockUserData.stats.avgScore}%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <Zap className="h-8 w-8 mx-auto text-secondary" />
              <p className="text-3xl font-bold mt-2">{mockUserData.stats.streak}</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </div>
          
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold font-headline mb-3">Module Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">HTML</span>
                    <span className="text-muted-foreground">{mockUserData.stats.moduleProgress.html}%</span>
                  </div>
                  <Progress value={mockUserData.stats.moduleProgress.html} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">CSS</span>
                    <span className="text-muted-foreground">{mockUserData.stats.moduleProgress.css}%</span>
                  </div>
                  <Progress value={mockUserData.stats.moduleProgress.css} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">JavaScript</span>
                    <span className="text-muted-foreground">{mockUserData.stats.moduleProgress.javascript}%</span>
                  </div>
                  <Progress value={mockUserData.stats.moduleProgress.javascript} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-headline mb-3">Recent Activity</h3>
              <ul className="space-y-3">
                {mockUserData.recentActivity.map(activity => (
                  <li key={activity.id} className="glass-card p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">{activity.topic}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <div className="font-mono text-lg font-bold text-secondary">{activity.score}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
