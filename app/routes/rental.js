import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class RentalRoute extends Route {
  async model(params) {
    const response = await fetch(`/api/rentals/${params.id}.json`);
    const { data } = await response.json();

    const { id, attributes } = data;
    const type = COMMUNITY_CATEGORIES.includes(attributes.category) ? 'Community' : 'Standalone';

    return { id, type, ...attributes };
  }
}