// Logic executed for every incoming query, similar to Controllers
// We need a method (resolver function) for every API endpoint created in the schemas

import User from '../models/user';

export default {
  hello() {
    return {
      text: 'Hello, World!',
      views: 777
    };
  },

  // ts-
  createUser: async function ({ userInput }: any, req: any) {
    console.log('userInput >>> ', userInput, "Req >>> ", req);
    const existingUser = await User.findOne({ email: userInput.email });

    if (existingUser) {
      const error = new Error('User exists already!');
      throw error;
    }
  }
};