# Contact form — EmailJS setup

## Folder structure

```
src/
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx      # Form UI + EmailJS sendForm
│   └── profile/
│       ├── contact.tsx          # Page section (#contact)
│       └── header.tsx           # "Contact Us" scrolls to #contact
├── lib/
│   ├── contact-form-validation.ts
│   └── emailjs-config.ts
.env.example
.env                             # Local secrets (do not commit)
```

## 1. Install EmailJS

```bash
npm install @emailjs/browser
```

## 2. Create an EmailJS account

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Email Services** → add a service (Gmail, Outlook, etc.) and note the **Service ID**
3. **Email Templates** → create a template (see example below) and note the **Template ID**
4. **Account** → **API Keys** → copy the **Public Key**

## 3. Environment variables (Vite)

Copy `.env.example` to `.env` in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Restart `npm run dev` after editing `.env`.

For production (e.g. Vercel), set the same variables in the hosting dashboard.

## 4. Example EmailJS template

**Subject:** `New contact from {{user_name}}`

**Body:**

```
You have a new message from your website contact form.

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

Template variable names must match the form `name` attributes:

| Form field `name` | Template variable |
|-------------------|---------------------|
| `user_name`       | `{{user_name}}`     |
| `user_email`      | `{{user_email}}`    |
| `subject`         | `{{subject}}`       |
| `message`         | `{{message}}`       |

## 5. Best practices (frontend-only email)

- **Public key only in the client** — EmailJS public keys are designed for browser use; never put private API keys in frontend code.
- **Use env variables** — keeps IDs out of source control and lets you use different templates per environment.
- **Rate limiting** — enable EmailJS dashboard limits and CAPTCHA if you see spam.
- **Validate on the client** — improves UX; EmailJS is not a substitute for server-side validation for high-risk flows.
- **No PHI in plain email** — for medical sites, avoid sensitive clinical details in free-text fields or add a privacy notice.
- **Monitor failures** — check EmailJS logs; users see toast errors when sends fail.
- **`.env` in `.gitignore`** — never commit real keys.

## 6. Linking the header

The header **Contact Us** button calls `scrollToSection("contact")`, which targets `<section id="contact">` in `contact.tsx`.
