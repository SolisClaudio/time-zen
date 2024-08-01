'use client'
import Header from "../ui/dashboard/header";
import Cronometro from "../ui/dashboard/pomodoroTimer";
import ToDoList from "../ui/dashboard/toDoList";

export default function Page() {
    return (
    <div>
      <Header />
      <Cronometro />
      <ToDoList />
    </div>
  );
}