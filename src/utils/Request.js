export async function fetchIPData(ip = '') {
    const res = await fetch(`https://ipwho.is/${ip}`);
    if (!res.ok) throw new Error('Failed to fetch IP info');
    return res.json();
  }