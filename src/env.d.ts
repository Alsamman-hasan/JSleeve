interface ImportMetaEnv {
	readonly VITE_AUTHORITY: string;
	readonly VITE_CLIENT_ID: string;
	readonly VITE_SCOPE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
