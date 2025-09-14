
export interface ChantSection {
  title: string;
  pali: string[];
  romanized: string[];
  thai: string[];
}

export interface Chant {
  title: string;
  romanizedTitle: string;
  description: string;
  sections: ChantSection[];
}

export interface BookSummary {
  volume: number;
  title: string;
  description: string;
}

export interface Pitaka {
  title: string;
  romanizedTitle: string;
  description: string;
  divisions: {
    title: string;
    description: string;
  }[];
  books: BookSummary[];
}

export interface Tipitaka {
  vinaya: Pitaka;
  sutta: Pitaka;
  abhidhamma: Pitaka;
}

export interface PatientData {
  vitals: string;
  symptoms: string;
  image: {
    mimeType: string;
    data: string;
  } | null;
}

export interface AnalysisResult {
  analysis: string;
  pharma: string;
  holistic: string;
}
