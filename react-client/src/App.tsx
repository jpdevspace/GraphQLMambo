// src/App.tsx
import { User } from './types';

function App() {
  const users: User[] = [
    {
      name: 'Awesome User',
      messages: [{ body: 'Here to break things' }, { body: 'Smash smash' }],
    },
  ];

  return (
    // src/App.tsx

    // ...
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <h2 className="text-4xl text-yellow-500">Hello World!</h2>
    </div>
    // ...
  );
}

export default App;
