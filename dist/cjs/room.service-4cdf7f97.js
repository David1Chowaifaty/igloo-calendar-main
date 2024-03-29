'use strict';

const axios = require('./axios-145201a7.js');

class RoomService extends axios.Token {
  async fetchData(id, language) {
    try {
      const token = this.getToken();
      if (token !== null) {
        const { data } = await axios.axios.post(`/Get_Exposed_Property?Ticket=${token}`, { id, language });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        axios.calendar_data.adultChildConstraints = results.adult_child_constraints;
        axios.calendar_data.allowedBookingSources = results.allowed_booking_sources;
        axios.calendar_data.allowed_payment_methods = results.allowed_booking_methods;
        axios.calendar_data.currency = results.currency;
        axios.calendar_data.is_vacation_rental = results.is_vacation_rental;
        axios.calendar_data.pickup_service = results.pickup_service;
        axios.calendar_data.max_nights = results.max_nights;
        axios.calendar_data.roomsInfo = results.roomtypes;
        axios.calendar_data.taxes = results.taxes;
        axios.calendar_data.id = results.id;
        axios.calendar_data.name = results.name;
        axios.calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
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
        const { data } = await axios.axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code, sections });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        let entries = this.transformArrayToObject(data.My_Result.entries);
        axios.locales.entries = entries;
        axios.locales.direction = data.My_Result.direction;
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

exports.RoomService = RoomService;

//# sourceMappingURL=room.service-4cdf7f97.js.map