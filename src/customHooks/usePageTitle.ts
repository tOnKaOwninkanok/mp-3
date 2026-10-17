import { useEffect } from 'react'

export default function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | TK Poothong`
    window.scrollTo(0, 0)
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [title])
}
