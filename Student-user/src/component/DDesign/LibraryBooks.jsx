// src/component/LibraryBooksPage.jsx
import React, { useState } from "react";
import { FiSearch, FiBook, FiUser } from "react-icons/fi";

const BOOKS = [
  { id: "b1", title: "C Programming", author: "Dennis Ritchie", genre: "Programming", totalCopies: 5, borrowedCopies: 2, borrowedBy: [{ name: "Alice", year: 2, department: "CSE" }, { name: "Bob", year: 3, department: "CSE" }] },
  { id: "b2", title: "C++ Programming", author: "Bjarne Stroustrup", genre: "Programming", totalCopies: 4, borrowedCopies: 1, borrowedBy: [{ name: "Charlie", year: 2, department: "CSE" }] },
  { id: "b3", title: "Java: Complete Reference", author: "Herbert Schildt", genre: "Programming", totalCopies: 3, borrowedCopies: 0, borrowedBy: [] },
  { id: "b4", title: "Python Programming", author: "Guido van Rossum", genre: "Programming", totalCopies: 4, borrowedCopies: 2, borrowedBy: [{ name: "Dave", year: 3, department: "CSE" }, { name: "Eve", year: 2, department: "CSE" }] },
  { id: "b5", title: "Web Technologies", author: "Ivan Bayross", genre: "Web Development", totalCopies: 3, borrowedCopies: 1, borrowedBy: [{ name: "Frank", year: 2, department: "CSE" }] },
  { id: "b6", title: "Cryptography", author: "Bruce Schneier", genre: "Security", totalCopies: 2, borrowedCopies: 0, borrowedBy: [] },
  { id: "b7", title: "Theory of Computation", author: "Michael Sipser", genre: "Theory", totalCopies: 3, borrowedCopies: 1, borrowedBy: [{ name: "Grace", year: 4, department: "CSE" }] },
  { id: "b8", title: "English 1", author: "John Smith", genre: "Language", totalCopies: 2, borrowedCopies: 0, borrowedBy: [] },
  { id: "b9", title: "English 2", author: "Jane Doe", genre: "Language", totalCopies: 2, borrowedCopies: 1, borrowedBy: [{ name: "Hank", year: 1, department: "CSE" }] },
  { id: "b10", title: "Data Structures & Algorithms", author: "Narasimha Karumanchi", genre: "Programming", totalCopies: 4, borrowedCopies: 2, borrowedBy: [{ name: "Ivy", year: 3, department: "CSE" }] },
  { id: "b11", title: "Mathematics", author: "Thomas Apostol", genre: "Math", totalCopies: 3, borrowedCopies: 0, borrowedBy: [] },
  { id: "b12", title: "Physics", author: "Halliday & Resnick", genre: "Science", totalCopies: 2, borrowedCopies: 1, borrowedBy: [{ name: "Jack", year: 1, department: "CSE" }] },
  { id: "b13", title: "Operating System", author: "Abraham Silberschatz", genre: "OS", totalCopies: 3, borrowedCopies: 0, borrowedBy: [] },
  { id: "b14", title: "DBMS", author: "Ramakrishnan", genre: "Database", totalCopies: 2, borrowedCopies: 1, borrowedBy: [{ name: "Kelly", year: 2, department: "CSE" }] },
  { id: "b15", title: "UI/UX Design Basics", author: "Don Norman", genre: "Design", totalCopies: 2, borrowedCopies: 0, borrowedBy: [] },
  { id: "b16", title: "IoT Fundamentals", author: "Ovidiu Vermesan", genre: "IoT", totalCopies: 3, borrowedCopies: 1, borrowedBy: [{ name: "Leo", year: 4, department: "CSE" }] },
  { id: "b17", title: "Engineering Graphics", author: "N. D. Bhatt", genre: "Engineering", totalCopies: 2, borrowedCopies: 0, borrowedBy: [] },
  { id: "b18", title: "Chemistry", author: "Morrison", genre: "Science", totalCopies: 3, borrowedCopies: 1, borrowedBy: [{ name: "Mia", year: 1, department: "CSE" }] },
  { id: "b19", title: "Calculus & Matrices", author: "Stewart", genre: "Math", totalCopies: 3, borrowedCopies: 0, borrowedBy: [] },
];

