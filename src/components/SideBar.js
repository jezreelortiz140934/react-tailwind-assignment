function SideBar() {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
      <h3 className="font-semibold mb-2">Navigation</h3>
      <ul className="space-y-2">
        <li><a href="#profile" className="text-blue-600 hover:underline">Profile</a></li>
        <li><a href="#projects" className="text-blue-600 hover:underline">Projects</a></li>
        <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
      </ul>
    </aside>
  );
}
export default SideBar;