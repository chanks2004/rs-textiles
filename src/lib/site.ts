export const SITE_URL = "https://rstextiless.com";

export function canonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
