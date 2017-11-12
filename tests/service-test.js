/* global describe, it*/
/* jslint node: true, esnext: true */

'use strict';

const chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  {
    manager
  } = require('kronos-service-manager'),
  {
    SendEndpoint
  } = require('kronos-endpoint'),
  {
    ServiceConsul
  } = require('../dist/module.js');

describe('consul service', function () {
  this.timeout(30000);
  it('create', () =>
    manager([{
      id: 'myId'
    }, {
      name: 'registry',
      checkInterval: 100
    }], [require('../dist/module.js'), require('kronos-service-health-check'), require('kronos-service-koa')]).then(
      manager => {
        const cs = manager.services.registry;

        assert.equal(cs.name, 'registry');
        assert.equal(cs.type, 'consul');

        return cs.start().then(f => {
          assert.equal(cs.state, 'running');
          assert.deepEqual(cs.tags, []);

          const kv = new SendEndpoint('kv', {}, {
            createOpposite: true
          });

          kv.opposite.receive = data => {
            console.log(`kv.receive: ${data ? data[0].Value : 'null'}`);
          };
          cs.endpoints.kv.connected = kv;
          kv.receive({
            update: true
          });
          let i = 0;

          setInterval(() => {
            cs.consul.kv.set('kronos', '' + i);
            i = i + 1;
          }, 2000);

          const te = new SendEndpoint('test', {}, {
            createOpposite: true
          });

          te.opposite.receive = request => {
            console.log(`te.opposite.receive: ${JSON.stringify(request)}`);
          };

          te.connected = cs.endpoints.nodes;
          te.receive({
            update: true
          }).then(r => {
            console.log(r);
            //assert.equal(r[0].ServiceName, 'kronos');
            te.receive({
              update: false
            });
          });

          cs.registerService('myService', {
            url: cs.listener.url + '/somepath'
          }).then(() => {
            const us = cs.serviceURLs('myService');

            us.next().value.then(u => assert.equal(u, cs.listener.url + '/somepath'));

            setInterval(() =>
              us.next().value.then(u => {
                assert.equal(u, cs.listener.url + '/somepath');
                console.log(`myService: ${u}`);
              }),
              1000);

            setTimeout(() => {
                cs.unregisterService('myService').then(() => {
                  assert.ok('unregistered');

                  const us = cs.serviceURLs('myService');
                  console.log(`after: ${JSON.stringify(us.next())}`);
                });
              },
              5000);
          }).catch(console.log);

          return new Promise((f, r) =>
            setTimeout(() => {
              cs.stop();
              f();
            }, 20000));
        });
      })
  );
});