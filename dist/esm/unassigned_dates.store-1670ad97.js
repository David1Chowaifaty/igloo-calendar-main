import { T as Token, a as axios, b as calendar_data, l as locales, c as createStore } from './axios-dc3a4843.js';

class RoomService extends Token {
  async fetchData(id, language) {
    try {
      const token = this.getToken();
      if (token !== null) {
        const { data } = await axios.post(`/Get_Exposed_Property?Ticket=${token}`, { id, language });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        calendar_data.adultChildConstraints = results.adult_child_constraints;
        calendar_data.allowedBookingSources = results.allowed_booking_sources;
        calendar_data.allowed_payment_methods = results.allowed_booking_methods;
        calendar_data.currency = results.currency;
        calendar_data.is_vacation_rental = results.is_vacation_rental;
        calendar_data.pickup_service = results.pickup_service;
        calendar_data.max_nights = results.max_nights;
        calendar_data.roomsInfo = results.roomtypes;
        calendar_data.taxes = results.taxes;
        calendar_data.id = results.id;
        calendar_data.name = results.name;
        calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
        return data;
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async fetchLanguage(code, sections = ['_PMS_FRONT']) {
    try {
      const token = this.getToken();
      if (token !== null) {
        const { data } = await axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code, sections });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        let entries = this.transformArrayToObject(data.My_Result.entries);
        locales.entries = entries;
        locales.direction = data.My_Result.direction;
        return { entries, direction: data.My_Result.direction };
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  transformArrayToObject(data) {
    let object = {};
    for (const d of data) {
      object[d.code] = d.description;
    }
    return object;
  }
}

const initialState$1 = {
  days: [],
  months: [],
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState$1);

const initialState = {};
let { state: unassigned_dates } = createStore(initialState);
function addUnassingedDates(data) {
  unassigned_dates = Object.assign(Object.assign({}, unassigned_dates), data);
  /*
   try {
      //console.log("called")
      let categorisedRooms = {};
      const result = await this.toBeAssignedService.getUnassignedRooms(
        this.propertyid,
        dateToFormattedString(new Date(+key)),
        calendarData.roomsInfo,
        calendarData.formattedLegendData,
      );
      result.forEach(room => {
        if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
          categorisedRooms[room.RT_ID] = [room];
        } else {
          categorisedRooms[room.RT_ID].push(room);
        }
      });
      this.unassignedDates[key].categories = categorisedRooms;
    } catch (error) {
      //  toastr.error(error);
    }
  */
}
function getUnassignedDates() {
  return unassigned_dates;
}
function removeUnassignedDates(from_date, to_date) {
  const fromTimestamp = convertToDateTimestamp(from_date);
  const toTimestamp = convertToDateTimestamp(to_date);
  Object.keys(unassigned_dates).forEach(key => {
    const keyTimestamp = parseInt(key);
    if (fromTimestamp <= keyTimestamp && keyTimestamp <= toTimestamp) {
      delete unassigned_dates[key];
    }
  });
}
function convertToDateTimestamp(dateStr) {
  const date = new Date(dateStr);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

export { RoomService as R, addUnassingedDates as a, calendar_dates as c, getUnassignedDates as g, removeUnassignedDates as r };

//# sourceMappingURL=unassigned_dates.store-1670ad97.js.map