const LibraryBooksPage = ({ filter }) => {
  const [books, setBooks] = useState(BOOKS);
  const [search, setSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("all");

  const handleBorrow = (id) => {
    setBooks(prev =>
      prev.map(b =>
        b.id === id && b.totalCopies - b.borrowedCopies > 0
          ? { ...b, borrowedCopies: b.borrowedCopies + 1, borrowedBy: [...b.borrowedBy, { name: "You (Demo)", year: 2, department: "CSE" }] }
          : b
      )
    );
    alert("Borrow request successful ✅");
  };

  const genres = ["all", ...new Set(books.map(b => b.genre))];

  const filteredBooks = books.filter(b => {
    if (filterGenre !== "all" && b.genre !== filterGenre) return false;
    if (filter === "available" && b.borrowedCopies >= b.totalCopies) return false;
    if (filter === "borrowed" && b.borrowedCopies === 0) return false;
    if (search && !(b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
        <FiBook /> CSE Library
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-6xl">
        <div className="flex items-center gap-2 flex-1 md:max-w-xs bg-white p-2 rounded shadow-sm border">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="outline-none w-full text-sm"
          />
        </div>

        <select value={filterGenre} onChange={e => setFilterGenre(e.target.value)} className="p-2 border rounded text-sm bg-white shadow-sm">
          {genres.map(g => <option key={g} value={g}>{g === "all" ? "All Genres" : g}</option>)}
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full border-collapse border rounded-lg shadow bg-white">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">Book Name</th>
              <th className="p-3 text-left">Author</th>
              <th className="p-3 text-left">Genre</th>
              <th className="p-3 text-left">Available Copies</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length === 0 ? (
              <tr><td colSpan={6} className="text-center p-4 text-gray-500">No books found.</td></tr>
            ) : filteredBooks.map(b => (
              <tr key={b.id} className="transition-transform duration-200 hover:scale-[1.02] hover:shadow-md hover:bg-indigo-50">
                <td className="p-3">{b.title}</td>
                <td className="p-3">{b.author}</td>
                <td className="p-3">{b.genre}</td>
                <td className="p-3">{b.totalCopies - b.borrowedCopies}</td>
                <td className="p-3">
                  {b.borrowedCopies === 0 ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Available</span>
                  ) : (
                    <div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Borrowed</span>
                      <ul className="mt-1 text-xs text-gray-600">
                        {b.borrowedBy.map((u,i)=>(
                          <li key={i} className="flex items-center gap-1"><FiUser className="text-gray-400"/> {u.name} ({u.year} yr, {u.department})</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </td>
                <td className="p-3">
                  <button
                    disabled={b.totalCopies - b.borrowedCopies <= 0}
                    onClick={() => handleBorrow(b.id)}
                    className={`px-3 py-1 rounded text-sm ${b.totalCopies - b.borrowedCopies <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
                  >
                    {b.totalCopies - b.borrowedCopies <= 0 ? "Not Available" : "Borrow"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden w-full max-w-3xl flex flex-col gap-4">
        {filteredBooks.length === 0 ? (
          <div className="text-center p-4 text-gray-500">No books found.</div>
        ) : filteredBooks.map(b => (
          <div key={b.id} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{b.title}</h2>
              <span className={`px-2 py-1 rounded-full text-xs ${b.borrowedCopies === 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                {b.borrowedCopies === 0 ? "Available" : "Borrowed"}
              </span>
            </div>
            <p className="text-gray-600 text-sm">Author: {b.author}</p>
            <p className="text-gray-600 text-sm">Genre: {b.genre}</p>
            <p className="text-gray-600 text-sm">Available Copies: {b.totalCopies - b.borrowedCopies}</p>
            {b.borrowedCopies > 0 && (
              <ul className="text-gray-600 text-xs">
                {b.borrowedBy.map((u,i)=>(
                  <li key={i} className="flex items-center gap-1"><FiUser className="text-gray-400"/> {u.name} ({u.year} yr, {u.department})</li>
                ))}
              </ul>
            )}
            <button
              disabled={b.totalCopies - b.borrowedCopies <= 0}
              onClick={() => handleBorrow(b.id)}
              className={`mt-2 px-3 py-1 rounded text-sm ${b.totalCopies - b.borrowedCopies <= 0 ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
            >
              {b.totalCopies - b.borrowedCopies <= 0 ? "Not Available" : "Borrow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryBooksPage;
