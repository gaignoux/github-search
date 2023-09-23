import { caching, MemoryCache } from "cache-manager";

const DEFAULT_TTL = 60 * 60 * 24 * 365 * 1000;
const MAX_ENTRIES = 100;

class ServerCache {
  private store: Promise<MemoryCache>;

  constructor(defaultTtl: number, maxEntries: number) {
    this.store = caching("memory", {
      max: maxEntries,
      ttl: defaultTtl,
    });
  }

  public async get(key: string): Promise<unknown> {
    return (await this.store).get(key);
  }

  public async set(
    key: string,
    value: unknown,
    ttl?: number | undefined,
  ): Promise<void> {
    return (await this.store).set(key, value, ttl);
  }
}

export const cacheManager = new ServerCache(DEFAULT_TTL, MAX_ENTRIES);
