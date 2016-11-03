import CheckboxConstants from '../constants/CheckboxConstants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

export default {
  toggleChecked(checked) {
    AppDispatcher.dispatch({
      actionType: CheckboxConstants.TOGGLE_CHECKED,
      checked: checked,
    });
  },
};
