import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20 text-center">
      <h2 className="text-4xl font-bold">Welcome to MyNextNotes</h2>
      <p className="mt-4 text-lg">
        The best place to store and organize your notes.
      </p>
      <Button>Get started</Button>
    </section>
  );
};

export default Hero;
