import EventEmitter from 'events';

import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher.js';
import CheckboxConstants from '../constants/CheckboxConstants.js';

const TOGGLE_EVENT = 'TOGGLE_EVENT';

const _data = {
  checked: false,
};

function toggleChecked(checked) {
  _data.checked = checked;
}

const CheckboxStore = assign({}, EventEmitter.prototype, {
  getChecked() {
    return _data.checked;
  },

  emitToggle() {
    this.emit(TOGGLE_EVENT);
  },

  addToggleListener(callback) {
    this.on(TOGGLE_EVENT, callback);
  },

  removeToggleListener(callback) {
    this.removeListner(TOGGLE_EVENT, callback);
  },
});

export default CheckboxStore;

AppDispatcher.register(action => {
  switch (action.actionType) {
    case CheckboxConstants.TOGGLE_CHECKED:
      toggleChecked(action.checked);
      CheckboxStore.emitToggle();
      break;
  }
});
