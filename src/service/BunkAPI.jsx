export async function getCurrency() {
  return await fetch(`https://api.monobank.ua/bank/currency`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No results`));
  });
}
