import { useRef, useEffect } from 'react'

/**
 * 引数に指定した値を保存し、次のレンダリング時に返り値として所得することができます。
 * 初回レンダリング時の返り値は undefined になります
 *
 * @param value 保存する値
 */
export function usePrevious<T>(value: T): T | undefined {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return (ref.current as unknown) as T
}
