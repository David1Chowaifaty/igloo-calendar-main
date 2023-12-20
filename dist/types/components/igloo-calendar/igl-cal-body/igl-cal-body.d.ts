import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IglCalBody {
  showBookingPopup: EventEmitter;
  scrollPageToRoom: EventEmitter;
  isScrollViewDragging: boolean;
  calendarData: {
    [key: string]: any;
  };
  today: String;
  currency: any;
  language: string;
  countryNodeList: any;
  defaultTexts: any;
  dragOverElement: string;
  renderAgain: boolean;
  addBookingDatasEvent: EventEmitter<any[]>;
  private selectedRooms;
  private fromRoomId;
  private newEvent;
  private currentDate;
  private unsubscribe;
  componentWillLoad(): void;
  updateFromStore(): void;
  disconnectedCallback(): void;
  dragOverHighlightElementHandler(event: CustomEvent): void;
  gotoRoom(event: CustomEvent): void;
  addToBeAssignedEvents(event: CustomEvent): void;
  scrollToRoom(roomId: any): void;
  getRoomCategoryByRoomId(roomId: any): any;
  getCategoryName(roomCategory: any): any;
  getCategoryId(roomCategory: any): any;
  getTotalPhysicalRooms(roomCategory: any): any;
  getCategoryRooms(roomCategory: any): any;
  getRoomName(roomInfo: any): any;
  getRoomId(roomInfo: any): any;
  getRoomById(physicalRooms: any, roomId: any): any;
  getBookingData(): any;
  addBookingDatas(aData: any): void;
  getSelectedCellRefName(roomId: any, selectedDay: any): string;
  getSplitBookingEvents(newEvent: any): any;
  closeWindow(): void;
  addNewEvent(roomCategory: any): {
    [key: string]: any;
  };
  getTwoDigitNumStr(num: any): any;
  getDateStr(date: any, locale?: string): string;
  removeNewEvent(): void;
  clickCell(roomId: any, selectedDay: any, roomCategory: any): void;
  showNewBookingPopup(data: any): void;
  renderElement(): void;
  getGeneralCategoryDayColumns(addClass: string, isCategory: boolean, index: number): any;
  getGeneralRoomDayColumns(roomId: string, roomCategory: any): any;
  toggleCategory(roomCategory: any): void;
  getRoomCategoryRow(roomCategory: any, index: any): any;
  getRoomsByCategory(roomCategory: any): any;
  getRoomRows(): any;
  render(): any;
}
