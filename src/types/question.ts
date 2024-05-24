export interface Question {
  question: [
    {
      [key: string]: {
        answer: string;
        isTrue: boolean;
      };
    }
  ];
}
