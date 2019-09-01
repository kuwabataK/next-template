import { useRef, useEffect } from 'react'
import { cloneDeep } from 'lodash'

/**
 * 引数に指定した値を保存し、次のレンダリング時に返り値として所得することができます。
 * 初回レンダリング時の返り値は undefined になります
 *
 * @param value 保存する値
 * @param deepCopy trueを指定することで、lodashのcloneDeepを使ってdeepCopyした値を保存する
 *
 * @return preValue 前回保存された値
 */
export function usePrevious<T>(
  value: T,
  option: UsePreviousOption = {}
): T | undefined {
  const _value = option.deepCopy ? cloneDeep(value) : value

  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>()

  // Store current value in ref
  useEffect(() => {
    ref.current = _value
  }, [_value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return (ref.current as unknown) as T
}

interface UsePreviousOption {
  deepCopy?: boolean
}
