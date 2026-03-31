import { create } from 'zustand'

export type AudioSource = 'ambient' | 'tab'

export interface Insights {
  keyPoints: string[];
  summary: string;
  terms: { category: string; value: string }[];
}

interface TranscriptState {
  isRecording: boolean;
<<<<<<< HEAD
  audioSource: 'tab' | 'computer';
  isListeningUiOpen: boolean;
  transcript: TranscriptEntry[];
=======
  audioSource: AudioSource;
  transcript: string[];
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
  interimText: string;
  insights: Insights;
  duration: number;

  // Actions
  toggleRecording: () => void;
<<<<<<< HEAD
  setAudioSource: (source: 'tab' | 'computer') => void;
  toggleListeningUi: () => void;
=======
  setAudioSource: (source: AudioSource) => void;
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
  setInterimText: (text: string) => void;
  appendTranscript: (text: string) => void;
  tickDuration: () => void;
  reset: () => void;
}

export const useTranscriptStore = create<TranscriptState>((set) => ({
  isRecording: false,
<<<<<<< HEAD
  audioSource: 'computer',
  isListeningUiOpen: true, // Show by default or tied to interaction
=======
  audioSource: 'ambient',
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
  transcript: [],
  interimText: '',
  insights: {
    keyPoints: [],
    summary: '',
    terms: []
  },
  duration: 0,
  toggleRecording: () => {
    set((state) => ({ isRecording: !state.isRecording }));
  },
  setAudioSource: (source) => set({ audioSource: source }),
<<<<<<< HEAD
  toggleListeningUi: () => set((state) => ({ isListeningUiOpen: !state.isListeningUiOpen })),
=======
>>>>>>> 4654733e9a4d3e30a03aeaf6ee839b3f49c9400a
  setInterimText: (text) => set({ interimText: text }),
  appendTranscript: (text) => {
    const newEntry: string = `${new Date().toLocaleTimeString([], { hour12: false })}: ${text}`;

    set((state) => {
      const updatedTranscript = [...state.transcript, newEntry];

      return {
        transcript: updatedTranscript,
        interimText: ''
      };
    });
  },
  tickDuration: () => set((state) => ({ duration: state.duration + 1 })),
  reset: () => set({
    isRecording: false,
    transcript: [],
    interimText: '',
    insights: { keyPoints: [], summary: '', terms: [] },
    duration: 0
  })
}));
