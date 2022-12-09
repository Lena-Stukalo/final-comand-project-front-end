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
        <tr className={css.row}>
          <th
            className={`${css.TableText} ${css.headTableText} ${css.tableCells}`}
          >
            Currency
          </th>
          <th
            className={`${css.TableText} ${css.headTableText} ${css.tableCells}`}
          >
            Purchase
          </th>
          <th
            className={`${css.TableText} ${css.headTableText} ${css.tableCells}`}
          >
            Sale
          </th>
        </tr>
      </thead>
      <tbody>
        {currencies.map(currency => {
          const currencyData = serchCurrency(currency);
          if (currencyData) {
            return (
              <tr key={currency.kode} className={css.row}>
                <td
                  className={`${css.TableText} ${css.bodyTableText} ${css.tableCells}`}
                >
                  {currency.name}
                </td>
                <td
                  className={`${css.TableText} ${css.bodyTableText} ${css.tableCells}`}
                >
                  {(currencyData.rateBuy || currencyData.rateCross).toFixed(2)}
                </td>
                <td
                  className={`${css.TableText} ${css.bodyTableText} ${css.tableCells}`}
                >
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
