

import { useState } from "react";

// type FormProps = {
//   onAddItems: (item: Itemtype) => void;
// };
export interface Itemtype{
  id: number;
  description:string;
  quantity:number;
  packed: boolean;
}

interface PackingListProps {
  items: Itemtype[];
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
}
interface ItemlistProps{
  item: Itemtype;
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void
}
const initialItems:  Itemtype[]  = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "fan", quantity: 13, packed: false },
];


export function Welcome() {
  const[items, setItems] = useState(initialItems)
 const handleAdditems =(item: Itemtype) =>{
      setItems(items =>[...items, item ])
  }

  const handleDeleteitems = (id:number)=> {
    setItems((items => items.filter((item) => item.id !==id)))
  }
  const handleToggleId = (id:number)=> {
    setItems((items) => items.map((item) => item.id ===id ? { ...item, packed: !item.packed } : item))
  }
  return (
    <>
  
  <div className="app">
    <Logo/>
    <Form onAddItems={handleAdditems}/>
    <PackingList items={items} onToggleItems={handleToggleId} onDeleteItems={handleDeleteitems}/>
    <Stats/>
  </div>
   
    <p>travel List</p>
    
   {/* <Form  /> */}
    </>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>
  }

    
  
    
  
function Form({ onAddItems }: { onAddItems: (item: Itemtype) => void }) {
      const [description, setDescription] = useState('');
      const [quantity, setQuantity] = useState(1);
    
      function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!description) return;
    
        const newItem: Itemtype = {
          id: Date.now(),
          description,
          quantity,
          packed: false,
        };
    
        onAddItems(newItem);
        setDescription('');
        setQuantity(1); // reset to 1
      }
    
      return (
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>What do you need for your 😍 trip?</h3>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </form>
      );
    }

function PackingList({ items, onDeleteItems, onToggleItems }:PackingListProps ) {
  return (
  <div className='list'>
  <ul >
    {items.map(item=><Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id}/>)}
  </ul>

  </div>
  );
}
function Item({item, onDeleteItems, onToggleItems}: ItemlistProps){
  return <li>
    <input type="checkbox" checked={item.packed}onChange={() => {onToggleItems(item.id)}}></input><span style={item.packed ? {textDecoration: "line-through"}: {}}>{item.quantity} {item.description}</span>
  <button onClick={() => onDeleteItems(item.id)}>❌</button></li>
  
}
function Stats() {
  return <footer className='stats'>
    <em>
    You have X items on your list, and you already packed X (X%)
    </em>
  </footer>
}
// { items }: StatsProps