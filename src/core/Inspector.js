export class Inspector {
  constructor(req = null) {
    this.req = req;
  }

  async _fetchData() {
    const isNode = typeof window === 'undefined';
    let url = 'https://ipwho.is';

    if (isNode && this.req) {
      const ip = this._extractIP(this.req);
      if (ip) url = `https://ipwho.is/${ip}`;
    }

    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async getFullDetails() {
    const data = await this._fetchData();
    delete data["About Us"];
    return data;
  }

  async getBasicInfo() {
    const data = await this._fetchData();
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
    const data = await this._fetchData();
    return data.timezone;
  }

  async getConnectionDetails() {
    const data = await this._fetchData();
    return data.connection;
  }

  async getCountryDetails() {
    const data = await this._fetchData();
    return {
      country: data.country,
      country_code: data.country_code,
      capital: data.capital,
      flag: data.flag,
      borders: data.borders,
      is_eu: data.is_eu
    };
  }

  _extractIP(req) {
    const xForwardedFor = req.headers['x-forwarded-for'];
    if (xForwardedFor) {
      const ips = xForwardedFor.split(',').map(ip => ip.trim());
      return ips[0];
    }
    return req.connection?.remoteAddress || null;
  }
}