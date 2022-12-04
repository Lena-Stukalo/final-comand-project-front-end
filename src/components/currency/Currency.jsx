import { useState, useEffect } from 'react';
import { getCurrency } from '../../service/BunkAPI';
import css from './Currency.module.css';
const currencies = [
  { name: 'USD', kode: 840 },
  { name: 'EUR', kode: 978 },
  { name: 'PLN', kode: 985 },
];

export const Currency = () => {
  const [allCurency, setAllCurrency] = useState([]);

  useEffect(() => {
    getCurrency().then(currencies => {
      setAllCurrency(currencies);
    });
  }, []);
  const serchCurrency = ({ kode }) => {
    if (!allCurency) {
      return;
    }
    const data = allCurency.find(currency => currency.currencyCodeA === kode);
    return data;
  };

  return (
    <table className={css.CurrencyTable}>
      <thead>
        <tr>
          <th className={`${css.TableText} ${css.headTableText}`}>Currency</th>
          <th className={`${css.TableText} ${css.headTableText}`}>Purchase</th>
          <th className={`${css.TableText} ${css.headTableText}`}>Sale</th>
        </tr>
      </thead>
      <tbody className={css}>
        {currencies.map(currency => {
          const currencyData = serchCurrency(currency);
          if (currencyData) {
            return (
              <tr key={currency.kode} className={css.boodyraw}>
                <td className={`${css.TableText} ${css.bodeyTableText}`}>
                  {currency.name}
                </td>
                <td className={`${css.TableText} ${css.bodeyTableText}`}>
                  {(currencyData.rateBuy || currencyData.rateCross).toFixed(2)}
                </td>
                <td className={`${css.TableText} ${css.bodeyTableText}`}>
                  {(currencyData.rateSell || currencyData.rateCross).toFixed(2)}{' '}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
