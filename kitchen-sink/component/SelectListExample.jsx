/* eslint no-console:0 */

import React, { PropTypes } from 'react';
import Page from '../common/Page';
import { List, SelectList, Modal } from 'antm';

const SelectorData = [
  {
    name:'浙江',
    pinyin:'zhejiang',
    py:'zj',
    id:'zj'
  }, {
    name:'上海',
    pinyin:'shanghai',
    py:'sh',
    id:'sh'
  }, {
    name:'江苏',
    pinyin:'jiangsu',
    py:'js',
    id:'js'
  }, {
    name:'福建',
    pinyin:'fujian',
    py:'fj',
    id:'fj'
  }, {
    name:'山东',
    pinyin:'shandong',
    py:'sd',
    id:'sd'
  }, {
    name:'安徽',
    pinyin:'anhui',
    py:'ah',
    id:'ah'
  }
];

let SelectListExample = React.createClass({
  render() {
    return (<SelectList
      value={[SelectorData[0]]}
      data={SelectorData}
      onClick={(el) => {console.log(el);}}
    />);
  }
});

export default SelectListExample;
