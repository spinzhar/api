(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    58: function(e, t, a) {
      e.exports = a(77);
    },
    63: function(e, t, a) {},
    64: function(e, t, a) {},
    77: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(7),
        o = a.n(r),
        i = (a(63), a(49)),
        c = a(50),
        d = a(52),
        u = a(51),
        s = a(53),
        m = (a(64), a(113)),
        h = a(110),
        g = a(115),
        p = a(114),
        v = a(112),
        E = a(119),
        f = a(116),
        w = a(108),
        S = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++)
              l[r] = arguments[r];
            return (
              ((a = Object(d.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(l))
              )).state = {
                idOutFolder: null,
                idInFolder: null,
                isLoading: !1,
                toRepeatValue: 0
              }),
              (a.handleChangeInput = function(e) {
                'idOutFolder' === e.target.id &&
                  a.setState({ idOutFolder: e.target.value }),
                  'idInFolder' === e.target.id &&
                    a.setState({ idInFolder: e.target.value });
              }),
              (a.handleChangeSelect = function(e) {
                console.log(e.target),
                  a.setState({ toRepeatValue: e.target.value });
              }),
              (a.handleClick = function(e) {
                a.setState({ isLoading: !0 }),
                  google.script.run
                    .withSuccessHandler(function() {
                      a.setState({ isLoading: !1 });
                    })
                    .moveFoldersAndFiles(
                      a.state.idOutFolder,
                      a.state.idInFolder
                    ),
                  google.script.run.setTriggerAtHours(a.state.toRepeatValue);
              }),
              a
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
                    this.state.isLoading ? l.a.createElement(w.a, null) : null,
                    l.a.createElement(
                      'h3',
                      null,
                      '\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0438\u0440\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439'
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        h.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_shared'
                      ),
                      l.a.createElement(
                        h.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 40, color: '#5f6368' }
                        },
                        'arrow_right_alt'
                      ),
                      l.a.createElement(
                        h.a,
                        {
                          fontSize: 'large',
                          style: { fontSize: 50, color: '#5f6368' }
                        },
                        'folder_open'
                      ),
                      l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(g.a, {
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
                        l.a.createElement(g.a, {
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
                        v.a,
                        { style: { width: '196px', margin: '15px' } },
                        l.a.createElement(
                          f.a,
                          { htmlFor: 'age-simple' },
                          '\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c'
                        ),
                        l.a.createElement(
                          p.a,
                          {
                            value: this.state.toRepeatValue,
                            onChange: this.handleChangeSelect
                          },
                          l.a.createElement(
                            E.a,
                            { value: 0 },
                            l.a.createElement('em', null, '\u041d\u0435\u0442')
                          ),
                          l.a.createElement(
                            E.a,
                            { value: 1 },
                            '\u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441'
                          ),
                          l.a.createElement(
                            E.a,
                            { value: 2 },
                            '\u0420\u0430\u0437 \u0432 3 \u0447\u0430\u0441\u0430'
                          ),
                          l.a.createElement(
                            E.a,
                            { value: 6 },
                            '\u0420\u0430\u0437 \u0432 6 \u0447\u0430\u0441\u0430'
                          ),
                          l.a.createElement(
                            E.a,
                            { value: 12 },
                            '\u0420\u0430\u0437 \u0432 12 \u0447\u0430\u0441\u0430'
                          ),
                          l.a.createElement(
                            E.a,
                            { value: 24 },
                            '\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c'
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        m.a,
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
      o.a.render(l.a.createElement(S, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[58, 1, 2]]
]);
//# sourceMappingURL=main.1dac2f1e.chunk.js.map
