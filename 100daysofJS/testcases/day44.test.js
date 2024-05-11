const validateEmail = require('../day44');

test('Valid Email Format', () => {
  const validEmails = [
    'user@example.com',
    'user123@example.com',
    'user.name@example.com',
    'user_name@example.com',
    'user123@example.co.uk',
    'user@example.co.in',
    'user@subdomain.example.com',
  ];
  validEmails.forEach(email => {
    expect(validateEmail(email)).toBe(true);
  });
});

test('Invalid Email Format', () => {
  const invalidEmails = [
    'user@example',
    'user@example.',
    'user@.com',
    '@example.com',
    'user@-example.com',
    'user@example-.com',
    'user@example com',
    'user@example.123',
    'user@[123.123.123.123]',
    'user@[IPv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334]',
    'user@111.222.333.44444'
  ];
  invalidEmails.forEach(email => {
    expect(validateEmail(email)).toBe(false);
  });
});
