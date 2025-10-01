export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Rikari Kreasi Digital</h3>
        <p className="text-gray-400 mb-6">
          Transforming education through innovative digital experiences
        </p>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rikari Kreasi Digital. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}