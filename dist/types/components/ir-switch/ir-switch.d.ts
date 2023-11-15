import { EventEmitter } from '../../stencil-public-runtime';
import 'bootstrap-switch';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';
import './jquery-extensions';
export declare class MyComponent {
  value: boolean;
  labelOn: string;
  labelOff: string;
  size?: string | 'mini' | 'small' | 'normal' | 'large';
  switch_animate?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
  inverse?: boolean;
  radioAllOff?: boolean;
  colorOn?: string;
  offColor?: string;
  classOn?: string;
  offClass?: string;
  labelText?: string;
  handleWidth?: string | 'auto';
  labelWidth?: string | 'auto';
  baseClass?: string;
  wrapperClass?: string;
  valueChange: EventEmitter<boolean>;
  componentId: string;
  private testElement;
  componentDidLoad(): void;
  initializeSwitch(): void;
  onSwitchChangeCallback(state: boolean): void;
  render(): any;
}
