import { useEffect, useState } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );

      const users = await response.json();

      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return { users, loading };
}
