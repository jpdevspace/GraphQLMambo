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

    const existingUser = await User.findOne({ email: userInput.email });

    if (existingUser) {
      const error = new Error('User exists already!');
      throw error;
    }

    const { email, name } = userInput;

    const user = new User({ email, name });

    const createdUser = await user.save();
    console.log('createdUser >>> ', createdUser);
    return { ...createdUser, _id: createdUser._id.toString() };
  }
};