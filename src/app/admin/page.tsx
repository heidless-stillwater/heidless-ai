
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Admin | heidless ai',
  description: 'Admin panel for heidless ai.',
};

export default function AdminPage() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
          Admin Page
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Welcome to the admin area.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>All systems operational.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
