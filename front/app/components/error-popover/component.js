import Ember from 'ember';

const {$} = Ember;

export default Ember.Component.extend({

  didRender() {
    this._super(...arguments);

    const className = `.error-popover-${this.get('elementId')}`;
    this.set('$error', $(className));
  },

  didUpdateAttrs() {
    this._super(...arguments);

    this._handleError();
  },

  _handleError() {
    const errorMessage = this.get('errorMessage');

    if (errorMessage) {
      return this.showError(errorMessage);
    }

    return this.hideError();
  },

  showError(errorMessage) {
    const $error = this.get('$error');

    this.set('renderedError', errorMessage);

    if ($error.hasClass('animating')) {
      return;
    }

    $error.transition(`slide down in`);
  },

  hideError() {
    const $error = this.get('$error');

    if ($error.hasClass('hidden')) {
      return;
    }

    if ($error.hasClass('animating')) {
      return;
    }

    $error.transition(`slide down out`);
  },

});
