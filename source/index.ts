import { withSentry } from "@sentry/cloudflare";

interface Env {
	SENTRY_DATA_SOURCE_NAME: string;
}

export default withSentry((env) => ({ dsn: env.SENTRY_DATA_SOURCE_NAME, sendDefaultPii: true }), {
	fetch(_, env) {
		return Response.json({ env }, { status: 200 });
	},
} satisfies ExportedHandler<Env>);
