import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState({
    name: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${API_URL}/expenses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    });
    navigate("/expenses");
  }

  const inputStyle = {
    backgroundColor: '#1a1a1a',
    border: '1px solid #c9a227',
    color: '#f5f5f5',
    borderRadius: '8px',
    padding: '12px',
    width: '100%',
    outline: 'none'
  }

  return (
    <div className="rounded-xl p-6" style={{backgroundColor: '#1a1a1a', border: '1px solid #1a472a'}}>
      <h1 className="text-2xl font-bold mb-6" style={{color: '#c9a227'}}>Edit Expense</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Expense Name"
          value={items.name}
          onChange={(e) => setItems({ ...items, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Amount"
          value={items.amount}
          onChange={(e) => setItems({ ...items, amount: e.target.value })}
          style={inputStyle}
        />
        <select
          value={items.category}
          onChange={(e) => setItems({ ...items, category: e.target.value })}
          style={inputStyle}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <button
          type="submit"
          className="font-semibold p-3 rounded-lg hover:opacity-80"
          style={{backgroundColor: '#c9a227', color: '#0d0d0d'}}
        >
          Update Expense
        </button>
      </form>
    </div>
  );
}

export default Edit;