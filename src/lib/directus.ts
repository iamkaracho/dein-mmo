import { createDirectus, rest } from '@directus/sdk';

// Hier kommt deine ECHTE URL rein:
export const directus = createDirectus('https://cms.dein-mmo.de').with(rest());
