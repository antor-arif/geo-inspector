# 🌍 geo-inspector

**geo-inspector** is a universal IP intelligence tracking library. It supports both `import` and `require`, runs in Node.js and browsers, and gives detailed location, timezone, and connection metadata.

---

## 🚀 Features
- 🌐 IP to Location lookup
- 🕒 Timezone info
- 📡 ISP / ASN details
- 🏳 Country, capital, flag, borders
- 📍 Latitude / Longitude
- 🌍 Supports IPv4 & IPv6
- ⚙ Works in both frontend and backend
- 🧱 Supports both `require()` and `import`
- 🔐 Obfuscated production code

---

## 📦 Installation
```bash
npm install geo-inspector
```

---

## ✨ Usage

### ✅ ESM
```js
import Inspector from 'geo-inspector';
const geo = new Inspector();
geo.getBasicInfo().then(console.log);
```

### ✅ CommonJS
```js
const Inspector = require('geo-inspector');
const geo = new Inspector();
geo.getBasicInfo().then(console.log);
```

---

## 📘 API Methods

### `getBasicInfo()`
Returns `{ ip, city, region, country, latitude, longitude }`

### `getTimezone()`
Returns `{ id, abbr, is_dst, offset, utc, current_time }`

### `getConnectionDetails()`
Returns `{ isp, org, asn, domain }`

### `getCountryDetails()`
Returns `{ country, code, capital, borders, is_eu, flag }`

### `getFullDetails()`
Returns the full raw response

---

## 📄 License
MIT


