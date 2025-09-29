import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import {
  BarChart3,
  CheckCircle,
  Code2,
  Palette,
  Settings,
  Sparkles,
  Upload,
} from 'lucide-react';
import { ThemeSwitcher } from './components/theme-switcher';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { Alert, AlertDescription } from './components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Separator } from './components/ui/separator';
import { Switch } from './components/ui/switch';
import { Progress } from './components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Badge } from './components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';

export function RandomComponentsScreen() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Multi theme - Easy customization
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          With CSS variables can be customized the look and feel of the app. If
          it's needed the components are also customizable, because they have
          open code with exposed primitives.
        </p>
      </div>

      {/* Theme Switcher Demo */}
      <Card className="mb-8 border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Global theme controls
          </CardTitle>
          <CardDescription>
            This theme is applyed globaly in the RootLayout
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Dropdown selector
              </Label>
              <ThemeSwitcher variant="select" />
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Compact button
              </Label>
              <ThemeSwitcher variant="compact" />
            </div>
            <div className="md:col-span-1">
              <Label className="text-sm font-medium mb-2 block">
                Individual buttons
              </Label>
              <ThemeSwitcher variant="buttons" />
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Implementation:</strong> The theme is controlled in a
              global provider, and is applyed to all the application using
              classes in the root HTML tag.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Resto de componentes de demostración */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card Component */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Profile card
            </CardTitle>
            <CardDescription>
              Card component with avatar and badges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/developer-avatar.png" />
                <AvatarFallback>FZ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Fredy</p>
                <p className="text-sm text-muted-foreground">
                  Frontend Developer
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge variant="default">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Component - Enhanced for boxy theme */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Form example</CardTitle>
            <CardDescription>Inputs and buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" placeholder="Wrap de curry" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="video">YouTube video</Label>
              <Input id="video" placeholder="9ktvGeMztfA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="courses">Courses *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Main" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Main">Main</SelectItem>
                  <SelectItem value="Secondaries">Secondaries</SelectItem>
                  <SelectItem value="Dishes">Dishes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>File attached</Label>
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">
                  UPLOAD IMAGE OR DROP HERE
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Dimensions: 2560*1440px (1280*720@2x), Max: 3MB
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Difficulty *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="difficulty"
                    value="low"
                    className="text-primary"
                  />
                  <span className="text-sm">Low</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="difficulty"
                    value="medium"
                    defaultChecked
                    className="text-primary"
                  />
                  <span className="text-sm">Medium</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="difficulty"
                    value="high"
                    className="text-primary"
                  />
                  <span className="text-sm">High</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress & Switch */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Interactive controls
            </CardTitle>
            <CardDescription>
              Progress bar y personalized switches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Project progress</Label>
              <Progress value={75} className="w-full" />
              <p className="text-sm text-muted-foreground">75% completed</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark mode</Label>
              <Switch id="dark-mode" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Alert Component */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Alerts and states</CardTitle>
            <CardDescription>
              Different types of alerts and badges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                ¡Configuración guardada exitosamente!
              </AlertDescription>
            </Alert>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Active</Badge>
              <Badge variant="secondary">Pending</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="outline">Draft</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Button Variants */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Button variants</CardTitle>
            <CardDescription>Different available button styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="default">
              Main
            </Button>
            <Button className="w-full" variant="secondary">
              Secondary
            </Button>
            <Button className="w-full bg-transparent" variant="outline">
              Outline
            </Button>
            <Button className="w-full" variant="ghost">
              Ghost
            </Button>
          </CardContent>
        </Card>

        {/* Tabs Component */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Tab navegation
            </CardTitle>
            <CardDescription>Customizable tabs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Home</TabsTrigger>
                <TabsTrigger value="analytics">Data</TabsTrigger>
                <TabsTrigger value="settings">Config</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  General dashboard view with main metrics.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Detailed analysis.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Settings and user preferences.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Footer Info */}
      <Card className="mt-12 border-dashed">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-medium">Color variables</p>
                <p>
                  --primary, --secondary, --background, --foreground, --border
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Border & Spacing</p>
                <p>--radius, --spacing, custom shadows y efectos</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Typography</p>
                <p>--font-family, font-weight, line-height personalizado</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">Special effects</p>
                <p>Gradients, box-shadows, border-styles personalizados</p>
              </div>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground">lorem bla bla</p>
            <Badge variant="outline" className="mt-2">
              Super theme system
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
