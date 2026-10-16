RENO KAGENAMI PORTFOLIO - SECURITY UPDATE

WHAT THIS PATCH DOES
- Adds modern security headers through next.config.mjs
- Adds a Content-Security-Policy in REPORT-ONLY mode so the site gains visibility without risking breakage
- Adds a public /.well-known/security.txt file for responsible disclosure contact

HEADERS INCLUDED
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy
- Origin-Agent-Cluster
- X-Permitted-Cross-Domain-Policies
- Content-Security-Policy-Report-Only

INSTALLATION
1. Extract this patch.
2. Copy the files into the root of your local project folder:
   D:\reno-kagenami-portfolio
3. Allow Windows to replace the existing next.config.mjs file.
4. Run:
   npm run build
5. If the build passes, publish it:
   git add next.config.mjs public/.well-known/security.txt
   git commit -m "Add website security headers"
   git push

NOTES
- The CSP is intentionally REPORT-ONLY for safety.
- After the site runs cleanly for a while, you can convert the report-only header into an enforced Content-Security-Policy.
- The Vercel firewall and GitHub/Vercel account security settings should still be configured separately.
