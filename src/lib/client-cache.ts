import createCache, { EmotionCache } from "@emotion/cache";

/**
 * Creates an Emotion cache instance for managing styles.
 *
 * @returns {EmotionCache} The Emotion cache instance.
 */
export default function createEmotionCache(): EmotionCache {
  return createCache({ key: "css", prepend: true });
}
