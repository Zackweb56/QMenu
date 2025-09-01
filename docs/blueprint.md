# **App Name**: QMenu Digital

## Core Features:

- Multi-Language Support: Serve content in English, French, and Arabic. Automatically redirects from `/` to `/en`. Content will be stored in `translations.ts` for easy editing. Includes URL-based language routing (/en, /fr, /ar) and handles LTR/RTL directionality.
- Dynamic Translation Generation: Use a generative AI tool to automatically translate text and content within the menu into various languages.
- Menu Display: Display the menu categories, items with images, descriptions, prices, sizes, add-ons and the Chef's Special badge using the Tabs and other ShadCN UI components.
- Interactive Map: Allow a user to look up restaurant location using a dynamically generated map display using React components.
- Contact Information: Display restaurant contact details including address and phone number in the header. Uses a placeholder SVG logo for easy replacement.

## Style Guidelines:

- Primary color: Saturated vibrant orange (#E67E22) to create an inviting atmosphere.
- Background color: Desaturated light-orange (#F8EFE7) provides a soft and warm backdrop.
- Accent color: A slightly brighter, but equally saturated reddish-orange (#D35400) for call-to-actions and highlights, drawing attention to interactive elements without being distracting.
- Headline font: 'Literata', a transitional serif font with a vintage, literary, slightly formal look.
- Body font: 'PT Sans', a humanist sans-serif font that combines a modern look and a little warmth or personality.
- Lucide React icons will be used for menu categories. Icons should align with the language direction.
- A clean, single-page layout with header, menu section (using Tabs), and footer. The root path redirects to `/en`.
- Subtle transitions between language changes and menu tabs to enhance user experience.