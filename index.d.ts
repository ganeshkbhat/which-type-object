declare namespace _default {
    export { TagTester };
    export { TypeTester };
    export { isTagArrayBuffer };
    export { isTagFunction };
    export { isTagDataView };
    export { nativeIsArrayBufferView };
    export { nativeIsArray };
    export { nativeKeys };
    export { nativeCreate };
    export { hasDataViewBug };
    export { hasEnumBug };
    export { isValidDataView };
    export { isTagObject };
    export { isBufferLike };
    export { isTypedArray };
}
export default _default;
export function TagTester(name: any): (obj: any) => boolean;
export function TypeTester(name: any): boolean | ((obj: any) => boolean);
export function isTagArrayBuffer(obj: any): boolean;
export function isTagFunction(obj: any): boolean;
export function isTagDataView(obj: any): boolean;
export var nativeIsArrayBufferView: (arg: any) => arg is ArrayBufferView;
export var nativeIsArray: (arg: any) => arg is any[];
export var nativeKeys: {
    (o: object): string[];
    (o: {}): string[];
};
export var nativeCreate: {
    (o: object): any;
    (o: object, properties: PropertyDescriptorMap & ThisType<any>): any;
};
export var hasDataViewBug: boolean;
export var hasEnumBug: boolean;
export function isValidDataView(obj: any): boolean;
export function isTagObject(obj: any): boolean;
export function isBufferLike(collection: any): boolean;
export function isTypedArray(obj: any): boolean;
//# sourceMappingURL=index.d.ts.map