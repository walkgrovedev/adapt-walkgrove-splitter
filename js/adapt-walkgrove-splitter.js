define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  var SplitterView = ComponentView.extend({

    events: {
      'click .js-splitter-continue-click': 'onContinueClicked'
    },
    
    preRender: function() {
      this.checkIfResetOnRevisit();
    },

    postRender: function() {
      this.setReadyStatus();

      if(!this.model.get('buttonTitle')) {
        this.onContinueClkicked();
      }
    },

    checkIfResetOnRevisit: function() {
      var isResetOnRevisit = this.model.get('_isResetOnRevisit');

      // If reset is enabled set defaults
      if (isResetOnRevisit) {
        this.model.reset(isResetOnRevisit);
      }
    },

    onContinueClicked: function() {
      this.setCompletionStatus();
    }




  },
  {
    template: 'splitter'
  });

  return Adapt.register('splitter', {
    model: ComponentModel.extend({}),// create a new class in the inheritance chain so it can be extended per component type if necessary later
    view: SplitterView
  });
});
