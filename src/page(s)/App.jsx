import Quiz from "./Quiz";
import { QuizContextProvider } from "../hooks/context/QuizContext";

function App() {
  return (
    <QuizContextProvider>
     <Quiz/>
    </QuizContextProvider>
  );
}

export default App;
