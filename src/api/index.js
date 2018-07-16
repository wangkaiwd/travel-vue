import ajaxFunction from '@/http/axiosConfig';

export const fetchHome = ajaxFunction('/home', 'post');
export const fetchCity = ajaxFunction('/city', 'post');
export const fetchDetail = ajaxFunction('/detail', 'post');
