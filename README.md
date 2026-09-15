# Saiful Islam — portfolio

Personal site. Deployed on Vercel. No database, no sign-in.

## Put it on Vercel (browser only)

### 1. GitHub
1. Unzip this folder on your computer.
2. Open [github.com/new](https://github.com/new).
3. Name the repository `saiful-islam` (or any name). Keep it Public or Private.
4. Create the repository.
5. On the empty repo page, choose **uploading an existing file**.
6. Drag every file and folder from the unzipped project into the page (including `src`, `public`, `package.json`, `vercel.json`). Do not upload a nested extra folder if you can avoid it — `package.json` should sit at the root of the repo.
7. Commit.

### 2. Vercel
1. Open [vercel.com/signup](https://vercel.com/signup) and continue with GitHub.
2. **Add New… → Project**.
3. Import `saiful-islam`.
4. Leave Framework Preset as Other. Build Command is already `npm run build`.
5. Click **Deploy**. Wait until it is Ready.
6. You get a URL like `saiful-islam.vercel.app`. That is live.

### 3. Your own domain
1. In the Vercel project: **Settings → Domains → Add**.
2. Enter `www.yourdomain` and the root domain (example: `www.saifulislam.in` and `saifulislam.in`).
3. Vercel shows DNS records. In Cloudflare / Namecheap / GoDaddy, add them:
   - **www** → CNAME to `cname.vercel-dns.com`
   - **root** → A record `76.76.21.21` (or the values Vercel displays)
4. Wait until Vercel marks the domain **Valid**. Then use `https://yourdomain` on LinkedIn and your CV.

## Later edits
- Keep asking in this Grok chat, then replace files on GitHub and Vercel will rebuild.
- Or edit the repo on GitHub (the files in `src/lib/site.ts` hold name, work, skills, email).
- Every push to `main` republishes automatically.

Do not add a database or environment secrets. This site is static content plus a contact form that opens email.
