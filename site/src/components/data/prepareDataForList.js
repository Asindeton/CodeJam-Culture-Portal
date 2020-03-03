import data from "../MainPage/directorsData"

const dataList = data.reduce ((arr, item, ind) => arr.concat({
  img: `${ind + 1}.jpg`,
  yearsOfLife: item.yearsOfLife,
  place: {
    "ru": item.placeOfBirth.ru,
    "en": item.placeOfBirth.en,
    "be": item.placeOfBirth.be,
  },
    fullName: {
    "ru": item.name.ru + ' ' + item.patronymic.ru + ' ' + item.surname.ru,
    "en": item.name.en + ' ' + item.patronymic.en + ' ' + item.surname.en,
    "be": item.name.be + ' ' + item.patronymic.be + ' ' + item.surname.be,
  },
  smallDescription: {
    "ru": item.description.ru,
    "en": item.description.en,
    "be": item.description.be,
}
}),[]);

export default dataList;
