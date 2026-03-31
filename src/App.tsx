import { TopBar } from './components/TopBar';
import { InsightsPanel } from './components/InsightsPanel';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';

function App() {
  useSpeechRecognition();

  return (
    <div className="w-[450px] h-[600px] flex flex-col bg-[#F8F9FB] overflow-hidden font-sans selection:bg-blue-100">
      <TopBar />
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <InsightsPanel />
      </div>
    </div>
  );
}

export default App;
