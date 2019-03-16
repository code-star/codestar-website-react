export const formatDate = (date: Date, language: string) => {
  const locale = language === 'nl' ? 'nl-NL' : 'en-US';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
