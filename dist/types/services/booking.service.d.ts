import { BookingDetails, IBlockUnit, ICountry, IEntries, ISetupEntries } from '../models/IBooking';
import { Booking } from '../models/booking.dto';
export declare class BookingService {
  getCalendarData(propertyid: number, from_date: string, to_date: string): Promise<{
    [key: string]: any;
  }>;
  getBookingAvailability(from_date: string, to_date: string, propertyid: number, adultChildCount: {
    adult: number;
    child: number;
  }, language: string, room_type_ids: number[], currency: {
    id: number;
    code: string;
  }): Promise<BookingDetails>;
  getCountries(language: string): Promise<ICountry[]>;
  fetchSetupEntries(): Promise<ISetupEntries>;
  getBlockedInfo(): Promise<IEntries[]>;
  getUserDefaultCountry(): Promise<any>;
  blockUnit(params: IBlockUnit): Promise<any>;
  getUserInfo(email: string): Promise<any>;
  getExoposedBooking(booking_nbr: string, language: string): Promise<Booking>;
  private generateDays;
  private calculateTotalRate;
  fetchExposedGuest(email: string, property_id: number): Promise<any>;
  fetchExposedBookings(booking_nbr: string, property_id: number, from_date: string, to_date: string): Promise<any>;
  bookUser(bookedByInfoData: any, check_in: boolean, fromDate: Date, toDate: Date, guestData: any, totalNights: number, source: {
    code: string;
    description: string;
  }, propertyid: number, rooms: any[], currency: {
    id: number;
    code: string;
  }, bookingNumber?: string, defaultGuest?: any, arrivalTime?: any, pr_id?: number, identifier?: string): Promise<any>;
}
