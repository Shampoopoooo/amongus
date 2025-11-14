import { useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState(0);
  const [color, setColor] = useState("Red");
  const navigate = useNavigate();

  const colors = ["Red","Green","Blue","Purple","Yellow","Orange","Pink","Rainbow"];

  const createCrewmate = async (event) => {
    event.preventDefault();
    await supabase
      .from('crewmates')
      .insert({ name, speed: parseFloat(speed), color })
      .select();
    navigate('/gallery');
  };

  return (
    <div>
      <h2>Create a New Crewmate</h2>
      <form onSubmit={createCrewmate} style={{ display:'flex', flexDirection:'column', gap:'10px', maxWidth:'300px' }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" step="0.1" placeholder="Speed (mph)" value={speed} onChange={e => setSpeed(e.target.value)} required />
        <select value={color} onChange={e => setColor(e.target.value)}>
          {colors.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  );
}
