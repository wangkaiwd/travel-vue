import storage from '@/utils/storage';

const changeCity = (state, city) => {
  state.city = city;
  const {setItem} = storage;
  try {
    setItem('city', city);
  } catch (e) {

  }
};

export default {
  changeCity,
}