# Design System - CFS Flooring

## Colors
- `--bg`: `#ffffff` (White background)
- `--panel`: `#f9f6f2` (Warm off-white panel)
- `--text`: `#221416` (Near-black warm text)
- `--muted`: `rgba(34,20,22,.72)` (Secondary muted text)
- `--stroke`: `rgba(34,20,22,.14)` (Subtle border stroke)
- `--accent`: `#b07f49` (Warm bronze gold)
- `--accent-2`: `#f7d133` (Bright gold accent)
- `--dark-bg`: `#221416` (Dark background section)
- `--shadow`: `0 18px 45px rgba(34,20,22,.12)` (Soft elevated shadow)

## Typography
- Title: `"Lexend Deca", sans-serif`
- Body: `"DM Sans", sans-serif`

## Radius Scale
- `rounded-3xl`: 28px (Hero card / media)
- `rounded-2xl`: 18px (Stat / Service cards)
- `rounded-xl`: 16px (Buttons / Badge)
- `rounded-full`: 999px (Pills / Trust chips)

## Rule Enforcement
- Strictly ZERO arbitrary Tailwind values (no `w-[350px]` or `bg-[#b07f49]`).
- Use default classes (`w-full`, `max-w-7xl`, `p-6`) and design system CSS variables for project tokens.
