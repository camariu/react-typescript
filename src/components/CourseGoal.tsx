import { type PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>

        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>

//         {children}
//       </div>
//     </article>
//   );
// };

// export default CourseGoal;
