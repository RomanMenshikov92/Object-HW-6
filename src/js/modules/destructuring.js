export default function destructuring(obj) {
  const result = [];
  let specialArr;

  /*
    проверка свойства на наличие,
    в случае удачи присваиваем массив из свойства в specialArr,
    иначе возвращаем пустой массив
  */
  if ('special' in obj) {
    specialArr = obj.special;
  } else {
    return [];
  }

  /*
    цикл по массиву с объектами,
    пушим в массив 4 ключа объекта,
    в случае отсутствия свойства description,
    добавляем ему дефолтное значение
  */
  for (const prop of specialArr) {
    let descriptionNew;
    if ('description' in prop) {
      descriptionNew = prop.description;
    } else {
      descriptionNew = 'Описание недоступно';
    }

    result.push({
      id: prop.id,
      name: prop.name,
      description: descriptionNew,
      icon: prop.icon,
    });
  }

  /* возвращаем массив */
  return result;
}
