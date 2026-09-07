# ManiFlowStations

Deze repository bevat naast de Next.js Commerce-template het programma en de website van
**ManiFlowStations** — een persoonlijk ontwikkelingsprogramma dat de bruikbare technieken uit de
manifestatiewereld overneemt (visioning, future self, identiteit, alignment, mentale simulatie) en
de pseudowetenschap, het magisch denken en de schuldinductie eruit haalt.

> Je manifesteert een toekomst niet door harder te geloven dat hij eraan komt. Je vergroot de kans
> erop door helder te krijgen wat je wilt, je gedrag en omgeving daarop af te stemmen, te handelen,
> feedback te verzamelen en bij te sturen.

- **Website:** `/maniflowstations`
- **Het programma als één document:** [`docs/ManiFlowStations-programma.md`](docs/ManiFlowStations-programma.md)
  (ook live op `/maniflowstations/programma`)

## Structuur

| Pad                                | Wat                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| `lib/maniflow/`                    | De enige bron van waarheid: stations, gereedschappen, voorbeelden, positionering, dagprogramma's |
| `lib/maniflow/document.ts`         | Rendert diezelfde data als één markdown-document                                                 |
| `app/(maniflow)/`                  | De website, met een eigen root-layout en eigen stijl (geen Tailwind, geen Shopify)               |
| `app/(maniflow)/maniflow.css`      | De volledige huisstijl: spoortypografie, hairlines, dag- en nachtbord                            |
| `components/maniflow/`             | Vertrekbord, routekaart, journaal                                                                |
| `components/maniflow/diagrams.tsx` | De zeven schema's als inline SVG                                                                 |
| `components/maniflow/sfeer.tsx`    | De vijf sfeerbeelden als inline SVG                                                              |
| `public/maniflow/`                 | Eigen beeldmateriaal — zie de LEESMIJ in die map                                                 |
| `app/(shop)/`                      | De ongewijzigde Next.js Commerce-demo, met eigen root-layout                                     |

Beide delen zijn aparte root-layouts binnen dezelfde app (route groups). De commerce-URL's zijn
ongewijzigd; ManiFlowStations leeft onder `/maniflowstations`. Wil je het programma op de
hoofdpagina zetten, verplaats dan `app/(shop)/page.tsx` naar `app/(shop)/shop/page.tsx` en de
ManiFlowStations-pagina's een niveau omhoog.

## Lokaal draaien

