import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('useFetch', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should fetch data and set loading to false', async () => {
    const data = { name: 'John Doe', age: 30 };
    fetch.mockResponseOnce(JSON.stringify(data));
    const setData = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('/api/data', setData)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(setData).toHaveBeenCalledWith(data);
    expect(result.current.loading).toBe(false);
  });

  it('should set error when fetch fails', async () => {
    const errorMessage = 'Error obteniendo la informacion';
    fetch.mockRejectOnce(new Error(errorMessage));
    const setData = jest.fn();
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('/api/data', setData)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(setData).not.toHaveBeenCalled();
    expect(result.current.error.message).toBe(errorMessage);
    expect(result.current.loading).toBe(false);
  });
});