// src/App.tsx
import { User } from './types';
import UserDisplay from './components/UserDisplay';

function App() {
  const users: User[] = [
    {
      name: 'Awesome User',
      messages: [
        { body: 'Here to break things' },
        { body: 'Smash smash' },
        { body: 'Third message' },
      ],
    },
  ];

  return (
    // src/App.tsx
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
