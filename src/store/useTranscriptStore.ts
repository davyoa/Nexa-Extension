import { create } from 'zustand'

export type AudioSource = 'ambient' | 'tab'

export interface Insights {
  keyPoints: string[];
  summary: string;
  terms: { category: string; value: string }[];
}

interface TranscriptState {
  isRecording: boolean;
  audioSource: AudioSource;
  transcript: string[];
  interimText: string;
  insights: Insights;
  duration: number;

  // Actions
  toggleRecording: () => void;
  setAudioSource: (source: AudioSource) => void;
  setInterimText: (text: string) => void;
  appendTranscript: (text: string) => void;
  tickDuration: () => void;
  reset: () => void;
}

export const useTranscriptStore = create<TranscriptState>((set) => ({
  isRecording: false,
  audioSource: 'ambient',
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
