type TimeType =
  | `${string}:${string}`
  | `${string}:${string}:${string}`
  | `${string}:${string} AM`
  | `${string}:${string}:${string} AM`
  | `${string}:${string} PM`
  | `${string}:${string}:${string} PM`
  | number
  | string
  | Date
  | undefined;

const pad2 = (str: string): string => str.padStart(2, '0');
const pad2Str = (num: number): string => num.toString().padStart(2, '0');
const str = (num: number): string => num.toString();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isDateValid = (...val: any[]): boolean => {
  // @ts-ignore
  return !Number.isNaN(new Date(...val).valueOf());
};

/**
 * Formats a date based on the specified format. Uppercase letters for 24-Hour time formats.
 *
 * Example Formats(not restricted to):
 * `hh:mm:ss`,
 * `hh:mm`,
 * `HH:MM` for 24-Hour time,
 * `Q - H`
 *
 * @param time The date to be formatted e.g '09:00 AM', '13:23', new Date()
 * @param format The format to be used
 * @example
 * const time = getFormattedTime(new Date(), 'Q - H');
 * console.log(time);
 * // => 'Half past 9'
 * @returns The formatted date
 */
export default function getFormattedTime(
  time: TimeType,
  format: string
): string {
  if (!time) return '';

  let is24HourFormat: boolean;
  let past11: boolean;
  let past12: boolean;
  let hasHH: boolean;
  let newDate;
  let HH: string;
  let hh: string;
  let H: string;
  let h: string;
  let mm: string;
  let ss: string;
  let dayPeriod: string;
  let newFormat = format;

  if (!isDateValid(time) && typeof time === 'string') {
    const newTime = time.split(' ');
    const timeComponents = newTime[0].split(':');
    [hh, mm, ss = '00'] = timeComponents;
    const hours = parseInt(hh, 10);
    past12 = hours > 12;
    past11 = hours > 11;
    hasHH = /H/.test(format);

    if (past12 || hasHH) {
      is24HourFormat = true;
    } else {
      is24HourFormat = false;
    }

    HH = pad2(hh);
    H = hh;
    mm = pad2(mm);
    ss = pad2(ss);

    if (is24HourFormat && past12) {
      h = str(hours - 12);
      hh = pad2Str(hours - 12);
    } else {
      h = hh;
      hh = pad2(hh);
    }

    if (!is24HourFormat) {
      if (past11) {
        dayPeriod = 'pm';
      } else {
        dayPeriod = 'am';
      }
    } else if (hasHH) {
      dayPeriod = '';
    } else if (past11) {
      dayPeriod = 'pm';
    } else {
      dayPeriod = 'am';
    }
  } else {
    newDate = new Date(time);
    const hours = newDate.getHours();
    past12 = hours > 12;
    past11 = hours > 11;
    hasHH = /H/.test(format);

    if (past12 || hasHH) {
      is24HourFormat = true;
    } else {
      is24HourFormat = false;
    }

    HH = pad2Str(hours);
    H = str(hours);
    mm = pad2Str(newDate.getMinutes());
    ss = pad2Str(newDate.getSeconds());

    if (is24HourFormat && past12) {
      h = str(hours - 12);
      hh = pad2Str(hours - 12);
    } else {
      hh = pad2Str(hours);
      h = str(hours);
    }

    if (!is24HourFormat) {
      if (past11) {
        dayPeriod = 'pm';
      } else {
        dayPeriod = 'am';
      }
    } else if (hasHH) {
      dayPeriod = '';
    } else if (past11) {
      dayPeriod = 'pm';
    } else {
      dayPeriod = 'am';
    }
  }

  const timeObject = {
    HH,
    H,
    hh,
    h,
    mm,
    ss,
    dayPeriod,
  };

  newFormat = newFormat.replace(/hh/, timeObject.hh);
  newFormat = newFormat.replace(/h/, timeObject.h);
  newFormat = newFormat.replace(/mm/, timeObject.mm);
  newFormat = newFormat.replace(/ss/, timeObject.ss);
  newFormat = newFormat.replace(/HH/, timeObject.HH);
  newFormat = newFormat.replace(/H/, timeObject.H);
  newFormat = newFormat.replace(/p/, timeObject.dayPeriod);
  newFormat = newFormat.replace(/P/, timeObject.dayPeriod.toUpperCase());

  return newFormat.trim();
}
