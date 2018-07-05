import storage from '@/utils/storage';

let defaultCity = '上海';
try {
  const {getItem} = storage;
  const city = getItem('city');
  if (city) {
    defaultCity = city;
  }

} catch (e) {
}

export default {
  city: defaultCity,
}