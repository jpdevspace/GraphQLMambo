// Logic executed for every incoming query, similar to Controllers
// We need a method (resolver function) for every API endpoint created in the schemas

export default {
  hello() {
    return {
      text: 'Hello, World!',
      views: 777
    };
  }
};