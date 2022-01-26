import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TitleDescComponent extends Component {
  @tracked visible;
  @action
  toggleVisible() {
    this.visible = !this.visible;
  }
}
