import Ember from 'ember';

export default Ember.Component.extend({

  modalClassName: Ember.computed(
    function () {
      return `.confirm-modal-${this.get('elementId')}`;
    }
  ),

  headerText: Ember.computed(
    'header',
    function () {
      return this.get('header') || 'Warning';
    }
  ),

  didRender() {
    this._super(...arguments);

    const self = this;
    const modalClassName = this.get('modalClassName');
    const $modal = $(modalClassName);

    $modal.modal({
      onDeny() {
        if (typeof self.attrs.onDeny === 'function') {
          self.attrs.onDeny();
        }
      },
      onApprove() {
        if (typeof self.attrs.onConfirm === 'function') {
          self.attrs.onConfirm();
        }
      },
      onShow() {
        if (typeof self.attrs.onShow === 'function') {
          self.attrs.onShow(true);
        }
      },
      onHide() {
        if (typeof self.attrs.onHide === 'function') {
          self.attrs.onHide(false);
        }
      },
    });

    this.set('$modal', $modal);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const $modal = this.get('$modal');
    const isActive = this.get('isActive');

    if ($modal && isActive) {
      $modal.modal('show');
    }
  },

});
