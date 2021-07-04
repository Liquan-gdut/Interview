/**
 * 日期格式化
 * @param {str} date 日期 2021-09-21 12：33：99
 * @param {str} fmt 格式 YY/MM/DD HH:mm:ss
 * @returns str 21/09/21 12：33：99
 */

/**
 * @param {str} date 日期 2021-09-21 12：33：99
 * @param {str} fmt 格式 MM/DD HH:mm
 * @returns str 09/21 12：33
 */

const timeFormat = (date, fmt) => {
  // 异常
  if (!date || fmt) return date;
  const dateStr = (new Date(date)).toJSON();
  const [, YYYY, MM, DD, HH, mm, ss] = dateStr.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2,})/);
  return (
    fmt.replace('YYYY', YYYY)
      .replace('YY', YYYY.slice(-2,))
      .replace('MM', MM)
      .replace('DD', DD)
      .replace('HH', HH)
      .replace('mm', mm)
      .replace('ss', ss)
  );
};

console.log(timeFormat('2020-03-10 12:12:19', 'YY/MM/DD')); // 20/03/10
