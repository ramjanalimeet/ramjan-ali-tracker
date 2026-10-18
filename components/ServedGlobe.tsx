import { Globe, type GlobePin } from "@/components/Globe";
import { CITIES } from "@/lib/cities";
import { CITY_COORDS } from "@/lib/cities/coords";

const PINS: GlobePin[] = CITIES.map((c) => ({
  name: c.name,
  href: `/locations/${c.slug}`,
  lng: CITY_COORDS[c.slug][0],
  lat: CITY_COORDS[c.slug][1],
}));

const COUNTRIES = new Set(CITIES.map((c) => c.country)).size;
const LABEL =
  COUNTRIES === 1 ? `${PINS.length} cities across the ${CITIES[0].country}` : `${PINS.length} cities in ${COUNTRIES} countries`;

/** The globe with a pin on every city page. */
export function ServedGlobe() {
  return <Globe pins={PINS} label={LABEL} />;
}
