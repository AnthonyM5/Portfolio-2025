import { loadLottieAnimation } from './lottieLoader';

describe('loadLottieAnimation', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('prefixes a missing leading slash before fetching', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ name: 'anim' })
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await loadLottieAnimation('assets/lottie/demo.json');

    expect(fetchMock).toHaveBeenCalledWith('/assets/lottie/demo.json');
    expect(result).toEqual({ name: 'anim' });
  });

  it('keeps an existing leading slash', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ id: 123 })
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await loadLottieAnimation('/assets/lottie/demo.json');

    expect(fetchMock).toHaveBeenCalledWith('/assets/lottie/demo.json');
    expect(result).toEqual({ id: 123 });
  });

  it('returns null and logs when response is not ok', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    });
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', fetchMock);

    const result = await loadLottieAnimation('/assets/lottie/missing.json');

    expect(result).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  it('returns null and logs when fetch throws', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('Network down'));
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', fetchMock);

    const result = await loadLottieAnimation('/assets/lottie/demo.json');

    expect(result).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
