'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { quizzes } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, Trophy, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const TIME_PER_QUESTION = 20; // seconds

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const { category, slug } = params;

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (typeof category === 'string' && typeof slug === 'string') {
      const quizData = quizzes[category as keyof typeof quizzes]?.[slug];
      if (quizData) {
        setQuestions(quizData);
      }
    }
  }, [category, slug]);

  useEffect(() => {
    if (quizFinished || selectedAnswer !== null) return;

    if (timeLeft === 0) {
      handleAnswerSelect(-1, -1); // Auto-submit incorrect on time out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizFinished, selectedAnswer]);
  
  const handleAnswerSelect = (optionIndex: number, correctAnswerIndex: number) => {
    setSelectedAnswer(optionIndex);
    if (optionIndex === correctAnswerIndex) {
      setIsCorrect(true);
      setScore((prev) => prev + 1);
    } else {
      setIsCorrect(false);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setQuizFinished(true);
    }
  };

  if (questions.length === 0 && !quizFinished) {
    return <div className="container mx-auto py-8 text-center">Loading quiz...</div>;
  }

  if (quizFinished) {
    return (
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-8rem)] py-8">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Trophy className="w-12 h-12 text-primary"/>
                </div>
                <CardTitle className="text-3xl font-bold mt-4">Quiz Complete!</CardTitle>
                <CardDescription>You did a great job.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-5xl font-bold">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-muted-foreground mt-2">You answered {score} out of {questions.length} questions correctly.</p>
            </CardContent>
            <CardFooter className="flex-col gap-4">
                <Button size="lg" className="w-full" onClick={() => router.push('/leaderboard')}>
                    <BarChart2 className="mr-2 h-4 w-4"/>
                    View Leaderboard
                </Button>
                <Button size="lg" variant="outline" className="w-full" onClick={() => router.push('/modules')}>
                    Choose Another Module
                </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <Progress value={(timeLeft / TIME_PER_QUESTION) * 100} className="mt-2 h-2" />
          </div>
          <CardTitle className="text-2xl font-headline">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQuestion.options.map((option: string, index: number) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === currentQuestion.correctAnswer;
            
            let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline";
            if(selectedAnswer !== null) {
                if (isSelected && isCorrect) variant = "default";
                else if (isSelected && !isCorrect) variant = "destructive";
                else if (isCorrectOption) variant = "default";
            }

            return (
              <Button
                key={index}
                className={cn("w-full justify-start h-auto py-3 text-left whitespace-normal", {
                    'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200 hover:bg-green-200': selectedAnswer !== null && isCorrectOption,
                    'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200 hover:bg-red-200': selectedAnswer !== null && isSelected && !isCorrect
                })}
                variant={selectedAnswer === null ? "outline" : "secondary"}
                onClick={() => handleAnswerSelect(index, currentQuestion.correctAnswer)}
                disabled={selectedAnswer !== null}
              >
                <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full border">{String.fromCharCode(65 + index)}</span>
                {option}
              </Button>
            );
          })}
        </CardContent>
        {selectedAnswer !== null && (
            <CardFooter className="flex-col items-start gap-4 border-t pt-6">
                <div className="flex items-center">
                    {isCorrect ? <CheckCircle2 className="h-6 w-6 text-green-500 mr-2"/> : <XCircle className="h-6 w-6 text-red-500 mr-2"/>}
                    <h3 className="text-lg font-semibold">{isCorrect ? 'Correct!' : 'Incorrect'}</h3>
                </div>
                <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                <Button className="w-full" onClick={handleNextQuestion}>
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </Button>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}
