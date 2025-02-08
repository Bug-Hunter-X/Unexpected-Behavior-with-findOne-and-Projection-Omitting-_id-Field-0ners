```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, name: 1 } }, (err, result) => {
  if (err) throw err;
  console.log(result);
});
```