import { getFilms } from '.'

test('calls axios', async () => {
    const films = await getFilms({sortBy: 'release_date', value: 'terminator',searchByFilter: 'title'})
    expect(films.length).toEqual(10)
})