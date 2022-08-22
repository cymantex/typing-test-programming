import {TypingTest} from "./typing-test/TypingTest";
import {setDataThemeOnHtmlElement, Theme} from "./typing-test/theme/useThemeToggle";
import {getObject} from "local-storage-superjson";

setDataThemeOnHtmlElement(getObject<Theme>("theme"));

function App() {
  return (
      <div className="hero">
        <main className="hero-content block sm:flex text-center">
          <TypingTest/>
        </main>
      </div>
  );
}

export default App
