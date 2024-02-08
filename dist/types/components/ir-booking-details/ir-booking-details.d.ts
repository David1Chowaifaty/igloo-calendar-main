import { EventEmitter } from '../../stencil-public-runtime';
import { guestInfo, selectOption } from '../../common/models';
import { Booking, Guest } from '../../models/booking.dto';
import { TIglBookPropertyPayload } from '../../models/igl-book-property';
import { ILocale } from "../../stores/locales.store";
import { IToast } from '../ir-toast/toast';
export declare class IrBookingDetails {
  element: HTMLElement;
  bookingDetails: any;
  editBookingItem: any;
  setupDataCountries: selectOption[];
  show_header: boolean;
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
  defaultTexts: ILocale;
  rerenderFlag: boolean;
  sidebarState: 'guest' | 'pickup' | null;
  sendDataToServer: EventEmitter<guestInfo>;
  handlePrintClick: EventEmitter;
  handleReceiptClick: EventEmitter;
  handleDeleteClick: EventEmitter;
  handleMenuClick: EventEmitter;
  handleRoomAdd: EventEmitter;
  handleRoomEdit: EventEmitter;
  handleRoomDelete: EventEmitter;
  handleAddPayment: EventEmitter;
  toast: EventEmitter<IToast>;
  isUpdateClicked: boolean;
  private bookingService;
  private roomService;
  componentDidLoad(): void;
  ticketChanged(): Promise<void>;
  setRoomsData(roomServiceResp: any): void;
  initializeApp(): Promise<void>;
  handleIconClick(e: any): void;
  handleEditSidebar(): void;
  handleSelectChange(e: CustomEvent<any>): void;
  handleClick(e: any): Promise<void>;
  openEditSidebar(): void;
  _calculateNights(fromDate: string, toDate: string): number;
  _getBookingStatus(statusCode: string, tableName: string): any;
  updateStatus(): Promise<void>;
  handleEditInitiated(e: CustomEvent<TIglBookPropertyPayload>): void;
  handleCloseBookingWindow(): void;
  handleDeleteFinish(e: CustomEvent): void;
  resetBookingData(): Promise<void>;
  handleResetBookingData(e: CustomEvent): Promise<void>;
  render(): any[];
}
