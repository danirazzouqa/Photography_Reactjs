const bcrypt = require('bcryptjs');

const knownPassword = 'u'; // Replace with the actual password
const storedHashedPassword = '$2a$12$d7jxvlL6/H47kgmqsMoxuOqBylZRAwyx/CavKJaqPKv1MK3aXjO5u'; // Replace with the stored hash

bcrypt.hash(knownPassword, 12, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing known password:', err);
  } else {
    bcrypt.compare(hashedPassword, storedHashedPassword, (compareErr, result) => {
      if (compareErr) {
        console.error('Error comparing passwords:', compareErr);
      } else {
        if (result) {
          console.log('Passwords match!');
        } else {
          console.log('Passwords do not match.');
        }
      }
    });
  }
});
