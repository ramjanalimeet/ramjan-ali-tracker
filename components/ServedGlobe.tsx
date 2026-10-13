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

/** The globe with a pin on every city page. */
export function ServedGlobe() {
  return <Globe pins={PINS} label={`${PINS.length} cities in ${COUNTRIES} countries`} />;
}
