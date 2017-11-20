'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AuthService = require('./AuthService');

require('../index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'navbar-brand', to: '/' },
                        'crossover video portal'
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            'Food Jokes'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        (0, _AuthService.isLoggedIn)() ? _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/special' },
                            'Videos'
                        ) : ''
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2.default.createElement(
                        'li',
                        null,
                        (0, _AuthService.isLoggedIn)() ? _react2.default.createElement(
                            'button',
                            { className: 'btn btn-danger log', onClick: function onClick() {
                                    return (0, _AuthService.logout)();
                                } },
                            'Log out '
                        ) : _react2.default.createElement(
                            'button',
                            { className: 'btn btn-info log', onClick: function onClick() {
                                    return (0, _AuthService.login)();
                                } },
                            'Log In'
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

exports.default = Nav;

//# sourceMappingURL=Nav-compiled.js.map