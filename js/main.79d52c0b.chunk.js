(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    52: function(e, t, n) {
      e.exports = n(71);
    },
    57: function(e, t, n) {},
    58: function(e, t, n) {},
    71: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        l = n.n(a),
        o = n(7),
        r = n.n(o),
        i = (n(57), n(44)),
        c = n(45),
        d = n(47),
        s = n(46),
        u = n(48),
        h = (n(58), n(104)),
        g = n(102),
        m = n(103),
        f = n(100),
        p = (function(e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, l = new Array(a), o = 0; o < a; o++)
              l[o] = arguments[o];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(s.a)(t)).call.apply(e, [this].concat(l))
              )).state = {
                idOutFolder: null,
                idInFolder: null,
                isLoading: !1
              }),
              (n.handleChangeInput = function(e) {
                'idOutFolder' === e.target.id &&
                  n.setState({ idOutFolder: e.target.value }),
                  'idInFolder' === e.target.id &&
                    n.setState({ idInFolder: e.target.value });
              }),
              (n.handleClick = function(e) {
                console.log(n.state), n.setState({ isLoading: !0 });
                google.script.run.withSuccessHandler(() => {
                  finishLoading();
                });
              }),
              (n.finishLoading = function() {
                console.log('\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430'),
                  n.setState({ isLoading: !1 });
              }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(
                    'div',
                    { className: 'App' },
                    this.state.isLoading ? l.a.createElement(f.a, null) : null,
                    l.a.createElement(
                      'h3',
                      null,
                      '\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0438\u0440\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439'
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        g.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_shared'
                      ),
                      l.a.createElement(
                        g.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 40, color: '#5f6368' }
                        },
                        'arrow_right_alt'
                      ),
                      l.a.createElement(
                        g.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_open'
                      ),
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(m.a, {
                          id: 'idOutFolder',
                          label:
                            '\u0418\u0437 ID \u043f\u0430\u043f\u043a\u0438',
                          type: 'search',
                          margin: 'normal',
                          onChange: this.handleChangeInput
                        })
                      ),
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(m.a, {
                          id: 'idInFolder',
                          label: '\u0412 ID \u043f\u0430\u043f\u043a\u0438',
                          type: 'search',
                          margin: 'normal',
                          onChange: this.handleChangeInput
                        })
                      )
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        h.a,
                        {
                          variant: 'outlined',
                          color: 'primary',
                          style: { margin: '60px 5px' },
                          onClick: this.handleClick
                        },
                        '\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c'
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(l.a.createElement(p, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[52, 1, 2]]
]);
//# sourceMappingURL=main.0a0f9508.chunk.js.map
