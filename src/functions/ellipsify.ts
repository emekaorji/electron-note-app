/**
 * Truncate a large string into a smaller one ending with an ellipsis '...'
 * based on the limit of characters specified
 * @param string The string to be truncated
 * @param limit The maximum number of characters to return
 * @returns The truncated string
 */
export default function ellipsify(string: string, limit: number): string {
  return string.length > limit ? `${string.substring(0, limit)}...` : string;
}
