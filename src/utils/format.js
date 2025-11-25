import dayjs from "dayjs";
/**
 * iso8601日期格式轉為字串
 * @param value 輸入的日期
 * @param formatString 時間格式
 * @returns 轉成format的日期字串值
 */
function toDateTimeStr(value, formatString = "YYYY-MM-DD HH:mm") {
  return dayjs(value).format(formatString);
}
/**
 * 日期時間轉為UTC格式
 * @param value 輸入的日期
 * @param formatString 時間格式
 * @returns 轉成UTC字串值
 */
function toUtcDateTime(value, formatString = "YYYY-MM-DD HH:mm") {
  const formatValue = dayjs(value).format(formatString);
  const utcTime = new Date(formatValue).toISOString();
  return utcTime.split(".")[0] + "Z"; //移除iso8601毫秒的部分
}
/**
 * 數字每三位數加逗號
 * @param value 輸入的數字
 * @returns  數字每三位數加逗號的字串值
 */
function withCommas(value) {
  return new Intl.NumberFormat().format(value);
}

export { toDateTimeStr, toUtcDateTime, withCommas };
