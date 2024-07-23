import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGolas] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGolas((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGolas((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}></NewGoal>

      <CourseGoalList
        onDeleteGoal={handleDeleteGoal}
        goals={goals}
      ></CourseGoalList>
    </main>
  );
}
