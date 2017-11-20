'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _SignUp = require('./SignUp');

var _SignUp2 = _interopRequireDefault(_SignUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            signup: false,
            login: true
        };

        return _this;
    }

    _createClass(Home, [{
        key: 'switch',
        value: function _switch() {
            var signup = this.state.signup;
            var login = this.state.login;
            return this.setState({
                signup: !signup,
                login: !login

            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Jumbotron,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Grid,
                        null,
                        _react2.default.createElement(
                            'h1',
                            { className: 'text-center' },
                            'Video Portal'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-center' },
                            'Welcome to Crossover Video Portal.'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-center' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'list-inline' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { className: 'text-muted', 'data-toggle': 'tab', onClick: this.switch.bind(this) },
                                'Login'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { className: 'text-muted', 'data-toggle': 'tab', onClick: this.switch.bind(this) },
                                'Register'
                            )
                        )
                    )
                ),
                this.state.signup ? _react2.default.createElement(_SignUp2.default, null) : null,
                this.state.login ? _react2.default.createElement(_Login2.default, null) : null
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

//# sourceMappingURL=Home-compiled.js.map