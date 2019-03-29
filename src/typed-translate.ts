import { translate as rTranslate } from 'react-i18next'

export function translate(translationFiles: [string], options: any) {
  return (Component: any) => {
    return rTranslate(translationFiles, options)(Component) as any
  }
}