| Commando       | Wat het doet                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm dev`     | Ontwikkelserver. Wijzigingen zijn meteen zichtbaar, maar elke pagina wordt bij het eerste bezoek gecompileerd — navigeren voelt daardoor traag.                    |
| `pnpm preview` | Bouwt de site en start hem zoals hij live zou draaien. Navigeren is dan zo'n vijftien keer sneller. Geen automatische herlading: na een wijziging opnieuw draaien. |

Gebruik `dev` om te schrijven, `preview` om te kijken.

## Ontwikkelen

```bash
pnpm install
pnpm dev            # http://localhost:3000/maniflowstations
pnpm programma      # regenereert docs/ManiFlowStations-programma.md uit lib/maniflow
```

Shopify-credentials zijn niet nodig voor ManiFlowStations: zonder `SHOPIFY_STORE_DOMAIN` geeft de
Shopify-laag lege data terug, zodat `next build` gewoon slaagt.

## Pagina's

| Route                              | Inhoud                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `/maniflowstations`                | Kernbelofte, vertrekbord, positionering, doelgroep, meetmethode                          |
| `/maniflowstations/route`          | Routekaart: vier lijnen, twaalf haltes, drie reroute-momenten, depot                     |
| `/maniflowstations/station/[slug]` | Elk station in tien vaste onderdelen, van Arrival Board tot Departure Note               |
| `/maniflowstations/uitgangspunten` | Handelingsvermogen zonder schuld: controle, invloed, kans, toeval                        |
| `/maniflowstations/gereedschap`    | Achttien terugkerende tools en templates, met valkuil per stuk                           |
| `/maniflowstations/voorbeelden`    | Zes levensgebieden volledig uitgewerkt                                                   |
| `/maniflowstations/dienstregeling` | 21-, 30- en 42-daagse sporen, de Perronsessie, de weekmeters                             |
| `/maniflowstations/vormen`         | Uitleveringsvormen, workbookontwerp, slogans                                             |
| `/maniflowstations/journaal`       | Werkend journaal: routekaart, Evidence Log, weekmeter — lokaal opgeslagen, exporteerbaar |

---

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fcommerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&demo-url=https%3A%2F%2Fdemo.vercel.store&demo-image=https%3A%2F%2Fbigcommerce-demo-asset-ksvtgfvnd.vercel.app%2Fbigcommerce.png&env=COMPANY_NAME,SHOPIFY_REVALIDATION_SECRET,SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_ACCESS_TOKEN,SITE_NAME)

# Next.js Commerce

A high-performance, server-rendered Next.js App Router ecommerce application.

This template uses React Server Components, Server Actions, `Suspense`, `useOptimistic`, and more.

<h3 id="v1-note"></h3>

> Note: Looking for Next.js Commerce v1? View the [code](https://github.com/vercel/commerce/tree/v1), [demo](https://commerce-v1.vercel.store), and [release notes](https://github.com/vercel/commerce/releases/tag/v1).

## Providers

Vercel will only be actively maintaining a Shopify version [as outlined in our vision and strategy for Next.js Commerce](https://github.com/vercel/commerce/pull/966).

Vercel is happy to partner and work with any commerce provider to help them get a similar template up and running and listed below. Alternative providers should be able to fork this repository and swap out the `lib/shopify` file with their own implementation while leaving the rest of the template mostly unchanged.

- Shopify (this repository)
- [BigCommerce](https://github.com/bigcommerce/nextjs-commerce) ([Demo](https://next-commerce-v2.vercel.app/))
- [Ecwid by Lightspeed](https://github.com/Ecwid/ecwid-nextjs-commerce/) ([Demo](https://ecwid-nextjs-commerce.vercel.app/))
- [Geins](https://github.com/geins-io/vercel-nextjs-commerce) ([Demo](https://geins-nextjs-commerce-starter.vercel.app/))
- [Medusa](https://github.com/medusajs/vercel-commerce) ([Demo](https://medusa-nextjs-commerce.vercel.app/))
- [Prodigy Commerce](https://github.com/prodigycommerce/nextjs-commerce) ([Demo](https://prodigy-nextjs-commerce.vercel.app/))
- [Saleor](https://github.com/saleor/nextjs-commerce) ([Demo](https://saleor-commerce.vercel.app/))
- [Shopware](https://github.com/shopwareLabs/vercel-commerce) ([Demo](https://shopware-vercel-commerce-react.vercel.app/))
- [Swell](https://github.com/swellstores/verswell-commerce) ([Demo](https://verswell-commerce.vercel.app/))
- [Umbraco](https://github.com/umbraco/Umbraco.VercelCommerce.Demo) ([Demo](https://vercel-commerce-demo.umbraco.com/))
- [Wix](https://github.com/wix/headless-templates/tree/main/nextjs/commerce) ([Demo](https://wix-nextjs-commerce.vercel.app/))
- [Fourthwall](https://github.com/FourthwallHQ/vercel-commerce) ([Demo](https://vercel-storefront.fourthwall.app/))

> Note: Providers, if you are looking to use similar products for your demo, you can [download these assets](https://drive.google.com/file/d/1q_bKerjrwZgHwCw0ovfUMW6He9VtepO_/view?usp=sharing).

## Integrations

Integrations enable upgraded or additional functionality for Next.js Commerce

- [Orama](https://github.com/oramasearch/nextjs-commerce) ([Demo](https://vercel-commerce.oramasearch.com/))

  - Upgrades search to include typeahead with dynamic re-rendering, vector-based similarity search, and JS-based configuration.
  - Search runs entirely in the browser for smaller catalogs or on a CDN for larger.

- [React Bricks](https://github.com/ReactBricks/nextjs-commerce-rb) ([Demo](https://nextjs-commerce.reactbricks.com/))
  - Edit pages, product details, and footer content visually using [React Bricks](https://www.reactbricks.com) visual headless CMS.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

<details>
  <summary>Expand if you work at Vercel and want to run locally and / or contribute</summary>

1. Run `vc link`.
1. Select the `Vercel Solutions` scope.
1. Connect to the existing `commerce-shopify` project.
1. Run `vc env pull` to get environment variables.
1. Run `pnpm dev` to ensure everything is working correctly.
</details>

## Vercel, Next.js Commerce, and Shopify Integration Guide

You can use this comprehensive [integration guide](https://vercel.com/docs/integrations/ecommerce/shopify) with step-by-step instructions on how to configure Shopify as a headless CMS using Next.js Commerce as your headless Shopify storefront on Vercel.
