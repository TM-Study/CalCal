// 日付に関するロジックを集約するファイル

// Date型 or String型の日付を MM/DD 形式に変換
export const formatDateToMD = (date: Date | string): string => {
  if (typeof date === 'string') {
   date = new Date(date);
  }
  const month = date.getMonth() + 1; // getMonth() は 0 から 11 なので +1 する
  const day = date.getDate();
  return `${month}/${day}`;
}
