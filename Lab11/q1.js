const dns = require('dns');
const domain = 'www.miu.edu';

dns.lookup(domain, (err, address) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`The IP address of ${domain} is ${address}`);
});