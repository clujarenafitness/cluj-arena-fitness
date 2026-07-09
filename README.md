# Cluj Arena Fitness

Website premium pentru Fitness Club Arena Cluj (clujarenafitness.ro), construit cu Next.js 14 (App Router), TypeScript, Tailwind CSS și Framer Motion.

## Pornire locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Build producție

```bash
npm run build
npm run start
```

## Structură

- `app/` — layout, pagina principală, metadata SEO, robots.ts, sitemap.ts
- `components/` — toate secțiunile (Hero, Benefits, Programs, Transformations, Trainers, Gallery, Testimonials, Membership, FAQ, Contact, Navbar, Footer)
- `components/ui/` — primitive reutilizabile (SectionHeading, GlowCard, FadeIn, AnimatedCounter, MagneticButton)
- `lib/data.ts` — tot conținutul site-ului (servicii reale, echipă, planuri, FAQ) — editează aici pentru a actualiza textele
- `types/` — interfețe TypeScript

## Personalizare rapidă

- Culori/fonturi: `tailwind.config.ts` și `app/globals.css`
- Conținut (prețuri, echipă, programe, testimoniale): `lib/data.ts`

## Poze

`public/images/gym-01.jpg` până la `gym-06.jpg` sunt poze reale din sală (zona cardio și zona de forță/bodybuilding cu iluminat neon), folosite în Hero, Programe, Galerie și Contact.

`public/images/trainer-placeholder.jpg` e un placeholder generic pentru traineri — înlocuiește-l cu portrete reale când sunt disponibile (păstrează același nume de fișier, sau actualizează `lib/data.ts`).

Secțiunea Transformări Before/After folosește încă poze stoc (Unsplash), ilustrative — nu sunt poze reale de membri. Înainte de lansare, recomand fie să le înlocuiești cu poze reale de la membri (cu acordul lor), fie să elimini secțiunea, ca să nu prezinți poze anonime ca fiind rezultate reale ale sălii.

## Securitate

Ce e deja inclus în cod:

- Headere HTTP de securitate (`next.config.mjs`): Content-Security-Policy, X-Frame-Options (`DENY`, anti-clickjacking), X-Content-Type-Options (`nosniff`), Referrer-Policy, Permissions-Policy și Strict-Transport-Security.
- Header-ul `X-Powered-By` (care expune că rulezi Next.js) e dezactivat.
- Formularul de contact are un câmp honeypot ascuns (prinde boți care completează automat toate câmpurile), validare de bază pe email/telefon/lungime text și o limitare simplă anti-resubmisie rapidă.
- Datele din Schema.org (JSON-LD) sunt statice, deci nu există risc de injecție prin `dangerouslySetInnerHTML`.
- `.gitignore` exclude fișierele `.env*` ca să nu ajungă chei/secrete în control de versiuni.

Ce trebuie făcut înainte de lansare în producție (aceste lucruri țin de server/hosting, nu doar de cod):

- **Formularul de contact trimite doar local (mock).** Când îl conectezi la un backend real (email, CRM, bază de date), validează din nou toate câmpurile pe server — niciodată nu ai încredere doar în validarea din browser — și adaugă un CAPTCHA (hCaptcha/Cloudflare Turnstile) plus rate limiting pe acel endpoint.
- Găzduiește pe HTTPS obligatoriu (Vercel, Netlify sau orice provider modern fac asta automat).
- Activează un WAF/CDN (ex. Cloudflare) pentru protecție DDoS și filtrare trafic malițios.
- Rulează `npm audit` periodic și ține dependențele actualizate (`npm outdated`).
- Nu pune niciodată chei API sau parole direct în cod — folosește variabile de mediu (`.env.local`, niciodată comis în git).
- Dacă adaugi autentificare/admin în viitor, folosește sesiuni HttpOnly + Secure cookies și 2FA.

Nicio aplicație web nu poate fi „100% imună" la atacuri — pașii de mai sus reduc drastic suprafața de atac pentru un site de tip vitrină ca acesta.

## Publicare pe www.clujarenafitness.ro

Site-ul este deja pregătit cu domeniul final în cod (`metadataBase`, Open Graph, robots.ts, sitemap.ts, JSON-LD) — nu mai trebuie schimbat nimic acolo. Pașii care rămân sunt în afara codului, pe partea de hosting/DNS, și trebuie făcuți de tine (necesită acces la contul de hosting și la administrarea domeniului):

1. **Alege un provider de hosting pentru Next.js** — cel mai simplu este [Vercel](https://vercel.com) (gratuit pentru site-uri mici, suport nativ Next.js) sau [Netlify](https://netlify.com). Ambele oferă HTTPS automat.
2. **Urcă proiectul.** Cel mai simplu mod: creează un repository privat pe GitHub cu codul din acest folder, apoi conectează acel repository la Vercel/Netlify — la fiecare modificare din GitHub, site-ul se rebuild-uiește automat.
3. **Conectează domeniul.** În setările proiectului din Vercel/Netlify, adaugă `www.clujarenafitness.ro` (și `clujarenafitness.ro`) ca domeniu custom. Providerul îți va da niște înregistrări DNS (de obicei un `CNAME` pentru `www` și un `A record` pentru domeniul fără `www`).
4. **Actualizează DNS-ul domeniului** la providerul unde ai cumpărat domeniul (ex. unde l-ai înregistrat inițial) — adaugă exact înregistrările primite la pasul 3. Propagarea poate dura de la câteva minute până la 24-48 de ore.
5. **Verifică HTTPS.** După ce DNS-ul se propagă, Vercel/Netlify emit automat un certificat SSL — site-ul va fi accesibil pe `https://www.clujarenafitness.ro`.
6. **Testează formularul de contact real** înainte de a-l face public — momentan trimite doar local (vezi secțiunea Securitate de mai sus); ai nevoie de un serviciu de trimis email-uri (ex. Resend, SendGrid) sau de o integrare cu un CRM, plus CAPTCHA pe acel endpoint.

Dacă vrei, te pot ajuta pas cu pas cu oricare din acești pași data viitoare când ai acces la contul de hosting/domeniu în față.

## Notă

Codul a fost verificat structural (sintaxă, tipuri, imports) și un audit de securitate a fost re-confirmat înainte de livrare. `npm install` nu a putut fi rulat în acest mediu (fără acces la registry). Rulează `npm install` local pentru a confirma build-ul final.
