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
        r = n(7),
        o = n.n(r),
        i = (n(57), n(44)),
        c = n(45),
        d = n(47),
        u = n(46),
        s = n(48),
        h = (n(58), n(102)),
        m = n(99),
        f = n(101),
        g = (function(e) {
          function t() {
            var e, n;
            Object(i.a)(this, t);
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++)
              l[r] = arguments[r];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(l))
              )).state = { idOutFolder: null, idInFolder: null }),
              (n.handleChangeInput = function(e) {
                'idOutFolder' === e.target.id &&
                  n.setState({ idOutFolder: e.target.value }),
                  'idInFolder' === e.target.id &&
                    n.setState({ idInFolder: e.target.value });
              }),
              (n.handleClick = function(e) {
                console.log(n.state),
                  //  google.script.run.myFunction(n.state.idOutFolder);

                  google.script.run
                    .withSuccessHandler(() => {
                      console.log('выполнено');
                    })
                    .moveFoldersAndFiles(
                      n.state.idOutFolder,
                      n.state.idInFolder
                    );
              }),
              n
            );
          }
          return (
            Object(s.a)(t, e),
            Object(c.a)(t, [
              {
                key: 'render',
                value: function() {
                  return l.a.createElement(
                    'div',
                    { className: 'App' },
                    l.a.createElement(
                      'h3',
                      null,
                      '\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0438\u0440\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439'
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        m.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_shared'
                      ),
                      l.a.createElement(
                        m.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 40, color: '#5f6368' }
                        },
                        'arrow_right_alt'
                      ),
                      l.a.createElement(
                        m.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_open'
                      ),
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(f.a, {
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
                        l.a.createElement(f.a, {
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
      o.a.render(l.a.createElement(g, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[52, 1, 2]]
]);
//# sourceMappingURL=main.96ed2ce4.chunk.js.map
