import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * The recovered production HTML is kept as the canonical source so Astro can
 * reproduce it without normalising markup, attributes, whitespace or scripts.
 */
export async function readSnapshot(relativePath: string): Promise<string> {
  return readFile(resolve(process.cwd(), relativePath), 'utf8');
}
