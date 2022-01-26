import Route from '@ember/routing/route';

export default class TestcompoRoute extends Route {
  model() {
    return [
      { nom: 'Dupont', details: 'Je suis grand' },
      { nom: 'Arthur', desc: 'Je suis petit...' },
    ];
  }
}
