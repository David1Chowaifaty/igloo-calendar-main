import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglBlockDatesView {
  defaultData: {
    [key: string]: any;
  };
  fromDate: string;
  toDate: string;
  entryDate: string;
  entryHour: number;
  isEventHover: boolean;
  entryMinute: number;
  renderAgain: boolean;
  dataUpdateEvent: EventEmitter<{
    [key: string]: any;
  }>;
  private blockDatesData;
  private releaseList;
  private bookingService;
  componentWillLoad(): Promise<void>;
  handleOptionalReason(event: any): void;
  handleReleaseAfterChange(evt: any): void;
  emitData(): void;
  getReleaseHoursString(): string;
  formatNumber(value: number): string | number;
  handleOutOfService(evt: any): void;
  renderPage(): void;
  render(): any;
}
