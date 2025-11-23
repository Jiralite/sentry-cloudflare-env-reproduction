# Sentry Cloudflare env reproduction

On versions prior to 10.23.0, it works. On versions 10.23.0 and later, TypeScript fails to recgonise `env`.

Reverting https://github.com/getsentry/sentry-javascript/pull/18064 resolves the issue.
