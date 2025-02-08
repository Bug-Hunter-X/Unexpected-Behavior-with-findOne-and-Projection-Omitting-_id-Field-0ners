```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 1, name: 1 } }, (err, result) => {
  if (err) throw err;
  const { _id, ...rest } = result; // Destructure _id if not needed
  console.log(rest);
});
```