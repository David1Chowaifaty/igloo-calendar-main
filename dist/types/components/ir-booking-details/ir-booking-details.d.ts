import { EventEmitter } from '../../stencil-public-runtime';
import { guestInfo, selectOption } from '../../common/models';
import { Booking, Guest } from '../../models/booking.dto';
import { TIglBookPropertyPayload } from '../../models/igl-book-property';
export declare class IrBookingDetails {
  element: HTMLElement;
  bookingDetails: any;
  editBookingItem: any;
  setupDataCountries: selectOption[];
  setupDataCountriesCode: selectOption[];
  languageAbreviation: string;
  language: string;
  ticket: string;
  bookingNumber: string;
  baseurl: string;
  dropdownStatuses: any;
  propertyid: number;
  paymentDetailsUrl: string;
  paymentExceptionMessage: string;
  statusCodes: any;
  hasPrint: boolean;
  hasReceipt: boolean;
  hasDelete: boolean;
  hasMenu: boolean;
  hasRoomEdit: boolean;
  hasRoomDelete: boolean;
  hasRoomAdd: boolean;
  hasCheckIn: boolean;
  hasCheckOut: boolean;
  bookingItem: TIglBookPropertyPayload | null;
  statusData: any[];
  tempStatus: string;
  showPaymentDetails: any;
  bookingData: Booking;
  countryNodeList: any;
  calendarData: any;
  guestData: Guest;
  defaultTexts: any;
  rerenderFlag: boolean;
  isSidebarOpen: boolean;
  sendDataToServer: EventEmitter<guestInfo>;
  handlePrintClick: EventEmitter;
  handleReceiptClick: EventEmitter;
  handleDeleteClick: EventEmitter;
  handleMenuClick: EventEmitter;
  handleRoomAdd: EventEmitter;
  handleRoomEdit: EventEmitter;
  handleRoomDelete: EventEmitter;
  handleAddPayment: EventEmitter;
  private bookingService;
  private roomService;
  componentDidLoad(): void;
  ticketChanged(): Promise<void>;
  setRoomsData(roomServiceResp: any): void;
  initializeApp(): Promise<void>;
  handleIconClick(e: any): void;
  handleEditSidebar(): void;
  handleSelectChange(e: any): void;
  handleClick(e: any): void;
  watchDropdownStatuses(newValue: any, oldValue: any): void;
  openEditSidebar(): void;
  _calculateNights(fromDate: string, toDate: string): number;
  _getBookingStatus(statusCode: string, tableName: string): any;
  updateStatus(): void;
  handleEditInitiated(e: CustomEvent<TIglBookPropertyPayload>): void;
  handleCloseBookingWindow(): void;
  handleDeleteFinish(e: CustomEvent): void;
  handleEditFinished(): Promise<void>;
  render(): any[];
}
