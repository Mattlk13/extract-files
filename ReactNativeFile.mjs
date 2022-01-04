/**
 * Used to mark a
 * [React Native `File` substitute]{@link ReactNativeFileSubstitute}
 * in an object tree for [`extractFiles`]{@link extractFiles}. It’s too risky to
 * assume all objects with `uri`, `type` and `name` properties are files to
 * extract.
 * @kind class
 * @name ReactNativeFile
 * @param {ReactNativeFileSubstitute} file A [React Native](https://reactnative.dev) [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) substitute.
 * @example <caption>How to import.</caption>
 * ```js
 * import ReactNativeFile from "extract-files/ReactNativeFile.mjs";
 * ```
 * @example <caption>An extractable file in [React Native](https://reactnative.dev).</caption>
 * ```js
 * const file = new ReactNativeFile({
 *   uri: uriFromCameraRoll,
 *   name: "a.jpg",
 *   type: "image/jpeg",
 * });
 * ```
 */
export default class ReactNativeFile {
  constructor({ uri, name, type }) {
    this.uri = uri;
    this.name = name;
    this.type = type;
  }
}
