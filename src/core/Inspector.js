import { fetchIPData } from '../utils/Request.js';

export class Inspector {
  constructor(ip = '') {
    this.ip = ip;
  }

  async getFullDetails() {
    const data = await fetchIPData(this.ip);
    delete data["About Us"];
    return data;
  }

  async getBasicInfo() {
    const data = await fetchIPData(this.ip);
    return {
      ip: data.ip,
      city: data.city,
      country: data.country,
      region: data.region,
      latitude: data.latitude,
      longitude: data.longitude
    };
  }

  async getTimezone() {
    const data = await fetchIPData(this.ip);
    return data.timezone;
  }

  async getConnectionDetails() {
    const data = await fetchIPData(this.ip);
    return data.connection;
  }

  async getCountryDetails() {
    const data = await fetchIPData(this.ip);
    return {
      country: data.country,
      country_code: data.country_code,
      capital: data.capital,
      flag: data.flag,
      borders: data.borders,
      is_eu: data.is_eu
    };
  }
}