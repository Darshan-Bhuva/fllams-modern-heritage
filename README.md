# FLLAMS — website

Menswear made from Indian sarees — shirts, jackets and hoodies — for buyers
in the UK and USA. Premium, minimal, fast.

This is plain static code: HTML + CSS + JavaScript, no framework, no build
step, no backend. The design follows the approved web design idea
(the Border Principle: the page is the plain body of a saree, the garment
photo is its border, gold is only ever a thin line).

## Run it locally (Windows)

No install needed. Pick one:

**Option 1 — just open it**

Double-click `index.html`. It will open in your browser.

**Option 2 — local server (recommended, so all pages and images behave
exactly as they will when hosted)**

Open PowerShell or Command Prompt in this folder and run one of these:

```powershell
python -m http.server 8000
```

then open http://localhost:8000 in your browser.

Or, if you have Node.js:

```powershell
npx serve .
```

Press `Ctrl+C` to stop the server.

## Pages

- `index.html` — home
- `shop.html` — the collection, all 6 pieces
- `product-wrap.html`, `product-zip.html`, `product-toggle.html`,
  `product-bomber.html`, `product-hoodie-ivory.html`,
  `product-hoodie-olive.html` — product pages
- `custom.html` — Custom on WhatsApp
- `story.html` — The Saree Story
- `shipping.html` — Shipping and Duty (DDP)
- `size-guide.html` — size chart in cm and inches

Shared files: `assets/css/style.css`, `assets/js/main.js`,
`assets/images/` (concept mockups — see TODO.md).

## Cart

The cart is local only (browser `localStorage`). There is no real payment
yet — checkout is clearly marked as a placeholder on every product page
and in the cart.

## What is still placeholder

See `TODO.md` — WhatsApp number, real checkout/payment, real product
photos, courier delivery estimate, final prices.
