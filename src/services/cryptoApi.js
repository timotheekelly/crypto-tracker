import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ff72e12c32msh4d38939c8295762p1edd2ajsn305259b884b2'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi ({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})


export const {
    useGetCryptosQuery,
} = cryptoApi;