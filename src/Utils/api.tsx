import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getDate } from "./helpFunctions.tsx";

const baseUrl = 'https://api.tvmaze.com';

const instance = axios.create({baseURL: baseUrl});

// const getMonth = () =>

export const getPremieringShows = () => instance.get<Show[]>(`/schedule?country=GB&date=${'2022-02-14'}`)
    .then(res => res.data)
    .then(allShows => allShows.filter(show => show.name==='Episode 1' && show.season===1))
    .catch(data => ({error: data}));

export const getSearchedShows = (search) => instance.get<Show[]>('/search/shows?q=' + search)
.then(res => res.data)
.catch(data => ({error: data}));