/**
 * 引数を2乗して返すだけの関数
 * このメソッドはWebWorker関係なくプロジェクトのどこからでも呼び出せる
 * @param a
 */
export function square(a: number): number {
  return a * a
}
