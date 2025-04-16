# geo-inspector

> A professional-grade dynamic IP geolocation tracker that works in **both frontend and backend**.

## 🔥 Features
- Detects user's timezone, IP, location, ISP, and more
- Works in both browser and Node.js
- Auto-detects environment
- Supports both `require` and `import`

## 📦 Installation (Node.js / Frontend with Bundler)
```bash
npm install geo-inspector
# or
yarn add geo-inspector
```

## 📖 Usage

### ➤ Frontend (Browser)
```js
import {
  getFullDetails,
  getBasicInfo,
  getTimezone,
  getConnectionDetails,
  getCountryDetails
} from 'geo-inspector';

getFullDetails().then(console.log);

```

### ➤ Backend (Node.js / Express)
```js
const {
  getFullDetails,
  getBasicInfo,
  getTimezone,
  getConnectionDetails,
  getCountryDetails
} = require('geo-inspector');

app.get('/api/location', async (req, res) => {
  const info = await getFullDetails(req);
  res.json(info);
});

```

## 📘 API Methods
- `getFullDetails()` – returns full IP details
- `getBasicInfo()` – returns IP, city, country, region, lat/lon
- `getTimezone()` – returns timezone info
- `getConnectionDetails()` – returns ISP and connection info
- `getCountryDetails()` – returns flag, capital, borders, etc.

## 🧠 Example Response
```json
{
  "ip": "103.148.74.116",
  "success": true,
  "country": "Bangladesh",
  "city": "Rajshahi",
  "timezone": {
    "id": "Asia/Dhaka",
    "utc": "+06:00"
  },
  "connection": {
    "isp": "Amber IT"
  }
}
```

---

> Built with ❤️ by [Arifur Rahman](https://github.com/antor-arif)