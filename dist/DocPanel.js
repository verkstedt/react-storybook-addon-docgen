'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

require('!style-loader!css-loader!github-markdown-css/github-markdown.css');

var _generateMarkdown = require('./components/generateMarkdown');

var _generateMarkdown2 = _interopRequireDefault(_generateMarkdown);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    boxSizing: 'border-box'
  }
};

var DocPanel = function (_React$Component) {
  (0, _inherits3.default)(DocPanel, _React$Component);

  function DocPanel(props) {
    (0, _classCallCheck3.default)(this, DocPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DocPanel.__proto__ || (0, _getPrototypeOf2.default)(DocPanel)).call(this, props));

    _this.state = { docgen: null };


    _this._listener = function (d) {
      _this.setState({ docgen: d.docgen });
    };
    return _this;
  }

  (0, _createClass3.default)(DocPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.props.channel.on(_constants.EVENT_ID, this._listener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.channel.removeListener(_constants.EVENT_ID, this._listener);
    }
  }, {
    key: 'render',
    value: function render() {
      var docgen = this.state.docgen;

      if (!docgen) {
        return null;
      }
      var md = (0, _generateMarkdown2.default)(docgen);
      var html = (0, _marked2.default)(md);
      return _react2.default.createElement('div', { style: styles.base, className: 'markdown-body', dangerouslySetInnerHTML: { __html: html } });
    }
  }]);
  return DocPanel;
}(_react2.default.Component);

exports.default = DocPanel;