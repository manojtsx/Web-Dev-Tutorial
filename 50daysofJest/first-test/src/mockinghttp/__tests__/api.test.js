import axios from 'axios'
import { fetchData } from '../api'
jest.mock('axios');

test('fetchData returns data from API', async()=>{
    const data = {data : 'peanut butter'};
    axios.get.mockResolvedValue(data);
    const result = await fetchData();
    expect(result).toBe('peanut butter');
})

test('fetchData handles API errors',async()=>{
    axios.get.mockRejectedValue(new Error('Network Error'));
    await expect(fetchData()).rejects.toThrow('Network Error');
}
)