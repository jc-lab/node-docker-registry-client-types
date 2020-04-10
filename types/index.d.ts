// Type definitions for docker-registry-client@3.3.0
// Project: https://github.com/joyent/node-docker-registry-client
// Definitions by: Joseph Lee <https://github.com/jc-lab>
// Definitions: https://github.com/jc-lab/node-docker-registry-client-types
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as drc from "docker-registry-client";
    const client = drc.createClientV2({name: REPO});

 =============================================== */

declare module 'docker-registry-client' {

    import {
        Next, Request, Response
    } from 'restify';

    type PingV2Callback = (err: any, body: any, req: Request, res: Response, next: Next) => void;

    namespace drc {
        import ReadableStream = NodeJS.ReadableStream;
        import WritableStream = NodeJS.WritableStream;

        class RegistryClientV1 {

        }

        interface CreateClientV2Options {
            name?: string;
            repo?: string;
            log?: any;
            username?: string;
            password?: string;
            token?: string;
            insecure?: boolean;
            scheme?: string;
            acceptManifestLists?: boolean;
            maxSchemaVersion?: number;
            agent?: boolean;
            userAgent?: string;
        }

        interface ClientV2PingOptions {
            index?: string | IndexInfo;
            indexName?: string;
            log?: any;
            insecure?: boolean;
            rejectUnauthorized?: boolean;
            userAgent?: string;
            agent?: any;
        }

        interface ClientV2GetManifestOptions {
            ref: string;
            acceptManifestLists?: boolean;
            maxSchemaVersion?: number;
            followRedirects?: boolean;
        }

        interface ClientV2HeadBlobOptions {
            method: string;
            digest: string;
        }

        interface ClientV2CreateBlobReadStreamOptions {
            digest: string;
        }

        interface ClientV2LoginOptions {
            scope?: string;
            pingRes?: any;
            pingErr?: any;
        }

        interface ClientV2PutManifestOptions {
            manifest: string;
            ref: string;
        }

        interface ClientV2BlobUploadOptions {
            contentLength: number;
            digest: string;
            stream: WritableStream;
            contentType?: string;
            log?: any;
        }

        class RegistryClientV2 {
            readonly version: number;

            close(): void;

            ping(cb: PingV2Callback): void;

            login(opts: ClientV2LoginOptions, cb: PingV2Callback): void;
            login(cb: PingV2Callback): void;

            supportsV2(cb: (err: any, res: boolean) => void): void;

            listTags(cb: (err: any, repoTags: any, res: Response) => void): void;

            getManifest(opts: ClientV2GetManifestOptions, cb: (err: any, manifest, res: Response, manifestStr: string) => void): void;

            headBlob(opts: ClientV2HeadBlobOptions, cb: (err: any, res: any) => void): void;

            createBlobReadStream(opts: ClientV2CreateBlobReadStreamOptions, cb: (err: any, stream: ReadableStream, res: Response) => void): void;

            putManifest(opts: ClientV2PutManifestOptions, cb: (err: any, res: Response, digest: any, location: string) => void): void;

            blobUpload(opts: ClientV2BlobUploadOptions, cb: (err: any, res: Response) => void): void;
        }

        interface IndexInfo {
            name: string;
            official: boolean;
            scheme: string;
        }

        interface RepoInfo {
            index: IndexInfo;
            official: boolean;
            remoteName: string;
            localName: string;
            canonicalName: string;
        }

        interface RepoInfoDetail extends RepoInfo {
            digest: string;
            tag: string;
        }

        function createClient(opts: any, cb: (err: any, client: RegistryClientV1) => void): void;

        function login(opts: ClientV2PingOptions, cb: PingV2Callback): void;

        function createClientV2(opts: CreateClientV2Options): RegistryClientV2;

        function pingV2(opts: ClientV2PingOptions, cb: PingV2Callback): void;

        function loginV2(opts: ClientV2LoginOptions, cb: (err: any) => void): void;

        function digestFromManifestStr(manifestStr: string): string;

        const MEDIATYPE_MANIFEST_V2: string;
        const MEDIATYPE_MANIFEST_LIST_V2: string;

        function createClientV1(): RegistryClientV1;

        function pingIndexV1(cb): void;

        function loginV1(opts, cb): void;

        const DEFAULT_INDEX_NAME: string;
        const DEFAULT_TAG: string;

        function parseRepo(arg: string, defaultIndex: string | IndexInfo): RepoInfo;

        function parseIndex(arg: string): IndexInfo;

        function parseRepoAndRef(arg: string, defaultIndex: string | IndexInfo): RepoInfoDetail;

        // Using `parseRepoAndRef` is preferred over `parseRepoAndTag`.
        function parseRepoAndTag(arg: string, defaultIndex: string | IndexInfo): RepoInfoDetail;
    }

    export = drc;
}
