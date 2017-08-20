import { getChildProps } from 'src/lib';
import { ElType } from 'src/lib/PropTypes';

export default {
  name: 'SuiMenuMenu',
  props: {
    as: ElType(),
  },
  render() {
    return (
      <this.as {...getChildProps(this)} class="menu">
        {this.$slots.default}
      </this.as>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
