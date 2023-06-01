'use client'
import { useState } from 'react'
import { Button } from '~/components/ui/button';

export default function DashboardPage() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>this is my dashboard page</h1>
      <h3>{counter}</h3>
      <Button onClick={() => setCounter(prev => prev + 1)}>Increment {counter}</Button>
    </div>
  );
}
