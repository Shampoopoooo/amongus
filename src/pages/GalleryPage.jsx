import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function GalleryPage() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error);
        setCrewmates([]); // fallback
      } else {
        setCrewmates(data || []);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      {crewmates.length === 0 ? (
        <p>No crewmates yet.</p>
      ) : (
        <ul>
          {crewmates.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
