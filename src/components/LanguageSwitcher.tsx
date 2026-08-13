import { Globe } from "lucide-react";
import { langLabels, langs, useI18n } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.language")}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs tracking-wide uppercase transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <Globe className="size-3.5" aria-hidden="true" />
        {lang}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {langs.map((l) => (
          <DropdownMenuItem
            key={l}
            onSelect={() => setLang(l)}
            className={l === lang ? "font-medium text-matcha" : undefined}
          >
            {langLabels[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}