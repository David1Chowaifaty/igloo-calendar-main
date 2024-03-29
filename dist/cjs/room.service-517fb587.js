'use strict';

const calendarData = require('./calendar-data-f96d5e48.js');
const channel_store = require('./channel.store-761e5985.js');
const axios = require('./axios-676363b1.js');

class RoomService {
  async fetchData(id, language) {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.axios.post(`/Get_Exposed_Property?Ticket=${token}`, { id, language });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        calendarData.calendar_data.adultChildConstraints = results.adult_child_constraints;
        calendarData.calendar_data.allowedBookingSources = results.allowed_booking_sources;
        calendarData.calendar_data.allowed_payment_methods = results.allowed_booking_methods;
        calendarData.calendar_data.currency = results.currency;
        calendarData.calendar_data.is_vacation_rental = results.is_vacation_rental;
        calendarData.calendar_data.pickup_service = results.pickup_service;
        calendarData.calendar_data.max_nights = results.max_nights;
        calendarData.calendar_data.roomsInfo = results.roomtypes;
        calendarData.calendar_data.taxes = results.taxes;
        calendarData.calendar_data.id = results.id;
        calendarData.calendar_data.name = results.name;
        calendarData.calendar_data.is_frontdesk_enabled = results.is_frontdesk_enabled;
        return data;
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async getExposedChannels() {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.axios.post(`/Get_Exposed_Channels?Ticket=${token}`, {});
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        const results = data.My_Result;
        channel_store.channels_data.channels = results;
        return data;
      }
    }
    catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async fetchLanguage(code) {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.axios.post(`/Get_Exposed_Language?Ticket=${token}`, { code });
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
  async getExposedConnectedChannels(property_id) {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token !== null) {
        const { data } = await axios.axios.post(`/Get_Exposed_Connected_Channels?Ticket=${token}`, { property_id });
        if (data.ExceptionMsg !== '') {
          throw new Error(data.ExceptionMsg);
        }
        channel_store.channels_data.connected_channels = data.My_Result;
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

//# sourceMappingURL=room.service-517fb587.js.map