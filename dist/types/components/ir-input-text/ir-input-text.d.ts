import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrInputText {
  name: string;
  value: any;
  label: string;
  placeholder: string;
  inputStyles: string;
  required: boolean;
  LabelAvailable: boolean;
  readonly: boolean;
  type: string;
  submited: boolean;
  inputStyle: boolean;
  size: 'sm' | 'md' | 'lg';
  textSize: 'sm' | 'md' | 'lg';
  labelPosition: 'left' | 'right' | 'center';
  labelBackground: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null;
  labelColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  labelBorder: 'theme' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
  labelWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  valid: boolean;
  initial: boolean;
  textChange: EventEmitter<any>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  watchHandler(newValue: string): void;
  watchHandler2(newValue: boolean): void;
  handleInputChange(event: any): void;
  render(): any;
}
