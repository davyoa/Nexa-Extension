<<<<<<< HEAD

import { Monitor, Mic, User, Ear } from 'lucide-react';
=======
import { Settings, User } from 'lucide-react';
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
import { useTranscriptStore } from '../store/useTranscriptStore';
import { AudioModeSwitch } from './AudioModeSwitch';

export const TopBar = () => {
  const { isRecording, audioSource, setAudioSource, toggleListeningUi, isListeningUiOpen } = useTranscriptStore();

  return (
    <header className="flex-shrink-0 h-16 border-b border-slate-200/60 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 w-full shrink-0 relative z-50">
      <div className="flex items-center space-x-3 text-slate-800 font-bold tracking-tight text-lg">
         <span>NEXA</span>
         {isRecording && (
          <div className="flex items-center space-x-1.5 text-[9px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.5)]"></span>
            <span>Live</span>
          </div>
        )}
      </div>

<<<<<<< HEAD
      <div className="flex items-center space-x-5">
        
        {/* Source Toggle Pill */}
        <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 shadow-inner">
           <button 
             onClick={() => setAudioSource('tab')} 
             className={`p-1.5 rounded-md transition-all duration-200 ${audioSource === 'tab' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
             title="Listen to Tab Audio"
           >
              <Monitor className="w-3.5 h-3.5" />
           </button>
           <button 
             onClick={() => setAudioSource('computer')} 
             className={`p-1.5 rounded-md transition-all duration-200 ${audioSource === 'computer' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
             title="Listen to Computer Mic"
           >
              <Mic className="w-3.5 h-3.5" />
           </button>
        </div>

        {/* Ear Toggle */}
        <button 
          onClick={toggleListeningUi}
          className={`transition-colors p-1.5 rounded-full ${isListeningUiOpen ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
          title="Toggle Listening UI"
        >
          <Ear className="w-4 h-4" />
        </button>
        
        {/* Avatar */}
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center">
            <User className="w-4 h-4 text-slate-400" />
=======
      <div className="flex items-center space-x-6">
        <AudioModeSwitch />

        <div className="flex items-center space-x-4">
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
            <User className="w-6 h-6 text-slate-400" />
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
        </div>
      </div>
    </header>
  );
};
