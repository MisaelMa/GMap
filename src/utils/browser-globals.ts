export class WindowRef {
    getNativeWindow(): any { return window; }
}

export class DocumentRef {
    getNativeDocument(): any { return document; }
}

export const BROWSER_GLOBALS_PROVIDERS: any[] = [WindowRef, DocumentRef];
