import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState(0);
  const [color, setColor] = useState("Red");

  const colors = ["Red","Green","Blue","Purple","Yellow","Orange","Pink","Rainbow"];

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select("*").eq("id", id).single();
      if (data) {
        setCrewmate(data);
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
      }
    };
    fetchCrewmate();
  }, [id]);

  const updateCrewmate = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').update({ name, speed: parseFloat(speed), color }).eq('id', id);
    setCrewmate({ ...crewmate, name, speed, color });
  };

  const deleteCrewmate = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/gallery');
  };

  if(!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h1>{crewmate.name}</h1>
      {crewmate.speed < 1 && <p style={{color:'red'}}>Warning: Speed is very low!</p>}
      <form onSubmit={updateCrewmate} style={{ display:'flex', flexDirection:'column', gap:'10px', maxWidth:'300px' }}>
        <input value={name} onChange={e=>setName(e.target.value)} required />
        <input type="number" step="0.1" value={speed} onChange={e=>setSpeed(e.target.value)} required />
        <select value={color} onChange={e=>setColor(e.target.value)}>
          {colors.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button type="submit">Update Crewmate</button>
      </form>
      <button onClick={deleteCrewmate} style={{color:"red", marginTop:"10px"}}>Delete Crewmate</button>
    </div>
  );
}
