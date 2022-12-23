import getDayofWeek from './getDayOfWeek';
import getMonthName from './getMonthName';
import getOrdinalNumber from './getOrdinalNumber';

/**
 * Formats a date based on the specified format.
 *
 * Example Formats(not restricted to):
 * `MMM DD, YYYY`,
 * `MMM DTH, YYYY`,
 * `Mmm DD, YYYY`,
 * `Mmm Dth, YYYY`,
 * `MMM DD, YY`,
 * `MMM DTH, YY`,
 * `Mmm DD, YY`,
 * `Mmm Dth, YY`,
 * `Dth of Mmm, YYYY`,
 * `DTH of MMM, YYYY`,
 * `Dth Mmm, YYYY`,
 * `DTH MMM, YYYY`,
 * `YYYY-MM-DD`,
 * `MM-DD-YYYY`,
 * `YY-MM-DD`,
 * `MM-DD-YY`,
 * `YYYY/MM/DD`,
 * `MM/DD/YYYY`,
 * `YY/MM/DD`,
 * `MM/DD/YY`
 *
 * @param date The date to be formatted
 * @param format The format to be used
 * @returns The formatted date
 */

export default function getDateFormat(
  date: string | Date,
  format = 'Mmm Dth, YYYY'
): string {
  const newDate = new Date(date);
  newDate.setTime(
    newDate.getTime() + (newDate.getTimezoneOffset() + 60) * 60000
  );

  let newFormat = format;

  const dateObject = {
    DDDD: getDayofWeek(newDate.getDay()).toUpperCase(),
    Dddd: getDayofWeek(newDate.getDay()),
    DDD: getDayofWeek(newDate.getDay(), true).toUpperCase(),
    Ddd: getDayofWeek(newDate.getDay(), true),
    DD: newDate.getDate().toString().padStart(2, '0'),
    DTH: getOrdinalNumber(newDate.getDate()).toUpperCase(),
    Dth: getOrdinalNumber(newDate.getDate()),
    D: newDate.getDate().toString(),
    MMMM: getMonthName(newDate.getMonth()).toUpperCase(),
    Mmmm: getMonthName(newDate.getMonth()),
    MMM: getMonthName(newDate.getMonth(), true).toUpperCase(),
    Mmm: getMonthName(newDate.getMonth(), true),
    MM: (newDate.getMonth() + 1).toString().padStart(2, '0'),
    YY: parseInt(
      newDate.getFullYear().toString().substring(2, 4),
      10
    ).toString(),
    YYYY: newDate.getFullYear().toString(),
  };

  newFormat = newFormat.replace(/D{4,}/, dateObject.DDDD);
  newFormat = newFormat.replace(/Dd{3,}/, dateObject.Dddd);
  newFormat = newFormat.replace(/DDD/, dateObject.DDD);
  newFormat = newFormat.replace(/Ddd/, dateObject.Ddd);
  newFormat = newFormat.replace(/DD/, dateObject.DD);
  newFormat = newFormat.replace(/DTH/, dateObject.DTH);
  newFormat = newFormat.replace(/Dth/, dateObject.Dth);
  newFormat = newFormat.replace(/D/, dateObject.D);
  newFormat = newFormat.replace(/M{4,}/, dateObject.MMMM);
  newFormat = newFormat.replace(/Mm{3,}/, dateObject.Mmmm);
  newFormat = newFormat.replace(/MMM/, dateObject.MMM);
  newFormat = newFormat.replace(/Mmm/, dateObject.Mmm);
  newFormat = newFormat.replace(/MM/, dateObject.MM);
  newFormat = newFormat.replace(/YYYY/, dateObject.YYYY);
  newFormat = newFormat.replace(/YY/, dateObject.YY);

  return newFormat;
}
