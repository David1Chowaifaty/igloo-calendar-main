/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { ICountry } from "./models/IBooking";
import { IPageTwoDataUpdateProps, PageTwoButtonsTypes } from "./models/models";
export { ICountry } from "./models/IBooking";
export { IPageTwoDataUpdateProps, PageTwoButtonsTypes } from "./models/models";
export namespace Components {
    interface IglApplicationInfo {
        "bedPreferenceType": any[];
        "bookingType": string;
        "guestInfo": { [key: string]: any };
        "guestRefKey": string;
        "index": number;
        "roomsList": { [key: string]: any }[];
        "selectedUnits": number[];
    }
    interface IglBlockDatesView {
        "defaultData": { [key: string]: any };
        "entryDate": string;
        "entryHour": number;
        "entryMinute": number;
        "fromDate": string;
        "toDate": string;
    }
    interface IglBookProperty {
        "bookingData": { [key: string]: any };
        "countryNodeList": any;
        "currency": { id: number; code: string };
        "language": string;
        "propertyid": number;
    }
    interface IglBookingEvent {
        "allBookingEvents": { [key: string]: any };
        "bookingEvent": { [key: string]: any };
        "countryNodeList": any;
        "currency": any;
    }
    interface IglBookingEventHover {
        "bookingEvent": { [key: string]: any };
        "bubbleInfoTop": boolean;
        "countryNodeList": ICountry[];
        "currency": any;
    }
    interface IglBookingRoomRatePlan {
        "bookingType": string;
        "currency": any;
        "dateDifference": number;
        "defaultData": { [key: string]: any };
        "ratePlanData": { [key: string]: any };
        "ratePricingMode": any[];
        "totalAvailableRooms": number;
    }
    interface IglBookingRooms {
        "bookingType": string;
        "currency": any;
        "dateDifference": number;
        "defaultData": { [key: string]: any };
        "ratePricingMode": any[];
        "roomTypeData": { [key: string]: any };
    }
    interface IglCalBody {
        "calendarData": { [key: string]: any };
        "countryNodeList": any;
        "currency": any;
        "isScrollViewDragging": boolean;
        "today": String;
    }
    interface IglCalFooter {
        "calendarData": { [key: string]: any };
        "today": String;
    }
    interface IglCalHeader {
        "calendarData": { [key: string]: any };
        "today": String;
    }
    interface IglDateRange {
        "defaultData": { [key: string]: any };
        "message": string;
    }
    interface IglLegends {
        "legendData": { [key: string]: any };
    }
    interface IglPagetwo {
        "bedPreferenceType": any;
        "bookedByInfoData": { [key: string]: any };
        "bookingData": { [key: string]: any };
        "countryNodeList": any;
        "dateRangeData": { [key: string]: any };
        "isEditOrAddRoomEvent": boolean;
        "isLoading": string;
        "language": string;
        "selectedRooms": any;
        "showSplitBookingOption": boolean;
    }
    interface IglPropertyBookedBy {
        "countryNodeList": ICountry[];
        "defaultData": { [key: string]: any };
        "language": string;
    }
    interface IglTbaBookingView {
        "calendarData": { [key: string]: any };
        "categoriesData": { [key: string]: any };
        "categoryId": any;
        "categoryIndex": any;
        "eventData": { [key: string]: any };
        "eventIndex": any;
        "selectedDate": any;
    }
    interface IglTbaCategoryView {
        "calendarData": { [key: string]: any };
        "categoriesData": { [key: string]: any };
        "categoryId": any;
        "categoryIndex": any;
        "eventDatas": any;
        "selectedDate": any;
    }
    interface IglToBeAssigned {
        "calendarData": { [key: string]: any };
        "from_date": string;
        "loadingMessage": string;
        "propertyid": number;
        "to_date": string;
    }
    interface IglooCalendar {
        "baseurl": string;
        "currencyName": string;
        "from_date": string;
        "language": string;
        "loadingMessage": string;
        "propertyid": number;
        "ticket": string;
        "to_date": string;
    }
    interface IrCommon {
        "extraResources": string;
    }
    interface IrDatePicker {
        "applyLabel": string;
        "autoApply": boolean;
        "cancelLabel": string;
        "customRangeLabel": string;
        "daysOfWeek": string[];
        "firstDay": number;
        "format": string;
        "fromDate": Date;
        "fromLabel": string;
        "maxSpan": moment.DurationInputArg1;
        "monthNames": string[];
        "opens": "left" | "right" | "center";
        "separator": string;
        "toDate": Date;
        "toLabel": string;
        "weekLabel": string;
    }
    interface IrInterceptor {
        "defaultMessage": { loadingMessage: string; successMessage: string; errorMessage: string; };
        "handledEndpoints": string[];
    }
    interface IrToast {
    }
    interface IrTooltip {
        "message": string;
    }
}
export interface IglApplicationInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglApplicationInfoElement;
}
export interface IglBlockDatesViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBlockDatesViewElement;
}
export interface IglBookPropertyCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBookPropertyElement;
}
export interface IglBookingEventCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBookingEventElement;
}
export interface IglBookingEventHoverCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBookingEventHoverElement;
}
export interface IglBookingRoomRatePlanCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBookingRoomRatePlanElement;
}
export interface IglBookingRoomsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglBookingRoomsElement;
}
export interface IglCalBodyCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglCalBodyElement;
}
export interface IglCalFooterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglCalFooterElement;
}
export interface IglCalHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglCalHeaderElement;
}
export interface IglDateRangeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglDateRangeElement;
}
export interface IglLegendsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglLegendsElement;
}
export interface IglPagetwoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglPagetwoElement;
}
export interface IglPropertyBookedByCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglPropertyBookedByElement;
}
export interface IglTbaBookingViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglTbaBookingViewElement;
}
export interface IglTbaCategoryViewCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglTbaCategoryViewElement;
}
export interface IglToBeAssignedCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglToBeAssignedElement;
}
export interface IglooCalendarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIglooCalendarElement;
}
export interface IrDatePickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrDatePickerElement;
}
declare global {
    interface HTMLIglApplicationInfoElement extends Components.IglApplicationInfo, HTMLStencilElement {
    }
    var HTMLIglApplicationInfoElement: {
        prototype: HTMLIglApplicationInfoElement;
        new (): HTMLIglApplicationInfoElement;
    };
    interface HTMLIglBlockDatesViewElement extends Components.IglBlockDatesView, HTMLStencilElement {
    }
    var HTMLIglBlockDatesViewElement: {
        prototype: HTMLIglBlockDatesViewElement;
        new (): HTMLIglBlockDatesViewElement;
    };
    interface HTMLIglBookPropertyElement extends Components.IglBookProperty, HTMLStencilElement {
    }
    var HTMLIglBookPropertyElement: {
        prototype: HTMLIglBookPropertyElement;
        new (): HTMLIglBookPropertyElement;
    };
    interface HTMLIglBookingEventElement extends Components.IglBookingEvent, HTMLStencilElement {
    }
    var HTMLIglBookingEventElement: {
        prototype: HTMLIglBookingEventElement;
        new (): HTMLIglBookingEventElement;
    };
    interface HTMLIglBookingEventHoverElement extends Components.IglBookingEventHover, HTMLStencilElement {
    }
    var HTMLIglBookingEventHoverElement: {
        prototype: HTMLIglBookingEventHoverElement;
        new (): HTMLIglBookingEventHoverElement;
    };
    interface HTMLIglBookingRoomRatePlanElement extends Components.IglBookingRoomRatePlan, HTMLStencilElement {
    }
    var HTMLIglBookingRoomRatePlanElement: {
        prototype: HTMLIglBookingRoomRatePlanElement;
        new (): HTMLIglBookingRoomRatePlanElement;
    };
    interface HTMLIglBookingRoomsElement extends Components.IglBookingRooms, HTMLStencilElement {
    }
    var HTMLIglBookingRoomsElement: {
        prototype: HTMLIglBookingRoomsElement;
        new (): HTMLIglBookingRoomsElement;
    };
    interface HTMLIglCalBodyElement extends Components.IglCalBody, HTMLStencilElement {
    }
    var HTMLIglCalBodyElement: {
        prototype: HTMLIglCalBodyElement;
        new (): HTMLIglCalBodyElement;
    };
    interface HTMLIglCalFooterElement extends Components.IglCalFooter, HTMLStencilElement {
    }
    var HTMLIglCalFooterElement: {
        prototype: HTMLIglCalFooterElement;
        new (): HTMLIglCalFooterElement;
    };
    interface HTMLIglCalHeaderElement extends Components.IglCalHeader, HTMLStencilElement {
    }
    var HTMLIglCalHeaderElement: {
        prototype: HTMLIglCalHeaderElement;
        new (): HTMLIglCalHeaderElement;
    };
    interface HTMLIglDateRangeElement extends Components.IglDateRange, HTMLStencilElement {
    }
    var HTMLIglDateRangeElement: {
        prototype: HTMLIglDateRangeElement;
        new (): HTMLIglDateRangeElement;
    };
    interface HTMLIglLegendsElement extends Components.IglLegends, HTMLStencilElement {
    }
    var HTMLIglLegendsElement: {
        prototype: HTMLIglLegendsElement;
        new (): HTMLIglLegendsElement;
    };
    interface HTMLIglPagetwoElement extends Components.IglPagetwo, HTMLStencilElement {
    }
    var HTMLIglPagetwoElement: {
        prototype: HTMLIglPagetwoElement;
        new (): HTMLIglPagetwoElement;
    };
    interface HTMLIglPropertyBookedByElement extends Components.IglPropertyBookedBy, HTMLStencilElement {
    }
    var HTMLIglPropertyBookedByElement: {
        prototype: HTMLIglPropertyBookedByElement;
        new (): HTMLIglPropertyBookedByElement;
    };
    interface HTMLIglTbaBookingViewElement extends Components.IglTbaBookingView, HTMLStencilElement {
    }
    var HTMLIglTbaBookingViewElement: {
        prototype: HTMLIglTbaBookingViewElement;
        new (): HTMLIglTbaBookingViewElement;
    };
    interface HTMLIglTbaCategoryViewElement extends Components.IglTbaCategoryView, HTMLStencilElement {
    }
    var HTMLIglTbaCategoryViewElement: {
        prototype: HTMLIglTbaCategoryViewElement;
        new (): HTMLIglTbaCategoryViewElement;
    };
    interface HTMLIglToBeAssignedElement extends Components.IglToBeAssigned, HTMLStencilElement {
    }
    var HTMLIglToBeAssignedElement: {
        prototype: HTMLIglToBeAssignedElement;
        new (): HTMLIglToBeAssignedElement;
    };
    interface HTMLIglooCalendarElement extends Components.IglooCalendar, HTMLStencilElement {
    }
    var HTMLIglooCalendarElement: {
        prototype: HTMLIglooCalendarElement;
        new (): HTMLIglooCalendarElement;
    };
    interface HTMLIrCommonElement extends Components.IrCommon, HTMLStencilElement {
    }
    var HTMLIrCommonElement: {
        prototype: HTMLIrCommonElement;
        new (): HTMLIrCommonElement;
    };
    interface HTMLIrDatePickerElement extends Components.IrDatePicker, HTMLStencilElement {
    }
    var HTMLIrDatePickerElement: {
        prototype: HTMLIrDatePickerElement;
        new (): HTMLIrDatePickerElement;
    };
    interface HTMLIrInterceptorElement extends Components.IrInterceptor, HTMLStencilElement {
    }
    var HTMLIrInterceptorElement: {
        prototype: HTMLIrInterceptorElement;
        new (): HTMLIrInterceptorElement;
    };
    interface HTMLIrToastElement extends Components.IrToast, HTMLStencilElement {
    }
    var HTMLIrToastElement: {
        prototype: HTMLIrToastElement;
        new (): HTMLIrToastElement;
    };
    interface HTMLIrTooltipElement extends Components.IrTooltip, HTMLStencilElement {
    }
    var HTMLIrTooltipElement: {
        prototype: HTMLIrTooltipElement;
        new (): HTMLIrTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "igl-application-info": HTMLIglApplicationInfoElement;
        "igl-block-dates-view": HTMLIglBlockDatesViewElement;
        "igl-book-property": HTMLIglBookPropertyElement;
        "igl-booking-event": HTMLIglBookingEventElement;
        "igl-booking-event-hover": HTMLIglBookingEventHoverElement;
        "igl-booking-room-rate-plan": HTMLIglBookingRoomRatePlanElement;
        "igl-booking-rooms": HTMLIglBookingRoomsElement;
        "igl-cal-body": HTMLIglCalBodyElement;
        "igl-cal-footer": HTMLIglCalFooterElement;
        "igl-cal-header": HTMLIglCalHeaderElement;
        "igl-date-range": HTMLIglDateRangeElement;
        "igl-legends": HTMLIglLegendsElement;
        "igl-pagetwo": HTMLIglPagetwoElement;
        "igl-property-booked-by": HTMLIglPropertyBookedByElement;
        "igl-tba-booking-view": HTMLIglTbaBookingViewElement;
        "igl-tba-category-view": HTMLIglTbaCategoryViewElement;
        "igl-to-be-assigned": HTMLIglToBeAssignedElement;
        "igloo-calendar": HTMLIglooCalendarElement;
        "ir-common": HTMLIrCommonElement;
        "ir-date-picker": HTMLIrDatePickerElement;
        "ir-interceptor": HTMLIrInterceptorElement;
        "ir-toast": HTMLIrToastElement;
        "ir-tooltip": HTMLIrTooltipElement;
    }
}
declare namespace LocalJSX {
    interface IglApplicationInfo {
        "bedPreferenceType"?: any[];
        "bookingType"?: string;
        "guestInfo"?: { [key: string]: any };
        "guestRefKey"?: string;
        "index"?: number;
        "onDataUpdateEvent"?: (event: IglApplicationInfoCustomEvent<{ [key: string]: any }>) => void;
        "roomsList"?: { [key: string]: any }[];
        "selectedUnits"?: number[];
    }
    interface IglBlockDatesView {
        "defaultData"?: { [key: string]: any };
        "entryDate"?: string;
        "entryHour"?: number;
        "entryMinute"?: number;
        "fromDate"?: string;
        "onDataUpdateEvent"?: (event: IglBlockDatesViewCustomEvent<{ [key: string]: any }>) => void;
        "toDate"?: string;
    }
    interface IglBookProperty {
        "bookingData"?: { [key: string]: any };
        "countryNodeList"?: any;
        "currency"?: { id: number; code: string };
        "language"?: string;
        "onCloseBookingWindow"?: (event: IglBookPropertyCustomEvent<{ [key: string]: any }>) => void;
        "propertyid"?: number;
    }
    interface IglBookingEvent {
        "allBookingEvents"?: { [key: string]: any };
        "bookingEvent"?: { [key: string]: any };
        "countryNodeList"?: any;
        "currency"?: any;
        "onDragOverEventData"?: (event: IglBookingEventCustomEvent<any>) => void;
        "onHideBubbleInfo"?: (event: IglBookingEventCustomEvent<any>) => void;
        "onUpdateEventData"?: (event: IglBookingEventCustomEvent<any>) => void;
    }
    interface IglBookingEventHover {
        "bookingEvent"?: { [key: string]: any };
        "bubbleInfoTop"?: boolean;
        "countryNodeList"?: ICountry[];
        "currency"?: any;
        "onDeleteButton"?: (event: IglBookingEventHoverCustomEvent<string>) => void;
        "onHideBubbleInfo"?: (event: IglBookingEventHoverCustomEvent<any>) => void;
        "onShowBookingPopup"?: (event: IglBookingEventHoverCustomEvent<any>) => void;
    }
    interface IglBookingRoomRatePlan {
        "bookingType"?: string;
        "currency"?: any;
        "dateDifference"?: number;
        "defaultData"?: { [key: string]: any };
        "onDataUpdateEvent"?: (event: IglBookingRoomRatePlanCustomEvent<{ [key: string]: any }>) => void;
        "onGotoSplitPageTwoEvent"?: (event: IglBookingRoomRatePlanCustomEvent<{ [key: string]: any }>) => void;
        "ratePlanData"?: { [key: string]: any };
        "ratePricingMode"?: any[];
        "totalAvailableRooms"?: number;
    }
    interface IglBookingRooms {
        "bookingType"?: string;
        "currency"?: any;
        "dateDifference"?: number;
        "defaultData"?: { [key: string]: any };
        "onDataUpdateEvent"?: (event: IglBookingRoomsCustomEvent<{ [key: string]: any }>) => void;
        "ratePricingMode"?: any[];
        "roomTypeData"?: { [key: string]: any };
    }
    interface IglCalBody {
        "calendarData"?: { [key: string]: any };
        "countryNodeList"?: any;
        "currency"?: any;
        "isScrollViewDragging"?: boolean;
        "onScrollPageToRoom"?: (event: IglCalBodyCustomEvent<any>) => void;
        "onShowBookingPopup"?: (event: IglCalBodyCustomEvent<any>) => void;
        "today"?: String;
    }
    interface IglCalFooter {
        "calendarData"?: { [key: string]: any };
        "onOptionEvent"?: (event: IglCalFooterCustomEvent<{ [key: string]: any }>) => void;
        "today"?: String;
    }
    interface IglCalHeader {
        "calendarData"?: { [key: string]: any };
        "onGotoRoomEvent"?: (event: IglCalHeaderCustomEvent<{
    [key: string]: any;
  }>) => void;
        "onGotoToBeAssignedDate"?: (event: IglCalHeaderCustomEvent<{
    [key: string]: any;
  }>) => void;
        "onOptionEvent"?: (event: IglCalHeaderCustomEvent<{ [key: string]: any }>) => void;
        "today"?: String;
    }
    interface IglDateRange {
        "defaultData"?: { [key: string]: any };
        "message"?: string;
        "onDateSelectEvent"?: (event: IglDateRangeCustomEvent<{ [key: string]: any }>) => void;
    }
    interface IglLegends {
        "legendData"?: { [key: string]: any };
        "onOptionEvent"?: (event: IglLegendsCustomEvent<{ [key: string]: any }>) => void;
    }
    interface IglPagetwo {
        "bedPreferenceType"?: any;
        "bookedByInfoData"?: { [key: string]: any };
        "bookingData"?: { [key: string]: any };
        "countryNodeList"?: any;
        "dateRangeData"?: { [key: string]: any };
        "isEditOrAddRoomEvent"?: boolean;
        "isLoading"?: string;
        "language"?: string;
        "onButtonClicked"?: (event: IglPagetwoCustomEvent<{
    key: PageTwoButtonsTypes;
    data?: CustomEvent;
  }>) => void;
        "onDataUpdateEvent"?: (event: IglPagetwoCustomEvent<IPageTwoDataUpdateProps>) => void;
        "selectedRooms"?: any;
        "showSplitBookingOption"?: boolean;
    }
    interface IglPropertyBookedBy {
        "countryNodeList"?: ICountry[];
        "defaultData"?: { [key: string]: any };
        "language"?: string;
        "onDataUpdateEvent"?: (event: IglPropertyBookedByCustomEvent<{ [key: string]: any }>) => void;
    }
    interface IglTbaBookingView {
        "calendarData"?: { [key: string]: any };
        "categoriesData"?: { [key: string]: any };
        "categoryId"?: any;
        "categoryIndex"?: any;
        "eventData"?: { [key: string]: any };
        "eventIndex"?: any;
        "onAddToBeAssignedEvent"?: (event: IglTbaBookingViewCustomEvent<any>) => void;
        "onAssignRoomEvent"?: (event: IglTbaBookingViewCustomEvent<{ [key: string]: any }>) => void;
        "onHighlightToBeAssignedBookingEvent"?: (event: IglTbaBookingViewCustomEvent<any>) => void;
        "onScrollPageToRoom"?: (event: IglTbaBookingViewCustomEvent<any>) => void;
        "selectedDate"?: any;
    }
    interface IglTbaCategoryView {
        "calendarData"?: { [key: string]: any };
        "categoriesData"?: { [key: string]: any };
        "categoryId"?: any;
        "categoryIndex"?: any;
        "eventDatas"?: any;
        "onAssignUnitEvent"?: (event: IglTbaCategoryViewCustomEvent<{ [key: string]: any }>) => void;
        "selectedDate"?: any;
    }
    interface IglToBeAssigned {
        "calendarData"?: { [key: string]: any };
        "from_date"?: string;
        "loadingMessage"?: string;
        "onAddToBeAssignedEvent"?: (event: IglToBeAssignedCustomEvent<any>) => void;
        "onHighlightToBeAssignedBookingEvent"?: (event: IglToBeAssignedCustomEvent<any>) => void;
        "onOptionEvent"?: (event: IglToBeAssignedCustomEvent<{ [key: string]: any }>) => void;
        "onReduceAvailableUnitEvent"?: (event: IglToBeAssignedCustomEvent<{ [key: string]: any }>) => void;
        "onShowBookingPopup"?: (event: IglToBeAssignedCustomEvent<any>) => void;
        "propertyid"?: number;
        "to_date"?: string;
    }
    interface IglooCalendar {
        "baseurl"?: string;
        "currencyName"?: string;
        "from_date"?: string;
        "language"?: string;
        "loadingMessage"?: string;
        "onDragOverHighlightElement"?: (event: IglooCalendarCustomEvent<any>) => void;
        "onMoveBookingTo"?: (event: IglooCalendarCustomEvent<any>) => void;
        "propertyid"?: number;
        "ticket"?: string;
        "to_date"?: string;
    }
    interface IrCommon {
        "extraResources"?: string;
    }
    interface IrDatePicker {
        "applyLabel"?: string;
        "autoApply"?: boolean;
        "cancelLabel"?: string;
        "customRangeLabel"?: string;
        "daysOfWeek"?: string[];
        "firstDay"?: number;
        "format"?: string;
        "fromDate"?: Date;
        "fromLabel"?: string;
        "maxSpan"?: moment.DurationInputArg1;
        "monthNames"?: string[];
        "onDateChanged"?: (event: IrDatePickerCustomEvent<{
    start: moment.Moment;
    end: moment.Moment;
  }>) => void;
        "opens"?: "left" | "right" | "center";
        "separator"?: string;
        "toDate"?: Date;
        "toLabel"?: string;
        "weekLabel"?: string;
    }
    interface IrInterceptor {
        "defaultMessage"?: { loadingMessage: string; successMessage: string; errorMessage: string; };
        "handledEndpoints"?: string[];
    }
    interface IrToast {
    }
    interface IrTooltip {
        "message"?: string;
    }
    interface IntrinsicElements {
        "igl-application-info": IglApplicationInfo;
        "igl-block-dates-view": IglBlockDatesView;
        "igl-book-property": IglBookProperty;
        "igl-booking-event": IglBookingEvent;
        "igl-booking-event-hover": IglBookingEventHover;
        "igl-booking-room-rate-plan": IglBookingRoomRatePlan;
        "igl-booking-rooms": IglBookingRooms;
        "igl-cal-body": IglCalBody;
        "igl-cal-footer": IglCalFooter;
        "igl-cal-header": IglCalHeader;
        "igl-date-range": IglDateRange;
        "igl-legends": IglLegends;
        "igl-pagetwo": IglPagetwo;
        "igl-property-booked-by": IglPropertyBookedBy;
        "igl-tba-booking-view": IglTbaBookingView;
        "igl-tba-category-view": IglTbaCategoryView;
        "igl-to-be-assigned": IglToBeAssigned;
        "igloo-calendar": IglooCalendar;
        "ir-common": IrCommon;
        "ir-date-picker": IrDatePicker;
        "ir-interceptor": IrInterceptor;
        "ir-toast": IrToast;
        "ir-tooltip": IrTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "igl-application-info": LocalJSX.IglApplicationInfo & JSXBase.HTMLAttributes<HTMLIglApplicationInfoElement>;
            "igl-block-dates-view": LocalJSX.IglBlockDatesView & JSXBase.HTMLAttributes<HTMLIglBlockDatesViewElement>;
            "igl-book-property": LocalJSX.IglBookProperty & JSXBase.HTMLAttributes<HTMLIglBookPropertyElement>;
            "igl-booking-event": LocalJSX.IglBookingEvent & JSXBase.HTMLAttributes<HTMLIglBookingEventElement>;
            "igl-booking-event-hover": LocalJSX.IglBookingEventHover & JSXBase.HTMLAttributes<HTMLIglBookingEventHoverElement>;
            "igl-booking-room-rate-plan": LocalJSX.IglBookingRoomRatePlan & JSXBase.HTMLAttributes<HTMLIglBookingRoomRatePlanElement>;
            "igl-booking-rooms": LocalJSX.IglBookingRooms & JSXBase.HTMLAttributes<HTMLIglBookingRoomsElement>;
            "igl-cal-body": LocalJSX.IglCalBody & JSXBase.HTMLAttributes<HTMLIglCalBodyElement>;
            "igl-cal-footer": LocalJSX.IglCalFooter & JSXBase.HTMLAttributes<HTMLIglCalFooterElement>;
            "igl-cal-header": LocalJSX.IglCalHeader & JSXBase.HTMLAttributes<HTMLIglCalHeaderElement>;
            "igl-date-range": LocalJSX.IglDateRange & JSXBase.HTMLAttributes<HTMLIglDateRangeElement>;
            "igl-legends": LocalJSX.IglLegends & JSXBase.HTMLAttributes<HTMLIglLegendsElement>;
            "igl-pagetwo": LocalJSX.IglPagetwo & JSXBase.HTMLAttributes<HTMLIglPagetwoElement>;
            "igl-property-booked-by": LocalJSX.IglPropertyBookedBy & JSXBase.HTMLAttributes<HTMLIglPropertyBookedByElement>;
            "igl-tba-booking-view": LocalJSX.IglTbaBookingView & JSXBase.HTMLAttributes<HTMLIglTbaBookingViewElement>;
            "igl-tba-category-view": LocalJSX.IglTbaCategoryView & JSXBase.HTMLAttributes<HTMLIglTbaCategoryViewElement>;
            "igl-to-be-assigned": LocalJSX.IglToBeAssigned & JSXBase.HTMLAttributes<HTMLIglToBeAssignedElement>;
            "igloo-calendar": LocalJSX.IglooCalendar & JSXBase.HTMLAttributes<HTMLIglooCalendarElement>;
            "ir-common": LocalJSX.IrCommon & JSXBase.HTMLAttributes<HTMLIrCommonElement>;
            "ir-date-picker": LocalJSX.IrDatePicker & JSXBase.HTMLAttributes<HTMLIrDatePickerElement>;
            "ir-interceptor": LocalJSX.IrInterceptor & JSXBase.HTMLAttributes<HTMLIrInterceptorElement>;
            "ir-toast": LocalJSX.IrToast & JSXBase.HTMLAttributes<HTMLIrToastElement>;
            "ir-tooltip": LocalJSX.IrTooltip & JSXBase.HTMLAttributes<HTMLIrTooltipElement>;
        }
    }
}
