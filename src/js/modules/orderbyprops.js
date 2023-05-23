export default function orderByProps(obj, sorting = []) {
  const sortingArr = [];
  const sortingAlphabet = [];

  if (!obj) {
    return [];
  }

  /* Заполнение sortingArr с заданной сортировкой */
  for (const item of sorting) {
    sortingArr.push({ key: item, value: obj[item] });
  }

  /* Заполнение sortingAlphabet оставшиеся элементы после sortingArr */
  for (const key in obj) {
    if (!sorting.includes(key)) {
      sortingAlphabet.push({ key, value: obj[key] });
    }
  }

  /* сортировка по алфавиту массива sortingAlphabet */
  sortingAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));

  /* возвращаем два массива с объединением в один */
  return [...sortingArr, ...sortingAlphabet];
}
