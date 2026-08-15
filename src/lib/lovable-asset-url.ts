const LOVABLE_ASSET_ORIGIN = "https://drink-display-deck.lovable.app";

export function resolveLovableAssetUrl(url: string): string {
  if (url.startsWith("/__l5e/")) {
    return `${LOVABLE_ASSET_ORIGIN}${url}`;
  }

  return url;
}
