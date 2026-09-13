// Removi's applications. Used by the Applications section and the navbar dropdown,
// so a new application only needs to be added here.
export type Application = {
  id: string;
  icon: 'ecg' | 'home';
  navLabel: string;
  navDescription: string;
  tag: string;
  title: string;
  body: string;
  points: string[];
};

export const applications: Application[] = [
  {
    id: 'arrhythmia-detection',
    icon: 'ecg',
    navLabel: 'AFib & arrhythmia detection',
    navDescription: 'Long-term ECG to detect arrhythmias',
    tag: 'Cardiology',
    title: 'AFib & arrhythmia detection',
    body: 'A continuous single-lead ECG, recorded over extended periods while the patient goes about daily life. The aim is to detect atrial fibrillation and other arrhythmias, including episodes that come and go, and give clinicians the recording they need to make a diagnosis.',
    points: [
      'Continuous single-lead ECG (lead I)',
      'Extended recording periods',
      'Focus: detecting arrhythmias',
    ],
  },
  {
    id: 'hospital-at-home',
    icon: 'home',
    navLabel: 'Hospital at home',
    navDescription: 'Remote monitoring of patients admitted at home',
    tag: 'Hospital at home',
    title: 'Remote monitoring at home',
    body: "For patients hospitalised at home, Removi follows vital signs such as heart rate and rhythm continuously, so the clinical team can keep track of the patient's overall condition. The focus is not on a specific arrhythmia; the aim is to detect signs of deterioration early.",
    points: [
      'Continuous monitoring of vital signs',
      "Overview of the patient's condition",
      'Focus: detecting deterioration',
    ],
  },
];
