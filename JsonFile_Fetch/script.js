// FETCH RETURN THE PROMISE , RESPONSE OBJECT ALSO RETURN PROMISE CONVERT THE RESPONSE INTO JSON

// fetch("person.json")
//   .then((response) => response.json())
//   .then((value) => console.log(value));

// IF YOU WANT TO ITERATE THROUGH ALL OF OBJECTS
fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.error(error));
