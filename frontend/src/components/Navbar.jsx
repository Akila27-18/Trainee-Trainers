export default function Navbar({ role, onLogout }) {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Trainee Mini Project Tracker</h1>
      <div className="flex items-center gap-4">
        <span className="capitalize">{role}</span>
        <button
          onClick={onLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
