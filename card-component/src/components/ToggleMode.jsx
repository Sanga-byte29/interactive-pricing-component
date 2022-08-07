import React, { useState ,useEffect} from 'react';
// import {ReactComponent as CirclesPattern} from "./assets/images/pattern-circles.svg"
// import PriceCard from './components/PriceCard';
function usePrefersDarkMode() {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setValue(mediaQuery.matches)

    const handler = () => setValue(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return value
}
function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode()
  const [
    isEnabled, 
    setIsEnabled] = useSafeLocalStorage('dark-mode', undefined)

  const enabled = 
    isEnabled === undefined ? prefersDarkMode : isEnabled

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(enabled ? 'light' : 'dark')
    root.classList.add(enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setIsEnabled]
}
function useSafeLocalStorage(key, initialValue) {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      window.localStorage.setItem(key, value)
      setValueProxy(value)
    } catch {
      setValueProxy(value)
    }
  }

  return [valueProxy, setValue]
}

function ToggleMode() {
   const [isDark, setIsDark] = useDarkMode()
 
    const toggleTheme = () => {
         setIsDark(!isDark)
    }
  
  return (
      <>
      
     <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded dark:bg-grayish-blue-400 dark:text-white"
     onClick={toggleTheme}
     >Toggle Mode</button>
    
    </>
  )
}

export default ToggleMode;