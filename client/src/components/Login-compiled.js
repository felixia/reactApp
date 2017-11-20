'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

require('../index.css');

var _users = require('../../../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

        _this.state = {
            username: "",
            password: "",
            videos: []
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'handleUsernameChanged',
        value: function handleUsernameChanged(e) {
            this.setState({
                username: e.target.value
            });
        }
    }, {
        key: 'handlePasswordChanged',
        value: function handlePasswordChanged(e) {
            this.setState({
                password: e.target.value

            });
        }
    }, {
        key: 'submitForm',
        value: function submitForm(e) {
            e.preventDefault();
            var un = this.refs.username.value;
            var pw = this.refs.password.value;
            fetch('/user/auth', _users2.default.auth).then(function (data) {
                return data.json;
            });

            // fetch('/videos').then(data => data.json)
            //     .then(json => {
            //         this.setState({videos:json});
            //     });

        }
    }, {
        key: 'render',
        value: function render() {
            var videos = this.state.videos;
            // videos = videos.map((video, index) => {
            //     return (
            //         <li key={index}>
            //             <span>{video.obj.name}</span>
            //         </li>
            //     )
            // });
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { id: 'login', className: 'tab-pane active' },
                    _react2.default.createElement(
                        'form',
                        { className: 'form-signin', onSubmit: this.submitForm.bind(this) },
                        _react2.default.createElement(
                            'p',
                            { className: 'text-muted text-center btn-block btn btn-primary btn-rect' },
                            'Enter Your Username and Password'
                        ),
                        _react2.default.createElement('input', {
                            className: 'form-control',
                            required: true,
                            type: 'text',
                            value: this.state.username,
                            ref: 'username',
                            onChange: this.handleUsernameChanged.bind(this),
                            placeholder: 'Enter Username'
                        }),
                        _react2.default.createElement('input', {
                            className: 'form-control',
                            required: true,
                            type: 'password',
                            value: this.state.password,
                            ref: 'password',
                            onChange: this.handlePasswordChanged.bind(this),
                            placeholder: 'Enter password'

                        }),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { type: 'submit', className: 'btn text-muted text-center btn-danger' },
                            'Login'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        videos
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

//# sourceMappingURL=Login-compiled.js.map