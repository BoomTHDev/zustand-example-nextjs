export interface StringStore {
  fname: string;
  lname: string;
  setName: (newValue: string) => void;
}