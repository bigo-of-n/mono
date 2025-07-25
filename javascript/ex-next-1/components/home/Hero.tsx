import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to MyNextNotes</h2>
        <p className="mt-4 text-lg">
          The best place to store and organize your notes.
        </p>
        <Button className="mt-6">Get started</Button>
      </div>
    </section>
  );
};

export default Hero;
