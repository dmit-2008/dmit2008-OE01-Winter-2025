// create a custom components called navbar
// I want to you make the minimal version of a navbar using MUI.
// I want you to use typography in the home component to display it.

// for imports on mui this is the recommended
// way of importing them, use this way.
import Typography from "@mui/material/Typography"

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* add a container! */}
      <main>
        <Typography variant="h1">
          An Example of using MUI
        </Typography>
      </main>
    </div>
  );
}
