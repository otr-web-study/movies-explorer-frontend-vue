import { MOVIES_BASE_URL } from '@/constants';
import type { ExternalMovie } from '@/types';

interface ApiConfig {
  baseUrl: string;
  headers: Record<string, string>;
}

class Api {
  _baseUrl: string;
  _headers: Record<string, string>;

  constructor(config: ApiConfig) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _handleResponse(res: Response): Promise<ExternalMovie[]> {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => Promise.reject({ status: res.status, text }));
  }

  getMovies() {
    return fetch(this._baseUrl, { headers: this._headers }).then(this._handleResponse);
  }
}

const api = new Api({
  baseUrl: MOVIES_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
