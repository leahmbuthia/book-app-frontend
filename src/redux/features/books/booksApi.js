import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token){
            Headers.set('authorization', `Bearer ${token}`)
        }
    }
})
export const bookApi = createApi({
    reducerPath:'bookApi',
    baseQuery,
    tagTypes:['Books'],
    endpoints:(builder) => ({
        getBooks: builder.query({
            query: () => '/get',
            providesTags: ['Books']
        }),
        fetchBookById: builder.query({
            query: (id) => `get/${id}`,
            providesTags: ['Books']
        }),
        postBook: builder.mutation({
            query: (newBook) => ({
                url: '/create-book',
                method: 'POST',
                body: newBook
            }),
            invalidatesTags: ['Books']
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: (results, error, {id}) => [{type: 'Books', id}]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Books']
        }),
    })
})
export const {
    useGetBooksQuery,
    useFetchBookByIdQuery,
    usePostBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = bookApi;
export default bookApi;