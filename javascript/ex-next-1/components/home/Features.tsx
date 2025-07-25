import React from 'react';
import { FileText, Cloud, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const Features = () => {
  return (
    <section className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-12">
            Features
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FileText className="h-12 w-12 mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-4">Easy Note-Taking</h4>
            <p className="mt-2 text-muted-foreground">
              A simple and intuitive interface for taking notes.
            </p>
          </div>
          <div className="text-center">
            <Cloud className="h-12 w-12 mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-4">Cloud Sync</h4>
            <p className="mt-2 text-muted-foreground">
              Sync your notes across all your devices.
            </p>
          </div>
          <div className="text-center">
            <Lock className="h-12 w-12 mx-auto text-primary" />
            <h4 className="text-xl font-semibold mt-4">Secure</h4>
            <p className="mt-2 text-muted-foreground">
              Your notes are safe and secure with us.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Features;
