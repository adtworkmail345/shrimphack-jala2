export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  scores: { [key: string]: number };
}

export type FarmerType = 'flaminggo' | 'paus' | 'kepiting' | 'kembung' | 'kambing'; // | 'hi-tech';

export interface Result {
  type: FarmerType;
  title: string;
  description: string;
  imageUrl: string;
}