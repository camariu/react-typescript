import { useRef, type FormEvent } from "react";

type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProp) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = goal.current!.value;
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal"> Your goal</label>
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
