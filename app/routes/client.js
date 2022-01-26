import Route from '@ember/routing/route';

export default class ClientRoute extends Route {
  model() {
    return {
      nom: 'Dupont',
      details: 'Details sur Dupont...',
    };
  }
}
