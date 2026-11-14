# FLLAMS website — TODO (placeholders)

These are the things that are intentionally placeholder in this first build.
Nothing here takes money or pretends to be finished.

## 1. WhatsApp number — TODO
`custom.html` links to `https://wa.me/000000000000` with a pre-filled
message. That is a placeholder number, clearly marked `TODO` in the code.
Replace it with the real FLLAMS WhatsApp business number before launch.
Do not publish the site with the placeholder number.

## 2. Real checkout / payment — TODO
The cart is local only (`localStorage` in `assets/js/main.js`). The
"Checkout" button shows a placeholder message and takes no payment.
Before launch, connect a real payment provider (for example Stripe or
Shopify checkout) and remove the placeholder notes from the product pages
and the cart panel.

## 3. Real product photos — TODO
The images in `assets/images/` are concept mockups, not finished product
photographs:
- The 4 shirts/jacket: Step 1 flat lays + Step 2 on-model shots.
- The 2 hoodies: both share one image (`hoodies-worn.webp`) that shows
  both hoodies together. It is labelled as a shared concept mockup on both
  hoodie product pages — it is not two separate photos.
- `detail-closeup.webp` is a concept detail shot, used on the story and
  product pages.
Replace each with the real 5-shot set per piece (on-model, flat, back,
detail close-up, cloth alone) after the sample shoot, following the photo
rules in the web design idea. Do not change the website to fit a photo —
re-shoot the photo.

## 4. Courier delivery estimate — TODO
Product and shipping pages say delivery from India takes an estimated
7–14 working days. That is a placeholder estimate. Confirm the real
estimate with the DDP courier and update `shipping.html` and the product
pages (search for "7–14 working days").

## 5. Final prices — TODO
Prices (£119–£149) are launch recommendations inside the confirmed
£99–£150 band. Re-check them once fabric and making costs per piece are
known, then update `shop.html`, the product pages and `index.html`.

## 6. Image file sizes — TODO
Some mockup files are larger than the design idea's limits (hero <250 KB,
grid <150 KB) — e.g. `wrap-flat.webp` is ~827 KB. Compress / re-export
the real product photos to those limits before launch. The site has no
other heavy assets.

## 7. Sizes
The size chart (S–XXL, chest in cm/inches) is a standard starting chart.
Confirm it against the real sample measurements before launch.
