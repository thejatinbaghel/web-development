import fetch from 'node-fetch';
const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}