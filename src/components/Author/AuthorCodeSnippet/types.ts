export type ColorToken =
  | "iris"
  | "irisSoft"
  | "signal"
  | "ashMuted"
  | "bone"
  | "ash"
  | "#E5C07B";

export interface Token {
  text: string;
  color: ColorToken;
}

export type CodeLine = Token[];

export interface Line {
  tokens: Token[];
  key: number;
}

export type Lines = Line[];
