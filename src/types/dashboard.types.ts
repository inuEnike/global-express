export interface IInput {
  labelFor: string;
  label: string;
  inputType: string;
  placeholder: string;
  id?: string;
  onChange?: () => void;
}
