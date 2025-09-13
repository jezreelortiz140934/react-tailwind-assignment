function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/50"
        alt="Profile"
        className="rounded-full"
      />
      <div>
        <h1 className="text-lg font-bold">Jezreel's Portfolio</h1>
        <p>123 Main Street, Iligan City</p>
        <p>jezreel@example.com</p>
      </div>
    </header>
  );
}
export default Header;