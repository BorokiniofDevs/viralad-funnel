export type FunnelAnswer = string;

export interface FunnelResponse {
  step: number;
  question: string;
  answer: FunnelAnswer;
}

export interface FunnelState {
  completed: boolean;
  responses: FunnelResponse[];
}
