export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-3">Hoichoi</h3>
          <p>Watch Bengali movies & web series online.</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>Movies</li>
            <li>Web Series</li>
            <li>Originals</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Contact</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}