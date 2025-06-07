import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 px-6 border-t border-falcon-border-light bg-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-falcon-text-muted font-poppins">
          © 2024 Falcon Dashboard. All rights reserved.
        </div>
        <div className="flex items-center gap-1 text-sm text-falcon-text-muted font-poppins">
          Made with <Heart className="h-4 w-4 text-falcon-orange mx-1" /> by
          Falcon Team
        </div>
        <div className="text-sm text-falcon-text-muted font-poppins">
          Version 3.23.0
        </div>
      </div>
    </footer>
  );
}
