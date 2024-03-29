import { EventEmitter } from '../../stencil-public-runtime';
import { Booking, Guest } from '../../models/booking.dto';
import { TIglBookPropertyPayload } from '../../models/igl-book-property';
import { ILocale } from "../../stores/locales.store";
import { IToast } from '../ir-toast/toast';
export declare class IrBookingDetails {
  element: HTMLElement;
  language: string;
  ticket: string;
  bookingNumber: string;
  baseurl: string;
  propertyid: number;
  is_from_front_desk: boolean;
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
  isUpdateClicked: boolean;
  toast: EventEmitter<IToast>;
  private bookingService;
  private roomService;
  componentDidLoad(): void;
  ticketChanged(): Promise<void>;
  setRoomsData(roomServiceResp: any): void;
  initializeApp(): Promise<void>;
  handleIconClick(e: any): void;
  handleEditSidebar(): void;
  handleSelectChange(e: CustomEvent<any>): void;
  openEditSidebar(): void;
  _calculateNights(fromDate: string, toDate: string): number;
  updateStatus(): Promise<void>;
  handleEditInitiated(e: CustomEvent<TIglBookPropertyPayload>): void;
  handleCloseBookingWindow(): void;
  handleDeleteFinish(e: CustomEvent): void;
  resetBookingData(): Promise<void>;
  handleResetBookingData(e: CustomEvent): Promise<void>;
  render(): any[];
}
