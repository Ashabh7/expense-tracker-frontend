import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Expenses() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    fetch(`${API_URL}/expenses`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  async function deleteItem(id) {
    await fetch(`${API_URL}/expenses/${id}`, {
      method: "DELETE",
    })
    setItems(items.filter((item) => item._id !== id))
  }

  const filteredItems = filter === "All"
    ? items
    : items.filter(item => item.category.toLowerCase() === filter.toLowerCase())

  return (
    <div>
      <div className="rounded-xl p-6 mb-6" style={{backgroundColor: '#1a472a', border: '2px solid #c9a227'}}>
        <p className="text-sm mb-1" style={{color: '#f5f5f5', opacity: 0.8}}>Total Expenses</p>
        <h2 className="text-4xl font-bold" style={{color: '#c9a227'}}>
          ₹{filteredItems.reduce((sum, item) => sum + item.amount, 0)}
        </h2>
      </div>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="rounded-lg p-3 mb-4 w-full"
        style={{backgroundColor: '#1a1a1a', border: '1px solid #c9a227', color: '#f5f5f5'}}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>

      <div className="flex flex-col gap-3">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="rounded-xl p-4 flex justify-between items-center"
            style={{backgroundColor: '#1a1a1a', border: '1px solid #1a472a'}}
          >
            <div>
              <p className="font-semibold" style={{color: '#f5f5f5'}}>{item.name}</p>
              <p className="text-sm" style={{color: '#c9a227'}}>{item.category}</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold" style={{color: '#c9a227'}}>₹{item.amount}</p>
              <Link
                to={`/edit/${item._id}`}
                className="text-sm px-3 py-1 rounded-lg hover:opacity-80"
                style={{backgroundColor: '#1a472a', color: '#f5f5f5'}}
              >
                Edit
              </Link>
              <button
                onClick={() => deleteItem(item._id)}
                className="text-sm px-3 py-1 rounded-lg hover:opacity-80"
                style={{backgroundColor: '#4a0000', color: '#ff6b6b'}}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expenses;