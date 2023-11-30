import { EventEmitter } from '../../../../stencil-public-runtime';
import { FooterButtonType } from '../../../../models/igl-book-property';
export declare class IglBookingOverviewPage {
  bookingData: any;
  message: string;
  showSplitBookingOption: boolean;
  eventType: string;
  currency: any;
  ratePricingMode: any;
  dateRangeData: any;
  selectedRooms: any;
  dateRangeSelect: EventEmitter;
  roomsDataUpdate: EventEmitter;
  buttonClicked: EventEmitter<FooterButtonType>;
  getSplitBookings(): any;
  isEventType(event: string): boolean;
  render(): any;
}
