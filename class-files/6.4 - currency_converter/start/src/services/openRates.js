const openRates = async (base, symbol) => {
  try {
    if (base === "EUR" && symbol === "EUR") {
      return {
        rate: 1
      };
    } else {
      const fetchRates = await fetch(
        `https://api.exchangeratesapi.io/latest?symbols=${symbol}&base=${base}`
      );
      const jsonData = await fetchRates.json();
      return {
        rate: jsonData.rates[symbol]
      };
    }
  } catch (error) {
    return new Promise(resolve => resolve(error));
  }
};

export default openRates;
