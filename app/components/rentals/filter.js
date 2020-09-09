import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals } = this.args;
    const { query } = this.args;

    if (query) {
      rentals = rentals.filter(r => r.title.includes(query));
    }

    return rentals;
  }
}
