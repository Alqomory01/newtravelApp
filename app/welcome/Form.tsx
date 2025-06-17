import { useState } from "react";

export interface Itemtype{
    id: number;
    description:string;
    quantity:number;
    packed: boolean;
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