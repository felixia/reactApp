'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { getVideoData } from '../../../controllers/videos';

var Videos = function (_Component) {
    _inherits(Videos, _Component);

    function Videos() {
        _classCallCheck(this, Videos);

        var _this = _possibleConstructorReturn(this, (Videos.__proto__ || Object.getPrototypeOf(Videos)).call(this));

        _this.state = { videos: [] };
        return _this;
    }

    _createClass(Videos, [{
        key: 'getVideos',
        value: function getVideos() {
            var _this2 = this;

            getVideoData().then(function (videos) {
                _this2.setState({ videos: videos });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getVideos();
        }
    }, {
        key: 'render',
        value: function render() {
            var videos = this.state.videos;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Nav2.default, null),
                _react2.default.createElement(
                    'h3',
                    { className: 'text-center' },
                    'Crossover videos'
                ),
                _react2.default.createElement('hr', null),
                videos.map(function (video, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'col-sm-6', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-primary' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                _react2.default.createElement(
                                    'h3',
                                    { className: 'panel-title' },
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'btn' },
                                        '#',
                                        video.id
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    ' ',
                                    video.video,
                                    ' '
                                )
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Videos;
}(_react.Component);

exports.default = Videos;

//# sourceMappingURL=Videos-compiled.js.map