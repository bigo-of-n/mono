import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            Welcome to MyNextNotes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-4 text-lg">
            The best place to store and organize your notes.
          </p>
          <Button className="mt-6 bg-red-400 text-black">Get started</Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero;
