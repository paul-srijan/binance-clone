// // pages/api/binance/popular.js
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT'];
//     const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
//     const data = response.data.filter(ticker => symbols.includes(ticker.symbol));

//     const formatted = data.map(ticker => ({
//       symbol: ticker.symbol,
//       price: parseFloat(ticker.lastPrice),
//       change: parseFloat(ticker.priceChangePercent)
//     }));

//     res.status(200).json(formatted);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch from Binance' });
//   }
// }


// src/app/api/popular/route.js

// import axios from 'axios';
// export async function GET() {
//   const res = await fetch('https://api.binance.com/api/v3/ticker/24hr');
//   const data = await res.json();

//   const popular = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT'];
//   const filtered = data.filter((coin) => popular.includes(coin.symbol));

//   return new Response(JSON.stringify(filtered), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }


// src/app/api/popular/route.js
export async function GET() {
  const response = await fetch('https://api.binance.com/api/v3/ticker/24hr');
  const data = await response.json();

  const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT'];

  const filtered = data.filter(item => symbols.includes(item.symbol));

  const result = {};
  filtered.forEach(item => {
    result[item.symbol] = {
      price: parseFloat(item.lastPrice).toFixed(2),
      change: parseFloat(item.priceChangePercent).toFixed(2),
    };
  });

  return Response.json(result);
}
