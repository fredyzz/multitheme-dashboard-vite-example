import { BadgeQuestionMark, Contact } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';

export default function App() {
  return (
    <div className="flex flex-col jusfify-content gap-4 p-4">
      <h1>Shadcn POC</h1>
      <p>Welcome good UI lovers!</p>

      <Card className="hover:shadow-lg transition-all duration-300 max-w-100 mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeQuestionMark className="h-5 w-5" />
            Any doubt?
          </CardTitle>
          <CardDescription>
            If you have some doubt, send me a Google chat message
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Contact className="h-5 w-5" />
          <p>Fredy Zimperz</p>
        </CardContent>
      </Card>
    </div>
  );
}
