import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    const stored = window.localStorage.getItem("portfolio-locale") as Locale;
    if (stored && stored in LOCALES) {
      locale.value = stored;
    } else {
      const preferredLocale = navigator.language.split("-")[0] as Locale;
      locale.value = preferredLocale in LOCALES ? preferredLocale : "en";
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
