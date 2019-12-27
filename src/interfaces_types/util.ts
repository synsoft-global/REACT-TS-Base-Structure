namespace NUtil {
  /** returns an object type with keys of T, if T has K as a key; never otherwise */
  export type Keep<T, K> = { [P in keyof T]: P extends K ? T : never }[keyof T];

  /** returns a type that excludes some keys of T */
  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  
  /**
   * creates a type that requires an object T to have at least one of the keys in `Keys`
   * per : https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
   */
  export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
    { [K in Keys]-?: Required<Pick<T, K>> }[Keys];
}
