import storage from '@/utils/storage';

const changeCity = (state, city) => {
  state.city = city;
  const { setItem } = storage;
  try {
    setItem('city', city);
  } catch (e) {

  }
};

const isShowGlobalLoading = (state, bool) => {
  state.globalLoading = bool;
}

export default {
  changeCity,
  isShowGlobalLoading,
}
