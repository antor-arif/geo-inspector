import axios from 'axios';

function extractIP(req) {
  const xForwardedFor = req.headers['x-forwarded-for'];
  if (xForwardedFor) {
    const ips = xForwardedFor.split(',').map(ip => ip.trim());
    return ips[0];
  }
  return req.connection?.remoteAddress || null;
}

async function fetchData(req = null) {
  const isNode = typeof window === 'undefined';
  let url = 'https://ipwho.is';

  if (isNode && req) {
    const ip = extractIP(req);
    if (ip) url = `https://ipwho.is/${ip}`;
  }

  try {
    const res = await axios.get(url);
    const data = res.data;
    delete data['About Us'];
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Function versions of the original class methods:
export async function getFullDetails(req = null) {
  return await fetchData(req);
}

export async function getBasicInfo(req = null) {
  const data = await fetchData(req);
  return {
    ip: data.ip,
    city: data.city,
    country: data.country,
    region: data.region,
    latitude: data.latitude,
    longitude: data.longitude
  };
}

export async function getTimezone(req = null) {
  const data = await fetchData(req);
  return data.timezone;
}

export async function getConnectionDetails(req = null) {
  const data = await fetchData(req);
  return data.connection;
}

export async function getCountryDetails(req = null) {
  const data = await fetchData(req);
  return {
    country: data.country,
    country_code: data.country_code,
    capital: data.capital,
    flag: data.flag,
    borders: data.borders,
    is_eu: data.is_eu
  };
}
