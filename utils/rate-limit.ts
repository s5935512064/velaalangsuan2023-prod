import { LRUCache } from "lru-cache";

type Options = {
  uniqueTokenPerInterval?: number; // max number of unique tokens in the time period
  interval?: number; // interval in milliseconds
  limit: number; // max number of requests within interval
};

export default function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 50,
    ttl: options?.interval || 60 * 1000,
  });

  return {
    check: (token: string, limit = options?.limit || 100) => {
      const tokenCount = (tokenCache.get(token) as number[]) || [0];
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }
      tokenCount[0] += 1;

      const currentUsage = tokenCount[0];
      const isRateLimited = currentUsage >= limit;

      return {
        isRateLimited,
        currentUsage,
        limit,
      };
    },
  };
}
